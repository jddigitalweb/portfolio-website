import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Stats() {
  const stats = [
    { value: 6, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Websites Launched" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 90, suffix: "+", label: "Lighthouse Score" },
  ];

  return (
    <section className="py-28 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm relative overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff6500]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl text-gradient mb-4 drop-shadow-sm font-display font-bold group-hover:drop-shadow-[0_0_20px_rgba(255,101,0,0.3)] transition-all duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-widest group-hover:text-white/70 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
