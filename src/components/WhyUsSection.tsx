import React from 'react';
import { Compass, ShieldCheck, Sparkles, Ruler, Award, Check } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      id: '1',
      title: 'Indywidualny projekt',
      description: 'Każda realizacja powstaje według potrzeb klienta.',
      icon: Compass,
      badge: 'Brak szablonów'
    },
    {
      id: '2',
      title: 'Wysoka jakość wykonania',
      description: 'Stawiamy na trwałe materiały i precyzyjne wykonanie.',
      icon: ShieldCheck,
      badge: 'Wyselekcjonowane drewno'
    },
    {
      id: '3',
      title: 'Nowoczesny wygląd',
      description: 'Łączymy funkcjonalność z eleganckim designem.',
      icon: Sparkles,
      badge: 'Luksusowa estetyka'
    },
    {
      id: '4',
      title: 'Realizacje na wymiar',
      description: 'Tworzymy rozwiązania dopasowane do konkretnej przestrzeni.',
      icon: Ruler,
      badge: 'Perfekcyjne dopasowanie'
    }
  ];

  return (
    <section id="dlaczego-my" className="py-24 bg-neutral-900/80 relative overflow-hidden border-y border-amber-500/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Standard Komfort na Wymiar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Dlaczego warto <span className="gold-text-gradient">nam zaufać</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Gwarantujemy najwyższą kulturę montażu, dotrzymywanie ustalonych terminów i pasję do doskonałego rzemiosła.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Gold Top Border Highlight on Hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-amber-400/90">
                      {reason.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Check Mark */}
                <div className="pt-6 border-t border-neutral-900 flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-amber-400 transition-colors">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Realizacja w Częstochowie i okolicach</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Szukasz rzetelnego wykonawcy w Częstochowie?
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              Oferujemy bezpłatną konsultację i wstępną wycenę projektu. Przyjedziemy na miejsce, wymierzymy przestrzeń i doradzimy najlepsze rozwiązania materiałowe.
            </p>
          </div>
          <a
            href="tel:726657081"
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-500/20 shrink-0"
          >
            Zadzwoń: 726 657 081
          </a>
        </div>

      </div>
    </section>
  );
};
