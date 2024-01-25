import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Autocomplete } from "./Autocomplete"

export default {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: "Autocomplete user input with any list of options",
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
      description: "Placeholder text",
    },
    data: {
      control: "object",
      description: "flex-direction CSS property",
    },
  },
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  label: "This is a label",
  placeholder: "This is a placeholder",
  data: ["Action 1", "Action 2"],
}
