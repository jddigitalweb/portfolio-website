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
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl text-gradient mb-2 drop-shadow-sm">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
