import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({ activeSection, onNavItemClick }: { activeSection: string; onNavItemClick: (id: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full transition-all duration-300 relative ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-black italic text-white"
            >
              FE
            </motion.div>
            <span className="font-black text-xl tracking-tighter uppercase text-white">Fitness Era</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onNavItemClick(id);
                    }}
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onNavItemClick('pricing');
              }}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-tighter shadow-[0_0_15px_rgba(255,59,48,0.3)] transition-all glowing-btn"
            >
              🔥 Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="absolute top-full left-0 right-0 md:hidden overflow-hidden bg-dark-card/95 backdrop-blur-md border-b border-white/10 shadow-2xl z-[55]"
      >
        <div className="px-4 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                  onNavItemClick(id);
                }}
                className={`text-sm font-medium transition-colors uppercase tracking-wider block ${
                  isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(false);
              onNavItemClick('pricing');
            }}
            className="w-full text-center glowing-btn bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm mt-4"
          >
            🔥 Join Now
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
