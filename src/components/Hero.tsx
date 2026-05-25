import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  const stats = [
    { label: 'Members', value: '500+' },
    { label: 'Certified Trainers', value: '15+' },
    { label: 'Modern Equipment', value: '100+' },
    { label: 'Open', value: '6 Days' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 sm:pt-40 md:pt-48 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-dark-bg/40 z-10 sm:hidden" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Muscular athlete training"
          className="w-full h-full object-cover object-right md:object-center opacity-40 md:opacity-60 mix-blend-luminosity"
        />
        {/* Glowing effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              ⚡ Limited Offer: 20% OFF This Month
            </span>
            <h1 className="text-[47px] sm:text-7xl md:text-8xl font-black leading-[0.9] uppercase italic mb-4">
              Transform <br />
              <span className="text-primary drop-shadow-[0_0_10px_rgba(255,59,48,0.5)]">Your Body.</span>
            </h1>
            <p className="text-white/60 text-sm max-w-md mb-8 leading-relaxed">
              Elite training. Real results. Modern equipment and expert trainers designed to help you achieve your ultimate fitness goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-16">
              <a href="#pricing" className="bg-white text-black px-8 py-3 font-black uppercase text-sm skew-x-[-10deg] flex items-center justify-center transition-transform hover:scale-105">
                <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                  Join Now
                </span>
              </a>
              <a href="#contact" className="border border-white/20 hover:border-white/50 text-white px-8 py-3 font-black uppercase text-sm skew-x-[-10deg] flex items-center justify-center transition-colors">
                <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                  Free Consultation
                </span>
              </a>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-white/5 py-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-black">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
