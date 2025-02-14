import { Button, MenuItem } from '@mui/material'

import { AddAmin } from './AddAmin'
import CustomTextField from '@/@core/components/mui/TextField'

export const AdminSorts = () => {
  return (
    <div className='flex items-center gap-3 max800:flex-col-reverse max800:w-full'>
      <AddAmin />

      <Button variant='outlined' color='warning' className='max800:w-full'>
        Изменить права
      </Button>
      <Button variant='outlined' color='error' className='max800:w-full'>
        Удалить
      </Button>

      <div className='flex items-center gap-3 max800:w-full'>
        <CustomTextField select className='max800:w-full' defaultValue='all'>
          <MenuItem value='all'>Все статусы</MenuItem>
          <MenuItem value='special'>Специальные</MenuItem>
        </CustomTextField>

        <CustomTextField select className='max800:w-full' defaultValue='user'>
          <MenuItem value='user'>Пользователь</MenuItem>
          <MenuItem value='partner'>Партнёр</MenuItem>
          <MenuItem value='other'>Другое</MenuItem>
        </CustomTextField>
      </div>
    </div>
  )
}
