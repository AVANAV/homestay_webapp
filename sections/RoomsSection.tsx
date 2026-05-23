"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  const rooms = sortRoomsForDisplay();
  const headerVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const headerItemVariants = useAccessibleVariants(
    staggerItem,
    staggerItemReduced
  );
  const gridVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const gridItemVariants = useAccessibleVariants(
    staggerItem,
    staggerItemReduced
  );
  const ctaVariants = useAccessibleVariants(fadeIn, fadeInReduced);

  return (
    <Section
      id="rooms"
      spacing="default"
      background="muted"
      container={{ size: "default" }}
      className="scroll-mt-20"
    >
      <motion.header
        className="mb-stack-md flex max-w-2xl flex-col gap-3 sm:mb-stack-lg sm:gap-stack-sm"
        initial="hidden"
        whileInView="visible"
        viewport={viewport.default}
        variants={headerVariants}
      >
        <motion.div variants={headerItemVariants}>
          <Overline tone="accent" spacing="none">
            {roomsSectionContent.overline}
          </Overline>
        </motion.div>
        <motion.div variants={headerItemVariants}>
          <SectionHeading spacing="none">
            {roomsSectionContent.heading}
          </SectionHeading>
        </motion.div>
        <motion.div variants={headerItemVariants}>
          <LeadText tone="muted" spacing="none" className="max-w-prose">
            {roomsSectionContent.intro}
          </LeadText>
        </motion.div>
      </motion.header>

      <motion.ul
        className="grid grid-cols-1 gap-stack-md md:grid-cols-2 md:gap-stack-lg"
        initial="hidden"
        whileInView="visible"
        viewport={viewport.default}
        variants={gridVariants}
        role="list"
      >
        {rooms.map((room, index) => {
          const isPrimaryFeatured = room.featured && index === 0;

          return (
            <motion.li
              key={room.id}
              variants={gridItemVariants}
              className={cn(
                "min-w-0",
                isPrimaryFeatured && "md:col-span-2",
                room.featured &&
                  !isPrimaryFeatured &&
                  "md:ring-1 md:ring-copper/20 md:ring-offset-4 md:ring-offset-secondary"
              )}
            >
              <RoomCard
                room={room}
                priority={index < 2}
                className={cn(
                  isPrimaryFeatured &&
                    "ring-1 ring-copper/25 ring-offset-4 ring-offset-secondary"
                )}
              />
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        className="mt-stack-md flex justify-center sm:mt-stack-lg"
        initial="hidden"
        whileInView="visible"
        viewport={viewport.compact}
        variants={ctaVariants}
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="min-h-11 w-full touch-manipulation sm:w-auto sm:min-w-48"
        >
          <Link href="#rooms">
            View All Rooms
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}
