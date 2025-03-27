'use client'

// MUI Imports
import Link from 'next/link'

// Component Imports
import { usePathname } from 'next/navigation'

import { Button, ButtonGroup } from '@mui/material'
import classNames from 'classnames'

// import Link from '@/components/Link'

export interface TabItem {
  value: string
  label: React.ReactNode
  icon?: string
}

export interface TabsCustomizedProps {
  tabs: TabItem[]
}

const isRoutMatch = (rout: string, currentRout: string) => {
  const routArr = rout.split('/')
  const currentRoutArr = currentRout.split('/')

  return routArr[routArr.length - 1] === currentRoutArr[currentRoutArr.length - 1]
}

const Tabs = ({ tabs }: TabsCustomizedProps) => {
  const pathname = usePathname()

  return (
    <ButtonGroup className='flex overflow-x-auto max700:w-full'>
      {tabs.map(tab => (
        <Button
          key={tab.value}
          className={classNames('whitespace-nowrap w-fit p-0 max700:w-full  min-h-10 min-w-min', {
            'pointer-events-none': isRoutMatch(tab.value, pathname)
          })}
          variant={isRoutMatch(tab.value, pathname) ? 'contained' : 'tonal'}
          color={isRoutMatch(tab.value, pathname) ? 'success' : 'secondary'}
        >
          <Link prefetch={true} className='h-full px-5 py-2 gap-2 flex items-center' href={tab.value}>
            {tab.icon && <i className={classNames(tab.icon, 'w-[18px] h-[18px] min-w-[18px]')} />}
            <span>{tab.label}</span>
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Tabs
