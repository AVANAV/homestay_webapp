"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
import { galleryGridPlacement, getAllGalleryItems } from "@/data/gallery";
import { anchors, handleAnchorClick } from "@/lib/anchors";
import { gallerySectionContent } from "@/lib/gallery-section-content";
import { Section } from "@/components/ui/Section";
import type { GalleryItem } from "@/types/gallery";
import { cn } from "@/lib/utils";

function GalleryTile({
  item,
  priority = false,
  className,
}: {
  item: GalleryItem;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "group/gallery relative isolate h-full w-full overflow-hidden rounded-xl",
        "ring-1 ring-border/50 shadow-sm shadow-night/5",
        className
      )}
    >
      <div className="relative size-full">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 40vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/gallery:scale-[1.03] motion-reduce:transition-none"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-night/75 via-night/25 to-night/5"
          aria-hidden
        />
        {item.featured && (
          <span className="absolute start-3 top-3 rounded-full bg-night/50 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-parchment backdrop-blur-sm">
            Featured
          </span>
        )}
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 text-parchment sm:p-5">
          <SectionSubheading
            as="h3"
            tone="onDark"
            spacing="none"
            className="text-lg sm:text-xl"
          >
            {item.title}
          </SectionSubheading>
          <p className="line-clamp-2 text-[0.8125rem] leading-relaxed text-parchment/85 sm:text-small">
            {item.description}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

export function GallerySection() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const items = getAllGalleryItems();

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);
  const ctaVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    <Section
      id="gallery"
      spacing="default"
      background="default"
      container={{ size: "cinema" }}
      className="scroll-mt-[var(--scroll-anchor-offset)]"
      aria-labelledby="gallery-heading"
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
            "mb-stack-lg max-w-2xl border-b border-border/50 pb-stack-md",
            "sm:mb-stack-xl sm:pb-stack-lg"
          )}
        >
          <motion.div variants={itemVariants}>
            <Overline tone="accent" spacing="none">
              {gallerySectionContent.overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <SectionHeading spacing="none" id="gallery-heading">
              {gallerySectionContent.heading}
            </SectionHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <LeadText
              tone="muted"
              spacing="none"
              className="max-w-prose text-pretty leading-relaxed"
            >
              {gallerySectionContent.intro}
            </LeadText>
          </motion.div>
        </motion.header>

        <div
          className={cn(
            "grid grid-cols-1 gap-4",
            "md:grid-cols-12 md:gap-6"
          )}
          role="list"
          aria-label="Photo gallery"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              role="listitem"
              variants={itemVariants}
              className={cn(
                "min-w-0",
                galleryGridPlacement[item.id]
              )}
            >
              <GalleryTile item={item} priority={index < 2} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-stack-lg flex justify-center border-t border-border/40 pt-stack-md sm:mt-stack-xl sm:pt-stack-lg"
          variants={ctaVariants}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-11 w-full touch-manipulation border-border bg-background/80 sm:w-auto sm:min-w-52"
          >
            <Link
              href={anchors.gallery}
              onClick={(e) =>
                handleAnchorClick(
                  e,
                  anchors.gallery,
                  pathname,
                  prefersReduced ?? false
                )
              }
            >
              {gallerySectionContent.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
