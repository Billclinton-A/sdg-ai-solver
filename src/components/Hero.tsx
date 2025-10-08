import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroEarth from "@/assets/hero-earth.jpg";

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroEarth})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 mb-8 shadow-soft">
          <Leaf className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">SDG 13: Climate Action</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary leading-tight">
          AI-Powered Climate Impact Predictor
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Harness machine learning to understand and reduce your carbon footprint. 
          Get personalized insights and actionable recommendations for a sustainable future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="xl" 
            variant="hero"
            onClick={scrollToCalculator}
            className="group"
          >
            Calculate Your Impact
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="xl" 
            variant="outline"
            className="backdrop-blur-sm bg-card/50 hover:bg-card/80"
            onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "1.5°C", label: "Target Temperature Limit" },
            { value: "50%", label: "Emissions Reduction Needed by 2030" },
            { value: "AI", label: "Powered Climate Solutions" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 shadow-soft"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
