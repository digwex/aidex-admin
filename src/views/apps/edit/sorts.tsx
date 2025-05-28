import { Paper } from '@mui/material'

import Tabs from '@/views/sorts/Tabs'
import { NAVIGATION_LINKS } from '@/utils/constants'

export const Sorts = () => {
  const tabs = [
    {
      value: NAVIGATION_LINKS.EDIT,
      label: 'Trends',
      icon: 'tabler-user-hexagon'
    },
    {
      value: NAVIGATION_LINKS.EDIT_HOT,
      label: 'Hot',
      icon: 'tabler-square-key'
    },
    {
      value: NAVIGATION_LINKS.EDIT_NEW,
      label: 'New',
      icon: 'tabler-square-key'
    }
  ]

  return (
    <Paper className='p-4 flex items-center gap-3 justify-between flex-wrap max800:flex-col'>
      <Tabs tabs={tabs} />
    </Paper>
  )
}
