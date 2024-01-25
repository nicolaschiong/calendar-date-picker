import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Sticky } from "./Sticky"

export default {
  title: "Layouts/Sticky",
  component: Sticky,
  parameters: {
    docs: {
      description: {
        component: "Compose elements in a sticky container",
      },
    },
  },
} as ComponentMeta<typeof Sticky>

const Template: ComponentStory<typeof Sticky> = (args) => <Sticky {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  offsetTop: 20,
  offsetBottom: 20,
  disabled: false,
  children: (
    <>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </>
  ),
}
