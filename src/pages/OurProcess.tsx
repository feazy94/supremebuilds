import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStep from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Ruler, Palette, HardHat, CheckCircle } from "lucide-react";

const detailedSteps = [
  {
    icon: FileText,
    title: "Project Fit Call",
    time: "15 minutes",
    description: "A quick phone or video call to understand your vision, timeline, and budget. We'll ask about your project scope, must-haves, and nice-to-haves. By the end, you'll know if we're the right fit – and we'll be honest if we're not.",
    whatYouGet: ["Honest fit assessment", "Ballpark budget range", "Timeline expectations", "Next steps if moving forward"],
  },
  {
    icon: Ruler,
    title: "On-Site Evaluation",
    time: "1-2 hours",
    description: "We visit your home to take detailed measurements, assess existing conditions, and discuss your options in person. This is where we identify any potential challenges and talk through solutions.",
    whatYouGet: ["Detailed measurements", "Condition assessment", "Scope discussion", "Preliminary layout ideas"],
  },
  {
    icon: Palette,
    title: "Selections + Proposal",
    time: "1-2 weeks",
    description: "We prepare a comprehensive proposal with clear scope, allowances for materials, and transparent pricing. For larger projects, this includes 3D renderings. No surprises – you'll know exactly what you're getting.",
    whatYouGet: ["Detailed scope document", "Material allowances explained", "Clear pricing breakdown", "3D renderings (full remodels)"],
  },
  {
    icon: HardHat,
    title: "Construction",
    time: "4-12 weeks (varies by project)",
    description: "Your dedicated project manager keeps you informed with daily updates. All work is fully permitted, and we coordinate all inspections. We protect your home, clean up daily, and minimize disruption to your life.",
    whatYouGet: ["Dedicated project manager", "Daily progress updates", "All permits and inspections", "Clean, protected worksite"],
  },
  {
    icon: CheckCircle,
    title: "Final Walkthrough + Closeout",
    time: "1-2 hours",
    description: "We walk through every detail together. Any punch list items are addressed promptly. You receive all warranty documentation, care instructions, and a final handoff. Your project is complete!",
    whatYouGet: ["Punch list completion", "2-year workmanship warranty", "Care & maintenance guide", "Project documentation"],
  },
];

export default function OurProcess() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Process</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            From first call to final walkthrough, here's exactly what to expect when you work with Supreme Builds.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            {detailedSteps.map((step, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7" />
                    </div>
                    {index < detailedSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-accent/30 mt-4" />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Step {index + 1}: {step.title}
                      </h2>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="bg-secondary rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-3">What You'll Get:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.whatYouGet.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            The first step is a simple 15-minute call. Let's see if we're the right fit for your project.
          </p>
          <Button variant="goldLarge" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
