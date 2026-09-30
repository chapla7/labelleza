import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { LaBellezaLogo } from './LaBellezaLogo';
import { FloralMotif } from './FloralMotif';
import { OFFICE_LOCATIONS } from '../data/cateringData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#FBF9F5] border-t border-[#EAE3F2] pt-16 pb-12 overflow-hidden text-[#3E3846]">
      {/* Decorative Floral Background Watermark Line-art */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-15 pointer-events-none">
        <FloralMotif variant="wreath" size={240} />
      </div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 opacity-15 pointer-events-none">
        <FloralMotif variant="wreath" size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#EAE3F2]">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <LaBellezaLogo size="lg" />
            <p className="font-serif text-xl italic text-[#4E2667] pt-2">
              &ldquo;Authentic Flavours. Beautifully Served.&rdquo;
            </p>
            <p className="text-sm text-[#665E70] leading-relaxed max-w-sm">
              Established in 2008 as Vismaya Caterers, expanding to La Belleza Events &amp; Wedding Planners. We provide authentic Kerala catering and royal banquet hospitality across Kerala and Mumbai.
            </p>

            {/* Newsletter input as seen in the reference image (Fieldtime style) */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#C6982C] mb-2">
                Seasonal Menus &amp; Event Updates
              </span>
              <form onSubmit={handleSubscribe} className="flex max-w-xs items-center gap-1.5 bg-white p-1 rounded-full border border-[#DCD0EE] shadow-2xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full text-xs px-3.5 py-1.5 bg-transparent border-none outline-none text-[#2D2836] placeholder-[#9E96A8]"
                />
                <button
                  type="submit"
                  className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#6D3E8E] text-white hover:bg-[#582F75] transition-colors"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-[#FBF5DF]" /> : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-[#2E7D32] mt-1 block">
                  Thank you! We have added you to our event updates.
                </span>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4E2667]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Kerala Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Event Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Our Story (Vismaya)
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#5F5869] hover:text-[#6D3E8E] transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4E2667]">
              Regional Hubs
            </h4>
            
            {/* Kerala Office */}
            <div className="space-y-1 text-xs">
              <span className="font-semibold text-[#1F1A24] block">
                Kerala Headquarters (Chalakudy)
              </span>
              <p className="text-[#665E70] flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6982C] shrink-0 mt-0.5" />
                <span>{OFFICE_LOCATIONS.kerala.address}</span>
              </p>
              <p className="text-[#665E70] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#6D3E8E] shrink-0" />
                <a href={`tel:${OFFICE_LOCATIONS.kerala.cleanPhone}`} className="hover:text-[#6D3E8E]">
                  {OFFICE_LOCATIONS.kerala.phone} (Sijo Parekkadan)
                </a>
              </p>
            </div>

            {/* Mumbai Office */}
            <div className="space-y-1 text-xs pt-2">
              <span className="font-semibold text-[#1F1A24] block">
                Mumbai Hub (Mira Road)
              </span>
              <p className="text-[#665E70] flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6982C] shrink-0 mt-0.5" />
                <span>{OFFICE_LOCATIONS.mumbai.address}</span>
              </p>
              <p className="text-[#665E70] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#6D3E8E] shrink-0" />
                <a href={`tel:${OFFICE_LOCATIONS.mumbai.cleanPhone}`} className="hover:text-[#6D3E8E]">
                  {OFFICE_LOCATIONS.mumbai.phone} (Operated by Onenest Media)
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Connect & Hospitality (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4E2667]">
              Direct Inquiries
            </h4>
            <p className="text-xs text-[#665E70] leading-relaxed">
              Available 7 days a week for wedding food tastings, menu customization consultations, and event logistics planning.
            </p>

            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/919995490381?text=Hello%20La%20Belleza,%20I%20am%20interested%20in%20event%20catering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#EBF5E9] text-[#1E5624] font-medium hover:bg-[#DFF0DC] transition-colors w-full"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span>Chat on WhatsApp (+91 99954 90381)</span>
              </a>

              <a
                href="mailto:contact@labellezaevents.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#E3D8ED] text-[#554D5F] font-medium hover:border-[#6D3E8E] transition-colors w-full"
              >
                <Mail className="w-4 h-4 text-[#C6982C]" />
                <span>contact@labellezaevents.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="block text-[11px] uppercase tracking-wider text-[#8A8094] mb-2 font-medium">
                Follow Our Culinary Journeys
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white border border-[#E3D8ED] flex items-center justify-center text-[#6D3E8E] hover:bg-[#6D3E8E] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white border border-[#E3D8ED] flex items-center justify-center text-[#6D3E8E] hover:bg-[#6D3E8E] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919995490381"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white border border-[#E3D8ED] flex items-center justify-center text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7285] gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 La Belleza. All Rights Reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">From the House of Vismaya</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Designed by</span>
            <a
              href="https://nextgen-alpha.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4E2667] hover:text-[#C6982C] transition-colors underline decoration-[#C6982C]/50 underline-offset-2"
            >
              NextGen Alpha
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
