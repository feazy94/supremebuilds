import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Bathroom Remodeling", href: "/bathroom-remodeling" },
  { name: "Kitchen Remodeling", href: "/kitchen-remodeling" },
  { name: "Basement Remodeling", href: "/basement-remodeling" },
];

const towns = [
  "Bridgewater", "Hillsborough", "Warren", "Somerville", "Basking Ridge",
  "Bernardsville", "Watchung", "Green Brook", "Bound Brook", "Raritan"
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/our-process" },
  { name: "Projects", href: "/projects" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Supreme Builds Construction" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Somerset County's trusted home remodeling experts. Licensed, insured, and committed to delivering exceptional craftsmanship.
            </p>
            <div className="space-y-3">
              <a href="tel:+17323478594" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 text-accent" />
                (732) 347-8594
              </a>
              <a href="mailto:info@supremebuilds.co" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-accent" />
                info@supremebuilds.co
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Main Street<br />Bridgewater, NJ 08807</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="text-primary-foreground/50 text-sm pt-2">Coming Soon:</li>
              <li className="text-primary-foreground/50 text-sm">• Home Additions</li>
              <li className="text-primary-foreground/50 text-sm">• ADU / In-Law Suites</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {towns.map((town) => (
                <li key={town}>
                  <Link 
                    to={`/bathroom-remodeling-${town.toLowerCase().replace(" ", "-")}-nj`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {town}, NJ
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-navy-light rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-light rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-light rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Supreme Builds Construction. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/licenses-insurance" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Licenses & Insurance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
