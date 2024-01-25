import React, { ReactNode } from "react"
import { Image as MantineImage } from "@mantine/core"

export interface ImageProps {
  radius?: number | "xs" | "sm" | "md" | "lg" | "xl"
  fit?:
    | "contain"
    | "fill"
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "none"
    | "cover"
    | "scale-down"
  maxWidth?: number
  height?: number | string
  inlineFlex?: boolean
  src: string
  alt: string
  caption?: ReactNode
  withPlaceholder?: boolean
}

export const Image = ({
  radius,
  fit,
  maxWidth,
  src,
  alt,
  caption,
  height,
  inlineFlex,
  ...props
}: ImageProps) => {
  return (
    <MantineImage
      maw={maxWidth}
      h={height}
      radius={radius}
      fit={fit}
      mx="auto"
      alt={alt}
      src={src}
      caption={caption}
      withPlaceholder
    />
  )
}
