'use client'

import { Paper } from '@mui/material'

import { SelectTakeAmount } from '@/views/sorts/SelectTakeAmount'
import DataPickerRange from '@/views/DataPickerRange'
import { SelectRange } from '@/views/sorts/SelectRange'
import { Search } from '@/views/sorts/Search'

export const WalletsSorts = () => {
  return (
    <Paper className='flex items-center gap-2 justify-between flex-wrap p-4'>
      <div className={'flex items-center gap-2 justify-end w-full max800:flex-wrap'}>
        <Search />
        <DataPickerRange />
        <SelectRange />
        <SelectTakeAmount />
      </div>
    </Paper>
  )
}
