import { Sorts } from '@/views/sorts/Sorts'
import type { Locale } from '@/configs/i18n'

interface Props {
  id: string
  lang: Locale
}

const PartnersTableSorts = ({ id, lang }: Props) => {
  const tabs = [
    {
      value: `/${lang}/apps/partners/${id}`,
      label: 'Список выплат'
    },
    {
      value: `/${lang}/apps/partners/${id}/statistic`,
      label: 'Глубокая статистика'
    },
    {
      value: `/${lang}/apps/partners/${id}/hold`,
      label: 'Реферальные начисления на холд баланс'
    },
    {
      value: `/${lang}/apps/partners/${id}/subAffiliates`,
      label: 'Суб-партнеры'
    }
  ]

  return <Sorts tabs={{ tabs }} />
}

export default PartnersTableSorts
