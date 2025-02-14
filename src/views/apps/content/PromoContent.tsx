import Image from 'next/image'

import { Button, Card, CardActions, CardContent, Divider, Stack, Typography } from '@mui/material'

export const PromoContent = () => {
  return (
    <Card>
      <CardContent className='grid grid-cols-[0.8fr_1.2fr] gap-3 max600:grid-cols-1'>
        <Image src='/images/content/promo-1.svg' alt='banner' className='w-full h-full' width={378} height={230} />

        <div>
          <Stack gap={4} direction='column'>
            <div className='flex items-center gap-3 justify-between'>
              <Typography variant='h5' className='font-medium'>
                ID Баннера:
              </Typography>
              <Typography variant='subtitle1' className='font-medium'>
                3414134
              </Typography>
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <Typography variant='h5' className='font-medium'>
                Название:
              </Typography>
              <Typography variant='subtitle1' className='font-medium'>
                Банер 1
              </Typography>
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <Typography variant='h5' className='font-medium'>
                Тип:
              </Typography>
              <Typography variant='subtitle1' className='font-medium'>
                Картинка
              </Typography>
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <Typography variant='h5' className='font-medium'>
                Размер:
              </Typography>
              <Typography variant='subtitle1' className='font-medium'>
                2019х2019
              </Typography>
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <Typography variant='h5' className='font-medium'>
                Язык:
              </Typography>
              <Typography variant='subtitle1' className='font-medium'>
                RU
              </Typography>
            </div>
          </Stack>
        </div>
      </CardContent>

      <Divider />
      <CardActions>
        <Button variant='outlined' color='success' className='flex items-center gap-2 w-full'>
          <i className='tabler-file-download' />
          <p className='max600:hidden'>Скачать</p>
        </Button>
        <Button variant='outlined' color='info' className='flex items-center gap-2 w-full'>
          <i className='tabler-pencil' />
          <p className='max600:hidden'>Изменить</p>
        </Button>
        <Button variant='outlined' color='error' className='flex items-center gap-2 w-full'>
          <i className='tabler-trash' />
          <p className='max600:hidden'>Удалить</p>
        </Button>
      </CardActions>
    </Card>
  )
}
