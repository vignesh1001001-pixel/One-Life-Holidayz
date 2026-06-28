import Image from "next/image";
import PageHero from "@/components/PageHero";


const galleryImages = [
  { src: "/images/gallery/01.jpeg", alt: "Travel Memory 1", span: "col-span-1 row-span-2" },
  { src: "/images/gallery/02.jpeg", alt: "Travel Memory 2", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/03.jpeg", alt: "Travel Memory 3", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/04.jpeg", alt: "Travel Memory 4", span: "col-span-2 row-span-1" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Memories"
        title="Moments That Last"
        highlight="Last"
        subtitle="Every photo tells a story — real trips, real people, real joy."
        gradient="linear-gradient(135deg, #0a1628 0%, #1a3a78 100%)"
      />

      <section className="bg-white px-[5%] py-20">
        <div className="mx-auto max-w-6xl">

          {/* Section heading */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-blue-500">
              Through the Lens
            </p>
            <h2 className="font-serif text-[2.2rem] font-black text-gray-900">
              Travel Gallery
            </h2>
            <p className="mt-3 text-[0.95rem] text-gray-500">
              Snapshots from the journeys we've had the privilege of crafting
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid auto-rows-[220px] grid-cols-3 gap-4 md:gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`${img.span} group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md`}
              >
                {/* Fallback gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, #1a3a78 0%, #0a1628 100%)`,
                  }}
                />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}