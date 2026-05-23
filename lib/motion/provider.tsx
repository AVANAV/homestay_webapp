"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

type MotionProviderProps = {
  children: ReactNode;
};

/**
 * Wrap the app (or a layout segment) to respect system reduced-motion
 * and keep transitions consistent site-wide.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: "tween",
      }}
    >
      {children}
    </MotionConfig>
  );
}
