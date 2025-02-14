'use client'

import { MenuItem, Paper } from '@mui/material'

import classNames from 'classnames'

import CustomTextField from '@/@core/components/mui/TextField'
import type { TabsCustomizedProps } from './Tabs'
import Tabs from './Tabs'
import DataPickerRange from '../DataPickerRange'

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
          <CustomTextField className='max700:w-full' placeholder='Найти по ID / Клиенту' />
          <DataPickerRange />
        </div>

        <div className={classNames('flex items-center gap-2 max800:flex-wrap max800:w-full')}>
          <CustomTextField className='max700:w-full' select defaultValue='today'>
            <MenuItem value='today'>Сегодня</MenuItem>
            <MenuItem value='7_day'>7 дней</MenuItem>
            <MenuItem value='30_day'>30 дней</MenuItem>
            <MenuItem value='90_day'>90 дней</MenuItem>
          </CustomTextField>

          <CustomTextField className='max700:w-full' select defaultValue='50'>
            <MenuItem value='50'>50 записей</MenuItem>
            <MenuItem value='90'>90 записей</MenuItem>
          </CustomTextField>
        </div>
      </div>
    </Paper>
  )
}
