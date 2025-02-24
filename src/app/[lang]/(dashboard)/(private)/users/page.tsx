import UsersTable from '@/views/apps/users/UsersTable'

export const runtime = 'edge'

const Users = () => {
  return (
    <div className='space-y-6'>
      <UsersTable />
    </div>
  )
}

export default Users
