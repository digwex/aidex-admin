import { type KYCLevel } from '../api/endpoints/users/users-types'
import { getItemFromLocalStorage } from './localStorageService'

export const convertFileToBase64 = async (file: File): Promise<string | null> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result as string | null

      resolve(result)
    }

    reader.onerror = () => {
      reject(new Error('Failed to read the file.'))
    }

    reader.readAsDataURL(file)
  })
}

export const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[­~!?$_#<>().%@])[a-zA-Z\d~!?$_\-&#<>().%@]{8,25}$/

export const kycLevels: Record<KYCLevel, number> = {
  NO_DATA: 0,
  AI_REVIEW: 1,
  MANUAL_REVIEW: 2,
  INCOME_PROOF: 3
}

export const transform = (option: string) => {
  const currentDate = new Date()

  switch (option) {
    case 'Сегодня':
      return currentDate.toISOString() // Use any date formatting as needed
    case 'Вчера':
      // eslint-disable-next-line no-case-declarations
      const yesterday = new Date(currentDate)

      yesterday.setDate(currentDate.getDate() - 1)

      return yesterday.toISOString()
    case '7 дней':
      // eslint-disable-next-line no-case-declarations
      const sevenDaysAgo = new Date(currentDate)

      sevenDaysAgo.setDate(currentDate.getDate() - 7)

      return sevenDaysAgo.toISOString()
    default:
      return undefined // Return empty string for 'Все' or any other case
  }
}

export const ROLES = ['Owner', 'Admin', 'Developer', 'Support', 'Affiliate']

export const LANGUAGES = {
  'ru-RU': 'Русский',
  'en-US': 'English',
  'fr-FR': 'Français',
  'de-DE': 'Deutsch',
  'es-ES': 'Español',
  'uk-UA': 'Українська',
  'tr-TR': 'Türkçe',
  'hi-IN': 'हिन्दी'
}

export const getDefaultLanguage = () => {
  const lang = getItemFromLocalStorage('lang')
  const languages = Object.values(LANGUAGES)

  if (lang) {
    document.documentElement.lang = lang

    return lang
  }

  if (navigator?.language) {
    const findLang = languages.find(lang => lang.startsWith(navigator.language))

    if (findLang) {
      document.documentElement.lang = findLang

      return findLang
    }
  }

  document.documentElement.lang = languages[0]

  return languages[0]
}
