"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaMapMarkedAlt,
  FaSuitcase,
  FaUsers,
  FaImages,
  FaPhoneAlt,
  FaPlaneDeparture,
  FaInfoCircle,
  FaChevronDown,
  FaBoxOpen,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Destinations", href: "/destinations", icon: <FaMapMarkedAlt /> },
  { name: "Packages", href: "/trips", icon: <FaSuitcase /> },  // renamed, no dropdown
  { name: "Gallery", href: "/gallery", icon: <FaImages /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Contact", href: "/contact", icon: <FaPhoneAlt /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [tripsOpen, setTripsOpen] = useState(false);
  const [mobileTripsOpen, setMobileTripsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTripsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20"
            : "bg-white/10 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

          {/* Logo */}
          <Link href="/">
            <div className="relative h-16 w-48">
              <Image
                src="/images/logo/logo.png"
                alt="One Life Holidayz"
                fill
                sizes="192px"
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                // Trips dropdown
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setTripsOpen((prev) => !prev)}
                    className={`flex items-center gap-2 text-sm font-medium transition-all ${
                      isActive(link.href)
                        ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        tripsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {tripsOpen && (
                    <div className="absolute top-full left-0 mt-3 w-48 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setTripsOpen(false)}
                          className={`flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-yellow-500/20 hover:text-yellow-400 transition-all ${
                            isActive(item.href) ? "text-yellow-400 bg-yellow-500/10" : ""
                          }`}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )
            )}
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
            className="xl:hidden text-2xl text-white"
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
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileTripsOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between gap-3 px-6 py-4 border-b transition ${
                    isActive(link.href)
                      ? "bg-yellow-50 text-yellow-600"
                      : "hover:bg-yellow-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {link.icon}
                    {link.name}
                  </span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      mobileTripsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileTripsOpen && (
                  <div className="bg-yellow-50/50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 pl-10 pr-6 py-3 border-b text-sm transition ${
                          isActive(item.href)
                            ? "text-yellow-600 bg-yellow-50"
                            : "hover:bg-yellow-50"
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}

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