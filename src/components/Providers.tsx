import type { ChildrenType, Direction } from '@core/types'

import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'

import AppReactToastify from '@/libs/styles/AppReactToastify'

import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'
import ReduxProvider from '@/redux-store/ReduxProvider'
import WebSocketUserProvider from '@/providers/WebSocketUserProvider'

type Props = ChildrenType & {
  direction: Direction
}

const Providers = (props: Props) => {
  const { children, direction } = props

  const mode = getMode()
  const settingsCookie = getSettingsFromCookie()
  const systemMode = getSystemMode()
  console.log({ mode, settingsCookie, systemMode })
  return (
    <VerticalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemeProvider direction={direction} systemMode={systemMode}>
          <ReduxProvider>
            <WebSocketUserProvider>{children}</WebSocketUserProvider>
          </ReduxProvider>
          <AppReactToastify direction={direction} hideProgressBar />
        </ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Providers
