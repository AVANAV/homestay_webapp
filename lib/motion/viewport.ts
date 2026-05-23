import type { UseInViewOptions } from "framer-motion";

/**
 * Viewport triggers for scroll reveals.
 * `once: true` avoids re-animating on scroll-back (better for mobile perf).
 */
export const viewport = {
  /** Default section reveals */
  default: {
    once: true,
    amount: 0.2,
    margin: "0px 0px -8% 0px",
  },
  /** Hero / above-the-fold — fire earlier */
  hero: {
    once: true,
    amount: 0.15,
    margin: "0px 0px 0px 0px",
  },
  /** Dense grids — smaller intersection threshold */
  compact: {
    once: true,
    amount: 0.12,
    margin: "0px 0px -5% 0px",
  },
  /** Full visibility before animating (galleries) */
  full: {
    once: true,
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  },
} as const satisfies Record<string, UseInViewOptions>;

export type ViewportPreset = keyof typeof viewport;
