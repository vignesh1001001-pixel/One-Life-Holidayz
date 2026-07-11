"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";

const WHATSAPP = "https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20trip.";

type FormState = { name: string; email: string; phone: string; destination: string; message: string };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", destination: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    // Build WhatsApp message from form
    const msg = `Hi! I want to book a trip.%0AName: ${form.name}%0APhone: ${form.phone}%0ADestination: ${form.destination}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  const DESTINATIONS = [
    "Kashmir", "Manali", "Kedarnath", "Munnar", "Kerala",
    "Goa", "Rajasthan", "Andaman", "Maldives", "Dubai",
    "Thailand", "Sri Lanka", "Other / Custom",
  ];

  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Plan Your Dream Trip"
        highlight="Dream Trip"
        subtitle="Fill the form, drop us a WhatsApp, or call — we'll get back to you within the hour."
        gradient="linear-gradient(135deg, #0a1628 0%, #0e2847 100%)"
      />

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

          {/* ── Contact Info ── */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              We&apos;re Here to <em className="text-yellow-500">Help You</em>
            </h2>
            <p className="mt-3 leading-relaxed text-slate-500">
              Got a destination in mind? Not sure where to go? We&apos;re happy to suggest the perfect trip
              for your budget and travel style — no cost, no obligation.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:border-yellow-300 hover:bg-yellow-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Call Us</div>
                  <div className="mt-0.5 font-semibold text-slate-900">+91 98765 43210</div>
                </div>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp</div>
                  <div className="mt-0.5 font-semibold text-slate-900">Chat Instantly</div>
                  <div className="text-sm text-slate-500">Usually replies within minutes</div>
                </div>
              </a>

              <a
                href="mailto:onelifeholidayz@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:border-yellow-300 hover:bg-yellow-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</div>
                  <div className="mt-0.5 font-semibold text-slate-900">hello@onelifeholidayz.in</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</div>
                  <div className="mt-0.5 font-semibold text-slate-900">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Follow Us</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://instagram.com/onelifeholidayz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com/onelifeholidayz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-green-400 hover:bg-green-400 hover:text-white"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-500">
                  <FaWhatsapp className="text-4xl" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-slate-900">
                  Opening WhatsApp!
                </h3>
                <p className="mt-3 text-slate-500">
                  Your enquiry details have been pre-filled. We&apos;ll reply within minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Request a Free Quote
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Phone / WhatsApp *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Destination Interested In
                  </label>
                  <select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                  >
                    <option value="">Select a destination…</option>
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Tell us about your trip
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Dates, number of travellers, budget, special requests…"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.phone}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 py-4 font-semibold text-black shadow-lg transition hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                  Send via WhatsApp
                </button>

                <p className="text-center text-xs text-slate-400">
                  This will open WhatsApp with your details pre-filled.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
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