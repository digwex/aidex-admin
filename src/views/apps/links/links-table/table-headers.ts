import type { IReferralsData } from '@/api/endpoints/referrals/referrals-types'

export const tableHeaders: Array<{ label: string; sort: keyof IReferralsData }> = [
  {
    label: 'Название',
    sort: 'code'
  },
  {
    label: 'ID партнера TG',
    sort: 'telegramId'
  },
  {
    label: 'Реф. ссылка',
    sort: 'link'
  },
  {
    label: 'Траты',
    sort: 'spending'
  },
  {
    label: 'Старт',
    sort: 'pressStart'
  },
  {
    label: 'Подписались',
    sort: 'subscribed'
  },
  {
    label: 'Отписались',
    sort: 'unsubscribed'
  },
  {
    label: 'Приглашено пользователей',
    sort: 'invitedUsers'
  },
  {
    label: 'Комиссии',
    sort: 'commissions'
  },
  {
    label: 'Максимум активных игроков',
    sort: 'maxActiveUsers'
  }
]
