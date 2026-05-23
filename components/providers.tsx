"use client";

import { MotionProvider } from "@/components/ui/motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
