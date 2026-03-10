import { motion } from "framer-motion";

export function CtaSection() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-brand p-10 md:p-20 text-center shadow-[0_0_50px_rgba(255,101,0,0.2)]"
        >
          {/* Inner dark gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-md">
              Ready to scale your digital presence?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow">
              Let's build something extraordinary together. Book a free discovery call and let's discuss how we can help your business grow.
            </p>
            <button 
              onClick={() => scrollTo("#contact")}
              className="px-10 py-4 rounded-xl font-bold bg-[#010a15] text-white hover:bg-white hover:text-[#010a15] transition-colors duration-300 shadow-xl"
            >
              Start Your Project Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
