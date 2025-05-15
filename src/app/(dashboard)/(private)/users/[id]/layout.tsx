import { PersonalData } from '@/views/apps/users/user/PersonalData'
import { Head } from '@/views/apps/users/user/Head'
import { Sessions } from '@/views/apps/users/user/Sessions'
import { Actions } from '@/views/apps/users/user/Actions'
import UserTableSorts from '@/views/apps/users/user/UserTableSorts'

interface Props {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

const PartnerLayout = async ({ children, params }: Props) => {
  const { id } = await params

  return (
    <div className='space-y-4'>
      <Head />
      <Actions />

      <div className='grid grid-cols-2 gap-4 max1300:grid-cols-1'>
        <PersonalData />
        <Sessions />
      </div>

      {/* <Documents /> */}

      <div className='space-y-4'>
        <UserTableSorts id={id} />
        {children}
      </div>
    </div>
  )
}

export default PartnerLayout
