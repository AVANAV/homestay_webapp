import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const toneVariants = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  subtle: "text-stone",
  onDark: "text-parchment",
  accent: "text-copper",
} as const;

const displayHeadingVariants = cva(
  [
    "font-display text-display font-medium text-balance text-pretty",
    "max-w-[22ch] sm:max-w-none",
  ],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mb-stack-md",
      },
    },
    defaultVariants: {
      tone: "default",
      spacing: "default",
    },
  }
);

const sectionHeadingVariants = cva(
  ["font-display text-h2 font-medium text-balance text-pretty"],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mb-stack-sm",
      },
    },
    defaultVariants: {
      tone: "default",
      spacing: "default",
    },
  }
);

const sectionSubheadingVariants = cva(
  ["font-display text-h3 font-medium text-pretty"],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mb-stack-xs",
      },
    },
    defaultVariants: {
      tone: "default",
      spacing: "default",
    },
  }
);

const bodyTextVariants = cva(
  [
    "font-sans text-[0.9375rem] leading-[1.7] sm:text-body",
    "text-pretty max-w-prose",
  ],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mb-stack-sm last:mb-0",
      },
    },
    defaultVariants: {
      tone: "default",
      spacing: "default",
    },
  }
);

const leadTextVariants = cva(
  [
    "font-sans text-lead font-normal text-pretty max-w-prose",
    "leading-[1.65] sm:leading-[var(--text-lead--line-height)]",
  ],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mb-stack",
      },
    },
    defaultVariants: {
      tone: "muted",
      spacing: "default",
    },
  }
);

const overlineVariants = cva(
  [
    "font-sans text-overline font-medium uppercase tracking-[0.14em]",
    "block",
  ],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mb-stack-xs",
      },
    },
    defaultVariants: {
      tone: "accent",
      spacing: "default",
    },
  }
);

const captionTextVariants = cva(
  [
    "font-sans text-caption font-medium uppercase tracking-wide",
    "text-pretty",
  ],
  {
    variants: {
      tone: toneVariants,
      spacing: {
        none: "",
        default: "mt-stack-xs",
      },
    },
    defaultVariants: {
      tone: "subtle",
      spacing: "default",
    },
  }
);

type Tone = keyof typeof toneVariants;
type Spacing = "none" | "default";

type TypographyBaseProps<T extends React.ElementType> = {
  asChild?: boolean;
  tone?: Tone;
  spacing?: Spacing;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "className">;

function DisplayHeading({
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: TypographyBaseProps<"h1">) {
  const Comp = asChild ? Slot.Root : "h1";
  return (
    <Comp
      data-slot="display-heading"
      className={cn(displayHeadingVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

type SectionHeadingProps = TypographyBaseProps<"h2"> & {
  as?: "h2" | "h3";
};

function SectionHeading({
  as: Tag = "h2",
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: SectionHeadingProps) {
  const Comp = asChild ? Slot.Root : Tag;
  return (
    <Comp
      data-slot="section-heading"
      className={cn(sectionHeadingVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

type SectionSubheadingProps = TypographyBaseProps<"h3"> & {
  as?: "h3" | "h4";
};

function SectionSubheading({
  as: Tag = "h3",
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: SectionSubheadingProps) {
  const Comp = asChild ? Slot.Root : Tag;
  return (
    <Comp
      data-slot="section-subheading"
      className={cn(sectionSubheadingVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

function BodyText({
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: TypographyBaseProps<"p">) {
  const Comp = asChild ? Slot.Root : "p";
  return (
    <Comp
      data-slot="body-text"
      className={cn(bodyTextVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

function LeadText({
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: TypographyBaseProps<"p">) {
  const Comp = asChild ? Slot.Root : "p";
  return (
    <Comp
      data-slot="lead-text"
      className={cn(leadTextVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

function Overline({
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: TypographyBaseProps<"p">) {
  const Comp = asChild ? Slot.Root : "p";
  return (
    <Comp
      data-slot="overline"
      className={cn(overlineVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

type CaptionTextProps = TypographyBaseProps<"figcaption"> & {
  as?: "figcaption" | "p" | "span";
};

function CaptionText({
  as: Tag = "figcaption",
  asChild = false,
  className,
  tone,
  spacing,
  ...props
}: CaptionTextProps) {
  const Comp = asChild ? Slot.Root : Tag;
  return (
    <Comp
      data-slot="caption-text"
      className={cn(captionTextVariants({ tone, spacing, className }))}
      {...props}
    />
  );
}

export {
  DisplayHeading,
  SectionHeading,
  SectionSubheading,
  BodyText,
  LeadText,
  Overline,
  CaptionText,
  displayHeadingVariants,
  sectionHeadingVariants,
  sectionSubheadingVariants,
  bodyTextVariants,
  leadTextVariants,
  overlineVariants,
  captionTextVariants,
};
