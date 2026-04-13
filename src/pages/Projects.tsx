import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import kitchenRemodel from "@/assets/kitchen-remodel.jpg";
import basementRemodel from "@/assets/basement-remodel.jpg";
import beforeAfterBathroom from "@/assets/before-after-bathroom.jpg";
import basementFireplace from "@/assets/basement-fireplace.png";
import kitchenNavy from "@/assets/kitchen-navy.png";
import bathroomMarble from "@/assets/bathroom-marble.png";

const projects = [
  { id: 1, title: "Master Bathroom Transformation", location: "Bridgewater, NJ", type: "bathroom", image: heroBathroom },
  { id: 2, title: "Modern Kitchen Remodel", location: "Warren, NJ", type: "kitchen", image: kitchenRemodel },
  { id: 3, title: "Entertainment Basement", location: "Hillsborough, NJ", type: "basement", image: basementRemodel },
  { id: 4, title: "Spa-Like Bathroom", location: "Somerville, NJ", type: "bathroom", image: bathroomMarble },
  { id: 5, title: "Open Concept Kitchen", location: "Basking Ridge, NJ", type: "kitchen", image: kitchenNavy },
  { id: 6, title: "Home Office Basement", location: "Bernardsville, NJ", type: "basement", image: basementFireplace },
];

const filters = ["all", "bathroom", "kitchen", "basement"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Browse our portfolio of completed renovations across Somerset County.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "gold" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="capitalize"
              >
                {filter === "all" ? "All Projects" : filter}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl bg-white shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-sm font-semibold capitalize">{project.type}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
