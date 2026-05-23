"use client";

import { motion } from "framer-motion";

import {
  BodyText,
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
import { Section } from "@/components/ui/Section";
import { getAllTestimonials } from "@/data/testimonials";
import { testimonialsSectionContent } from "@/lib/testimonials-section-content";
import type { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";

/* ─── Star rating ─────────────────────────────────────────────────── */

function StarRating({ rating }: { rating: Testimonial["rating"] }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex items-center gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 12 12"
          className={cn(
            "size-3 shrink-0",
            i < rating ? "fill-copper text-copper" : "fill-fog text-fog"
          )}
        >
          <path d="M6 0l1.545 3.532L11.196 4l-2.598 2.532.614 3.578L6 8.4l-3.212 1.71.614-3.578L.804 4l3.651-.468L6 0z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Opening quotation mark ──────────────────────────────────────── */

function QuoteMark() {
  return (
    <span
      aria-hidden
      className={cn(
        "block font-display text-[4.5rem] leading-none text-copper/20",
        "mb-1 -mt-3 select-none sm:text-[5rem]"
      )}
    >
      &ldquo;
    </span>
  );
}

/* ─── Individual card ─────────────────────────────────────────────── */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      data-slot="testimonial-card"
      className={cn(
        /* Surface */
        "group/card relative flex flex-col rounded-2xl bg-card",
        "ring-1 ring-border/60 shadow-sm shadow-night/[0.06]",
        /* Spacing */
        "px-6 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6",
        /* Hover lift — CSS only, no motion dep needed on the card itself */
        "transition-[box-shadow,transform] duration-500 ease-out",
        "hover:-translate-y-1 hover:shadow-md hover:shadow-night/10",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
    >
      {/* Decorative quote mark */}
      <QuoteMark />

      {/* Star rating */}
      <StarRating rating={testimonial.rating} />

      {/* Quote */}
      <blockquote className="mt-4 flex-1">
        <BodyText
          tone="default"
          spacing="none"
          className={cn(
            "text-pretty text-[0.9375rem] leading-[1.72] text-foreground/85",
            "sm:text-body sm:leading-[1.7]"
          )}
        >
          {testimonial.quote}
        </BodyText>
      </blockquote>

      {/* Divider */}
      <div className="mt-5 h-px w-full bg-border/50 sm:mt-6" aria-hidden />

      {/* Attribution */}
      <footer className="mt-4 flex flex-col gap-0.5 sm:mt-5">
        <p className="font-display text-base font-medium leading-tight text-foreground sm:text-[1.0625rem]">
          {testimonial.name}
        </p>
        <p className="text-small text-stone">
          {testimonial.city}
          <span
            aria-hidden
            className="mx-2 text-mist"
          >
            ·
          </span>
          <span className="text-stone/80">
            {testimonial.stayLabel}, {testimonial.stayDate}
          </span>
        </p>
      </footer>
    </article>
  );
}

/* ─── Review platform strip ───────────────────────────────────────── */

function ReviewPlatformStrip() {
  return (
    <div
      className={cn(
        "mt-stack-lg flex flex-col items-center gap-2 border-t border-border/40 pt-stack-md",
        "sm:mt-stack-xl sm:pt-stack-lg"
      )}
    >
      <p className="text-small font-medium text-stone">
        Consistently rated 5 stars across
      </p>
      <div
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        aria-label="Review platforms"
      >
        {/* Google */}
        <div className="flex items-center gap-1.5 text-stone/70">
          <svg
            aria-label="Google"
            role="img"
            viewBox="0 0 24 24"
            className="size-4 shrink-0"
            fill="currentColor"
          >
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          <span className="text-small font-medium">Google</span>
        </div>

        <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />

        {/* Booking.com placeholder */}
        <div className="flex items-center gap-1.5 text-stone/70">
          <svg
            aria-label="Booking.com"
            role="img"
            viewBox="0 0 24 24"
            className="size-4 shrink-0"
            fill="currentColor"
          >
            <path d="M17.267 15.264a5.77 5.77 0 0 1-5.76-5.762 5.77 5.77 0 0 1 5.76-5.76 5.769 5.769 0 0 1 5.76 5.76 5.77 5.77 0 0 1-5.76 5.762zm0-9.42a3.663 3.663 0 0 0-3.657 3.658 3.663 3.663 0 0 0 3.657 3.659 3.663 3.663 0 0 0 3.659-3.659 3.663 3.663 0 0 0-3.659-3.657zM6.733 15.264A5.77 5.77 0 0 1 .973 9.502a5.77 5.77 0 0 1 5.76-5.76 5.77 5.77 0 0 1 5.76 5.76 5.77 5.77 0 0 1-5.76 5.762zm0-9.42A3.663 3.663 0 0 0 3.076 9.5a3.663 3.663 0 0 0 3.657 3.659A3.663 3.663 0 0 0 10.39 9.5 3.663 3.663 0 0 0 6.733 5.844zM12 20.257a5.77 5.77 0 0 1-5.76-5.76 5.77 5.77 0 0 1 5.76-5.76 5.77 5.77 0 0 1 5.76 5.76A5.77 5.77 0 0 1 12 20.257zm0-9.42a3.663 3.663 0 0 0-3.657 3.66A3.663 3.663 0 0 0 12 18.155a3.663 3.663 0 0 0 3.659-3.659A3.663 3.663 0 0 0 12 10.837z" />
          </svg>
          <span className="text-small font-medium">Booking.com</span>
        </div>

        <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />

        {/* MakeMyTrip */}
        <div className="flex items-center gap-1.5 text-stone/70">
          <svg
            aria-label="MakeMyTrip"
            role="img"
            viewBox="0 0 24 24"
            className="size-4 shrink-0"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5h-9A.5.5 0 0 1 7 16v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5zM9 9.5v5h6v-5H9z" />
          </svg>
          <span className="text-small font-medium">MakeMyTrip</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export function TestimonialsSection() {
  const testimonials = getAllTestimonials();

  const sectionVariants = useAccessibleVariants(
    staggerContainer,
    staggerContainerReduced
  );
  const itemVariants = useAccessibleVariants(staggerItem, staggerItemReduced);

  return (
    <Section
      id="testimonials"
      spacing="default"
      background="default"
      container={{ size: "default" }}
      className="scroll-mt-[var(--scroll-anchor-offset)]"
      aria-labelledby="testimonials-heading"
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
            "sm:mb-stack-xl sm:pb-stack-lg"
          )}
        >
          <motion.div variants={itemVariants}>
            <Overline tone="accent" spacing="none">
              {testimonialsSectionContent.overline}
            </Overline>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <SectionHeading spacing="none" id="testimonials-heading">
              {testimonialsSectionContent.heading}
            </SectionHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 sm:mt-4">
            <LeadText
              tone="muted"
              spacing="none"
              className="max-w-prose text-pretty leading-relaxed"
            >
              {testimonialsSectionContent.intro}
            </LeadText>
          </motion.div>
        </motion.header>

        {/* ── Testimonial grid ── */}
        <motion.div
          className={cn(
            "grid grid-cols-1 gap-stack-md",
            "sm:gap-stack-lg",
            "md:grid-cols-2 md:gap-6",
            "lg:grid-cols-3 lg:gap-7"
          )}
          role="list"
          aria-label="Guest testimonials"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              role="listitem"
              variants={itemVariants}
              className="min-w-0"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Platform strip ── */}
        <motion.div variants={itemVariants}>
          <ReviewPlatformStrip />
        </motion.div>
      </motion.div>
    </Section>
  );
}
