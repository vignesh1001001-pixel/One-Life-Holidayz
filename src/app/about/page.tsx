import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaHeart, FaMapMarkedAlt, FaUsers, FaStar } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us | One Life Holidayz",
  description:
    "We are a Chennai-based travel company crafting unforgettable journeys across India and beyond.",
};

const TEAM = [
  {
    name: "Arun Kumar",
    role: "Founder & Lead Travel Planner",
    initials: "AK",
    bio: "10+ years in travel, passionate about creating personalised experiences that last a lifetime.",
  },
  {
    name: "Divya Rajan",
    role: "International Destinations Expert",
    initials: "DR",
    bio: "Specialist in Southeast Asia and the Middle East, with first-hand knowledge of every hotel she recommends.",
  },
  {
    name: "Karthik S",
    role: "Domestic & Himalayan Expert",
    initials: "KS",
    bio: "A trekker at heart, Karthik has personally explored every Himalayan destination in our catalogue.",
  },
];

const MILESTONES = [
  { year: "2021", event: "Founded in Chennai with a vision to democratise premium travel." },
  { year: "2022", event: "Expanded to 20+ domestic destinations, serving 500+ travellers." },
  { year: "2023", event: "Launched international packages — Maldives, Dubai, Thailand & Sri Lanka." },
  { year: "2024", event: "Crossed 1,000 happy travellers and a 4.9★ average rating." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="About One Life Holidayz"
        highlight="One Life"
        subtitle="Born in Chennai, built on passion — we believe everyone deserves to live their best travel story."
        gradient="linear-gradient(135deg, #0a1628 0%, #1a2e5a 100%)"
      />

      {/* ── Mission ── */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded bg-yellow-500/10 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-yellow-600">
                Who We Are
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                We Don&apos;t Just Plan Trips —<br />
                <em className="italic text-yellow-500">We Craft Memories</em>
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                One Life Holidayz started with a simple belief: travel should be effortless, personal, and
                transformative. We are a small, passionate team based in Chennai, and every itinerary we build
                is treated like our own holiday.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                From misty hill stations in the Nilgiris to overwater villas in the Maldives — we cover it all
                with the same attention to detail that makes you feel cared for from the moment you book to the
                moment you return home.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Plan With Us
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-green-500 px-7 py-3 font-semibold text-green-600 transition hover:bg-green-500 hover:text-black"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop"
                alt="Beautiful travel scenery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-2xl text-yellow-500" />
                  <div>
                    <div className="font-serif text-lg font-bold text-slate-900">1,000+ Travellers</div>
                    <div className="text-sm text-slate-500">and counting since 2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0a1628] px-6 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { icon: <FaMapMarkedAlt />, value: "50+", label: "Destinations" },
            { icon: <FaUsers />, value: "1k+", label: "Happy Travellers" },
            { icon: <FaStar />, value: "4.9★", label: "Avg Rating" },
            { icon: <FaHeart />, value: "3+", label: "Years of Passion" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <div className="text-xl text-yellow-400">{s.icon}</div>
              <div className="font-serif text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm font-medium uppercase tracking-wider text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story / Timeline ── */}
      <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Milestones" title="Our Journey So Far" highlight="Journey" />
          <div className="relative mt-10 space-y-8 before:absolute before:left-7 before:top-0 before:h-full before:w-0.5 before:bg-yellow-300 sm:before:left-[88px]">
            {MILESTONES.map((m) => (
              <div key={m.year} className="flex items-start gap-6">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-serif font-bold text-black shadow-md sm:w-[120px]">
                  {m.year}
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm flex-1">
                  <p className="leading-relaxed text-slate-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="The Team"
            title="People Behind Your Trip"
            highlight="Your Trip"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 font-serif text-2xl font-bold text-black shadow">
                  {member.initials}
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-yellow-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-yellow-500 px-6 py-16 text-center md:px-12">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-3xl font-black text-black">
            Ready to Start Your Story?
          </h2>
          <p className="mt-3 text-black/70">
            Let us plan your dream trip — it only takes one conversation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#1a1a1a]"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20plan%20a%20trip."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
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