import { MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import DataPickerRange from '@/views/DataPickerRange'

export const LoginsSorts = () => {
  return (
    <div className='flex items-center gap-2 max800:flex-wrap'>
      <CustomTextField className='max800:w-full' placeholder='Найти по ID / Клиенту' />
      <DataPickerRange />

      <CustomTextField select className='max800:w-full' defaultValue='today'>
        <MenuItem value='today'>Все статусы</MenuItem>
        <MenuItem value='7_day'>Специальные</MenuItem>
        <MenuItem value='30_day'>Специальные</MenuItem>
        <MenuItem value='90_day'>Специальные</MenuItem>
      </CustomTextField>

      <CustomTextField select className='max800:w-full' defaultValue='50'>
        <MenuItem value='50'>50 записей</MenuItem>
        <MenuItem value='90'>90 записей</MenuItem>
      </CustomTextField>
    </div>
  )
}
