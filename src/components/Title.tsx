import { Box, Typography } from '@mui/material'
import classNames from 'classnames'

interface Props {
  title: string
  icon?: string
}

export const Title = ({ title, icon }: Props) => {
  return (
    <Box className='flex items-center gap-3 '>
      {icon && <i className={classNames(icon, 'w-10 h-10')} />}
      <Typography className='font-semibold' variant='h2'>
        {title}
      </Typography>
    </Box>
  )
}
