import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const fieldVariants = cva("space-y-2", {
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex flex-row items-center space-x-3 space-y-0",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

const fieldSetVariants = cva("space-y-4", {
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex flex-col",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

const fieldGroupVariants = cva("space-y-4", {
  defaultVariants: {},
})

const fieldLabelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const fieldLegendVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
)

const fieldTitleVariants = cva(
  "text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const fieldDescriptionVariants = cva(
  "text-sm text-muted-foreground"
)

const fieldSeparatorVariants = cva(
  "h-px w-full bg-border my-4"
)

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {}

export interface FieldSetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldSetVariants> {}

export interface FieldGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldGroupVariants> {}

export interface FieldLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof fieldLabelVariants> {}

export interface FieldLegendProps
  extends React.HTMLAttributes<HTMLLegendElement>,
    VariantProps<typeof fieldLegendVariants> {}

export interface FieldTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldTitleVariants> {}

export interface FieldDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof fieldDescriptionVariants> {}

export interface FieldSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldSeparatorVariants> {}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
)
Field.displayName = "Field"

const FieldSet = React.forwardRef<HTMLDivElement, FieldSetProps>(
  ({ className, orientation, ...props }, ref) => (
    <fieldset
      ref={ref}
      className={cn(fieldSetVariants({ orientation }), className)}
      {...props}
    />
  )
)
FieldSet.displayName = "FieldSet"

const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(fieldGroupVariants(), className)}
      {...props}
    />
  )
)
FieldGroup.displayName = "FieldGroup"

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(fieldLabelVariants(), className)}
      {...props}
    />
  )
)
FieldLabel.displayName = "FieldLabel"

const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ className, ...props }, ref) => (
    <legend
      ref={ref}
      className={cn(fieldLegendVariants(), className)}
      {...props}
    />
  )
)
FieldLegend.displayName = "FieldLegend"

const FieldTitle = React.forwardRef<HTMLDivElement, FieldTitleProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(fieldTitleVariants(), className)}
      {...props}
    />
  )
)
FieldTitle.displayName = "FieldTitle"

const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(fieldDescriptionVariants(), className)}
      {...props}
    />
  )
)
FieldDescription.displayName = "FieldDescription"

const FieldSeparator = React.forwardRef<HTMLDivElement, FieldSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(fieldSeparatorVariants(), className)}
      {...props}
    />
  )
)
FieldSeparator.displayName = "FieldSeparator"

export {
  Field,
  FieldSet,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldTitle,
  FieldDescription,
  FieldSeparator,
}