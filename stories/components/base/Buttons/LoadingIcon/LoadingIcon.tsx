import React from "react"
import { Loader as MantineLoader } from "@mantine/core"

export interface LoadingIconProps {
  onClick?: () => void
  children?: any
}

export const LoadingIcon = ({
  onClick,
  children,
  ...props
}: LoadingIconProps) => {
  return <MantineLoader size="xs" color="gray.0" />
}
