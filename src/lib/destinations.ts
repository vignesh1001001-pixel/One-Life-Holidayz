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

// ─── Honeymoon Picks (Romantic South India) ─────────────────────────────────
// Ooty, Kodaikanal, Yercaud, Pondicherry, Valparai, Munnar, Varkala, Alleppey, Vagamon, Wayanad, Coorg, Gokarna
export const HONEYMOON_PICKS: Destination[] = [
  { slug: "ooty", name: "Ooty", sub: "Tamil Nadu", img: "/images/dashboard/places/Ooty.jpeg", price: "₹4,999/person", duration: "5 Days 4 Nights", tag: "Nilgiris" },
  { slug: "kodaikanal", name: "Kodaikanal", sub: "Tamil Nadu", img: "/images/dashboard/places/Kodaikannal.jpeg", price: "₹3,499/person", duration: "3 Days 2 Nights", tag: "Princess of Hill Stations" },
  { slug: "yercaud", name: "Yercaud", sub: "Tamil Nadu", img: "/images/dashboard/places/Yercaud.jpeg", price: "₹3,499/person", duration: "2 Days 1 Night", tag: "Princess of Hills" },
  { slug: "pondicherry", name: "Pondicherry", sub: "Puducherry", img: "/images/dashboard/places/Pondicherry.jpeg", price: "₹2,800/person", tag: "French Riviera" },
  { slug: "valparai", name: "Valparai", sub: "Tamil Nadu", img: "/images/dashboard/places/Valparai.jpeg", price: "₹3,999/person", duration: "2 Days 1 Night", tag: "Rainforests & Waterfalls" },
  { slug: "munnar", name: "Munnar", sub: "Kerala", img: "/images/dashboard/places/Munnar.jpeg", price: "₹5,999/person", duration: "3 Days 2 Nights", tag: "Hill Station" },
  { slug: "varkala", name: "Varkala", sub: "Kerala", img: "/images/dashboard/places/Varkala.jpeg", price: "₹4,999/person", duration: "3 Days 2 Nights", tag: "Cliffside Beach" },
  { slug: "alleppey", name: "Alleppey", sub: "Kerala", img: "/images/dashboard/places/Alleppey.jpeg", price: "₹2,499/person", duration: "2 Days 1 Night", tag: "Backwaters" },
  { slug: "vagamon", name: "Vagamon", sub: "Kerala", img: "/images/dashboard/places/Vagamon.jpeg", price: "₹3,699/person", duration: "2 Days 1 Night", tag: "Misty Meadows" },
  { slug: "wayanad", name: "Wayanad", sub: "Kerala", img: "/images/dashboard/places/Wayanad.jpeg", price: "₹4,999/person", duration: "3 Days 2 Nights", tag: "Wildlife & Wilderness" },
  { slug: "coorg", name: "Coorg", sub: "Karnataka", img: "/images/dashboard/places/Coorg.jpeg", price: "₹4,999/person", duration: "3 Days 2 Nights", tag: "Coffee Hills" },
  { slug: "gokarna", name: "Gokarna", sub: "Karnataka", img: "/images/dashboard/places/Gokarna.jpeg", price: "₹4,999/person", duration: "3 Days 2 Nights", tag: "Beach Trail" },
];

// ─── Domestic Picks (North India) ────────────────────────────────────────────
// Manali, Shimla, Kedarnath, Kashmir, Leh Ladakh, Varanasi, Maharashtra, Goa, Rajasthan
export const DOMESTIC_PICKS: Destination[] = [
  { slug: "manali", name: "Manali", sub: "Himachal Pradesh", img: "/images/dashboard/places/Manali.jpeg", price: "₹6,499/person", duration: "5 Days 4 Nights", tag: "Snow Adventure" },
  { slug: "shimla", name: "Shimla", sub: "Himachal Pradesh", img: "/images/dashboard/places/Shimla.jpeg", price: "₹5,999/person", duration: "4 Days 3 Nights", tag: "Queen of Hills" },
  { slug: "kedarnath", name: "Kedarnath", sub: "Uttarakhand", img: "/images/dashboard/places/Kedarnath.jpeg", price: "₹9,499/person", duration: "4 Days 3 Nights", tag: "Sacred Trek" },
  { slug: "kashmir", name: "Kashmir", sub: "J&K", img: "/images/dashboard/places/Kashmir.jpeg", price: "₹9,999/person", duration: "5 Days 4 Nights", tag: "Paradise on Earth" },
  { slug: "leh-ladakh", name: "Leh Ladakh", sub: "Ladakh", img: "/images/dashboard/places/leh-ladakh.jpeg", price: "₹14,999/person", duration: "6 Days 5 Nights", tag: "High Altitude" },
  { slug: "varanasi", name: "Varanasi", sub: "Uttar Pradesh", img: "/images/dashboard/places/Varanasi.jpeg", price: "₹9,999/person", duration: "5 Days 4 Nights", tag: "Spiritual Soul" },
  { slug: "maharashtra", name: "Maharashtra", sub: "Maharashtra", img: "/images/dashboard/places/Maharashtra.jpeg", price: "₹9,999/person", duration: "5 Days 4 Nights", tag: "Heritage & Hills" },
  { slug: "goa", name: "Goa", sub: "Goa", img: "/images/dashboard/places/Goa.jpeg", price: "₹3,499/person", duration: "3 Days 2 Nights", tag: "Beach Bliss" },
  { slug: "rajasthan", name: "Rajasthan", sub: "Rajasthan", img: "/images/dashboard/places/Rajasthan.jpeg", price: "₹11,999/person", duration: "6 Days 5 Nights", tag: "Royal Heritage" },
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