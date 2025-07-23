import { Button, Chip, Divider, IconButton, InputAdornment, Stack } from '@mui/material'

import classNames from 'classnames'

import ModalButton from '@/components/ModalButton'
import type { User } from '@/api/endpoints/users/users-types'
import CustomTextField from '@/@core/components/mui/TextField'
import { CopyButton } from '@/hooks/useCopy'
import { ACTION_ACCESS } from '@/utils/accessActions'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { useShowSecretInput } from '@/hooks/useShowSecretInput'

export const WalletsInfo = ({ wallets }: { wallets?: User['wallets'] }) => {
  const { checkAction } = useCheckAccess()

  return (
    <ModalButton
      title='Список кошельков'
      maxWidth='md'
      fullWidth
      openButton={({ openModal }) => (
        <Button
          disabled={wallets?.length === 0 || !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)}
          onClick={openModal}
          variant='outlined'
          color='success'
        >
          <span className='whitespace-nowrap'>
            Кошельки {checkAction(ACTION_ACCESS.VIEW_USER_DETAIL) && `(${wallets?.length})`}
          </span>
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div>
          <Stack direction='column' spacing={3}>
            <div className='flex items-center gap-3 w-full'>
              <div className='w-full'>
                {wallets?.map((wallet, i) => (
                  <WalletItem index={i} key={wallet.publicKey} {...wallet} />
                ))}
              </div>
            </div>

            <Divider className='w-full mt-4' />
            <Button onClick={closeModal} type='button' variant='outlined' className='w-full '>
              Назад
            </Button>
          </Stack>
        </div>
      )}
    />
  )
}

const WalletItem = ({
  secretKey,
  publicKey,
  label,
  index,
  isActive,
  isArchived
}: User['wallets'][0] & { index: number }) => {
  const { Element, type } = useShowSecretInput()

  return (
    <div className='flex w-full flex-col items-start gap-3'>
      <Divider
        className={classNames('w-full mt-10', {
          '!mt-0': index === 0
        })}
      >
        <div className='flex items-center gap-3'>
          <span>{label}</span>
          {isActive && <Chip label='Активен' variant='tonal' color='success' size='small' />}
          {isArchived && <Chip label='В архиве' variant='tonal' color='warning' size='small' />}
        </div>
      </Divider>
      <CustomTextField
        className='w-full'
        label='Public key'
        value={publicKey}
        slotProps={{
          input: {
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  title='Solscan'
                  LinkComponent='a'
                  href={`https://solscan.io/account/${publicKey}`}
                  target='_blank'
                >
                  <i className='tabler-currency-solana' />
                </IconButton>
                <CopyButton text={publicKey} />
              </InputAdornment>
            )
          }
        }}
      />
      <CustomTextField
        type={type}
        contentEditable={false}
        className='w-full'
        label='Secret key'
        value={secretKey}
        slotProps={{
          input: {
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                {Element()}
                <CopyButton text={secretKey} />
              </InputAdornment>
            )
          }
        }}
      />
    </div>
  )
}
