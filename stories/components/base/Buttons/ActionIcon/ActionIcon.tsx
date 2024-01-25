import React from "react"
import { ActionIcon as ActionButton } from "@mantine/core"

import "./ActionIcon.css"

export interface ActionIconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant: "filled" | "light" | "outline" | "default" | "subtle" | "secondary" | "basic"
  radius: "xs" | "sm" | "md" | "lg" | "xl"
  disabled: boolean
  loading: boolean
  onClick?: () => void
  children: any
}

export const ActionIcon = ({ size, variant, radius, disabled, loading, onClick, children, ...props }: ActionIconProps) => {
  return (
    <ActionButton size={size} radius={radius} variant={variant} disabled={disabled} loading={loading} color={"pink"} {...props}>
      {children}
    </ActionButton>
  )
}
