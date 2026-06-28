import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import {
  Heart,
  Mountain,
  Flower2,
  Waves,
  Trees,
  Snowflake,
  Landmark,
  Sun,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations | One Life Holidayz",
  description:
    "Explore international getaways and the best of India — handpicked destinations for every kind of traveller.",
};

const honeymoonPlaces = [
  { icon: <Trees size={12} />, name: "Munnar" },
  { icon: <Mountain size={12} />, name: "Kodaikanal" },
  { icon: <Flower2 size={12} />, name: "Ooty" },
  { icon: <Trees size={12} />, name: "Thekkady" },
  { icon: <Waves size={12} />, name: "Alleppey" },
];

const domesticPlaces = [
  { icon: <Snowflake size={12} />, name: "Manali" },
  { icon: <Mountain size={12} />, name: "Kashmir" },
  { icon: <Waves size={12} />, name: "Kerala" },
  { icon: <Landmark size={12} />, name: "Kedarnath" },
  { icon: <Landmark size={12} />, name: "Badrinath" },
  { icon: <Sun size={12} />, name: "Goa" },
];

export default function DestinationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="The World Awaits"
        title="Find Your Next Adventure"
        highlight="Adventure"
        subtitle="From international escapes to the hidden gems of India — we craft journeys you'll remember forever"
        gradient="linear-gradient(135deg, #0a1628 0%, #1a3a78 100%)"
      />

      {/* Two Big Cards */}
      <section className="bg-white px-[5%] py-20">
        <SectionHeader
          eyebrow="Choose Your Journey"
          title="Where Do You Want to Go?"
          highlight="Want to Go"
          subtitle="Pick your travel world — we'll take care of everything from there"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 lg:grid-cols-2">

          {/* ── Honeymoon Card ── */}
          <Link
            href="/romantic"
            className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[20px] shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
          >
            {/* Fallback background — always visible, image sits on top */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #3d1a28 0%, #7b2d45 50%, #2d0f1c 100%)",
              }}
            />

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/destinations/munnar.jpg"
                alt="Romantic South India"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

            {/* Content */}
            <div className="relative mt-auto flex flex-col p-8">
              <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-500/25 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-rose-300 backdrop-blur-sm">
                <Heart size={10} fill="currentColor" />
                Honeymoon Getaways
              </div>
              <h2 className="mb-3 font-serif text-[2.1rem] font-black leading-tight text-white">
                Romantic South India
              </h2>
              <p className="mb-5 text-[0.875rem] leading-[1.75] text-white/75">
                Misty hills, fragrant tea gardens, and cozy cottages — the
                perfect backdrop for your first chapter together.{" "}
                <span className="font-semibold text-white/90">
                  Starting from ₹3,500/person.
                </span>
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {honeymoonPlaces.map(({ icon, name }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.75rem] font-medium text-white/85 backdrop-blur-sm"
                  >
                    {icon}
                    {name}
                  </span>
                ))}
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-[0.9rem] font-bold text-white shadow-lg shadow-rose-900/40 transition-all duration-200 group-hover:bg-rose-400">
                  <Heart size={15} fill="currentColor" />
                  Plan Honeymoon
                </span>
              </div>
            </div>
          </Link>

          {/* ── Domestic Adventures Card ── */}
          <Link
            href="/northindia"
            className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[20px] shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
          >
            {/* Fallback background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0f2a1a 0%, #1a4a2a 50%, #0a1f10 100%)",
              }}
            />

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/destinations/manali.jpg"
                alt="Incredible North India"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

            {/* Content */}
            <div className="relative mt-auto flex flex-col p-8">
              <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-yellow-400/40 bg-yellow-500/25 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-yellow-300 backdrop-blur-sm">
                <MapPin size={10} />
                Domestic Adventures
              </div>
              <h2 className="mb-3 font-serif text-[2.1rem] font-black leading-tight text-white">
                Incredible North India
              </h2>
              <p className="mb-5 text-[0.875rem] leading-[1.75] text-white/75">
                Snow mountains, ancient temples, and tropical backwaters —
                India has it all.{" "}
                <span className="font-semibold text-white/90">
                  Group & family packages from ₹1,797/person.
                </span>
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {domesticPlaces.map(({ icon, name }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.75rem] font-medium text-white/85 backdrop-blur-sm"
                  >
                    {icon}
                    {name}
                  </span>
                ))}
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3.5 text-[0.9rem] font-bold text-black shadow-lg shadow-yellow-900/30 transition-all duration-200 group-hover:bg-yellow-400">
                  <MapPin size={15} />
                  View Packages
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}