import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import terser from "@rollup/plugin-terser"
import { babel } from "@rollup/plugin-babel"
import image from "@rollup/plugin-image"
import url from "@rollup/plugin-url"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./stories/index.ts",
  external: ["classnames", "@tabler/icons-react", "@mantine/core", "@mantine/form", "@mantine/dates", "d3", "lodash/get"],
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      moduleDirectories: ["node_modules"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      modules: {
        generateScopedName: "[hash:base64:8]",
      },
      extensions: [".css"],
    }),
    terser(),
    babel(),
    image(),
    commonjs(),
    url({
      include: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
      limit: Infinity,
      fileName: "[dirname][name][extname]",
    }),
  ],
}
