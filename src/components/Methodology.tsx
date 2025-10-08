import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, LineChart, Sparkles } from "lucide-react";
import dataVisual from "@/assets/data-visual.jpg";

const Methodology = () => {
  const mlConcepts = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Supervised Learning",
      description: "Our model is trained on thousands of real-world carbon footprint datasets, learning patterns between lifestyle choices and emissions."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Feature Engineering",
      description: "We extract meaningful features from energy usage, transportation, diet, and consumption patterns to create accurate predictions."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Regression Analysis",
      description: "Using advanced regression algorithms, we predict continuous carbon footprint values with high accuracy and confidence intervals."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Our AI generates personalized recommendations by analyzing your unique lifestyle profile using NLP techniques."
    }
  ];

  return (
    <section id="methodology" className="py-20 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            The Science Behind Our AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge machine learning techniques to combat climate change
          </p>
        </div>

        {/* Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-glow">
          <div 
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${dataVisual})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Machine Learning for Climate Action</h3>
              <p className="text-muted-foreground">
                Transforming data into actionable climate insights
              </p>
            </div>
          </div>
        </div>

        {/* ML Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mlConcepts.map((concept, idx) => (
            <Card 
              key={idx} 
              className="shadow-soft border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                    {concept.icon}
                  </div>
                  {concept.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {concept.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Details */}
        <Card className="shadow-glow border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader>
            <CardTitle>Model Architecture & Training</CardTitle>
            <CardDescription>Technical implementation details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Data Sources</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• EPA carbon emission databases</li>
                  <li>• Global lifestyle and consumption datasets</li>
                  <li>• Transportation and energy usage statistics</li>
                  <li>• Climate research publications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Algorithms Used</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gradient Boosting for predictions</li>
                  <li>• Neural networks for pattern recognition</li>
                  <li>• NLP transformers for recommendations</li>
                  <li>• Cross-validation for accuracy</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold mb-2 text-primary">Impact on SDG 13</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This AI solution directly contributes to <strong>SDG 13: Climate Action</strong> by empowering individuals 
                with knowledge about their environmental impact. By providing accurate predictions and actionable 
                recommendations, we enable users to make informed decisions that reduce greenhouse gas emissions. 
                Our model democratizes climate action by making complex environmental data accessible and actionable 
                for everyone.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Methodology;
