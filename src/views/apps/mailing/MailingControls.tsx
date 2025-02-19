import { MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

export const MailingControls = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-3 max1000:flex-col'>
        <CustomTextField fullWidth select label='Место' defaultValue='news'>
          <MenuItem value='news'>Новости</MenuItem>
          <MenuItem value='site'>Сайт</MenuItem>
          <MenuItem value='mail'>Почта</MenuItem>
        </CustomTextField>

        <CustomTextField fullWidth select label='Выберите языки' defaultValue='all'>
          <MenuItem value='all'>Все языки</MenuItem>
          <MenuItem value='no'>Не все</MenuItem>
        </CustomTextField>
      </div>

      <CustomTextField fullWidth label='Тема письма' />
    </div>
  )
}
