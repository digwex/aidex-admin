'use-client'

import { useParams, usePathname } from 'next/navigation'

import type { Locale } from '@/configs/i18n'
import { SubMenu, MenuItem } from '@menu/vertical-menu'

type LanguageDataType = {
  langCode: Locale
  langName: string
}

const languageData: LanguageDataType[] = [
  {
    langCode: 'en',
    langName: 'English'
  },
  {
    langCode: 'fr',
    langName: 'French'
  },
  {
    langCode: 'ar',
    langName: 'Arabic'
  }
]

export const LangSelector = () => {
  const { lang } = useParams()
  const pathName = usePathname()

  const getLocalePath = (pathName: string, locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')

    segments[1] = locale

    return segments.join('/')
  }

  return (
    <SubMenu label={'Язык'} icon={<i className='tabler-world' />}>
      {languageData.map(({ langCode, langName }) => (
        <MenuItem forceActive={lang === langCode} href={getLocalePath(pathName, langCode)} key={langCode}>
          {langName}
        </MenuItem>
      ))}
    </SubMenu>
  )
}
