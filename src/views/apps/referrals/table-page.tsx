'use client'

import { Paper } from '@mui/material'

import { useLazyGetReferralsQuery } from '@/api/endpoints/referrals/referrals-api'
import CustomTable from '@/views/table/CustomTable'
import { SelectRange } from '@/views/sorts/SelectRange'
import DataPickerRange from '@/views/DataPickerRange'
import { SelectTakeAmount } from '@/views/sorts/SelectTakeAmount'

import { RefLinksModal } from './ref-links-modal'
import { EditTariffPercent } from './edit-tariff-percent'

export const TablePage = () => {
  const titles = [
    { label: 'ID', sort: null },
    { label: 'Логин', sort: 'tgLogin' },
    { label: 'Кол-во реф ссылок', sort: 'referralsCount' },
    {
      label: (
        <div>
          <p className='whitespace-nowrap'>Старт</p>
          <p className='whitespace-nowrap'>сегодня / все</p>
        </div>
      ),
      sort: null
    },
    {
      label: (
        <div>
          <p className='whitespace-nowrap'>Сделок</p>
          <p className='whitespace-nowrap'>партнёры / все</p>
        </div>
      ),
      sort: null
    },
    {
      label: (
        <div>
          <p className='whitespace-nowrap'>Обороты партнёров Sol/$</p>
          <p className='whitespace-nowrap'>сегодня / всего </p>
        </div>
      ),
      sort: null
    },
    {
      label: (
        <div>
          <p className='whitespace-nowrap'>Суб партнёров</p>
          <p className='whitespace-nowrap'>сегодня / всего</p>
        </div>
      ),
      sort: null
    },
    {
      label: (
        <div>
          <p className='whitespace-nowrap'>Доход партнёра</p>
          <p className='whitespace-nowrap'>сегодня / всего</p>
        </div>
      ),
      sort: null
    },
    {
      label: 'Выводы в Sol/$',

      sort: null
    },
    {
      label: (
        <div>
          <p className='whitespace-nowrap'>Чистый профит с партнёров</p>
          <p className='whitespace-nowrap'>сегодня / всего</p>
        </div>
      ),
      sort: null
    },
    { label: 'Тариф', sort: null }
  ]

  return (
    <>
      <Paper className='p-4 flex justify-end gap-3 max700:flex-col'>
        <DataPickerRange />

        <SelectRange />
        <SelectTakeAmount />
      </Paper>
      <CustomTable
        isSearch
        query={useLazyGetReferralsQuery}
        DataItem={() => {
          return (
            <tr>
              <td>1234</td>
              <td>fake_user</td>

              <RefLinksModal />

              <td>0 / 0</td>
              <td>0 / 0</td>
              <td>0SOL / 0$</td>
              <td>0 / 0</td>
              <td>0 / 0</td>
              <td>0SOL / 0$</td>
              <td>0 / 0</td>

              <EditTariffPercent id={'1234'} defaultValue={20} />
            </tr>
          )
        }}
        fakeData={[{}]}
        sortTitles={titles}
      />
    </>
  )
}
