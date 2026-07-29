import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OfferSection } from './components/OfferSection';
import { WhyUsSection } from './components/WhyUsSection';
import { GallerySection } from './components/GallerySection';
import { CtaContactSection } from './components/CtaContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { GALLERY_ITEMS } from './data/galleryData';
import { GalleryItem } from './types';

export default function App() {
  const [isQuickInquiryOpen, setIsQuickInquiryOpen] = useState(false);
  const [prefilledTitle, setPrefilledTitle] = useState('');
  
  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setActiveLightboxItem(item);
    setActiveLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    const prevIndex = (activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveLightboxIndex(prevIndex);
    setActiveLightboxItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleNextLightbox = () => {
    const nextIndex = (activeLightboxIndex + 1) % GALLERY_ITEMS.length;
    setActiveLightboxIndex(nextIndex);
    setActiveLightboxItem(GALLERY_ITEMS[nextIndex]);
  };

  const handleInquireFromLightbox = (itemTitle: string) => {
    setIsLightboxOpen(false);
    setPrefilledTitle(itemTitle);
    setIsQuickInquiryOpen(true);
  };

  const handleOpenContact = () => {
    setPrefilledTitle('');
    setIsQuickInquiryOpen(true);
  };

  const handleSelectOfferCategory = () => {
    const element = document.getElementById('galeria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Header Navigation */}
      <Header
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
        />

        {/* Offer Section (Schody & Altany) */}
        <OfferSection
          onSelectCategory={handleSelectOfferCategory}
        />

        {/* Why Us Section */}
        <WhyUsSection />

        {/* Gallery Section */}
        <GallerySection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Final CTA & Contact Section */}
        <CtaContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        item={activeLightboxItem}
        currentIndex={activeLightboxIndex}
        totalCount={GALLERY_ITEMS.length}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        onInquire={handleInquireFromLightbox}
      />

      {/* Quick Inquiry Popover */}
      <QuickInquiryModal
        isOpen={isQuickInquiryOpen}
        onClose={() => setIsQuickInquiryOpen(false)}
        prefilledTitle={prefilledTitle}
      />

    </div>
  );
}
