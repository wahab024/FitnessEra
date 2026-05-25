import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#171717] border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Map Placeholder */}
        <div className="h-[400px] lg:h-auto bg-black relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://maps.google.com/maps?q=33.7553815,72.752082&hl=en&z=15&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="py-20 px-8 lg:px-16 xl:px-24 flex flex-col justify-center border-l border-white/5 relative bg-[#171717]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent border-white/5"></div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-12 tracking-tighter">Visit Our Gym</h3>

            <div className="space-y-6">
              <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5 shadow-[0_0_15px_rgba(255,59,48,0.05)] hover:border-primary/20 transition-all cursor-pointer">
                <div className="bg-[#171717] w-10 h-10 rounded-lg mr-4 border border-white/5 shrink-0 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold uppercase text-white mb-1">Location</h4>
                  <p className="text-[10px] text-white/40">Main Mansehra Road, Near Jadoon Plaza,<br />Abbottabad, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5 shadow-[0_0_15px_rgba(255,59,48,0.05)] hover:border-primary/20 transition-all cursor-pointer">
                <div className="bg-[#171717] w-10 h-10 rounded-lg mr-4 border border-white/5 shrink-0 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold uppercase text-white mb-1">Timings</h4>
                  <p className="text-[10px] text-white/40">Mon - Sat: 6:00 AM - 11:00 PM<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5 shadow-[0_0_15px_rgba(255,59,48,0.05)] hover:border-primary/20 transition-all cursor-pointer">
                <div className="bg-[#171717] w-10 h-10 rounded-lg mr-4 border border-white/5 shrink-0 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold uppercase text-white mb-1">Call Us</h4>
                  <p className="text-[10px] text-white/40">+92 300 1234567</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
               <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded font-black uppercase text-xs skew-x-[-10deg] shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-colors">
                  <span className="skew-x-[10deg] flex items-center justify-center">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Chat on WhatsApp
                  </span>
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
