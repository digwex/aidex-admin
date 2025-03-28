import Button from '@mui/material/Button'

import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

import Navigation from '@components/layout/vertical/Navigation'

import Navbar from '@components/layout/vertical/Navbar'
import ScrollToTop from '@core/components/scroll-to-top'
import AuthGuard from '@/hocs/AuthGuard'

import { i18n } from '@configs/i18n'

import { getDictionary } from '@/utils/getDictionary'
import { getMode, getSystemMode } from '@core/utils/serverHelpers'
import Customizer from '@/@core/components/customizer'

const Layout = async (props: ChildrenType & { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params

  const { children } = props

  const direction = i18n.langDirection[params.lang]
  const dictionary = await getDictionary(params.lang)
  const mode = await getMode()
  const systemMode = await getSystemMode()

  return (
    <AuthGuard locale={params.lang}>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout navbar={<Navbar />} navigation={<Navigation dictionary={dictionary} mode={mode} />}>
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
      <Customizer dir={direction} />
    </AuthGuard>
  )
}

export default Layout
