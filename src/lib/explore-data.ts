export type TourCategory = {
  slug: string;
  name: string;
  img: string;
  blurb: string;
};

export const TOUR_CATEGORIES: TourCategory[] = [
  {
    slug: "hills",
    name: "Hills",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&auto=format&fit=crop",
    blurb: "Misty green valleys and winding mountain roads.",
  },
  {
    slug: "sky-ride",
    name: "Sky Ride",
    img: "/images/destinations/Skyride.jpg",
    blurb: "Cable cars gliding over snow-capped peaks.",
  },
  {
    slug: "snow-trekking",
    name: "Snow Trekking",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=700&auto=format&fit=crop",
    blurb: "Sunlit summits and crunching snow underfoot.",
  },
  {
    slug: "beach-house",
    name: "Beach House",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop",
    blurb: "Overwater villas on turquoise lagoons.",
  },
  {
    slug: "boat-ride",
    name: "Boat Ride",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=700&auto=format&fit=crop",
    blurb: "Slow houseboat days on quiet backwaters.",
  },
];

export type DomesticDestination = {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  price: number;
};

export const DOMESTIC_DESTINATIONS: DomesticDestination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    tagline: "Heaven on Earth",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&auto=format&fit=crop",
    price: 3697,
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Snow & Adventure",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=700&auto=format&fit=crop",
    price: 4499,
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    tagline: "Sacred Himalayan Trek",
    img: "https://images.unsplash.com/photo-1609340058698-60a2a96f33e0?w=700&auto=format&fit=crop",
    price: 8999,
  },
  {
    slug: "munnar",
    name: "Munnar",
    tagline: "Tea Gardens & Mist",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 1797,
  },
  {
    slug: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=700&auto=format&fit=crop",
    price: 1797,
  },
  {
    slug: "goa",
    name: "Goa",
    tagline: "Sun, Sand & Vibes",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop",
    price: 2499,
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Royal Desert Kingdom",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&auto=format&fit=crop",
    price: 3299,
  },
  {
    slug: "andaman",
    name: "Andaman",
    tagline: "Island Paradise",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop",
    price: 5999,
  },
];

export type PopularDestination = {
  slug: string;
  name: string;
  country: string;
  img: string;
  blurb: string;
};

export const POPULAR_DESTINATIONS: PopularDestination[] = [
  {
    slug: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&auto=format&fit=crop",
    blurb: "1,200 coral islands and the clearest water on earth.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop",
    blurb: "Skyscrapers, desert dunes, and endless luxury.",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "South Asia",
    img: "https://images.unsplash.com/photo-1586183189334-1a5a207346e9?w=900&auto=format&fit=crop",
    blurb: "Wild coastlines, ancient temples, tea-green hills.",
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Southeast Asia",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&auto=format&fit=crop",
    blurb: "Golden temples, electric nightlife, tropical bays.",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop",
    blurb: "Heaven on earth — Dal Lake and snow-laced valleys.",
  },
];

export type TripPackage = {
  id: string;
  name: string;
  destination: string;
  duration: string;
  img: string;
  price: number;
  rating: number;
  reviews: number;
  highlights: string[];
  badge?: string;
};

export const TRIP_PACKAGES: TripPackage[] = [
  {
    id: "kashmir-7d",
    name: "Kashmir Paradise",
    destination: "Kashmir, India",
    duration: "7 Days / 6 Nights",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&auto=format&fit=crop",
    price: 18999,
    rating: 4.9,
    reviews: 312,
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Mughal Gardens"],
    badge: "Bestseller",
  },
  {
    id: "maldives-5d",
    name: "Maldives Luxury Escape",
    destination: "Maldives",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop",
    price: 45999,
    rating: 4.8,
    reviews: 198,
    highlights: ["Water Villa Stay", "Snorkelling", "Sunset Cruise", "Spa & Wellness"],
    badge: "Luxury",
  },
  {
    id: "kerala-6d",
    name: "Kerala Backwaters",
    destination: "Kerala, India",
    duration: "6 Days / 5 Nights",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 12499,
    rating: 4.7,
    reviews: 445,
    highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Kathakali Show", "Ayurvedic Spa"],
  },
  {
    id: "dubai-4d",
    name: "Dubai City Break",
    destination: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&auto=format&fit=crop",
    price: 32999,
    rating: 4.6,
    reviews: 271,
    highlights: ["Burj Khalifa Visit", "Desert Safari", "Dubai Mall", "Dhow Cruise"],
    badge: "Hot Deal",
  },
  {
    id: "manali-5d",
    name: "Manali Snow Adventure",
    destination: "Manali, Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=700&auto=format&fit=crop",
    price: 14999,
    rating: 4.8,
    reviews: 389,
    highlights: ["Rohtang Pass", "Solang Valley", "Paragliding", "River Rafting"],
  },
  {
    id: "thailand-7d",
    name: "Thailand Explorer",
    destination: "Bangkok & Phuket",
    duration: "7 Days / 6 Nights",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=700&auto=format&fit=crop",
    price: 38999,
    rating: 4.7,
    reviews: 312,
    highlights: ["Temple Tours", "Island Hopping", "Street Food Walk", "Elephant Sanctuary"],
    badge: "Popular",
  },
];