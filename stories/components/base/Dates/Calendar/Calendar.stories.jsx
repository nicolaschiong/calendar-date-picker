import React, { useState } from "react"
import { Calendar } from "./Calendar"
import dayjs from "dayjs"

export default {
  title: "Dates/ Calendar",
  component: Calendar,
  args: {
    uppercase: true,
    radius: "xl",
    size: "md",
    disabled: false,
    variant: "default",
    compact: false,
    loading: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Calendar size",
    },
    radius: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Calendar radius",
    },
    display: {
      control: "inline-radio",
      options: ["block", "inline"],
      description: "Calendar display",
    },
    variant: {
      control: "inline-radio",
      options: ["filled", "light", "outline", "default", "subtle", "secondary", "basic"],
      description: "Calendar styling",
    },
    disabled: {
      control: "boolean",
      description: "Calendar disabled state",
    },
    uppercase: {
      control: "boolean",
      description: "Calendar children text-transform set to uppercase",
    },
    compact: {
      control: "boolean",
      description: "Removes Calendar children padding",
    },
    loading: {
      control: "boolean",
      description: "Calendar loading state",
    },
    children: { control: "text", description: "Calendar label content" },
  },
  parameters: {
    docs: {
      description: {
        component: "Base component for custom date pickers        ",
      },
    },
  },
}

const Template = (args) => {
  const [selected, setSelected] = useState([])

  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"))
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, "date")))
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date])
    }
  }

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, "date")),
        onClick: () => handleSelect(date),
      })}
      {...args}
    />
  )
}

export const Default = Template.bind({})
Default.storyName = "default"
Default.args = {
  uppercase: true,
  radius: "xl",
  size: "md",
  disabled: false,
  variant: "default",
  compact: false,
  display: "block",
  children: "Calendar Primary",
}
