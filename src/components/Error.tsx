import { Typography } from '@mui/material'
import type { FieldError } from 'react-hook-form'

interface Props {
  error?: FieldError
}

export const Error = ({ error }: Props) => {
  if (!error) return

  return (
    <Typography
      color='error'
      style={{
        color: 'var(--mui-palette-error-main)'
      }}
      className='text-xs'
    >
      {error.message}
    </Typography>
  )
}
