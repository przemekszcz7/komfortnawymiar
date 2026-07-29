import React from 'react';
import { Phone, Mail, MapPin, Facebook, Sparkles, Clock, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/galleryData';

export const CtaContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Kontakt BAZOWY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Skontaktuj się <span className="gold-text-gradient">z nami</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-xl font-light leading-relaxed">
            Masz pomysł na wymarzone schody lub altanę? Porozmawiaj z nami bezpośrednio — służymy fachowym doradztwem i bezpłatną wyceną.
          </p>

          {/* Large Direct Phone Call Button */}
          <div className="pt-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-neutral-950 font-serif font-bold text-xl sm:text-2xl shadow-2xl shadow-amber-500/25 hover:brightness-110 transition-all transform hover:-translate-y-1"
            >
              <Phone className="w-7 h-7 text-neutral-950" />
              <span>Zadzwoń: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          
          {/* Phone Card */}
          <a 
            href={`tel:${COMPANY_INFO.phone}`} 
            className="p-8 rounded-3xl bg-neutral-900/80 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-2xl space-y-4 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-amber-400 tracking-wider">Telefon bezpośredni</p>
              <p className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors mt-1">
                {COMPANY_INFO.phone}
              </p>
              <p className="text-xs text-neutral-400 mt-2">Szybka konsultacja telefoniczna</p>
            </div>
          </a>

          {/* Email Card */}
          <a 
            href={`mailto:${COMPANY_INFO.email}`} 
            className="p-8 rounded-3xl bg-neutral-900/80 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-2xl space-y-4 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-amber-400 tracking-wider">E-mail</p>
              <p className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mt-1 break-all">
                {COMPANY_INFO.email}
              </p>
              <p className="text-xs text-neutral-400 mt-2">Napisz zapytanie ofertowe</p>
            </div>
          </a>

          {/* Location Card */}
          <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 space-y-4 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-amber-400 tracking-wider">Lokalizacja</p>
              <p className="text-lg font-serif font-bold text-white mt-1">
                {COMPANY_INFO.city}
              </p>
              <p className="text-xs text-neutral-400 mt-2">Świadczymy usługi w całym regionie</p>
            </div>
          </div>

          {/* Facebook Card */}
          <a 
            href={COMPANY_INFO.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-8 rounded-3xl bg-neutral-900/80 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-2xl space-y-4 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Facebook className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-amber-400 tracking-wider">Facebook</p>
              <p className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors mt-1">
                Komfort na Wymiar
              </p>
              <p className="text-xs text-amber-300/80 mt-2">Zobacz zdjęcia z nowych montaży</p>
            </div>
          </a>

        </div>

        {/* Working Hours Info */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-center max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Godziny przyjęć zgłoszeń</span>
          </div>
          <p className="text-base text-neutral-200 font-semibold">
            Poniedziałek – Sobota: <span className="text-amber-300">8:00 – 19:00</span>
          </p>
        </div>

      </div>
    </section>
  );
};
