import { Button, MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import { CreatePromo } from './CreatePromo'

export const PromoSort = () => {
  return (
    <div className='flex items-center gap-3 flex-wrap'>
      <CustomTextField select className='max-w-[200px] max700:max-w-full max700:w-full' defaultValue='all'>
        <MenuItem value='all'>Все форматы</MenuItem>
        <MenuItem value='tablet'>Не все форматы</MenuItem>
      </CustomTextField>

      <CustomTextField select className='max-w-[200px] max700:max-w-full max700:w-full' defaultValue='all'>
        <MenuItem value='all'>Все расширения</MenuItem>
        <MenuItem value='not-all'>Не все расширения</MenuItem>
      </CustomTextField>

      <CustomTextField select className='max-w-[200px] max700:max-w-full max700:w-full' defaultValue='all'>
        <MenuItem value='all'>Все размеры</MenuItem>
        <MenuItem value='not-all'>Не все размеры</MenuItem>
      </CustomTextField>

      <CustomTextField select className='max-w-[200px] max700:max-w-full max700:w-full' defaultValue='all'>
        <MenuItem value='all'>Все языки</MenuItem>
        <MenuItem value='not-all'>Не все языки</MenuItem>
      </CustomTextField>

      <CreatePromo />

      <Button variant='outlined' color='error' className='max700:max-w-full max700:w-full'>
        Удалить выбранное
      </Button>
    </div>
  )
}
