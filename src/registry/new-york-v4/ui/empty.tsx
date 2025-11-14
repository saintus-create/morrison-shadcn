import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const emptyVariants = cva(
  "flex flex-1 flex-col items-center justify-center text-center",
  {
    variants: {
      variant: {
        default: "",
        subtle: "bg-muted/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const emptyHeaderVariants = cva("flex flex-col items-center", {
  defaultVariants: {},
})

const emptyTitleVariants = cva(
  "text-lg font-semibold",
  {
    defaultVariants: {},
  }
)

const emptyDescriptionVariants = cva(
  "text-sm text-muted-foreground",
  {
    defaultVariants: {},
  }
)

const emptyMediaVariants = cva("mb-4", {
  defaultVariants: {},
})

const emptyContentVariants = cva("flex justify-center", {
  defaultVariants: {},
})

export interface EmptyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyVariants> {}

export interface EmptyHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyHeaderVariants> {}

export interface EmptyTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof emptyTitleVariants> {}

export interface EmptyDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof emptyDescriptionVariants> {}

export interface EmptyMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyMediaVariants> {}

export interface EmptyContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyContentVariants> {}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(emptyVariants({ variant }), className)}
      {...props}
    />
  )
)
Empty.displayName = "Empty"

const EmptyHeader = React.forwardRef<HTMLDivElement, EmptyHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(emptyHeaderVariants(), className)}
      {...props}
    />
  )
)
EmptyHeader.displayName = "EmptyHeader"

const EmptyTitle = React.forwardRef<HTMLHeadingElement, EmptyTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(emptyTitleVariants(), className)}
      {...props}
    />
  )
)
EmptyTitle.displayName = "EmptyTitle"

const EmptyDescription = React.forwardRef<HTMLParagraphElement, EmptyDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(emptyDescriptionVariants(), className)}
      {...props}
    />
  )
)
EmptyDescription.displayName = "EmptyDescription"

const EmptyMedia = React.forwardRef<HTMLDivElement, EmptyMediaProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(emptyMediaVariants(), className)}
      {...props}
    />
  )
)
EmptyMedia.displayName = "EmptyMedia"

const EmptyContent = React.forwardRef<HTMLDivElement, EmptyContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(emptyContentVariants(), className)}
      {...props}
    />
  )
)
EmptyContent.displayName = "EmptyContent"

export {
  Empty,
  EmptyHeader,
  EmptyFooter,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  EmptyContent,
}

function EmptyFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-center p-4 pt-0", className)}
      {...props}
    />
  )
}