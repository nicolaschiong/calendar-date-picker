import React from "react"
import { DateTimePicker } from "./DateTimePicker"

export default {
  title: "Dates/ DateTimePicker",
  component: DateTimePicker,
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
      description: "DateTimePicker size",
    },
    radius: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "DateTimePicker radius",
    },
    display: {
      control: "inline-radio",
      options: ["block", "inline"],
      description: "DateTimePicker display",
    },
    variant: {
      control: "inline-radio",
      options: ["filled", "light", "outline", "default", "subtle", "secondary", "basic"],
      description: "DateTimePicker styling",
    },
    disabled: {
      control: "boolean",
      description: "DateTimePicker disabled state",
    },
    uppercase: {
      control: "boolean",
      description: "DateTimePicker children text-transform set to uppercase",
    },
    compact: {
      control: "boolean",
      description: "Removes DateTimePicker children padding",
    },
    loading: {
      control: "boolean",
      description: "DateTimePicker loading state",
    },
    children: { control: "text", description: "DateTimePicker label content" },
  },
  parameters: {
    docs: {
      description: {
        component: "Base component for custom date pickers        ",
      },
    },
  },
}

const Template = (args) => <DateTimePicker {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  uppercase: true,
  radius: "xl",
  size: "md",
  disabled: false,
  variant: "default",
  compact: false,
  display: "block",
  children: "DateTimePicker Primary",
}
