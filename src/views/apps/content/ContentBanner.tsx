import Image from 'next/image'

import { Button, Card, CardContent, CardHeader } from '@mui/material'

export const ContentBanner = () => {
  return (
    <Card>
      <CardHeader
        title='Баннер 1'
        action={
          <Button variant='outlined' color='error' className='flex items-center gap-2'>
            <i className='tabler-trash ' />
            <p>Удалить</p>
          </Button>
        }
      />
      <CardContent>
        <Image src='/images/content/banner-1.svg' alt='banner' className='w-full h-full' width={378} height={203} />
      </CardContent>
    </Card>
  )
}
