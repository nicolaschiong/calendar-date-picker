import React from "react"
import { Button } from "./Button"

export default {
  title: "Buttons/ Button",
  component: Button,
  args: {
    uppercase: true,
    radius: "xl",
    size: "md",
    disabled: false,
    variant: "default",
    compact: false,
    loading: false,
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
    display: {
      control: "inline-radio",
      options: ["block", "inline"],
      description: "Button display",
    },
    variant: {
      control: "inline-radio",
      options: ["filled", "light", "outline", "default", "subtle", "secondary", "basic"],
      description: "Button styling",
    },
    disabled: {
      control: "boolean",
      description: "Button disabled state",
    },
    uppercase: {
      control: "boolean",
      description: "Button children text-transform set to uppercase",
    },
    compact: {
      control: "boolean",
      description: "Removes button children padding",
    },
    loading: {
      control: "boolean",
      description: "Button loading state",
    },
    children: { control: "text", description: "Button label content" },
  },
  parameters: {
    docs: {
      description: {
        component: " button",
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.storyName = "Primary"
Primary.args = {
  uppercase: true,
  radius: "xl",
  size: "md",
  disabled: false,
  variant: "default",
  compact: false,
  display: "block",
  children: "Button Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  radius: "xl",
  size: "md",
  children: "Button Secondary",
  variant: "secondary",
}

export const XSmall = Template.bind({})
XSmall.args = {
  size: "xs",
  children: "Button XSmall",
}

export const Small = Template.bind({})
Small.args = {
  size: "sm",
  children: "Button Small",
}
