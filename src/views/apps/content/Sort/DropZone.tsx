'use client'

import { useState } from 'react'

import type { BoxProps } from '@mui/material'
import { Typography, Button, List, styled, IconButton, ListItem } from '@mui/material'

import { useDropzone } from 'react-dropzone'

import CustomAvatar from '@/@core/components/mui/Avatar'
import AppReactDropzone from '@/libs/styles/AppReactDropzone'

const Dropzone = styled(AppReactDropzone)<BoxProps>(({ theme }) => ({
  '& .dropzone': {
    minHeight: 'unset',
    padding: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      paddingInline: theme.spacing(5)
    },
    '&+.MuiList-root .MuiListItem-root .file-name': {
      fontWeight: theme.typography.body1.fontWeight
    }
  }
}))

type FileProp = {
  name: string
  type: string
  size: number
}

type FilesProp = {
  files: FileProp[]
  handleRemoveFile: (file: FileProp) => void
}

export const DropZone = () => {
  const [files, setFiles] = useState<File[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)

    setFiles([...filtered])
  }

  return (
    <Dropzone>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className='flex items-center flex-col gap-2 text-center'>
          <CustomAvatar variant='rounded' skin='light' color='secondary'>
            <i className='tabler-upload' />
          </CustomAvatar>
          <Typography variant='h6'>Перетащите изобращение сюда</Typography>
          <Typography color='text.disabled'>или</Typography>
          <Button variant='tonal' size='small'>
            загрузите файл
          </Button>
        </div>
      </div>
      {files.length ? <Files files={files} handleRemoveFile={handleRemoveFile} /> : null}
    </Dropzone>
  )
}

const Files = ({ files, handleRemoveFile }: FilesProp) => {
  const renderFilePreview = (file: FileProp) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
    } else {
      return <i className='tabler-file-description' />
    }
  }

  return (
    <List>
      {files.map((file: FileProp) => (
        <ListItem key={file.name} className='pis-4 plb-3'>
          <div className='file-details'>
            <div className='file-preview'>{renderFilePreview(file)}</div>
            <div>
              <Typography className='file-name font-medium' color='text.primary'>
                {file.name}
              </Typography>
              <Typography className='file-size' variant='body2'>
                {Math.round(file.size / 100) / 10 > 1000
                  ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
                  : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
              </Typography>
            </div>
          </div>
          <IconButton onClick={() => handleRemoveFile(file)}>
            <i className='tabler-x text-xl' />
          </IconButton>
        </ListItem>
      ))}
    </List>
  )
}
