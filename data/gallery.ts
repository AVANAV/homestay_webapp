import type { GalleryItem } from "@/types/gallery";

/**
 * Display order matches editorial grid composition (mobile = this sequence).
 *
 * Desktop grid (12 cols):
 * Row 1 — hero span 7 + two stacked span 5
 * Row 2 — three equal span 4
 * Row 3 — wide span 8 + portrait span 4
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    image: {
      src: "/images/gallery-1.webp",
      alt: "Morning mist rising over the Himalayan valley from the homestay terrace",
    },
    title: "Valley at first light",
    description:
      "Mist lifts slowly off the ridgeline while the first cup of chai steams beside cedar railings.",
    featured: true,
  },
  {
    id: "gallery-2",
    image: {
      src: "/images/gallery-2.webp",
      alt: "Warm cedar interior with woven textiles and soft window light",
    },
    title: "Cedar & linen",
    description:
      "Hand-loomed throws and timber walls hold the warmth long after sunset.",
  },
  {
    id: "gallery-3",
    image: {
      src: "/images/gallery-3.webp",
      alt: "Portrait view of pine forest through a homestay window",
    },
    title: "Forest stillness",
    description:
      "Deodar shadows move quietly across the floor — a meditation in green.",
  },
  {
    id: "gallery-4",
    image: {
      src: "/images/gallery-4.webp",
      alt: "Local harvest arranged on a wooden table for breakfast",
    },
    title: "Table of the valley",
    description:
      "Seasonal fruit, warm bread, and honey from nearby hives — breakfast unhurried.",
  },
  {
    id: "gallery-5",
    image: {
      src: "/images/gallery-5.webp",
      alt: "Wide view of mountain peaks at golden hour",
    },
    title: "Golden ridgeline",
    description:
      "Late sun paints the peaks copper — the hour when the valley feels endless.",
    featured: true,
  },
  {
    id: "gallery-6",
    image: {
      src: "/images/gallery-6.webp",
      alt: "Bonfire glowing on a stone patio under evening stars",
    },
    title: "Ember evenings",
    description:
      "Firelight, wool blankets, and stories traded slowly beneath a cold sky.",
  },
  {
    id: "gallery-8",
    image: {
      src: "/images/gallery-8.webp",
      alt: "Cinematic panoramic Himalayan panorama at dusk",
    },
    title: "Himalayan dusk",
    description:
      "The mountains turn indigo; silence settles like snowfall over the valley.",
    featured: true,
  },
  {
    id: "gallery-7",
    image: {
      src: "/images/gallery-7.webp",
      alt: "Stone pathway through herb garden leading to the main house",
    },
    title: "Garden path",
    description:
      "Lavender, wild mint, and mossed stone — the walk home after village market.",
  },
];

/** Controlled grid placement per item id */
export const galleryGridPlacement: Record<string, string> = {
  /* Row 1 — featured landscape + stacked pair */
  "gallery-1":
    "aspect-[4/3] md:col-span-7 md:row-span-2 md:row-start-1 md:col-start-1 md:aspect-auto md:h-full",
  "gallery-2":
    "aspect-[16/10] md:col-span-5 md:row-start-1 md:col-start-8",
  "gallery-3":
    "aspect-[16/10] md:col-span-5 md:row-start-2 md:col-start-8",
  /* Row 2 — balanced trio */
  "gallery-4":
    "aspect-[4/3] md:col-span-4 md:row-start-3 md:col-start-1",
  "gallery-5":
    "aspect-[4/3] md:col-span-4 md:row-start-3 md:col-start-5",
  "gallery-6":
    "aspect-[4/3] md:col-span-4 md:row-start-3 md:col-start-9",
  /* Row 3 — wide cinematic + portrait */
  "gallery-8":
    "aspect-[16/10] md:col-span-8 md:row-start-4 md:col-start-1",
  "gallery-7":
    "aspect-[4/5] md:col-span-4 md:row-start-4 md:col-start-9",
};

export function getAllGalleryItems(): GalleryItem[] {
  return galleryItems;
}

export function getFeaturedGalleryItems(): GalleryItem[] {
  return galleryItems.filter((item) => item.featured);
}
