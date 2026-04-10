import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Phone, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import TestimonialCard from "@/components/TestimonialCard";
import PricingFormModal from "@/components/PricingFormModal";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import kitchenRemodel from "@/assets/kitchen-remodel.jpg";
import basementRemodel from "@/assets/basement-remodel.jpg";
import beforeAfterBathroom from "@/assets/before-after-bathroom.jpg";

const services = [
  {
    title: "Bathroom Remodeling",
    description:
      "Transform your bathroom into a spa-like retreat. From refreshes starting at $12K to full gut renovations.",
    image: heroBathroom,
    href: "/bathroom-remodeling",
    price: "Starting at $12,000",
  },
  {
    title: "Kitchen Remodeling",
    description: "Create the heart of your home with modern kitchens designed for how you live and entertain.",
    image: kitchenRemodel,
    href: "/kitchen-remodeling",
    price: "Starting at $25,000",
  },
  {
    title: "Basement Remodeling",
    description: "Unlock your home's hidden potential. Entertainment spaces, home offices, and in-law suites.",
    image: basementRemodel,
    href: "/basement-remodeling",
    price: "Starting at $20,000",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Bridgewater, NJ",
    text: "Supreme Builds transformed our outdated bathroom into a stunning modern space. The team was professional, on schedule, and the result exceeded our expectations.",
    projectType: "Bathroom Remodel",
  },
  {
    name: "Michael T.",
    location: "Warren, NJ",
    text: "We had high standards for our kitchen renovation and Supreme Builds delivered. Their attention to detail and communication throughout was exceptional.",
    projectType: "Kitchen Remodel",
  },
  {
    name: "Jennifer L.",
    location: "Hillsborough, NJ",
    text: "Our basement went from an unused storage area to our favorite room in the house. The whole process was smooth and transparent.",
    projectType: "Basement Remodel",
  },
];

const towns = [
  "Bridgewater",
  "Hillsborough",
  "Warren",
  "Somerville",
  "Basking Ridge",
  "Bernardsville",
  "Watchung",
  "Green Brook",
  "Bound Brook",
  "Raritan",
  "Test",
];

export default function Index() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  

  useEffect(() => {
    document.title = "Home Remodeling Contractor | Somerset County NJ | Supreme Builds";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Licensed general contractor serving Somerset & Middlesex County NJ. Kitchen remodeling, bathroom renovation & basement finishing. Supreme Builds Construction LLC.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Supreme Builds Construction LLC",
      "url": "https://supremebuilds.co",
      "telephone": "(732) 347-8594",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "81 S 15th Ave",
        "addressLocality": "Manville",
        "addressRegion": "NJ",
        "postalCode": "08835",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "County", "name": "Somerset County, NJ" },
        { "@type": "County", "name": "Middlesex County, NJ" }
      ],
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Finishing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Additions" } }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById("local-business-jsonld")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBathroom})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="relative container-custom mx-auto px-4 py-20">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">4.9/5 from 150+ Reviews</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Premier Home Remodeling in <span className="text-accent">Somerset County</span>
            </h1>

            <p
              className="text-xl text-white/80 mb-8 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Bathroom, kitchen, and basement transformations done right. Licensed & insured. Clear scopes. No
              surprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
                Get Pricing Range
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlineWhite" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Book 15-Min Fit Call
                </a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div>
                <div className="text-3xl font-display font-bold text-accent">10+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent">500+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent">100%</div>
                <div className="text-white/70 text-sm">Permitted Work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone CTA */}
        <a
          href="tel:+17323478594"
          className="fixed bottom-6 right-6 z-40 bg-accent hover:brightness-90 text-accent-foreground rounded-full p-4 shadow-lg md:hidden transition-all"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container-custom mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Remodeling Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home transformation services with transparent pricing, clear scopes, and expert
              craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.href}
                to={service.href}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-accent text-sm font-semibold mb-2">{service.price}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-accent font-semibold text-sm">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                See the <span className="text-accent">Transformation</span>
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                We specialize in turning outdated spaces into stunning, functional rooms that add value to your home and
                joy to your daily life.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Complete design through completion management",
                  "All permits pulled and inspections coordinated",
                  "Clear scope documents - no hidden costs",
                  "Dedicated project manager on every job",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-accent-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={beforeAfterBathroom}
                alt="Before and after bathroom remodel"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Hear from homeowners across Somerset County who trusted us with their renovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving Somerset County & Beyond
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We proudly serve homeowners throughout Somerset County, NJ with expert remodeling services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {towns.map((town) => (
              <Link
                key={town}
                to={`/bathroom-remodeling-${town.toLowerCase().replace(" ", "-")}-nj`}
                className="bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium"
              >
                {town}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get transparent pricing for your project. No surprises, no hidden fees – just honest numbers for your
            remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="goldLarge" size="xl" onClick={() => setIsPricingModalOpen(true)}>
              Get Your Pricing Range
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outlineWhite" size="xl" asChild>
              <a href="tel:+17323478594">
                <Phone className="w-5 h-5" />
                (732) 347-8594
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <PricingFormModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} />
    </div>
  );
}
