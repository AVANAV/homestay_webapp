import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    city: "Delhi",
    stayLabel: "Valley View Suite",
    stayDate: "March 2025",
    quote:
      "I came to the mountains looking for quiet, and found something deeper — the kind of stillness that settles into your bones. Mornings here begin with mist over the valley and a cup of tea that tastes like it belongs to the altitude. The hosts treated us not as guests, but as people they had been expecting. We left rested in a way sleep alone cannot explain.",
    rating: 5,
  },
  {
    id: "rohan-mehra",
    name: "Rohan Mehra",
    city: "Bengaluru",
    stayLabel: "Cedar Loft",
    stayDate: "January 2025",
    quote:
      "Waking to a sunrise that turns the ridgeline copper — I did not expect that to become the most memorable moment of the year. The Cedar Loft is warm in every sense of the word: the timber, the fireplace, the food, the people. Breakfast alone is worth the drive up. Three days felt like a full exhale after months of noise.",
    rating: 5,
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    city: "Mumbai",
    stayLabel: "Mist Cottage",
    stayDate: "April 2025",
    quote:
      "The Mist Cottage sat apart from everything — deodar shade, stone underfoot, and a silence so complete I had to listen for it. Dinner was slow and honest: local produce, careful cooking, conversation that needed no effort. We watched clouds move through the valley from the patio for an entire evening and felt no urge to be anywhere else.",
    rating: 5,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
