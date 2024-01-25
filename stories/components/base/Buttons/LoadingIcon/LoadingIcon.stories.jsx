import React from "react"
import { LoadingIcon } from "./LoadingIcon"

export default {
  title: "Buttons/ LoadingIcon",
  component: LoadingIcon,
}

const Template = (args) => <LoadingIcon {...args} />

export const Default = Template.bind({})
Default.storyName = "Default"
Default.args = {}
