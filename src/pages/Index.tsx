import { useState } from "react";
import Hero from "@/components/Hero";
import CalculatorForm, { FormData } from "@/components/CalculatorForm";
import Results from "@/components/Results";
import Methodology from "@/components/Methodology";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    carbonFootprint: number;
    breakdown: Array<{ category: string; amount: number; percentage: number }>;
    recommendations: string[];
    comparison: { average: number; status: 'good' | 'average' | 'high' };
  } | null>(null);

  const handleCalculate = async (formData: FormData) => {
    setIsLoading(true);
    try {
      console.log('Sending data to edge function:', formData);
      
      const { data, error } = await supabase.functions.invoke('predict-climate-impact', {
        body: { formData }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      console.log('Received prediction:', data);
      setResults(data);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.querySelector('section[class*="bg-gradient-hero"]');
        resultsElement?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      toast({
        title: "Analysis Complete",
        description: "Your carbon footprint has been calculated using AI.",
      });
    } catch (error) {
      console.error('Calculation error:', error);
      toast({
        title: "Calculation Failed",
        description: error instanceof Error ? error.message : "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CalculatorForm onCalculate={handleCalculate} isLoading={isLoading} />
      {results && <Results {...results} />}
      <Methodology />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            Built with AI for SDG 13: Climate Action | Powered by Machine Learning
          </p>
          <p className="mt-2">
            Data sources: EPA, IPCC, Climate Research Publications
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
