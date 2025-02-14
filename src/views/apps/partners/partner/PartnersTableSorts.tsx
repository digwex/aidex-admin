import { Sorts } from '@/views/sorts/Sorts'
import type { Locale } from '@/configs/i18n'

interface Props {
  id: string
  lang: Locale
}

const PartnersTableSorts = ({ id, lang }: Props) => {
  const tabs = [
    {
      value: `/${lang}/apps/users/${id}`,
      label: 'Все транзакции'
    },
    {
      value: `/${lang}/apps/users/${id}/deposits`,
      label: 'Пополнения'
    },
    {
      value: `/${lang}/apps/users/${id}/withdrawals`,
      label: 'Выводы'
    }
  ]

  return <Sorts tabs={{ tabs }} />
}

export default PartnersTableSorts
