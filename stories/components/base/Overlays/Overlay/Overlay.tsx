import React from "react"
import { Overlay as MantineOverlay, OverlayProps } from "@mantine/core"

export interface ComponentProps extends OverlayProps {}

export const Overlay = ({ ...props }: ComponentProps) => {
  return <MantineOverlay {...props}>{props.children}</MantineOverlay>
}
