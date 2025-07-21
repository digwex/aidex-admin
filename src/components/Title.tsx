import { Box, Typography } from '@mui/material'
import classNames from 'classnames'

interface Props {
  title: string
  icon?: string
}

export const Title = ({ title, icon }: Props) => {
  return (
    <Box className='flex items-center gap-3 max700:items-start max700:gap-2'>
      {icon && <i className={classNames(icon, 'w-10 h-10 min-w-10  max700:min-w-7  max700:h-7  max700:w-7')} />}
      <Typography className='font-semibold max700:text-xl' variant='h4'>
        {title}
      </Typography>
    </Box>
  )
}
