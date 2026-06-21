"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaTags,
  FaWhatsapp,
} from "react-icons/fa";
import { TRIP_PACKAGES, TOUR_CATEGORIES } from "@/lib/explore-data";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const WHATSAPP_BASE =
  "https://wa.me/919876543210?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20";

export default function TripsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { label: "All Trips", value: "all" },
    { label: "India", value: "india" },
    { label: "International", value: "international" },
    { label: "Luxury", value: "luxury" },
  ];

  const filtered = TRIP_PACKAGES.filter((pkg) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "india") return pkg.destination.includes("India");
    if (activeFilter === "international")
      return !pkg.destination.includes("India");
    if (activeFilter === "luxury") return pkg.badge === "Luxury" || pkg.price > 30000;
    return true;
  });

  return (
    <main>
      <PageHero
        eyebrow="Our Packages"
        title="Find Your Perfect Trip"
        highlight="Perfect Trip"
        subtitle="Handcrafted itineraries for every kind of traveller — budget to luxury, hills to beaches."
        gradient="linear-gradient(135deg, #0a1628 0%, #1e3a6e 100%)"
      />

      {/* ── Category Tiles ── */}
      <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="By Experience"
            title="Choose Your Adventure"
            highlight="Adventure"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {TOUR_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-serif text-sm font-bold text-white">{cat.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Packages ── */}
      <section className="bg-slate-50 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="All Packages"
            title="Ready-Made Itineraries"
            highlight="Itineraries"
          />

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeFilter === f.value
                    ? "bg-yellow-500 text-black shadow-md"
                    : "bg-white text-slate-600 shadow-sm hover:bg-yellow-50 hover:text-yellow-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg) => (
              <div
                key={pkg.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={pkg.img}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {pkg.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-[0.7rem] font-bold text-black shadow">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">{pkg.name}</h3>
                      <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                        <FaMapMarkerAlt className="text-yellow-500 text-xs" />
                        {pkg.destination}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="font-semibold text-slate-800">{pkg.rating}</span>
                      <span className="text-slate-400">({pkg.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                    <FaClock className="text-yellow-500" />
                    {pkg.duration}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {pkg.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-slate-100 px-3 py-1 text-[0.68rem] font-medium text-slate-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div>
                      <span className="text-[0.7rem] text-slate-400">Starting from</span>
                      <div className="font-serif text-xl font-bold text-slate-900">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </div>
                      <span className="text-[0.68rem] text-slate-400">per person</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/contact"
                        className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
                      >
                        Book Now
                      </Link>
                      <a
                        href={`${WHATSAPP_BASE}${encodeURIComponent(pkg.name)}%20package.`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1 rounded-full border border-green-500 px-5 py-2 text-sm font-medium text-green-600 transition hover:bg-green-50"
                      >
                        <FaWhatsapp /> Enquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-slate-500">
              No packages found for this filter. Try "All Trips".
            </div>
          )}
        </div>
      </section>

      {/* ── Custom Trip CTA ── */}
      <section className="bg-[#0a1628] px-6 py-16 text-center md:px-12">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-3xl font-bold text-white">
            Need a <em className="italic text-yellow-400">Custom Trip?</em>
          </h2>
          <p className="mx-auto mt-3 text-white/60">
            Tell us your dates, budget, and dream — we&apos;ll craft the perfect itinerary just for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition hover:bg-yellow-400"
            >
              <FaTags /> Get Free Quote
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20want%20a%20custom%20trip%20plan."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-green-500 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-500 hover:text-black"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20trip."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-400"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </main>
  );
}