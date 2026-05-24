import { siteConfig } from "@/lib/nav-config";

export const contactSectionContent = {
  overline: "Get In Touch",
  heading: "Come stay with us",
  lead: "Reach us directly on WhatsApp for the fastest response — we are a small homestay and every booking is a personal conversation.",
  whatsapp: {
    label: "Chat on WhatsApp",
    number: "+91 70885 43104",
    href: siteConfig.bookHref,
  },
  phone: {
    label: "Phone",
    number: "+91 84496 73017",
    href: "tel:+918449673017",
  },
  email: {
    label: "Email",
    address: "stay@veerahomestay.com",
    href: "mailto:stay@veerahomestay.com",
  },
  address: {
    line1: "M3QR+8H3, Patal Bhuvaneshwar",
    line2: "Uttarakhand 262522, India",
  },
  mapsHref: "https://maps.app.goo.gl/ix4GSMiUATvYien79",
  bookingNote:
    "We typically respond within a few hours. Availability is limited — early enquiry is recommended.",
} as const;
