/**
 * Mountain Homestay design system — programmatic reference.
 * Source of truth for colors & type lives in `app/globals.css` and `app/design-system.css`.
 */

export const fonts = {
  /** Cormorant Garamond — editorial serif for headlines & display type */
  heading: "Cormorant Garamond",
  /** DM Sans — warm, modern sans for UI and body copy */
  body: "DM Sans",
} as const;

export const colors = {
  primary: {
    DEFAULT: "pine-700",
    foreground: "parchment",
    description: "Deep forest pine — trust, nature, authority",
  },
  background: {
    DEFAULT: "parchment",
    elevated: "oat",
    surface: "linen",
    cinematic: "night",
    description: "Warm neutrals by day; deep pine-black for hero sections",
  },
  text: {
    DEFAULT: "ink",
    muted: "stone",
    subtle: "mist",
    onDark: "parchment",
    description: "Warm charcoal hierarchy, never pure black",
  },
  accent: {
    DEFAULT: "copper",
    light: "copper-light",
    muted: "copper-muted",
    warm: "ember",
    natural: "sage",
    description: "Burnished copper & ember for CTAs; sage for soft highlights",
  },
} as const;

export const typography = {
  display: "text-display font-display",
  h1: "text-h1 font-display",
  h2: "text-h2 font-display",
  h3: "text-h3 font-display",
  h4: "text-h4 font-display",
  lead: "text-lead",
  body: "text-body",
  small: "text-small",
  caption: "text-caption uppercase",
  overline: "text-overline uppercase tracking-widest",
} as const;

export const container = {
  default: "max-w-homestay",
  cinema: "max-w-cinema",
  prose: "max-w-prose",
  narrow: "max-w-container-2xl",
} as const;

export const section = {
  default: "py-section",
  hero: "py-section-lg",
  compact: "py-section-compact",
  backgrounds: {
    default: "bg-background",
    muted: "bg-secondary",
    elevated: "bg-card",
    dark: "bg-night text-parchment",
    transparent: "bg-transparent",
  },
} as const;

export const spacing = {
  gutter: "px-gutter",
  section: "py-section px-gutter",
  sectionLg: "py-section-lg px-gutter",
  stack: "gap-stack",
  stackSm: "gap-stack-sm",
  stackMd: "gap-stack-md",
  stackLg: "gap-stack-lg",
  philosophy:
    "Generous vertical rhythm, clamp-based gutters, 65ch prose width on large screens",
} as const;
