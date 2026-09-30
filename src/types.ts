export interface MenuItem {
  id: string;
  name: string;
  malayalamName?: string;
  category: 'sadya' | 'traditional' | 'wedding' | 'desserts';
  description: string;
  isVeg: boolean;
  isSignature?: boolean;
  spiciness?: 'mild' | 'medium' | 'spicy';
}

export interface EventType {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badgeColor: string;
  points: string[];
}

export interface Review {
  id: string;
  name: string;
  roleOrEvent: string;
  location: string;
  region: 'kerala' | 'south' | 'north';
  language: 'malayalam' | 'english' | 'hindi' | 'tamil';
  rating: number;
  quote: string;
  translation?: string;
  avatar: string;
  guestCount?: string;
  date?: string;
}

export interface TimelineMilestone {
  year: string;
  dateExact?: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'wedding' | 'sadya' | 'catering' | 'prep' | 'buffet';
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}
