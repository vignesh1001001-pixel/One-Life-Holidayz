"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaPlaneDeparture,
  FaTags,
  FaStar,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUsers,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { TOUR_CATEGORIES, DOMESTIC_DESTINATIONS, TRIP_PACKAGES } from "@/lib/explore-data";

// ─── Hero ───────────────────────────────────────────────────────────────────

const SLIDES = [
  { src: "/images/dashboard/01.jpg", label: "Kashmir — Heaven on Earth" },
  { src: "/images/dashboard/02.jpg", label: "Kerala — God's Own Country" },
  { src: "/images/dashboard/03.jpg", label: "Maldives — Overwater Paradise" },
];

const QUOTES = [
  "Vacay mode: ON ✈️",
  "One life to live — travel, make memories.",
  "Pack your bags, we'll handle the rest!",
  "Your next story starts here.",
];

// // ─── Stats ───────────────────────────────────────────────────────────────────

// const STATS = [
//   { icon: <FaMapMarkerAlt />, value: "50+", label: "Destinations" },
//   { icon: <FaPlaneDeparture />, value: "200+", label: "Tours Done" },
//   { icon: <FaUsers />, value: "1k+", label: "Happy Travellers" },
//   { icon: <FaStar />, value: "4.9", label: "Avg Rating" },
// ];

// ─── Testimonials ────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Chennai",
    text: "One Life Holidayz made our honeymoon in Munnar absolutely magical. Every detail was taken care of, and the cottage they arranged had stunning valley views!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rahul Mehta",
    location: "Bangalore",
    text: "We did the Kashmir package with them — 7 days of pure bliss. The team was responsive, the hotels were excellent, and the Shikara ride on Dal Lake was unforgettable.",
    rating: 5,
    avatar: "RM",
  },
  {
    name: "Anitha Rajan",
    location: "Coimbatore",
    text: "Booked the Kerala backwaters trip for our family of 6. Amazing houseboat experience, great food, and everything was perfectly organised. Will book again!",
    rating: 5,
    avatar: "AR",
  },
];

// ─── Why Us ──────────────────────────────────────────────────────────────────

