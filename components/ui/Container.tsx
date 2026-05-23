import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      /** Default editorial width — room for split layouts & imagery */
      default: "max-w-homestay",
      /** Ultra-wide hero and gallery bands */
      cinema: "max-w-cinema",
      /** Long-form copy and forms */
      prose: "max-w-prose",
      /** Focused modules: cards, CTAs, narrow columns */
      narrow: "max-w-container-2xl",
    },
    padding: {
      default: "px-gutter",
      none: "",
    },
  },
  defaultVariants: {
    size: "default",
    padding: "default",
  },
});

type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
  };

function Container({
  className,
  size,
  padding,
  asChild = false,
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      data-slot="container"
      data-size={size ?? "default"}
      className={cn(containerVariants({ size, padding, className }))}
      {...props}
    />
  );
}

export { Container, containerVariants };
