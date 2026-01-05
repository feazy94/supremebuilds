interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      {/* Number and line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display font-bold text-xl flex-shrink-0">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-accent/30 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
