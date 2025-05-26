import type { TextFieldProps } from '@mui/material/TextField'

import classNames from 'classnames'

import CustomTextField from '@/@core/components/mui/TextField'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setSearchTerm } from '@/redux-store/slices'

export const Search = (props: TextFieldProps) => {
  const dispatch = useAppDispatch()

  const value = useAppSelector(state => state.search.value)

  const handleSearch = (value: string) => {
    dispatch(setSearchTerm(value))
  }

  return (
    <CustomTextField
      placeholder='Поиск...'
      {...props}
      value={value}
      onChange={e => {
        handleSearch(e.target.value)
      }}
      className={classNames('max700:w-full', props.className)}
    />
  )
}
