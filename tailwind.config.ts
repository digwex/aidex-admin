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
    colors: {
      success: 'var(--mui-palette-success-main)',
      error: 'var(--mui-palette-error-main)',
      warning: 'var(--mui-palette-warning-main)',
      info: 'var(--mui-palette-info-main)',
      primary: 'var(--mui-palette-primary-main)',
      secondary: 'var(--mui-palette-secondary-main)',
      textPrimary: 'var(--mui-palette-text-primary)',
      textSecondary: 'var(--mui-palette-text-secondary)',
      textDisabled: 'var(--mui-palette-text-disabled)',
      actionActive: 'var(--mui-palette-action-active)',
      actionHover: 'var(--mui-palette-action-hover)',
      actionSelected: 'var(--mui-palette-action-selected)',
      actionFocus: 'var(--mui-palette-action-focus)',
      backgroundPaper: 'var(--mui-palette-background-paper)',
      backgroundDefault: 'var(--mui-palette-background-default)',
      backgroundChat: 'var(--mui-palette-customColors-chatBg)',
      backdrop: 'var(--backdrop-color)',
      facebook: '#4267B2',
      twitter: '#1DA1F2',
      linkedin: '#007BB6'
    },
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
