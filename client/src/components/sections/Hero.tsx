import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#021f53] rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-float" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#ff6500] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-float-delayed" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#ff6500] animate-pulse" />
              <span className="text-sm font-medium text-white/80">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
              Crafting Digital <br />
              <span className="text-gradient">Experiences</span> That Convert.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              We build premium, high-performance websites for startups and agencies. Elevate your brand with cutting-edge design and blazing-fast development.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollTo("#contact")}
                className="px-8 py-4 rounded-xl font-medium bg-gradient-brand text-white shadow-[0_0_40px_rgba(255,101,0,0.3)] hover:shadow-[0_0_60px_rgba(255,101,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollTo("#portfolio")}
                className="px-8 py-4 rounded-xl font-medium glass hover:bg-white/10 border border-white/10 text-white transition-all duration-300 flex items-center gap-2 group"
              >
                <Play className="w-4 h-4 text-[#ff9f1c]" fill="currentColor" />
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* Right visual element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end hidden sm:flex"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Glass cards floating */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 glass-card p-6 rounded-2xl w-64 shadow-2xl z-20"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff6500]/20 flex items-center justify-center mb-4">
                  <div className="w-5 h-5 rounded-full bg-[#ff6500]" />
                </div>
                <div className="h-2 w-2/3 bg-white/20 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 glass-card p-5 rounded-2xl w-56 shadow-2xl z-20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#021f53] to-[#010a15] border border-white/10 flex items-center justify-center font-display font-bold text-xl text-white">
                    99
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Performance</div>
                    <div className="text-xs text-muted-foreground">Lighthouse Score</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[99%] bg-gradient-brand h-full rounded-full" />
                </div>
              </motion.div>

              {/* Center Orb */}
              <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[#021f53] to-[#ff6500] mix-blend-screen filter blur-[40px] opacity-80 animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
