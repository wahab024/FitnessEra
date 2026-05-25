import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Best gym environment in Abbottabad. The equipment is top-notch and the trainers actually care about your progress.",
      author: "Ziad Ahmed",
      role: "Member for 1 year"
    },
    {
      text: "Highly recommended trainers and excellent equipment. The cardio area is spacious and the crowd is very decent.",
      author: "Hamza Tariq",
      role: "Member for 6 months"
    },
    {
      text: "I transformed my physique here. The custom diet plans and constant motivation from Coach Ali made the difference.",
      author: "Bilal Qureshi",
      role: "Member for 2 years"
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-[#0f0f0f] relative overflow-hidden text-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff3b30] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Community Voices</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-6 tracking-tighter">What Members Say</h3>
        </motion.div>

        <div className="relative h-[280px] sm:h-[240px] flex items-center justify-center">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: active === index ? 1 : 0,
                x: active === index ? 0 : (active > index ? -50 : 50),
                pointerEvents: active === index ? 'auto' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-4"
            >
              <Quote className="mx-auto text-white/5 w-12 h-12 mb-4" />
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-white/80 italic mb-4 max-w-2xl mx-auto leading-relaxed">
                "{test.text}"
              </p>
              <div>
                <h4 className="text-xs font-black uppercase text-white tracking-widest">{test.author}</h4>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === i ? 'bg-primary w-8' : 'bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
