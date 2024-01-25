import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TextInput } from "./TextInput"

export default {
  title: "Inputs/TextInput",
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: "Capture string input from user",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Input label, displayed before input",
    },
    placeholder: {
      control: "text",
      description: "column-gap CSS property",
    },
    description: {
      control: "text",
      description: "Input description, displayed after label",
    },
    data: {
      control: "object",
      description: "flex-direction CSS property",
    },
  },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  label: "This is a label",
  placeholder: "This is a placeholder",
  description: "This is a description",
  data: ["Action 1", "Action 2"],
}
