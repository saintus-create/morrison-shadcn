import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputGroupVariants = cva("flex w-full", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

const inputGroupInputVariants = cva(
  "relative flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        filled: "border-none bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const inputGroupAddonVariants = cva(
  "flex items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground ring-offset-background",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-none bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const inputGroupButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const inputGroupTextVariants = cva(
  "flex items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium text-muted-foreground ring-offset-background"
)

const inputGroupTextareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        filled: "border-none bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {}

export interface InputGroupInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputGroupInputVariants> {}

export interface InputGroupAddonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupAddonVariants> {}

export interface InputGroupButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof inputGroupButtonVariants> {}

export interface InputGroupTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupTextVariants> {}

export interface InputGroupTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputGroupTextareaVariants> {}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, orientation, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(inputGroupVariants({ orientation }), className)}
      {...props}
    />
  )
)
InputGroup.displayName = "InputGroup"

const InputGroupInput = React.forwardRef<HTMLInputElement, InputGroupInputProps>(
  ({ className, variant, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(inputGroupInputVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
)
InputGroupInput.displayName = "InputGroupInput"

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(inputGroupAddonVariants({ variant }), className)}
      {...props}
    />
  )
)
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupButton = React.forwardRef<HTMLButtonElement, InputGroupButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(inputGroupButtonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  )
)
InputGroupButton.displayName = "InputGroupButton"

const InputGroupText = React.forwardRef<HTMLDivElement, InputGroupTextProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(inputGroupTextVariants(), className)}
      {...props}
    />
  )
)
InputGroupText.displayName = "InputGroupText"

const InputGroupTextarea = React.forwardRef<HTMLTextAreaElement, InputGroupTextareaProps>(
  ({ className, variant, ...props }, ref) => (
    <textarea
      className={cn(inputGroupTextareaVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
)
InputGroupTextarea.displayName = "InputGroupTextarea"

export {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
}