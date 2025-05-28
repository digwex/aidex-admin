'use client'

import { Button, Paper, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import { useChangePercentMutation, useGetReferralLevelsQuery } from '@/api/endpoints/referralLevels/referral-levels-api'
import { Loader } from '@/components/Loader'
import { Title } from '@/components/Title'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { ACTION_ACCESS } from '@/utils/accessActions'

export const Referrals = () => {
  const { data, isLoading } = useGetReferralLevelsQuery()
  const { checkAction } = useCheckAccess()
  const [changePercent, { isLoading: changePercentLoading }] = useChangePercentMutation()

  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-wallet' title='Реферальная программа' />
      </div>

      <Paper className='flex p-5 w-full max1100:flex-col gap-4 items-center'>
        {isLoading && <Loader />}
        {data?.map(({ id, name, percent }) => (
          <form
            onSubmit={async e => {
              e.preventDefault()
              if (!checkAction(ACTION_ACCESS.EDIT_REFERRAL_LEVEL_PERCENT)) return

              if (changePercentLoading) {
                return
              }

              const formaData = new FormData(e.currentTarget)

              const value = formaData.get(name)

              if (!value) return toast.error('Введите процент')

              const newPercent = Number(value)

              if (newPercent > 100 || newPercent <= 0)
                return toast.error('Процент не может быть больше 100% или меньше 0%')

              const toastId = toast.loading('Изменение...')

              try {
                await changePercent({ id, percent: newPercent }).unwrap()
                toast.update(toastId, {
                  render: `Процент для программы ${name} успешно изменен на ${value}%`,
                  type: 'success',
                  isLoading: false
                })
              } catch (error) {
                console.error(`Error ${error}`)
                toast.update(toastId, {
                  render: `Ошибка при изменении процента`,
                  type: 'error',
                  isLoading: false
                })
              }
            }}
            className='w-1/3 max1100:w-full '
            key={name}
          >
            <Typography variant='h4' className='mb-2'>
              {name}
            </Typography>

            <div className='flex items-end gap-4'>
              <CustomTextField
                name={name}
                className='w-full'
                defaultValue={percent}
                type='number'
                label='% комиссий'
                disabled={changePercentLoading || !checkAction(ACTION_ACCESS.EDIT_REFERRAL_LEVEL_PERCENT)}
              />
              <Button
                type='submit'
                variant='contained'
                disabled={changePercentLoading || !checkAction(ACTION_ACCESS.EDIT_REFERRAL_LEVEL_PERCENT)}
              >
                Сохранить
              </Button>
            </div>
          </form>
        ))}
      </Paper>
    </div>
  )
}
