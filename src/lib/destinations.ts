// ─── Types ────────────────────────────────────────────────────────────────────
export type Destination = {
  slug: string;
  name: string;
  sub: string;
  price: string;
  duration?: string;
  img: string;
  tag?: string;
};

export type InternationalDestination = {
  slug: string;
  name: string;
  country: string;
  image: string;
  tag: string;
  startingPrice: string;
  highlights: string[];
};

// ─── Honeymoon Picks (South India) ───────────────────────────────────────────
export const HONEYMOON_PICKS: Destination[] = [
  { slug: "munnar", name: "Munnar", sub: "Kerala", img: "/images/dashboard/places/Munnar.jpeg", price: "₹5,999/person", duration: "3 Days 2 Nights", tag: "Hill Station" },
  { slug: "alleppey", name: "Gokarna", sub: "Gokarna", img: "/images/dashboard/places/Gokarna.jpeg", price: "₹4,999/person", duration: "3 Days 2 Nights", tag: "Backwaters" },
  { slug: "coorg", name: "Coorg", sub: "Karnataka", img: "/images/dashboard/places/Coorg.jpeg", price: "₹4,999/person", duration: "3 Days 2 Nights", tag: "Coffee Hills" },
  { slug: "ooty", name: "Ooty", sub: "Tamil Nadu", img: "/images/dashboard/places/Ooty.jpeg", price: "₹4,999/person", duration: "5 Days 4 Nights", tag: "Nilgiris" },
  { slug: "kodaikanal", name: "Yercaud", sub: "Tamil Nadu", img: "/images/dashboard/places/Yercaud.jpeg", price: "₹3,499/person", duration: "2 Days 1 Night", tag: "Princess of Hills" },
  { slug: "pondicherry", name: "Pondicherry", sub: "Puducherry", img: "/images/dashboard/places/Pondicherry.jpeg", price: "₹2,800/person", tag: "French Riviera" },
];

// ─── Domestic Picks ───────────────────────────────────────────────────────────
export const DOMESTIC_PICKS: Destination[] = [
  { slug: "kashmir", name: "Kashmir", sub: "J&K", img: "/images/dashboard/places/Kashmir.jpeg", price: "₹9,999/person", duration: "5 Days 4 Nights", tag: "Paradise on Earth" },
  { slug: "manali", name: "Manali", sub: "Himachal Pradesh", img: "/images/dashboard/places/Manali.jpeg", price: "₹6,499/person", duration: "5 Days 4 Nights", tag: "Snow Adventure" },
  { slug: "rajasthan", name: "Rajasthan", sub: "Rajasthan", img: "/images/dashboard/places/Rajasthan.jpeg", price: "₹11,999/person", duration: "6 Days 5 Nights", tag: "Royal Heritage" },
  { slug: "goa", name: "Kerala", sub: "Kerala", img: "/images/dashboard/places/Kerala.jpeg", price: "₹3,999/person", tag: "Beach Bliss" },
  { slug: "andaman", name: "Andaman", sub: "A&N Islands", img: "/images/dashboard/places/Andaman.jpeg", price: "₹8,999/person", tag: "Island Paradise" },
  { slug: "leh-ladakh", name: "Valparai", sub: "Valparai", img: "/images/dashboard/places/Valparai.jpeg", price: "₹3,999/person", duration: "2 Days 1 Night", tag: "High Altitude" },
  { slug: "himachal", name: "Shimla", sub: "Shimla", img: "/images/dashboard/places/Shimla.jpeg", price: "₹5,999/person", duration: "4 Days 3 Nights", tag: "Mountain Life" },
  { slug: "varanasi", name: "Vagamon", sub: "Vagamon", img: "/images/dashboard/places/Vagamon.jpeg", price: "₹3,699/person", duration: "2 Days 1 Night", tag: "Spiritual Soul" },
];

// ─── International Picks ──────────────────────────────────────────────────────
export const INTERNATIONAL_PICKS: InternationalDestination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    image: "/images/destinations/international/dubai.jpg",
    tag: "City of Gold",
    startingPrice: "₹35,000",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "/images/destinations/international/bali.jpg",
    tag: "Island of Gods",
    startingPrice: "₹40,000",
    highlights: ["Ubud Rice Terraces", "Tanah Lot", "Beach Clubs"],
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    image: "/images/destinations/international/thailand.jpg",
    tag: "Land of Smiles",
    startingPrice: "₹32,000",
    highlights: ["Bangkok Temples", "Phi Phi Islands", "Chiang Mai"],
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    image: "/images/destinations/international/singapore.jpg",
    tag: "Lion City",
    startingPrice: "₹45,000",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa"],
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    image: "/images/destinations/international/maldives.jpg",
    tag: "Tropical Heaven",
    startingPrice: "₹70,000",
    highlights: ["Overwater Bungalows", "Snorkelling", "Sunset Cruises"],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    image: "/images/destinations/international/malaysia.jpg",
    tag: "Truly Asia",
    startingPrice: "₹30,000",
    highlights: ["Petronas Towers", "Langkawi", "Cameron Highlands"],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    image: "/images/destinations/international/sri-lanka.jpg",
    tag: "Pearl of the Orient",
    startingPrice: "₹25,000",
    highlights: ["Sigiriya Rock", "Tea Plantations", "Mirissa Beach"],
  },
  {
    slug: "nepal",
    name: "Nepal",
    country: "Nepal",
    image: "/images/destinations/international/nepal.jpg",
    tag: "Roof of the World",
    startingPrice: "₹20,000",
    highlights: ["Everest Base Camp", "Pokhara", "Pashupatinath"],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    image: "/images/destinations/international/vietnam.jpg",
    tag: "Hidden Gem",
    startingPrice: "₹38,000",
    highlights: ["Ha Long Bay", "Hoi An", "Ho Chi Minh City"],
  },
  {
    slug: "europe",
    name: "Europe",
    country: "Multi-country",
    image: "/images/destinations/international/europe.jpg",
    tag: "Dream Destination",
    startingPrice: "₹1,20,000",
    highlights: ["Paris", "Rome", "Switzerland"],
  },
  {
    slug: "turkey",
    name: "Turkey",
    country: "Turkey",
    image: "/images/destinations/international/turkey.jpg",
    tag: "Where East Meets West",
    startingPrice: "₹55,000",
    highlights: ["Cappadocia", "Istanbul", "Pamukkale"],
  },
  {
    slug: "georgia",
    name: "Georgia",
    country: "Georgia",
    image: "/images/destinations/international/georgia.jpg",
    tag: "Hidden Treasure",
    startingPrice: "₹42,000",
    highlights: ["Tbilisi Old Town", "Kazbegi Mountains", "Wine Country"],
  },
];