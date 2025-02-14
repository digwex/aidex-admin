import type { ChipProps } from '@mui/material'
import { Chip } from '@mui/material'

type Variant = 'reject' | 'processing' | 'success'

interface Props extends Omit<ChipProps, 'variant' | 'color'> {
  variant: Variant
}

const icons: Record<Variant, string> = {
  reject: '/images/icons/reject.svg',
  processing: '/images/icons/process.svg',
  success: '/images/icons/verify.svg'
}

const colors: Record<Variant, string> = {
  reject: 'error',
  processing: 'warning',
  success: 'success'
} as const

const text: Record<Variant, string> = {
  reject: 'Отклонён',
  processing: 'В обработке',
  success: 'Завершенный'
} as const

export const Status = ({ variant, ...props }: Props) => {
  return (
    <Chip
      {...props}
      variant='tonal'
      label={text[variant]}
      icon={<img src={icons[variant]} alt={variant} />}
      color={colors[variant] as 'error' | 'warning' | 'success'}
    />
  )
}
