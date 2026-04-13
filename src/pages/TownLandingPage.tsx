import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowRight, Calendar, Star, Shield, Award, Clock, MapPin, Check, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScopeTierCard from "@/components/ScopeTierCard";
import ProcessStep from "@/components/ProcessStep";
import FAQItem from "@/components/FAQItem";
import PricingFormModal from "@/components/PricingFormModal";
import heroBathroom from "@/assets/hero-bathroom.jpg";

interface TownLandingPageProps {
  service: "bathroom" | "kitchen" | "basement";
  town: string;
}

const serviceData = {
  bathroom: {
    title: "Bathroom Remodeling",
    headline: "Done Right. On Schedule. Fully Permitted.",
    subheadline: "Entry-level bathrooms starting around $15,000. Licensed & insured. Clear scopes. No surprises.",
    tiers: [
      {
        tier: "refresh" as const,
        title: "Refresh Bathroom",
        priceRange: "$15K – $20K",
        description: "Basic updates to modernize your existing bathroom",
        features: [
          "New vanity and fixtures up to $2,500 allowance",
          "Paint and minor drywall repairs",
          "New toilet installation",
          "Updated lighting fixtures",
          "New mirrors and accessories",
          "Existing layout maintained",
        ],
        notIncluded: [
          "Tile replacement",
          "Plumbing relocation",
        ],
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
        notIncluded: [
          "Structural changes",
        ],
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
    ],
  },
  kitchen: {
    title: "Kitchen Remodeling",
    headline: "Done Right. On Schedule. Fully Permitted.",
    subheadline: "Entry-level kitchens starting around $25,000. Licensed & insured. Clear scopes. No surprises.",
    tiers: [
      {
        tier: "refresh" as const,
        title: "Kitchen Refresh",
        priceRange: "$25K – $35K",
        description: "Cabinet refacing and surface updates",
        features: [
          "Cabinet refacing or painting",
          "New countertops up to $3K allowance",
          "New sink and faucet",
          "Updated hardware",
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
          "All permits and inspections included",
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
          "Custom cabinetry",
          "Premium stone countertops",
          "High-end appliance package",
          "Custom lighting design",
          "Structural modifications if needed",
          "Extended warranty included",
        ],
      },
    ],
  },
  basement: {
    title: "Basement Remodeling",
    headline: "Done Right. On Schedule. Fully Permitted.",
    subheadline: "Basement finishing starting around $20,000. Licensed & insured. Clear scopes. No surprises.",
    tiers: [
      {
        tier: "refresh" as const,
        title: "Basic Finish",
        priceRange: "$20K – $30K",
        description: "Open space finishing for bonus living area",
        features: [
          "Drywall and paint",
          "Basic flooring (LVP up to $3/sq ft)",
          "Recessed lighting",
          "Egress window if required",
          "Basic electrical outlets",
          "Existing layout - no bathroom",
        ],
        notIncluded: [
          "Bathroom addition",
          "Wet bar",
        ],
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
          "Home theater setup",
          "Built-in cabinetry",
          "Premium finishes throughout",
          "Soundproofing options",
        ],
      },
    ],
  },
};

const processSteps = [
  {
    title: "Project Fit Call",
    description: "15-minute phone or video call to understand your vision, timeline, and budget. We'll tell you honestly if we're the right fit.",
  },
  {
    title: "On-Site Evaluation",
    description: "We visit your home to take measurements, assess existing conditions, and discuss detailed scope options.",
  },
  {
    title: "Selections + Proposal",
    description: "You'll receive a detailed scope document with selections, allowances, and transparent pricing. No hidden costs.",
  },
  {
    title: "Construction",
    description: "Our dedicated project manager keeps you informed daily. All work fully permitted with inspections coordinated.",
  },
  {
    title: "Final Walkthrough + Closeout",
    description: "We review every detail together, address any punch list items, and provide your warranty documentation.",
  },
];

