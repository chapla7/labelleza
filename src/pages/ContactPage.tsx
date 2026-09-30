import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  Mail
} from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';

export const ContactPage: React.FC = () => {
  const routerLocation = useLocation();

  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Wedding');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('100–250');
  const [eventLocation, setEventLocation] = useState('');
  const [cuisinePreference, setCuisinePreference] = useState('Kerala Sadya (Traditional Banana Leaf)');
  const [approxBudget, setApproxBudget] = useState('Standard Premium');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [selectedOffice, setSelectedOffice] = useState<'kerala' | 'mumbai'>('kerala');
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill event type if passed in query string (?service=...)
  useEffect(() => {
    const params = new URLSearchParams(routerLocation.search);
    const serviceParam = params.get('service');
    if (serviceParam === 'weddings') setEventType('Wedding');
    if (serviceParam === 'corporate') setEventType('Corporate Event');
    if (serviceParam === 'festivals') setEventType('Festival / Religious Function');
    if (serviceParam === 'private') setEventType('Private Celebration');
  }, [routerLocation.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp Message
    const targetPhone = selectedOffice === 'kerala' ? '919995490381' : '919867699473';
    const officeName = selectedOffice === 'kerala' ? 'Kerala HQ' : 'Mumbai Hub';

    const message = `*NEW CATERING ENQUIRY — LA BELLEZA*
----------------------------------------
*Host Information:*
• Name: ${fullName || 'Not provided'}
• Phone: ${phoneNumber || 'Not provided'}
• Email: ${email || 'Not provided'}

*Event Details:*
• Office: ${officeName}
• Event Type: ${eventType}
• Date: ${eventDate || 'To be decided'}
• Expected Guests: ${guestCount}
• Event Venue/Location: ${eventLocation || 'Not specified'}
• Preferred Cuisine: ${cuisinePreference}
• Budget Category: ${approxBudget}

*Additional Notes & Requests:*
${additionalDetails || 'None'}
----------------------------------------
_Sent via La Belleza Official Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] pt-24 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FloralMotif variant="bloom" size={18} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Direct Banqueting Inquiry
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#221B2B] leading-tight">
          Get in <span className="text-[#C6982C]">Touch</span>
        </h1>

        <FloralMotif variant="divider" />

        <p className="text-base sm:text-lg text-[#61586C] max-w-xl mx-auto leading-relaxed">
          Ready to make your event special? Contact us for a free quote, customized tasting menu, and event feasibility check.
        </p>
      </section>

      {/* Main Grid: Left Contact Info / Right Request a Quote Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Quick Contact Cards & Business Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#4E2667] mb-2">
              Contact Information
            </h3>

            {/* Kerala Phone */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3D8ED] shadow-2xs flex items-center gap-4 hover:border-[#6D3E8E] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFF9] text-[#6D3E8E] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#8C8496] block uppercase tracking-wider">
                  Kerala Direct (Sijo Parekkadan)
                </span>
                <a
                  href={`tel:${OFFICE_LOCATIONS.kerala.cleanPhone}`}
                  className="font-serif text-lg font-bold text-[#2A1F36] hover:text-[#6D3E8E]"
                >
                  {OFFICE_LOCATIONS.kerala.phone}
                </a>
              </div>
            </div>

            {/* Mumbai Phone */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3D8ED] shadow-2xs flex items-center gap-4 hover:border-[#6D3E8E] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FCF7E6] text-[#9F751B] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#8C8496] block uppercase tracking-wider">
                  Mumbai Hub (Onenest Media)
                </span>
                <a
                  href={`tel:${OFFICE_LOCATIONS.mumbai.cleanPhone}`}
                  className="font-serif text-lg font-bold text-[#2A1F36] hover:text-[#6D3E8E]"
                >
                  {OFFICE_LOCATIONS.mumbai.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3D8ED] shadow-2xs flex items-center gap-4 hover:border-[#2E7D32] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF6E6] text-[#2E7D32] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#8C8496] block uppercase tracking-wider">
                  WhatsApp Support
                </span>
                <a
                  href="https://wa.me/919995490381?text=Hello%20La%20Belleza,%20I%20would%20like%20to%20discuss%20catering."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg font-bold text-[#2A1F36] hover:text-[#2E7D32]"
                >
                  +91 99954 90381 (Instant Chat)
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3D8ED] shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8F5FB] text-[#6D3E8E] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#8C8496] block uppercase tracking-wider">
                  Official Email
                </span>
                <a
                  href="mailto:contact@labellezaevents.com"
                  className="text-sm font-semibold text-[#2A1F36] hover:text-[#6D3E8E]"
                >
                  contact@labellezaevents.com
                </a>
              </div>
            </div>

            {/* Addresses Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#E3D8ED] shadow-2xs space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6982C] shrink-0 mt-0.5" />
                <div className="text-xs text-[#524B5D] leading-relaxed">
                  <span className="font-bold text-[#2A1F36] block">
                    Kerala Kitchen HQ:
                  </span>
                  {OFFICE_LOCATIONS.kerala.address}
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-[#F0EBF5]">
                <MapPin className="w-5 h-5 text-[#6D3E8E] shrink-0 mt-0.5" />
                <div className="text-xs text-[#524B5D] leading-relaxed">
                  <span className="font-bold text-[#2A1F36] block">
                    Mumbai Office:
                  </span>
                  {OFFICE_LOCATIONS.mumbai.address}
                </div>
              </div>
            </div>

            {/* Business Hours (Styled like Reference Image 7) */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-[#9F751B] to-[#74500D] text-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#FBF5DF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FBF5DF]">
                  Kitchen &amp; Office Hours
                </span>
              </div>
              <p className="font-serif text-lg font-bold">
                Monday – Sunday: 7:00 AM – 10:00 PM
              </p>
              <p className="text-xs text-white/80 mt-1">
                24/7 dedicated dispatch for pre-booked wedding &amp; emergency banquet events.
              </p>
            </div>
          </div>

          {/* RIGHT: Request a Quote Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D8ED] shadow-lg">
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1F36]">
                Request a Custom Quote
              </h2>
              <p className="text-xs sm:text-sm text-[#665E70] mt-1">
                Fill in your celebration specifications below. Your details will be automatically structured into an instant WhatsApp enquiry sent directly to our culinary captains.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Target Office */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4E2667] mb-1.5">
                  Select Regional Catering Team *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedOffice('kerala')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                      selectedOffice === 'kerala'
                        ? 'bg-[#F4EFF9] border-[#6D3E8E] text-[#4E2667] ring-1 ring-[#6D3E8E]'
                        : 'bg-white border-[#E0D8EA] text-[#665E70] hover:bg-[#FDFBFD]'
                    }`}
                  >
                    <span className="block font-bold text-[#2A1F36]">Kerala HQ</span>
                    <span className="text-[10px] text-[#8C8496]">Sijo (+91 99954 90381)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedOffice('mumbai')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                      selectedOffice === 'mumbai'
                        ? 'bg-[#FCF7E6] border-[#C6982C] text-[#9F751B] ring-1 ring-[#C6982C]'
                        : 'bg-white border-[#E0D8EA] text-[#665E70] hover:bg-[#FDFBFD]'
                    }`}
                  >
                    <span className="block font-bold text-[#2A1F36]">Mumbai Hub</span>
                    <span className="text-[10px] text-[#8C8496]">Onenest (+91 98676 99473)</span>
                  </button>
                </div>
              </div>

              {/* Personal Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sijo Parekkadan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  />
                </div>
              </div>

              {/* Phone & Event Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99954 90381"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Type of Event *
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Reception">Reception</option>
                    <option value="Engagement">Engagement (Betrothal)</option>
                    <option value="Corporate Event">Corporate Event / Gala</option>
                    <option value="Festival">Festival (Onam / Vishu)</option>
                    <option value="Religious Function">Religious Function (Baptism / Communion / Feast)</option>
                    <option value="Birthday">Birthday Function</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Private Function">Private Family Gathering</option>
                    <option value="Other">Other Grand Celebration</option>
                  </select>
                </div>
              </div>

              {/* Event Date & Guest Count Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Expected Guest Count *
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  >
                    <option value="Under 50">Under 50 Guests</option>
                    <option value="50–100">50 – 100 Guests</option>
                    <option value="100–250">100 – 250 Guests</option>
                    <option value="250–500">250 – 500 Guests</option>
                    <option value="500–1000">500 – 1,000 Guests</option>
                    <option value="1000+">1,000+ Guests (Royal Banquet)</option>
                  </select>
                </div>
              </div>

              {/* Event Location & Cuisine Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Event Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thrissur / Kochi / Mira Road"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                    Cuisine / Food Preferences
                  </label>
                  <select
                    value={cuisinePreference}
                    onChange={(e) => setCuisinePreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                  >
                    <option value="Kerala Sadya (Traditional Banana Leaf)">Kerala Sadya (Plantain Leaf Vegetarian)</option>
                    <option value="Traditional Kerala Non-Veg Feast (Appam, Parotta, Beef, Fish)">Traditional Kerala Non-Veg Feast</option>
                    <option value="Malabar Wedding Biryani Feast">Malabar Thalassery Dum Biryani Feast</option>
                    <option value="Fusion Banquet (Kerala + North Indian + Live Counters)">Fusion Banquet (Kerala + North Indian + Live Counters)</option>
                    <option value="Custom Event Menu Consultation">Custom Tailored Menu</option>
                  </select>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label className="block text-xs font-semibold text-[#3E3846] mb-1">
                  Tell us about your event... (Special requests, tasting date)
                </label>
                <textarea
                  rows={3}
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Share details on venue timing, dietary restrictions, preferred sweets, or setup requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD0EE] text-sm text-[#2A1F36] focus:outline-none focus:ring-2 focus:ring-[#6D3E8E] transition-all bg-[#FCFBF8]"
                />
              </div>

              {/* Submit CTA (WhatsApp Generated) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#25D366] to-[#1EAA50] text-white shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-[#EAF6E6] border border-[#BDE3B6] text-xs text-[#226829] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2E7D32]" />
                  <span>
                    Your inquiry has been formulated and sent to WhatsApp. Our catering director will respond immediately with availability!
                  </span>
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* Embedded Location Maps Section (Kerala & Mumbai) */}
      <section className="py-20 mt-16 bg-[#FAF7F2] border-t border-[#EAE3F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
              Interactive Locations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B] mt-1">
              Find Our Offices
            </h2>
            <FloralMotif variant="divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kerala Map Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E3D8ED] shadow-sm">
              <div className="p-5 border-b border-[#EAE3F2] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2A1F36]">
                    Kerala Headquarters
                  </h3>
                  <p className="text-xs text-[#70687A]">
                    Kuttikad, Chalakudy, Thrissur · Sijo Parekkadan
                  </p>
                </div>
                <a
                  href={OFFICE_LOCATIONS.kerala.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F4EFF9] text-[#6D3E8E] hover:bg-[#6D3E8E] hover:text-white transition-colors"
                >
                  Directions ↗
                </a>
              </div>
              <div className="h-64 w-full">
                <iframe
                  title="Kerala Location"
                  src={OFFICE_LOCATIONS.kerala.mapEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Mumbai Map Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E3D8ED] shadow-sm">
              <div className="p-5 border-b border-[#EAE3F2] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2A1F36]">
                    Mumbai Operational Hub
                  </h3>
                  <p className="text-xs text-[#70687A]">
                    Mira Road East, Mumbai · Operated by Onenest Media
                  </p>
                </div>
                <a
                  href={OFFICE_LOCATIONS.mumbai.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FCF7E6] text-[#9F751B] hover:bg-[#C6982C] hover:text-white transition-colors"
                >
                  Directions ↗
                </a>
              </div>
              <div className="h-64 w-full">
                <iframe
                  title="Mumbai Location"
                  src={OFFICE_LOCATIONS.mumbai.mapEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
