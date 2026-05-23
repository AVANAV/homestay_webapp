export { ease, type EasePreset } from "@/lib/motion/easing";
export {
  duration,
  transition,
  type TransitionPreset,
} from "@/lib/motion/transitions";
export { viewport, type ViewportPreset } from "@/lib/motion/viewport";
export { toReducedVariants } from "@/lib/motion/reduced-motion";
export {
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
  tapScale,
  motionVariants,
  type MotionVariantName,
} from "@/lib/motion/variants";
export {
  useAccessibleVariants,
  usePrefersReducedMotion,
} from "@/lib/motion/hooks";
export { MotionProvider } from "@/lib/motion/provider";
