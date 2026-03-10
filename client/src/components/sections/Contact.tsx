import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";

// Match the omit from backend schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { mutate, isPending } = useSubmitContact();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <section id="contact" className="py-32 relative bg-[#010a15]">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#021f53] filter blur-[150px] opacity-30 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's create something <span className="text-gradient">epic.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Fill out the form and we'll get back to you within 24 hours. Alternatively, reach out directly via email or WhatsApp.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@jddigitalweb.com" className="flex items-center gap-4 group p-4 rounded-2xl glass hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#021f53] flex items-center justify-center text-[#ff9f1c] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Email Us</div>
                  <div className="text-lg font-bold text-white">hello@jddigitalweb.com</div>
                </div>
              </a>
              
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-4 group p-4 rounded-2xl glass hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#021f53] flex items-center justify-center text-[#ff9f1c] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">WhatsApp</div>
                  <div className="text-lg font-bold text-white">+1 (555) 123-4567</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 border-[#021f53]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                <input
                  id="name"
                  {...register("name")}
                  className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#ff6500]/50 focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#ff6500]/50 focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={`w-full bg-black/20 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#ff6500]/50 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-brand shadow-lg shadow-[#ff6500]/20 hover:shadow-xl hover:shadow-[#ff6500]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {isPending ? "Sending..." : "Send Message"}
                {!isPending && <Send className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
