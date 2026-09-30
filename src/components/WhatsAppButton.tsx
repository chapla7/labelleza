import React, { useState } from 'react';
import { MessageCircle, X, MapPin, ExternalLink } from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/cateringData';

export const WhatsAppButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getWhatsAppLink = (number: string, region: string) => {
    const text = encodeURIComponent(
      `Hello La Belleza (${region}), I would like to inquire about event catering services for my upcoming function.`
    );
    return `https://wa.me/${number.replace(/\D/g, '')}?text=${text}`;
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end">
      {/* Quick Region Selector Popover */}
      {menuOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-xl border border-[#DCD0EE] p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0EBF5]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="text-xs font-semibold text-[#3D2C4D]">
                Chat with La Belleza
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#8C8496] hover:text-[#3D2C4D] p-1"
              aria-label="Close WhatsApp options"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-[#6E6678] mb-3 leading-relaxed">
            Select your preferred regional catering team to start an instant WhatsApp conversation:
          </p>

          <div className="space-y-2">
            {/* Kerala HQ */}
            <a
              href={getWhatsAppLink(OFFICE_LOCATIONS.kerala.cleanPhone, 'Kerala')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F5FB] hover:bg-[#F1E9F7] text-left transition-colors group"
            >
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#4E2667]">
                  <MapPin className="w-3 h-3 text-[#C6982C]" />
                  <span>Kerala HQ (Chalakudy)</span>
                </div>
                <div className="text-[11px] text-[#7A7185] mt-0.5">
                  Sijo Parekkadan · +91 99954 90381
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#6D3E8E] opacity-70 group-hover:opacity-100" />
            </a>

            {/* Mumbai Hub */}
            <a
              href={getWhatsAppLink(OFFICE_LOCATIONS.mumbai.cleanPhone, 'Mumbai')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#F5EEDF] text-left transition-colors group"
            >
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#6D3E8E]">
                  <MapPin className="w-3 h-3 text-[#C6982C]" />
                  <span>Mumbai Hub (Mira Road)</span>
                </div>
                <div className="text-[11px] text-[#7A7185] mt-0.5">
                  Onenest Media · +91 98676 99473
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#C6982C] opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:bg-[#20BA5A] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Open WhatsApp Catering Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C6982C] rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 drop-shadow-sm group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
