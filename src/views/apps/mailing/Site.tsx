'use client'

import { useState, useRef, useEffect } from 'react'

import { Button, Card, CardContent, MenuItem, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import { EditorProvider } from '@/components/SunEditor/EditorProvider'
import { CustomSunEditor } from '@/components/SunEditor/SunEditor'
import { MAILING_LANGS, SITE_MAILING_METHOD, SITE_MAILING_TARGET } from './constants'

export const SiteMailing = () => {
  const [editorData, setEditorData] = useState('')
  const editorRef = useRef<any>(null)

  const headerRef = useRef<HTMLInputElement>(null)

  const [mailingMethod, setMailingMethod] = useState<string>(SITE_MAILING_METHOD[0].value)
  const [language, setLanguage] = useState<string>(MAILING_LANGS[0].value)
  const [mailingTarget, setMailingTarget] = useState<string>(SITE_MAILING_TARGET[0].value)

  // const [mutationTrader, { isLoading: isLoadingUser }] = useCreateMailingMutation()
  // const [mutationPartner, { isLoading: isLoadingPartner }] = useCreateMailingPartnerMutation()

  const handleCreateMailing = async ({ isTest }: { isTest: boolean }) => {
    // if (isLoadingUser || isLoadingPartner) return

    if (!headerRef.current?.value.trim().length) {
      if (mailingMethod === 'Поп-ап') {
        toast.error('Введите тему письма')
      } else {
        toast.error('Введите заголовок')
      }

      return
    }

    if (headerRef.current?.value.trim().length < 10) {
      if (mailingMethod === 'Поп-ап') {
        toast.error('Тема письма должна быть не менее 10 символов')
      } else {
        toast.error('Заголовок должен быть не менее 10 символов')
      }

      return
    }

    if (editorData.length < 10) {
      if (mailingMethod === 'Поп-ап') {
        toast.error('Текст письма должен быть не менее 10 символов')
      } else {
        toast.error('Описание должно быть не менее 10 символов')
      }

      return
    }

    const result = {
      mailingMethod,
      mailingTarget,
      CountryCode: language === 'ALL' ? undefined : language,
      header: headerRef.current?.value.trim(),
      content: editorData,
      isTest
    }

    console.debug('result', result)

    // void toast.promise(
    //   query({
    //     mailingMethod: mailingMethodValue,
    //     mailingTarget,
    //     CountryCode: getLanguageCodes(language),
    //     header: headerRef.current?.value.trim(),
    //     content: editorData,
    //     isTest
    //   }).unwrap(),
    //   {
    //     loading: 'Отправка...',
    //     success: () => {
    //       if (editorRef.current) {
    //         //  editorRef.current?.setContents('')
    //       }

    //       //  setMailingMethod('Поп-ап')
    //       //  headerRef.current!.value = ''

    //       return 'Успешно отправлено'
    //     },
    //     error: error => {
    //       if (typeof error?.data?.message === 'string') {
    //         return error.data.message
    //       }

    //       return 'Ошибка при отправке'
    //     }
    //   }
    // )
  }

  const getEditorRef = (editor: any) => {
    editorRef.current = editor
  }

  useEffect(() => {
    setEditorData('')
  }, [mailingMethod])

  return (
    <div>
      <div className='space-y-4'>
        <div className='flex items-center gap-3 max1000:flex-col'>
          <CustomTextField
            onChange={e => {
              setMailingTarget(e.target.value)
            }}
            fullWidth
            select
            label='Кому'
            value={mailingTarget}
          >
            {SITE_MAILING_TARGET.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </CustomTextField>

          <CustomTextField
            value={language}
            onChange={e => {
              setLanguage(e.target.value)
            }}
            fullWidth
            select
            label='Выберите языки'
          >
            {MAILING_LANGS.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </CustomTextField>

          <CustomTextField
            value={mailingMethod}
            onChange={e => {
              setMailingMethod(e.target.value)
            }}
            fullWidth
            select
            label='Метод отправки'
          >
            {SITE_MAILING_METHOD.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </CustomTextField>
        </div>

        <CustomTextField ref={headerRef} fullWidth label='Тема письма' />
      </div>

      <div className='grid grid-rows-[auto_1fr_auto] gap-3'>
        <Typography className='mbe-1'>Ваше письмо</Typography>
        <Card className='p-0 border shadow-none'>
          <CardContent className='p-0 h-full'>
            <EditorProvider>
              <CustomSunEditor setValue={setEditorData} setRefToParent={getEditorRef} />
            </EditorProvider>
          </CardContent>
        </Card>
        <div className='flex items-center gap-3 justify-end max700:flex-col'>
          <Button
            onClick={async () => await handleCreateMailing({ isTest: true })}
            variant='contained'
            color='success'
            className='max700:w-full'
          >
            Отправить на выбраных
          </Button>
          <Button
            onClick={async () => await handleCreateMailing({ isTest: true })}
            variant='contained'
            color='warning'
            className='max700:w-full'
          >
            Отправить тестово
          </Button>
        </div>
      </div>
    </div>
  )
}
