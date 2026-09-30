import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, ArrowUpRight, Search, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { LaBellezaLogo } from './LaBellezaLogo';
import { FloralMotif } from './FloralMotif';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Floating Glassy Capsule Navbar (Ref: image.png) */}
      <header className="fixed top-1.5 sm:top-3 left-0 right-0 z-50 px-2 sm:px-6 max-w-7xl mx-auto pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto w-full rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(78,38,103,0.12)] border border-white/80 py-1 sm:py-2 px-2.5 sm:px-6'
              : 'bg-white/75 backdrop-blur-xl shadow-[0_6px_25px_rgba(78,38,103,0.06)] border border-white/60 py-1.5 sm:py-2.5 px-3 sm:px-6'
          }`}
        >
          {/* Mobile Layout (Sleek, reduced vertical length, standout title, single-line subtitle, no search) */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Left: Compact Hamburger Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 -ml-1 text-[#2A1F36] hover:text-[#6D3E8E] focus:outline-none transition-colors"
              aria-label="Open Navigation Menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

            {/* Center: Brand with Standout Title and Single-Line Subtitle */}
            <Link to="/" className="flex items-center gap-2 text-center" aria-label="La Belleza Home">
              <img
                src="https://i.ibb.co/RpJrB4d2/logo-labelleza.png"
                alt="La Belleza Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
              />
              <div className="flex flex-col items-center justify-center">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#4E2667] leading-none tracking-tight">
                  La Belleza
                </span>
                <span className="font-serif text-[11px] sm:text-xs font-semibold text-[#C6982C] leading-tight whitespace-nowrap mt-0.5">
                  Event &amp; Wedding Caterers
                </span>
              </div>
            </Link>

            {/* Right: Reduced Size Quote Action (Search removed for clean minimalism) */}
            <div className="flex items-center -mr-0.5">
              <Link
                to="/contact"
                className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#6D3E8E] to-[#4E2667] text-white shadow-xs hover:opacity-95 transition-opacity"
              >
                Quote
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left: Logo with Matched Size */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="La Belleza Home">
              <img
                src="https://i.ibb.co/RpJrB4d2/logo-labelleza.png"
                alt="La Belleza Logo"
                className="w-11 h-11 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight text-[#4E2667] leading-none">
                  La Belleza
                </span>
                <span className="font-serif text-lg lg:text-xl font-medium tracking-normal text-[#C6982C] leading-tight mt-0.5">
                  Event &amp; Wedding Caterers
                </span>
              </div>
            </Link>

            {/* Center: Navigation Links */}
            <nav className="flex items-center space-x-1 lg:space-x-1.5 bg-[#FAF7FD]/80 p-1 rounded-full border border-[#E9DFF3]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#6D3E8E] text-white shadow-xs'
                        : 'text-[#483F52] hover:text-[#6D3E8E] hover:bg-white/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Phone & Quote CTA */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-[#5E5669] hover:text-[#6D3E8E] transition-colors rounded-full hover:bg-white/60"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="tel:+919995490381"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#5B5266] hover:text-[#6D3E8E] px-2.5 py-1.5"
                title="Call Kerala Office"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6982C]" />
                <span>+91 99954 90381</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#6D3E8E] to-[#4E2667] text-white shadow-sm hover:shadow-[0_6px_20px_rgba(109,62,142,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FBF5DF]" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl border border-[#DCD0EE]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#6D3E8E]" />
                <span className="text-xs uppercase font-bold text-[#4E2667] tracking-wider">
                  Search Kerala Dishes &amp; Catering Options
                </span>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-[#8C8496] hover:text-[#2A1F36]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <input
                type="text"
                autoFocus
                placeholder="e.g. Biryani, Sadya, Avial, Appam, Fish Curry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] bg-[#FCFBF8]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#6D3E8E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#52296E] transition-colors"
              >
                Search
              </button>
            </form>

            <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
              <span className="text-[#8C8496] py-0.5">Popular:</span>
              {['Sadya', 'Thalassery Biryani', 'Palada Payasam', 'Beef Roast', 'Appam'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    navigate(`/menu?q=${encodeURIComponent(tag)}`);
                    setSearchOpen(false);
                  }}
                  className="px-2.5 py-0.5 rounded-full bg-[#F4EFF9] text-[#6D3E8E] hover:bg-[#6D3E8E] hover:text-white transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer (Smooth Glassmorphism) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-md animate-fade-in">
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FCFBF8]/95 backdrop-blur-2xl shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-r border-[#EADEEF]">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EADEEF]">
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.ibb.co/RpJrB4d2/logo-labelleza.png"
                    alt="La Belleza"
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <span className="font-serif text-lg font-bold text-[#4E2667] block leading-none">
                      La Belleza
                    </span>
                    <span className="font-serif text-base font-semibold text-[#C6982C] block leading-tight">
                      Event &amp; Wedding Caterers
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#5E5866] hover:bg-[#F3EDF8]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#F4EFF9] text-[#4E2667] font-bold border-l-4 border-[#C6982C]'
                          : 'text-[#3E3846] hover:bg-[#F8F5FB] hover:text-[#6D3E8E]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <FloralMotif variant="bloom" size={16} />}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#EADEEF] space-y-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#6D3E8E] to-[#4E2667] text-white shadow-md text-center"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919995490381?text=Hello%20La%20Belleza,%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold text-[#1F1A24] bg-[#F2F8ED] border border-[#C5E1B9] hover:bg-[#E7F3DF] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <div className="text-center text-[11px] text-[#7A7284] pt-1">
                Kerala: +91 99954 90381 · Mumbai: +91 98676 99473
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
