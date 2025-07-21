import { useParams } from 'react-router'

import { SORT_DIRECTION } from '../../../../../api/types'

import { Row } from './row'
import { titles } from './titles'
import { useLazyGetAllUserTradesQuery } from '@/api/endpoints/users/users-api'
import CustomTable from '@/views/table/CustomTable'

export const UserPnl = () => {
  const { id } = useParams()

  return (
    <CustomTable
      customTableClass='[&_th]:whitespace-nowrap'
      isSearch
      isDate
      query={useLazyGetAllUserTradesQuery}
      DataItem={Row}
      sortTitles={titles}
      fakeData={[
        {
          id: 'fakeId',
          pair: {
            wwSignature: 'FAKE/USDT'
          },
          openPrice: '1000.00',
          closingPrice: '1100.00',
          tradeType: 'LONG',
          tradeStatus: 'OPENED',
          openTime: '2023-01-01T00:00:00Z',
          closingTime: '2023-01-02T00:00:00Z',
          isDemo: false,
          PnLStatistics: {
            date: '2023-01-02T00:00:00Z',
            id: 'fakePnlId',
            isDemo: false,
            onlyAff: false,
            pnl: '100.00',
            pnlPercent: '10.00',
            tradeId: 'fakeTradeId',
            userId: 'fakeUserId'
          },
          userId: 'fakeUserId',
          coin: {
            coinName: 'FakeCoin',
            customMinDeposit: '0.01',
            id: 'fakeCoinId',
            isAvailableInTrade: true,
            isCanCreate: true,
            isCanWithdraw: true,
            isWestWallet: true,
            minDeposit: '0.01',
            network: 'FakeNetwork',
            paymentPercentage: [1, 2, 3],
            symbolCoin: 'FAKE',
            tickSize: '0.01',
            toUSDTCoefficient: '1.00',
            tradersOpinion: [76, 24],
            withdrawalNetworkId: null,
            wwSignature: 'FAKE'
          },
          dealAmount: '123.45',
          user: {
            AccountType: 'FakeAccountType'
          }
        }
      ]}
      fetchParams={{
        uid: id
      }}
      order={{ field: 'date', direction: SORT_DIRECTION.DESC }}
    />
  )
}
