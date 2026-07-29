import React from 'react';
import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/galleryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-amber-500/20 text-neutral-400 text-sm py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Komfort na Wymiar Logo"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border border-amber-500/40 object-cover"
              />
              <span className="font-serif text-xl font-bold text-white tracking-wider">
                KOMFORT <span className="text-amber-400">NA WYMIAR</span>
              </span>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Nowoczesne schody oraz altany ogrodowe na wymiar. Precyzyjne rzemiosło, wyselekcjonowane drewno i realizacje dopasowane do Twojej przestrzeni.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 transition-colors text-xs font-semibold"
              >
                <Facebook className="w-4 h-4 text-amber-400" />
                <span>Odwiedź nasz profil na Facebooku</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Nawigacja
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#oferta" className="hover:text-amber-400 transition-colors">Oferta schodów i altan</a>
              </li>
              <li>
                <a href="#dlaczego-my" className="hover:text-amber-400 transition-colors">Dlaczego Komfort na Wymiar</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria realizacji</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-amber-400 transition-colors">Dane kontaktowe</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Kontakt Częstochowa
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.city} i woj. śląskie</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Komfort na Wymiar. Wszelkie prawa zastrzeżone.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors"
          >
            <span>Do góry</span>
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
