"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BodyText, Overline, SectionHeading } from "@/components/ui/Typography";
import { transition } from "@/components/ui/motion";
import { amenityLabels } from "@/data/amenities";
import type { Room } from "@/types/room";
import { cn } from "@/lib/utils";

const AMENITY_PREVIEW_MOBILE = 3;
const AMENITY_PREVIEW_DESKTOP = 4;

type RoomCardProps = {
  room: Room;
  className?: string;
  priority?: boolean;
};

function getBookHref(room: Room) {
  return `/contact?room=${room.slug}#book`;
}

function AmenityPreview({ room }: { room: Room }) {
  const preview = room.amenities.slice(0, AMENITY_PREVIEW_DESKTOP);
  const remaining = room.amenities.length - preview.length;

  return (
    <ul
      className="flex flex-wrap gap-1.5 sm:gap-2"
      aria-label={`${room.name} amenities`}
    >
      {preview.map((key, index) => (
        <li
          key={key}
          className={cn(
            "rounded-full bg-oat px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide text-stone",
            index >= AMENITY_PREVIEW_MOBILE && "hidden sm:list-item",
          )}
        >
          {amenityLabels[key]}
        </li>
      ))}
      {remaining > 0 && (
        <li className="rounded-full bg-linen px-2.5 py-1 text-[0.6875rem] font-medium text-stone">
          +{remaining} more
        </li>
      )}
    </ul>
  );
}

export function RoomCard({ room, className, priority = false }: RoomCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      data-slot="room-card"
      className={cn(
        "group/card flex h-full flex-col overflow-hidden rounded-xl",
        "bg-card text-card-foreground ring-1 ring-border/60",
        "shadow-sm shadow-night/5",
        className,
      )}
      whileHover={
        prefersReduced ? undefined : { y: -4, transition: transition.enter }
      }
    >
      <Link
        href="#rooms"
        className="relative block aspect-4/3 overflow-hidden touch-manipulation focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      >
        <Image
          src={room.image.src}
          alt={room.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-night/50 via-night/10 to-transparent"
          aria-hidden
        />
        {room.featured && (
          <Overline
            spacing="none"
            className="absolute start-3 top-3 rounded-full bg-night/55 px-2.5 py-1 text-[0.625rem] tracking-[0.12em] text-parchment backdrop-blur-sm"
          >
            Featured
          </Overline>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-3.5 sm:p-5">
        <div className="flex flex-col gap-2">
          <SectionHeading as="h3" spacing="none" className="text-h3 sm:text-h4">
            <Link
              href="#rooms"
              className="touch-manipulation transition-colors hover:text-copper focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {room.name}
            </Link>
          </SectionHeading>

          <BodyText
            spacing="none"
            tone="muted"
            className="line-clamp-3 text-[0.9375rem] leading-relaxed sm:line-clamp-2 sm:text-body"
          >
            {room.shortDescription}
          </BodyText>
        </div>

        <div className="flex items-center gap-2 text-stone">
          <Users className="size-4 shrink-0 opacity-80" aria-hidden />
          <span className="text-small font-medium">{room.occupancy.label}</span>
        </div>

        <AmenityPreview room={room} />

        <div className="mt-auto flex flex-col gap-3 border-t border-border/50 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-xl font-medium text-foreground sm:text-2xl">
              {room.price.label.split(" / ")[0]}
            </span>
            <span className="text-small text-muted-foreground">per night</span>
          </div>

          <Button
            asChild
            size="lg"
            className="min-h-11 w-full touch-manipulation sm:w-auto sm:min-w-36"
          >
            <Link href={getBookHref(room)}>
              Book Now
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
