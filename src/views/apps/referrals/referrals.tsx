'use client'

import { Button, Paper, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { Title } from '@/components/Title'
import CustomTextField from '@/@core/components/mui/TextField'

const programs = [
  { label: 'BRONZE', percent: 50 },
  { label: 'SILVER', percent: 60 },
  { label: 'GOLD', percent: 70 }
]

export const Referrals = () => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-wallet' title='Реферальная программа' />
      </div>

      <Paper className='flex p-5 w-full flex-wrap gap-4 items-center'>
        {programs.map(program => (
          <form
            onSubmit={e => {
              e.preventDefault()

              const formaData = new FormData(e.currentTarget)

              const value = formaData.get(program.label)

              if (!value) return toast.error('Введите процент')

              if (Number(value) > 100 || Number(value) <= 0)
                return toast.error('Процент не может быть больше 100% или меньше 0%')

              toast.success(`Процент для программы ${program.label} успешно изменен на ${value}%`)
            }}
            className='w-1/4'
            key={program.label}
          >
            <Typography variant='h4' className='mb-2'>
              {program.label}
            </Typography>

            <div className='flex items-end gap-4'>
              <CustomTextField
                name={program.label}
                className='w-full'
                defaultValue={program.percent}
                type='number'
                label='% комиссий'
              />
              <Button type='submit' variant='contained'>
                Сохранить
              </Button>
            </div>
          </form>
        ))}
      </Paper>
    </div>
  )
}
