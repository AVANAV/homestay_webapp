import type { MouseEvent } from "react";

/** Homepage anchor targets — use until dedicated routes exist */
export const anchors = {
  rooms: "#rooms",
  room: (slug: string) => `#room-${slug}`,
  gallery: "#gallery",
  experiences: "#experiences",
  testimonials: "#testimonials",
  book: "#book",
} as const;

/** Resolves hash links to `/#section` when not on the homepage */
export function resolveHashHref(href: string, pathname: string): string {
  if (href.startsWith("#") && pathname !== "/") {
    return `/${href}`;
  }
  return href;
}

/** Reliable same-page scroll — Next.js Link does not always scroll to hashes */
export function scrollToAnchor(
  hash: string,
  options?: { behavior?: ScrollBehavior }
): boolean {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({
    behavior: options?.behavior ?? "smooth",
    block: "start",
  });

  return true;
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  hash: string,
  pathname: string,
  prefersReducedMotion: boolean
): void {
  if (!hash.startsWith("#")) return;

  if (pathname !== "/") {
    return;
  }

  event.preventDefault();
  scrollToAnchor(hash, {
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  window.history.pushState(null, "", hash);
}
