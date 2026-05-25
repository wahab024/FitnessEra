import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: "Weight Loss",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      desc: "High-intensity cardio and circuit training to burn fat effectively."
    },
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      desc: "Build foundational power with progressive overload techniques."
    },
    {
      title: "Bodybuilding",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop",
      desc: "Targeted hypertrophy training for maximum muscle growth and symmetry."
    },
    {
      title: "Personal Training",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
      desc: "1-on-1 coaching focusing on your specific goals and perfect form."
    },
    {
      title: "Women's Fitness",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
      desc: "Tailored programs focusing on endurance, toning, and strength."
    },
    {
      title: "Cardio Training",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
      desc: "Improve stamina and heart health in our state-of-the-art cardio zone."
    }
  ];

  return (
    <section id="programs" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Training Plans</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white tracking-tighter">Programs For Every Goal</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="hidden md:inline-flex border border-white/20 hover:border-white/50 text-white px-6 py-2 font-black uppercase text-xs skew-x-[-10deg] items-center justify-center transition-colors">
              <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                View Schedule <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-white/5 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(255,59,48,0.2)] overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-black uppercase italic text-white mb-2">{prog.title}</h4>
                  <p className="text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    {prog.desc}
                  </p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] flex items-center">
                    Learn More <ArrowRight className="ml-2 w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
