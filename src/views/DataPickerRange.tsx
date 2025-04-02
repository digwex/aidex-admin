// React Imports
import { forwardRef } from 'react'

// MUI Imports
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import { format } from 'date-fns'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/TextField'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setSearchByDate } from '@/redux-store/slices'

type CustomInputProps = TextFieldProps & {
  label?: string
  end: Date | number | null
  start: Date | number | null
}

const DataPickerRange = () => {
  const data = useAppSelector(s => s.search.date)

  // States
  // const [startDate, setStartDate] = useState<Date | null | undefined>(new Date())
  // const [endDate, setEndDate] = useState<Date | null | undefined>(addDays(new Date(), 15))
  const dispatch = useAppDispatch()

  const handleOnChange = (dates: [Date | null, Date | null]) => {
    // console.debug('HANDLE CHANGE', dates)

    const [from, to] = dates

    console.debug(dates)

    dispatch(setSearchByDate([from?.getTime() ?? null, to?.getTime() ?? null]))
  }

  const CustomInput = forwardRef((props: CustomInputProps, ref) => {
    const { start, end, ...rest } = props

    const startDate = start !== null ? format(start, 'dd/MM/yyyy') : null
    const endDate = end !== null ? ` - ${format(end, 'dd/MM/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField fullWidth inputRef={ref} {...rest} value={value} />
  })

  return (
    <AppReactDatepicker
      selectsRange
      boxProps={{
        className: 'max800:w-full'
      }}
      startDate={data[0] ? new Date(data[0]) : undefined}
      endDate={data[1] ? new Date(data[1]) : undefined}
      id='date-range-picker'
      onChange={handleOnChange}
      shouldCloseOnSelect={false}
      customInput={<CustomInput start={data[0]} end={data[1]} />}
    />
  )
}

export default DataPickerRange
