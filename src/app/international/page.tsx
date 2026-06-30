import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { INTERNATIONAL_PICKS } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "International Destinations | One Life Holidayz",
  description:
    "Explore Dubai, Bali, Maldives, Thailand, Europe & more — international holiday packages crafted for Indian travellers.",
};

export default function InternationalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Beyond Borders"
        title="International Destinations"
        highlight="International"
        subtitle="Handpicked destinations across Asia, the Middle East & Europe — with packages designed for Indian travellers"
        gradient="linear-gradient(135deg, #0a1628 0%, #0e3460 50%, #1a5276 100%)"
      />

      {/* Why Travel International with Us */}
      <section className="bg-white px-[5%] py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { icon: "✈️", label: "Visa Assistance", desc: "End-to-end visa support" },
              { icon: "🏨", label: "4★ & 5★ Hotels", desc: "Carefully vetted stays" },
              { icon: "🗣️", label: "Hindi-Speaking Guides", desc: "Feel at home abroad" },
              { icon: "💰", label: "Best Price Promise", desc: "No hidden charges" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm"
              >
                <span className="mb-3 text-3xl">{item.icon}</span>
                <div className="mb-1 text-[0.9rem] font-bold text-slate-800">{item.label}</div>
                <div className="text-[0.78rem] text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-slate-50 px-[5%] pb-20 pt-4">
        <SectionHeader
          eyebrow="12 Countries & Counting"
          title="Popular International Packages"
          highlight="International Packages"
          align="left"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INTERNATIONAL_PICKS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/contact?destination=${dest.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Tag badge */}
                <div className="absolute left-3 top-3 rounded-full bg-blue-500/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {dest.tag}
                </div>
                {/* Country */}
                <div className="absolute bottom-3 left-3 text-[0.8rem] font-semibold text-white/90">
                  📍 {dest.country}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-[1.25rem] font-bold text-slate-900">{dest.name}</h3>
                  <span className="text-[0.78rem] font-bold text-blue-600">
                    From {dest.startingPrice}
                  </span>
                </div>
                {/* Highlights */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {dest.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.7rem] text-slate-600"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[0.82rem] font-semibold text-blue-600 transition-gap group-hover:gap-2">
                  Enquire Now →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-[0.95rem] text-slate-600">
            Don't see your dream destination? We can plan it for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-[13px] text-[0.95rem] font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Plan My International Trip →
          </Link>
        </div>
      </section>
    </main>
  );
}