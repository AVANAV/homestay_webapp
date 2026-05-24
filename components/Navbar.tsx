"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  fadeIn,
  fadeInReduced,
  staggerContainer,
  staggerContainerReduced,
  staggerItem,
  staggerItemReduced,
  transition,
  useAccessibleVariants,
} from "@/components/ui/motion";
import { Overline } from "@/components/ui/Typography";
import { handleAnchorClick, resolveHashHref } from "@/lib/anchors";
import { navItems, siteConfig, whatsappHref } from "@/lib/nav-config";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 20;

function NavLink({
  href,
  label,
  scrolled,
  className,
  onClick,
}: {
  href: string;
  label: string;
  scrolled: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const resolvedHref = resolveHashHref(href, pathname);
  const isActive =
    href === "/"
      ? pathname === "/"
      : href.startsWith("#")
        ? false
        : pathname.startsWith(href);

  return (
    <Link
      href={resolvedHref}
      onClick={(e) => {
        if (href.startsWith("#")) {
          handleAnchorClick(e, href, pathname, prefersReduced ?? false);
        }
        onClick?.();
      }}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition-colors touch-manipulation",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        scrolled
          ? "text-foreground/85 hover:text-foreground"
          : "text-parchment/90 hover:text-parchment",
        isActive &&
          (scrolled
            ? "text-foreground after:bg-copper"
            : "text-parchment after:bg-copper-light"),
        "after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
        isActive && "after:scale-x-100",
        !isActive && "hover:after:scale-x-100 hover:after:bg-current/30",
        className
      )}
    >
      {label}
    </Link>
  );
}

function BookButton({
  scrolled,
  className,
  size = "default",
}: {
  scrolled: boolean;
  className?: string;
  size?: "default" | "lg";
}) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "min-h-11 touch-manipulation shadow-none",
        !scrolled &&
          "bg-copper text-parchment hover:bg-copper-light hover:text-parchment",
        className
      )}
    >
      <a href={siteConfig.bookHref} target="_blank" rel="noreferrer">
        Book Now
      </a>
    </Button>
  );
}

function WhatsAppButton({
  scrolled,
  className,
  size = "default",
}: {
  scrolled: boolean;
  className?: string;
  size?: "default" | "lg";
}) {
  return (
    <Button
      asChild
      variant="outline"
      size={size}
      className={cn(
        "min-h-11 touch-manipulation",
        scrolled
          ? "border-border bg-background/50 hover:bg-muted"
          : "border-parchment/30 bg-parchment/10 text-parchment hover:bg-parchment/20 hover:text-parchment",
        className
      )}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle aria-hidden />
        <span>WhatsApp</span>
      </a>
    </Button>
  );
}

function MobileNav({
  scrolled,
  open,
  onOpenChange,
}: {
  scrolled: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const containerVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);
  const headerVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className={cn(
            "min-h-11 min-w-11 touch-manipulation lg:hidden",
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-parchment hover:bg-parchment/15"
          )}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <Menu className="size-6" aria-hidden />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[min(100%,20rem)] flex-col border-l border-border/50 bg-background/95 p-0 supports-backdrop-filter:backdrop-blur-xl"
        showCloseButton
      >
        <SheetHeader className="border-b border-border/40 px-gutter pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <Overline spacing="none" className="text-copper">
              Menu
            </Overline>
            <SheetTitle className="font-display text-2xl font-medium text-foreground">
              {siteConfig.name}
            </SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation for {siteConfig.name}
            </SheetDescription>
          </motion.div>
        </SheetHeader>

        <motion.nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-gutter py-stack-sm"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <Link
                href={resolveHashHref(item.href, pathname)}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    handleAnchorClick(
                      e,
                      item.href,
                      pathname,
                      prefersReduced ?? false
                    );
                  }
                  onOpenChange(false);
                }}
                className="flex min-h-12 items-center rounded-lg px-3 font-display text-xl font-medium text-foreground transition-colors touch-manipulation hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <SheetFooter className="gap-stack-sm border-t border-border/40 px-gutter pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-stack-sm">
          <BookButton scrolled className="w-full" size="lg" />
          <WhatsAppButton scrolled className="w-full" size="lg" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  const scrolled = useScrolled(SCROLL_THRESHOLD);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 border-b border-transparent supports-backdrop-filter:backdrop-blur-xl"
        initial={false}
        animate={{
          opacity: scrolled ? 1 : 0,
          backgroundColor: scrolled
            ? "color-mix(in oklch, var(--background) 78%, transparent)"
            : "rgba(0, 0, 0, 0)",
          borderColor: scrolled
            ? "color-mix(in oklch, var(--border) 45%, transparent)"
            : "transparent",
        }}
        transition={transition.cinematic}
      />

      <Container
        padding="default"
        className="relative flex h-14 min-h-14 items-center justify-between gap-3 sm:h-16 sm:min-h-16"
      >
        <Link
          href="/"
          className={cn(
            "group flex min-h-11 min-w-0 flex-col justify-center gap-0.5 rounded-lg pr-2 touch-manipulation",
            "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
            scrolled ? "text-foreground" : "text-parchment"
          )}
          aria-label={`${siteConfig.name} — Home`}
        >
          <span className="truncate font-display text-lg font-medium leading-tight tracking-tight sm:text-xl">
            {siteConfig.name}
          </span>
          <span
            className={cn(
              "hidden text-[0.65rem] font-medium uppercase tracking-[0.12em] sm:block",
              scrolled ? "text-stone" : "text-parchment/70"
            )}
          >
            {siteConfig.tagline}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              scrolled={scrolled}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <WhatsAppButton scrolled={scrolled} />
            <BookButton scrolled={scrolled} />
          </div>

          <BookButton
            scrolled={scrolled}
            className="lg:hidden"
            size="default"
          />

          <MobileNav
            scrolled={scrolled}
            open={mobileOpen}
            onOpenChange={setMobileOpen}
          />
        </div>
      </Container>
    </header>
  );
}
