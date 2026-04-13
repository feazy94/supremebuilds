import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Star, Shield, Award, MapPin, Bath, ChefHat, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ProcessStep from "@/components/ProcessStep";
import PricingFormModal from "@/components/PricingFormModal";

interface CountyLandingPageProps {
  county: "somerset" | "middlesex";
}

const countyData = {
  somerset: {
    name: "Somerset County",
    metaTitle: "Home Remodeling Contractor in Somerset County, NJ | Supreme Builds",
    metaDescription: "Licensed general contractor serving Somerset County, NJ. Kitchen remodeling, bathroom renovation & basement finishing. Free estimates. (732) 347-8594.",
    towns: [
      { name: "Bridgewater", slug: "bridgewater" },
      { name: "Hillsborough", slug: "hillsborough" },
      { name: "Warren", slug: "warren" },
      { name: "Somerville", slug: "somerville" },
      { name: "Basking Ridge", slug: "basking-ridge" },
      { name: "Bernardsville", slug: "bernardsville" },
      { name: "Watchung", slug: "watchung" },
      { name: "Green Brook", slug: "green-brook" },
      { name: "Bound Brook", slug: "bound-brook" },
      { name: "Raritan", slug: "raritan" },
    ],
    description: "Somerset County homeowners trust Supreme Builds for quality remodeling projects. From colonial homes in Basking Ridge to ranches in Bridgewater, we understand the unique construction styles and building codes across the county.",
  },
  middlesex: {
    name: "Middlesex County",
    metaTitle: "Home Remodeling Contractor in Middlesex County, NJ | Supreme Builds",
    metaDescription: "Licensed general contractor serving Middlesex County, NJ. Kitchen remodeling, bathroom renovation & basement finishing. Free estimates. (732) 347-8594.",
    towns: [
      { name: "Edison", slug: "edison" },
      { name: "New Brunswick", slug: "new-brunswick" },
      { name: "Piscataway", slug: "piscataway" },
      { name: "Woodbridge", slug: "woodbridge" },
      { name: "South Brunswick", slug: "south-brunswick" },
      { name: "East Brunswick", slug: "east-brunswick" },
      { name: "Old Bridge", slug: "old-bridge" },
      { name: "Sayreville", slug: "sayreville" },
      { name: "Perth Amboy", slug: "perth-amboy" },
      { name: "Monroe", slug: "monroe" },
    ],
    description: "Middlesex County residents choose Supreme Builds for expert craftsmanship and transparent pricing. Whether you're in Edison, East Brunswick, or anywhere in between, we deliver fully permitted remodeling projects on time and on budget.",
  },
};

const services = [
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    price: "Starting at $15K",
    description: "From quick refreshes to full gut renovations and aging-in-place upgrades. Fully permitted with clear scopes.",
    href: "/bathroom-remodeling",
  },
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    price: "Starting at $25K",
    description: "Cabinet refacing, full remodels, and luxury kitchen transformations. Quality materials with transparent pricing.",
    href: "/kitchen-remodeling",
  },
  {
    icon: Home,
    title: "Basement Finishing",
    price: "Starting at $20K",
    description: "Transform your unfinished basement into livable space. Entertainment rooms, home offices, and in-law suites.",
    href: "/basement-remodeling",
  },
];

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

export default function CountyLandingPage({ county }: CountyLandingPageProps) {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const data = countyData[county];

  useEffect(() => {
    document.title = data.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", data.metaDescription);

    return () => {
      document.title = "Home Remodeling Contractor | Somerset County NJ | Supreme Builds";
      document.querySelector('meta[name="description"]')?.setAttribute("content", "Licensed general contractor serving Somerset & Middlesex County NJ. Kitchen remodeling, bathroom renovation & basement finishing. Supreme Builds Construction LLC.");
    };
  }, [data]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[70vh] flex items-center bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy-dark" />
        <div className="relative container-custom mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Serving {data.name}, NJ</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Home Remodeling Contractor in{" "}
              <span className="text-accent">{data.name}, NJ</span>
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Licensed & insured general contractor specializing in bathroom, kitchen, and basement remodeling. Transparent pricing. No surprises. Call{" "}
              <a href="tel:+17323478594" className="text-accent hover:underline font-semibold">(732) 347-8594</a>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="goldLarge"
                size="xl"
                onClick={() => setIsPricingModalOpen(true)}
              >
                Get Your Pricing Range
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
              <span>Serving All of {data.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Remodeling Services in {data.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From bathroom refreshes to full kitchen transformations and basement finishing — we handle it all with clear scopes, transparent pricing, and full permits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group bg-card rounded-xl p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-accent font-semibold mb-3">{service.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Towns We Serve */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Towns We Serve in {data.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {data.towns.map((town) => (
              <Link
                key={town.slug}
                to={`/bathroom-remodeling-${town.slug}-nj`}
                className="bg-card rounded-lg p-4 text-center border border-border hover:border-accent hover:shadow-md transition-all group"
              >
                <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                <span className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                  {town.name}, NJ
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why {data.name} Homeowners Trust Us
            </h2>
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-secondary">
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

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your {data.name} Remodeling Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Get a transparent pricing range for your project. No obligations. No surprises. Just honest numbers from a licensed contractor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="goldLarge"
              size="xl"
              onClick={() => setIsPricingModalOpen(true)}
            >
              Get Your Pricing Range
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outlineWhite" size="xl" asChild>
              <a href="tel:+17323478594">
                Call (732) 347-8594
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <PricingFormModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />
    </div>
  );
}
