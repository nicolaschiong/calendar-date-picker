import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import styled from "@emotion/styled"

import { DateInput } from "./DateInput"

const DateInputLayout = styled.div`
  margin-top: 300px;
`
export default {
  title: "Inputs/DateInput",
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: "Free form date input        ",
      },
    },
    layout: "centered",
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
} as ComponentMeta<typeof DateInput>

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInputLayout>
    <DateInput {...args} />
  </DateInputLayout>
)

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  label: "Date",
  placeholder: "Select Date",
  error: false,
}

export const DateInputError = Template.bind({})
DateInputError.storyName = "error"
DateInputError.args = {
  label: "Date",
  placeholder: "Select Date",
  error: true,
}
