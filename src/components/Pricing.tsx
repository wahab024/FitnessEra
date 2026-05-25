import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "1,500",
      desc: "For those just starting out.",
      features: [
        "Gym Access (Morning only)",
        "Free Weights Area",
        "Locker Facility",
        "General Guidance"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "2,500",
      desc: "The most popular choice.",
      features: [
        "Full Day Gym Access",
        "Cardio Zone Access",
        "Free Weights & Machines",
        "Locker Facility",
        "Basic Diet Plan"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "4,000",
      desc: "For serious transformations.",
      features: [
        "24/7 Gym Access",
        "Dedicated Personal Trainer",
        "Customized Diet Plan",
        "Supplements Guidance",
        "Private Locker",
        "Access to all Zones"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-bg relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-3 tracking-[0.2em]">Membership Plans</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-6 tracking-tighter">Invest In Your Health</h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm">
              Transparent pricing with zero hidden fees. Choose the plan that best fits your goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-black/40 rounded-xl p-6 md:p-8 border ${
                plan.popular ? 'border-[#ff3b30] shadow-[0_0_20px_rgba(255,59,48,0.2)] md:-translate-y-2' : 'border-white/5 bg-[#171717]'
              } relative flex flex-col h-full group`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff3b30] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-[0_0_10px_rgba(255,59,48,0.4)]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-xl font-black uppercase italic text-white mb-1 group-hover:text-primary transition-colors">{plan.name} Plan</h4>
                <p className="text-white/40 text-[10px] h-8">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mt-4 border-b border-white/5 pb-4">
                  <span className="text-lg font-bold text-white/40">Rs.</span>
                  <span className="text-5xl font-black italic text-white">{plan.price}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase">/mo</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-white/70 text-xs">
                    <Check className="text-primary w-4 h-4 mr-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary hover:bg-primary-hover text-white glowing-btn skew-x-[-10deg]' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white skew-x-[-10deg]'
              }`}>
                <span className="skew-x-[10deg] block">Select Plan</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
