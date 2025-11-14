import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const itemVariants = cva(
  "flex items-center space-x-4 rounded-md p-4 border",
  {
    variants: {
      variant: {
        default: "bg-card",
        subtle: "bg-muted/50 border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const itemMediaVariants = cva("flex-shrink-0", {
  defaultVariants: {},
})

const itemContentVariants = cva("flex-1", {
  defaultVariants: {},
})

const itemTitleVariants = cva(
  "text-sm font-medium leading-none",
  {
    defaultVariants: {},
  }
)

const itemDescriptionVariants = cva(
  "text-sm text-muted-foreground",
  {
    defaultVariants: {},
  }
)

const itemActionsVariants = cva(
  "flex items-center space-x-2",
  {
    defaultVariants: {},
  }
)

export interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {}

export interface ItemMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemMediaVariants> {}

export interface ItemContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemContentVariants> {}

export interface ItemTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof itemTitleVariants> {}

export interface ItemDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof itemDescriptionVariants> {}

export interface ItemActionsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemActionsVariants> {}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(itemVariants({ variant }), className)}
      {...props}
    />
  )
)
Item.displayName = "Item"

const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(itemMediaVariants(), className)}
      {...props}
    />
  )
)
ItemMedia.displayName = "ItemMedia"

const ItemContent = React.forwardRef<HTMLDivElement, ItemContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(itemContentVariants(), className)}
      {...props}
    />
  )
)
ItemContent.displayName = "ItemContent"

const ItemTitle = React.forwardRef<HTMLHeadingElement, ItemTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(itemTitleVariants(), className)}
      {...props}
    />
  )
)
ItemTitle.displayName = "ItemTitle"

const ItemDescription = React.forwardRef<HTMLParagraphElement, ItemDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(itemDescriptionVariants(), className)}
      {...props}
    />
  )
)
ItemDescription.displayName = "ItemDescription"

const ItemActions = React.forwardRef<HTMLDivElement, ItemActionsProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(itemActionsVariants(), className)}
      {...props}
    />
  )
)
ItemActions.displayName = "ItemActions"

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
}