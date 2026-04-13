import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
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
              <img src={logo} alt="Supreme Builds logo" className="h-11 w-auto" />
              <div>
                <div className="font-display text-xl font-semibold">Supreme Builds</div>
                <div className="text-primary-foreground/70 text-xs tracking-wider">CONSTRUCTION</div>
              </div>
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
              <li>
                <Link to="/home-additions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home Additions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  ADU / In-Law Suites
                </Link>
              </li>
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
                <a href="https://www.facebook.com/people/Supreme-Builds-Home-Remodeling/61580208993434/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-light rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/supremebuildsllc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-light rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://google.com/maps/place/Supreme+Builds/@40.5366916,-74.6012239,17z/data=!4m6!3m5!1s0x898e54af2f988d59:0x1dba227768232a7b!8m2!3d40.5376701!4d-74.598649!16s%2Fg%2F11rv95vt1_?shorturl=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-light rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Google Maps">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
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
