import React from "react"
import { Autocomplete as MantineAutocomplete } from "@mantine/core"

export interface AutocompleteProps {
  label: string
  placeholder: string
  data: any
}

export const Autocomplete = ({
  label,
  placeholder,
  data,
  ...props
}: AutocompleteProps) => {
  return (
    <MantineAutocomplete label={label} placeholder={placeholder} data={data} />
  )
}
