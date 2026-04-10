import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/80">Last updated: January 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Information We Collect</h2>
            <p>When you contact us through our website, we collect the information you provide, including your name, email address, phone number, and project details.</p>

            <h2>How We Use Your Information</h2>
            <p>We use your information solely to respond to your inquiry and provide you with information about our remodeling services. We do not sell or share your personal information with third parties for marketing purposes.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>

            <h2>Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us at info@supremebuilds.co or call (732) 347-8594.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
