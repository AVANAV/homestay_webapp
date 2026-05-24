"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

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
  viewport,
  useAccessibleVariants,
} from "@/components/ui/motion";
import { finalCtaSectionContent } from "@/lib/final-cta-section-content";
import { cn } from "@/lib/utils";

const { overline, heading, supporting, primaryCta, secondaryCta } =
  finalCtaSectionContent;

export function FinalCtaSection() {
  useReducedMotion(); // hook must be called; value used via useAccessibleVariants below

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced,
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);
  const ctaVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    /*
     * Section uses background="dark" (bg-night text-parchment) and spacing="hero"
     * (clamp(4.5rem, 10vw, 10rem) block padding) for the cinematic closing moment.
     *
     * Container is placed manually inside (not via the container prop) so the
     * full-bleed gradient overlay sits flush to the section edges.
     */
    <Section
      spacing="hero"
      background="dark"
      className="overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle top-down pine gradient — creates depth without an image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-pine-900/30 via-transparent to-transparent"
      />

      <Container size="default" className="relative z-10">
        <motion.div
          className="flex flex-col items-center gap-stack-md text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport.compact}
          variants={sectionVariants}
        >
          {/* ── Decorative editorial ornament ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
            aria-hidden
          >
            <div className="h-px w-10 bg-copper/40" />
            <div className="size-[5px] rounded-full bg-copper/40" />
            <div className="h-px w-10 bg-copper/40" />
          </motion.div>

          {/* ── Overline ── */}
          <motion.div variants={itemVariants} className="-mt-1">
            <Overline tone="accent" spacing="none">
              {overline}
            </Overline>
          </motion.div>

          {/* ── Display heading — h2 for SEO (HeroSection owns the h1) ── */}
          <motion.div variants={itemVariants}>
            <DisplayHeading
              asChild
              tone="onDark"
              spacing="none"
              className={cn(
                "text-hero-display text-parchment! text-balance",
                "md:text-display",
                "[text-shadow:0_1px_2px_oklch(0_0_0/0.2),0_4px_24px_oklch(0_0_0/0.12)]",
              )}
            >
              <h2 id="final-cta-heading">{heading}</h2>
            </DisplayHeading>
          </motion.div>

          {/* ── Supporting paragraph ── */}
          <motion.div variants={itemVariants}>
            <LeadText
              tone="onDark"
              spacing="none"
              className="max-w-[40ch] text-parchment/72! text-balance"
            >
              {supporting}
            </LeadText>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            variants={ctaVariants}
            className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4"
          >
            {/* Primary — WhatsApp booking */}
            <Button
              asChild
              size="lg"
              className={cn(
                "min-h-12 w-full touch-manipulation sm:w-auto sm:min-w-48",
                "bg-copper text-parchment shadow-md shadow-night/40",
                "hover:bg-copper-light hover:text-parchment",
              )}
            >
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${primaryCta.label} via WhatsApp (opens in a new tab)`}
              >
                {primaryCta.label}
                <MessageCircle className="size-4" aria-hidden />
              </a>
            </Button>

            {/* Secondary — Google Maps */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "min-h-12 w-full touch-manipulation sm:w-auto sm:min-w-44",
                "border-parchment/30 bg-parchment/[0.08] text-parchment",
                "hover:border-parchment/50 hover:bg-parchment/[0.15] hover:text-parchment",
              )}
            >
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${secondaryCta.label} — opens Google Maps (new tab)`}
              >
                {secondaryCta.label}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
