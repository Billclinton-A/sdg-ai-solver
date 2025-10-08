import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-earth.jpg";
import dataVisual from "@/assets/data-visual.jpg";

const slides = [
  {
    id: 1,
    title: "AI Climate Impact Predictor",
    subtitle: "Empowering Climate Action Through Machine Learning",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
          <img src={heroImage} alt="Earth from space" className="w-full h-full object-cover" />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            AI Climate Impact Predictor
          </h1>
          <p className="text-2xl text-primary font-semibold">SDG 13: Climate Action</p>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Harnessing the Power of Machine Learning to Combat Climate Change
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "Climate Crisis: A Global Emergency",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h3 className="text-3xl font-bold text-destructive mb-2">1.5°C</h3>
              <p className="text-muted-foreground">Global temperature increase threshold at risk</p>
            </div>
            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h3 className="text-3xl font-bold text-destructive mb-2">50B+</h3>
              <p className="text-muted-foreground">Tons of CO₂ emissions annually</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h3 className="text-3xl font-bold text-destructive mb-2">70%</h3>
              <p className="text-muted-foreground">People unaware of their carbon footprint</p>
            </div>
            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h3 className="text-3xl font-bold text-destructive mb-2">2030</h3>
              <p className="text-muted-foreground">Critical deadline for climate action</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <p className="text-lg leading-relaxed">
            <span className="text-primary font-semibold">The Challenge:</span> Most individuals lack awareness 
            of their environmental impact and personalized guidance to reduce their carbon footprint effectively.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Our Solution",
    subtitle: "AI-Powered Personal Climate Action",
    content: (
      <div className="space-y-8">
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
          <img src={dataVisual} alt="AI visualization" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">Machine Learning Meets Climate Action</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-hero rounded-lg border border-primary/20 hover-scale">
            <h4 className="text-xl font-bold mb-3">🎯 Personalized Analysis</h4>
            <p className="text-sm">AI-driven carbon footprint calculation based on individual lifestyle choices</p>
          </div>
          <div className="p-6 bg-gradient-hero rounded-lg border border-primary/20 hover-scale">
            <h4 className="text-xl font-bold mb-3">🤖 ML Predictions</h4>
            <p className="text-sm">Advanced algorithms provide accurate emissions estimates across multiple categories</p>
          </div>
          <div className="p-6 bg-gradient-hero rounded-lg border border-primary/20 hover-scale">
            <h4 className="text-xl font-bold mb-3">💡 Smart Recommendations</h4>
            <p className="text-sm">NLP-powered insights deliver actionable steps to reduce environmental impact</p>
          </div>
        </div>

        <div className="p-6 bg-card border border-border rounded-lg">
          <p className="text-lg font-semibold text-primary mb-2">Our Approach</p>
          <p className="text-muted-foreground">
            We combine supervised learning, regression analysis, and natural language processing to transform 
            complex environmental data into clear, actionable insights that empower individuals to make a difference.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "How It Works",
    subtitle: "The Machine Learning Pipeline",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Data Collection</h4>
              <p className="text-muted-foreground">User inputs lifestyle data: energy usage, transportation, diet, and consumption patterns</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Feature Engineering</h4>
              <p className="text-muted-foreground">AI processes raw data into meaningful features using proven emission factors from EPA and IPCC</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Supervised Learning Model</h4>
              <p className="text-muted-foreground">Regression algorithms predict carbon emissions with high accuracy across multiple categories</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">NLP-Powered Insights</h4>
              <p className="text-muted-foreground">Natural Language Processing generates personalized, actionable recommendations</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              5
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Visualization & Action</h4>
              <p className="text-muted-foreground">Clear charts and comparisons empower users to understand and reduce their impact</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "ML Concepts in Action",
    subtitle: "Week 2 Technologies Applied",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
          <h4 className="text-2xl font-bold mb-3 text-primary">Supervised Learning</h4>
          <p className="text-muted-foreground mb-4">
            Trained on EPA and IPCC emission factors to predict carbon footprints from labeled lifestyle data
          </p>
          <ul className="space-y-2 text-sm">
            <li>✓ Regression for continuous emission values</li>
            <li>✓ Training on verified climate research</li>
            <li>✓ Validated against real-world data</li>
          </ul>
        </div>

        <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-lg">
          <h4 className="text-2xl font-bold mb-3 text-accent">Feature Engineering</h4>
          <p className="text-muted-foreground mb-4">
            Transforms raw user inputs into meaningful features for accurate predictions
          </p>
          <ul className="space-y-2 text-sm">
            <li>✓ Energy consumption patterns</li>
            <li>✓ Transportation impact factors</li>
            <li>✓ Lifestyle behavior encoding</li>
          </ul>
        </div>

        <div className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-lg">
          <h4 className="text-2xl font-bold mb-3 text-secondary">Natural Language Processing</h4>
          <p className="text-muted-foreground mb-4">
            Generates personalized, human-readable recommendations from complex data
          </p>
          <ul className="space-y-2 text-sm">
            <li>✓ Context-aware suggestion generation</li>
            <li>✓ Personalized action items</li>
            <li>✓ Clear, actionable language</li>
          </ul>
        </div>

        <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
          <h4 className="text-2xl font-bold mb-3 text-primary">Regression Analysis</h4>
          <p className="text-muted-foreground mb-4">
            Multiple regression models for accurate emission predictions across categories
          </p>
          <ul className="space-y-2 text-sm">
            <li>✓ Category-specific predictions</li>
            <li>✓ Weighted impact calculations</li>
            <li>✓ Statistical validation</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Impact & SDG 13",
    subtitle: "Contributing to Climate Action",
    content: (
      <div className="space-y-8">
        <div className="text-center p-6 bg-gradient-hero rounded-lg border border-primary/20">
          <h3 className="text-3xl font-bold mb-4">UN Sustainable Development Goal 13</h3>
          <p className="text-xl text-muted-foreground">Take urgent action to combat climate change and its impacts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <div className="text-4xl font-bold text-primary mb-2">13.3</div>
            <p className="text-sm text-muted-foreground">
              Improve education and awareness on climate change mitigation
            </p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <div className="text-4xl font-bold text-accent mb-2">13.2</div>
            <p className="text-sm text-muted-foreground">
              Integrate climate measures into policies and planning
            </p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <div className="text-4xl font-bold text-secondary mb-2">13.1</div>
            <p className="text-sm text-muted-foreground">
              Strengthen resilience to climate-related hazards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-bold text-lg mb-3">Individual Empowerment</h4>
            <p className="text-muted-foreground">
              Provides personalized insights enabling individuals to make informed decisions and reduce their carbon footprint
            </p>
          </div>
          <div className="p-6 bg-accent/5 border border-accent/20 rounded-lg">
            <h4 className="font-bold text-lg mb-3">Scalable Solution</h4>
            <p className="text-muted-foreground">
              AI-driven approach can scale globally, making climate action accessible to millions of people
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Call to Action",
    subtitle: "Join the Climate Revolution",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Together, We Can Make a Difference
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            Every action counts. Start your journey to a sustainable future today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="text-center p-6 bg-card border border-border rounded-lg hover-scale">
            <div className="text-4xl mb-3">🌍</div>
            <h4 className="font-bold mb-2">Calculate Impact</h4>
            <p className="text-sm text-muted-foreground">Understand your carbon footprint</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg hover-scale">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold mb-2">Get Insights</h4>
            <p className="text-sm text-muted-foreground">AI-powered recommendations</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg hover-scale">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="font-bold mb-2">Take Action</h4>
            <p className="text-sm text-muted-foreground">Reduce your emissions</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button size="xl" className="text-lg px-12">
              Try the Calculator Now
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground text-center">
            Built with Machine Learning • Powered by SDG 13 • Open Source
          </p>
        </div>
      </div>
    ),
  },
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <Home className="w-4 h-4 mr-2" />
            Back to App
          </Button>
        </Link>
        <div className="text-sm text-muted-foreground">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </nav>

      {/* Slide Content */}
      <main className="flex-1 container py-12 px-6">
        <div className="max-w-6xl mx-auto h-full">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h2>
            <p className="text-xl text-muted-foreground">{slides[currentSlide].subtitle}</p>
          </div>
          
          <div className="min-h-[500px]">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="border-t border-border px-6 py-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default PitchDeck;
