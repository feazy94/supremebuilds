import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const reviews = [
  { name: "Sarah M.", location: "Bridgewater, NJ", text: "Our master bath went from 1990s brass to a spa-like retreat. The team was professional, clean, and finished exactly on schedule. Highly recommend!", projectType: "Full Gut Bathroom" },
  { name: "Michael T.", location: "Warren, NJ", text: "We had high standards for our kitchen renovation and Supreme Builds delivered. Their attention to detail and communication throughout was exceptional.", projectType: "Kitchen Remodel" },
  { name: "Jennifer L.", location: "Hillsborough, NJ", text: "Our basement went from an unused storage area to our favorite room in the house. The whole process was smooth and transparent.", projectType: "Basement Remodel" },
  { name: "David K.", location: "Somerville, NJ", text: "We needed an aging-in-place bathroom for my father-in-law. Supreme Builds understood exactly what we needed and delivered a beautiful, functional space.", projectType: "Premium Bathroom" },
  { name: "Lisa R.", location: "Basking Ridge, NJ", text: "The kitchen remodel exceeded our expectations. The 3D design process helped us visualize everything before construction started.", projectType: "Full Kitchen Remodel" },
  { name: "Robert H.", location: "Bernardsville, NJ", text: "Excellent experience from start to finish. Clear communication, quality work, and they cleaned up every day. Would use again in a heartbeat.", projectType: "Bathroom Refresh" },
  { name: "Amanda P.", location: "Watchung, NJ", text: "Our basement is now a home theater and game room the whole family loves. Supreme Builds made the process easy and stress-free.", projectType: "Entertainment Basement" },
  { name: "Chris W.", location: "Green Brook, NJ", text: "Professional, punctual, and the quality of work is outstanding. They pulled all permits and handled everything. Five stars!", projectType: "Kitchen Refresh" },
  { name: "Nancy B.", location: "Bound Brook, NJ", text: "We've used Supreme Builds twice now - bathroom and then kitchen. Both times they delivered excellent results on schedule.", projectType: "Multiple Projects" },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Hear from homeowners across Somerset County who trusted us with their renovations.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.9/5 from 150+ reviews</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join Our Happy Clients</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to start your renovation journey? Get your pricing range today.
          </p>
          <Button variant="goldLarge" size="xl" asChild>
            <Link to="/contact">
              Get Your Pricing Range
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
