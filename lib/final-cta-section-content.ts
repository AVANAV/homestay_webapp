import { siteConfig } from "@/lib/nav-config";

export const finalCtaSectionContent = {
  overline: "Himalayan Valley · Patal Bhuvaneshwar",
  heading: "Reserve your mornings in the mountains.",
  supporting:
    "Leave the city behind. Wake to valley mist, warm bread, and a day unhurried and entirely your own. Your room in the Himalayas is waiting.",
  primaryCta: {
    label: "Reserve Your Stay",
    href: siteConfig.bookHref,
  },
  secondaryCta: {
    label: "View Location",
    href: "https://maps.app.goo.gl/ix4GSMiUATvYien79",
  },
} as const;
