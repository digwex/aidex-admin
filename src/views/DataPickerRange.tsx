// React Imports
import { useState, forwardRef } from 'react'

// MUI Imports
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import { format, addDays } from 'date-fns'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/TextField'

type CustomInputProps = TextFieldProps & {
  label?: string
  end: Date | number
  start: Date | number
}

const DataPickerRange = () => {
  // States
  const [startDate, setStartDate] = useState<Date | null | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | null | undefined>(addDays(new Date(), 15))

  const handleOnChange = (dates: any) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
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
      endDate={endDate as Date}
      selected={startDate}
      startDate={startDate as Date}
      id='date-range-picker'
      onChange={handleOnChange}
      shouldCloseOnSelect={false}
      customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
    />
  )
}

export default DataPickerRange
