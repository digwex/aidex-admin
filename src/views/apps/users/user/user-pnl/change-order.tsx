import { Button, capitalize, Checkbox, Divider, MenuItem, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

import { toast } from 'react-toastify'

import { format } from 'date-fns'

import { useUpdateTradeMutation } from '@/api/endpoints/users/users-api'
import CustomTextField from '@/@core/components/mui/TextField'
import type { ITrade } from '@/api/endpoints/users/users-types'
import ModalButton from '@/components/ModalButton'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

export interface ChangeOrderFormValue {
  id: string
  openPrice: number
  closingPrice: number
  openTime: number
  closingTime: number
  isDemo: boolean
  tradeType: string
  dealAmount: number
}

interface Props {
  trade: ITrade
}

export const ChangeOrder = ({ trade }: Props) => {
  const { id, closingPrice, openPrice, openTime, closingTime, isDemo, dealAmount, tradeType } = trade

  const [updateOrder] = useUpdateTradeMutation()

  const { register, handleSubmit, control, reset } = useForm<ChangeOrderFormValue>({
    defaultValues: {
      id,
      closingPrice: Number(closingPrice),
      openPrice: Number(openPrice),
      openTime: new Date(openTime).getTime(),
      closingTime: new Date(closingTime).getTime(),
      isDemo,
      dealAmount: Number(dealAmount),
      tradeType
    }
  })

  const handleCreateAdmin = (close: () => void) => (data: ChangeOrderFormValue) => {
    if (Number(data.openPrice) < 0 || Number(data.closingPrice) < 0) {
      toast.error('Нельзя ставить отрицательные цены')

      return
    }

    const openTime = new Date(data.openTime)

    openTime.setHours(0, 0, 0, 0)
    const closingTime = new Date(data.closingTime)

    closingTime.setHours(23, 59, 59, 999)

    if (openTime > closingTime) {
      toast.error('Неверный диапазон времени')

      return
    }

    void toast.promise(
      updateOrder({
        id,
        closingPrice: Number(data.closingPrice),
        openPrice: Number(data.openPrice),
        openTime: openTime.getTime(),
        closingTime: closingTime.getTime(),
        isDemo: data.isDemo,
        dealAmount: Number(data.dealAmount),
        tradeType: data.tradeType
      }).unwrap(),
      {
        pending: 'Изменение ордер...',
        success: {
          render: () => {
            close()

            return 'Ордер успешно изменен'
          }
        },
        error: {
          render: ({ data }: { data: any }) => {
            if (typeof data?.data?.message === 'string') {
              return data.data.message
            }

            return 'Ошибка при изменении ордер'
          }
        }
      }
    )
  }

  return (
    <ModalButton
      onModalClose={reset}
      fullWidth
      openButton={({ openModal }) => (
        <Button variant='outlined' color='warning' onClick={openModal}>
          Изменить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleCreateAdmin(closeModal))}>
          <Typography variant='h3' className='text-center'>
            Изменить
          </Typography>

          <CustomTextField
            className='w-full'
            {...register('dealAmount')}
            label={`Количество: ${dealAmount}`}
            placeholder='К-во'
          />
          <CustomTextField
            className='w-full'
            {...register('openPrice')}
            label={`Цена входа: ${openPrice}`}
            placeholder='Цена входа'
          />
          <CustomTextField
            className='w-full'
            {...register('closingPrice')}
            label={`Цена выхода: ${closingPrice}`}
            placeholder='Цена выхода'
          />

          <div>
            <p>Дата входа: {format(openTime, 'dd/MM/yyyy')}</p>

            <Controller
              control={control}
              name='openTime'
              render={({ field: { value, onChange } }) => (
                <AppReactDatepicker
                  value={format(value, 'dd/MM/yyyy')}
                  onChange={onChange}
                  shouldCloseOnSelect={false}
                  customInput={<CustomTextField fullWidth value={value} />}
                />
              )}
            />
          </div>

          <div>
            <div>Дата выхода: {format(closingTime, 'dd/MM/yyyy')}</div>

            <Controller
              control={control}
              name='closingTime'
              render={({ field: { value, onChange } }) => (
                <AppReactDatepicker
                  value={format(value, 'dd/MM/yyyy')}
                  onChange={onChange}
                  shouldCloseOnSelect={false}
                  customInput={<CustomTextField fullWidth value={value} />}
                />
              )}
            />
          </div>

          <div className='input_wrap_main'>
            <Controller
              control={control}
              name='tradeType'
              render={({ field, fieldState: { error } }) => (
                <CustomTextField
                  {...field}
                  error={!!error}
                  select
                  fullWidth
                  label={`Тип торговли: ${capitalize(tradeType)}`}
                >
                  <MenuItem value={'LONG'}>LONG</MenuItem>
                  <MenuItem value={'SHORT'}>SHORT</MenuItem>
                </CustomTextField>
              )}
            />
          </div>

          <div className='flex items-center gap-3'>
            <p>Демо: {isDemo ? 'Да' : 'Нет'}</p>
            <Controller
              name='isDemo'
              control={control}
              render={({ field: { value, onChange, ...props } }) => (
                <Checkbox {...props} checked={value} onChange={e => onChange(e.target.checked)} />
              )}
            />
          </div>

          <Divider />
          <div className='flex items-center gap-3 max700:flex-col'>
            <Button className='w-full' variant='outlined' color='primary' onClick={closeModal}>
              Назад
            </Button>
            <Button className='w-full' type='submit' variant='contained' color='warning'>
              Изменить
            </Button>
          </div>
        </form>
      )}
    />
  )
}
