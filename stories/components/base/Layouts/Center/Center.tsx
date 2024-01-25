import React from "react"
import { Center as MantineCenter } from "@mantine/core"

export interface CenterProps {
  maxWidth?: number
  height?: number
  inlineFlex?: boolean
  children?: any
}

export const Center = ({
  maxWidth,
  height,
  inlineFlex,
  children,
  ...props
}: CenterProps) => {
  return (
    <MantineCenter maw={maxWidth} h={height} mx="auto">
      {children}
    </MantineCenter>
  )
}
