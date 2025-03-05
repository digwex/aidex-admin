import {
  RESOURCE_CUSTOM_BUTTON_CLASS,
  RESOURCE_CUSTOM_BUTTON_EDIT_ID,
  RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE
} from './constants'
import type { IExistButton } from './interface'

export const getLanguageCode = (currentLang: string) => {
  switch (currentLang) {
    case 'hi':
      return 'en'
    case 'uk':
      return 'ua'
    case 'tr':
      return 'en'
    default:
      return currentLang
  }
}

export const createCustomToolbarButton = (className: string) => {
  const insertPattern = `
      <ul class="se-menu-list">
        <li>
          <button
            type="button"
            class="se-btn se-tooltip"
            data-display=""
            aria-label="Очистить форматирование"
            tabindex='-1'>
            Добавить кнопку
          </button>
        </li>
      </ul>
  `

  const button = document.createElement('div')

  button.innerHTML = insertPattern
  button.classList.add('se-btn-module', 'se-btn-module-border', className)

  return button
}

export const insertCustomToolbarButton = (callback: () => void) => {
  const toolbar = document.querySelector('.se-btn-tray')

  if (toolbar) {
    const isButtonExist = toolbar.querySelector('.' + RESOURCE_CUSTOM_BUTTON_CLASS)

    if (!isButtonExist) {
      const button = createCustomToolbarButton(RESOURCE_CUSTOM_BUTTON_CLASS)

      button.addEventListener('click', callback)
      toolbar.appendChild(button)
    }
  }
}

export const setButtonStyles = (
  linkElement: HTMLLinkElement,
  isChecked: boolean,
  url: string,
  text: string,
  textColor: string,
  fontSize: string,
  bgColor: string,
  paddingTopBottom: string,
  paddingOnSides: string,
  borderRadius: string,
  BUTTON_ID?: string
) => {
  linkElement.setAttribute('href', url)

  if (isChecked) {
    linkElement.setAttribute('target', '_blank')
  }

  linkElement.setAttribute('contenteditable', 'false')
  linkElement.style.color = textColor
  linkElement.style.backgroundColor = bgColor
  linkElement.style.fontSize = Number(fontSize) + 'px'
  linkElement.style.padding = `${Number(paddingTopBottom)}px ${Number(paddingOnSides)}px`
  linkElement.style.borderRadius = Number(borderRadius) + 'px'
  linkElement.style.display = 'inline-block'
  linkElement.style.textDecoration = 'none'

  linkElement.innerHTML = text
  if (BUTTON_ID) linkElement.setAttribute(RESOURCE_CUSTOM_BUTTON_EDIT_ID, BUTTON_ID)

  return linkElement
}

export const getDataExistButton = (button: HTMLLinkElement): IExistButton => {
  const { color, fontSize, backgroundColor, padding, borderTopLeftRadius: borderRadius } = button.style

  const text = button.textContent
  const url = button.getAttribute('href')
  const isChecked = button.getAttribute('target')

  const isGeneralLink = button.hasAttribute(RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE)

  const paddings = padding.split(' ')

  const result = {
    isGeneralLink: isGeneralLink ? true : null,
    text: text ?? '',
    link: url ?? '',
    isChecked: isChecked ?? '',
    styles: {
      color,
      fontSize: fontSize.replace('px', ''),
      backgroundColor,
      borderRadius: borderRadius.replace('px', ''),
      paddingTopBottom: paddings[0].replace('px', ''),
      paddingOnSides: paddings[1] ? paddings[1].replace('px', '') : paddings[0].replace('px', '')
    }
  }

  return result
}

export const handleAddButtonEditModal = (
  handleClick: (e: Event) => void,
  setGeneralLinkRef: (value: boolean | null) => void,
  generalLinkRef: boolean | null
) => {
  const editor = document.querySelector('.suneditor')
  const links = editor?.querySelectorAll(`[${RESOURCE_CUSTOM_BUTTON_EDIT_ID}]`)

  const generalLinks = editor?.querySelector(`[${RESOURCE_CUSTOM_BUTTON_GENERAL_LINK_ATTRIBUTE}]`)

  if (links) {
    links.forEach(link => {
      const isContentEditable = link.getAttribute('contenteditable')

      if (isContentEditable !== 'false') {
        link.setAttribute('contenteditable', 'false')
      }

      link.removeEventListener('click', handleClick)
      link.addEventListener('click', handleClick)
    })
  }

  if (!generalLinks && generalLinkRef) {
    setGeneralLinkRef(null)
  }
}
