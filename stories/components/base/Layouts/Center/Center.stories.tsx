import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Center } from "./Center"

export default {
  title: "Layouts/Center",
  component: Center,
  parameters: {
    docs: {
      description: {
        component: "Centers content vertically and horizontally",
      },
    },
  },
} as ComponentMeta<typeof Center>

const Template: ComponentStory<typeof Center> = (args) => <Center {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  children: <h1 style={{ fontFamily: "Avenir", fontWeight: 500 }}>I am centered</h1>,
}
