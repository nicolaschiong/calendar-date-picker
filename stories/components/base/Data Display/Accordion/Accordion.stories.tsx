import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Accordion } from "./Accordion"

export default {
  title: "Data Display/Accordion",
  component: Accordion,
  argTypes: {
    radius: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Image radius, 0 by default",
    },
  },
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  items: [
    { control: "Hello", panel: "World" },
    {
      control: "Yow",
      panel: (
        <>
          <button>Test</button>
          <button>Test</button>
          <button>Test</button>
          <button>Test</button>
          <button>Test</button>
        </>
      ),
    },
  ],
}
