export type ExperienceImage = {
  src: string;
  alt: string;
};

export type ExperienceIconKey = "sunrise" | "food";

export type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  image: ExperienceImage;
  /** Short label shown on the card */
  category?: string;
  icon: ExperienceIconKey;
};
