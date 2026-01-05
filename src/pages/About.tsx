import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Transparency", description: "Clear scopes, honest pricing, no surprises. You'll know exactly what you're getting before we start." },
  { icon: Award, title: "Craftsmanship", description: "Quality work that stands the test of time. We take pride in every detail of every project." },
  { icon: Users, title: "Communication", description: "Daily updates, quick responses, and a dedicated project manager for every job." },
  { icon: Heart, title: "Community", description: "We're your neighbors. Our reputation in Somerset County means everything to us." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Supreme Builds</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Somerset County's trusted home remodeling experts since 2014.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Supreme Builds Construction was founded with a simple mission: deliver exceptional home renovations with complete transparency. After years of working in the construction industry, our founder saw too many homeowners frustrated by unclear pricing, scope creep, and poor communication.
              </p>
              <p>
                We built Supreme Builds to be different. Every project starts with a detailed scope document. Every allowance is clearly explained. Every change order is approved in writing. And every client gets a dedicated project manager who keeps them informed every step of the way.
              </p>
              <p>
                Today, we've completed over 500 renovation projects across Somerset County. From bathroom refreshes to complete kitchen transformations, we've helped hundreds of homeowners create spaces they love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-elegant">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see if we're the right fit.
          </p>
          <Button variant="goldLarge" size="xl" asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
