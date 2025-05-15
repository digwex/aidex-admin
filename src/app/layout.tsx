import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import 'react-perfect-scrollbar/dist/css/styles.css'

import type { ChildrenType } from '@core/types'
import { getSystemMode } from '@core/utils/serverHelpers'

import '@/app/globals.css'

import '@assets/iconify-icons/generated-icons.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'Admin panel'
}

const RootLayout = async (props: ChildrenType) => {
  const { children } = props
  const systemMode = await getSystemMode()

  return (
    <html id='__next' lang='ru' dir={'ltr'} suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <Providers direction={'ltr'}>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
