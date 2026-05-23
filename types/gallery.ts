export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryItem = {
  id: string;
  image: GalleryImage;
  title: string;
  description: string;
  featured?: boolean;
};
