import React, { useState } from 'react';
import { Sparkles, Eye, RefreshCw } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const displayedItems = GALLERY_ITEMS.slice(0, visibleCount);

  return (
    <section id="galeria" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Galeria Realizacji</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Nasze <span className="gold-text-gradient">Projekty</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Zobacz przykłady wykonanych schodów oraz konstrukcji ogrodowych. Kliknij dowolne zdjęcie, aby powiększyć.
          </p>
        </div>

        {/* Gallery Image Grid - Clean, without text captions or section badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 shadow-xl cursor-pointer content-visibility-auto"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={`Realizacja ${index + 1} - Komfort na Wymiar`}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={400}
                height={320}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 gpu-accelerated"
              />

              {/* Gradient Hover Dark Overlay */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* View Icon Center Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300 font-bold">
                  <Eye className="w-7 h-7" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < GALLERY_ITEMS.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-4 rounded-xl bg-neutral-900 border border-amber-500/40 text-amber-300 hover:bg-neutral-800 font-bold text-sm transition-all shadow-xl inline-flex items-center gap-2 group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500 text-amber-400" />
              <span>Pokaż więcej zdjęć ({GALLERY_ITEMS.length - visibleCount} pozostało)</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
