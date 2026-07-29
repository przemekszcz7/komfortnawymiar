import React, { useState } from 'react';
import { X, Phone, Mail, Send, Check, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/galleryData';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTitle?: string;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose, prefilledTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState(prefilledTitle ? `Zapytanie dotyczące: ${prefilledTitle}` : '');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Szybki Kontakt</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Skontaktuj się z <span className="gold-text-gradient">Komfort na Wymiar</span>
          </h3>
          <p className="text-xs text-neutral-400">
            Zadzwoń od razu lub zostaw numer — oddzwonimy i omówimy szczegóły.
          </p>
        </div>

        {/* Quick Phone Box */}
        <div className="p-4 rounded-2xl bg-neutral-950 border border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-amber-400 uppercase font-bold">Telefon bezpośredni</p>
              <p className="text-base font-serif font-bold text-white">{COMPANY_INFO.phone}</p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-3.5 py-2 rounded-lg bg-amber-500 text-neutral-950 font-bold text-xs hover:bg-amber-400 transition-colors"
          >
            Zadzwoń
          </a>
        </div>

        {sent ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/40">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Dziękujemy!</h4>
            <p className="text-xs text-neutral-300">
              Otrzymaliśmy Twoje zgłoszenie. Oddzwonimy na numer <span className="text-amber-400 font-bold">{phone}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-xl bg-neutral-800 text-white text-xs font-bold"
            >
              Zamknij okno
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-1">
                Twoje imię
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jan Kowalski"
                className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-amber-400 focus:outline-none text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-1">
                Numer telefonu *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="726 657 081"
                className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-amber-400 focus:outline-none text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase mb-1">
                Wiadomość / Temat
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="np. Darmowy pomiar schodów w Częstochowie..."
                className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-amber-400 focus:outline-none text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-extrabold text-xs hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Poproś o darmowy kontakt</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
