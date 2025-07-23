import { Tooltip } from '@mui/material'

export const shortUserEmail = (email: string | null) => {
  if (!email) return '-'

  const length = email.split('@')[0].length

  return length > 5 ? (
    <Tooltip title={email} placement='top'>
      <span>{email.split('@')[0].slice(0, 5) + '...@' + email.split('@')[1]}</span>
    </Tooltip>
  ) : (
    email
  )
}
