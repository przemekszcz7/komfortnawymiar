import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Layers, TreePine, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/galleryData';

interface OfferSectionProps {
  onSelectCategory: (category: 'schody' | 'altany') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<'schody' | 'altany'>('schody');

  const stairsPoints = [
    'schody drewniane',
    'nowoczesne konstrukcje',
    'indywidualne projekty',
    'dopracowane detale',
    'trwałe materiały'
  ];

  const gazeboPoints = [
    'altany ogrodowe na wymiar',
    'konstrukcje dopasowane do ogrodu',
    'solidne wykonanie',
    'estetyka i funkcjonalność'
  ];

  return (
    <section id="oferta" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Co tworzymy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Ekskluzywna <span className="gold-text-gradient">Oferta na Wymiar</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Łączymy naturalną szlachetność drewna z nowoczesną stalą. Każda nasza realizacja powstaje od pierwszego szkicu po precyzyjny montaż.
          </p>

          {/* Offer Tabs Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl mt-6">
            <button
              onClick={() => setActiveTab('schody')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'schody'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Schody na wymiar</span>
            </button>
            <button
              onClick={() => setActiveTab('altany')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'altany'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <TreePine className="w-4 h-4" />
              <span>Altany ogrodowe</span>
            </button>
          </div>
        </div>

        {/* Dynamic Main Content Display */}
        {activeTab === 'schody' ? (
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-neutral-900/60 border border-amber-500/20 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            
            {/* Text & Points Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                  Wnętrza Premium
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Nowoczesne schody na wymiar
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed">
                  Tworzymy schody dopasowane do charakteru wnętrza. Niezależnie od tego, czy marzysz o klasycznych schodach drewnianych, czy loftowych konstrukcjach ze stalą – realizujemy wizje bez kompromisów.
                </p>
              </div>

              {/* List of explicitly required items */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {stairsPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-neutral-200 capitalize">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#galeria"
                  onClick={() => onSelectCategory('schody')}
                  className="px-6 py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 font-bold text-sm transition-all flex items-center gap-2 group"
                >
                  <span>Zobacz galerię schodów</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Zadzwoń po wycenę: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Visual Photo Card Showcase */}
            <div className="lg:col-span-5 relative group">
              <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                <img
                  src="https://i.ibb.co/CNJSydb/730598825-122099633547371936-6472174229825977383-n.jpg"
                  alt="Schody drewniane na wymiar Komfort na Wymiar Częstochowa"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 gpu-accelerated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
              </div>
            </div>

          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-neutral-900/60 border border-amber-500/20 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            
            {/* Text & Points Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                  Przestrzeń Ogrodowa
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                  Altany ogrodowe na wymiar
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed">
                  Projektujemy wyjątkowe miejsca wypoczynku. Tworzymy trwale zabezpieczone konstrukcje drewniane, które stają się sercem letniego wypoczynku w Twoim ogrodzie.
                </p>
              </div>

              {/* List of explicitly required gazebo points */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {gazeboPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-neutral-200 capitalize">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#galeria"
                  onClick={() => onSelectCategory('altany')}
                  className="px-6 py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 font-bold text-sm transition-all flex items-center gap-2 group"
                >
                  <span>Zobacz galerię altan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Zadzwoń po wycenę: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Visual Photo Card Showcase for Gazebo */}
            <div className="lg:col-span-5 relative group">
              <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                <img
                  src="https://i.ibb.co/Sgs79h4/730917710-122099633949371936-583674755406265048-n.jpg"
                  alt="Altana ogrodowa na wymiar Częstochowa"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 gpu-accelerated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
