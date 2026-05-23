import { ease } from "@/lib/motion/easing";

/** Durations tuned for mobile — short enough to feel responsive */
export const duration = {
  instant: 0.12,
  fast: 0.32,
  base: 0.52,
  slow: 0.72,
  cinematic: 0.95,
  stagger: 0.48,
} as const;

export const transition = {
  /** Standard content reveal */
  enter: {
    duration: duration.base,
    ease: ease.luxury,
  },
  /** Hero & feature moments */
  cinematic: {
    duration: duration.cinematic,
    ease: ease.luxury,
  },
  /** Quick opacity-only or reduced-motion */
  fade: {
    duration: duration.fast,
    ease: ease.soft,
  },
  /** Exit / unmount */
  exit: {
    duration: duration.fast,
    ease: ease.out,
  },
  /** Staggered list children */
  stagger: {
    duration: duration.stagger,
    ease: ease.out,
  },
  /** Accessible fallback — near-instant */
  reduced: {
    duration: duration.instant,
    ease: ease.soft,
  },
  /** Subtle touch feedback (scale only) */
  tap: {
    duration: duration.instant,
    ease: ease.snap,
  },
} as const;

export type TransitionPreset = keyof typeof transition;
