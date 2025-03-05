'use client'

import { useState, useRef } from 'react'

import { Button, Card, CardContent, MenuItem, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import { EditorProvider } from '@/components/SunEditor/EditorProvider'
import { CustomSunEditor } from '@/components/SunEditor/SunEditor'
import { EMAIL_MAILING_TARGET, MAILING_LANGS } from './constants'
import { MailPattern } from './MailPattern'

export const BotMailing = () => {
  const [editorData, setEditorData] = useState('')

  const editorRef = useRef<any>(null)

  const headerRef = useRef<HTMLInputElement>(null)
  const [mailingTarget, setMailingTarget] = useState<string>(EMAIL_MAILING_TARGET[0].value)
  const [language, setLanguage] = useState<string>(MAILING_LANGS[0].value)

  // const [mutation, { isLoading }] = useCreateMailingMutation()

  const handleCreateMailing = async ({ isTest }: { isTest: boolean }) => {
    if (!headerRef.current?.value.trim().length) {
      toast.error('Введите тему письма')

      return
    }

    if (headerRef.current?.value.trim().length < 10) {
      toast.error('Тема письма должна быть не менее 10 символов')

      return
    }

    if (editorData.length < 10) {
      toast.error('Текст письма должен быть не менее 10 символов')

      return
    }

    const textWithPattern = MailPattern(editorData)

    const result = {
      mailingMethod: 'EMAIL',
      mailingTarget,
      CountryCode: language === 'ALL' ? undefined : language,
      header: headerRef.current?.value.trim(),
      content: textWithPattern,
      isTest
    }

    console.debug('MAIL RESULT', result)
  }

  const getEditorRef = (editor: any) => {
    editorRef.current = editor
  }

  return (
    <div>
      <div className='space-y-4'>
        <div className='flex items-center gap-3 max1000:flex-col'>
          <CustomTextField
            fullWidth
            select
            label='Кому'
            value={mailingTarget}
            onChange={e => {
              setMailingTarget(e.target.value)
            }}
          >
            {EMAIL_MAILING_TARGET.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </CustomTextField>

          <CustomTextField
            onChange={e => {
              setLanguage(e.target.value)
            }}
            fullWidth
            select
            value={language}
            label='Выберите языки'
          >
            {MAILING_LANGS.map(({ label, value }) => (
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
