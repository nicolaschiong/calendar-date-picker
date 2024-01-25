import React from "react"
import "./Card.css"
import { Card as MantineCard, Text, Group } from "@mantine/core"
import { Image } from "../Image/Image"
import { Button } from "../../Buttons/Button"

export interface CardProps {
  onClick?: () => void
  padding: number | "xs" | "sm" | "md" | "lg" | "xl"
  radius: number | "xs" | "sm" | "md" | "lg" | "xl"
  shadow: "xs" | "sm" | "md" | "lg" | "xl"
  withBorder?: boolean
  heading?: any
  content?: string
  ctaLabel?: string
  image?: string
  children: any
}

export const Card = ({
  padding,
  radius,
  shadow,
  withBorder,
  heading,
  content,
  image,
  ctaLabel,
  children,
  onClick,
  ...props
}: CardProps) => {
  return (
    <MantineCard shadow={shadow} padding={padding} radius={radius} withBorder>
      {image && (
        <MantineCard.Section>
          <Image src={image} height={160} alt="Norway" />
        </MantineCard.Section>
      )}

      <Group position="apart" mt="md" mb="xs">
        <Text weight={600}>{heading}</Text>
      </Group>
      <Text size="sm" color="dimmed">
        {content}
      </Text>

      <div className="childrenContainer">{children}</div>

      {ctaLabel && (
        <div className="buttonContainer">
          <Button
            radius="xl"
            size="md"
            uppercase
            variant="default"
            display="block"
            onClick={onClick}
          >
            {ctaLabel}
          </Button>
        </div>
      )}
    </MantineCard>
  )
}
