import tailwindcssLogical from 'tailwindcss-logical'
import type { Config } from 'tailwindcss'

import tailwindPlugin from './src/@core/tailwind/plugin'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  important: '#__next',
  plugins: [tailwindcssLogical, tailwindPlugin],
  theme: {
    screens: {
      min800: { min: '800px' },

      max1800: { max: '1800px' },
      max1700: { max: '1700px' },
      max1600: { max: '1600px' },
      max1500: { max: '1500px' },
      max1400: { max: '1400px' },
      max1300: { max: '1300px' },
      max1200: { max: '1200px' },
      max1100: { max: '1100px' },
      max1000: { max: '1000px' },
      max900: { max: '900px' },
      max800: { max: '800px' },
      max700: { max: '700px' },
      max600: { max: '600px' },
      max650: { max: '650px' },
      max500: { max: '600px' },
      max400: { max: '600px' }
    },
    extend: {}
  }
}

export default config
