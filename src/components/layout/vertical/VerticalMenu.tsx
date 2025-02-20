// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import { signOut } from 'next-auth/react'

import { Divider } from '@mui/material'

import type { getDictionary } from '@/utils/getDictionary'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import { LangSelector } from './langSelector'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const { lang: locale } = params

  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      await signOut({ callbackUrl: process.env.NEXT_PUBLIC_APP_URL })
    } catch (error) {
      console.error(error)

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }
  }

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem
          icon={<i className='tabler-smart-home' />}
          href={`/${locale}/dashboard`}
          exactMatch={false}
          activeUrl='/dashboard'
        >
          Главная
        </MenuItem>
        <MenuItem
          href={`/${locale}/statistic`}
          icon={<i className='tabler-chart-histogram' />}
          exactMatch={false}
          activeUrl='/statistic'
        >
          Статистика
        </MenuItem>
        <MenuItem icon={<i className='tabler-user' />} href={`/${locale}/users`} exactMatch={false} activeUrl='/users'>
          Пользователи
        </MenuItem>
        <MenuItem
          icon={<i className='tabler-users-group' />}
          href={`/${locale}/partners`}
          exactMatch={false}
          activeUrl='/partners'
        >
          Партнёры
        </MenuItem>
        <MenuItem
          icon={<i className='tabler-checklist' />}
          href={`/${locale}/verification`}
          exactMatch={false}
          activeUrl='/verification'
        >
          Верификация
        </MenuItem>
        <MenuItem
          icon={<i className='tabler-wallet' />}
          href={`/${locale}/withdrawals`}
          exactMatch={false}
          activeUrl='/withdrawals'
        >
          Ввод/Вывод
        </MenuItem>
        <MenuItem
          icon={<i className='tabler-align-box-left-top' />}
          href={`/${locale}/content`}
          exactMatch={false}
          activeUrl='/content'
        >
          Контент
        </MenuItem>
        <MenuItem
          icon={<i className='tabler-mail' />}
          href={`/${locale}/mailing`}
          exactMatch={false}
          activeUrl='/mailing'
        >
          Рассылка
        </MenuItem>

        <Divider className='pt-4 mb-4' />

        <LangSelector />

        <MenuItem
          icon={<i className='tabler-shield-lock' />}
          href={`/${locale}/security`}
          exactMatch={false}
          activeUrl='/security'
        >
          Безопасность
        </MenuItem>
        <MenuItem
          onClick={handleUserLogout}
          icon={<i className='tabler-logout' />}
          exactMatch={false}
          activeUrl='/withdrawals'
        >
          Выход
        </MenuItem>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
