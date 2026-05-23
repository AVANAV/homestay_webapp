"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import {
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
import { getAllRooms } from "@/data/rooms";
import { roomsSectionContent } from "@/lib/rooms-section-content";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function sortRoomsForDisplay() {
  return [...getAllRooms()].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );
}

export function RoomsSection() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const rooms = sortRoomsForDisplay();

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);
  const ctaVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    <Section
      id="rooms"
      spacing="default"
      background="muted"
      container={{ size: "default" }}
      className="scroll-mt-[var(--scroll-anchor-offset)]"
      aria-labelledby="rooms-heading"
    >
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={viewport.compact}
        variants={sectionVariants}
      >
        {/* —— Editorial intro —— */}
        <motion.header
          className={cn(
            "mb-stack-lg max-w-2xl border-b border-border/50 pb-stack-md",
            "sm:mb-stack-xl sm:pb-stack-lg"
          )}
        >
          <motion.div variants={itemVariants}>
            <Overline tone="accent" spacing="none">
              {roomsSectionContent.overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <SectionHeading spacing="none" id="rooms-heading">
              {roomsSectionContent.heading}
            </SectionHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <LeadText tone="muted" spacing="none" className="max-w-prose text-pretty">
              {roomsSectionContent.intro}
            </LeadText>
          </motion.div>
        </motion.header>

        {/* —— Room grid —— */}
        {rooms.length > 0 ? (
          <motion.ul
            className={cn(
              "grid grid-cols-1 gap-stack-md",
              "sm:gap-stack-lg",
              "md:grid-cols-2 md:gap-x-gutter md:gap-y-stack-lg",
              "lg:gap-y-stack-xl"
            )}
            role="list"
            aria-label="Available rooms"
          >
            {rooms.map((room, index) => {
              const isPrimaryFeatured = room.featured && index === 0;

              return (
                <motion.li
                  key={room.id}
                  variants={itemVariants}
                  className={cn(
                    "flex min-w-0",
                    isPrimaryFeatured && "md:col-span-2"
                  )}
                >
                  <RoomCard
                    room={room}
                    priority={index < 2}
                    className={cn(
                      "h-full w-full",
                      isPrimaryFeatured &&
                        "ring-1 ring-copper/20 ring-offset-4 ring-offset-secondary",
                      room.featured &&
                        !isPrimaryFeatured &&
                        "md:ring-1 md:ring-copper/15 md:ring-offset-4 md:ring-offset-secondary"
                    )}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        ) : null}

        {/* —— Section CTA —— */}
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
              View All Rooms
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
