'use client'

import type { LinkProps } from 'next/link'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { Avatar, Box, Typography } from '@mui/material'
import classNames from 'classnames'

interface Props {
  links: Array<
    {
      title: string
    } & LinkProps
  >
  icon?: string
}

export const TitleLinks = ({ links, icon }: Props) => {
  const pathname = usePathname()

  console.debug('links', links, pathname)

  return (
    <Box className='flex items-center gap-3'>
      {icon && <Avatar sizes='xl' src={icon} />}
      <Box className='flex items-center gap-4'>
        {links.map(({ title, ...link }, i) => (
          <Link {...link} key={i}>
            <Typography
              className={classNames('font-semibold text-white/55 hover:text-white duration-300 transition-all', {
                '!text-white pointer-events-none': (link.href + '').includes(pathname)
              })}
              variant='h2'
            >
              {title}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  )
}
