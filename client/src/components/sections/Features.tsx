import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Features() {
  const features = [
    "Pixel-Perfect Implementation",
    "SEO-Ready Architecture",
    "Lightning Fast Next.js/React",
    "Tailored CMS Integrations",
    "Post-Launch Support",
    "Conversion-Optimized Layouts",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-[#021f53]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Why partner with <br />
              <span className="text-gradient">JD Digital Web?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We eliminate the headache of dealing with unreliable freelancers and slow agencies. Expect top-tier communication, transparent timelines, and deliverables that exceed expectations.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#ff6500] w-5 h-5 flex-shrink-0" />
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-brand opacity-20 filter blur-[100px] absolute inset-0" />
            <div className="glass-card rounded-2xl p-8 relative z-10 border-white/10">
               {/* abstract code/design illustration stock image */}
               <img 
                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                 alt="Coding and Design" 
                 className="rounded-xl w-full h-auto shadow-lg mb-6 opacity-80 mix-blend-luminosity"
               />
               <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                 <div>
                   <div className="text-xs text-muted-foreground mb-1">Project Status</div>
                   <div className="text-sm font-bold text-white flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     Deploying to Production
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-xs text-muted-foreground mb-1">Uptime</div>
                   <div className="text-sm font-bold text-[#ff9f1c]">99.99%</div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
