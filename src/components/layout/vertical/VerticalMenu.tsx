// MUI Imports
import React from 'react'

import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports

import { Divider } from '@mui/material'

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
import { useAuth } from '@/hooks/useAuth'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { NAVIGATION_LINKS } from '@/utils/constants'
import { ACTION_ACCESS } from '@/utils/accessActions'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: Props) => {
  // Hooks
  const { logout } = useAuth()
  const { checkRoute, checkAction } = useCheckAccess()

  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions

  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      await logout()
    } catch (error) {
      console.error(error)

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }
  }

  const navData: Array<{
    icon: JSX.Element
    href: string
    exactMatch?: boolean
    activeUrl: string
    label: string
    checkType?: 'route' | 'action'
    actionAccess?: ACTION_ACCESS
    divider?: boolean
  }> = [
    {
      icon: <i className='tabler-smart-home' />,
      href: NAVIGATION_LINKS.DASHBOARD,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.DASHBOARD,
      label: 'Главная',
      checkType: 'route'
    },
    {
      icon: <i className='tabler-chart-histogram' />,
      href: NAVIGATION_LINKS.STATISTIC,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.STATISTIC,
      label: 'Статистика',
      checkType: 'route'
    },
    {
      icon: <i className='tabler-user' />,
      href: NAVIGATION_LINKS.USERS,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.USERS,
      label: 'Пользователи',
      checkType: 'action',
      actionAccess: ACTION_ACCESS.VIEW_USERS
    },
    {
      icon: <i className='tabler-wallet' />,
      href: NAVIGATION_LINKS.WALLETS,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.WALLETS,
      label: 'Кошельки',
      checkType: 'action',
      actionAccess: ACTION_ACCESS.VIEW_WALLETS
    },
    {
      icon: <i className='tabler-users-group' />,
      href: NAVIGATION_LINKS.REFERRALS,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.REFERRALS,
      label: 'Реферальная программа',
      checkType: 'action',
      actionAccess: ACTION_ACCESS.VIEW_REFERRAL_LEVELS
    },
    {
      icon: <i className='tabler-edit' />,
      href: NAVIGATION_LINKS.EDIT,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.EDIT,
      label: 'Редактирование пар'
    },
    {
      icon: <i className='tabler-credit-card-pay' />,
      href: NAVIGATION_LINKS.WITHDRAWALS,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.WITHDRAWALS,
      label: 'Вывод',
      divider: true,
      checkType: 'action',
      actionAccess: ACTION_ACCESS.VIEW_WITHDRAWALS
    },

    {
      icon: <i className='tabler-shield-lock' />,
      href: NAVIGATION_LINKS.SECURITY,
      exactMatch: false,
      activeUrl: NAVIGATION_LINKS.SECURITY,
      label: 'Безопасность',
      checkType: 'action',
      actionAccess: ACTION_ACCESS.VIEW_SECURITY
    }
  ]

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
        {navData.map((item, i) => {
          if (item.checkType === 'action' && !checkAction(item?.actionAccess as ACTION_ACCESS)) {
            return null
          }

          if (item.checkType === 'route' && !checkRoute(item.href)) return null

          return (
            <React.Fragment key={i + item.href}>
              {/* @ts-expect-error type */}
              <MenuItem icon={item.icon} href={item.href} exactMatch={item.exactMatch} activeUrl={item.activeUrl}>
                {item.label}
              </MenuItem>
              {item?.divider && <Divider className='pt-4 mb-4' />}
            </React.Fragment>
          )
        })}

        <MenuItem
          onClick={handleUserLogout}
          icon={<i className='tabler-logout' />}
          exactMatch={false}
          activeUrl='/withdrawals'
        >
          Выход
        </MenuItem>
        {/* 
        <Divider className='pt-4 mb-4' />

        <Divider className='pt-4 mb-4' />

        <Divider className='pt-4 mb-4' />

        <MenuItem
          icon={<i className='tabler-smart-home' />}
          href={`/dashboard`}
          exactMatch={false}
          activeUrl='/dashboard'
        >
          Главная
        </MenuItem>

        <MenuItem
          href={`/statistic`}
          icon={<i className='tabler-chart-histogram' />}
          exactMatch={false}
          activeUrl='/statistic'
        >
          Статистика
        </MenuItem>

        {checkRoute('/users') && (
          <MenuItem icon={<i className='tabler-user' />} href={`/users`} exactMatch={false} activeUrl='/users'>
            Пользователи
          </MenuItem>
        )}
        <MenuItem icon={<i className='tabler-wallet' />} href={`/wallets`} exactMatch={false} activeUrl='/wallets'>
          Кошельки
        </MenuItem>
        <MenuItem
          icon={<i className='tabler-users-group' />}
          href={`/referrals`}
          exactMatch={false}
          activeUrl='/referrals'
        >
          Реферальная программа
        </MenuItem>

        <MenuItem
          icon={<i className='tabler-credit-card-pay' />}
          href={`/withdrawals`}
          exactMatch={false}
          activeUrl='/withdrawals'
        >
          Вывод
        </MenuItem>

        <Divider className='pt-4 mb-4' />

        <MenuItem
          icon={<i className='tabler-shield-lock' />}
          href={`/security`}
          exactMatch={false}
          activeUrl='/security'
        >
          Безопасность
        </MenuItem> */}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
