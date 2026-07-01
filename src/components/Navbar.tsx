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
  FaPlaneDeparture,
  FaInfoCircle,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Destinations", href: "/destinations", icon: <FaMapMarkedAlt /> },
  { name: "Packages", href: "/packages", icon: <FaSuitcase /> },
  { name: "Gallery", href: "/gallery", icon: <FaImages /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-slate-100"
            : "bg-white backdrop-blur-sm border-b border-slate-100/50"
        }`}
      >
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          style={{ height: "72px" }}
        >
          {/* Logo + Desktop Navigation */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <div className="relative h-12 w-36 sm:h-14 sm:w-44 lg:h-16 lg:w-52">
                <Image
                  src="/images/logo/logo.png"
                  alt="One Life Holidayz"
                  fill
                  sizes="(max-width:640px) 144px, (max-width:1024px) 176px, 208px"
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[0.9rem] font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-yellow-600 bg-yellow-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-[0.8rem]">{link.icon}</span>
                  {link.name}

                  {isActive(link.href) && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-yellow-400" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center ml-auto">
            <Link
              href="/contact"
              className="mr-auto flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-[0.85rem] font-bold text-black shadow-md shadow-yellow-200 transition-all hover:bg-yellow-300 hover:scale-105 whitespace-nowrap"
            >
              <FaPlaneDeparture className="text-sm" />
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="xl:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-yellow-100 hover:text-yellow-600"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </header>

      {/* ================= Overlay ================= */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 xl:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= Mobile Drawer ================= */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="relative h-10 w-36">
            <Image
              src="/images/logo/logo.png"
              alt="One Life Holidayz"
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex flex-col h-[calc(100vh-73px)] overflow-y-auto">
          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold transition-all ${
                  isActive(link.href)
                    ? "bg-yellow-400 text-black shadow-md shadow-yellow-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span
                  className={`text-base ${
                    isActive(link.href)
                      ? "text-black"
                      : "text-slate-400"
                  }`}
                >
                  {link.icon}
                </span>

                {link.name}

                {isActive(link.href) && (
                  <span className="ml-auto text-xs font-bold text-black/60">
                    ●
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="border-t border-slate-100 p-5">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-3.5 text-[0.9rem] font-bold text-black shadow-md shadow-yellow-100 transition hover:bg-yellow-300"
            >
              <FaPlaneDeparture />
              Request a Quotation
            </Link>

            <p className="pt-4 text-center text-[0.72rem] text-slate-400 tracking-wide">
              One Life — Travel it well ✈️
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}