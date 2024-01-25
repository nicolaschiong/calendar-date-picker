import React from "react"
import { ActionIcon } from "./ActionIcon"
import { IconFlask } from "@tabler/icons-react"
import { Center } from "@mantine/core"

export default {
  title: "Buttons/ ActionIcon",
  component: ActionIcon,
  args: {
    radius: "xl",
    size: "md",
    disabled: false,
    loading: false,
    variant: "default",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size",
    },
    radius: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button radius",
    },
    variant: {
      control: "inline-radio",
      options: ["filled", "light", "outline", "default", "subtle"],
      description: "Button styling",
    },
    disabled: {
      control: "boolean",
      description: "Button disabled state",
    },
    loading: {
      control: "boolean",
      description: "Button Icon loading state",
    },
    children: { control: "text", description: "Button contents" },
  },
}

const Template = (args) => <ActionIcon {...args} />

export const Default = Template.bind({})
Default.storyName = "Default"
Default.args = {
  radius: "xl",
  size: "md",
  disabled: false,
  loading: false,
  children: "+",
}

const IconVariants = (args) => (
  <Center>
    <ActionIcon variant="transparent">
      <IconFlask size="1rem" />
    </ActionIcon>
    <ActionIcon variant="subtle">
      <IconFlask size="1rem" />
    </ActionIcon>
    <ActionIcon variant="default">
      <IconFlask size="1rem" />
    </ActionIcon>
    <ActionIcon variant="outline">
      <IconFlask size="1rem" />
    </ActionIcon>
    <ActionIcon variant="filled">
      <IconFlask size="1rem" />
    </ActionIcon>
    <ActionIcon variant="light">
      <IconFlask size="1rem" />
    </ActionIcon>
  </Center>
)

export const Variants = IconVariants.bind({})
Variants.storyName = "Variants"
