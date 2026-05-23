import type { Variants } from "framer-motion";

import { transition } from "@/lib/motion/transitions";
import { toReducedVariants } from "@/lib/motion/reduced-motion";

/** GPU-friendly: opacity + transform (translate/scale) only */
const GPU = "transform" as const;

const hidden = {
  opacity: 0,
  willChange: GPU,
} as const;

/* —— fadeUp —— */
export const fadeUp: Variants = {
  hidden: { ...hidden, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    willChange: GPU,
    transition: transition.enter,
  },
};
export const fadeUpReduced = toReducedVariants(fadeUp);

/* —— fadeIn —— */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.fade,
  },
};
export const fadeInReduced = toReducedVariants(fadeIn);

/* —— scaleIn —— */
export const scaleIn: Variants = {
  hidden: { ...hidden, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    willChange: GPU,
    transition: transition.enter,
  },
};
export const scaleInReduced = toReducedVariants(scaleIn);

/* —— slideUp —— */
export const slideUp: Variants = {
  hidden: { ...hidden, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    willChange: GPU,
    transition: transition.cinematic,
  },
};
export const slideUpReduced = toReducedVariants(slideUp);

/* —— heroReveal —— */
export const heroReveal: Variants = {
  hidden: { ...hidden, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    willChange: GPU,
    transition: transition.cinematic,
  },
};
export const heroRevealReduced = toReducedVariants(heroReveal);

/* —— stagger —— */
/** Parent orchestrates children only — avoid opacity:0 on container (hides all children) */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.14,
    },
  },
};
export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { ...hidden, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    willChange: GPU,
    transition: transition.stagger,
  },
};
export const staggerItemReduced = toReducedVariants(staggerItem);

/** Subtle press feedback — touch-first, no layout shift */
export const tapScale = {
  scale: 0.98,
  transition: transition.tap,
} as const;

/** Registry for programmatic lookup */
export const motionVariants = {
  fadeUp,
  fadeUpReduced,
  fadeIn,
  fadeInReduced,
  scaleIn,
  scaleInReduced,
  slideUp,
  slideUpReduced,
  heroReveal,
  heroRevealReduced,
  staggerContainer,
  staggerContainerReduced,
  staggerItem,
  staggerItemReduced,
} as const;

export type MotionVariantName = keyof typeof motionVariants;
