'use client'

import { useState } from 'react'

import type { DialogProps } from '@mui/material'
import { Dialog, DialogTitle } from '@mui/material'

import classNames from 'classnames'

import DialogCloseButton from './dialogs/DialogCloseButton'

interface Props extends Omit<DialogProps, 'content' | 'open'> {
  openButton: (value: { open: boolean; openModal: () => void }) => React.ReactNode
  modalContent: (value: { open: boolean; closeModal: () => void }) => React.ReactNode
  onModalClose?: () => void
  onModalOpen?: () => void
  contentClassName?: string
}

const ModalButton = ({ modalContent, openButton, onModalClose, onModalOpen, contentClassName, ...props }: Props) => {
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
    onModalClose?.()
  }

  const openModal = () => {
    setOpen(true)
    onModalOpen?.()
  }

  return (
    <>
      {openButton({ open, openModal })}
      <Dialog
        closeAfterTransition={true}
        scroll='body'
        {...props}
        PaperProps={{ sx: { overflow: 'visible', ...props?.PaperProps?.sx }, ...props?.PaperProps }}
        open={open}
        onClose={closeModal}
      >
        <DialogTitle className='text-center plb-4 text-2xl'>
          {props.title}

          <DialogCloseButton onClick={closeModal} disableRipple>
            <i className='tabler-x'></i>
          </DialogCloseButton>
        </DialogTitle>

        <div className={classNames('p-5', contentClassName)}>{modalContent({ open, closeModal })}</div>
      </Dialog>
    </>
  )
}

export default ModalButton
