import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/galleryData';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Bar - High Contrast Contact Banner */}
      <div className={`bg-neutral-950/90 border-b border-amber-500/20 text-xs py-2 px-4 transition-all duration-300 ${isScrolled ? 'hidden md:block opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-neutral-300">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-2 hover:text-amber-400 transition-colors font-medium group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-2 hover:text-amber-400 transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.city} i okolice</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={COMPANY_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300 transition-colors bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-500/30"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="font-semibold text-[11px] tracking-wide">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-neutral-950/95 backdrop-blur-md py-3 shadow-2xl border-b border-amber-500/20' 
            : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-700 shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="Komfort na Wymiar Logo" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                width={44}
                height={44}
                className="w-full h-full object-cover rounded-full border border-neutral-900"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
                KOMFORT <span className="text-amber-400 font-light">NA WYMIAR</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-400/80 uppercase font-medium">
                Schody & Altany • Częstochowa
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#oferta" className="text-sm text-neutral-200 hover:text-amber-400 transition-colors font-medium tracking-wide">
              Oferta
            </a>
            <a href="#dlaczego-my" className="text-sm text-neutral-200 hover:text-amber-400 transition-colors font-medium tracking-wide">
              Dlaczego my
            </a>
            <a href="#galeria" className="text-sm text-neutral-200 hover:text-amber-400 transition-colors font-medium tracking-wide">
              Realizacje
            </a>
            <a href="#kontakt" className="text-sm text-neutral-200 hover:text-amber-400 transition-colors font-medium tracking-wide">
              Kontakt
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-xs px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-neutral-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all duration-200 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-amber-500/30 text-amber-400 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-amber-500/30 backdrop-blur-xl px-6 py-6 space-y-5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 pt-2">
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-400 font-medium pb-2 border-b border-neutral-800"
            >
              Oferta schodów i altan
            </a>
            <a
              href="#dlaczego-my"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-400 font-medium pb-2 border-b border-neutral-800"
            >
              Dlaczego my
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-400 font-medium pb-2 border-b border-neutral-800"
            >
              Galeria realizacji
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-neutral-200 hover:text-amber-400 font-medium pb-2 border-b border-neutral-800"
            >
              Dane kontaktowe
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Phone className="w-4 h-4 text-neutral-950" />
              Zadzwoń: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
