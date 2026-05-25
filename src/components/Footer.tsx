import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#ff3b30] rounded-sm flex items-center justify-center font-black italic text-white">FE</div>
              <span className="font-black text-xl tracking-tighter uppercase text-white">Fitness Era</span>
            </a>
            <p className="text-white/40 text-[10px] mb-6 max-w-sm uppercase tracking-widest leading-relaxed">
              Premium fitness facility in Abbottabad providing top-tier equipment, expert training, and an unbeatable community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-[#171717] border border-white/5 flex items-center justify-center hover:bg-[#ff3b30] hover:border-[#ff3b30] transition-colors text-white">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-[#171717] border border-white/5 flex items-center justify-center hover:bg-[#ff3b30] hover:border-[#ff3b30] transition-colors text-white">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-[#171717] border border-white/5 flex items-center justify-center hover:bg-[#ff3b30] hover:border-[#ff3b30] transition-colors text-white">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Programs', 'Trainers', 'Pricing', 'Testimonials'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[10px] text-white/40 uppercase tracking-widest hover:text-[#ff3b30] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">Programs</h4>
             <ul className="space-y-4">
              {['Weight Loss', 'Strength Training', 'Bodybuilding', 'Personal Training'].map(link => (
                <li key={link}>
                  <a href="#programs" className="text-[10px] text-white/40 uppercase tracking-widest hover:text-[#ff3b30] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-[10px] text-white/40 uppercase tracking-widest">
                <MapPin className="text-[#ff3b30] mr-3 shrink-0" size={14} />
                <span>Main Mansehra Rd, Near Jadoon Plaza, Abbottabad</span>
              </li>
              <li className="flex items-center text-[10px] text-white/40 uppercase tracking-widest">
                <Phone className="text-[#ff3b30] mr-3 shrink-0" size={14} />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center text-[10px] text-white/40 uppercase tracking-widest">
                 <Mail className="text-[#ff3b30] mr-3 shrink-0" size={14} />
                 <span>info@fitnessera.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] text-white/30 uppercase tracking-[0.3em]">
          <p>&copy; {new Date().getFullYear()} Fitness Era Gym. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
