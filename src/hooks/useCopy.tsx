import { useState } from 'react'

import { IconButton } from '@mui/material'
import cn from 'classnames'

export const useCopy = (text: string) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(text)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error('copy error', error)
    }
  }

  return { isCopied, handleCopy }
}

export const CopyButton = ({ text }: { text: string }) => {
  const { isCopied, handleCopy } = useCopy(text)

  return (
    <IconButton className={cn({ 'pointer-events-none': isCopied })} onClick={handleCopy}>
      {isCopied ? <i className='tabler-copy-check-filled' /> : <i className='tabler-copy' />}
    </IconButton>
  )
}
