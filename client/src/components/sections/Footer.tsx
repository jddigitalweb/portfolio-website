export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#010a15] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }} className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white">
                J
              </div>
              <span>Digital Web</span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              Premium digital experiences engineered for modern brands. We turn complex problems into elegant, high-performing solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("#services"); }} className="text-muted-foreground hover:text-[#ff9f1c] transition-colors">Services</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo("#portfolio"); }} className="text-muted-foreground hover:text-[#ff9f1c] transition-colors">Work</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("#process"); }} className="text-muted-foreground hover:text-[#ff9f1c] transition-colors">Process</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("#about"); }} className="text-muted-foreground hover:text-[#ff9f1c] transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} JD Digital Web. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Designed with passion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
