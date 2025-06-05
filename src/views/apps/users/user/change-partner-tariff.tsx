import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'

import { Button, ButtonGroup, Divider, Typography } from '@mui/material'

import classNames from 'classnames'

import { toast } from 'react-toastify'

import { useChangePartnerReferralLvlMutation, useGetReferralLevelsQuery } from '@/api/endpoints/referrals/referrals-api'
import ModalButton from '@/components/ModalButton'

import CustomTextField from '@/@core/components/mui/TextField'
import type { TReferralLevelName } from '@/api/endpoints/referrals/referrals-types'
import type { User } from '@/api/endpoints/users/users-types'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { ACTION_ACCESS } from '@/utils/accessActions'
import { handleRTKError } from '@/utils/handleRTKError'

export const ChangePartnerTariff = ({ id }: User) => {
  const { data, isLoading, isError } = useGetReferralLevelsQuery()
  const [changeLvl, { isLoading: isChangLvlLoading }] = useChangePartnerReferralLvlMutation()

  const [lvl, setLvl] = useState<TReferralLevelName>('BRONZE')
  const [percent, setPercent] = useState('0')

  const { checkAction } = useCheckAccess()

  useEffect(() => {
    if (!data) return

    const currentPercent = data.find(plan => plan.name === lvl)?.percent

    if (currentPercent) setPercent(String(currentPercent))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (isLoading || isError) return null

  const handleChangePlan = (plan: TReferralLevelName) => {
    return () => {
      if (lvl === plan) return

      const currentPercent = data?.find(p => p.name === plan)?.percent

      if (currentPercent) setPercent(String(currentPercent))

      setLvl(plan)
    }
  }

  const handleChangePercent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, '') || '0')

    if (value > 100) {
      setPercent(String(100))

      return
    }

    if (String(value)[0] === '0' && String(value).length > 1) {
      setPercent(String(value).slice(1))

      return
    }

    setPercent(String(value))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!checkAction(ACTION_ACCESS.EDIT_REFERRAL_LEVEL_PERCENT)) return

    if (isChangLvlLoading) {
      return
    }

    if (!percent) return toast.error('Введите процент')

    const percentN = Number(percent)

    if (percentN > 100 || percentN <= 0) return toast.error('Процент не может быть больше 100% или меньше 0%')

    const toastId = toast.loading('Изменение...')

    try {
      await changeLvl({ id, percent, lvl }).unwrap()

      toast.update(toastId, {
        render: `Установлен план ${lvl} с комиссией ${percent}%`,
        type: 'success',
        isLoading: false
      })
    } catch (error) {
      console.error(`Error ${error}`)
      toast.update(toastId, {
        render: `Ошибка при изменинии палана: ${handleRTKError(error)}`,
        type: 'error',
        isLoading: false
      })
    }
  }

  return (
    <ModalButton
      fullWidth
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='success' className='max700:w-full'>
          Сменить партнёрский план
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <Typography className='font-medium text-center mb-3' variant='h3'>
            Смена партнёрского плана
          </Typography>

          <ButtonGroup fullWidth className='flex w-full overflow-x-auto max700:w-full'>
            {data?.map(plan => (
              <Button
                key={plan.name}
                onClick={handleChangePlan(plan.name)}
                className={classNames('whitespace-nowrap p-0 w-full  min-h-10', {
                  'pointer-events-none': lvl === plan.name
                })}
                variant={lvl === plan.name ? 'contained' : 'tonal'}
                color={lvl === plan.name ? 'success' : 'secondary'}
              >
                {plan.name}
              </Button>
            ))}
          </ButtonGroup>

          <CustomTextField
            className='w-full'
            value={percent}
            type='number'
            onChange={handleChangePercent}
            label='% комиссия'
            disabled={!checkAction(ACTION_ACCESS.EDIT_REFERRAL_LEVEL_PERCENT)}
          />

          <Divider />

          <Button disabled={isChangLvlLoading} variant='contained' color='success' type='submit'>
            Сохранить
          </Button>
          <Button disabled={isChangLvlLoading} onClick={closeModal} variant='outlined' color='primary' type='button'>
            Закрыть
          </Button>
        </form>
      )}
    />
  )
}
