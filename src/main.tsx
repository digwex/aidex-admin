import './styles/globals.css'
import './assets/iconify-icons/generated-icons.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import { getSystemMode } from './@core/utils/serverHelpers'
import Providers from './components/Providers'
import { ReactRouterProvider } from './providers/router-provider'
import { initSentry } from './utils/initSentry'

initSentry()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers direction={'ltr'}>
      <InitColorSchemeScript attribute='data' defaultMode={getSystemMode()} />
      <ReactRouterProvider />
    </Providers>
  </StrictMode>
)
