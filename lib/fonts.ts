import { Roboto as FontRoboto, JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// roboto font as lookalike replacement for gilroy [Contributors Page]
export const fontRoboto = FontRoboto({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto",
})

// Gilroy local font
export const fontGilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    }
  ]
})