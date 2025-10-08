import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formData } = await req.json();
    console.log('Received form data:', formData);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      throw new Error('AI service not configured');
    }

    // Create a detailed prompt for the AI
    const systemPrompt = `You are an expert climate scientist and environmental analyst. Your role is to analyze lifestyle data and predict carbon footprints with high accuracy. You must provide:
1. A precise carbon footprint estimate in tons CO2e per year
2. A detailed breakdown by category (energy, transportation, diet, waste, shopping)
3. 5-7 personalized, actionable recommendations to reduce emissions
4. A comparison to the national average (16 tons CO2e/year in the US)

Respond ONLY with valid JSON in this exact format:
{
  "carbonFootprint": number,
  "breakdown": [
    {"category": string, "amount": number, "percentage": number}
  ],
  "recommendations": [string],
  "comparison": {
    "average": 16,
    "status": "good" | "average" | "high"
  }
}`;

    const userPrompt = `Analyze this lifestyle data and predict the carbon footprint:

Energy Usage:
- Monthly Electricity: ${formData.electricity} kWh
- Monthly Natural Gas: ${formData.naturalGas} therms

Transportation:
- Primary Mode: ${formData.transportation}
- Monthly Mileage: ${formData.mileage} miles

Lifestyle:
- Diet: ${formData.diet}
- Waste Production: ${formData.waste}
- Shopping Habits: ${formData.shopping}

Calculate the total annual carbon footprint, break it down by category, and provide personalized recommendations. Consider:
- Electricity: ~0.92 lbs CO2/kWh
- Natural gas: ~11.7 lbs CO2/therm
- Car: ~0.79 lbs CO2/mile
- Public transit: ~0.14 lbs CO2/mile
- Electric vehicle: ~0.24 lbs CO2/mile
- Meat-heavy diet: ~3.3 tons CO2/year
- Mixed diet: ~2.5 tons CO2/year
- Vegetarian: ~1.7 tons CO2/year
- Vegan: ~1.5 tons CO2/year

Return only the JSON with accurate calculations.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please contact support.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error('AI prediction failed');
    }

    const data = await response.json();
    console.log('AI response received');
    
    const content = data.choices[0].message.content;
    console.log('AI content:', content);
    
    // Parse the JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('No JSON found in response:', content);
      throw new Error('Invalid AI response format');
    }
    
    const result = JSON.parse(jsonMatch[0]);
    console.log('Parsed result:', result);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in predict-climate-impact function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        details: 'Please check your input and try again'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
