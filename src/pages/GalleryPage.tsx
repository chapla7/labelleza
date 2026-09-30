import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';
import { LightboxModal } from '../components/LightboxModal';
import { Sparkles, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wedding' | 'sadya' | 'catering' | 'prep' | 'buffet'>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'wedding', label: 'Wedding Banquets' },
    { id: 'sadya', label: 'Kerala Sadya' },
    { id: 'buffet', label: 'Buffet & Urulis' },
    { id: 'prep', label: 'Culinary Prep' },
    { id: 'catering', label: 'Live Stations' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) =>
    activeFilter === 'all' ? true : photo.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] pt-24 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FloralMotif variant="bloom" size={18} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Visual Feasts &amp; Moments
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#221B2B] leading-tight">
          Our Wonderful <br />
          <span className="italic font-normal bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#C6982C] bg-clip-text text-transparent">
            Past Celebrations
          </span>
        </h1>

        <FloralMotif variant="divider" />

        <p className="text-base sm:text-lg text-[#61586C] max-w-2xl mx-auto leading-relaxed">
          Step into our visual showcase of grand wedding feasts, traditional plantain leaf Sadyas, gleaming brass chafers, and joyful gatherings.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#6D3E8E] text-white shadow-xs'
                    : 'bg-white border border-[#E0D5ED] text-[#554D60] hover:bg-[#F8F5FB] hover:text-[#6D3E8E]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Refined Masonry Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIndex(idx)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-[#E9E0F2]"
            >
              <div className="overflow-hidden bg-[#2D1B3E]">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FBF5DF] block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <LightboxModal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          imageSrc={filteredPhotos[selectedIndex].image}
          title={filteredPhotos[selectedIndex].title}
          caption={filteredPhotos[selectedIndex].caption}
          onPrev={() => setSelectedIndex((prev) => (prev! === 0 ? filteredPhotos.length - 1 : prev! - 1))}
          onNext={() => setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length)}
        />
      )}

    </div>
  );
};
