"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  DisplayHeading,
  LeadText,
  Overline,
} from "@/components/ui/Typography";
import {
  fadeIn,
  fadeInReduced,
  staggerContainer,
  staggerContainerReduced,
  staggerItem,
  staggerItemReduced,
  tapScale,
  transition,
  useAccessibleVariants,
} from "@/components/ui/motion";
import { anchors, handleAnchorClick } from "@/lib/anchors";
import { heroContent } from "@/lib/hero-content";
import { siteConfig, whatsappHref } from "@/lib/nav-config";
import { cn } from "@/lib/utils";

const HERO_IMAGE = heroContent.image.src;

function HeroBackground() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Image
        src={HERO_IMAGE}
        alt={heroContent.image.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        className="object-cover object-[center_38%] sm:object-[center_42%]"
      />
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-night/25" />
      <div className="absolute inset-0 bg-linear-to-t from-night/95 via-night/55 to-night/15" />
      <div className="absolute inset-0 bg-linear-to-r from-night/60 via-transparent to-transparent" />
      {/* Soft handoff to page below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background/90 via-background/30 to-transparent sm:h-40" />
    </div>
  );
}

function HeroCTAs() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:gap-3">
      <Button
        asChild
        size="lg"
        className="min-h-12 w-full touch-manipulation bg-copper text-parchment shadow-md hover:bg-copper-light hover:text-parchment sm:w-auto sm:min-w-42"
      >
        <Link href={siteConfig.bookHref}>
          {heroContent.primaryCta}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="min-h-12 w-full touch-manipulation border-parchment/35 bg-parchment/10 text-parchment hover:bg-parchment/20 hover:text-parchment sm:w-auto sm:min-w-42"
      >
        <Link
          href={anchors.rooms}
          onClick={(e) =>
            handleAnchorClick(
              e,
              anchors.rooms,
              pathname,
              prefersReduced ?? false
            )
          }
        >
          {heroContent.secondaryCta}
        </Link>
      </Button>
    </div>
  );
}

function HeroWhatsAppFab() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed z-40 flex size-11 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg shadow-night/20",
        "ring-1 ring-white/20",
        "touch-manipulation",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-parchment/50",
        /* Mobile: bottom-24 right-4 + safe-area */
        "right-[max(1rem,env(safe-area-inset-right,0px))] bottom-[max(6rem,calc(6rem+env(safe-area-inset-bottom,0px)))]",
        /* Desktop: bottom-6 right-6 + safe-area */
        "md:right-[max(1.5rem,calc(1.5rem+env(safe-area-inset-right,0px)))] md:bottom-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]"
      )}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...transition.enter, delay: 0.6 }}
      whileHover={prefersReduced ? undefined : { scale: 1.04 }}
      whileTap={prefersReduced ? undefined : tapScale}
    >
      <MessageCircle className="size-5" aria-hidden />
    </motion.a>
  );
}

function HeroScrollIndicator() {
  const prefersReduced = useReducedMotion();
  const fadeVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  const scrollToContent = () => {
    const target =
      document.getElementById("after-hero") ??
      document.querySelector("main section:nth-of-type(2)");
    target?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToContent}
      aria-label="Scroll to explore more"
      className={cn(
        "absolute inset-s-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1",
        "touch-manipulation text-parchment/70 transition-colors hover:text-parchment",
        "bottom-[max(1rem,env(safe-area-inset-bottom))]",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-parchment/40"
      )}
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
      transition={{ ...transition.fade, delay: 0.9 }}
    >
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em]">
        Explore
      </span>
      <motion.span
        aria-hidden
        animate={prefersReduced ? undefined : { y: [0, 6, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="size-5" />
      </motion.span>
    </motion.button>
  );
}

export function HeroSection() {
  const containerVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);

  return (
    <Section
      spacing="none"
      background="transparent"
      className="relative min-h-dvh overflow-hidden"
      aria-label="Welcome"
    >
      <HeroBackground />

      <Container
        size="cinema"
        className="relative z-10 flex min-h-dvh flex-col justify-end pb-[max(4.5rem,calc(2.5rem+env(safe-area-inset-bottom)))] pt-24 sm:justify-center sm:pb-28 sm:pt-28"
      >
        <motion.div
          className="isolate flex max-w-3xl flex-col gap-4 text-parchment sm:gap-stack-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Overline
              tone="onDark"
              spacing="none"
              className="text-[0.625rem] tracking-[0.16em] text-parchment/75 sm:text-overline"
            >
              {heroContent.overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="relative -mt-0.5">
            <DisplayHeading
              tone="onDark"
              spacing="none"
              className={cn(
                "max-w-[15ch] text-hero-display text-parchment! sm:max-w-[17ch]",
                "md:max-w-[20ch] md:text-display lg:max-w-[22ch] xl:max-w-none",
                "[text-shadow:0_1px_2px_oklch(0_0_0/0.35),0_8px_32px_oklch(0_0_0/0.25)]"
              )}
            >
              {heroContent.headline}
            </DisplayHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="-mt-0.5 sm:mt-0">
            <LeadText
              tone="onDark"
              spacing="none"
              className="max-w-[34ch] text-[0.9375rem] leading-[1.62] text-parchment/90! sm:max-w-prose sm:text-lead sm:leading-[var(--text-lead--line-height)]"
            >
              {heroContent.supporting}
            </LeadText>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-1">
            <HeroCTAs />
          </motion.div>
        </motion.div>
      </Container>

      <HeroScrollIndicator />
      <HeroWhatsAppFab />
    </Section>
  );
}
