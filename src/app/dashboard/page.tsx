"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  FaPlaneDeparture,
  FaTags,
  FaStar,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaImages,
} from "react-icons/fa";
import { TOUR_CATEGORIES, DOMESTIC_DESTINATIONS, TRIP_PACKAGES } from "@/lib/explore-data";

const SLIDES = [
  { src: "/images/dashboard/01.png", label: "Kashmir — Heaven on Earth" },
  { src: "/images/dashboard/02.png", label: "Kerala — God's Own Country" },
  { src: "/images/dashboard/03.jpg", label: "Maldives — Overwater Paradise" },
  { src: "/images/dashboard/04.jpg", label: "Maldives — Overwater Paradise" },
  { src: "/images/dashboard/05.png", label: "Maldives — Overwater Paradise" },
  { src: "/images/dashboard/06.jpg", label: "Maldives — Overwater Paradise" },
];

const QUOTES = [
  "Vacay mode: ON ✈️",
  "One life to live — travel, make memories.",
  "Pack your bags, we'll handle the rest!",
  "Your next story starts here.",
];

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

const galleryImages = [
  { src: "/images/gallery/01.jpeg", alt: "Travel Memory 1", span: "col-span-1 row-span-2" },
  { src: "/images/gallery/02.jpeg", alt: "Travel Memory 2", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/03.jpeg", alt: "Travel Memory 3", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/04.jpeg", alt: "Travel Memory 4", span: "col-span-2 row-span-1" },
];

export default function Dashboard() {
  const [current, setCurrent] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [destIdx, setDestIdx] = useState(0);

  const destScrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

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

        {/* Fixed gradient overlay */}
        <div className="absolute inset-0 from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="mx-auto max-w-5xl text-center text-white">

            {/* Quote — fully visible, strong shadow */}
            <p
              className="mb-4 text-lg font-semibold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-all duration-700 sm:text-xl md:text-2xl"
              style={{ fontFamily: "var(--font-quote)" }}
            >
              {QUOTES[currentQuote]}
            </p>

            <h1
              className="text-4xl font-semibold leading-tight tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              One life to live—
              <span className="italic text-yellow-400"> travel,</span>
              <br />
              make memories, and
              <br />
              <span className="italic text-yellow-400">cherish them</span> for a lifetime.
            </h1>

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
      </section>

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
            <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
              {[...TOUR_CATEGORIES, ...TOUR_CATEGORIES].map((cat, i) => (
                <Link
                  key={i}
                  href="/trips"
                  className="group relative h-80 w-60 shrink-0 overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
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
      <section className="bg-[#e8f4f8] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-serif italic text-xl text-teal-700">
              Best Recommended Domestic Tour Places
            </p>
            <h2 className="text-4xl font-black text-slate-900">
              Popular Destination we offer for all
            </h2>
          </div>

          <div
            ref={destScrollRef}
            id="dest-scroll"
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => {
              if (!destScrollRef.current) return;
              isDragging.current = true;
              dragStartX.current = e.pageX;
              scrollStartLeft.current = destScrollRef.current.scrollLeft;
            }}
            onMouseMove={(e) => {
              if (!isDragging.current || !destScrollRef.current) return;
              e.preventDefault();
              const walk = (e.pageX - dragStartX.current) * 1.2;
              destScrollRef.current.scrollLeft = scrollStartLeft.current - walk;
            }}
            onMouseUp={() => { isDragging.current = false; }}
            onMouseLeave={() => { isDragging.current = false; }}
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardWidth = el.scrollWidth / DOMESTIC_DESTINATIONS.slice(0, 8).length;
              const idx = Math.round(el.scrollLeft / cardWidth);
              setDestIdx(idx);
            }}
          >
            {DOMESTIC_DESTINATIONS.slice(0, 8).map((dest) => (
              <Link
                key={dest.slug}
                href="/destinations"
                className="group flex flex-col shrink-0 w-[80vw] sm:w-[45vw] lg:w-[23%] snap-start overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 80vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 bg-[#FAF0E6]">
                  <h3 className="text-base font-bold text-slate-900">{dest.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-[0.75rem] text-slate-500">
                    <FaMapMarkerAlt className="text-xs text-teal-500" />
                    {dest.tagline}, India
                  </p>
                  <p className="mt-2 text-lg font-black text-slate-900">
                    ₹{dest.price.toLocaleString("en-IN")}
                    <span className="text-sm font-normal text-slate-500"> /Person</span>
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="flex items-center gap-1.5 text-[0.75rem] text-slate-500">
                      <FaClock className="text-xs" />
                      {dest.duration ?? "2 Days 1 Night"}
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-slate-300 px-4 py-1.5 text-[0.78rem] font-semibold text-slate-700 transition group-hover:border-teal-500 group-hover:text-teal-600">
                      Book Now <FaChevronRight className="text-[0.6rem]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {DOMESTIC_DESTINATIONS.slice(0, 8).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = document.getElementById("dest-scroll");
                  if (!el) return;
                  const cardWidth = el.scrollWidth / DOMESTIC_DESTINATIONS.slice(0, 8).length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                  setDestIdx(i);
                }}
                className={`block rounded-full transition-all duration-300 ${i === destIdx
                    ? "h-3 w-6 bg-teal-600"
                    : "h-3 w-3 border-2 border-slate-400 bg-transparent hover:border-teal-400"
                  }`}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center rounded-full border-2 border-yellow-500 px-8 py-3 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-500 hover:text-black"
            >
              View All →
            </Link>
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
                <div className="flex flex-1 flex-col p-5 bg-[#EAF5EA]">
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

      {/* ══════════════════════ GALLERY ══════════════════════ */}
      <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="inline-block rounded bg-yellow-500/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-600">
                Memories
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Through the <em className="italic text-yellow-500">Lens</em>
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Real trips, real smiles — a glimpse of the journeys we craft.
              </p>
            </div>
            <Link
              href="/gallery"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-yellow-500 px-6 py-2.5 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-500 hover:text-black"
            >
              <FaImages />
              View Full Gallery
            </Link>
          </div>

          {/* Mobile: simple 2-col grid */}
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {galleryImages.map((img, i) => (
              <Link
                key={i}
                href="/gallery"
                className="group relative h-[160px] overflow-hidden rounded-xl shadow-md"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a78 100%)" }}
                />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-3 py-1.5 text-[0.72rem] font-semibold text-white backdrop-blur-sm">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: bento grid */}
          <div className="hidden sm:grid sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <Link
                key={i}
                href="/gallery"
                className={`${img.span} group relative overflow-hidden rounded-2xl shadow-md`}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a78 100%)" }}
                />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-4 py-2 text-[0.8rem] font-semibold text-white backdrop-blur-sm">
                    View Gallery →
                  </span>
                </div>
              </Link>
            ))}
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
              <FaWhatsapp className="text-xl text-green-400" />
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