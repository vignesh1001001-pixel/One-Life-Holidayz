import Image from "next/image";
import PageHero from "@/components/PageHero";

const galleryImages = [
  { src: "/images/gallery/01.jpeg", alt: "Travel Memory 1",  span: "col-span-2 row-span-2 md:col-span-1 md:row-span-2" },
  { src: "/images/gallery/02.jpeg", alt: "Travel Memory 2",  span: "col-span-1 row-span-1" },
  { src: "/images/gallery/03.jpeg", alt: "Travel Memory 3",  span: "col-span-1 row-span-1" },
  { src: "/images/gallery/04.jpeg", alt: "Travel Memory 4",  span: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Memories"
        title="Every frame tells a story"
        highlight="story"
        subtitle=""
        gradient="linear-gradient(135deg, #0a1628 0%, #1a3a78 100%)"
      />

      <section className="bg-white px-4 py-16 sm:px-6 md:px-[5%] md:py-20">
        <div className="mx-auto max-w-6xl">

          {/* Section heading */}
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-blue-500 sm:text-[0.75rem]">
              Through the Lens
            </p>
            <h2 className="font-serif text-3xl font-black text-gray-900 sm:text-4xl">
              Travel Gallery
            </h2>
            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Snapshots from the journeys we&apos;ve had the privilege of crafting
            </p>
          </div>

          {/* Mobile: simple 2-col grid */}
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md ${
                  i === 0 ? "col-span-2 h-56" : "h-40"
                }`}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #1a3a78 0%, #0a1628 100%)" }}
                />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />
              </div>
            ))}
          </div>

          {/* Tablet: 2-col masonry */}
          <div className="hidden grid-cols-2 gap-4 sm:grid md:hidden">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md ${
                  i % 3 === 0 ? "h-64" : "h-48"
                }`}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #1a3a78 0%, #0a1628 100%)" }}
                />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />
              </div>
            ))}
          </div>

          {/* Desktop: masonry-style spanning grid */}
          <div className="hidden auto-rows-[200px] grid-cols-3 gap-5 md:grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`${img.span} group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md`}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #1a3a78 0%, #0a1628 100%)" }}
                />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />
              </div>
            ))}
          </div>

          {/* Load more button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-blue-500 px-8 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white">
              Load More Photos
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}