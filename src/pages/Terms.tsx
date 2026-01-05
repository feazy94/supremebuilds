import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-primary-foreground/80">Last updated: January 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Website Use</h2>
            <p>This website is provided for informational purposes about Supreme Builds Construction's remodeling services. By using this website, you agree to these terms of service.</p>

            <h2>Project Agreements</h2>
            <p>All construction projects are governed by separate written contracts that detail scope, pricing, timeline, and terms. Information on this website is general and does not constitute a contractual offer.</p>

            <h2>Pricing Information</h2>
            <p>Pricing ranges shown on this website are estimates based on typical projects. Actual pricing depends on your specific project requirements and is provided in a detailed proposal.</p>

            <h2>Intellectual Property</h2>
            <p>All content on this website, including text, images, and designs, is the property of Supreme Builds Construction and may not be reproduced without permission.</p>

            <h2>Contact</h2>
            <p>Questions about these terms? Contact us at info@supremebuilds.co.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
