import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We learn about your brand, goals, and target audience to formulate a strategic plan." },
    { num: "02", title: "Design", desc: "Creating stunning, user-centric wireframes and high-fidelity mockups for approval." },
    { num: "03", title: "Development", desc: "Writing clean, performant code to bring the designs to life with modern web tech." },
    { num: "04", title: "Launch", desc: "Rigorous testing, optimization, and final deployment to your custom domain." },
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Our Proven <span className="text-gradient">Process.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full glass border-[#ff6500]/30 bg-[#021f53] flex items-center justify-center text-xl font-display font-bold text-[#ff9f1c] mb-6 shadow-[0_0_20px_rgba(255,101,0,0.15)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
