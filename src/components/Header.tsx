import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { name: "Bathroom Remodeling", href: "/bathroom-remodeling" },
  { name: "Kitchen Remodeling", href: "/kitchen-remodeling" },
  { name: "Basement Remodeling", href: "/basement-remodeling" },
  { name: "Home Additions", href: "/home-additions" },
];

const towns = [
  { name: "Somerset County", href: "/somerset-county-nj" },
  { name: "Middlesex County", href: "/middlesex-county-nj" },
  { name: "Bridgewater", href: "/bathroom-remodeling-bridgewater-nj" },
  { name: "Hillsborough", href: "/bathroom-remodeling-hillsborough-nj" },
  { name: "Warren", href: "/bathroom-remodeling-warren-nj" },
  { name: "Somerville", href: "/bathroom-remodeling-somerville-nj" },
  { name: "Basking Ridge", href: "/bathroom-remodeling-basking-ridge-nj" },
  { name: "Bernardsville", href: "/bathroom-remodeling-bernardsville-nj" },
  { name: "Watchung", href: "/bathroom-remodeling-watchung-nj" },
  { name: "Green Brook", href: "/bathroom-remodeling-green-brook-nj" },
  { name: "Bound Brook", href: "/bathroom-remodeling-bound-brook-nj" },
  { name: "Raritan", href: "/bathroom-remodeling-raritan-nj" },
  { name: "Manville", href: "/bathroom-remodeling-manville-nj" },
  { name: "Bedminster", href: "/bathroom-remodeling-bedminster-nj" },
  { name: "Edison", href: "/bathroom-remodeling-edison-nj" },
  { name: "Princeton", href: "/bathroom-remodeling-princeton-nj" },
  { name: "Montgomery", href: "/bathroom-remodeling-montgomery-nj" },
  { name: "North Brunswick", href: "/bathroom-remodeling-north-brunswick-nj" },
  { name: "South Brunswick", href: "/bathroom-remodeling-south-brunswick-nj" },
  { name: "Piscataway", href: "/bathroom-remodeling-piscataway-nj" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [townsOpen, setTownsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Supreme Builds logo" className="h-11 w-auto" />
            <div className="hidden sm:block">
              <div className="text-primary-foreground font-display text-xl font-semibold">Supreme Builds</div>
              <div className="text-primary-foreground/70 text-xs tracking-wider">CONSTRUCTION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-primary-foreground/90 hover:text-accent transition-colors font-medium ${location.pathname === "/" ? "text-accent" : ""}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-primary-foreground/90 hover:text-accent transition-colors font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-4 py-2.5 text-foreground hover:bg-secondary hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Towns Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-primary-foreground/90 hover:text-accent transition-colors font-medium"
                onMouseEnter={() => setTownsOpen(true)}
                onMouseLeave={() => setTownsOpen(false)}
              >
                Service Areas <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 max-h-80 overflow-y-auto transition-all duration-200 ${townsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onMouseEnter={() => setTownsOpen(true)}
                onMouseLeave={() => setTownsOpen(false)}
              >
                {towns.map((town) => (
                  <Link
                    key={town.href}
                    to={town.href}
                    className="block px-4 py-2.5 text-foreground hover:bg-secondary hover:text-accent transition-colors"
                  >
                    {town.name}, NJ
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/our-process" 
              className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              Our Process
            </Link>
            <Link 
              to="/projects" 
              className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              Projects
            </Link>
            <Link 
              to="/reviews" 
              className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link 
              to="/about" 
              className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+17323478594" className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(732) 347-8594</span>
            </a>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Pricing</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary border-t border-navy-light">
            <nav className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-primary-foreground py-2 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              
              <div className="border-t border-navy-light pt-4">
                <div className="text-accent text-sm font-semibold mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block text-primary-foreground/80 py-2 hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-navy-light pt-4">
                <div className="text-accent text-sm font-semibold mb-2">Service Areas</div>
                <div className="grid grid-cols-2 gap-2">
                  {towns.slice(0, 6).map((town) => (
                    <Link
                      key={town.href}
                      to={town.href}
                      className="text-primary-foreground/80 py-1 text-sm hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {town.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-navy-light pt-4 space-y-2">
                <Link to="/our-process" className="block text-primary-foreground py-2 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                  Our Process
                </Link>
                <Link to="/projects" className="block text-primary-foreground py-2 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
                <Link to="/reviews" className="block text-primary-foreground py-2 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                  Reviews
                </Link>
                <Link to="/about" className="block text-primary-foreground py-2 hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </div>

              <div className="border-t border-navy-light pt-4 space-y-3">
                <a href="tel:+17323478594" className="flex items-center gap-2 text-primary-foreground">
                  <Phone className="w-5 h-5" />
                  <span>(732) 347-8594</span>
                </a>
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Pricing</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
