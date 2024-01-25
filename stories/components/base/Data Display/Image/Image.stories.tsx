import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Image } from "./Image"

export default {
  title: "Data Display/Image",
  component: Image,
  argTypes: {
    radius: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Image radius, 0 by default",
    },
    fit: {
      control: "select",
      options: ["contain", "fill", "-moz-initial", "inherit", "initial", "revert", "unset", "none", "cover", "scale-down"],
      description: "Image object-fit property",
    },
    maxWidth: {
      control: "number",
      description: "Style props - Image maxWidth",
    },
    alt: {
      description: "Image alt text, used as title for placeholder if image was not loaded",
    },
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  maxWidth: 240,
  radius: "md",
  alt: "demo image",
  src: "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
}
