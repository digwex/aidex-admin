import { Button, MenuItem, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'
import CustomTextField from '@/@core/components/mui/TextField'
import { DropZone } from './DropZone'

export const CreateBanner = () => {
  return (
    <ModalButton
      scroll='body'
      maxWidth='xs'
      fullWidth
      title='Загрузка баннера'
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='success' className='max700:w-full'>
          Загрузить баннер
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div className='flex flex-col gap-3'>
          <DropZone />

          <Typography variant='subtitle2' color='text.secondary'>
            Допускаеться только JPG или PNG файлы; <br /> Максимальный размер загруженого файла -4 мб.
          </Typography>

          <div>
            <Typography variant='subtitle2' color='text.secondary'>
              Выберите устройство
            </Typography>
            <div className='flex items-center gap-2 max600:flex-col'>
              <Button variant='outlined' color='success' className='w-full'>
                ПК
              </Button>
              <Button variant='outlined' color='secondary' className='w-full'>
                Планшет
              </Button>
              <Button variant='outlined' color='secondary' className='w-full'>
                Мобилка
              </Button>
            </div>
          </div>

          <CustomTextField defaultValue='Баннер 1' label='Название баннера' />

          <CustomTextField select fullWidth defaultValue='1' label='Куда вставить'>
            <MenuItem value='1'>Лендинг 1</MenuItem>
            <MenuItem value='2'>Лендинг 2</MenuItem>
            <MenuItem value='3'>Лендинг 3</MenuItem>
          </CustomTextField>

          <CustomTextField
            defaultValue='https://mail.google.com/mail/u/0/#inbox/FMfcgzGsm...'
            label='URL куда ведет баннер'
          />

          <div className='flex items-center gap-3 max800:flex-wrap'>
            <Button onClick={closeModal} variant='outlined' color='secondary' className='w-full'>
              Препросмотр
            </Button>
            <Button onClick={closeModal} variant='contained' color='success' className='w-full'>
              Загрузить
            </Button>
          </div>
        </div>
      )}
    />
  )
}
