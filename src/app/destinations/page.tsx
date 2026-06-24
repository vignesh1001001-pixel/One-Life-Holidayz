import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Destinations | One Life Holidayz",
  description:
    "Explore international getaways and the best of India — handpicked destinations for every kind of traveller.",
};

const STATS = [
  { label: "Destinations", value: "50+" },
  { label: "Tours Done", value: "200+" },
  { label: "Happy Travellers", value: "1k+" },
  { label: "Years Experience", value: "3+" },
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

          {/* International Card */}
          <Link
            href="/international"
            className="group relative block min-h-[460px] overflow-hidden rounded-[20px] shadow-xl transition-transform hover:-translate-y-1.5"
          >
            <Image
              src="/images/destinations/international/dubai.jpg"
              alt="International Destinations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="mb-3 inline-block w-fit rounded border border-blue-400/30 bg-blue-400/20 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-blue-300">
                🌍 International
              </div>
              <div className="mb-2.5 font-serif text-[2.2rem] font-black text-white leading-tight">
                Explore the World
              </div>
              <p className="mb-3 text-[0.88rem] leading-[1.7] text-white/80">
                Dubai, Bali, Maldives, Europe & more — handpicked international packages designed for Indian travellers.
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {["Dubai", "Bali", "Thailand", "Maldives", "Europe"].map((place) => (
                  <span
                    key={place}
                    className="rounded-full bg-white/10 px-3 py-1 text-[0.75rem] text-white/90 backdrop-blur-sm"
                  >
                    {place}
                  </span>
                ))}
              </div>
              <span className="w-fit rounded-full bg-blue-500 px-7 py-3 text-[0.9rem] font-bold text-white shadow-lg transition-transform group-hover:-translate-y-0.5">
                View International Trips →
              </span>
            </div>
          </Link>

          {/* Domestic Card */}
          <Link
            href="/domestic"
            className="group relative block min-h-[460px] overflow-hidden rounded-[20px] shadow-xl transition-transform hover:-translate-y-1.5"
          >
            <Image
              src="/images/destinations/manali.jpg"
              alt="Domestic Destinations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="mb-3 inline-block w-fit rounded border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-yellow-300">
                🇮🇳 Domestic
              </div>
              <div className="mb-2.5 font-serif text-[2.2rem] font-black text-white leading-tight">
                Discover India
              </div>
              <p className="mb-3 text-[0.88rem] leading-[1.7] text-white/80">
                Kashmir to Kerala, Rajasthan to Andaman — the best of India in curated group & family packages.
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {["Kashmir", "Goa", "Manali", "Kerala", "Ladakh"].map((place) => (
                  <span
                    key={place}
                    className="rounded-full bg-white/10 px-3 py-1 text-[0.75rem] text-white/90 backdrop-blur-sm"
                  >
                    {place}
                  </span>
                ))}
              </div>
              <span className="w-fit rounded-full bg-yellow-500 px-7 py-3 text-[0.9rem] font-bold text-black shadow-lg transition-transform group-hover:-translate-y-0.5">
                View Domestic Trips →
              </span>
            </div>
          </Link>

        </div>
      </section>


    </main>
  );
}