"use client";

import { HashScrollOnMount } from "@/components/hash-scroll-on-mount";
import { MotionProvider } from "@/components/ui/motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <HashScrollOnMount />
      {children}
    </MotionProvider>
  );
}
