import { useState } from 'react'

import { IconButton } from '@mui/material'

export const useShowSecretInput = () => {
  const [type, setType] = useState<'password' | 'text'>('password')

  const toggleType = () => setType(type === 'password' ? 'text' : 'password')

  const Element = () => (
    <IconButton onClick={toggleType}>
      {type === 'password' && <i className='tabler-eye' />}
      {type === 'text' && <i className='tabler-eye-off' />}
    </IconButton>
  )

  return { Element, type }
}
