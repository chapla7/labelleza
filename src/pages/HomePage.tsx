import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  MapPin, 
  Phone, 
  Star, 
  Calendar, 
  Users, 
  Sparkles,
  CheckCircle2,
  UtensilsCrossed,
  Clock
} from 'lucide-react';
import { 
  CATERING_HERO_SLIDES, 
  TRUSTED_COMMUNITIES, 
  EVENT_TYPES, 
  HOME_HOTEL_MENU,
  STATS, 
  REVIEWS, 
  GALLERY_PHOTOS, 
  TIMELINE, 
  OFFICE_LOCATIONS 
} from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';
import { LightboxModal } from '../components/LightboxModal';

export const HomePage: React.FC = () => {
  // Hero slide state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Video Section State
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Menu Section State (Reference Image 5: Hotel menu style with 5 dishes)
  const [activeMenuCat, setActiveMenuCat] = useState(0);

  // Auto transition hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CATERING_HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = CATERING_HERO_SLIDES[currentSlide];

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] overflow-x-hidden w-full max-w-full pt-16 sm:pt-20">
      
      {/* ==============================================================
          1. HERO SECTION (Minimalist Editorial, Event-Specific, Clean Whitespace)
          User Request: "Hero Section - remove the 4 cart. Instead use proper image as per refrences of each hero section. Change the titles, text as per evetns. House of Vismaya should at the end of the image. Minimal text, beutiful images, great whitespaces, beutiful fonts."
      ============================================================== */}
      <section className="relative px-3 sm:px-6 lg:px-8 py-3 sm:py-6 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E8DEF2] bg-[#160E20] min-h-[72vh] sm:min-h-[80vh] lg:min-h-[84vh] flex flex-col justify-between p-6 sm:p-12 lg:p-16">
          
          {/* Background Images with Smooth Crossfade & Editorial Vignette */}
          {CATERING_HERO_SLIDES.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transition-transform duration-10000`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center"
              />
              {/* Measured Editorial Gradient Scrim for WCAG AA readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35" />
            </div>
          ))}

          {/* Top Minimalist Event Indicator */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FBF5DF]" />
              <span>{slide.badge}</span>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? CATERING_HERO_SLIDES.length - 1 : prev - 1))}
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % CATERING_HERO_SLIDES.length)}
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Editorial Typography (Dynamic as per event) */}
          <div className="relative z-10 max-w-3xl my-auto py-8 sm:py-12">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-md">
              {slide.title}
            </h1>

            <p className="font-serif italic text-xl sm:text-3xl lg:text-4xl text-[#F4EFF9] mt-2 sm:mt-3 drop-shadow-sm font-normal">
              {slide.tagline}
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/85 max-w-xl font-light leading-relaxed drop-shadow-sm">
              {slide.subtitle}
            </p>

            {/* Clear Primary & Secondary CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#4E2667] text-white shadow-[0_10px_30px_rgba(109,62,142,0.45)] hover:shadow-[0_14px_40px_rgba(109,62,142,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Get Your Quote</span>
                <ArrowRight className="w-4 h-4 text-[#FBF5DF]" />
              </Link>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 transition-all"
              >
                <span>Explore Menu</span>
                <UtensilsCrossed className="w-4 h-4 text-[#FBF5DF]" />
              </Link>
            </div>
          </div>

          {/* End of Image: House of Vismaya & Slide Indicators */}
          <div className="relative z-10 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-xs sm:text-sm font-serif italic">
              <FloralMotif variant="bloom" size={14} />
              <span>From the House of Vismaya · Est. 2008</span>
            </div>

            {/* Minimal Slide Pagination Indicators */}
            <div className="flex items-center gap-2">
              {CATERING_HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-[#E6C875]' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          2. CLIENTS & ORGANIZATIONS SECTION (Matching Reference Image 2: brands.png)
          User Request: "For organization - use image for refrence with names"
      ============================================================== */}
      <section className="py-7 sm:py-8 bg-[#120F17] border-y border-[#2B2236] text-white overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-center sm:text-left">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#E58F65] block">
              Trusted Multi-Brand &amp; Corporate Services
            </span>
            <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
              Catering Partners &amp; Prestigious Organizations
            </h3>
          </div>
          <span className="text-[11px] font-mono text-white/50 hidden sm:inline">
            Over 1,000+ Gatherings Served
          </span>
        </div>

        {/* Infinite Looping Monogram + Brand Marquee */}
        <div className="relative w-full overflow-hidden pt-2">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
            {[...TRUSTED_COMMUNITIES, ...TRUSTED_COMMUNITIES].map((comm, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#C6982C]/50 hover:bg-white/10 transition-all shrink-0"
              >
                <span className="text-base select-none shrink-0">{comm.emblem}</span>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {comm.name}
                </span>
                <span className="text-[11px] font-mono text-white/40">
                  [{comm.city}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. TYPES OF EVENTS
          "Catering for Every Occasion" - 4 cards total (2x2 desktop, 1 on mobile)
      ============================================================== */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FloralMotif variant="bloom" size={18} />
            <span className="text-xs uppercase tracking-widest font-bold text-[#C6982C]">
              What&apos;s Coming Up
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#221B2B]">
            Catering for Every Occasion
          </h2>
          <FloralMotif variant="divider" />
          <p className="text-sm sm:text-base text-[#61586C] max-w-lg mx-auto">
            From regal multi-day Kerala weddings to high-stakes corporate symposiums, our dedicated chefs craft distinct, authentic culinary journeys.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {EVENT_TYPES.map((evt) => (
            <div
              key={evt.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8DEF2] shadow-sm hover:shadow-xl hover:border-[#6D3E8E]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Event Photograph with Subtle Zoom */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#2D1B3E]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                {/* Number Badge and Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#4E2667] font-mono text-xs font-bold border border-white/60 shadow-xs">
                    {evt.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    {evt.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
                    {evt.title}
                  </h3>
                </div>
              </div>

              {/* Content and Bullet Points */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#5E5669] leading-relaxed mb-4">
                    {evt.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {evt.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E3846]">
                        <CheckCircle2 className="w-4 h-4 text-[#C6982C] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA & Floral Line */}
                <div className="pt-3 border-t border-[#F0EBF5] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FloralMotif variant="bloom" size={15} />
                    <span className="text-xs text-[#8A8196] font-medium">Authentic Preparation</span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F4EFF9] text-[#6D3E8E] hover:bg-[#6D3E8E] hover:text-white transition-colors"
                  >
                    <span>Get Your Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221B2B] text-white hover:bg-[#6D3E8E] transition-colors shadow-md"
          >
            <span>View All Event Services &amp; Packages</span>
            <ArrowRight className="w-4 h-4 text-[#FBF5DF]" />
          </Link>
        </div>
      </section>

      {/* ==============================================================
          4. VIDEO SECTION (YouTube Embed: Auto-playing & Fits inside screen)
          User Request: "Video link - https://youtu.be/Uvwz7W71qqE?si=hbhyZcCRj4AJWXjM"
      ============================================================== */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2D6EE] bg-black w-full max-w-full">
          
          {/* YouTube Responsive Embed (No overflow, plays automatically with mute & loop) */}
          <div className="relative w-full aspect-video max-h-[58vh] sm:max-h-[66vh] overflow-hidden bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/Uvwz7W71qqE?autoplay=1&mute=1&loop=1&playlist=Uvwz7W71qqE&playsinline=1&controls=1&rel=0&modestbranding=1"
              title="La Belleza Event Catering Experience Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Under-video Subtitle & Actions Bar */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-[#2A1738] via-[#1E1128] to-[#120A1A] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <FloralMotif variant="bloom" size={14} />
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#FBF5DF]">
                  More Than Catering. It&apos;s an Experience.
                </span>
              </div>
              <p className="text-xs text-white/80 max-w-xl font-light">
                Witness authentic Kerala banquet preparation, live appam counters, and grand hospitality.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://youtu.be/Uvwz7W71qqE?si=hbhyZcCRj4AJWXjM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Watch on YouTube ↗</span>
              </a>

              <Link
                to="/contact"
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#6D3E8E] to-[#4E2667] text-white shadow-sm hover:opacity-95 transition-opacity"
              >
                Book Tasting
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          5. FOOD / MENU (Hotel Style with 5 Dishes per Category)
          User Request: "Menu - in the home page, the menu should be there like the hotel section with title & 5 dishes with more option resulting into seprate page"
      ============================================================== */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-y border-[#EAE3F2] w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header matching Reference Image 5 (menu.png) */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E1B22]">
              Our <span className="text-[#C6982C]">Menu</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#61586C] mt-2">
              Authentic Indian cuisine prepared with love and finest ingredients
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-[#C6982C] to-[#6D3E8E] mx-auto mt-3 rounded-full" />
          </div>

          {/* 4 Category Filter Tabs (Appetizers, Main Course, Breads & Rice, Desserts) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-white/80 p-1.5 rounded-2xl border border-[#E3D8ED]">
            {HOME_HOTEL_MENU.map((cat, idx) => {
              const isActive = idx === activeMenuCat;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveMenuCat(idx)}
                  className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center flex flex-col items-center justify-center gap-1 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6D3E8E] to-[#4E2667] text-white shadow-md'
                      : 'text-[#5E5669] hover:bg-[#F5EFF9] hover:text-[#4E2667]'
                  }`}
                >
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category 5 Dishes (Pill Card Grid matching reference image 5) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DAEE] shadow-sm">
            <div className="mb-5 flex items-center justify-between border-b border-[#F0EBF5] pb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#6D3E8E]">
                {HOME_HOTEL_MENU[activeMenuCat].category}
              </span>
              <span className="text-xs text-[#8A8196]">
                5 Signature Dishes Shown
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {HOME_HOTEL_MENU[activeMenuCat].dishes.map((dish, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#FCFBF8] border border-[#E9E0F2] hover:border-[#C6982C] hover:shadow-xs transition-all"
                >
                  {/* Warm Golden Bullet Dot (matching reference image 5) */}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C6982C] shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base font-bold text-[#2A1F36] truncate">
                      {dish.name}
                    </h4>
                    <p className="text-[11px] text-[#7A7185] truncate mt-0.5">
                      {dish.sub}
                    </p>
                  </div>

                  <span className={`w-2 h-2 rounded-full shrink-0 ${dish.isVeg ? 'bg-[#2E7D32]' : 'bg-[#B71C1C]'}`} />
                </div>
              ))}
            </div>

            {/* Resulting into Separate Page CTA */}
            <div className="mt-8 pt-6 border-t border-[#F0EBF5] text-center">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221B2B] text-white hover:bg-[#6D3E8E] transition-colors shadow-md"
              >
                <span>View Full Menu &amp; All 25+ Dishes</span>
                <ArrowRight className="w-4 h-4 text-[#FBF5DF]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          6. GALLERY (Exactly 2 Photos in 1 Row)
          User Request: "Gallery - add 2 photos in 1 row"
      ============================================================== */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <FloralMotif variant="bloom" size={16} />
            <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
              Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#221B2B]">
            Our Wonderful Past
          </h2>
          <FloralMotif variant="divider" />
        </div>

        {/* Exactly 2 photos in 1 row on mobile & desktop! */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-6">
          {GALLERY_PHOTOS.slice(0, 6).map((photo, pIdx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(pIdx)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-[#E9E1F2]"
            >
              <div className="aspect-[4/5] sm:aspect-[4/3] w-full overflow-hidden bg-[#2D1B3E]">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-5 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#FBF5DF] font-semibold">
                  {photo.category}
                </span>
                <h4 className="font-serif text-sm sm:text-lg font-bold text-white truncate">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Page Link */}
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#DCD0EE] text-[#4E2667] hover:bg-[#F4EFF9] transition-colors"
          >
            <span>Explore Full Gallery (10+ Photos)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C6982C]" />
          </Link>
        </div>
      </section>

      {/* ==============================================================
          7. OUR STATS SECTION (Map Larger Top & Bottom, Cards Scaled Down)
          User Request: "Our Stats - Map is small, the cart is flowing out of the image, small the cart little & increase the image size from top and bottom"
      ============================================================== */}
      <section className="relative py-24 sm:py-36 bg-[#FBF9F5] border-y border-[#EAE3F2] overflow-hidden w-full min-h-[500px] flex items-center justify-center">
        {/* Expanded Geographic Map Background with generous top and bottom breathing room */}
        <div 
          className="absolute inset-0 opacity-45 pointer-events-none bg-center bg-no-repeat bg-cover scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')`,
            backgroundBlendMode: 'overlay',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
          <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
              India&apos;s Dedicated Kerala Catering Brand
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#221B2B] mt-1.5">
              Serving Celebrations Across Regions
            </h2>
            <FloralMotif variant="divider" />
          </div>

          {/* Scaled-down Compact Stat Cards (Sitting comfortably inside the map container) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-4xl mx-auto">
            {STATS.map((st, sIdx) => (
              <div
                key={sIdx}
                className="glass-card bg-white/95 rounded-2xl p-3.5 sm:p-5 text-center border border-[#E8D7A1]/80 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="font-serif text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#9F751B] bg-clip-text text-transparent">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#2A1F36] mt-1">
                  {st.label}
                </div>
                <div className="text-[11px] text-[#7A7185] mt-0.5 line-clamp-1">
                  {st.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Clean Region Badges */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-[#DCD0EE] shadow-2xs text-xs text-[#4E2667]">
              <span className="font-bold text-[#C6982C]">Coverage:</span>
              <span>Thrissur · Chalakudy · Kochi · Mumbai · Thane · Mira Road</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. REVIEWS SECTION (Small & Compact Size)
          User Request: "Review - small the size of review section"
      ============================================================== */}
      <section className="py-10 sm:py-14 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <FloralMotif variant="bloom" size={15} />
            <span className="text-xs uppercase tracking-widest font-bold text-[#C6982C]">
              Customer Experiences
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221B2B]">
            What Our Families Say
          </h2>
          <FloralMotif variant="divider" />
        </div>

        {/* Small, Compact Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5DBEE] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-2.5 text-[#C6982C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6982C]" />
                  ))}
                </div>

                <p className="text-xs text-[#2E2838] leading-relaxed italic mb-3 font-normal line-clamp-3">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EBF5] flex items-center gap-2.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#C6982C]/50 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#2A1F36] truncate">
                    {rev.name}
                  </h4>
                  <div className="text-[10px] text-[#70687A] truncate">
                    {rev.roleOrEvent} · {rev.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6D3E8E] hover:text-[#4E2667]"
          >
            <span>Read All Client Reviews Across India ↗</span>
          </Link>
        </div>
      </section>

      {/* ==============================================================
          9. ABOUT US (Perspective & Milestones)
      ============================================================== */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-y border-[#EAE3F2] w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story & Vision (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <FloralMotif variant="bloom" size={16} />
                <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
                  Our Heritage &amp; Roots
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B] leading-tight">
                From Vismaya Caterers <br />
                <span className="italic font-normal text-[#C6982C]">to La Belleza</span>
              </h2>

              <p className="font-serif text-base italic text-[#4E2667]">
                &ldquo;We believe great catering is rooted in unwavering respect for original recipes, fresh local spices, and treating every guest like family.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-[#5E5669] leading-relaxed">
                Founded on 20 July 2008 as <strong>Vismaya Caterers</strong> in Chalakudy, Kerala, expanding in 2013 with our dedicated commercial kitchen and event planning as <strong>La Belleza</strong>. In 2025, we brought our culinary roots to <strong>Mumbai</strong>.
              </p>

              <div className="pt-1">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6D3E8E] hover:text-[#4E2667]"
                >
                  <span>Read Full Company Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Timeline Milestones (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {TIMELINE.map((item, tIdx) => (
                <div
                  key={tIdx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7DEEF] shadow-2xs hover:shadow-xs transition-shadow relative pl-12 sm:pl-14"
                >
                  <div className="absolute left-4 sm:left-5 top-5 w-4 h-4 rounded-full border-2 border-[#6D3E8E] bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6982C]" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base sm:text-lg font-bold text-[#6D3E8E]">
                        {item.year}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#2A1F36]">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8C8496] uppercase px-1.5 py-0.5 rounded bg-[#F4EFF9]">
                      {item.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-[#5E5669] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==============================================================
          10. LOCATION & CONTACT DIRECTION
      ============================================================== */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <FloralMotif variant="bloom" size={16} />
            <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
              Our Regional Hubs
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B]">
            Visit Our Kitchens &amp; Offices
          </h2>
          <FloralMotif variant="divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Map Column (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0D4EC] shadow-md bg-white min-h-[340px] flex flex-col">
            <div className="p-3.5 bg-[#F8F5FB] border-b border-[#E0D4EC] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C6982C]" />
                <span className="text-xs font-bold text-[#3E2254]">
                  Headquarters Map: Chalakudy, Thrissur, Kerala
                </span>
              </div>
              <a
                href={OFFICE_LOCATIONS.kerala.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6D3E8E] hover:underline font-semibold"
              >
                Directions ↗
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[280px]">
              <iframe
                title="La Belleza Kerala Office Location"
                src={OFFICE_LOCATIONS.kerala.mapEmbed}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Offices Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {/* Kerala Office */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E3D8ED] shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs uppercase font-bold text-[#6D3E8E] tracking-wider">
                  Main Office — Kerala
                </span>
                <span className="text-[10px] font-medium text-[#2E7D32] bg-[#EAF5E8] px-2 py-0.5 rounded-full">
                  Primary HQ &amp; Kitchen
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1F36]">
                Kuttikad, Chalakudy, Thrissur
              </h3>

              <div className="space-y-1.5 mt-3 text-xs sm:text-sm text-[#554D61]">
                <p><strong>Owner:</strong> {OFFICE_LOCATIONS.kerala.owner}</p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C6982C]" />
                  <a href={`tel:${OFFICE_LOCATIONS.kerala.cleanPhone}`} className="font-bold text-[#6D3E8E] hover:underline">
                    {OFFICE_LOCATIONS.kerala.phone}
                  </a>
                </p>
                <p className="text-xs text-[#6F677A]">{OFFICE_LOCATIONS.kerala.address}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2EDF7] flex items-center justify-between">
                <a
                  href={OFFICE_LOCATIONS.kerala.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221B2B] text-white hover:bg-[#6D3E8E] transition-colors"
                >
                  Get Directions ↗
                </a>
                <a
                  href="https://wa.me/919995490381?text=Hello%20Sijo%20Parekkadan,%20I%20would%20like%20to%20discuss%20catering."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2E7D32] hover:underline"
                >
                  WhatsApp Kerala ↗
                </a>
              </div>
            </div>

            {/* Mumbai Office */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E3D8ED] shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs uppercase font-bold text-[#9F751B] tracking-wider">
                  Second Office — Mumbai
                </span>
                <span className="text-[10px] font-medium text-[#6D3E8E] bg-[#F4EFF9] px-2 py-0.5 rounded-full">
                  Western Operations
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1F36]">
                Mira Road East, Mumbai
              </h3>

              <div className="space-y-1.5 mt-3 text-xs sm:text-sm text-[#554D61]">
                <p><strong>Operated By:</strong> {OFFICE_LOCATIONS.mumbai.operatedBy}</p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C6982C]" />
                  <a href={`tel:${OFFICE_LOCATIONS.mumbai.cleanPhone}`} className="font-bold text-[#6D3E8E] hover:underline">
                    {OFFICE_LOCATIONS.mumbai.phone}
                  </a>
                </p>
                <p className="text-xs text-[#6F677A]">{OFFICE_LOCATIONS.mumbai.address}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2EDF7] flex items-center justify-between">
                <a
                  href={OFFICE_LOCATIONS.mumbai.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221B2B] text-white hover:bg-[#6D3E8E] transition-colors"
                >
                  Get Directions ↗
                </a>
                <a
                  href="https://wa.me/919867699473?text=Hello%20Onenest%20Media,%20I%20would%20like%20to%20discuss%20catering%20in%20Mumbai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2E7D32] hover:underline"
                >
                  WhatsApp Mumbai ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <LightboxModal
          isOpen={selectedPhotoIndex !== null}
          onClose={() => setSelectedPhotoIndex(null)}
          imageSrc={GALLERY_PHOTOS[selectedPhotoIndex].image}
          title={GALLERY_PHOTOS[selectedPhotoIndex].title}
          caption={GALLERY_PHOTOS[selectedPhotoIndex].caption}
          onPrev={() => setSelectedPhotoIndex((prev) => (prev! === 0 ? GALLERY_PHOTOS.length - 1 : prev! - 1))}
          onNext={() => setSelectedPhotoIndex((prev) => (prev! + 1) % GALLERY_PHOTOS.length)}
        />
      )}

    </div>
  );
};
