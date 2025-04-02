'use client'

import { Paper } from '@mui/material'

import classNames from 'classnames'

import type { TabsCustomizedProps } from './Tabs'
import Tabs from './Tabs'
import DataPickerRange from '../DataPickerRange'
import { SelectRange } from './SelectRange'
import { SelectTakeAmount } from './SelectTakeAmount'
import { Search } from './Search'

interface Props {
  tabs: TabsCustomizedProps
}

export const Sorts = ({ tabs }: Props) => {
  return (
    <Paper className='flex items-center gap-2 justify-between flex-wrap p-4'>
      <div
        className={classNames('max1500:w-full', {
          hidden: tabs.tabs.length === 0
        })}
      >
        <Tabs {...tabs} />
      </div>
      <div
        className={classNames('flex items-center gap-2 max800:flex-wrap', {
          'justify-between w-full': tabs.tabs.length === 0
        })}
      >
        <div className={classNames('flex items-center gap-2 max800:flex-wrap max800:w-full')}>
          <Search />
          <DataPickerRange />
        </div>

        <div className={classNames('flex items-center gap-2 max800:flex-wrap max800:w-full')}>
          <SelectRange />
          <SelectTakeAmount />
        </div>
      </div>
    </Paper>
  )
}
