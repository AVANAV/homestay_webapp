import type { Room } from "@/types/room";

export const rooms: Room[] = [
  {
    id: "valley-view-suite",
    slug: "valley-view-suite",
    name: "Valley View Suite",
    shortDescription:
      "Our signature suite with wraparound glass, cedar interiors, and uninterrupted valley light from dawn to dusk.",
    description:
      "Wake to mist lifting off the valley floor from a king bed framed in local cedar. The Valley View Suite opens to a private balcony with woven seating, a wood fireplace for cool evenings, and a soaking tub oriented toward the ridgeline. Slow mornings here mean filter coffee, warm blankets, and silence broken only by distant prayer flags in the wind.",
    image: {
      src: "/images/room-photos1.webp",
      alt: "Valley View Suite with floor-to-ceiling windows overlooking Himalayan peaks",
    },
    occupancy: { adults: 2, label: "2 Guests" },
    price: {
      amount: 12500,
      currency: "INR",
      period: "night",
      label: "₹12,500 / night",
    },
    amenities: [
      "valley-view",
      "private-balcony",
      "fireplace",
      "ensuite",
      "bathtub",
      "breakfast",
      "wifi",
      "heating",
    ],
    featured: true,
  },
  {
    id: "cedar-loft",
    slug: "cedar-loft",
    name: "Cedar Loft",
    shortDescription:
      "A timber-lined loft beneath the eaves — intimate, warm, and perfectly suited to unhurried couples' retreats.",
    description:
      "Tucked under the homestay roofline, the Cedar Loft pairs exposed beams with hand-loomed textiles and a picture window trained on pine forest. A compact fireplace nook invites evening reading; the ensuite features rain shower and organic bath amenities. Ideal for guests who want privacy, altitude air, and the feeling of staying inside a carefully kept mountain cabin.",
    image: {
      src: "/images/room-photos2.webp",
      alt: "Cedar Loft bedroom with timber beams and soft natural light",
    },
    occupancy: { adults: 2, label: "2 Guests" },
    price: {
      amount: 9500,
      currency: "INR",
      period: "night",
      label: "₹9,500 / night",
    },
    amenities: [
      "mountain-view",
      "fireplace",
      "ensuite",
      "breakfast",
      "wifi",
      "heating",
      "workspace",
    ],
    featured: true,
  },
  {
    id: "pine-haven",
    slug: "pine-haven",
    name: "Pine Haven",
    shortDescription:
      "A calm garden-facing room with earthy tones, morning birdsong, and space for a small family to settle in.",
    description:
      "Pine Haven looks onto the homestay herb garden and a footpath that wanders toward the village. Two queen beds sit beneath warm linen drapes; a window seat becomes the afternoon tea corner. Thoughtful storage, gentle heating, and ensuite comforts make this room a grounded choice for families or friends traveling together without sacrificing the retreat mood.",
    image: {
      src: "/images/room-photos3.webp",
      alt: "Pine Haven room with garden outlook and warm neutral interiors",
    },
    occupancy: { adults: 4, children: 2, label: "Up to 4 Guests" },
    price: {
      amount: 11000,
      currency: "INR",
      period: "night",
      label: "₹11,000 / night",
    },
    amenities: [
      "garden-access",
      "ensuite",
      "breakfast",
      "wifi",
      "heating",
      "workspace",
      "room-service",
    ],
    featured: false,
  },
  {
    id: "mist-cottage",
    slug: "mist-cottage",
    name: "Mist Cottage",
    shortDescription:
      "Our most secluded room — soft light, slate textures, and the quiet rhythm of cloud cover through the trees.",
    description:
      "Set slightly apart from the main house, Mist Cottage feels like a private hideaway wrapped in deodar shade. Interiors lean minimal and tactile: slate floors, wool throws, and a writing desk for guests who arrive to journal or simply do nothing. The ensuite opens to a small stone patio — the right address when you want deep rest, cool air, and the sense that the mountain belongs only to you.",
    image: {
      src: "/images/room-photos4.webp",
      alt: "Mist Cottage exterior among pine trees with soft morning fog",
    },
    occupancy: { adults: 2, label: "2 Guests" },
    price: {
      amount: 8500,
      currency: "INR",
      period: "night",
      label: "₹8,500 / night",
    },
    amenities: [
      "mountain-view",
      "private-balcony",
      "ensuite",
      "breakfast",
      "wifi",
      "heating",
      "workspace",
      "garden-access",
    ],
    featured: false,
  },
];

export function getAllRooms(): Room[] {
  return rooms;
}

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id || room.slug === id);
}

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

export function getFeaturedRooms(): Room[] {
  return rooms.filter((room) => room.featured);
}
