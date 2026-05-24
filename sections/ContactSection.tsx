"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import {
  LeadText,
  Overline,
  SectionHeading,
} from "@/components/ui/Typography";
import {
  staggerContainer,
  staggerContainerReduced,
  staggerItem,
  staggerItemReduced,
  viewport,
  useAccessibleVariants,
} from "@/components/ui/motion";
import { contactSectionContent } from "@/lib/contact-section-content";
import { cn } from "@/lib/utils";

/* ─── Secondary contact link row ──────────────────────────────────── */

function ContactRow({
  icon: Icon,
  primary,
  secondary,
  href,
  external = false,
}: {
  icon: LucideIcon;
  primary: string;
  secondary: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex items-center gap-3.5 rounded-xl",
        "border border-border bg-card/50 px-4 py-3.5",
        "transition-colors duration-300 hover:bg-card hover:border-border/80",
        "touch-manipulation",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
      )}
    >
      <Icon className="size-4 shrink-0 text-copper" aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[0.9375rem] font-medium text-foreground">
          {primary}
        </p>
        <p className="text-small text-stone">{secondary}</p>
      </div>
      <ArrowUpRight
        className="size-3.5 shrink-0 text-stone/40 transition-colors group-hover:text-stone/70"
        aria-hidden
      />
    </a>
  );
}

/* ─── Cinematic location card ─────────────────────────────────────── */

function LocationCard() {
  const { address, mapsHref } = contactSectionContent;

  return (
    <div
      className={cn(
        "relative isolate flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-2xl",
        "bg-night px-7 py-8 sm:min-h-[22rem] sm:px-8 sm:py-9",
        "ring-1 ring-parchment/[0.08]",
      )}
    >
      {/* Atmospheric gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-br from-pine-900/50 via-night/80 to-night"
      />

      {/* Location identity */}
      <div className="relative z-10">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-copper/65">
          Patal Bhuvaneshwar · Uttarakhand
        </p>
        <h3
          className={cn(
            "mt-2 font-display font-medium tracking-tight text-parchment",
            "text-3xl sm:text-4xl",
          )}
        >
          Veera Homestay
        </h3>
        <div className="mt-5 h-px bg-parchment/12" aria-hidden />
        <address className="mt-5 flex flex-col gap-1 not-italic">
          <p className="text-[0.9375rem] text-parchment/75">{address.line1}</p>
          <p className="text-small text-parchment/50">{address.line2}</p>
        </address>
      </div>

      {/* Google Maps CTA */}
      <div className="relative z-10 mt-8">
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Veera Homestay on Google Maps (opens in a new tab)"
          className={cn(
            "group flex items-center justify-between rounded-xl",
            "border border-parchment/15 bg-parchment/[0.06] px-5 py-3.5",
            "text-parchment/80 transition-colors duration-300",
            "hover:bg-parchment/10 hover:text-parchment",
            "touch-manipulation focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-parchment/30",
          )}
        >
          <span className="flex items-center gap-2.5 text-[0.9375rem] font-medium">
            <Map className="size-4" aria-hidden />
            Open in Google Maps
          </span>
          <ArrowUpRight
            className="size-4 opacity-50 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
        </a>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export function ContactSection() {
  const { overline, heading, lead, whatsapp, phone, email, address, bookingNote } =
    contactSectionContent;

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced,
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);

  return (
    <Section
      id="contact"
      spacing="default"
      background="default"
      container={{ size: "default" }}
      className="scroll-mt-[var(--scroll-anchor-offset)]"
      aria-labelledby="contact-heading"
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
              {overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <SectionHeading spacing="none" id="contact-heading">
              {heading}
            </SectionHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <LeadText
              tone="muted"
              spacing="none"
              className="max-w-prose text-pretty leading-relaxed"
            >
              {lead}
            </LeadText>
          </motion.div>
        </motion.header>

        {/* ── 2-column layout: contact actions + location card ── */}
        <div
          className={cn(
            "grid grid-cols-1 gap-stack-xl",
            "lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-0",
            "xl:gap-x-16",
          )}
        >
          {/* Left column: contact actions */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {/* Primary CTA — WhatsApp */}
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${whatsapp.label} — ${whatsapp.number} (opens in WhatsApp)`}
              className={cn(
                "group flex items-center gap-4 rounded-xl p-5",
                "bg-[#25D366] text-white",
                "shadow-md shadow-night/15 ring-1 ring-white/10",
                "transition-[box-shadow,transform] duration-300 ease-out",
                "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-night/20",
                "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                "touch-manipulation focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/60",
              )}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="size-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-tight">{whatsapp.label}</p>
                <p className="mt-0.5 text-[0.875rem] text-white/75">
                  {whatsapp.number}
                </p>
              </div>
              <ArrowUpRight
                className="size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </a>

            {/* Secondary links: phone + email */}
            <div className="flex flex-col gap-2.5">
              <ContactRow
                icon={Phone}
                primary={phone.number}
                secondary={phone.label}
                href={phone.href}
              />
              <ContactRow
                icon={Mail}
                primary={email.address}
                secondary={email.label}
                href={email.href}
              />
            </div>

            {/* Address */}
            <div className="flex gap-3 pt-1">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-copper"
                aria-hidden
              />
              <address className="not-italic">
                <p className="text-[0.9375rem] font-medium text-foreground">
                  {address.line1}
                </p>
                <p className="text-small text-stone">{address.line2}</p>
              </address>
            </div>

            {/* Booking support note */}
            <p
              className={cn(
                "border-t border-border/40 pt-4",
                "text-small italic text-stone",
              )}
            >
              {bookingNote}
            </p>
          </motion.div>

          {/* Right column: cinematic location card */}
          <motion.div variants={itemVariants} className="min-h-0">
            <LocationCard />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
