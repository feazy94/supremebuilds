import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
  projectType?: string;
}

export default function TestimonialCard({ name, location, text, rating = 5, projectType }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-elegant border border-border hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-accent font-display font-bold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
          {projectType && (
            <span className="inline-block mt-1 text-xs bg-secondary px-2 py-0.5 rounded-full">{projectType}</span>
          )}
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      <div className="relative">
        <Quote className="absolute -top-2 -left-1 w-6 h-6 text-accent/20" />
        <p className="text-muted-foreground leading-relaxed pl-4">{text}</p>
      </div>
    </div>
  );
}
