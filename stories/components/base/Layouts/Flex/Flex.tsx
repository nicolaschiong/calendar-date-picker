import React from "react"
import { Flex as MantineFlex } from "@mantine/core"

export interface FlexProps {
  align: "flex-start" | "center" | "flex-end"
  columnGap: "xs" | "sm" | "md" | "lg" | "xl"
  direction: "row" | "column" | "row-reverse" | "column-reverse"
  gap: "xs" | "sm" | "md" | "lg" | "xl"
  justify: "flex-start" | "center" | "flex-end"
  rowGap: "xs" | "sm" | "md" | "lg" | "xl"
  wrap: "wrap" | "nowrap" | "wrap-reverse"
  bg: string
  children: any
}

export const Flex = ({
  align,
  columnGap,
  direction,
  gap,
  justify,
  rowGap,
  wrap,
  bg,
  children,
  ...props
}: FlexProps) => {
  return (
    <MantineFlex
      mih={50}
      bg={bg}
      columnGap={columnGap}
      gap={gap}
      justify={justify}
      rowGap={rowGap}
      align={align}
      direction={direction}
      wrap={wrap}
    >
      {children}
    </MantineFlex>
  )
}
