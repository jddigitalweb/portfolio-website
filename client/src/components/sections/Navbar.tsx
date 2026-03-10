import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass border-b border-white/10 backdrop-blur-xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white group-hover:shadow-[0_0_20px_rgba(255,101,0,0.6)] group-hover:scale-105 transition-all duration-300">
            J
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:from-white group-hover:to-white transition-all duration-300">Digital Web</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-medium text-muted-foreground hover:text-white relative group transition-colors duration-300 py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button 
            onClick={() => scrollTo("#contact")}
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
          >
            Start Project
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-lg font-medium text-muted-foreground hover:text-white transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-6 py-3 w-full rounded-xl text-white bg-gradient-brand font-medium shadow-lg shadow-[#ff6500]/25"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
