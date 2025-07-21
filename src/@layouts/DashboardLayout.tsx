import Button from '@mui/material/Button'

import { Navigate, Outlet } from 'react-router'

import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

import Navigation from '@components/layout/vertical/Navigation'

import AuthGuard from '@/hocs/AuthGuard'
import Navbar from '@components/layout/vertical/Navbar'
import ScrollToTop from '@core/components/scroll-to-top'

import Customizer from '@/@core/components/customizer'
import { getMode, getSystemMode } from '@core/utils/serverHelpers'
import { useUser } from '@/hooks/useUser'
import themeConfig from '@/configs/themeConfig'

export const DashboardLayout = () => {
  const mode = getMode()
  const systemMode = getSystemMode()

  return (
    <AuthGuard>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout navbar={<Navbar />} navigation={<Navigation mode={mode} />}>
            <Outlet />
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
