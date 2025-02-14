'use client'

import { useState } from 'react'

import type { InputBaseProps } from '@mui/material'
import { ClickAwayListener, InputBase } from '@mui/material'
import type { SxProps } from '@mui/system'
import classNames from 'classnames'

interface Props {
  input?: InputBaseProps & { sx?: SxProps }
  buttonClassName?: string
  wrapperClassName?: string
}

export const EditInput = ({ input, buttonClassName, wrapperClassName }: Props) => {
  const { sx, ...inputProps } = input ?? {}

  const [isEdit, setIsEdit] = useState(false)

  const clickAway = () => {
    setIsEdit(false)
  }

  const onClick = () => {
    if (isEdit) {
      clickAway()

      return
    }

    setIsEdit(true)
  }

  return (
    <ClickAwayListener onClickAway={clickAway}>
      <div className={classNames('flex items-center gap-2', wrapperClassName)}>
        <InputBase
          sx={{
            flex: 1,
            fontSize: '1.125rem',
            fontWeight: 500,
            '& .MuiInputBase-input': {
              p: 0
            },

            ...sx
          }}
          inputProps={{ 'aria-label': 'edit field' }}
          {...inputProps}
          readOnly={!isEdit}
        />
        <button onClick={onClick} className={classNames('cursor-pointer bg-transparent', buttonClassName)}>
          <img src='/images/icons/input-edit.svg' alt='edit' />
        </button>
      </div>
    </ClickAwayListener>
  )
}
