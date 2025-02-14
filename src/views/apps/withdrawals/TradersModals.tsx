import { Button, Stack, Typography, Box } from '@mui/material'

import classNames from 'classnames'

import CustomTextField from '@/@core/components/mui/TextField'
import CustomIconButton from '@/@core/components/mui/IconButton'
import ModalButton from '@/components/ModalButton'

export const TradersModals = () => {
  return (
    <div className='flex h-full justify-start items-center gap-4'>
      <ModalButton
        openButton={({ openModal }) => (
          <Button onClick={openModal} variant='outlined' color='success' className='min-w-fit'>
            Одобрить
          </Button>
        )}
        modalContent={({ closeModal }) => (
          <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6}>
            <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/info.svg' alt='' />
            <Typography variant='h3' className='font-medium'>
              Уверены в выводе?
            </Typography>

            <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
              <Button onClick={closeModal} variant='outlined' color='secondary' className='max700:w-full'>
                Отменить
              </Button>
              <Button onClick={closeModal} variant='contained' color='success' className='max700:w-full'>
                Подтвердить
              </Button>
            </Box>
          </Stack>
        )}
      />

      <ModalButton
        maxWidth='sm'
        openButton={({ openModal }) => (
          <Button onClick={openModal} variant='outlined' color='error' className='min-w-fit'>
            Отклонить
          </Button>
        )}
        modalContent={({ closeModal }) => (
          <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6} textAlign='center'>
            <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/info.svg' alt='' />
            <Typography variant='h3' className='font-medium'>
              Причина отмены уйдет в примечание в аккаунт трейдеру
            </Typography>

            <CustomTextField placeholder='Введите примечание' fullWidth />

            <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
              <Button onClick={closeModal} className='w-full' variant='outlined' color='secondary'>
                Отменить
              </Button>
              <Button onClick={closeModal} className='w-full' variant='contained' color='success'>
                Подтвердить отмену
              </Button>
            </Box>
          </Stack>
        )}
      />

      <ModalButton
        openButton={({ openModal }) => (
          <Button onClick={openModal} variant='outlined' color='info' className='min-w-fit'>
            Изменить кошелек
          </Button>
        )}
        modalContent={({ closeModal }) => (
          <Stack spacing={4} justifyContent='center' alignItems={'center'} p={6}>
            <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/info.svg' alt='' />
            <Typography variant='h3' className='font-medium'>
              Хотите изменить кошелек?
            </Typography>

            <div className='flex gap-2 overflow-x-auto'>
              <Button
                className={classNames('whitespace-nowrap w-fit block min-w-min', {})}
                variant='contained'
                color='success'
              >
                TRC20
              </Button>
              <Button
                className={classNames('whitespace-nowrap w-fit block min-w-min', {})}
                variant='outlined'
                color='success'
              >
                ERC20
              </Button>
              <Button
                className={classNames('whitespace-nowrap w-fit block min-w-min', {})}
                variant='outlined'
                color='success'
              >
                BEP20
              </Button>
              <Button
                className={classNames('whitespace-nowrap w-fit block min-w-min', {})}
                variant='outlined'
                color='success'
              >
                SOL
              </Button>
            </div>

            <CustomTextField fullWidth defaultValue='s8fgs9g9wrsgw9r8g6w9r8g59wrg' label='Адрес кошелька' />

            <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
              <Button onClick={closeModal} variant='outlined' color='secondary' className='w-full'>
                Отменить
              </Button>
              <Button onClick={closeModal} variant='contained' color='success' className='w-full'>
                Подтвердить
              </Button>
            </Box>
          </Stack>
        )}
      />

      <ModalButton
        openButton={({ openModal }) => (
          <CustomIconButton onClick={openModal} variant='contained' color='error'>
            <img src='/images/icons/lock-white.svg' alt='block' />
          </CustomIconButton>
        )}
        modalContent={({ closeModal }) => (
          <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6}>
            <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/reject.svg' alt='' />
            <Typography variant='h3' className='font-medium'>
              Нажал по ошибке?
            </Typography>

            <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
              <Button onClick={closeModal} variant='outlined' color='secondary' className='max700:w-full'>
                Отменить
              </Button>
              <Button onClick={closeModal} variant='contained' color='error' className='max700:w-full'>
                Заблокировать
              </Button>
            </Box>
          </Stack>
        )}
      />
    </div>
  )
}
