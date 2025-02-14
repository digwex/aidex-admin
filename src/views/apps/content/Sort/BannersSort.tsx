import { MenuItem, Typography } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import { CreateBanner } from './CreateBanner'

export const BannersSort = () => {
  return (
    <div className='flex items-center gap-3 flex-wrap max700:w-full'>
      <Typography variant='subtitle2'>Выберите устройство:</Typography>

      <CustomTextField select className='w-[150px] max700:w-full' defaultValue='pc'>
        <MenuItem value='pc'>ПК</MenuItem>
        <MenuItem value='tablet'>Планшет</MenuItem>
        <MenuItem value='mobile'>Телефон</MenuItem>
      </CustomTextField>

      <CreateBanner />
    </div>
  )
}