const WHY_US = [
  {
    icon: <FaShieldAlt className="text-2xl text-yellow-500" />,
    title: "Trusted & Safe",
    desc: "All our partners are verified. Your safety is our top priority on every journey.",
  },
  {
    icon: <FaHeadset className="text-2xl text-yellow-500" />,
    title: "24/7 Support",
    desc: "Our travel experts are available round the clock to assist you during your trip.",
  },
  {
    icon: <FaTags className="text-2xl text-yellow-500" />,
    title: "Best Price Guarantee",
    desc: "Transparent pricing with no hidden costs. Get the best deals for your budget.",
  },
  {
    icon: <FaClock className="text-2xl text-yellow-500" />,
    title: "Tailored Itineraries",
    desc: "Every trip is crafted just for you — your pace, your interests, your memories.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [current, setCurrent] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [catIdx, setCatIdx] = useState(0);

  // Hero image slider
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  // Quote rotator
  useEffect(() => {
    const t = setInterval(() => setCurrentQuote((p) => (p + 1) % QUOTES.length), 3200);
    return () => clearInterval(t);
  }, []);

  const WHATSAPP = "https://wa.me/qr/HMQEJ3SMUGMZH1";

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {SLIDES.map((slide, i) => (
          <Image
            key={i}
            src={slide.src}
            alt={slide.label}
            fill
            priority={i === 0}
            className={`absolute inset-0 object-cover transition-opacity duration-1000 ${current === i ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="mx-auto max-w-5xl text-center text-white">
            <p
              className="mb-4 text-lg text-yellow-300 transition-all duration-700 sm:text-xl md:text-2xl"
              style={{ fontFamily: "var(--font-quote)" }}
            >
              {QUOTES[currentQuote]}
            </p>

            <h1
              className="text-4xl font-semibold leading-tight tracking-wide sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              One life to live—
              <span className="italic text-yellow-400"> travel,</span>
              <br />
              make memories, and
              <br />
              <span className="italic text-yellow-400">cherish them</span> for a lifetime.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
              Handcrafted journeys through India and across the world — where every adventure
              becomes a story worth sharing.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/trips"
                className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 text-base font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-400 sm:w-auto"
              >
                <FaPlaneDeparture />
                Explore Trips
              </Link>
              <Link
                href="/contact"
                className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
              >
                <FaTags />
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        {/* <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                current === i
                  ? "h-3 w-8 rounded-full bg-yellow-400"
                  : "h-3 w-3 rounded-full bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div> */}
      </section>

      {/* ══════════════════════ STATS BAR ══════════════════════ */}
      {/* <section className="bg-[#0a1628] px-6 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <div className="text-yellow-400 text-xl">{s.icon}</div>
              <div className="font-serif text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm font-medium uppercase tracking-wider text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ══════════════════════ EXPLORE CATEGORIES ══════════════════════ */}
      <section className="bg-white py-20">
        <div className="md:px-12">
          <div className="mb-10 text-center">
            <span className="inline-block rounded bg-yellow-500/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-600">
              What We Offer
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore by <em className="italic text-yellow-500">Experience</em>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-500">
              Choose the kind of adventure that makes your heart race.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-5 animate-[marquee_18s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[...TOUR_CATEGORIES, ...TOUR_CATEGORIES].map((cat, i) => (
                <Link
                  key={i}
                  href="/trips"
                  className="group relative shrink-0 w-60 h-80 overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-serif text-base font-bold text-white">{cat.name}</div>
                    <div className="mt-1 text-[0.7rem] text-white/70">{cat.blurb}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ DOMESTIC DESTINATIONS ══════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="inline-block rounded bg-yellow-500/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-600">
                Domestic
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900">
                Best of <em className="italic text-yellow-500">India</em>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="shrink-0 rounded-full border-2 border-yellow-500 px-6 py-2.5 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-500 hover:text-black"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {DOMESTIC_DESTINATIONS.slice(0, 8).map((dest) => (
              <Link
                key={dest.slug}
                href="/destinations"
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
              >
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-serif text-[1rem] font-bold text-white">{dest.name}</div>
                  <div className="mt-0.5 text-[0.7rem] text-white/70">{dest.tagline}</div>
                  <div className="mt-1 font-serif text-sm text-yellow-400">
                    from ₹{dest.price.toLocaleString("en-IN")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURED PACKAGES ══════════════════════ */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="inline-block rounded bg-yellow-500/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-600">
                Packages
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900">
                Featured <em className="italic text-yellow-500">Trips</em>
              </h2>
            </div>
            <Link
              href="/trips"
              className="shrink-0 rounded-full border-2 border-yellow-500 px-6 py-2.5 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-500 hover:text-black"
            >
              All Packages →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRIP_PACKAGES.slice(0, 6).map((pkg) => (
              <Link
                key={pkg.id}
                href="/trips"
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
                      <p className="mt-0.5 text-sm text-slate-500">{pkg.destination}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <FaStar className="text-xs" />
                      <span className="font-semibold text-slate-800">{pkg.rating}</span>
                      <span className="text-slate-400">({pkg.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((h) => (
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
                    </div>
                    <span className="text-xs text-slate-400">{pkg.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition-all hover:scale-105 hover:bg-yellow-400"
            >
              <FaTags /> Book Now — Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY CHOOSE US ══════════════════════ */}
      <section className="bg-[#0a1628] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded bg-yellow-400/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-400">
              Why Us
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
              Travel With <em className="italic text-yellow-400">Confidence</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="mb-2 font-serif text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded bg-yellow-500/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-600">
            Testimonials
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our <em className="italic text-yellow-500">Travellers</em> Say
          </h2>

          <div className="relative mt-12">
            {/* Card */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm md:p-12">
              <FaQuoteLeft className="mx-auto mb-6 text-3xl text-yellow-400 opacity-60" />
              <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                {TESTIMONIALS[testimonialIdx].text}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
                  {TESTIMONIALS[testimonialIdx].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900">
                    {TESTIMONIALS[testimonialIdx].name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {TESTIMONIALS[testimonialIdx].location}
                  </div>
                </div>
                <div className="flex gap-0.5 text-yellow-400">
                  {Array.from({ length: TESTIMONIALS[testimonialIdx].rating }).map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() =>
                  setTestimonialIdx(
                    (p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-yellow-500 hover:text-yellow-500"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`h-3 rounded-full transition-all ${i === testimonialIdx ? "w-8 bg-yellow-500" : "w-3 bg-slate-300"
                    }`}
                />
              ))}
              <button
                onClick={() =>
                  setTestimonialIdx((p) => (p + 1) % TESTIMONIALS.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-yellow-500 hover:text-yellow-500"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="relative overflow-hidden bg-yellow-500 px-6 py-16 text-center md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-black text-black sm:text-4xl">
            Ready for Your Next Adventure?
          </h2>
          <p className="mt-3 text-black/70">
            Talk to our travel experts today — no cost, no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1a1a1a]"
            >
              <FaWhatsapp className="text-green-400 text-xl" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 font-semibold text-black transition-all hover:bg-black hover:text-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FLOATING WHATSAPP ══════════════════════ */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-400 md:h-16 md:w-16"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </a>
    </>
  );
}