import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// =================== SITE DETAILS ===================

const SITE = {
  phone: "+91 9360258013",
  phoneHref: "tel:+919360258013",

  email: "hello@onelifeholidayz.in",

  address: "Chennai, Tamil Nadu, India",

  instagram: "https://www.instagram.com/onelifeholidayz?igsh=eXh4dTVqeWt1M3h1&utm_source=qr",

  facebook: "https://facebook.com/onelifeholidayz",

  whatsapp: "https://wa.me/qr/HMQEJ3SMUGMZH1",
};

// =================== LINKS ===================

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/trips", label: "Trips" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Request a Quote" },
];

const DESTINATION_LINKS = [
  "Kashmir",
  "Kedarnath",
  "Manali",
  "Munnar",
  "Goa",
  "Rajasthan",
  "Kodaikannal",
  "Wayanad",
  "Ooty",
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-8 pt-20 text-slate-900 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-slate-200 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}

        <div>
          {/* White card behind the logo guarantees contrast no matter what
              section background sits behind the footer (the logo PNG is
              transparent, and its navy elements were vanishing on dark bg) */}
          <div className="relative h-16 w-56 rounded-xl bg-white p-2">
            <Image
              src="/images/logo/logo.png"
              alt="One Life Holidayz"
              fill
              sizes="224px"
              className="object-contain object-left"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Live it. Travel it. Own it. <br/> We create unforgettable travel experiences across India and around the
            world.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaInstagram />
            </a>

            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaFacebookF />
            </a>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaWhatsapp />
            </a>

            <a
              href={SITE.phoneHref}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#081424]">Quick Links</h3>

          <ul className="space-y-3">
            {QUICK_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-slate-600 transition hover:text-yellow-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}

        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#081424]">Popular Destinations</h3>

          <ul className="space-y-3">
            {DESTINATION_LINKS.map((place) => (
              <li key={place}>
                <Link href="/destinations" className="text-slate-600 transition hover:text-yellow-500">
                  {place}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#081424]">Contact Us</h3>

          <div className="space-y-5">
            <div className="flex gap-3 text-slate-600">
              <FaPhoneAlt className="mt-1 text-yellow-500" />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </div>

            <div className="flex gap-3 text-slate-600">
              <FaEnvelope className="mt-1 text-yellow-500" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>

            <div className="flex gap-3 text-slate-600">
              <FaMapMarkerAlt className="mt-1 text-yellow-500" />
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>© 2026 One Life Holidayz. All Rights Reserved.</p>

        <div className="flex gap-2">
          {["VISA", "Master", "UPI", "GPay"].map((item) => (
            <span key={item} className="rounded border border-slate-300 px-3 py-1 text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}