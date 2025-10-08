import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Leaf, AlertTriangle, CheckCircle2 } from "lucide-react";

interface ResultsProps {
  carbonFootprint: number;
  breakdown: {
    category: string;
    amount: number;
    percentage: number;
  }[];
  recommendations: string[];
  comparison: {
    average: number;
    status: 'good' | 'average' | 'high';
  };
}

const Results = ({ carbonFootprint, breakdown, recommendations, comparison }: ResultsProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-accent';
      case 'average': return 'text-secondary';
      case 'high': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle2 className="w-5 h-5" />;
      case 'average': return <TrendingDown className="w-5 h-5" />;
      case 'high': return <AlertTriangle className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Your Climate Impact Analysis
          </h2>
          <p className="text-lg text-muted-foreground">
            AI-powered insights based on your lifestyle data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Result */}
          <Card className="lg:col-span-2 shadow-glow border-primary/20">
            <CardHeader>
              <CardTitle>Annual Carbon Footprint</CardTitle>
              <CardDescription>Your estimated CO₂ emissions per year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-2">
                  {carbonFootprint.toFixed(2)}
                </div>
                <div className="text-xl text-muted-foreground">tons CO₂e / year</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Your Impact</span>
                  <span className="text-muted-foreground">{carbonFootprint.toFixed(2)} tons</span>
                </div>
                <Progress value={(carbonFootprint / comparison.average) * 100} className="h-3" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">National Average</span>
                  <span className="font-medium">{comparison.average} tons</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Card */}
          <Card className={`shadow-soft border-primary/20 ${getStatusColor(comparison.status)}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getStatusIcon(comparison.status)}
                Impact Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <Badge 
                  variant={comparison.status === 'good' ? 'default' : 'secondary'}
                  className="text-lg px-4 py-2"
                >
                  {comparison.status.toUpperCase()}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {comparison.status === 'good' 
                    ? "You're doing better than average! Keep it up." 
                    : comparison.status === 'average'
                    ? "You're at the average. There's room for improvement."
                    : "Your footprint is above average. Let's work on reducing it."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Breakdown */}
        <Card className="mb-8 shadow-soft border-primary/20">
          <CardHeader>
            <CardTitle>Emissions Breakdown</CardTitle>
            <CardDescription>Where your carbon footprint comes from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {breakdown.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium capitalize">{item.category}</span>
                    <span className="text-muted-foreground">
                      {item.amount.toFixed(2)} tons ({item.percentage}%)
                    </span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="shadow-glow border-accent/20 bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-accent" />
              AI-Powered Recommendations
            </CardTitle>
            <CardDescription>Personalized actions to reduce your environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-accent-foreground">{idx + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed pt-1">{rec}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Results;
