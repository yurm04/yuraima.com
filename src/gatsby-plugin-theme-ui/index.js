import "typeface-bungee-shade"
import merge from "deepmerge"
import defaultThemeObject from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/index'
import {
  colorText,
  colorBackground,
  colorUltraMarineBlue,
  colorMagicPotion,
  colorBabyPowder,
  colorEucalyptus,
  colorSpanishViolet,
  gradientFont,
} from '../utils/styles'


console.log(defaultThemeObject)


export default merge(defaultThemeObject, {
  colors: {
    text: colorText,
    background: colorBackground,
    primary: colorSpanishViolet,
    secondary: colorMagicPotion,
    blue: colorUltraMarineBlue,
    green: colorEucalyptus,
    white: colorBabyPowder
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
    fontSizes: [
      18,
      22,
      26,
      34,
      50,
      66,
      74
    ],
  },
  styles: {
    h1: {
      fontFamily: "Bungee Shade",
      color: 'primary',
      ...gradientFont
    },
    a: {
      color: 'primary'
    },
    p: {
      fontSize: ["1.15rem"]
    }
  }
})
