import { useLazyGetLinksQuery } from '@/api/endpoints/links'
import { tableHeaders } from './table-headers'

import { Row } from './table-row'

import CustomTable from '@/views/table/CustomTable'

export const LinksTable = () => {
  return (
    <CustomTable
      query={useLazyGetLinksQuery}
      sortTitles={tableHeaders}
      order={{ field: 'telegramId', direction: 'desc' }}
      DataItem={Row}
      fakeData={[
        {
          id: '1',
          name: 'Фейковыe данные 1',
          spending: 100,
          createdAt: '2023-01-01',
          earned: 50,
          refCode: 'REF1',
          pressStartCount: 10,
          subscribed: 5,
          unsubscribed: 2,
          maxActiveUsers: 3,
          botBlocked: 1,
          invitedFriends: 4
        },
        {
          id: '2',
          name: 'Фейковыe данные 2',
          spending: 200,
          createdAt: '2023-02-01',
          earned: 100,
          refCode: 'REF2',
          pressStartCount: 15,
          subscribed: 8,
          unsubscribed: 3,
          maxActiveUsers: 5,
          botBlocked: 2,
          invitedFriends: 6
        }
      ]}
    />
  )
}
