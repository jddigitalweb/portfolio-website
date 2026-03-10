import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Fintech Startup", category: "Business", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: 2, title: "Modern Apparel", category: "Ecommerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { id: 3, title: "Agency Redesign", category: "Redesign", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { id: 4, title: "SaaS Dashboard", category: "Business", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" },
  { id: 5, title: "Tech Gadgets", category: "Ecommerce", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80" },
  { id: 6, title: "Law Firm Refresh", category: "Redesign", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
];

const filters = ["All", "Business", "Ecommerce", "Redesign"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-32 bg-[#010a15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Selected <span className="text-gradient">Works.</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-[#021f53] text-white border border-[#ff6500]/30" 
                    : "glass text-muted-foreground hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                {/* project screenshot stock image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#ff9f1c] text-sm font-medium mb-1">{project.category}</p>
                      <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 border border-white/20">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
