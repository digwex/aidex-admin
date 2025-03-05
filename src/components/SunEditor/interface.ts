import { type Dispatch, type SetStateAction } from 'react'

export interface ICustomSunEditor {
  setValue: Dispatch<SetStateAction<string>>
  setRefToParent?: (editor: any) => void
}

export interface IButtonStyles {
  color: string
  fontSize: string
  backgroundColor: string
  paddingTopBottom: string
  paddingOnSides: string
  borderRadius: string
}

export interface IExistButton {
  styles: IButtonStyles
  text: string
  link: string
  isChecked: string
  isGeneralLink: boolean | null
}

export interface IAddEditBtnContainer {
  editor: any
  onClose: () => void
  toggleEditButtonModal?: () => void
  resetButtonData?: () => void
  setGeneralLinkRef: (value: boolean | null) => void
  buttonData?: IExistButton
  isEditButton?: boolean
  nodeButton?: HTMLLinkElement | null
  generalLinkRef: boolean | null
}

export interface IModalBtn {
  handleOutsideClick?: (e: React.MouseEvent) => void
  onCloseModal: () => void
  handleSubmit: () => void
  toggleBgColor: () => void
  toggleTextColor: () => void
  setUrl: Dispatch<SetStateAction<string>>
  setText: Dispatch<SetStateAction<string>>
  setBorderRadius: Dispatch<SetStateAction<string>>
  setPaddingOnSides: Dispatch<SetStateAction<string>>
  setPaddingTopBottom: Dispatch<SetStateAction<string>>
  setFontSize: Dispatch<SetStateAction<string>>
  setBgColor: Dispatch<SetStateAction<string>>
  setTextColor: Dispatch<SetStateAction<string>>
  setIsChecked: Dispatch<SetStateAction<boolean>>
  setIsGeneralLinkChecked: Dispatch<SetStateAction<boolean>>
  isGeneralLinkChecked: boolean
  isCreateGeneralLinkAvailable: boolean
  title: string
  url: string
  text: string
  borderRadius: string
  paddingOnSides: string
  paddingTopBottom: string
  fontSize: string
  bgColor: string
  textColor: string
  defaultTextColor: string
  defaultBgColor: string
  isChecked: boolean
  isBgColorOpen: boolean
  isTextColorOpen: boolean
}

export interface IEditorInput {
  label: string
  value: string
  onChange: Dispatch<SetStateAction<string>>
  type?: string
  placeholder?: string
  min?: string
  max?: string
  focus?: boolean
}

export interface ICloseButton {
  onClose: () => void
}

export interface ISelectColor {
  color: string
  defaultColor: string
  labelText: string
  setColor: Dispatch<SetStateAction<string>>
  toggleOpen: () => void
  isOpen: boolean
}
