import React from "react"
import { Global } from "@mantine/core"

import avenirRoman from "./Avenir/Avenir-Roman.woff2"
import avenirBookOblique from "./Avenir/Avenir-BookOblique.woff2"
import avenirLightOblique from "./Avenir/Avenir-LightOblique.woff2"
import avenirHeavy from "./Avenir/Avenir-Heavy.woff2"
import avenirHeavyOblique from "./Avenir/Avenir-HeavyOblique.woff2"
import avenirMediumOblique from "./Avenir/Avenir-MediumOblique.woff2"
import avenirMedium from "./Avenir/Avenir-Medium.woff2"
import avenirBlackOblique from "./Avenir/Avenir-BlackOblique.woff2"
import avenirOblique from "./Avenir/Avenir-Oblique.woff2"
import avenirBlack from "./Avenir/Avenir-Black.woff2"
import avenirLight from "./Avenir/Avenir-Light.woff2"
import avenirBook from "./Avenir/Avenir-Book.woff2"

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirRoman}') format("woff2")`,
            fontWeight: "normal",
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirBookOblique}') format("woff2")`,
            fontWeight: "normal",
            fontStyle: "italic",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirLightOblique}') format("woff2")`,
            fontWeight: 300,
            fontStyle: "italic",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirHeavy}') format("woff2")`,
            fontWeight: 900,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirHeavyOblique}') format("woff2")`,
            fontWeight: 900,
            fontStyle: "italic",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirMediumOblique}') format("woff2")`,
            fontWeight: 500,
            fontStyle: "italic",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirMedium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirBlackOblique}') format("woff2")`,
            fontWeight: 900,
            fontStyle: "italic",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirOblique}') format("woff2")`,
            fontWeight: "normal",
            fontStyle: "italic",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirBlack}') format("woff2")`,
            fontWeight: 900,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirLight}') format("woff2")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Avenir",
            src: `url('${avenirBook}') format("woff2")`,
            fontWeight: "normal",
            fontStyle: "normal",
          },
        },
      ]}
    />
  )
}
