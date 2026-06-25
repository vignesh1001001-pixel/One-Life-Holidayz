// import type { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import PageHero from "@/components/PageHero";
// import SectionHeader from "@/components/SectionHeader";
// import DestinationCard from "@/components/DestinationCard";
// import { HONEYMOON_PICKS, DOMESTIC_PICKS } from "@/lib/destinations";

// export const metadata: Metadata = {
//   title: "Discover India – Destinations | One Life Holidayz",
//   description:
//     "From the snow peaks of Kashmir to the backwaters of Kerala — incredible destinations for every kind of traveller.",
// };

// const STATS = [
//   { label: "Destinations", value: "50+" },
//   { label: "Tours Done", value: "200+" },
//   { label: "Happy Travellers", value: "1k+" },
//   { label: "Years Experience", value: "3+" },
// ];

// export default function DestinationsPage() {
//   return (
//     <main>
//       <PageHero
//         eyebrow="India Awaits"
//         title="Discover India"
//         highlight="India"
//         subtitle="From the snow peaks of Kashmir to the backwaters of Kerala — incredible destinations for every kind of traveller"
//         gradient="linear-gradient(135deg, #0a1628 0%, #1a3a78 100%)"
//       />

//       <section className="bg-white px-[5%] py-20">
//         <SectionHeader
//           eyebrow="Choose Your Journey"
//           title="Pick Your Travel Style"
//           highlight="Travel Style"
//           subtitle="Whether it's romance or adventure — we have the perfect India itinerary for you"
//         />
//         <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 lg:grid-cols-2">
//           {/* Honeymoon card */}
//           <Link
//             href="/contact"
//             className="group relative block min-h-[420px] overflow-hidden rounded-[20px] shadow-xl transition-transform hover:-translate-y-1.5"
//           >
//             <Image
//               src="/images/destinations/munnar.jpg"
//               alt="Romantic South India"
//               fill
//               sizes="(max-width: 1024px) 100vw, 50vw"
//               className="object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-transparent" />
//             <div className="absolute inset-0 flex flex-col justify-end p-8">
//               <div className="mb-3 inline-block w-fit rounded border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-yellow-300">
//                 💑 Honeymoon Getaways
//               </div>
//               <div className="mb-2.5 font-serif text-[2rem] font-black text-white">Romantic South India</div>
//               <p className="mb-5 text-[0.9rem] leading-[1.7] text-white/80">
//                 Misty hills, fragrant tea gardens, and cozy cottages — the perfect backdrop for your first chapter
//                 together. Starting from ₹3,500/person.
//               </p>
//               <span className="w-fit rounded-full bg-yellow-500 px-7 py-3 text-[0.9rem] font-bold text-black shadow-lg transition-transform group-hover:-translate-y-0.5">
//                 Plan Honeymoon →
//               </span>
//             </div>
//           </Link>

//           {/* Domestic card */}
//           <Link
//             href="/trips"
//             className="group relative block min-h-[420px] overflow-hidden rounded-[20px] shadow-xl transition-transform hover:-translate-y-1.5"
//           >
//             <Image
//               src="/images/destinations/manali.jpg"
//               alt="Incredible North India"
//               fill
//               sizes="(max-width: 1024px) 100vw, 50vw"
//               className="object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-transparent" />
//             <div className="absolute inset-0 flex flex-col justify-end p-8">
//               <div className="mb-3 inline-block w-fit rounded border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-yellow-300">
//                 🇮🇳 Domestic Adventures
//               </div>
//               <div className="mb-2.5 font-serif text-[2rem] font-black text-white">Incredible North India</div>
//               <p className="mb-5 text-[0.9rem] leading-[1.7] text-white/80">
//                 Snow mountains, ancient temples, and tropical backwaters — India has it all. Group &amp; family
//                 packages from ₹1,797/person.
//               </p>
//               <span className="w-fit rounded-full bg-yellow-500 px-7 py-3 text-[0.9rem] font-bold text-black shadow-lg transition-transform group-hover:-translate-y-0.5">
//                 View Packages →
//               </span>
//             </div>
//           </Link>
//         </div>
//       </section>

//       <section className="bg-white px-[5%] pb-16 pt-4">
//         <SectionHeader eyebrow="Honeymoon Picks" title="South India Romance" highlight="Romance" align="left" />
//         <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3">
//           {HONEYMOON_PICKS.map((d) => (
//             <DestinationCard key={d.slug} {...d} />
//           ))}
//         </div>
//       </section>

//       <section className="bg-slate-50 px-[5%] pb-20 pt-4">
//         <SectionHeader eyebrow="Explore Domestic" title="Best of India" highlight="India" align="left" />
//         <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
//           {DOMESTIC_PICKS.map((d) => (
//             <DestinationCard key={d.slug} {...d} />
//           ))}
//         </div>
//         <div className="mt-10 text-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center rounded-full bg-yellow-500 px-8 py-[13px] text-[0.95rem] font-bold tracking-wide text-black shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-yellow-400"
//           >
//             Plan My Domestic Trip →
//           </Link>
//         </div>
//       </section>

//       <div className="flex justify-center bg-white px-[5%] py-14">
//         <div className="flex max-w-4xl flex-wrap items-center justify-center gap-12">
//           {STATS.map((s) => (
//             <div key={s.label} className="flex min-w-[120px] flex-col items-center">
//               <div className="font-serif text-[2.8rem] font-bold leading-none text-slate-900">{s.value}</div>
//               <div className="mt-1.5 text-[0.82rem] font-bold uppercase tracking-wider text-slate-600">
//                 {s.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
