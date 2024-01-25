import React from "react"
import { DatePicker } from "./DatePicker"

export default {
  title: "Dates/ DatePicker",
  component: DatePicker,
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "Inline date, multiple dates and dates range picker",
      },
    },
  },
}

const Template = (args) => <DatePicker {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {}
