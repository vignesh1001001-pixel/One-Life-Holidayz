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
  FaMinus,
  FaPlus,
  FaUsers,
  FaHeart,
  FaUserFriends,
  FaUser,
  FaBriefcase,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";

const PHONE_DISPLAY = "+91 72004 98318";
const PHONE_TEL = "+917200498318";
const PHONE_WA = "917200498318"; // international format, no + or spaces, used for wa.me links
const WHATSAPP = "https://wa.me/qr/HMQEJ3SMUGMZH1";

const TRAVEL_TYPES = [
  { label: "Honeymoon", icon: FaHeart },
  { label: "Family", icon: FaUsers },
  { label: "Friends / Group", icon: FaUserFriends },
  { label: "Solo", icon: FaUser },
  { label: "Corporate", icon: FaBriefcase },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  guests: string;
  days: string;
  travelDate: string;
  travelType: string;
  specialRequirements: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  guests: "",
  days: "",
  travelDate: "",
  travelType: "",
  specialRequirements: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Used by the guest/day steppers and the travel-type button group,
  // which update form state directly rather than through an <input> event.
  function setField(name: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function adjustCount(name: "guests" | "days", delta: number, min = 1) {
    setForm((prev) => {
      const current = parseInt(prev[name], 10) || 0;
      const next = Math.max(min, current + delta);
      return { ...prev, [name]: String(next) };
    });
  }

  // Every field is required now, so the button is disabled until all are filled.
  const isFormComplete = Object.values(form).every((v) => v.trim() !== "");

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (!isFormComplete) return;

    // Build WhatsApp message from form, including all the new details.
    const msg =
      `Hi! I'd like a quick enquiry for a trip.%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Destination: ${form.destination}%0A` +
      `Number of Guests: ${form.guests}%0A` +
      `Number of Days: ${form.days}%0A` +
      `Travel Date: ${form.travelDate}%0A` +
      `Travel Type: ${form.travelType}%0A` +
      `Special Requirements: ${form.specialRequirements}`;

    window.open(`https://wa.me/${PHONE_WA}?text=${msg}`, "_blank");
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
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:border-yellow-300 hover:bg-yellow-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Call Us</div>
                  <div className="mt-0.5 font-semibold text-slate-900">{PHONE_DISPLAY}</div>
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
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Request a Quick Enquiry
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
                      placeholder="+91 72004 98318"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email *
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
                    Destination Interested In *
                  </label>
                  <div className="relative">
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    >
                      <option value="">Select a destination…</option>
                      {DESTINATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                  </div>
                </div>

                {/* Guests / Days — stepper controls instead of raw number inputs */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Number of Guests *
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm transition focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20">
                      <button
                        type="button"
                        aria-label="Decrease guests"
                        onClick={() => adjustCount("guests", -1)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <input
                        name="guests"
                        type="text"
                        inputMode="numeric"
                        value={form.guests}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "");
                          setField("guests", digits);
                        }}
                        placeholder="0"
                        className="w-full flex-1 bg-transparent text-center text-sm font-semibold text-slate-900 outline-none"
                      />
                      <button
                        type="button"
                        aria-label="Increase guests"
                        onClick={() => adjustCount("guests", 1)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500 text-black transition hover:bg-yellow-400"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Number of Days *
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm transition focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20">
                      <button
                        type="button"
                        aria-label="Decrease days"
                        onClick={() => adjustCount("days", -1)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <input
                        name="days"
                        type="text"
                        inputMode="numeric"
                        value={form.days}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "");
                          setField("days", digits);
                        }}
                        placeholder="0"
                        className="w-full flex-1 bg-transparent text-center text-sm font-semibold text-slate-900 outline-none"
                      />
                      <button
                        type="button"
                        aria-label="Increase days"
                        onClick={() => adjustCount("days", 1)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500 text-black transition hover:bg-yellow-400"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Travel Date — custom-styled with a branded calendar icon */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Travel Date *
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20">
                    <FaCalendarAlt className="mr-3 shrink-0 text-yellow-500" />
                    <input
                      name="travelDate"
                      type="date"
                      value={form.travelDate}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm text-slate-900 outline-none [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60"
                    />
                  </div>
                </div>

                {/* Travel Type — icon button group instead of a plain <select> */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Travel Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {TRAVEL_TYPES.map(({ label, icon: Icon }) => {
                      const active = form.travelType === label;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setField("travelType", label)}
                          className={`flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 text-center text-xs font-semibold shadow-sm transition ${
                            active
                              ? "border-yellow-500 bg-yellow-50 text-yellow-700 ring-2 ring-yellow-400/30"
                              : "border-slate-200 bg-white text-slate-600 hover:border-yellow-300 hover:bg-yellow-50/40"
                          }`}
                        >
                          <Icon className={`text-base ${active ? "text-yellow-600" : "text-slate-400"}`} />
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Special Requirements *
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={form.specialRequirements}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Budget, dietary needs, accessibility, celebration plans, anything else we should know…"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!isFormComplete}
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