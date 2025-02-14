import { Button, MenuItem, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'
import CustomTextField from '@/@core/components/mui/TextField'
import { DropZone } from './DropZone'

export const CreatePromo = () => {
  return (
    <ModalButton
      maxWidth='xs'
      fullWidth
      title='Загрузка промоматерала'
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='success' className='max700:max-w-full max700:w-full'>
          Загрузить
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
              Тип материала
            </Typography>
            <div className='flex items-center gap-2 max600:flex-col'>
              <Button variant='outlined' color='success' className='w-full'>
                Картинка
              </Button>
              <Button variant='outlined' color='secondary' className='w-full'>
                Видео
              </Button>
              <Button variant='outlined' color='secondary' className='w-full'>
                GIF
              </Button>
            </div>
          </div>

          <CustomTextField defaultValue='Баннер 1' label='Название баннера' />

          <CustomTextField select fullWidth defaultValue='auto' label='Размер'>
            <MenuItem value='auto'>Автоопределение</MenuItem>
          </CustomTextField>

          <CustomTextField select fullWidth defaultValue='ru' label='Язык'>
            <MenuItem value='ru'>Русский</MenuItem>
          </CustomTextField>

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
