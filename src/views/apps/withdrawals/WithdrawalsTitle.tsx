'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { Box, Typography } from '@mui/material'
import classNames from 'classnames'

import type { Locale } from '@/configs/i18n'

interface Props {
  lang: Locale
}

export const WithdrawalsTitle = ({ lang }: Props) => {
  const pathname = usePathname()

  return (
    <Box className='flex items-center gap-4'>
      <i className='tabler-wallet w-10 h-10 block' />

      <Link href={`/${lang}/withdrawals`}>
        <Typography
          className={classNames('font-semibold text-white/55 hover:text-white duration-300 transition-all', {
            '!text-white pointer-events-none':
              pathname.includes(`/${lang}/withdrawals`) && !pathname.includes('deposits')
          })}
          variant='h2'
        >
          Вывод
        </Typography>
      </Link>
      <Link href={`/${lang}/withdrawals/deposits`}>
        <Typography
          className={classNames('font-semibold text-white/55 hover:text-white duration-300 transition-all', {
            '!text-white pointer-events-none': pathname.includes('deposits')
          })}
          variant='h2'
        >
          Депозит
        </Typography>
      </Link>
    </Box>
  )
}
