import React from 'react';
import { Link } from 'react-router-dom';
import { TIMELINE, STATS } from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Flame, Utensils } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] pt-24 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FloralMotif variant="bloom" size={18} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Our Legacy &amp; Philosophy
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#221B2B] leading-tight">
          From Vismaya Caterers <br />
          <span className="italic font-normal bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#C6982C] bg-clip-text text-transparent">
            to La Belleza
          </span>
        </h1>

        <FloralMotif variant="divider" />

        <p className="text-base sm:text-lg text-[#61586C] max-w-2xl mx-auto leading-relaxed">
          Over 15 years of culinary devotion, starting from our traditional roots in Chalakudy, Kerala, blossoming into a premier wedding and event food brand in Kerala and Mumbai.
        </p>
      </section>

      {/* Perspective Quote Box (Referencing Reference Image 8) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#E9E0F2] shadow-sm relative">
          <FloralMotif variant="wreath" size={36} className="mx-auto mb-4" />
          <blockquote className="font-serif text-2xl sm:text-3xl font-semibold italic text-[#4E2667] leading-relaxed mb-4">
            &ldquo;We believe that catering an event shouldn&apos;t just be about serving food — it should be a seamless, unforgettable reflection of Kerala warmth, dignity, and authentic culinary artistry.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C6982C]">
            — Sijo Parekkadan, Founder &amp; Master Culinary Director
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm sm:text-base text-[#595163] leading-relaxed">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1F36]">
              Rooted in Chalakudy, Spanning Two Vibrant States
            </h3>
            <p>
              When <strong>Vismaya Caterers</strong> opened its doors in July 2008, the founding mission was straightforward: uphold the original sanctity of Kerala cooking. We resisted commercial shortcuts, choosing instead to roast our own spices in heavy iron pans, source cold-pressed coconut oil, and cook payasams slowly in authentic bell-metal urulis.
            </p>
            <p>
              By May 2013, having built an enviable reputation across Thrissur and Ernakulam, we inaugurated our dedicated commercial catering kitchen and expanded to <strong>La Belleza Events &amp; Wedding Planners</strong>, incorporating luxurious food presentation, brass chafing banquets, and white-glove event hospitality.
            </p>
            <p>
              In 2025, meeting the growing desire for authentic South Indian and Kerala catering among Malayalee families and pan-Indian food connoisseurs in Western India, La Belleza established its <strong>Mumbai wing in Mira Road</strong>, in partnership with Onenest Media.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DEF2] aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
              alt="La Belleza Chefs and Kitchen Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 text-white">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FBF5DF] font-bold">
                  Heritage Craftsmanship
                </span>
                <p className="font-serif text-lg font-bold">
                  Tradition Passed Down Through Family Recipes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronological Timeline */}
      <section className="py-16 bg-[#FBF9F5] border-y border-[#EAE3F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
              Our Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B] mt-1">
              The Journey of La Belleza
            </h2>
            <FloralMotif variant="divider" />
          </div>

          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE1F2] shadow-xs relative pl-16 sm:pl-20 hover:shadow-md transition-shadow"
              >
                {/* Visual Node */}
                <div className="absolute left-6 sm:left-7 top-8 w-6 h-6 rounded-full border-2 border-[#6D3E8E] bg-white flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C6982C]" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[#6D3E8E]">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1F36]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9F751B] bg-[#FCF7E6] px-3 py-1 rounded-full border border-[#E8D7A1]">
                    {item.highlight}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#C6982C] mb-2">
                  {item.dateExact} · {item.subtitle}
                </div>

                <p className="text-sm text-[#5E5669] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Our Guiding Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B] mt-1">
            Why Kerala &amp; Mumbai Families Choose Us
          </h2>
          <FloralMotif variant="divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-7 border border-[#E7DEEF] shadow-2xs text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EFF9] text-[#6D3E8E] mx-auto flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">
              Authentic Ingredients
            </h4>
            <p className="text-xs sm:text-sm text-[#665E70] leading-relaxed">
              We never use artificial colors or commercial flavor enhancers. Only cold-pressed coconut oil, fresh curry leaves, and Marayoor jaggery.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-[#E7DEEF] shadow-2xs text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FCF7E6] text-[#9F751B] mx-auto flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">
              Pristine Commercial Kitchens
            </h4>
            <p className="text-xs sm:text-sm text-[#665E70] leading-relaxed">
              Hygienic prep facilities, temperature-controlled transport vessels, and uniformed culinary staff trained in rigorous food safety.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-[#E7DEEF] shadow-2xs text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EFF9] text-[#6D3E8E] mx-auto flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2A1F36] mb-2">
              Heartfelt Hospitality
            </h4>
            <p className="text-xs sm:text-sm text-[#665E70] leading-relaxed">
              Serving every guest with warmth, attentiveness, and patience — ensuring everyone leaves with cherished memories and a satisfied soul.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 max-w-4xl mx-auto px-4 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#6D3E8E] text-white hover:bg-[#4E2667] transition-all shadow-md"
        >
          <span>Connect with Our Leadership Team</span>
          <ArrowRight className="w-4 h-4 text-[#FBF5DF]" />
        </Link>
      </section>

    </div>
  );
};
