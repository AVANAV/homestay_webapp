export const navItems = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const siteConfig = {
  name: "Veera Homestay",
  tagline: "Patal Bhuvaneshwar",
  bookHref:
    "https://wa.me/917088543104?text=Hello%20Veera%20Homestay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay.",
} as const;

export const whatsappHref = siteConfig.bookHref;
