/**
 * Framer Motion design tokens & variants for Mountain Homestay.
 *
 * @example
 * import { motion } from "framer-motion";
 * import { fadeUp, fadeUpReduced, viewport, useAccessibleVariants } from "@/components/ui/motion";
 *
 * function Block() {
 *   const variants = useAccessibleVariants(fadeUp, fadeUpReduced);
 *   return (
 *     <motion.div
 *       initial="hidden"
 *       whileInView="visible"
 *       viewport={viewport.default}
 *       variants={variants}
 *     />
 *   );
 * }
 */
export {
  ease,
  duration,
  transition,
  viewport,
  toReducedVariants,
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
  useAccessibleVariants,
  usePrefersReducedMotion,
  MotionProvider,
  type EasePreset,
  type TransitionPreset,
  type ViewportPreset,
  type MotionVariantName,
} from "@/lib/motion";
