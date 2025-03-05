'use client'

import '@/libs/styles/tiptapEditor.css'

import { useRef, useState } from 'react'

import { Button, Card, CardContent, Typography } from '@mui/material'

import { EditorProvider } from '@/components/SunEditor/EditorProvider'
import { CustomSunEditor } from '@/components/SunEditor/SunEditor'

export const MailingEditor = () => {
  const [editorData, setEditorData] = useState('')
  const editorRef = useRef<any>(null)

  const getEditorRef = (editor: any) => {
    editorRef.current = editor
  }

  console.debug(editorData)

  return (
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
        <Button variant='contained' color='success' className='max700:w-full'>
          Отправить на выбраных
        </Button>
        <Button variant='contained' color='warning' className='max700:w-full'>
          Отправить тестово
        </Button>
      </div>
    </div>
  )
}
