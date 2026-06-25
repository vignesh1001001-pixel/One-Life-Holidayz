"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaMapMarkedAlt,
  FaSuitcase,
  FaImages,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaInfoCircle,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Destinations", href: "/destinations", icon: <FaMapMarkedAlt /> },
  { name: "Packages", href: "/trips", icon: <FaSuitcase /> },
  { name: "Gallery", href: "/gallery", icon: <FaImages /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Contact", href: "/contact", icon: <FaPhoneAlt /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-b border-slate-100"
            : "bg-white backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-6">

          {/* Logo */}
          <Link href="/">
            <div className="relative h-12 w-36 sm:h-16 sm:w-44 lg:h-20 lg:w-56">
              <Image
                src="/images/logo/logo.png"
                alt="One Life Holidayz"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 224px"
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                    : isScrolled
                    ? "text-slate-800 hover:text-yellow-500"
                    : "text-slate-800 hover:text-yellow-400"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:block">
            <Link
              href="/trips"
              className="rounded-full bg-yellow-500 px-6 py-3 text-black font-semibold hover:bg-yellow-400 transition"
            >
              Explore Trips
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="xl:hidden text-2xl text-slate-800"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 h-screen w-80 bg-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="relative h-12 w-44">
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <nav className="mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-6 py-4 border-b transition ${
                isActive(link.href)
                  ? "bg-yellow-50 text-yellow-600"
                  : "hover:bg-yellow-50"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          <div className="p-6">
            <Link
              href="/trips"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-yellow-500 py-4 font-semibold"
            >
              <FaPlaneDeparture />
              Explore Trips
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}