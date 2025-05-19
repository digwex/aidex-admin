import { Button, Paper } from '@mui/material'

export const Actions = () => {
  return (
    <Paper className='p-4 flex flex-wrap gap-4'>
      <Button color='error' variant='outlined' className='max700:w-full'>
        Деактивировать аккаунт
      </Button>
      <Button color='error' variant='outlined' className='max700:w-full'>
        Удалить аккаунт
      </Button>
    </Paper>
  )
}
