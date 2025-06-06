import { Geologica } from 'next/font/google'

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import classNames from 'classnames'
import 'react-perfect-scrollbar/dist/css/styles.css'

import type { Metadata } from 'next'

import * as Sentry from '@sentry/nextjs'

import type { ChildrenType } from '@core/types'
import { getSystemMode } from '@core/utils/serverHelpers'

import '@/app/globals.css'

import '@assets/iconify-icons/generated-icons.css'
import Providers from '@/components/Providers'

const geologica = Geologica({
  subsets: ['latin'],
  display: 'swap'
})

export function generateMetadata(): Metadata {
  return {
    title: 'Admin panel',

    other: {
      ...Sentry.getTraceData()
    }
  }
}

const RootLayout = async (props: ChildrenType) => {
  const { children } = props
  const systemMode = await getSystemMode()

  return (
    <html id='__next' lang='ru' dir={'ltr'} suppressHydrationWarning>
      <body className={classNames(geologica.className, 'flex is-full min-bs-full flex-auto flex-col')}>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <Providers direction={'ltr'}>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
