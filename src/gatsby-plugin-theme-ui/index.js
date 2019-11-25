import "typeface-bungee-shade"
import merge from "deepmerge"
import defaultThemeObject from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/index'


export const colorText = "#4c555a"
export const colorBackground = "#F6F7F9"
export const colorUltraMarineBlue = "#4D6CFA"
export const colorMagicPotion = "#FF495C"
export const colorBabyPowder = "#FCFCFC"
export const colorEucalyptus = "#3DDC97"
export const colorSpanishViolet = "#46237A"



export default merge(defaultThemeObject, {
  colors: {
    text: colorText,
    background: colorBackground,
    primary: colorSpanishViolet,
    secondary: colorMagicPotion,
  },
  googleFonts: [
    {
      name: 'Bungee Shade',
      styles: ['400']
    }
  ],
  fonts: {
    body: "Montserrat",
    heading: "system-ui, sans-serif",
  },
  fontSizes: [
    16,
    20,
    24,
    32,
    48,
    64,
    72
  ],
  styles: {
    h1: {
      fontFamily: "Bungee Shade",
      fontSize: ["32px", "48px", "72px"],
      color: 'primary',
      fontSize: 6,
      background: `-webkit-linear-gradient(${colorSpanishViolet}, ${colorMagicPotion})`,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent"
    },
    a: {
      color: 'primary'
    }
  }
})
