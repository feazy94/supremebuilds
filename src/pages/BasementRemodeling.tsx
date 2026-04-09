import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ScopeTierCard from "@/components/ScopeTierCard";
import ProcessStep from "@/components/ProcessStep";
import FAQItem from "@/components/FAQItem";
import PricingFormModal from "@/components/PricingFormModal";
import basementRemodel from "@/assets/basement-remodel.jpg";

const tiers = [
  {
    tier: "refresh" as const,
    title: "Basic Finish",
    priceRange: "$20K – $30K",
    description: "Open space finishing for bonus living area",
    features: [
      "Drywall and professional paint",
      "LVP flooring (up to $3/sq ft)",
      "Recessed lighting throughout",
      "Egress window if required by code",
      "Basic electrical outlets and switches",
      "Open layout - no bathroom",
    ],
    notIncluded: ["Bathroom addition", "Wet bar"],
  },
  {
    tier: "full" as const,
    title: "Complete Basement",
    priceRange: "$40K – $60K+",
    description: "Finished basement with bathroom",
    features: [
      "Everything in Basic Finish",
      "Half or full bathroom",
      "Separate rooms/spaces",
      "Premium flooring options",
      "Custom lighting design",
      "All permits and inspections",
    ],
    popular: true,
  },
  {
    tier: "premium" as const,
    title: "Luxury Entertainment",
    priceRange: "$75K+",
    description: "High-end entertainment or in-law suite",
    features: [
      "Everything in Complete tier",
      "Wet bar or kitchenette",
      "Home theater setup ready",
      "Built-in cabinetry",
      "Premium finishes throughout",
      "Soundproofing options",
    ],
  },
];

const processSteps = [
  { title: "Project Fit Call", description: "15-minute call to understand your basement vision." },
  { title: "On-Site Evaluation", description: "Assess moisture, ceiling height, and egress requirements." },
  { title: "Design + Proposal", description: "Layout options with transparent pricing." },
  { title: "Construction", description: "6-10 week build with daily updates." },
  { title: "Final Walkthrough", description: "Review and receive your warranty documentation." },
];

const faqs = [
  {
    question: "Do I need an egress window?",
    answer: "If your basement will have a bedroom, building code requires an egress window for emergency exit. We handle all code requirements and permitting.",
  },
  {
    question: "What about moisture issues?",
    answer: "We assess moisture during our evaluation. If remediation is needed, we can recommend solutions before finishing. We won't build over problems.",
  },
  {
    question: "How long does basement finishing take?",
    answer: "Basic finishes take 6-8 weeks. Complete basements with bathrooms take 8-12 weeks. We provide a detailed schedule upfront.",
  },
  {
    question: "Can you add a bathroom in the basement?",
    answer: "Yes! We regularly add half and full bathrooms to basements. This may require a sewage ejector pump depending on your home's plumbing.",
  },
];

export default function BasementRemodeling() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${basementRemodel})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="relative container-custom mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">Top-Rated Basement Contractor</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Basement Remodeling in <span className="text-accent">Somerset County, NJ</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Unlock your home's hidden potential. Entertainment spaces, home offices, in-law suites starting at $20K.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
                Get Basement Pricing Range
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlineWhite" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Book 15-Min Fit Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary border-b border-border">
        <div className="container-custom mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transform Unused Space Into <span className="text-accent">Living Space</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your basement has incredible potential. Whether you need a home office, entertainment area, guest suite, or space for the kids, we turn unfinished basements into your favorite room.
              </p>
              <ul className="space-y-4">
                {[
                  "Moisture assessment before any work",
                  "Code-compliant egress solutions",
                  "Bathroom additions available",
                  "Soundproofing for entertainment spaces",
                  "2-year workmanship warranty",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={basementRemodel} alt="Basement remodel" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Basement Finishing Pricing Tiers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing. Choose the tier that matches your vision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <ScopeTierCard key={tier.tier} {...tier} onGetPricing={() => setIsPricingModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Basement Finishing Process</h2>
            </div>
            <div>
              {processSteps.map((step, index) => (
                <ProcessStep key={index} number={index + 1} title={step.title} description={step.description} isLast={index === processSteps.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Basement Finishing FAQ</h2>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Finish Your Basement?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Get your personalized pricing range in 24 hours.</p>
          <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
            Get Basement Pricing Range
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <PricingFormModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} service="Basement Remodeling" />
    </div>
  );
}
