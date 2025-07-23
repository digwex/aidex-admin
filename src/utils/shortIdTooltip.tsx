import { Tooltip } from '@mui/material'

export const shortIdTooltip = (str: string | undefined | null, split: number = 8) => {
  if (!str) return '-'

  return str.length > split ? (
    <Tooltip title={str} placement='top'>
      <span>{`${str.slice(0, split)}...`}</span>
    </Tooltip>
  ) : (
    str
  )
}
