import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Users, 
  Sparkles, 
  UtensilsCrossed, 
  Award,
  ChevronRight
} from 'lucide-react';
import { EVENT_TYPES } from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FloralMotif variant="bloom" size={18} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Comprehensive Event Food Services
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#221B2B] leading-tight">
          Catering Tailored for Every <br />
          <span className="italic font-normal bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#C6982C] bg-clip-text text-transparent">
            Scale &amp; Celebration
          </span>
        </h1>

        <FloralMotif variant="divider" />

        <p className="text-base sm:text-lg text-[#61586C] max-w-2xl mx-auto leading-relaxed">
          From 50-guest intimate family betrothals to 5,000+ attendee royal wedding banquets and corporate conferences, La Belleza delivers uncompromising taste, pristine hygiene, and graceful service.
        </p>
      </section>

      {/* Services Grid (In-depth) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {EVENT_TYPES.map((evt, idx) => (
          <div
            key={evt.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Media (6 cols) */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DEF2] aspect-[4/3] bg-[#2E183E]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-bold">
                    Service {evt.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
                    {evt.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Description & Inclusions (6 cols) */}
            <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#C6982C] px-2.5 py-0.5 rounded-md bg-[#FCF7E6] border border-[#E8D7A1]">
                  CATEGORY {evt.number}
                </span>
                <span className="text-xs font-medium text-[#7A7185]">
                  {evt.subtitle}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A1F36]">
                {evt.title}
              </h2>

              <p className="text-sm sm:text-base text-[#5E5669] leading-relaxed">
                {evt.description}
              </p>

              <div className="bg-[#FAF7FD] rounded-2xl p-5 border border-[#EADEEF]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#4E2667] mb-3">
                  Signature Inclusions &amp; Setup:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {evt.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3E3846]">
                      <CheckCircle2 className="w-4 h-4 text-[#C6982C] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={`/contact?service=${evt.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#6D3E8E] text-white hover:bg-[#4E2667] transition-all shadow-sm"
                >
                  <span>Request Quote for {evt.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FBF5DF]" />
                </Link>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E2667] hover:text-[#C6982C] transition-colors"
                >
                  <span>Explore Suitable Menus</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* The La Belleza Catering Process */}
      <section className="py-20 bg-[#FBF9F5] border-y border-[#EAE3F2] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
              Seamless Banqueting Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#221B2B] mt-2">
              Our 4-Step Catering Experience
            </h2>
            <FloralMotif variant="divider" />
            <p className="text-sm text-[#61586C]">
              We handle every culinary nuance so you can savor your celebrations alongside your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#E3D8ED] shadow-xs">
              <span className="font-mono text-3xl font-bold text-[#C6982C] block mb-2">01</span>
              <h3 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">Consultation</h3>
              <p className="text-xs text-[#665E70] leading-relaxed">
                We review your event type, guest profile, regional taste preferences, and venue logistics.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E3D8ED] shadow-xs">
              <span className="font-mono text-3xl font-bold text-[#6D3E8E] block mb-2">02</span>
              <h3 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">Tasting &amp; Curation</h3>
              <p className="text-xs text-[#665E70] leading-relaxed">
                Schedule a tasting session at our kitchen to finalize dishes, spice balances, and live counters.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E3D8ED] shadow-xs">
              <span className="font-mono text-3xl font-bold text-[#C6982C] block mb-2">03</span>
              <h3 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">Site &amp; Layout Prep</h3>
              <p className="text-xs text-[#665E70] leading-relaxed">
                Our logistics captains visit the venue to map out buffet lanes, live kitchens, and water setups.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E3D8ED] shadow-xs">
              <span className="font-mono text-3xl font-bold text-[#6D3E8E] block mb-2">04</span>
              <h3 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">Grand Feast Delivery</h3>
              <p className="text-xs text-[#665E70] leading-relaxed">
                Uniformed hospitality stewards, hot copper warmers, and swift, gracious service for all attendees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <FloralMotif variant="wreath" size={32} className="mx-auto mb-3" />
        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B] mb-3">
          Plan Your Event Menu With Sijo Parekkadan
        </h3>
        <p className="text-sm text-[#61586C] max-w-lg mx-auto mb-6">
          Direct guidance from our founding culinary team in Kerala and Mumbai.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#6D3E8E] text-white hover:bg-[#4E2667] transition-all shadow-md"
        >
          <span>Get Your Free Event Estimate</span>
          <ArrowRight className="w-4 h-4 text-[#FBF5DF]" />
        </Link>
      </section>

    </div>
  );
};
