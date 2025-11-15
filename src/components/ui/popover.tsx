import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const popoverVariants = cva(
  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
  {
    variants: {
      align: {
        center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        start: "left-0",
        end: "right-0",
      },
      side: {
        top: "bottom-full mb-2",
        right: "left-full ml-2 top-0",
        bottom: "top-full mt-2",
        left: "right-full mr-2 top-0",
      },
    },
    defaultVariants: {
      align: "center",
      side: "top",
    },
  }
)

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    VariantProps<typeof popoverVariants>
>(({ className, align = "center", side = "top", ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={4}
      className={cn(popoverVariants({ align, side }), className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }