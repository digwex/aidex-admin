export const StatisticTitles = [
  { label: 'ID / Login', sort: 'login' },
  {
    label: (
      <div>
        <p className='whitespace-nowrap'>Торговый оборот</p> <p>$/Sol</p>
      </div>
    ),
    sort: 'trades'
  },
  { label: 'Грязная комиссия', sort: 'grossCommission' },
  { label: 'Чистая комиссия', sort: 'pureCommission' },
  { label: 'Прибыль / убыток', sort: 'profit' },
  { label: 'PNL', sort: 'pnl' },
  { label: 'Винрейт', sort: 'winrate' },
  {
    label: (
      <div>
        <p className='whitespace-nowrap'>Кол. сделок</p> <p>(BUY/SEL)</p>
      </div>
    ),
    sort: 'tradesAmount'
  },
  {
    label: (
      <div>
        <p className='whitespace-nowrap'>Кол. лим.</p> <p>ордеров</p>
      </div>
    ),
    sort: 'limitOrders'
  },
  {
    label: (
      <div>
        <p className='whitespace-nowrap'>Привел рефералов</p> <p>сегодня</p>
      </div>
    ),
    sort: 'referralsToday'
  },
  {
    label: (
      <div>
        <p className='whitespace-nowrap'>Выводы</p> <p>$/Sol</p>
      </div>
    ),
    sort: 'withdrawals'
  },
  { label: 'Партнерские начисления', sort: 'partners' }
]
