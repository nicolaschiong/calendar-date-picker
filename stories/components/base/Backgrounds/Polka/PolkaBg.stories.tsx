import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { PolkaBg } from "./PolkaBg"
import { Center } from "../../Layouts/Center/Center"

export default {
  title: "Backgrounds/PolkaBg",
  component: PolkaBg,
  parameters: {
    docs: {
      description: {
        component: "Applies Polka background styling",
      },
    },
  },
} as ComponentMeta<typeof PolkaBg>

const Template: ComponentStory<typeof PolkaBg> = (args) => <PolkaBg {...args} />

export const Default = Template.bind({})
Default.storyName = "background"
Default.args = {
  children: (
    <Center>
      <h1>This text is centered</h1>
    </Center>
  ),
}
