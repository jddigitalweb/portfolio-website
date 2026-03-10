import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden border-[#021f53]/50">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6500]/20 rounded-full filter blur-[80px]" />
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Behind the <span className="text-[#ff9f1c]">Pixels.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  JD Digital Web was founded with a single mission: to bridge the gap between stunning aesthetic design and robust technical performance. 
                </p>
                <p>
                  Based at the intersection of creativity and logic, we are a tight-knit team of developers and designers who treat every project as our own. We don't use clunky templates; we engineer bespoke digital environments that elevate brands to their highest potential.
                </p>
              </div>
            </motion.div>
            
            <div className="flex flex-col justify-center gap-6">
              {[
                { label: "Design Quality", val: 98 },
                { label: "Code Cleanliness", val: 95 },
                { label: "Client Satisfaction", val: 100 }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between text-sm font-bold text-white mb-2">
                    <span>{skill.label}</span>
                    <span>{skill.val}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-brand rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
