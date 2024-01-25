import "../stories/global.css"
import { ThemeProvider } from "../stories/components/base/Layouts/ThemeProvider/ThemeProvider"

export const decorators = [
  (renderStory) => <ThemeProvider>{renderStory()}</ThemeProvider>,
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
}
