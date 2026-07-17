import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Bus, Hotel, Users, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { DOMESTIC_PICKS } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "North India Destinations | One Life Holidayz",
  description:
    "From snow-capped Himalayas to ancient temples and royal palaces — explore curated North India tour packages.",
};

export default function NorthIndiaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Incredible India"
        title="North India Destinations"
        highlight="Destinations"
        subtitle="From snow-capped Himalayas to ancient temples and royal palaces — discover the soul of North India"
        gradient="linear-gradient(135deg, #0a1628 0%, #1a3a78 50%, #0d3b2e 100%)"
      />

      {/* Why Travel India with Us */}
      <section className="bg-white px-[5%] py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { icon: <Bus className="h-7 w-7 text-blue-600" />, label: "AC Transport", desc: "Comfortable door-to-door travel" },
              { icon: <Hotel className="h-7 w-7 text-blue-600" />, label: "Curated Stays", desc: "Hotels, resorts & homestays" },
              { icon: <Users className="h-7 w-7 text-blue-600" />, label: "Family & Group Tours", desc: "Packages for every group size" },
              { icon: <Phone className="h-7 w-7 text-blue-600" />, label: "24/7 Support", desc: "We're always just a call away" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm"
              >
                <span className="mb-3">{item.icon}</span>
                <div className="mb-1 text-[0.9rem] font-bold text-slate-800">{item.label}</div>
                <div className="text-[0.78rem] text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Domestic Destinations */}
      <section className="bg-slate-50 px-[5%] pb-20 pt-4">
        <SectionHeader
          eyebrow="Explore India"
          title="Best of North India"
          highlight="North India"
          align="left"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMESTIC_PICKS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/contact?destination=${dest.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Tag badge */}
                <div className="absolute left-3 top-3 rounded-full bg-yellow-500/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-black backdrop-blur-sm">
                  {dest.tag}
                </div>
                {/* State */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[0.8rem] font-semibold text-white/90">
                  <MapPin className="h-3.5 w-3.5" />
                  {dest.sub}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-serif text-[1.25rem] font-bold text-slate-900">{dest.name}</h3>
                  {dest.price && (
                    <span className="text-[0.78rem] font-bold text-yellow-600">
                      From {dest.price}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-[0.82rem] font-semibold text-yellow-600 transition-gap group-hover:gap-2">
                  Enquire Now →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-[0.95rem] text-slate-600">
            Looking for a custom itinerary? Tell us your dates & group size.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-yellow-500 px-8 py-[13px] text-[0.95rem] font-bold tracking-wide text-black shadow-lg transition-all hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            Plan My North India Trip →
          </Link>
        </div>
      </section>
    </main>
  );
}