import type { Transition, Variants } from "framer-motion";

import { transition } from "@/lib/motion/transitions";

/** Strip transforms; keep opacity-only motion for prefers-reduced-motion */
export function toReducedVariants(variants: Variants): Variants {
  const reduced: Variants = {};

  for (const [key, value] of Object.entries(variants)) {
    if (typeof value !== "object" || value === null) {
      reduced[key] = value;
      continue;
    }

    const {
      x: _x,
      y: _y,
      scale: _scale,
      rotate: _rotate,
      filter: _filter,
      ...rest
    } = value as Record<string, unknown>;

    reduced[key] = {
      ...rest,
      transition: {
        ...(typeof rest.transition === "object" && rest.transition !== null
          ? rest.transition
          : {}),
        ...transition.reduced,
      } as Transition,
    };
  }

  return reduced;
}
