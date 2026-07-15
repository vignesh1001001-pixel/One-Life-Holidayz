"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useRef, useLayoutEffect } from "react";
import {
  Star,
  Clock,
  MapPin,
  Tag,
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";
import { TRIP_PACKAGES, DOMESTIC_DESTINATIONS } from "@/lib/explore-data";
import PageHero from "@/components/PageHero";

const ACTIVITIES   = ["Beach", "Trekking", "Camping", "Cultural", "Adventure"];
const TRIP_TYPES   = ["Domestic", "International"];

// ── Duration & Budget bounds (per latest requirements) ──────────
const MIN_DAYS  = 2;
const MAX_DAYS  = 15;
const MAX_PRICE = 60000;

// ────────────────────────────────────────────────────────────────
// SCROLL-JUMP FIX NOTES
//
// Root cause: clicking a restrictive filter shrinks the results
// grid, which shrinks total page height. If your scroll position
// was deep into the old (taller) page, the browser clamps it down
// to the new max scrollable offset — which can land you on the
// footer. Native scroll anchoring helps here, so it's left ON
// (no `overflowAnchor: "none"` anywhere in this file).
//
// Three additional layers, in order of how much they actually do:
//
// 1. MEASURED min-height (the real fix): the results grid wrapper
//    tracks the tallest it has ever rendered in this session
//    (`minGridHeight` state, updated via ResizeObserver-less
//    useLayoutEffect measurement) and never renders shorter than
//    that. In the common case the full unfiltered list is the
//    tallest state, so once it's measured on mount, filtering down
//    to fewer cards can't shrink the page at all — nothing to
//    clamp against. The old fixed `calc(100vh-160px)` guess is kept
//    only as an initial floor before any measurement exists.
//
// 2. useLayoutEffect fallback: if scroll position would still end
//    up past the new max (edge cases the measured floor doesn't
//    cover), we scroll the filters/results row back into view
//    ourselves — explicitly with `behavior: "smooth"` now, so this
//    reads as an intentional scroll, not a teleport. (Previously
//    this had no `behavior`, so it just replaced a jump-to-footer
//    with an instant jump-to-top-of-results — still a visible jump.)
//
// 3. `scroll-smooth` on the mobile drawer's internal scroll
//    container (the only place that actually scrolls independently)
//    stays as-is. The `scroll-smooth` that was on <main> has been
//    removed — it did nothing, since <main> isn't the scrolling
//    element (the document is), so it was giving false confidence
//    that "a safety net" existed for window scrolling. Real
//    window-level smoothing now happens via the explicit `behavior:
//    "smooth"` in the fallback above instead.
//
// Combined with (unchanged, already correct):
//   - accordions animating height via grid-template-rows instead of
//     mount/unmount (removes a separate class of layout-shift jump)
//   - blurring the clicked element (via a synchronously-captured
//     DOM reference, not the event object) after click, so no
//     native "scroll focused element into view" behavior fires
// ────────────────────────────────────────────────────────────────

function blurOnClick<T extends HTMLElement>(
  handler: () => void
): (e: React.MouseEvent<T>) => void {
  return (e) => {
    // Capture the actual DOM node now, synchronously, while the
    // click event is still dispatching.
    const el = e.currentTarget;
    handler();
    requestAnimationFrame(() => el.blur());
  };
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={blurOnClick(onClick)}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
        active
          ? "border-yellow-500 bg-yellow-500 text-black"
          : "border-slate-200 bg-white text-slate-600 hover:border-yellow-400 hover:text-slate-900"
      }`}
    >
      {label}
    </button>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-100 py-4 last:border-0">
      <button
        type="button"
        onClick={blurOnClick(onToggle)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {/*
        Grid-rows animation trick: instead of mounting/unmounting
        the content (which snaps the layout instantly and can yank
        page scroll if it's near the viewport edge), we always keep
        the content mounted and animate its available height via
        `grid-template-rows`. This transitions smoothly no matter
        where on the page it happens.
      */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

// All the props SidebarContent needs, lifted up since it now lives
// outside PackagesPage and can't close over its state directly.
interface SidebarContentProps {
  activeFilterCount: number;
  clearAll: () => void;
  setSidebarOpen: (v: boolean) => void;
  search: string;
  setSearch: (v: string) => void;
  DESTINATIONS: string[];
  destination: string;
  setDestination: (v: string) => void;
  priceOpen: boolean;
  setPriceOpen: (v: boolean) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  durationOpen: boolean;
  setDurationOpen: (v: boolean) => void;
  maxDays: number;
  setMaxDays: (v: number) => void;
  activityOpen: boolean;
  setActivityOpen: (v: boolean) => void;
  selectedActivity: string[];
  setSelectedActivity: (v: string[]) => void;
  tripTypeOpen: boolean;
  setTripTypeOpen: (v: boolean) => void;
  selectedTripType: string[];
  setSelectedTripType: (v: string[]) => void;
}

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
}

function SidebarContent({
  activeFilterCount,
  clearAll,
  setSidebarOpen,
  search,
  setSearch,
  DESTINATIONS,
  destination,
  setDestination,
  priceOpen,
  setPriceOpen,
  maxPrice,
  setMaxPrice,
  durationOpen,
  setDurationOpen,
  maxDays,
  setMaxDays,
  activityOpen,
  setActivityOpen,
  selectedActivity,
  setSelectedActivity,
  tripTypeOpen,
  setTripTypeOpen,
  selectedTripType,
  setSelectedTripType,
}: SidebarContentProps) {
  return (
    <>
      {/* Drag handle — mobile only */}
      <div className="flex justify-center pb-2 pt-3 lg:hidden">
        <div className="h-1 w-10 rounded-full bg-slate-200" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-slate-900">Filters</h3>
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black">
              {activeFilterCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={blurOnClick(clearAll)}
              className="text-xs font-medium text-yellow-600 hover:underline"
            >
              Clear all
            </button>
          )}
          <button
            type="button"
            onClick={blurOnClick(() => setSidebarOpen(false))}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/*
        Height cap + overflow-y-auto now ONLY apply below the lg
        breakpoint (mobile bottom-sheet). On desktop (lg and up) the
        sidebar is not height-constrained at all, so there's nothing
        to scroll — the page itself scrolls normally.

        `scroll-smooth` here is legitimate: this div actually IS the
        scrolling container on mobile (overflow-y-auto), so smooth
        scroll-behavior applies to it correctly.
      */}
      <div className="max-h-[calc(88vh-80px)] overflow-y-auto overscroll-contain scroll-smooth px-5 pb-16 lg:max-h-none lg:overflow-visible lg:pb-6">
        {/* Search */}
        <div className="border-b border-slate-100 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search packages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-8 text-sm placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100"
            />
            {search && (
              <button
                type="button"
                onClick={blurOnClick(() => setSearch(""))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Destination */}
        <div className="border-b border-slate-100 py-4">
          <p className="mb-3 text-sm font-semibold text-slate-800">Destination</p>
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1 [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible lg:whitespace-normal lg:pb-0">
            {DESTINATIONS.map((d) => (
              <div key={d} className="shrink-0 lg:shrink">
                <Chip
                  label={d}
                  active={destination === d}
                  onClick={() => setDestination(d)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Max Budget */}
        <Accordion
          title="Max Budget"
          open={priceOpen}
          onToggle={() => setPriceOpen(!priceOpen)}
        >
          <input
            type="range"
            min="0"
            max={MAX_PRICE}
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full cursor-pointer accent-yellow-500"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>₹0</span>
            <span>₹{MAX_PRICE.toLocaleString("en-IN")}</span>
          </div>
          <div className="mt-2 text-center">
            <span className="inline-block rounded-full bg-yellow-50 px-4 py-1.5 text-xs font-bold text-yellow-600 ring-1 ring-yellow-200">
              Up to ₹{maxPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </Accordion>

        {/* Duration */}
        <Accordion
          title="Duration"
          open={durationOpen}
          onToggle={() => setDurationOpen(!durationOpen)}
        >
          <input
            type="range"
            min={MIN_DAYS}
            max={MAX_DAYS}
            step="1"
            value={maxDays}
            onChange={(e) => setMaxDays(Number(e.target.value))}
            className="w-full cursor-pointer accent-yellow-500"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>{MIN_DAYS} Days</span>
            <span>{MAX_DAYS} Days</span>
          </div>
          <div className="mt-2 text-center">
            <span className="inline-block rounded-full bg-yellow-50 px-4 py-1.5 text-xs font-bold text-yellow-600 ring-1 ring-yellow-200">
              Up to {maxDays} Days
            </span>
          </div>
        </Accordion>

        {/* Activity */}
        <Accordion
          title="Activity Type"
          open={activityOpen}
          onToggle={() => setActivityOpen(!activityOpen)}
        >
          <div className="flex flex-wrap gap-2">
            {ACTIVITIES.map((a) => (
              <Chip
                key={a}
                label={a}
                active={selectedActivity.includes(a)}
                onClick={() => setSelectedActivity(toggle(selectedActivity, a))}
              />
            ))}
          </div>
        </Accordion>

        {/* Trip Type */}
        <Accordion
          title="Trip Type"
          open={tripTypeOpen}
          onToggle={() => setTripTypeOpen(!tripTypeOpen)}
        >
          <div className="flex flex-wrap gap-2">
            {TRIP_TYPES.map((t) => (
              <Chip
                key={t}
                label={t}
                active={selectedTripType.includes(t)}
                onClick={() => setSelectedTripType(toggle(selectedTripType, t))}
              />
            ))}
          </div>
        </Accordion>
      </div>
    </>
  );
}

export default function PackagesPage() {
  const [search, setSearch]                     = useState("");
  const [destination, setDestination]           = useState("All");
  const [maxPrice, setMaxPrice]                 = useState(MAX_PRICE);
  const [maxDays, setMaxDays]                   = useState(MAX_DAYS);
  const [selectedActivity, setSelectedActivity] = useState<string[]>([]);
  const [selectedTripType, setSelectedTripType] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen]           = useState(false);
  const [priceOpen, setPriceOpen]               = useState(true);
  const [durationOpen, setDurationOpen]         = useState(true);
  const [activityOpen, setActivityOpen]         = useState(true);
  const [tripTypeOpen, setTripTypeOpen]         = useState(true);

  // Anchors the top of the filters/results row. Used only as a
  // last-resort target if scroll position would otherwise get
  // clamped by the browser when the page shrinks.
  const resultsRowRef = useRef<HTMLDivElement>(null);

  // Measures the results grid and remembers the TALLEST it has ever
  // rendered in this session. The grid is never allowed to render
  // shorter than that, so page height is effectively monotonically
  // non-decreasing — filtering down to fewer cards can't shrink the
  // page and trigger a scroll clamp in the first place. This is the
  // real fix; the useLayoutEffect fallback below is just insurance
  // for edge cases (e.g. window resize) this doesn't catch.
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const [minGridHeight, setMinGridHeight] = useState(0);

  const DESTINATIONS = useMemo(() => {
    const names = new Set<string>();
    DOMESTIC_DESTINATIONS.forEach((d) => names.add(d.name));
    TRIP_PACKAGES.forEach((p) => names.add(p.destination.split(",")[0].trim()));
    return ["All", ...Array.from(names).sort()];
  }, []);

  const activeFilterCount = useMemo(() => {
    let n = 0;
    if (destination !== "All") n++;
    if (maxPrice < MAX_PRICE) n++;
    if (maxDays < MAX_DAYS) n++;
    n += selectedActivity.length + selectedTripType.length;
    return n;
  }, [destination, maxPrice, maxDays, selectedActivity, selectedTripType]);

  const filtered = useMemo(() =>
    TRIP_PACKAGES.filter((pkg) => {
      if (search && !pkg.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (destination !== "All" && !pkg.destination.includes(destination)) return false;
      if (pkg.price > maxPrice) return false;

      const days = parseInt(pkg.duration.match(/\d+/)?.[0] ?? "0", 10);
      if (days < MIN_DAYS) return false;
      if (maxDays < MAX_DAYS && days > maxDays) return false;

      if (selectedActivity.length) {
        if (!selectedActivity.some((a) =>
          pkg.highlights.some((h) => h.toLowerCase().includes(a.toLowerCase()))
        )) return false;
      }
      if (selectedTripType.length) {
        const isDomestic = ["india", "kerala", "kashmir", "goa", "rajasthan", "manali"].some(
          (d) => pkg.destination.toLowerCase().includes(d)
        );
        if (
          !(selectedTripType.includes("Domestic") && isDomestic) &&
          !(selectedTripType.includes("International") && !isDomestic)
        ) return false;
      }
      return true;
    }),
    [search, destination, maxPrice, maxDays, selectedActivity, selectedTripType]
  );

  const clearAll = () => {
    setSearch("");
    setDestination("All");
    setMaxPrice(MAX_PRICE);
    setMaxDays(MAX_DAYS);
    setSelectedActivity([]);
    setSelectedTripType([]);
  };

  // Track the tallest the grid has ever been, so it never renders
  // shorter than that going forward (see comment above).
  useLayoutEffect(() => {
    const el = gridWrapperRef.current;
    if (!el) return;
    const height = el.scrollHeight;
    setMinGridHeight((prev) => Math.max(prev, height));
  }, [filtered.length]);

  // Fallback safety net: if scroll position would still end up past
  // the new max scrollable offset (e.g. right after a browser
  // resize, before minGridHeight has caught up), scroll the
  // filters/results row back into view — smoothly, so it reads as
  // an intentional scroll rather than a teleport.
  useLayoutEffect(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > maxScroll) {
      resultsRowRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [filtered.length]);

  const sidebarProps: SidebarContentProps = {
    activeFilterCount,
    clearAll,
    setSidebarOpen,
    search,
    setSearch,
    DESTINATIONS,
    destination,
    setDestination,
    priceOpen,
    setPriceOpen,
    maxPrice,
    setMaxPrice,
    durationOpen,
    setDurationOpen,
    maxDays,
    setMaxDays,
    activityOpen,
    setActivityOpen,
    selectedActivity,
    setSelectedActivity,
    tripTypeOpen,
    setTripTypeOpen,
    selectedTripType,
    setSelectedTripType,
  };

  return (
    <main>
      <PageHero
        eyebrow="Our Packages"
        title="Pick a package. Start your "
        highlight="journey."
        subtitle=""
        gradient="linear-gradient(135deg, #0a1628 0%, #1e3a6e 100%)"
      />

      <section className="min-h-screen bg-slate-50 px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "package" : "packages"}
            </p>
            <button
              type="button"
              onClick={blurOnClick(() => setSidebarOpen(true))}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-yellow-400 lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-6" ref={resultsRowRef}>

            {/*
              Desktop Sidebar — no internal scroll, grows naturally.
              NOTE: no `overflowAnchor: none` here. Leaving scroll
              anchoring on is what stops the page from clamping to
              the footer when the results grid shrinks.
            */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <SidebarContent {...sidebarProps} />
              </div>
            </aside>

            {/* Mobile Drawer — fixed bottom sheet, internal scroll only here */}
            {sidebarOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setSidebarOpen(false)}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white shadow-2xl"
                  style={{ maxHeight: "88vh" }}
                >
                  <SidebarContent {...sidebarProps} />
                </div>
              </div>
            )}

            {/* Package Grid */}
            <div className="min-w-0 flex-1">
              {/*
                minHeight is the larger of: a viewport-relative floor
                (before any measurement exists) or the tallest this
                grid has actually rendered this session
                (minGridHeight). Since the full unfiltered list is
                normally the tallest state and gets measured on
                mount, filtering down to fewer cards typically can't
                shrink the page at all — there's nothing for the
                browser to clamp scroll against. Native scroll
                anchoring (left at default — no `overflowAnchor:
                none` override) handles any remaining edge cases.
              */}
              <div
                ref={gridWrapperRef}
                className="min-h-[calc(100vh-160px)]"
                style={minGridHeight ? { minHeight: `${minGridHeight}px` } : undefined}
              >
                {filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-24 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                      <Search className="h-7 w-7 text-slate-300" />
                    </div>
                    <p className="text-base font-semibold text-slate-700">No packages found</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Try adjusting or clearing your filters
                    </p>
                    <button
                      type="button"
                      onClick={blurOnClick(clearAll)}
                      className="mt-6 rounded-full bg-yellow-500 px-6 py-2.5 text-sm font-bold text-black hover:bg-yellow-400"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={pkg.img}
                            alt={pkg.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          {pkg.badge && (
                            <span className="absolute left-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-[0.65rem] font-bold text-black shadow-md">
                              {pkg.badge}
                            </span>
                          )}
                          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold text-white drop-shadow">
                            <MapPin className="h-3 w-3 text-yellow-400" />
                            {pkg.destination}
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-4 bg-[#EAF5EA]">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-serif text-[1rem] font-bold leading-snug text-slate-900">
                              {pkg.name}
                            </h3>
                            <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[0.7rem]">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="font-bold text-slate-800">{pkg.rating}</span>
                              <span className="text-slate-400">({pkg.reviews})</span>
                            </div>
                          </div>

                          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                            <Clock className="h-3 w-3 text-yellow-500" />
                            {pkg.duration}
                          </div>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {pkg.highlights.slice(0, 3).map((h) => (
                              <span
                                key={h}
                                className="rounded-full bg-white px-2.5 py-1 text-[0.65rem] font-medium text-slate-500 ring-1 ring-slate-100"
                              >
                                {h}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                            <div>
                              <p className="text-[0.65rem] text-slate-400">Starting from</p>
                              <p className="font-serif text-xl font-bold text-slate-900">
                                ₹{pkg.price.toLocaleString("en-IN")}
                              </p>
                              <p className="text-[0.65rem] text-slate-400">per person</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <Link
                                href="/contact"
                                className="rounded-full bg-yellow-500 px-5 py-2 text-center text-xs font-bold text-black transition hover:bg-yellow-400"
                              >
                                Book Now
                              </Link>
                              <Link
                                href="/contact"
                                className="flex items-center justify-center gap-1.5 rounded-full border border-slate-300 px-5 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50"
                              >
                                <Phone className="h-3 w-3" />
                                Enquire
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-500">
            Can't find what you're looking for?
          </p>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Build a <em className="text-yellow-400">Custom Trip</em>
          </h2>
          <p className="mx-auto mt-4 text-sm leading-relaxed text-white/60">
            Tell us your dates, budget, and dream destination — we'll craft a
            perfect itinerary just for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3.5 text-sm font-bold text-black shadow-lg transition hover:bg-yellow-400"
            >
              <Tag className="h-4 w-4" />
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}