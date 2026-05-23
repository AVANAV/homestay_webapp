"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import {
  BodyText,
  LeadText,
  Overline,
  SectionHeading,
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
import { anchors, handleAnchorClick } from "@/lib/anchors";
import { aboutSectionContent } from "@/lib/about-section-content";
import { cn } from "@/lib/utils";

/* ─── Highlight stat block ────────────────────────────────────────── */

type Highlight = {
  readonly value: string;
  readonly label: string;
  readonly description: string;
};

function HighlightBlock({ h, index }: { h: Highlight; index: number }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 py-5 lg:py-6",
        /* Mobile 2-col: bottom border under the first row (items 0 & 1) */
        index < 2 && "border-b border-border/40",
        /* Desktop single-col: remove bottom border, add top border for non-first */
        "lg:border-b-0",
        index > 0 && "lg:border-t lg:border-border/40",
      )}
    >
      <span
        className={cn(
          "block font-display font-medium leading-none tracking-tight text-foreground",
          "text-[2.5rem] sm:text-[2.875rem] lg:text-[3rem]",
        )}
      >
        {h.value}
      </span>
      <p className="mt-1.5 text-[0.875rem] font-medium text-foreground/80">
        {h.label}
      </p>
      <p className="text-small text-stone">{h.description}</p>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export function AboutSection() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced,
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);
  const ctaVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    <Section
      id="about"
      spacing="default"
      background="muted"
      container={{ size: "cinema" }}
      className="scroll-mt-[var(--scroll-anchor-offset)]"
      aria-labelledby="about-heading"
    >
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={viewport.compact}
        variants={sectionVariants}
      >
        {/* ── Editorial header ── */}
        <motion.header
          className={cn(
            "mb-stack-lg max-w-2xl border-b border-border/50 pb-stack-md",
            "sm:mb-stack-xl sm:pb-stack-lg",
          )}
        >
          <motion.div variants={itemVariants}>
            <Overline tone="accent" spacing="none">
              {aboutSectionContent.overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <SectionHeading spacing="none" id="about-heading">
              {aboutSectionContent.heading}
            </SectionHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <LeadText
              tone="muted"
              spacing="none"
              className="max-w-prose text-pretty leading-relaxed"
            >
              {aboutSectionContent.lead}
            </LeadText>
          </motion.div>
        </motion.header>

        {/* ── Body: prose (left) + highlights (right) ── */}
        <div
          className={cn(
            "grid grid-cols-1 gap-stack-xl",
            "lg:grid-cols-[1fr_18rem] lg:items-start lg:gap-x-16",
            "xl:grid-cols-[1fr_20rem] xl:gap-x-20",
          )}
        >
          {/* Prose column */}
          <motion.div
            className="flex flex-col gap-5 sm:gap-6"
            variants={itemVariants}
          >
            {aboutSectionContent.paragraphs.map((text, i) => (
              <BodyText
                key={i}
                tone="default"
                spacing="none"
                className={cn(
                  "max-w-[62ch] text-[0.9375rem] leading-[1.78] text-foreground/85",
                  "sm:text-body sm:leading-[1.72]",
                )}
              >
                {text}
              </BodyText>
            ))}
          </motion.div>

          {/* Highlights column */}
          <motion.div
            variants={itemVariants}
            className={cn(
              /* Mobile: top border separates highlights from prose */
              "border-t border-border/40 pt-stack-lg",
              /* Desktop: left border instead; flush to top of grid row */
              "lg:border-t-0 lg:border-l lg:border-border/40 lg:pl-10 lg:pt-0",
              "xl:pl-12",
            )}
          >
            <div
              className={cn(
                /* Mobile: 2-column grid */
                "grid grid-cols-2 gap-x-6",
                /* Desktop: single column — divide-y handled by HighlightBlock */
                "lg:grid-cols-1",
              )}
            >
              {aboutSectionContent.highlights.map((h, i) => (
                <HighlightBlock key={h.label} h={h} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Section CTA ── */}
        <motion.div
          className={cn(
            "mt-stack-lg flex justify-center border-t border-border/40 pt-stack-md",
            "sm:mt-stack-xl sm:pt-stack-lg",
          )}
          variants={ctaVariants}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-11 w-full touch-manipulation border-border bg-card/80 sm:w-auto sm:min-w-52"
          >
            <Link
              href={anchors.contact}
              onClick={(e) =>
                handleAnchorClick(
                  e,
                  anchors.contact,
                  pathname,
                  prefersReduced ?? false,
                )
              }
            >
              {aboutSectionContent.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
