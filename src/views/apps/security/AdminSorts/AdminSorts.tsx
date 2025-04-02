import { AddAmin } from './AddAmin'
import { EditAdmin } from './EditAdmin'
import { DeleteAdmin } from './DeleteAdmin'

export const AdminSorts = () => {
  return (
    <div className='flex items-center gap-3 max800:flex-col-reverse max800:w-full'>
      <AddAmin />
      <EditAdmin />
      <DeleteAdmin />
    </div>
  )
}
