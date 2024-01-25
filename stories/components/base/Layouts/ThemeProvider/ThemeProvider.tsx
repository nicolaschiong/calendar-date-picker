import React from "react"
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import { CustomFonts } from "../../../../assets/fonts/CustomFonts"
export interface ThemeProviderProps {
  children: any
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider theme={theme}>
      <CustomFonts />
      {children}
    </MantineProvider>
  )
}
