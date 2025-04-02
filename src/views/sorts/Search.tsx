import CustomTextField from '@/@core/components/mui/TextField'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setSearchTerm } from '@/redux-store/slices'

export const Search = () => {
  const dispatch = useAppDispatch()

  const value = useAppSelector(state => state.search.value)

  const handleSearch = (value: string) => {
    dispatch(setSearchTerm(value))
  }

  return (
    <CustomTextField
      value={value}
      onChange={e => {
        handleSearch(e.target.value)
      }}
      className='max700:w-full'
      placeholder='Найти по ID / Клиенту'
    />
  )
}
