import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  id: string
}

const UserTableSorts = ({ id }: Props) => {
  const tabs = [
    {
      value: `/users/${id}`,
      label: 'Все транзакции'
    },
    {
      value: `/users/${id}/transaction`,
      label: 'Пополнения'
    },
    {
      value: `/users/${id}/withdrawal`,
      label: 'Выводы'
    },
    {
      value: `/users/${id}/links`,
      label: 'Партнёрские ссылки'
    },
    {
      value: `/users/${id}/pnl`,
      label: 'Сделки + PNL'
    }
  ]

  return <Sorts tabs={{ tabs }} />
}

export default UserTableSorts
