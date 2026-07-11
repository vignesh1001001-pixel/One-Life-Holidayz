"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { POPULAR_DESTINATIONS } from "@/lib/explore-data";

const AUTO_ROTATE_MS = 3500;

export default function PopularDestinationCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = POPULAR_DESTINATIONS.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, AUTO_ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total]);

  // Returns each card's offset from the active (center) card, wrapped to [-2, 2]
  function offsetFromActive(index: number) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-serif text-xl text-[#0a2540]/70">Top Destination</p>
        <h2 className="mt-1 font-sans text-3xl font-extrabold text-[#0a2540] sm:text-4xl">
          Popular Destination
        </h2>

        <div className="relative mt-14 flex h-[420px] items-center justify-center [perspective:1400px]">
          {POPULAR_DESTINATIONS.map((dest, i) => {
            const offset = offsetFromActive(i);
            const isCenter = offset === 0;
            const abs = Math.abs(offset);

            // Cards beyond +-2 from center are hidden entirely
            if (abs > 2) return null;

            const translateX = offset * 230;
            const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.66;
            const blur = isCenter ? 0 : abs === 1 ? 1.5 : 3;
            const opacity = isCenter ? 1 : abs === 1 ? 0.85 : 0.5;
            const zIndex = 10 - abs;

            return (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="absolute w-[260px] transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  filter: `blur(${blur}px)`,
                  opacity,
                  zIndex,
                }}
                onClick={(e) => {
                  // First click on a side card just centers it instead of navigating away
                  if (!isCenter) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  {isCenter && (
                    <div className="absolute bottom-5 left-5 right-5 text-left">
                      <div className="font-serif text-2xl font-bold text-white">{dest.name}</div>
                      <div className="text-sm text-white/70">{dest.country}</div>
                      <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#0a2540] transition-colors hover:bg-yellow-400">
                        View All →
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-2.5">
          {POPULAR_DESTINATIONS.map((dest, i) => (
            <button
              key={dest.slug}
              onClick={() => setActive(i)}
              aria-label={`Show ${dest.name}`}
              className={`h-3 rounded-full transition-all ${
                active === i ? "w-8 bg-yellow-500" : "w-3 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
