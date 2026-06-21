export type Destination = {
  name: string;
  /** URL-safe identifier, used for /destinations/[slug] and the local image filename */
  slug: string;
  sub: string;
  price: string;
  /** Local path under /public — e.g. /images/destinations/kashmir.jpg */
  img: string;
  country?: string;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function destination(name: string, sub: string, price: string, country?: string): Destination {
  const slug = slugify(name);
  return {
    name,
    slug,
    sub,
    price,
    img: `/images/destinations/${slug}.jpg`,
    country,
  };
}

export const HONEYMOON_PICKS: Destination[] = [
  destination("Munnar", "Tea Gardens & Misty Valleys", "₹1,797"),
  destination("Kodaikanal", "Princess of Hill Stations", "₹2,499"),
  destination("Ooty", "Queen of the Nilgiris", "₹2,199"),
];

export const DOMESTIC_PICKS: Destination[] = [
  destination("Munnar", "Tea Gardens & Mist", "₹1,797"),
  destination("Kerala", "God's Own Country", "₹1,797"),
  destination("Skyride", "Sacred Pilgrimage", "₹4,999"),
  destination("SnowTrekking", "Forts & Camping", "₹8,888"),

];

// export const POPULAR_DESTINATIONS: Destination[] = [
//   destination("Maldives", "Overwater Paradise", "₹45,000", "Indian Ocean"),
//   destination("Dubai", "Skyscrapers & Desert Dunes", "₹55,000", "UAE"),
//   destination("Sri Lanka", "Wild Coastlines & Tea Hills", "₹28,000", "South Asia"),
//   destination("Thailand", "Temples & Tropical Bays", "₹35,000", "Southeast Asia"),
//   destination("Kashmir", "Heaven on Earth", "₹3,697", "India"),
// ];

/**
 * Every destination across the site, deduplicated by slug.
 * Used by /destinations/[slug]/page.tsx to look up any destination by its slug,
 * regardless of which list it originally appeared in.
 */
export const ALL_DESTINATIONS: Destination[] = (() => {
  const combined = [...DOMESTIC_PICKS, ...HONEYMOON_PICKS];
  const seen = new Map<string, Destination>();
  for (const d of combined) {
    if (!seen.has(d.slug)) seen.set(d.slug, d);
  }
  return Array.from(seen.values());
})();

export function getDestinationBySlug(slug: string): Destination | undefined {
  return ALL_DESTINATIONS.find((d) => d.slug === slug);
}
