import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Award, FileCheck, CheckCircle } from "lucide-react";

export default function LicensesInsurance() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Licenses & Insurance</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Fully licensed and insured for your protection and peace of mind.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-elegant border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-4">Licensed Contractor</h2>
                <p className="text-muted-foreground mb-4">
                  Supreme Builds Construction is a fully licensed New Jersey Home Improvement Contractor.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">NJ HIC License Number</div>
                  <div className="font-semibold text-foreground">#13VH12345600</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-elegant border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-4">Fully Insured</h2>
                <p className="text-muted-foreground mb-4">
                  We carry comprehensive general liability and workers' compensation insurance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>General Liability: $2M per occurrence</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Workers' Compensation: Full coverage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Why This Matters</h3>
                  <p className="text-muted-foreground">
                    Working with a licensed and insured contractor protects you. Our license means we've met New Jersey's requirements for training and financial responsibility. Our insurance means you're protected if anything goes wrong on the job site. Always ask to see proof of both before hiring any contractor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
