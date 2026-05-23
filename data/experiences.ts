import type { ExperienceItem } from "@/types/experience";

export const experienceItems: ExperienceItem[] = [
  {
    id: "experience-sunrise",
    icon: "sunrise",
    category: "First light",
    title: "Sunrise Mountain Views",
    description:
      "Tea on the terrace while ridgelines blush gold — the valley still, the air cold, the day beginning in silence.",
    image: {
      src: "/images/experience-sunrise.webp",
      alt: "Golden sunrise over Himalayan peaks seen from the homestay terrace",
    },
  },
  {
    id: "experience-food",
    icon: "food",
    category: "Valley table",
    title: "Authentic Himalayan Food",
    description:
      "Seasonal harvest, warm bread, and recipes from the village — meals slow, generous, and deeply local.",
    image: {
      src: "/images/experience-food.webp",
      alt: "Himalayan homestay meal with local fruit, bread, and honey on a wooden table",
    },
  },
];

export function getAllExperiences(): ExperienceItem[] {
  return experienceItems;
}
