import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScopeTierCardProps {
  tier: "refresh" | "full" | "premium";
  title: string;
  priceRange: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  onGetPricing: () => void;
}

export default function ScopeTierCard({ 
  tier, 
  title, 
  priceRange, 
  description, 
  features, 
  notIncluded = [],
  popular = false,
  onGetPricing 
}: ScopeTierCardProps) {
  return (
    <div className={`relative rounded-2xl p-8 ${popular ? "bg-primary text-primary-foreground shadow-2xl scale-105" : "bg-white border border-border shadow-elegant"}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`font-display text-2xl font-semibold mb-2 ${popular ? "" : "text-foreground"}`}>{title}</h3>
        <p className={`text-sm ${popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{description}</p>
      </div>

      <div className="mb-6">
        <span className={`font-display text-3xl font-bold ${popular ? "" : "text-foreground"}`}>{priceRange}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${popular ? "text-accent" : "text-green-600"}`} />
            <span className={`text-sm ${popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{feature}</span>
          </li>
        ))}
        {notIncluded.map((item, index) => (
          <li key={`not-${index}`} className="flex items-start gap-3">
            <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${popular ? "text-primary-foreground/50" : "text-muted-foreground/50"}`} />
            <span className={`text-sm line-through ${popular ? "text-primary-foreground/50" : "text-muted-foreground/50"}`}>{item}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={popular ? "gold" : "outline"}
        className="w-full"
        size="lg"
        onClick={onGetPricing}
      >
        Get Pricing
      </Button>
    </div>
  );
}
