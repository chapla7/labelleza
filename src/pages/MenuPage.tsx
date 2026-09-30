import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Sparkles, 
  Leaf, 
  Coffee, 
  Check, 
  Plus, 
  ArrowRight, 
  Info,
  Calendar,
  Users,
  Search,
  X
} from 'lucide-react';
import { MENU_ITEMS } from '../data/cateringData';
import { FloralMotif } from '../components/FloralMotif';
import { MenuItem } from '../types';

export const MenuPage: React.FC = () => {
  const routerLocation = useLocation();
  const [activeCategory, setActiveCategory] = useState<'all' | 'sadya' | 'traditional' | 'wedding' | 'desserts'>('all');
  const [vegOnlyFilter, setVegOnlyFilter] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [selectedEventGuests, setSelectedEventGuests] = useState('100–250');

  useEffect(() => {
    const params = new URLSearchParams(routerLocation.search);
    const q = params.get('q');
    if (q) {
      setSearchFilter(q);
      setActiveCategory('all');
    }
  }, [routerLocation.search]);

  const categories = [
    { id: 'all', label: 'Complete Menu', icon: Sparkles },
    { id: 'sadya', label: '01 · Kerala Sadya', icon: Leaf },
    { id: 'traditional', label: '02 · Traditional Kerala', icon: UtensilsCrossed },
    { id: 'wedding', label: '03 · Wedding Dum Specials', icon: Sparkles },
    { id: 'desserts', label: '04 · Desserts & Brews', icon: Coffee },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesVeg = vegOnlyFilter ? item.isVeg : true;
    const matchesSearch = searchFilter
      ? item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        (item.malayalamName && item.malayalamName.includes(searchFilter)) ||
        item.description.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return matchesCat && matchesVeg && matchesSearch;
  });

  const toggleDishSelection = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName) ? prev.filter((d) => d !== dishName) : [...prev, dishName]
    );
  };

  const getCustomMenuWhatsAppUrl = () => {
    const dishList = selectedDishes.length > 0 ? selectedDishes.join(', ') : 'Custom Selection';
    const text = encodeURIComponent(
      `Hello La Belleza, I would like to create a custom catering menu for ${selectedEventGuests} guests with the following selected items: ${dishList}.`
    );
    return `https://wa.me/919995490381?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1E1B22] pt-24 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FloralMotif variant="bloom" size={18} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#6D3E8E]">
            Heritage Culinary Curation
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#221B2B] leading-tight">
          Authentic Kerala <br />
          <span className="italic font-normal bg-gradient-to-r from-[#6D3E8E] via-[#8C4EAF] to-[#C6982C] bg-clip-text text-transparent">
            Event Catering Menu
          </span>
        </h1>

        <FloralMotif variant="divider" />

        <p className="text-base sm:text-lg text-[#61586C] max-w-2xl mx-auto leading-relaxed">
          Prepared exclusively for banquet services and celebrations. Every recipe uses cold-pressed coconut oil, stone-ground masalas, and pristine ingredients.
        </p>

        {/* Note on Customization */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF4E6] border border-[#E9DBB5] text-xs text-[#8A6318]">
          <Info className="w-4 h-4 shrink-0 text-[#C6982C]" />
          <span>Menus are 100% customizable according to your guest count, dietary preferences, and event timeline.</span>
        </div>
      </section>

      {/* Category Tabs & Veg Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {searchFilter && (
          <div className="mb-4 flex items-center justify-between bg-[#F4EFF9] px-4 py-2.5 rounded-xl border border-[#DCD0EE] text-xs">
            <div className="flex items-center gap-2 text-[#4E2667]">
              <Search className="w-4 h-4 text-[#6D3E8E]" />
              <span>Showing search results for &ldquo;<strong>{searchFilter}</strong>&rdquo;</span>
            </div>
            <button
              onClick={() => setSearchFilter('')}
              className="flex items-center gap-1 font-semibold text-[#6D3E8E] hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-[#EADEEF] shadow-xs">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#6D3E8E] text-white shadow-xs'
                      : 'text-[#5B5266] hover:bg-[#F7F2FB] hover:text-[#6D3E8E]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Pure Vegetarian Filter */}
          <div className="flex items-center gap-2 pr-2">
            <button
              onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                vegOnlyFilter
                  ? 'bg-[#EAF6E6] text-[#226829] border-[#A8DBA0]'
                  : 'bg-white text-[#5F5868] border-[#E0D8EA] hover:border-[#6D3E8E]'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${vegOnlyFilter ? 'bg-[#2E7D32]' : 'bg-[#9E96A8]'}`} />
              <span>Pure Veg Dishes Only</span>
            </button>
          </div>
        </div>
      </section>

      {/* Menu Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isSelected = selectedDishes.includes(item.name);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#6D3E8E] ring-2 ring-[#6D3E8E]/15 shadow-md'
                    : 'border-[#EAE1F2] hover:border-[#C6982C]/50 shadow-2xs hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-[#2E7D32]' : 'bg-[#B71C1C]'}`} />
                        <h3 className="font-serif text-xl font-bold text-[#2A1F36]">
                          {item.name}
                        </h3>
                      </div>
                      {item.malayalamName && (
                        <span className="font-serif text-xs text-[#8A52A3] font-medium block mt-0.5">
                          {item.malayalamName}
                        </span>
                      )}
                    </div>

                    {item.isSignature && (
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#FCF7E6] text-[#9F751B] border border-[#E8D7A1] text-[10px] uppercase font-bold tracking-wider">
                        House Special
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#635C6D] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Add to Custom Menu Planner */}
                <div className="mt-5 pt-3 border-t border-[#F2EDF7] flex items-center justify-between">
                  <span className="text-[11px] text-[#8C8496] capitalize">
                    {item.category.replace('-', ' ')}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleDishSelection(item.name)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'bg-[#6D3E8E] text-white'
                        : 'bg-[#F4EFF9] text-[#6D3E8E] hover:bg-[#EBDFF5]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Menu</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Menu</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Floating / Sticky Custom Menu Builder Tray */}
      {selectedDishes.length > 0 && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-30 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white rounded-2xl p-5 shadow-2xl border-2 border-[#6D3E8E] text-[#1E1B22]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FloralMotif variant="bloom" size={16} />
                <span className="text-xs uppercase tracking-wider font-bold text-[#4E2667]">
                  Your Custom Menu Tray
                </span>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#F4EFF9] text-[#6D3E8E]">
                {selectedDishes.length} dishes
              </span>
            </div>

            <p className="text-[11px] text-[#6E6678] line-clamp-2 mb-3">
              {selectedDishes.join(', ')}
            </p>

            <div className="flex items-center gap-2 mb-3 text-xs">
              <span className="text-[#6E6678]">Guests:</span>
              <select
                value={selectedEventGuests}
                onChange={(e) => setSelectedEventGuests(e.target.value)}
                className="bg-[#F8F5FB] border border-[#DCD0EE] rounded-lg px-2.5 py-1 text-xs text-[#2F263A] outline-none"
              >
                <option value="Under 50">Under 50</option>
                <option value="50–100">50–100</option>
                <option value="100–250">100–250</option>
                <option value="250–500">250–500</option>
                <option value="500–1000">500–1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={getCustomMenuWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-center uppercase tracking-wider bg-gradient-to-r from-[#6D3E8E] to-[#4E2667] text-white hover:opacity-95 shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Send Custom Menu on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedDishes([])}
                className="px-3 py-2 text-xs text-[#8C8496] hover:text-[#C62828]"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Menu Consultation Section */}
      <section className="py-20 mt-16 bg-[#FAF7F2] border-t border-[#EAE3F2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FloralMotif variant="wreath" size={32} className="mx-auto mb-3" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221B2B] mb-3">
            Need a Bespoke Menu for 1,000+ Guests?
          </h2>
          <p className="text-sm text-[#61586C] max-w-lg mx-auto mb-6">
            We curate specific regional menus (Central Travancore, North Malabar, or Pan-South Indian) with live tawa stations and multi-tier payasam bars.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#6D3E8E] text-white hover:bg-[#4E2667] transition-all shadow-md"
            >
              Consult with Head Chef Sijo
            </Link>
            <a
              href="https://wa.me/919995490381?text=Hello%20La%20Belleza,%20I%20would%20like%20to%20discuss%20a%20bespoke%20event%20menu."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#DCD0EE] text-[#4E2667] hover:bg-[#F4EFF9] transition-colors"
            >
              Direct WhatsApp Discussion
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
