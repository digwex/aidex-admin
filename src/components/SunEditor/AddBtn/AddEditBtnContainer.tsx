import { useId, useLayoutEffect, useState } from 'react'

import isUrl from 'is-url'

import { toast } from 'react-toastify'

import { useToggle } from 'react-use'

import { setButtonStyles } from '../helpers'
import type { IAddEditBtnContainer } from '../interface'
import { ModalBtn } from './ModalBtn'
import {
  RESOURCE_CUSTOM_BUTTON_DEFAULT_TEXT,
  RESOURCE_DEFAULT_BG_COLOR,
  RESOURCE_DEFAULT_TEXT_COLOR,
  buttonDefaultStyle,
  RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE
} from '../constants'

export const AddEditBtnContainer = ({
  onClose,
  toggleEditButtonModal,
  resetButtonData,
  editor,
  buttonData,
  isEditButton = false,
  nodeButton,
  setGeneralLinkRef,
  generalLinkRef
}: IAddEditBtnContainer) => {
  const title = isEditButton ? 'Редактировать кнопку' : 'Вставить кнопку'

  const BUTTON_ID = useId()

  const [bgColor, setBgColor] = useState(buttonData?.styles.backgroundColor || RESOURCE_DEFAULT_BG_COLOR)

  const [isBgColorOpen, toggleBgColor] = useToggle(false)

  const [textColor, setTextColor] = useState(buttonData?.styles.color || RESOURCE_DEFAULT_TEXT_COLOR)

  const [isTextColorOpen, toggleTextColor] = useToggle(false)

  const [borderRadius, setBorderRadius] = useState(buttonData?.styles.borderRadius || buttonDefaultStyle.borderRadius)

  const [paddingOnSides, setPaddingOnSides] = useState(
    buttonData?.styles.paddingOnSides || buttonDefaultStyle.paddingOnSides
  )

  const [paddingTopBottom, setPaddingTopBottom] = useState(
    buttonData?.styles.paddingTopBottom || buttonDefaultStyle.paddingTopBottom
  )

  const [fontSize, setFontSize] = useState(buttonData?.styles.fontSize || buttonDefaultStyle.fontSize)

  const [text, setText] = useState(buttonData?.text || RESOURCE_CUSTOM_BUTTON_DEFAULT_TEXT)

  const [url, setUrl] = useState(buttonData?.link || '')

  const [isChecked, setIsChecked] = useState(true)

  const [isGeneralLinkChecked, setIsGeneralLinkChecked] = useState(!!buttonData!.isGeneralLink)

  const handleClose = () => {
    if (toggleEditButtonModal && isEditButton && resetButtonData) {
      toggleEditButtonModal()
      resetButtonData()
    } else {
      onClose()
    }
  }

  const handleEditButton = () => {
    if (nodeButton)
      setButtonStyles(
        nodeButton,
        isChecked,
        url,
        text,
        textColor,
        fontSize,
        bgColor,
        paddingTopBottom,
        paddingOnSides,
        borderRadius
      )

    if (!isGeneralLinkChecked) {
      nodeButton?.removeAttribute(RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE)
      setGeneralLinkRef(null)
    } else {
      nodeButton?.setAttribute(RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE, '')
      setGeneralLinkRef(true)
    }

    const currentContent = editor.getContents()

    editor.setContents(currentContent)
    handleClose()
  }

  const handleAddButton = () => {
    const linkElement = editor.util.createElement('a')

    const styledLink = setButtonStyles(
      linkElement,
      isChecked,
      url,
      text,
      textColor,
      fontSize,
      bgColor,
      paddingTopBottom,
      paddingOnSides,
      borderRadius,
      BUTTON_ID
    )

    styledLink.setAttribute('data-suneditor-ignore', 'true')

    if (isGeneralLinkChecked) {
      styledLink.setAttribute(RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE, '')
      setGeneralLinkRef(true)
    }

    editor.insertHTML(styledLink, true, false, false)
    editor.insertHTML('&nbsp;', true, false, false)
    handleClose()
  }

  const handleSubmit = () => {
    if (editor) {
      const isRealUrl = isUrl(url)

      if (!isRealUrl || text.length === 0) {
        if (!isRealUrl) toast.error('Введите валидную ссылку')
        if (text.length === 0) toast.error('Введите текст')

        return
      }

      if (isEditButton && nodeButton) {
        handleEditButton()

        return
      }

      handleAddButton()
    }
  }

  useLayoutEffect(() => {
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  // const handleOutsideClick = (e: React.MouseEvent) => {
  //   if ((e.target as HTMLElement).classList.contains('se-dialog-inner'))
  //     handleClose()
  // }

  const props = {
    // handleOutsideClick,
    onCloseModal: handleClose,
    handleSubmit,
    toggleBgColor,
    toggleTextColor,
    setUrl,
    setText,
    setBorderRadius,
    setPaddingOnSides,
    setPaddingTopBottom,
    setFontSize,
    setBgColor,
    setTextColor,
    setIsChecked,
    setIsGeneralLinkChecked,
    isCreateGeneralLinkAvailable: generalLinkRef ? buttonData!.isGeneralLink !== null : true,
    isGeneralLinkChecked,
    title,
    url,
    text,
    borderRadius,
    paddingOnSides,
    paddingTopBottom,
    fontSize,
    bgColor,
    textColor,
    isChecked,
    isBgColorOpen,
    isTextColorOpen,
    defaultTextColor: RESOURCE_DEFAULT_TEXT_COLOR,
    defaultBgColor: RESOURCE_DEFAULT_BG_COLOR
  }

  return <ModalBtn {...props} />
}
