import React from "react"
import classnames from "classnames"
import "./Button.css"
import "../../../../global.css"
import { LoadingIcon } from "../../Buttons"
import { ButtonProps, Button as MantineButton } from "@mantine/core"

export interface ButtonComponentProps extends ButtonProps {
  type?: any
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant: "filled" | "light" | "outline" | "default" | "subtle" | "secondary" | "basic"
  display?: "block" | "inline"
  radius: "xs" | "sm" | "md" | "lg" | "xl"
  disabled?: boolean | undefined
  uppercase?: boolean
  compact?: boolean
  primary?: boolean
  loading?: boolean
  onClick?: () => void
  children: any
}

export const Button = ({ type, size, variant, display, radius, disabled, uppercase, compact, loading, onClick, children, ...props }: ButtonComponentProps) => {
  return (
    <MantineButton
      type={type}
      className={classnames(
        "button",
        `size_${size}`,
        "primary",
        `radius_${radius}`,
        { inline: display === "inline" },
        { block: display === "block" },
        { light: variant === "light" },
        { secondary: variant === "secondary" },
        { basic: variant === "basic" },
        { uppercase: uppercase },
        { compact: compact },
        { disabled: disabled }
      )}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {loading ? <LoadingIcon /> : <> {children}</>}
    </MantineButton>
  )
}
