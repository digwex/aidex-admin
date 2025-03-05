'use client'

import { useState } from 'react'

import { Fade, Modal } from '@mui/material'

import classNames from 'classnames'

import style from './mailingPopup.module.scss'

import './resetContentStyles.css'

interface Props {
  content: string
  mailingMethod: string
  header: string
}

const MailingContentPreview = ({ content, mailingMethod, header }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(prev => !prev)

  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('mailing_content_body')) toggleModal()
  }

  return (
    <div className='flex justify-center'>
      <button className='bg-transparent cursor-pointer' onClick={toggleModal}>
        <img className='w18' src='/images/icons/eye.svg' alt='Preview' />
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={isOpen}
        onClose={toggleModal}
        closeAfterTransition
        autoFocus={false}
        disableAutoFocus
        disableEnforceFocus
        disableRestoreFocus
      >
        <Fade in={isOpen}>
          <div className={classNames(style.mailing_content_body, 'mailing_content_body')} onClick={handleOutsideClick}>
            {mailingMethod === 'POP_UP' || mailingMethod === 'SITE' ? (
              <div className={classNames(style.mailing_content, style.popup_mailing, 'mailing_content popup_mailing')}>
                <div className={style.modal_body}>
                  <div
                    className={style.modal_title}
                    dangerouslySetInnerHTML={{
                      __html: header ?? ''
                    }}
                  ></div>
                  <div
                    className={style.modal_content}
                    dangerouslySetInnerHTML={{
                      __html: content ?? ''
                    }}
                  ></div>
                </div>
              </div>
            ) : (
              <div
                className={classNames(
                  style.mailing_content,
                  style.mailing_content_wrapper,
                  'mailing_content mailing_content_wrapper'
                )}
                dangerouslySetInnerHTML={{
                  __html: content
                }}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default MailingContentPreview
