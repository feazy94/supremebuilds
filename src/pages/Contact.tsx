import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";

const budgetRanges = ["$15,000 - $25,000", "$25,000 - $35,000", "$35,000 - $50,000", "$50,000+"];
const timelines = ["Within 1 month", "1-3 months", "3-6 months", "6+ months"];
const projectTypes = ["Bathroom Remodeling", "Kitchen Remodeling", "Basement Remodeling"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", town: "", projectType: "", budget: "", timeline: "", description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Ready to start your project? Get in touch and we'll send you pricing within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Request Received!</h3>
                  <p className="text-muted-foreground">We'll send you pricing information within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-elegant">
                  <h2 className="font-display text-2xl font-semibold mb-6">Get Your Pricing Range</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="John Smith" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone *</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="(732) 347-8594" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type *</label>
                        <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                          <option value="">Select type...</option>
                          {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="town" className="block text-sm font-medium mb-2">Your Town *</label>
                        <input type="text" id="town" name="town" required value={formData.town} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Bridgewater, NJ" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range *</label>
                        <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                          <option value="">Select range...</option>
                          {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">Timeline *</label>
                        <select id="timeline" name="timeline" required value={formData.timeline} onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                          <option value="">Select timeline...</option>
                          {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">Project Description</label>
                      <textarea id="description" name="description" rows={4} value={formData.description} onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your project..." />
                    </div>

                    <Button type="submit" variant="goldLarge" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : "Get Pricing Range"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+17323478594" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                    (732) 347-8594
                  </a>
                  <a href="mailto:info@supremebuilds.co" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                    info@supremebuilds.co
                  </a>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>123 Main Street<br />Bridgewater, NJ 08807</span>
                  </div>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Mon-Fri: 8am - 6pm<br />Sat: 9am - 2pm</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Prefer to Talk?</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Book a 15-minute project fit call directly with our team.
                </p>
                <Button variant="gold" className="w-full" asChild>
                  <a href="tel:+17323478594">
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
