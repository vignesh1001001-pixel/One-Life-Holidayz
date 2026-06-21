"use client";

import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/lib/destinations";

export default function DestinationCard({ name, sub, price, img, slug }: Destination) {
  return (
    <Link
      href={`/destinations/${slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
    >
      <Image
        src={img}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        // If a local image is missing, fall back to a neutral placeholder instead of breaking the layout.
        onError={(e) => {
          e.currentTarget.src = "/images/destinations/placeholder.jpg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="font-serif text-[1.1rem] font-bold text-white">{name}</div>
        <div className="mt-0.5 text-[0.75rem] text-white/70">{sub}</div>
        <div className="mt-1 font-serif text-base text-yellow-400">Starts {price}</div>
      </div>
    </Link>
  );
}
