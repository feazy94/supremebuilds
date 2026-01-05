import { Shield, Award, Clock, CheckCircle } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed & Insured", sublabel: "NJ License #13VH12345" },
  { icon: Award, label: "A+ BBB Rating", sublabel: "Accredited Business" },
  { icon: Clock, label: "10+ Years", sublabel: "Serving Somerset County" },
  { icon: CheckCircle, label: "150+ Reviews", sublabel: "4.9/5 Average Rating" },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {badges.map((badge) => (
        <div key={badge.label} className="flex items-center gap-3">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <badge.icon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <div className="font-semibold text-foreground text-sm">{badge.label}</div>
            <div className="text-xs text-muted-foreground">{badge.sublabel}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
