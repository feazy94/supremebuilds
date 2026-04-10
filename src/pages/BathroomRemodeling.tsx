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
import TestimonialCard from "@/components/TestimonialCard";
import PricingFormModal from "@/components/PricingFormModal";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import beforeAfterBathroom from "@/assets/before-after-bathroom.jpg";

const tiers = [
  {
    tier: "refresh" as const,
    title: "Refresh Bathroom",
    priceRange: "$12K – $20K",
    description: "Basic updates to modernize your existing bathroom",
    features: [
      "New vanity and fixtures up to $2,500 allowance",
      "Paint and minor drywall repairs",
      "New toilet installation",
      "Updated lighting fixtures",
      "New mirrors and accessories",
      "Existing layout maintained",
    ],
    notIncluded: ["Tile replacement", "Plumbing relocation"],
  },
  {
    tier: "full" as const,
    title: "Full Gut Bathroom",
    priceRange: "$22K – $32K+",
    description: "Complete demo and rebuild within existing footprint",
    features: [
      "Complete demolition to studs",
      "New tile floor and walls up to $4K allowance",
      "New vanity, toilet, and fixtures",
      "Updated plumbing within existing locations",
      "New electrical and lighting",
      "Exhaust fan upgrade",
      "All permits and inspections included",
    ],
    notIncluded: ["Structural changes"],
    popular: true,
  },
  {
    tier: "premium" as const,
    title: "Premium / Aging-in-Place",
    priceRange: "$35K+",
    description: "High-end materials with accessibility features",
    features: [
      "Everything in Full Gut tier",
      "Premium tile and fixtures up to $8K allowance",
      "Grab bars and safety features",
      "Curbless shower options",
      "Heated floors available",
      "Custom vanity options",
      "Extended warranty included",
    ],
  },
];

const processSteps = [
  {
    title: "Project Fit Call",
    description:
      "15-minute phone or video call to understand your vision, timeline, and budget. We'll tell you honestly if we're the right fit.",
  },
  {
    title: "On-Site Evaluation",
    description:
      "We visit your home to take measurements, assess existing conditions, and discuss detailed scope options.",
  },
  {
    title: "Selections + Proposal",
    description:
      "You'll receive a detailed scope document with selections, allowances, and transparent pricing. No hidden costs.",
  },
  {
    title: "Construction",
    description:
      "Our dedicated project manager keeps you informed daily. All work fully permitted with inspections coordinated.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We review every detail together, address any punch list items, and provide your warranty documentation.",
  },
];

const faqs = [
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "Most bathroom remodels take 3-6 weeks from demolition to completion. Refresh projects can be completed in 2-3 weeks. We provide a detailed schedule before starting and keep you updated daily.",
  },
  {
    question: "Do you handle all the permits?",
    answer:
      "Yes! We pull all required permits and coordinate all inspections. You never have to visit the building department or wait around for an inspector – that's our job.",
  },
  {
    question: "What if I want to change something during construction?",
    answer:
      "Changes happen, and we have a clear process for them. All change orders are documented in writing with exact pricing before any additional work begins. No surprises.",
  },
  {
    question: "What does 'allowance' mean in your pricing?",
    answer:
      "Allowances are budgets for finish materials like tile, fixtures, and vanities. If you select items over the allowance, we discuss the difference before ordering. If you select less, we credit you back.",
  },
  {
    question: "Can you work with my designer or architect?",
    answer:
      "Absolutely. We work well with design professionals and can build from their plans. We also offer design assistance if you don't have a designer.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Bridgewater, NJ",
    text: "Our master bath went from 1990s brass to a spa-like retreat. The team was professional, clean, and finished exactly on schedule.",
    projectType: "Full Gut Bathroom",
  },
  {
    name: "David K.",
    location: "Warren, NJ",
    text: "We needed an aging-in-place bathroom for my father-in-law. Supreme Builds understood exactly what we needed and delivered a beautiful, functional space.",
    projectType: "Premium Bathroom",
  },
];

export default function BathroomRemodeling() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Bathroom Remodeling Somerset County NJ | Starting at $15K | Supreme Builds";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Expert bathroom remodeling in Somerset County, NJ. From quick refreshes at $15K to luxury spa bathrooms. Fully licensed, transparent pricing, 2-year warranty. Get your free pricing range today.");
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBathroom})` }}>
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
              <span className="text-white/90 text-sm font-medium">Top-Rated in Somerset County</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bathroom Remodeling in <span className="text-accent">Somerset County, NJ</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              From refreshes starting at $15K to full gut renovations. Licensed, insured, and committed to transparent
              pricing with no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
                Get Bathroom Pricing Range
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

      {/* Trust Badges */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container-custom mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bathroom Remodeling Done <span className="text-accent">Right</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your bathroom should be more than functional – it should be a retreat. Whether you're looking for a
                quick refresh or a complete transformation, we deliver quality craftsmanship with clear communication
                every step of the way.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Clear scope documents with no hidden costs",
                  "Allowance-based pricing for flexibility in selections",
                  "All permits pulled and inspections coordinated",
                  "Dedicated project manager for your job",
                  "2-year workmanship warranty included",
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
              <img
                src={beforeAfterBathroom}
                alt="Before and after bathroom remodel"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope Tiers */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bathroom Remodeling Pricing Tiers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with clear scopes. Choose the tier that matches your vision and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <ScopeTierCard key={tier.tier} {...tier} onGetPricing={() => setIsPricingModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Simple 5-Step Process
              </h2>
              <p className="text-muted-foreground">
                From initial call to final walkthrough, we keep you informed every step.
              </p>
            </div>

            <div>
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Bathroom Remodeling FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Common questions about our bathroom remodeling services
            </p>

            <div>
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Serving All of Somerset County
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Local pages for bathroom remodeling in your town
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Bridgewater", "Hillsborough", "Warren", "Somerville", "Basking Ridge"].map((town) => (
              <Link
                key={town}
                to={`/bathroom-remodeling-${town.toLowerCase().replace(" ", "-")}-nj`}
                className="bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-accent hover:text-accent-foreground transition-all font-medium"
              >
                {town}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Dream Bathroom?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get your personalized pricing range in 24 hours. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
              Get Bathroom Pricing Range
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <PricingFormModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        service="Bathroom Remodeling"
      />
    </div>
  );
}
