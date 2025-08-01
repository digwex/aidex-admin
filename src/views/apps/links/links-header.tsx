import { Paper } from '@mui/material'

import DataPickerRange from '@/views/DataPickerRange'
import { AddLinkModal } from './add-link-modal'
import { DeleteLinkModal } from './delete-link-modal'
import { EditLinkModal } from './edit-link-modal'

export const LinksHeader = () => {
  return (
    <Paper className='p-4'>
      <div className='flex justify-end items-center gap-3 max800:flex-col'>
        <DataPickerRange />
        <AddLinkModal />
        <EditLinkModal />
        <DeleteLinkModal />
      </div>
    </Paper>
  )
}
