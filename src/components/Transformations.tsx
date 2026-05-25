import { motion } from 'motion/react';

export function Transformations() {
  const transformations = [
    {
      id: 1,
      name: "Ahmed K.",
      time: "6 Months",
      lost: "15 kg",
      imageBefore: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop", // placeholder
      imageAfter: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", // placeholder
      quote: "The personalized fat loss program completely changed my life."
    },
    {
      id: 2,
      name: "Sarah M.",
      time: "4 Months",
      lost: "8 kg",
      imageBefore: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=800&auto=format&fit=crop",
      imageAfter: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      quote: "Strength training here gave me confidence I never knew I had."
    }
  ];

  return (
    <section id="transformations" className="py-24 bg-[#171717] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Results That Speak</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic text-white mb-6 tracking-tighter">Real Members. Real Transformations.</h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm">
              Witness the incredible journeys of our members who committed to the process and achieved their dream physiques.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformations.map((trans, index) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-black rounded-xl overflow-hidden border border-white/5"
            >
              <div className="grid grid-cols-2 relative group p-2 gap-2">
                <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden border border-white/5">
                  <img src={trans.imageBefore} alt={`${trans.name} Before`} className="w-full h-full object-cover grayscale opacity-50" />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[8px] uppercase font-bold text-white uppercase tracking-widest">Before</div>
                </div>
                <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_15px_rgba(255,59,48,0.2)]">
                  <img src={trans.imageAfter} alt={`${trans.name} After`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-primary px-2 py-1 text-[8px] uppercase font-bold text-white uppercase tracking-widest">After</div>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-4 inset-x-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-black text-white uppercase">{trans.name}</h4>
                    <p className="text-white/40 text-[10px] italic">"{trans.quote}"</p>
                  </div>
                  <div className="text-right whitespace-nowrap pl-4 border-l border-white/10">
                    <div className="text-primary font-black text-xl italic">{trans.lost}</div>
                    <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">in {trans.time}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
