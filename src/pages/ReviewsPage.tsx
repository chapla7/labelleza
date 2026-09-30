import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageSquareQuote, CheckCircle, ArrowRight, Filter } from 'lucide-react';
import { REVIEWS } from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';

export const ReviewsPage: React.FC = () => {
  const [filterRegion, setFilterRegion] = useState<'all' | 'kerala' | 'south' | 'north'>('all');

  const filtered = REVIEWS.filter((r) =>
    filterRegion === 'all' ? true : r.region === filterRegion
  );

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] pt-24 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FloralMotif variant="bloom" size={18} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Client Testimonials &amp; Voices
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#221B2B] leading-tight">
          Celebrations Blessed with <br />
          <span className="italic font-normal bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#C6982C] bg-clip-text text-transparent">
            Love &amp; Flavour
          </span>
        </h1>

        <FloralMotif variant="divider" />

        <p className="text-base sm:text-lg text-[#61586C] max-w-2xl mx-auto leading-relaxed">
          Read genuine impressions logged by hosts, wedding families, and corporate patrons across Kerala, South India, and Mumbai.
        </p>

        {/* Note on editable sample content */}
        <div className="mt-4 text-xs text-[#8A8196] italic">
          * Representative sample client reviews illustrating customer satisfaction across diverse Indian communities.
        </div>
      </section>

      {/* Region Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-center flex-wrap gap-2">
          <button
            onClick={() => setFilterRegion('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filterRegion === 'all'
                ? 'bg-[#6D3E8E] text-white shadow-xs'
                : 'bg-white border border-[#E3D8ED] text-[#554D60] hover:bg-[#F8F5FB]'
            }`}
          >
            All Reviews ({REVIEWS.length})
          </button>
          <button
            onClick={() => setFilterRegion('kerala')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filterRegion === 'kerala'
                ? 'bg-[#6D3E8E] text-white shadow-xs'
                : 'bg-white border border-[#E3D8ED] text-[#554D60] hover:bg-[#F8F5FB]'
            }`}
          >
            Kerala &amp; Malayalam (40%)
          </button>
          <button
            onClick={() => setFilterRegion('south')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filterRegion === 'south'
                ? 'bg-[#6D3E8E] text-white shadow-xs'
                : 'bg-white border border-[#E3D8ED] text-[#554D60] hover:bg-[#F8F5FB]'
            }`}
          >
            South India (Tamil &amp; Bengaluru)
          </button>
          <button
            onClick={() => setFilterRegion('north')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filterRegion === 'north'
                ? 'bg-[#6D3E8E] text-white shadow-xs'
                : 'bg-white border border-[#E3D8ED] text-[#554D60] hover:bg-[#F8F5FB]'
            }`}
          >
            Mumbai &amp; North India (Hindi &amp; English)
          </button>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6DEEE] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row: 5 Stars + Verified Host */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#C6982C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6982C]" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#2E7D32] bg-[#EAF6E6] px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Event Host</span>
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-sm sm:text-base text-[#2E2838] leading-relaxed italic mb-4 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                {/* Translation if in Malayalam, Tamil, or Hindi */}
                {rev.translation && (
                  <div className="bg-[#FAF7FD] p-3.5 rounded-2xl border border-[#EDE4F5] text-xs text-[#635B70] mb-4">
                    <span className="font-bold text-[#6D3E8E] uppercase tracking-wide block text-[10px] mb-0.5">
                      English Translation:
                    </span>
                    {rev.translation}
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#F0EBF5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#C6982C]/60"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#2A1F36]">
                      {rev.name}
                    </h4>
                    <div className="text-xs text-[#70687A]">
                      {rev.roleOrEvent}
                    </div>
                    <div className="text-[11px] text-[#C6982C] font-medium">
                      {rev.location} {rev.guestCount && `· ${rev.guestCount}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Submission CTA */}
      <section className="py-20 mt-16 max-w-4xl mx-auto px-4 text-center">
        <FloralMotif variant="wreath" size={32} className="mx-auto mb-3" />
        <h3 className="font-serif text-3xl font-bold text-[#221B2B] mb-2">
          Have We Catered for Your Family Event?
        </h3>
        <p className="text-sm text-[#61586C] max-w-md mx-auto mb-6">
          Share your feedback, favorite dishes, or event photographs directly with our founders on WhatsApp.
        </p>
        <a
          href="https://wa.me/919995490381?text=Hello%20La%20Belleza,%20I%20would%20like%20to%20share%20a%20review%20of%20our%20recent%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md transition-all"
        >
          <span>Share Your Feedback on WhatsApp</span>
        </a>
      </section>

    </div>
  );
};
