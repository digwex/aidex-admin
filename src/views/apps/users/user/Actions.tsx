import { Button, Paper } from '@mui/material'

export const Actions = () => {
  return (
    <Paper className='p-4 flex flex-wrap gap-4'>
      {/* <Button color='success' variant='outlined' className='max700:w-full'>
        Загрузить документы
      </Button>
      <Button color='success' variant='outlined' className='max700:w-full'>
        Загрузить пруф-доходов
      </Button>
      <Button color='info' variant='outlined' className='max700:w-full'>
        Повысить Уровень KYC
      </Button>
      <Button color='warning' variant='outlined' className='max700:w-full'>
        Понизить Уровень KYC
      </Button> */}
      <Button color='error' variant='outlined' className='max700:w-full'>
        Деактивировать аккаунт
      </Button>
      <Button color='error' variant='outlined' className='max700:w-full'>
        Удалить аккаунт
      </Button>
    </Paper>
  )
}
