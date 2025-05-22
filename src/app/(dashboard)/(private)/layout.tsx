import Button from '@mui/material/Button'

import type { ChildrenType } from '@core/types'

import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

import Navigation from '@components/layout/vertical/Navigation'

import AuthGuard from '@/hocs/AuthGuard'
import Navbar from '@components/layout/vertical/Navbar'
import ScrollToTop from '@core/components/scroll-to-top'

import Customizer from '@/@core/components/customizer'
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

const Layout = async (props: ChildrenType) => {
  const { children } = props

  const mode = await getMode()
  const systemMode = await getSystemMode()

  return (
    <AuthGuard>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout navbar={<Navbar />} navigation={<Navigation mode={mode} />}>
            {children}
          </VerticalLayout>
        }
        horizontalLayout={<></>}
      />
      <ScrollToTop className='mui-fixed'>
        <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
          <i className='tabler-arrow-up' />
        </Button>
      </ScrollToTop>
      <Customizer dir='ltr' />
    </AuthGuard>
  )
}

export default Layout
