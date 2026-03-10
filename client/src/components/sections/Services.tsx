import { motion } from "framer-motion";
import { Globe, Layout, Smartphone, Zap, Activity, ShieldCheck, PenTool } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Custom Web Design",
      desc: "Tailored designs that reflect your brand identity and captivate your audience.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed Optimization",
      desc: "Lightning-fast load times that reduce bounce rates and improve conversions.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimization",
      desc: "Flawless responsive experiences across all devices and screen sizes.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Core Web Vitals",
      desc: "Passing all Google metrics to ensure top-tier SEO performance.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Domain & Hosting",
      desc: "Secure, reliable infrastructure setup tailored to your traffic needs.",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Existing Site Polish",
      desc: "Revamping outdated websites into modern, high-converting platforms.",
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-[#021f53] filter blur-[150px] opacity-30 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Everything you need to <span className="text-gradient">dominate online.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We don't just build websites; we build digital engines engineered for performance, aesthetics, and growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff9f1c] mb-6 group-hover:bg-gradient-brand group-hover:text-white transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
