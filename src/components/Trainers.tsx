import { motion } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';

export function Trainers() {
  const trainers = [
    {
      name: "Ali Raza",
      spec: "Head Coach / Bodybuilding",
      exp: "10 Years Exp",
      image: "/src/assets/images/regenerated_image_1779692401693.png"
    },
    {
      name: "Usman Khan",
      spec: "Strength & Conditioning",
      exp: "7 Years Exp",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Fatima Noor",
      spec: "Women's Fitness & Pilates",
      exp: "5 Years Exp",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Expert Team</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-6 tracking-tighter">Train With The Elite</h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm pt-4 border-t border-white/5">
               Our certified professional trainers are dedicated to pushing your limits and helping you achieve your ultimate form.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-black border border-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden p-2">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 rounded-lg"
                />
              </div>
              <div className="absolute inset-x-2 bottom-2 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-lg font-black uppercase italic text-white mb-1 group-hover:text-primary transition-colors">{trainer.name}</h4>
                    <p className="text-white/60 text-[10px]">{trainer.spec}</p>
                    <p className="text-primary text-[9px] uppercase font-bold tracking-widest mt-2">{trainer.exp}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="w-6 h-6 rounded-sm bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                      <Instagram size={12} className="text-white" />
                    </a>
                    <a href="#" className="w-6 h-6 rounded-sm bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                      <Twitter size={12} className="text-white" />
                    </a>
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
