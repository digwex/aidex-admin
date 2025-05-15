import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  id: string
}

const PartnersTableSorts = ({ id }: Props) => {
  const tabs = [
    {
      value: `/partners/${id}`,
      label: 'Список выплат'
    },
    {
      value: `/partners/${id}/statistic`,
      label: 'Глубокая статистика'
    },
    {
      value: `/partners/${id}/hold`,
      label: 'Реферальные начисления на холд баланс'
    },
    {
      value: `/partners/${id}/sub-affiliates`,
      label: 'Суб-партнеры'
    }
  ]

  return <Sorts tabs={{ tabs }} />
}

export default PartnersTableSorts
