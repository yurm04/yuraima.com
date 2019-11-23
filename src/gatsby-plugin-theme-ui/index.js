import merge from "deepmerge"
import defaultThemeObject from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/index'

// YE: this doesn't work

export default merge(defaultThemeObject, {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "tomato",
    green: "green"
  },
  fonts: {
    body: "Helvetica",
    heading: "system-ui, sans-serif",
  },
})