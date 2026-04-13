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
import kitchenRemodel from "@/assets/kitchen-remodel.jpg";

const tiers = [
  {
    tier: "refresh" as const,
    title: "Kitchen Refresh",
    priceRange: "$25K – $35K",
    description: "Cabinet refacing and surface updates",
    features: [
      "Cabinet refacing or painting",
      "New countertops up to $3K allowance",
      "New sink and faucet",
      "Updated hardware throughout",
      "Backsplash installation",
      "Existing layout maintained",
    ],
    notIncluded: [
      "New cabinets",
      "Appliance upgrades",
    ],
  },
  {
    tier: "full" as const,
    title: "Full Kitchen Remodel",
    priceRange: "$45K – $65K+",
    description: "New cabinets and layout optimization",
    features: [
      "New semi-custom cabinets",
      "Quartz or granite countertops",
      "All new appliances up to $5K allowance",
      "Updated electrical and lighting",
      "Island or peninsula options",
      "All permits and inspections",
    ],
    notIncluded: [
      "Structural wall removal",
    ],
    popular: true,
  },
  {
    tier: "premium" as const,
    title: "Luxury Kitchen",
    priceRange: "$80K+",
    description: "Custom cabinets and high-end finishes",
    features: [
      "Custom cabinetry to your specs",
      "Premium stone countertops",
      "High-end appliance package",
      "Custom lighting design",
      "Structural modifications if needed",
      "Extended warranty included",
    ],
  },
];

const processSteps = [
  { title: "Project Fit Call", description: "15-minute call to understand your kitchen vision, timeline, and budget." },
  { title: "On-Site Evaluation", description: "We measure your space and discuss detailed scope options." },
  { title: "Design + Proposal", description: "Detailed scope with 3D renderings, selections, and transparent pricing." },
  { title: "Construction", description: "8-12 week build with daily updates and dedicated project manager." },
  { title: "Final Walkthrough", description: "Review every detail and receive your warranty documentation." },
];

const faqs = [
  {
    question: "How long does a kitchen remodel take?",
    answer: "Kitchen remodels typically take 8-12 weeks from demo to completion. Refresh projects can be faster at 4-6 weeks. We provide a detailed schedule before starting.",
  },
  {
    question: "Can I stay in my home during the remodel?",
    answer: "Yes, most clients stay in their homes. We set up a temporary kitchen area and minimize disruption. We also contain dust and clean up daily.",
  },
  {
    question: "Do you provide 3D designs?",
    answer: "Yes! For full remodels and up, we provide 3D renderings so you can visualize your new kitchen before construction begins.",
  },
  {
    question: "What about appliances?",
    answer: "We include appliance allowances in our pricing. You choose the appliances you want, and if they exceed the allowance, we discuss the difference before ordering.",
  },
];

export default function KitchenRemodeling() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Kitchen Remodeling Somerset County NJ | Custom Kitchens from $25K | Supreme Builds";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Transform your kitchen with Supreme Builds. Custom cabinetry, quartz countertops, and modern designs starting at $25K. Licensed NJ contractor with transparent pricing. Get your quote today.");
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
          style={{ backgroundImage: `url(${kitchenRemodel})` }}
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
              <span className="text-white/90 text-sm font-medium">Top-Rated Kitchen Contractor</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kitchen Remodeling in{" "}
              <span className="text-accent">Somerset County, NJ</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Create the heart of your home. From refreshes starting at $25K to luxury custom kitchens. Licensed, insured, and committed to excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
                Get Kitchen Pricing Range
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlineWhite" size="xl" asChild>
                <a href="tel:+17323478594">
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
                The Kitchen You've Always <span className="text-accent">Wanted</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your kitchen is where meals are made, memories are created, and life happens. We design and build kitchens that work for how you live – beautiful, functional, and built to last.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom cabinet designs to maximize storage",
                  "Premium countertops and fixtures",
                  "Modern appliance integration",
                  "Lighting design for function and ambiance",
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
              <img src={kitchenRemodel} alt="Kitchen remodel" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Kitchen Remodeling Pricing Tiers</h2>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Kitchen Remodel Process</h2>
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Kitchen Remodeling FAQ</h2>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Dream Kitchen?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Get your personalized pricing range in 24 hours.</p>
          <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
            Get Kitchen Pricing Range
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <PricingFormModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} service="Kitchen Remodeling" />
    </div>
  );
}
