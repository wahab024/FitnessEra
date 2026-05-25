import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0f0f0f] border-t border-b border-white/5">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f0f0f]/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover grayscale opacity-30" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#ff3b30] blur-[150px] rounded-full z-10 opacity-30" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-black italic text-white mb-6 uppercase tracking-tighter">
            Start Your Fitness<br />
            <span className="text-[#ff3b30] drop-shadow-[0_0_10px_rgba(255,59,48,0.5)]">Journey Today</span>
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-2xl mx-auto">
            Stop waiting for Monday. The best time to start was yesterday. The next best time is right now.
          </p>
          <a href="#pricing" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-sm skew-x-[-10deg] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform">
            <span className="skew-x-[10deg] flex items-center justify-center">
              🔥 Join Fitness Era
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-5 h-5" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
