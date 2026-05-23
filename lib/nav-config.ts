export const navItems = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const siteConfig = {
  name: "Mountain Homestay",
  tagline: "Valley Retreat",
  bookHref: "/contact#book",
} as const;

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917088543104";

const whatsappMessage = encodeURIComponent(
  "Hello, I'd like to inquire about a stay at Mountain Homestay.",
);

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
