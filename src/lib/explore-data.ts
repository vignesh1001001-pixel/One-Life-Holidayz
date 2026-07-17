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
    price: 9999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Snow & Adventure",
    img: "/images/dashboard/places/Manali.jpeg",
    price: 6499,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    tagline: "Sacred Himalayan Trek",
    img: "/images/dashboard/places/Kedarnath.jpeg",
    price: 9499,
    duration: "4 Days 3 Nights",
  },
  {
    slug: "munnar",
    name: "Munnar",
    tagline: "Tea Gardens & Mist",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 5999,
    duration: "3 Days 2 Nights",
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
    price: 6499,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    tagline: "Royal Desert Kingdom",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 11999,
    duration: "6 Days 5 Nights",
  },
  {
    slug: "shimla",
    name: "Shimla",
    tagline: "Queen of Hills",
    img: "/images/dashboard/places/Shimla.jpeg",
    price: 5999,
    duration: "4 Days 3 Nights",
  },

  // ── Tamil Nadu ──────────────────────────────────────────────────
  {
    slug: "ooty",
    name: "Ooty",
    tagline: "Queen of the Nilgiris",
    img: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=700&auto=format&fit=crop",
    price: 4999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "yercaud",
    name: "Yercaud",
    tagline: "Princess of Hills",
    img: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=700&auto=format&fit=crop",
    price: 3499,
    duration: "2 Days 1 Night",
  },
  {
    slug: "kodaikanal",
    name: "Kodaikanal",
    tagline: "Princess of Hill Stations",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&auto=format&fit=crop",
    price: 3499,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "pondicherry",
    name: "Pondicherry",
    tagline: "French Riviera of the East",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&auto=format&fit=crop",
    price: 2800,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "valparai",
    name: "Valparai & Athirappilly",
    tagline: "Rainforests & Waterfalls",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop",
    price: 3999,
    duration: "2 Days 1 Night",
  },

  // ── Kerala ──────────────────────────────────────────────────────
  {
    slug: "alleppey",
    name: "Alleppey",
    tagline: "Backwater Bliss",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 2499,
    duration: "2 Days 1 Night",
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    tagline: "Wildlife & Wilderness",
    img: "https://images.unsplash.com/photo-1591123720164-a903f9048a04?w=700&auto=format&fit=crop",
    price: 4999,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "varkala",
    name: "Varkala",
    tagline: "Cliffside Beach Escape",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 4999,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "vagamon",
    name: "Vagamon",
    tagline: "Meadows & Misty Hills",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&auto=format&fit=crop",
    price: 3699,
    duration: "2 Days 1 Night",
  },

  // ── Himachal Pradesh & Ladakh ─────────────────────────────────────
  {
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    tagline: "High Altitude Adventure",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&auto=format&fit=crop",
    price: 14999,
    duration: "6 Days 5 Nights",
  },

  // ── Varanasi ──────────────────────────────────────────────────────
  {
    slug: "varanasi",
    name: "Varanasi",
    tagline: "Spiritual Soul of India",
    img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=700&auto=format&fit=crop",
    price: 9999,
    duration: "5 Days 4 Nights",
  },

  // ── Karnataka ─────────────────────────────────────────────────────
  {
    slug: "gokarna",
    name: "Gokarna",
    tagline: "Laid-Back Beach Trail",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&auto=format&fit=crop",
    price: 4999,
    duration: "3 Days 2 Nights",
  },
  {
    slug: "coorg",
    name: "Coorg",
    tagline: "Coffee Country",
    img: "https://images.unsplash.com/photo-1600100397608-f00cf6b6b1c9?w=700&auto=format&fit=crop",
    price: 4999,
    duration: "3 Days 2 Nights",
  },

  // ── Maharashtra ───────────────────────────────────────────────────
  {
    slug: "maharashtra",
    name: "Maharashtra",
    tagline: "Heritage & Hill Stations",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=700&auto=format&fit=crop",
    price: 9999,
    duration: "5 Days 4 Nights",
  },
  {
    slug: "goa",
    name: "Goa",
    tagline: "Beach Holiday",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop",
    price: 3499,
    duration: "3 Days 2 Nights",
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
    price: 6499,
    rating: 4.8,
    reviews: 389,
    highlights: ["Rohtang Pass", "Solang Valley", "Paragliding", "River Rafting"],
  },
  {
    id: "kashmir-7d",
    name: "Kashmir Paradise",
    destination: "Kashmir, India",
    duration: "5 Days / 4 Nights",
    img: "/images/dashboard/places/Kashmir.jpeg",
    price: 9999,
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
    price: 9499,
    rating: 4.8,
    reviews: 210,
    highlights: ["Temple Darshan", "Helicopter Option", "Chorabari Lake", "Gaurikund"],
    badge: "Spiritual",
  },
  {
    id: "rajasthan-5d",
    name: "Royal Rajasthan Tour",
    destination: "Rajasthan, India",
    duration: "6 Days / 5 Nights",
    img: "/images/dashboard/places/Rajasthan.jpeg",
    price: 11999,
    rating: 4.7,
    reviews: 278,
    highlights: ["Jaipur Forts", "Jaisalmer Desert", "Camel Safari", "Udaipur Lakes"],
  },

  // ── Tamil Nadu ──────────────────────────────────────────────────
  {
    id: "ooty-4d",
    name: "Ooty Hill Retreat",
    destination: "Ooty, Tamil Nadu",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.6,
    reviews: 231,
    highlights: ["Nilgiri Toy Train", "Botanical Gardens", "Tea Estates", "Ooty Lake"],
  },
  {
    id: "yercaud-3d",
    name: "Yercaud Hill Escape",
    destination: "Yercaud, Tamil Nadu",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=700&auto=format&fit=crop",
    price: 3499,
    rating: 4.5,
    reviews: 156,
    highlights: ["Yercaud Lake", "Coffee Plantations", "Pagoda Point", "Shevaroy Hills"],
  },
  {
    id: "kodaikanal-4d",
    name: "Kodaikanal Lake Getaway",
    destination: "Kodaikanal, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&auto=format&fit=crop",
    price: 3499,
    rating: 4.7,
    reviews: 289,
    highlights: ["Kodai Lake Boating", "Coaker's Walk", "Pillar Rocks", "Bryant Park"],
  },
  {
    id: "pondicherry-3d",
    name: "Pondicherry Beach & French Quarter",
    destination: "Pondicherry, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&auto=format&fit=crop",
    price: 5499,
    rating: 4.6,
    reviews: 267,
    highlights: ["French Quarter Walk", "Promenade Beach", "Auroville", "Paradise Beach"],
    badge: "Popular",
  },
  {
    id: "valparai-3d",
    name: "Valparai Rainforest Trail",
    destination: "Valparai, Tamil Nadu",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop",
    price: 3999,
    rating: 4.5,
    reviews: 98,
    highlights: ["Tea & Coffee Estates", "Wildlife Sighting", "Waterfalls", "Aliyar Dam"],
  },

  // ── Kerala ──────────────────────────────────────────────────────
  {
    id: "munnar-3d",
    name: "Munnar Tea Trail",
    destination: "Munnar, Kerala",
    duration: "3 Days / 2 Nights",
    img: "/images/dashboard/places/Munnar.jpeg",
    price: 5999,
    rating: 4.8,
    reviews: 356,
    highlights: ["Tea Museum", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
  },
  {
    id: "alleppey-4d",
    name: "Alleppey Backwater Bliss",
    destination: "Alleppey, Kerala",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 2499,
    rating: 4.8,
    reviews: 412,
    highlights: ["Houseboat Stay", "Backwater Cruise", "Marari Beach", "Village Tour"],
    badge: "Best Seller",
  },
  {
    id: "varkala-3d",
    name: "Varkala Cliffside Beach",
    destination: "Varkala, Kerala",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.6,
    reviews: 187,
    highlights: ["Cliff Beach Walk", "Janardhanaswamy Temple", "Sunset Point", "Ayurvedic Spa"],
  },
  {
    id: "vagamon-3d",
    name: "Vagamon Meadows Retreat",
    destination: "Vagamon, Kerala",
    duration: "2 Days / 1 Night",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&auto=format&fit=crop",
    price: 3699,
    rating: 4.5,
    reviews: 134,
    highlights: ["Pine Forest", "Meadows & Hills", "Paragliding", "Murugan Hill Temple"],
  },

  // ── Himachal Pradesh & Ladakh ─────────────────────────────────────
  {
    id: "leh-ladakh-6d",
    name: "Leh Ladakh Adventure",
    destination: "Leh Ladakh",
    duration: "6 Days / 5 Nights",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&auto=format&fit=crop",
    price: 14999,
    rating: 4.9,
    reviews: 302,
    highlights: ["Pangong Lake", "Khardung La Pass", "Nubra Valley", "Monastery Tour"],
    badge: "Adventure",
  },
  {
    id: "shimla-4d",
    name: "Shimla Hill Retreat",
    destination: "Shimla, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    img: "/images/dashboard/places/Shimla.jpeg",
    price: 5999,
    rating: 4.6,
    reviews: 165,
    highlights: ["Mall Road", "Kufri", "Jakhoo Temple", "The Ridge"],
  },

  // ── Varanasi ──────────────────────────────────────────────────────
  {
    id: "varanasi-3d",
    name: "Varanasi Spiritual Sojourn",
    destination: "Varanasi, Uttar Pradesh",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=700&auto=format&fit=crop",
    price: 9999,
    rating: 4.8,
    reviews: 321,
    highlights: ["Ganga Aarti", "Kashi Vishwanath Temple", "Boat Ride", "Sarnath Visit"],
    badge: "Spiritual",
  },

  // ── Karnataka ─────────────────────────────────────────────────────
  {
    id: "gokarna-3d",
    name: "Gokarna Beach Trail",
    destination: "Gokarna, Karnataka",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&auto=format&fit=crop",
    price: 4999,
    rating: 4.6,
    reviews: 178,
    highlights: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple", "Beach Trekking"],
  },

  // ── Maharashtra ───────────────────────────────────────────────────
  {
    id: "maharashtra-5d",
    name: "Maharashtra Heritage Tour",
    destination: "Maharashtra",
    duration: "5 Days / 4 Nights",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=700&auto=format&fit=crop",
    price: 9999,
    rating: 4.6,
    reviews: 201,
    highlights: ["Ajanta & Ellora Caves", "Mahabaleshwar", "Lonavala", "Mumbai City Tour"],
  },
  {
    id: "goa-4d",
    name: "Goa Beach Holiday",
    destination: "Goa",
    duration: "3 Days / 2 Nights",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop",
    price: 3499,
    rating: 4.7,
    reviews: 498,
    highlights: ["Baga Beach", "Fort Aguada", "Water Sports", "Old Goa Churches"],
    badge: "Popular",
  },
];