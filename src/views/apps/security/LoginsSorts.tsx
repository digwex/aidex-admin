import DataPickerRange from '@/views/DataPickerRange'
import { Search } from '@/views/sorts/Search'
import { SelectRange } from '@/views/sorts/SelectRange'
import { SelectTakeAmount } from '@/views/sorts/SelectTakeAmount'

export const LoginsSorts = () => {
  return (
    <div className='flex items-center gap-2 max800:flex-wrap'>
      <div className='flex items-center gap-2 max800:flex-wrap max800:w-full'>
        <Search />
        <DataPickerRange />
      </div>

      <div className='flex items-center gap-2 max800:flex-wrap max800:w-full'>
        <SelectRange />
        <SelectTakeAmount />
      </div>
    </div>
  )
}
