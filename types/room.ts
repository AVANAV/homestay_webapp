/** Canonical amenity keys — use labels from `amenityLabels` for display */
export const amenityKeys = [
  "valley-view",
  "private-balcony",
  "fireplace",
  "ensuite",
  "heating",
  "breakfast",
  "wifi",
  "workspace",
  "garden-access",
  "mountain-view",
  "bathtub",
  "room-service",
] as const;

export type AmenityKey = (typeof amenityKeys)[number];

export type RoomOccupancy = {
  adults: number;
  children?: number;
  /** Mobile-friendly label, e.g. "2 Guests" */
  label: string;
};

export type RoomPrice = {
  amount: number;
  currency: "INR";
  period: "night";
  /** Formatted for UI, e.g. "₹12,500 / night" */
  label: string;
};

export type RoomImage = {
  src: string;
  alt: string;
};

export type Room = {
  id: string;
  /** URL-safe identifier for detail pages */
  slug: string;
  name: string;
  /** Full description for detail views */
  description: string;
  /** Shorter copy for cards and mobile listings */
  shortDescription: string;
  image: RoomImage;
  occupancy: RoomOccupancy;
  price: RoomPrice;
  amenities: AmenityKey[];
  featured: boolean;
};
