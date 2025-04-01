import { MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import { setSearchByTake } from '@/redux-store/slices'
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux'

export const SelectTakeAmount = () => {
  const dispatch = useAppDispatch()

  const take = useAppSelector(state => state.search.take)

  const handleChange = (value: string) => {
    if (take === value) return

    dispatch(setSearchByTake(value))
  }

  return (
    <CustomTextField
      value={take}
      onChange={e => {
        handleChange(e.target.value)
      }}
      className='max700:w-full'
      select
      defaultValue='today'
    >
      <MenuItem value='today'>Сегодня</MenuItem>
      <MenuItem value='10 записей'>10 записей</MenuItem>
      <MenuItem value='25 записей'>25 записей</MenuItem>
      <MenuItem value='50 записей'>50 записей</MenuItem>
      <MenuItem value='Все'>Все</MenuItem>
    </CustomTextField>
  )
}
