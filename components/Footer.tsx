import { Container } from "@/components/ui/Container";
import { BodyText, Overline } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const WHATSAPP_HREF = "https://wa.me/917088543104";
const MAPS_HREF = "https://maps.app.goo.gl/ix4GSMiUATvYien79";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-parchment/[0.08] bg-night text-parchment">
      <Container
        size="prose"
        className={cn(
          "flex max-w-full flex-col items-center text-center",
          "py-section-compact",
          "pb-[calc(var(--spacing-section-compact)+env(safe-area-inset-bottom,0px))]",
        )}
      >
        <Overline tone="accent" spacing="none" className="text-copper-light/80">
          Veera Homestay
        </Overline>

        <p className="mt-4 max-w-[24ch] font-display text-2xl font-medium leading-tight text-parchment text-balance sm:text-3xl">
          Where the mountains meet the hearth.
        </p>

        <nav
          aria-label="Footer contact links"
          className="mt-8 flex w-full flex-col items-center justify-center gap-2 sm:w-auto sm:flex-row sm:gap-6"
        >
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2",
              "text-[0.875rem] font-medium text-copper-light",
              "transition-colors hover:text-parchment",
              "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-parchment/30",
            )}
          >
            WhatsApp
          </a>
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2",
              "text-[0.875rem] font-medium text-copper-light",
              "transition-colors hover:text-parchment",
              "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-parchment/30",
            )}
          >
            Google Maps
          </a>
        </nav>

        <BodyText
          tone="onDark"
          spacing="none"
          className="mt-8 max-w-none text-[0.75rem] leading-relaxed text-parchment/45"
        >
          Copyright {year} Veera Homestay
        </BodyText>
      </Container>
    </footer>
  );
}
