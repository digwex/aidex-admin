// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import type { IconButtonProps } from '@mui/material/IconButton'
import type { MenuItemProps } from '@mui/material/MenuItem'
import type { DividerProps } from '@mui/material/Divider'
import type { BoxProps } from '@mui/material/Box'
import type { TooltipProps } from '@mui/material/Tooltip'
import type { LinkProps } from 'react-router'

export type OptionDividerType = {
  divider: boolean
  dividerProps?: DividerProps
  href?: never
  icon?: never
  text?: never
  linkProps?: never
  menuItemProps?: never
}
export type OptionMenuItemType = {
  text: ReactNode
  icon?: ReactNode
  linkProps?: BoxProps<'a'>
  href?: LinkProps['to']
  menuItemProps?: MenuItemProps
  divider?: never
  dividerProps?: never
}

export type OptionType = string | OptionDividerType | OptionMenuItemType

export type OptionsMenuType = {
  tooltipProps?: Omit<TooltipProps, 'children'>
  icon?: ReactNode
  iconClassName?: string
  options: OptionType[]
  leftAlignMenu?: boolean
  iconButtonProps?: IconButtonProps
}
