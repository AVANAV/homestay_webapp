"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Soup, Sunrise, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  LeadText,
  Overline,
  SectionHeading,
  SectionSubheading,
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
import { getAllExperiences } from "@/data/experiences";
import { experiencesSectionContent } from "@/lib/experiences-section-content";
import { siteConfig } from "@/lib/nav-config";
import { Section } from "@/components/ui/Section";
import type { ExperienceIconKey, ExperienceItem } from "@/types/experience";
import { cn } from "@/lib/utils";

const experienceIcons: Record<ExperienceIconKey, LucideIcon> = {
  sunrise: Sunrise,
  food: Soup,
};

function ExperienceCard({
  item,
  priority = false,
}: {
  item: ExperienceItem;
  priority?: boolean;
}) {
  const Icon = experienceIcons[item.icon];

  return (
    <article className="group/experience min-w-0">
      <figure
        className={cn(
          "relative isolate overflow-hidden rounded-xl",
          "aspect-[4/5] ring-1 ring-border/40 shadow-md shadow-night/6",
          "sm:aspect-[3/4] md:aspect-[4/5]"
        )}
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/experience:scale-[1.03] motion-reduce:transition-none"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-night/80 via-night/30 to-night/5"
          aria-hidden
        />
        {item.category ? (
          <span className="absolute start-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-night/40 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-parchment backdrop-blur-sm">
            <Icon className="size-3 text-copper-light" aria-hidden />
            {item.category}
          </span>
        ) : null}
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-6">
          <SectionSubheading
            as="h3"
            tone="onDark"
            spacing="none"
            className="text-xl sm:text-2xl"
          >
            {item.title}
          </SectionSubheading>
          <p className="max-w-[32ch] text-[0.875rem] leading-relaxed text-parchment/90 sm:text-small">
            {item.description}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export function ExperiencesSection() {
  const experiences = getAllExperiences();

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);
  const ctaVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    <Section
      id="experiences"
      spacing="default"
      background="muted"
      container={{ size: "cinema" }}
      className="scroll-mt-[var(--scroll-anchor-offset)]"
      aria-labelledby="experiences-heading"
    >
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={viewport.compact}
        variants={sectionVariants}
      >
        <motion.header
          className={cn(
            "mb-stack-lg max-w-xl border-b border-border/50 pb-stack-md",
            "sm:mb-stack-xl sm:pb-stack-lg"
          )}
        >
          <motion.div variants={itemVariants}>
            <Overline tone="accent" spacing="none">
              {experiencesSectionContent.overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <SectionHeading spacing="none" id="experiences-heading">
              {experiencesSectionContent.heading}
            </SectionHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <LeadText
              tone="muted"
              spacing="none"
              className="max-w-prose text-pretty leading-relaxed"
            >
              {experiencesSectionContent.intro}
            </LeadText>
          </motion.div>
        </motion.header>

        <motion.div
          className={cn(
            "grid grid-cols-1 gap-stack-lg",
            "md:grid-cols-2 md:gap-6 lg:gap-8"
          )}
          role="list"
          aria-label="Mountain experiences"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              role="listitem"
              variants={itemVariants}
              className="min-w-0"
            >
              <ExperienceCard item={item} priority={index === 0} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-stack-lg flex justify-center border-t border-border/40 pt-stack-md sm:mt-stack-xl sm:pt-stack-lg"
          variants={ctaVariants}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-11 w-full touch-manipulation border-border bg-card/80 sm:w-auto sm:min-w-52"
          >
            <Link href={siteConfig.bookHref}>
              {experiencesSectionContent.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
