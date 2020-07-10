import future from "@theme-ui/preset-future";
import { colors, breakpoints, constants } from './tokens'
import { merge } from "theme-ui";

const theme =  merge(future, {
  sizes: {
    container: breakpoints.xxxl,
  },
  colors,
  breakpoints,
  constants
})

console.log(theme)

export default theme