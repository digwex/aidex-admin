export const RESOURCE_CUSTOM_BUTTON_CLASS = 'append_custom_btn'
export const RESOURCE_CUSTOM_BUTTON_EDIT_ID = 'data-link-edit-id'
export const RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE = 'data-general-link'
export const RESOURCE_CUSTOM_BUTTON_DEFAULT_TEXT = 'Кнопка'
export const RESOURCE_DEFAULT_BG_COLOR = '#80F6BC'
export const RESOURCE_DEFAULT_TEXT_COLOR = '#ffffff'

export const defaultFonts = [
  'Arial',
  'Comic Sans MS',
  'Courier New',
  'Impact',
  'Georgia',
  'Tahoma',
  'Trebuchet MS',
  'Verdana'
]

export const sortedFontOptions = [
  'Logical',
  'Salesforce Sans',
  'Garamond',
  'Sans-Serif',
  'Serif',
  'Times New Roman',
  'Helvetica',
  ...defaultFonts
].sort()

export const initialButtonStyles = {
  styles: {
    color: '',
    fontSize: '',
    backgroundColor: '',
    paddingTopBottom: '',
    paddingOnSides: '',
    borderRadius: ''
  },
  text: '',
  link: '',
  isChecked: '',
  isGeneralLink: null
}

export const buttonStyleValidation = {
  paddingTopBottom: {
    min: '0',
    max: '50'
  },
  paddingOnSides: {
    min: '0',
    max: '50'
  },
  borderRadius: {
    min: '0',
    max: '100'
  },
  fontSize: {
    min: '0',
    max: '72'
  }
}

export const buttonDefaultStyle = {
  fontSize: '16',
  borderRadius: '4',
  paddingOnSides: '20',
  paddingTopBottom: '4'
}
