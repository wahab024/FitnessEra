/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Transformations } from './components/Transformations';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BMICalculator } from './components/BMICalculator';
import { CountdownOffer } from './components/CountdownOffer';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string, delay?: boolean) => {
    setActiveSection(id);
    
    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 100;
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight + 5;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (delay || window.innerWidth < 768) {
      setTimeout(performScroll, 200);
    } else {
      performScroll();
    }
  };

  // Intersection Observer to track scroll positions
  useEffect(() => {
    const sections = ['home', 'programs', 'trainers', 'pricing', 'transformations', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const id = href.substring(1);
        
        if (id === '') {
          // Plain '#' goes back to top smoothly
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          scrollToSection(id);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary transform-origin-0 z-[100]"
        style={{ scaleX }}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <CountdownOffer />
        <Navbar activeSection={activeSection} onNavItemClick={scrollToSection} />
      </header>
      
      <main>
        <Hero />
        <WhyChooseUs />
        <Transformations />
        <Programs />
        <Trainers />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      
      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <BMICalculator />

      {/* Sticky CTA for Mobile Only */}
      <div className="md:hidden fixed bottom-4 left-4 right-20 z-40 animate-fade-in-up">
        <a href="#pricing" className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-2xl font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,59,48,0.4)] flex justify-center w-full">
          🔥 Join Now
        </a>
      </div>
    </div>
  );
}
