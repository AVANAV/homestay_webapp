/**
 * Footer — minimal luxury closure.
 *
 * Intentionally kept to three elements only:
 *   1. Brand name in Cormorant Garamond
 *   2. Emotional tagline in small italic
 *   3. Copyright + location line
 *
 * Placed in layout.tsx so it appears on every route (like Navbar).
 * Visually continues the bg-night band from FinalCtaSection above it.
 */
export function Footer() {
  return (
    <footer
      className={[
        "bg-night text-parchment",
        "border-t border-parchment/[0.07]",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-[90rem] flex-col items-center gap-5",
          "px-gutter py-section-compact text-center",
          "sm:gap-6",
        ].join(" ")}
      >
        {/* Brand identity */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-display text-lg font-medium text-parchment sm:text-xl">
            Veera Homestay
          </span>
          <p className="text-[0.8125rem] italic text-parchment/40">
            "Where the mountains meet the hearth."
          </p>
        </div>

        {/* Editorial hairline ornament */}
        <div className="h-px w-10 bg-parchment/[0.14]" aria-hidden />

        {/* Copyright */}
        <p className="text-[0.725rem] leading-relaxed text-parchment/30">
          © {new Date().getFullYear()} Veera Homestay
          <span className="mx-2 text-parchment/20" aria-hidden>
            ·
          </span>
          Patal Bhuvaneshwar, Uttarakhand
        </p>
      </div>
    </footer>
  );
}
