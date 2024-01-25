import React from "react"
import { FileButton } from "./FileButton"

export default {
  title: "Buttons/ FileButton",
  component: FileButton,
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

const Template = (args) => <FileButton {...args} />

export const Default = Template.bind({})
Default.storyName = "Default"
Default.args = {
  primary: true,
  children: "Upload File",
}
