import { useRef, useState } from 'react'

import { Button, Stack, Typography, Box } from '@mui/material'

import classNames from 'classnames'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import ModalButton from '@/components/ModalButton'
import { useAppSelector } from '@/hooks/useRedux'
import { useWithdrawalsChangeMutation } from '@/api/endpoints/withdrawals/withdrawals'

const NETWORKS = ['TRC-20', 'ERC-20', 'BEP-20', 'SOL']

interface Props {
  id: string
  network: string | null
  wallet: string | null
}

export const ChangeTrade = ({ id, network, wallet }: Props) => {
  const [selectNetwork, setSelectNetwork] = useState(network ?? NETWORKS[0])
  const [walletState, setWalletState] = useState(wallet ?? '')
  const noteRef = useRef<HTMLInputElement>(null)
  const accessLevel = useAppSelector(state => state.user.accessLevelNumber)
  const isAvailableChangeWallet = accessLevel >= 4

  const [mutation] = useWithdrawalsChangeMutation()

  const handleChange = async (closeModal: () => void) => {
    if (!isAvailableChangeWallet) {
      toast.error('Недостаточно прав')

      return
    }

    if (walletState.length === 0) {
      toast.error('Введите адрес кошелька')

      return
    }

    void toast.promise(
      mutation({
        id,
        wallet: walletState,
        note: noteRef.current?.value ?? undefined,
        wwSignature: 'USDT' + selectNetwork.split('-')[0]
      }).unwrap(),
      {
        pending: 'Изменение...',
        success: {
          render: () => {
            closeModal()

            return 'Успешно изменено'
          }
        },
        error: {
          render: ({ data }) => {
            // @ts-expect-error type
            if (typeof data?.data?.message === 'string') {
              // @ts-expect-error type
              return data.data.message
            }

            return 'Ошибка изменения'
          }
        }
      }
    )
  }

  return (
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
            {NETWORKS.map((item, index) => (
              <Button
                key={index}
                className={classNames('whitespace-nowrap w-fit block min-w-min', {})}
                variant={selectNetwork === item ? 'contained' : 'outlined'}
                color='success'
                onClick={() => setSelectNetwork(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          <CustomTextField
            onChange={e => setWalletState(e.target.value)}
            value={walletState}
            fullWidth
            label='Адрес кошелька'
          />

          <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} variant='outlined' color='secondary' className='w-full'>
              Отменить
            </Button>
            <Button onClick={() => handleChange(closeModal)} variant='contained' color='success' className='w-full'>
              Подтвердить
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
