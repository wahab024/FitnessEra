import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, X } from 'lucide-react';

export function BMICalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      // height is in CM, convert to meters
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(Math.round(bmiValue * 10) / 10);
    }
  };

  const getStatus = (bmi: number) => {
    if (bmi < 18.5) return { text: 'Underweight', color: 'text-blue-400' };
    if (bmi >= 18.5 && bmi < 25) return { text: 'Normal', color: 'text-green-400' };
    if (bmi >= 25 && bmi < 30) return { text: 'Overweight', color: 'text-yellow-400' };
    return { text: 'Obese', color: 'text-primary' };
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-24 md:right-6 lg:bottom-28 lg:right-10 w-14 h-14 bg-dark-card border border-gray-700 hover:border-primary rounded-full shadow-lg flex items-center justify-center z-40 transition-colors group"
        aria-label="BMI Calculator"
      >
        <Calculator className="text-gray-400 group-hover:text-primary transition-colors w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark-card border border-gray-800 rounded-3xl p-6 md:p-8 w-full max-w-md relative shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors bg-dark-bg p-2 rounded-full"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-2">BMI Calculator</h3>
              <p className="text-gray-400 text-sm mb-6">Find out your Body Mass Index quickly.</p>

              <form onSubmit={calculateBMI} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 70"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 175"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl transition-colors mt-2"
                >
                  Calculate Now
                </button>
              </form>

              {bmi !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-dark-bg rounded-xl border border-gray-800 text-center"
                >
                  <div className="text-sm font-medium text-gray-400 mb-1">Your BMI is</div>
                  <div className="text-4xl font-heading font-black text-white mb-1">{bmi}</div>
                  <div className={`font-bold uppercase tracking-wider text-sm ${getStatus(bmi).color}`}>
                    {getStatus(bmi).text}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
