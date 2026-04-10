import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ScopeTierCard from "@/components/ScopeTierCard";
import ProcessStep from "@/components/ProcessStep";
import FAQItem from "@/components/FAQItem";
import PricingFormModal from "@/components/PricingFormModal";
import homeAddition from "@/assets/home-addition.jpg";

const tiers = [
  {
    tier: "refresh" as const,
    title: "Bump-Out Addition",
    priceRange: "$30K – $50K",
    description: "Small room extensions up to 200 sq ft",
    features: [
      "Extend an existing room up to 200 sq ft",
      "Foundation and framing included",
      "Matching exterior siding and roofline",
      "Electrical and HVAC extensions",
      "Interior finishing and paint",
      "All permits and inspections",
    ],
    notIncluded: [
      "Plumbing additions",
      "Second-story work",
    ],
  },
  {
    tier: "full" as const,
    title: "Full Room Addition",
    priceRange: "$75K – $120K+",
    description: "New room built onto your home",
    features: [
      "Custom room addition 200–500 sq ft",
      "Full foundation and structural work",
      "Complete electrical, HVAC, and plumbing",
      "Seamless interior integration",
      "Exterior matching and landscaping repair",
      "All permits and inspections",
    ],
    notIncluded: [
      "Second-story additions",
    ],
    popular: true,
  },
  {
    tier: "premium" as const,
    title: "Second Story Addition",
    priceRange: "$150K+",
    description: "Add an entire level to your home",
    features: [
      "Full second story construction",
      "Structural engineering and reinforcement",
      "Multiple bedrooms and bathrooms",
      "New staircase design and build",
      "Complete HVAC system upgrade",
      "Architectural design included",
    ],
  },
];

const processSteps = [
  { title: "Project Fit Call", description: "15-minute call to discuss your addition goals, timeline, and budget range." },
  { title: "On-Site Evaluation", description: "We assess your property, review zoning requirements, and discuss design options." },
  { title: "Design + Proposal", description: "Architectural plans, 3D renderings, and transparent pricing with detailed scope." },
  { title: "Construction", description: "12-20 week build with daily updates and a dedicated project manager." },
  { title: "Final Walkthrough", description: "Inspect every detail and receive your warranty documentation." },
];

const faqs = [
  {
    question: "How long does a home addition take?",
    answer: "Timelines vary by scope. Bump-out additions take 8-12 weeks, full room additions 12-16 weeks, and second-story additions 16-24 weeks. We provide a detailed schedule before starting.",
  },
  {
    question: "Do I need permits for a home addition?",
    answer: "Yes, all home additions require building permits. We handle the entire permit process, including architectural plans, structural engineering, and all municipal inspections.",
  },
  {
    question: "Can I stay in my home during construction?",
    answer: "For most additions, yes. We create barriers to minimize dust and disruption. For second-story additions, there may be brief periods where temporary relocation is recommended.",
  },
  {
    question: "Will the addition match my existing home?",
    answer: "Absolutely. We carefully match exterior siding, roofing, and trim so the addition looks like it was always part of your home. Interior finishes are seamlessly integrated as well.",
  },
];

export default function HomeAdditions() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Home Addition Contractors in Somerset County, NJ | Supreme Builds";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Room additions, second stories & home expansions in Somerset & Middlesex County NJ. Licensed & insured. Supreme Builds. (732) 347-8594.");
    return () => {
      document.title = "Home Remodeling Contractor | Somerset County NJ | Supreme Builds";
      document.querySelector('meta[name="description"]')?.setAttribute("content", "Licensed general contractor serving Somerset & Middlesex County NJ. Kitchen remodeling, bathroom renovation & basement finishing. Supreme Builds Construction LLC.");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homeAddition})` }}
        >
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
              <span className="text-white/90 text-sm font-medium">Licensed Home Addition Contractor</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Home Additions in{" "}
              <span className="text-accent">Somerset County, NJ</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Need more space? From bump-out extensions to full second stories. Licensed, insured, and built to seamlessly blend with your existing home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
                Get Addition Pricing Range
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
                Expand Your Home, <span className="text-accent">Your Way</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need an extra bedroom, a larger kitchen, or an entirely new level, we design and build additions that feel like they've always been part of your home. No cookie-cutter solutions — every project is custom.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom architectural design included",
                  "Seamless integration with existing structure",
                  "Full permit handling and inspections",
                  "Structural engineering and foundation work",
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
              <img src={homeAddition} alt="Home addition project in Somerset County NJ" className="rounded-xl shadow-2xl" loading="lazy" width={1280} height={720} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Home Addition Pricing Tiers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing. Choose the scope that matches your vision.</p>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Home Addition Process</h2>
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Home Addition FAQ</h2>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Home?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Get your personalized pricing range in 24 hours.</p>
          <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
            Get Addition Pricing Range
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <PricingFormModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} service="Home Addition" />
    </div>
  );
}
