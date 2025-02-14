import MenuItem from '@mui/material/MenuItem'

import CustomTextField from '@core/components/mui/TextField'

interface Option {
  value: string | number
  label: string
}

interface SelectCustomProps {
  label: string
  options: Option[]
  defaultValue?: string | number
  value?: string | number
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void
  [key: string]: any
}

const Select: React.FC<SelectCustomProps> = ({ label, options, defaultValue = '', onChange, value, ...props }) => {
  return (
    <CustomTextField select label={label} defaultValue={defaultValue} value={value} onChange={onChange} {...props}>
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </CustomTextField>
  )
}

export default Select
