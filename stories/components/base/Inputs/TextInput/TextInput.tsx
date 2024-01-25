import React from "react"
import { TextInput as MantineTextInput } from "@mantine/core"

export interface TextInputProps {
  label: string
  placeholder: string
  description: string
  data: any
}

export const TextInput = ({
  label,
  placeholder,
  description,
  data,
  ...props
}: TextInputProps) => {
  return (
    <MantineTextInput
      label={label}
      placeholder={placeholder}
      description={description}
    />
  )
}
