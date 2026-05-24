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

    const rest = { ...(value as Record<string, unknown>) };
    delete rest.x;
    delete rest.y;
    delete rest.scale;
    delete rest.rotate;
    delete rest.filter;

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
