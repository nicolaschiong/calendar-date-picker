import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Flex } from "./Flex"

export default {
  title: "Layouts/Flex",
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: "Compose elements in a flex container",
      },
    },
  },
  argTypes: {
    align: {
      control: "inline-radio",
      description: "align-items CSS property",
    },
    columnGap: {
      control: "inline-radio",
      description: "column-gap CSS property",
    },
    direction: {
      control: "inline-radio",
      description: "flex-direction CSS property",
    },
    gap: {
      control: "inline-radio",
      description: "gap CSS property",
    },
    justify: {
      control: "inline-radio",
      description: "justify-content CSS property",
    },
    rowGap: {
      control: "inline-radio",
      description: "row-gap CSS property",
    },
    wrap: {
      control: "inline-radio",
      description: "flex-wrap CSS property",
    },
  },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  children: (
    <>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </>
  ),
}
