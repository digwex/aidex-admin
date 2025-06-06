import { Button } from '@mui/material'

import { shareMedias } from '@/utils/share-medias'
import ModalButton from '@/components/ModalButton'

interface Props {
  refSiteLink: string
  text: string
}

export const SharePnlInMedia = ({ refSiteLink, text }: Props) => {
  return (
    <>
      <ModalButton
        openButton={({ openModal }) => (
          <Button onClick={openModal} className='w-full' variant='contained' color='primary'>
            Поделиться
          </Button>
        )}
        modalContent={({}) => (
          <div className='flex min-w-[345px] flex-col  gap-2'>
            {shareMedias.map(media => {
              const onClick = () => {
                media.onClick(refSiteLink, text)
              }

              return (
                <Button
                  key={media.title}
                  onClick={onClick}
                  variant='outlined'
                  color='success'
                  className='w-full text-left'
                  type='button'
                >
                  {media.title}
                </Button>
              )
            })}
          </div>
        )}
      />
    </>
  )
}
