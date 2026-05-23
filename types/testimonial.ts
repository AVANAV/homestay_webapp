export type TestimonialRating = 1 | 2 | 3 | 4 | 5;

export type Testimonial = {
  id: string;
  /** Guest's display name */
  name: string;
  /** Origin city shown under the name */
  city: string;
  /** Which room or stay type they experienced */
  stayLabel: string;
  /** Month and year of stay, e.g. "February 2025" */
  stayDate: string;
  /** Full testimonial quote — no surrounding quotation marks in the data */
  quote: string;
  rating: TestimonialRating;
};
