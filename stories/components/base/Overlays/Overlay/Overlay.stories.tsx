import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Overlay } from "./Overlay"
import { AspectRatio, Image, Button } from "@mantine/core"
// import { Button } from "../.."

export default {
  title: "Overlays/Overlay",
  component: Overlay,
  parameters: {
    docs: {
      description: {
        component: "Overlays parent element with div element with any color and opacity",
      },
    },
  },
} as ComponentMeta<typeof Overlay>

const Template: ComponentStory<typeof Overlay> = (args) => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <Image src="https://cdn.vox-cdn.com/thumbor/wfbQ3XccV6SxGMt1l6zBPL3Xg7o=/0x0:1192x795/1400x1050/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg" />
        {visible && <Overlay {...args} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle Overlay
      </Button>
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {}
