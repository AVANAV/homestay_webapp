"use client";

import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import type { Variants } from "framer-motion";

/**
 * Returns reduced (opacity-only) variants when the user prefers reduced motion.
 *
 * @example
 * const variants = useAccessibleVariants(fadeUp, fadeUpReduced);
 */
export function useAccessibleVariants<T extends Variants>(
  variants: T,
  reduced: Variants
): T {
  const prefersReduced = useReducedMotion();

  return useMemo(
    () => (prefersReduced ? (reduced as T) : variants),
    [prefersReduced, variants, reduced]
  );
}

export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}
