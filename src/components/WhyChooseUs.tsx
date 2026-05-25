import { motion } from 'motion/react';
import { Dumbbell, Target, Zap, Activity, Utensils, Users } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Professional Trainers",
      description: "Our certified coaches create personalized plans tailored to your goals and ensure perfect form."
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Fat Loss Programs",
      description: "High-intensity circuits and cardio plans designed to burn calories and shed fat effectively."
    },
    {
      icon: <Dumbbell className="text-primary" size={32} />,
      title: "Muscle Building",
      description: "Extensive free weights and modern machines for targeted hypertrophy and strength training."
    },
    {
      icon: <Activity className="text-primary" size={32} />,
      title: "Cardio Zone",
      description: "Treadmills, ellipticals, and rowers with individual screens in our spacious cardio area."
    },
    {
      icon: <Utensils className="text-primary" size={32} />,
      title: "Nutrition Guidance",
      description: "Diet plans and supplement advice to complement your workouts and accelerate results."
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Friendly Environment",
      description: "A motivating, inclusive community that pushes you to give your best every single day."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-dark-card to-transparent opacity-50 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-6 tracking-tighter">Elevate Your Fitness Game</h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm pt-4 border-t border-white/5">
              We provide more than just equipment. We offer a comprehensive ecosystem designed for your success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#171717] p-6 rounded-xl border border-white/5 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(255,59,48,0.1)] transition-all group cursor-pointer"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xs font-bold uppercase mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-[10px] text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
