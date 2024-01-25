import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Card } from "./Card"

export default {
  title: "Data Display/Card",
  component: Card,
  args: {
    padding: "xl",
    radius: "lg",
    shadow: "xl",
  },
  argTypes: {
    padding: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size",
    },
    radius: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button radius",
    },
    shadow: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button radius",
    },
    withBorder: {
      control: "boolean",
      description: "Adds border styles",
    },
    heading: { control: "text", description: "Card heading" },
    content: { control: "text", description: "Card content" },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  heading: "Welcome to NextGen",
  content: "Your lab results have arrived and are ready for viewing. Please enter your Last Name and Date of Birth to continue.",
  padding: "xl",
  radius: "lg",
  shadow: "xl",
  ctaLabel: "View Results ",
}
