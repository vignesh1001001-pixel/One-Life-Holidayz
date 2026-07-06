// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Domestic Destinations ────────────────────────────────────────────────────

export type DomesticDestination = {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  price: number;
  duration?: string;
};

export const DOMESTIC_DESTINATIONS: DomesticDestination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    tagline: "Heaven on Earth",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 3697,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Snow & Adventure",
    img: "/images/dashboard/places/Manali.jpeg",
    price: 4499,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    tagline: "Sacred Himalayan Trek",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 8999,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "munnar",
    name: "Munnar",
    tagline: "Tea Gardens & Mist",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 1797,
    duration: "2 Days 1 Night",
  },
  {
    slug: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    img: "/images/dashboard/places/Kerala.jpeg",
    price: 1797,
    duration: "6 Days 5 Nights",
  },
  {
    slug: "Manali-Snow-Adventure",
    name: "Manali Snow Adventure",
    tagline: "Snow & Adventure",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    price: 4499,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Royal Desert Kingdom",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 3299,
    duration: "5 Days 4 Nights",
  },
];

// ─── Popular Destinations ─────────────────────────────────────────────────────

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
    img: "/images/destinations/Maldives.jpg",
    blurb: "1,200 coral islands and the clearest water on earth.",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    img: "/images/dashboard/places/Kashmir.jpeg",
    blurb: "Heaven on earth — Dal Lake and snow-laced valleys.",
  },
  {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    img: "/images/dashboard/places/Kerala.jpeg",
    blurb: "God's own country — backwaters, spice hills, and golden sunsets.",
  },
  {
    slug: "manali",
    name: "Manali",
    country: "India",
    img: "/images/dashboard/places/Manali.jpeg",
    blurb: "Snow peaks, river valleys, and endless adventure in Himachal.",
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    country: "India",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    blurb: "A sacred Himalayan trek to the ancient Shiva shrine.",
  },
  {
    slug: "munnar",
    name: "Munnar",
    country: "India",
    img: "/images/dashboard/places/Munnar.jpeg",
    blurb: "Rolling tea gardens wrapped in cool mountain mist.",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    blurb: "Royal forts, golden deserts, and timeless Rajput heritage.",
  },
  {
    slug: "manali-snow-adventure",
    name: "Manali Snow Adventure",
    country: "India",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    blurb: "Rohtang Pass, Solang Valley, and adrenaline on the snow.",
  },
];

// ─── Trip Packages ────────────────────────────────────────────────────────────

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
    id: "maldives-5d",
    name: "Maldives Luxury Escape",
    destination: "Maldives",
    duration: "5 Days / 4 Nights",
    img: "/images/destinations/Maldives.jpg",
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
    img: "/images/destinations/Kerala.jpg",
    price: 12499,
    rating: 4.7,
    reviews: 445,
    highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Kathakali Show", "Ayurvedic Spa"],
  },
  {
    id: "manali-5d",
    name: "Manali Snow Adventure",
    destination: "Manali, Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Manali_snow_adventure.jpeg",
    price: 14999,
    rating: 4.8,
    reviews: 389,
    highlights: ["Rohtang Pass", "Solang Valley", "Paragliding", "River Rafting"],
  },
  {
    id: "kashmir-7d",
    name: "Kashmir Paradise",
    destination: "Kashmir, India",
    duration: "7 Days / 6 Nights",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 3697,
    rating: 4.9,
    reviews: 312,
    highlights: ["Dal Lake Shikara", "Gulmarg Snow", "Pahalgam Valley", "Mughal Gardens"],
    badge: "Best Seller",
  },
  {
    id: "kedarnath-4d",
    name: "Kedarnath Sacred Trek",
    destination: "Kedarnath, Uttarakhand",
    duration: "4 Days / 3 Nights",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 8999,
    rating: 4.8,
    reviews: 210,
    highlights: ["Temple Darshan", "Helicopter Option", "Chorabari Lake", "Gaurikund"],
    badge: "Spiritual",
  },
  {
    id: "rajasthan-5d",
    name: "Royal Rajasthan Tour",
    destination: "Rajasthan, India",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 3299,
    rating: 4.7,
    reviews: 278,
    highlights: ["Jaipur Forts", "Jaisalmer Desert", "Camel Safari", "Udaipur Lakes"],
  },
];