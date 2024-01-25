import React, { ReactNode } from "react"
import { Accordion as AccordionProvider } from "@mantine/core"

export interface AccordionProps {
  chevronPosition: "left" | "right"
  chevronSize: string | number
  multiple: boolean
  radius?: number | "xs" | "sm" | "md" | "lg" | "xl"
  variant: "default" | "contained" | "filled" | "separated"
  items: any
}

export const Accordion = ({
  chevronPosition,
  chevronSize,
  multiple,
  radius,
  variant,
  items,
  ...props
}: AccordionProps) => {
  return (
    <AccordionProvider
      chevronPosition={chevronPosition}
      chevronSize={chevronSize}
      multiple={multiple}
      radius={radius}
      variant={variant}
      {...props}
    >
      {items.map((item: any) => (
        <AccordionProvider.Item value={item.control}>
          <AccordionProvider.Control>{item.control}</AccordionProvider.Control>
          <AccordionProvider.Panel>{item.panel}</AccordionProvider.Panel>
        </AccordionProvider.Item>
      ))}
    </AccordionProvider>
  )
}
