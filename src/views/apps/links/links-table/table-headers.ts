import type { IReferralsData } from '@/api/endpoints/referrals/referrals-types'

export const tableHeaders: Array<{ label: string; sort: keyof IReferralsData | null }> = [
  { label: 'Название', sort: 'code' },
  { label: 'ID партнера TG', sort: 'telegramId' },
  { label: 'Реф. ссылка', sort: 'link' },
  { label: 'Траты', sort: 'spending' },
  { label: 'Старт', sort: 'pressStart' },
  { label: 'Открыто сделок', sort: null },
  { label: 'Кол. юзеров открыли сделки', sort: null },
  { label: 'Приглашено пользователей', sort: 'invitedUsers' },
  { label: 'Сумма сделок', sort: null },
  { label: 'Комиссии', sort: 'commissions' },
  { label: 'Максимум активных игроков', sort: 'maxActiveUsers' }
]
