import Link from "next/link";
import Image from "next/image";
import { Bus, Hotel, Users, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { HONEYMOON_PICKS, DOMESTIC_PICKS } from "@/lib/destinations";

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

      {/* Honeymoon Section — North India */}
      <section className="bg-white px-[5%] pb-16 pt-4">
        <SectionHeader
          eyebrow="Honeymoon Specials"
          title="North India Romance"
          highlight="Romance"
          align="left"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3">
          {HONEYMOON_PICKS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/contact?destination=${dest.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {/* Tag */}
                <div className="absolute left-3 top-3 rounded-full bg-rose-500/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {dest.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-serif text-[1.1rem] font-bold text-white">{dest.name}</div>
                  <div className="flex items-center gap-1 text-[0.75rem] text-white/75">
                    <MapPin className="h-3 w-3" />
                    {dest.sub}
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {DOMESTIC_PICKS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/contact?destination=${dest.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Tag */}
                <div className="absolute left-2 top-2 rounded-full bg-yellow-500/90 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-black">
                  {dest.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="font-serif text-[1rem] font-bold text-white">{dest.name}</div>
                  <div className="flex items-center gap-1 text-[0.72rem] text-white/75">
                    <MapPin className="h-3 w-3" />
                    {dest.sub}
                  </div>
                </div>
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