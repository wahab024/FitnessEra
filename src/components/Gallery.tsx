import { motion } from 'motion/react';

export function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" }
  ];

  return (
    <section className="py-24 bg-[#171717] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Facility Tour</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white tracking-tighter">Inside Fitness Era</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group border border-white/5 ${img.span} ${i === 0 ? 'rounded-tl-2xl rounded-bl-2xl md:rounded-bl-none' : ''} ${i === 3 ? 'md:rounded-bl-2xl' : ''} ${i === 2 ? 'md:rounded-tr-2xl' : ''} ${i === images.length - 1 ? 'rounded-br-2xl rounded-bl-2xl md:rounded-bl-none' : ''}`}
            >
              <img 
                src={img.url} 
                alt="Gym Facility" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
