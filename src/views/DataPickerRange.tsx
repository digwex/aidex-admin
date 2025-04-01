// React Imports
import { useState, forwardRef, useLayoutEffect } from 'react'

// MUI Imports
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import { format, addDays } from 'date-fns'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/TextField'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setSearchByDate, setSearchByDateTime } from '@/redux-store/slices'

type CustomInputProps = TextFieldProps & {
  label?: string
  end: Date | number
  start: Date | number
}

const DataPickerRange = () => {
  const data = useAppSelector(s => s.search.date)

  // States
  // const [startDate, setStartDate] = useState<Date | null | undefined>(new Date())
  // const [endDate, setEndDate] = useState<Date | null | undefined>(addDays(new Date(), 15))
  const dispatch = useAppDispatch()

  const handleOnChange = (dates: [Date | null, Date | null]) => {
    // console.debug('HANDLE CHANGE', dates)
    const from = dates[0]
    const to = dates[1]

    if (from && !to) {
      dispatch(setSearchByDate([from.getTime(), from.getTime()]))
    }

    if (from && to) {
      dispatch(setSearchByDate([from.getTime(), to.getTime()]))
    }

    // const [start, end] = dates

    // setStartDate(start)
    // setEndDate(end)
  }

  const CustomInput = forwardRef((props: CustomInputProps, ref) => {
    const { start, end, ...rest } = props

    const startDate = format(start, 'MM/dd/yyyy')
    const endDate = end !== null ? ` - ${format(end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField fullWidth inputRef={ref} {...rest} value={value} />
  })

  return (
    <AppReactDatepicker
      selectsRange
      boxProps={{
        className: 'max800:w-full'
      }}
      endDate={new Date(data[1])}
      selected={new Date(data[0])}
      startDate={new Date(data[0])}
      id='date-range-picker'
      onChange={handleOnChange}
      shouldCloseOnSelect={false}
      customInput={<CustomInput start={data[0]} end={data[1]} />}
    />
  )
}

export default DataPickerRange
