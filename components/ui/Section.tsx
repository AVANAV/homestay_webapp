import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { Container, containerVariants } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const sectionSpacingVar = {
  none: "0px",
  default: "var(--spacing-section)",
  hero: "var(--spacing-section-lg)",
  compact: "var(--spacing-section-compact)",
} as const;

const sectionVariants = cva(
  [
    "relative isolate w-full",
    "[&_a]:touch-manipulation [&_button]:touch-manipulation",
  ],
  {
    variants: {
      spacing: {
        none: "",
        default: "pt-section pb-section",
        hero: "pt-section-lg pb-section-lg",
        compact: "pt-section-compact pb-section-compact",
      },
      background: {
        default: "bg-background text-foreground",
        muted: "bg-secondary text-secondary-foreground",
        elevated: "bg-card text-card-foreground",
        dark: "bg-night text-parchment [&_a]:text-copper-light",
        transparent: "bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      spacing: "default",
      background: "default",
    },
  }
);

type ContainerOptions = {
  size?: VariantProps<typeof containerVariants>["size"];
  padding?: VariantProps<typeof containerVariants>["padding"];
  className?: string;
};

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    asChild?: boolean;
    /** Wrap children in a centered Container */
    container?: boolean | ContainerOptions;
    /** Consistent vertical rhythm between block-level children */
    stack?: boolean;
    /** Extra bottom inset for notched phones and home-indicator bars */
    safeArea?: boolean;
    contentClassName?: string;
  };

function Section({
  className,
  spacing = "default",
  background,
  asChild = false,
  container: containerProp,
  stack = false,
  safeArea = false,
  contentClassName,
  children,
  ...props
}: SectionProps) {
  const Comp = asChild ? Slot.Root : "section";
  const spacingKey = spacing ?? "default";
  const spacingVar = sectionSpacingVar[spacingKey];

  const inner = stack ? (
    <div
      className={cn(
        "flex w-full flex-col gap-stack sm:gap-stack-md",
        contentClassName
      )}
    >
      {children}
    </div>
  ) : (
    children
  );

  const body = containerProp ? (
    <Container
      {...(typeof containerProp === "object" ? containerProp : {})}
    >
      {inner}
    </Container>
  ) : (
    inner
  );

  return (
    <Comp
      data-slot="section"
      data-spacing={spacingKey}
      data-background={background ?? "default"}
      className={cn(
        sectionVariants({ spacing: spacingKey, background }),
        safeArea &&
          `pb-[calc(${spacingVar}+env(safe-area-inset-bottom,0px))]`,
        className
      )}
      {...props}
    >
      {body}
    </Comp>
  );
}

export { Section, sectionVariants };
