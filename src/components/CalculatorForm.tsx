import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CalculatorFormProps {
  onCalculate: (data: FormData) => void;
  isLoading: boolean;
}

export interface FormData {
  electricity: number;
  naturalGas: number;
  transportation: string;
  mileage: number;
  diet: string;
  waste: string;
  shopping: string;
}

const CalculatorForm = ({ onCalculate, isLoading }: CalculatorFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    electricity: 0,
    naturalGas: 0,
    transportation: "car",
    mileage: 0,
    diet: "mixed",
    waste: "moderate",
    shopping: "moderate",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.electricity < 0 || formData.naturalGas < 0 || formData.mileage < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter positive values for all numeric fields.",
        variant: "destructive",
      });
      return;
    }

    onCalculate(formData);
  };

  return (
    <section id="calculator" className="py-20 px-6">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Calculate Your Carbon Footprint
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI analyzes your lifestyle patterns to predict environmental impact
          </p>
        </div>

        <Card className="shadow-glow border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Lifestyle Assessment
            </CardTitle>
            <CardDescription>
              Provide details about your daily activities for accurate predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Energy Usage */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Energy Usage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="electricity">Monthly Electricity (kWh)</Label>
                    <Input
                      id="electricity"
                      type="number"
                      min="0"
                      value={formData.electricity}
                      onChange={(e) => setFormData({ ...formData, electricity: parseFloat(e.target.value) || 0 })}
                      placeholder="e.g., 300"
                      className="border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="naturalGas">Monthly Natural Gas (therms)</Label>
                    <Input
                      id="naturalGas"
                      type="number"
                      min="0"
                      value={formData.naturalGas}
                      onChange={(e) => setFormData({ ...formData, naturalGas: parseFloat(e.target.value) || 0 })}
                      placeholder="e.g., 50"
                      className="border-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Transportation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="transportation">Primary Transportation</Label>
                    <Select
                      value={formData.transportation}
                      onValueChange={(value) => setFormData({ ...formData, transportation: value })}
                    >
                      <SelectTrigger className="border-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="public">Public Transport</SelectItem>
                        <SelectItem value="bike">Bike/Walk</SelectItem>
                        <SelectItem value="electric">Electric Vehicle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mileage">Monthly Mileage</Label>
                    <Input
                      id="mileage"
                      type="number"
                      min="0"
                      value={formData.mileage}
                      onChange={(e) => setFormData({ ...formData, mileage: parseFloat(e.target.value) || 0 })}
                      placeholder="e.g., 500"
                      className="border-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Lifestyle Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="diet">Diet Type</Label>
                    <Select
                      value={formData.diet}
                      onValueChange={(value) => setFormData({ ...formData, diet: value })}
                    >
                      <SelectTrigger className="border-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="meat-heavy">Meat Heavy</SelectItem>
                        <SelectItem value="mixed">Mixed</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waste">Waste Production</Label>
                    <Select
                      value={formData.waste}
                      onValueChange={(value) => setFormData({ ...formData, waste: value })}
                    >
                      <SelectTrigger className="border-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low (Recycle/Compost)</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shopping">Shopping Habits</Label>
                    <Select
                      value={formData.shopping}
                      onValueChange={(value) => setFormData({ ...formData, shopping: value })}
                    >
                      <SelectTrigger className="border-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="frequent">Frequent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="hero"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4" />
                    Calculate Impact
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CalculatorForm;
