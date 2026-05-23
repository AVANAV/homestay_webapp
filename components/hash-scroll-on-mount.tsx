"use client";

import { useEffect } from "react";

import { scrollToAnchor } from "@/lib/anchors";

/** Scrolls to hash target on load (e.g. `/#rooms`) after hydration */
export function HashScrollOnMount() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToAnchor(hash, { behavior: "auto" });
    });
  }, []);

  return null;
}