const formatTownName = (slug: string): string => {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function TownLandingPage({ service, town }: TownLandingPageProps) {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const data = serviceData[service];
  const formattedTown = formatTownName(town);
  const serviceName = data.title.replace(" Remodeling", "");

  const faqs = [
    {
      question: `Do you pull permits in ${formattedTown}?`,
      answer: `Yes, absolutely. All our ${serviceName.toLowerCase()} remodeling projects in ${formattedTown} are fully permitted. We handle the entire permitting process with the ${formattedTown} building department and coordinate all required inspections.`,
    },
    {
      question: `How long does a ${serviceName.toLowerCase()} remodel take?`,
      answer: service === "bathroom" 
        ? "Most bathroom remodels take 4-6 weeks from demo to completion. The exact timeline depends on your scope tier and any custom selections."
        : service === "kitchen"
        ? "Kitchen remodels typically range from 8-12 weeks. We provide a detailed schedule before construction begins."
        : "Basement finishing usually takes 6-10 weeks depending on the scope, bathroom inclusion, and any structural work needed.",
    },
    {
      question: "What happens if selections exceed allowances?",
      answer: "All overages are discussed and approved in writing before we order materials. We never surprise you with unexpected costs. You'll know exactly what you're paying before any work begins.",
    },
    {
      question: "How far in advance are projects scheduled?",
      answer: "We typically book projects 2-4 months out. However, we recommend starting your planning process early, especially for larger projects. Contact us to get on our schedule.",
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept checks, credit cards, and bank transfers. Payment schedules are outlined in your contract - typically a deposit to start, progress payments, and final payment at completion.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBathroom})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>

        <div className="relative container-custom mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Serving {formattedTown}, NJ</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {data.title} in {formattedTown}, NJ{" "}
              <span className="block text-accent">{data.headline}</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="goldLarge" 
                size="xl"
                onClick={() => setIsPricingModalOpen(true)}
              >
                Get {serviceName} Pricing Range
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outlineWhite" 
                size="xl"
                asChild
              >
                <a href="tel:+17323478594">
                  <Calendar className="w-5 h-5" />
                  Book 15-Min Project Fit Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stack */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 from 150+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>NJ HIC #13VH12345</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Serving {formattedTown} & Somerset County</span>
            </div>
          </div>
        </div>
      </section>

      {/* Is This a Good Fit? */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Is This a Good Fit?
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We're not the right contractor for every project. Here's who we work best with:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What We Do */}
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h3 className="font-display text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  We're a Great Fit If...
                </h3>
                <ul className="space-y-4">
                  {[
                    `Budget of $${service === "bathroom" ? "15,000" : service === "kitchen" ? "25,000" : "20,000"}+ for quality work`,
                    "Timeline of 2-4 months to start",
                    "Single-family home (1980-2010 construction ideal)",
                    "Value clear communication and documentation",
                    "Want fully permitted work with warranties",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Don't Do */}
              <div className="bg-muted rounded-xl p-8 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Home className="w-6 h-6" />
                  Not Our Specialty
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Budget-only projects under minimum thresholds",
                    "Structural work without engineering (we can refer)",
                    "New construction or additions (coming 2026)",
                    "Commercial properties",
                    "Multi-family buildings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Tiers */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {data.title} Pricing Tiers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with clear scopes. Choose the tier that matches your vision and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.tiers.map((tier) => (
              <ScopeTierCard 
                key={tier.tier}
                {...tier}
                onGetPricing={() => setIsPricingModalOpen(true)}
              />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            * All prices are estimates based on typical Somerset County homes. Your actual price depends on your home's specific conditions and your selections. All overages discussed and approved in writing before ordering.
          </p>
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
                From initial call to final walkthrough, we keep you informed every step of the way.
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

      {/* Local Relevance */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Why {formattedTown} Homeowners Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-navy-light/50 rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-accent mb-4">
                  Local Expertise
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  We know {formattedTown}'s housing stock – from the split-levels built in the '70s to the colonials of the '90s. 
                  We've worked in hundreds of {formattedTown} homes and understand the common challenges.
                </p>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Familiar with {formattedTown} building codes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Established relationships with local inspectors
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Quick permit turnaround times
                  </li>
                </ul>
              </div>

              <div className="bg-navy-light/50 rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-accent mb-4">
                  Community Commitment
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  As a local company, our reputation in {formattedTown} means everything to us. 
                  We're not a big franchise – we're your neighbors who happen to be really good at remodeling.
                </p>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Many {formattedTown} references available
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Quick response for warranty items
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    We're just a short drive away
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Common questions from {formattedTown} homeowners
            </p>

            <div>
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your {formattedTown} {serviceName} Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get your personalized pricing range in 24 hours. No obligation, no pressure – just honest numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="goldLarge" 
              size="xl"
              onClick={() => setIsPricingModalOpen(true)}
            >
              Get {serviceName} Pricing Range
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outlineWhite" 
              size="xl"
              asChild
            >
              <a href="tel:+17323478594">
                <Calendar className="w-5 h-5" />
                Book Project Fit Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <PricingFormModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)}
        service={data.title}
        town={`${formattedTown}, NJ`}
      />
    </div>
  );
}
