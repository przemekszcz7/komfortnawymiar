import React from 'react';
import { ChevronRight, Phone, Award, ShieldCheck, Ruler, ArrowDown, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/galleryData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image - Bright and Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.heroBgUrl}
          alt="Komfort na Wymiar - Nowoczesne schody i altany"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 filter brightness-95 gpu-accelerated"
        />
        {/* Subtle, elegant dark overlay for optimal contrast without hiding photo */}
        <div className="absolute inset-0 bg-neutral-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/50 to-transparent"></div>
        
        {/* Subtle decorative gold light glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
        <div className="max-w-3xl space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/40 backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-wider text-amber-200 uppercase">
              Rzemiosło Premium • Częstochowa
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.1]">
              Komfort <span className="gold-text-gradient">na Wymiar</span>
            </h1>
            <p className="text-xl sm:text-2xl font-light text-amber-100/90 font-serif leading-snug">
              Nowoczesne schody i altany ogrodowe tworzone specjalnie dla Ciebie
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
            {COMPANY_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-neutral-950 font-extrabold text-base tracking-wide hover:brightness-110 shadow-xl shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Phone className="w-5 h-5 text-neutral-950" />
              <span>Zadzwoń: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#galeria"
              className="px-8 py-4 rounded-xl bg-neutral-900/90 border border-amber-500/40 text-neutral-100 hover:text-amber-300 hover:bg-neutral-800/90 font-semibold text-base transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Zobacz realizacje
            </a>
          </div>

          {/* Key Value Badges Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-800/80">
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Ruler className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">100% Na wymiar</p>
                <p className="text-[11px] text-neutral-400">Precyzyjny pomiar</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Rzemieślnicza jakość</p>
                <p className="text-[11px] text-neutral-400">Trwałe materiały</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 text-neutral-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Gwarancja wykonania</p>
                <p className="text-[11px] text-neutral-400">Pewny montaż</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-amber-400/60 hover:text-amber-400 transition-colors cursor-pointer">
        <a href="#oferta" className="flex flex-col items-center gap-1">
          <span className="text-[10px] tracking-widest uppercase font-semibold">Odkryj ofertę</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
