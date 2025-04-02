import { MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setSearchByDate, setSearchByDateTime } from '@/redux-store/slices'

export const SelectRange = () => {
  const dispatch = useAppDispatch()

  const value = useAppSelector(state => state.search.dateTime)

  const handleChange = (selectValue: string) => {
    if (selectValue === value) return

    let startDate: Date
    let endDate: Date

    switch (selectValue) {
      case 'Сегодня':
        startDate = new Date()
        startDate.setHours(0, 0, 0, 0)
        endDate = new Date()
        endDate.setHours(23, 59, 59, 999)
        dispatch(setSearchByDate([startDate.getTime(), endDate.getTime()]))
        dispatch(setSearchByDateTime('Сегодня'))
        break
      case 'Вчера':
        startDate = new Date(new Date().getTime() - 86400000)
        startDate.setHours(0, 0, 0, 0)
        endDate = new Date(new Date().getTime())
        endDate.setHours(23, 59, 59, 999)
        dispatch(setSearchByDate([startDate.getTime(), endDate.getTime()]))
        dispatch(setSearchByDateTime('Вчера'))
        break
      case '7 дней':
        startDate = new Date(new Date().getTime() - 604800000)
        startDate.setHours(0, 0, 0, 0)
        endDate = new Date()
        endDate.setHours(23, 59, 59, 999)
        dispatch(setSearchByDate([startDate.getTime(), endDate.getTime()]))
        dispatch(setSearchByDateTime('7 дней'))
        break
      default:
        startDate = new Date(new Date().getTime() - 12 * 30 * 24 * 60 * 60 * 1000)

        startDate.setHours(0, 0, 0, 0)
        endDate = new Date()

        endDate.setHours(23, 59, 59, 999)
        dispatch(setSearchByDate([startDate.getTime(), endDate.getTime()]))
        dispatch(setSearchByDateTime('Все'))
        break
    }
  }

  return (
    <CustomTextField
      onChange={e => {
        handleChange(e.target.value)
      }}
      className='max700:w-full'
      select
      value={value}
    >
      <MenuItem value='Сегодня'>Сегодня</MenuItem>
      <MenuItem value='Вчера'>Вчера</MenuItem>
      <MenuItem value='7 дней'>7 дней</MenuItem>
      <MenuItem value='Все'>Все</MenuItem>
    </CustomTextField>
  )
}
