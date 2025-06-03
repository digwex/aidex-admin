'use client'

import {  Paper } from '@mui/material'

import { useLazyGetReferralsQuery } from '@/api/endpoints/referrals/referrals-api'
import CustomTable from '@/views/table/CustomTable'
import { SelectRange } from '@/views/sorts/SelectRange'
import DataPickerRange from '@/views/DataPickerRange'
import { SelectTakeAmount } from '@/views/sorts/SelectTakeAmount'

import { RefLinksModal } from './ref-links-modal'

export const TablePage = () => {
  const titles = [
    { label: 'ID', sort: null },
    { label: 'Логин', sort: 'tgLogin' },
    { label: 'Кол-во реф ссылок', sort: 'referralsCount' },
    { label: 'Старт сегодня \n / все', sort: null },
    { label: 'Сделок партнёры \n / все', sort: null },
    { label: 'Обороты партнёров \n сегодня / всего Sol/$', sort: null },
    { label: 'Суб партнёров  сегодня / всего', sort: null },
    { label: 'Доход партнёра  сегодня / всего', sort: null },
    { label: 'Выводы в Sol/$', sort: null },
    { label: 'Принесли чистой прибыли с партнёров сегодня / всего', sort: null },
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
              <td>
                <RefLinksModal />
              </td>
              <td>0 / 0</td>
              <td>0 / 0</td>
              <td>0SOL / 0$</td>
              <td>0 / 0</td>
              <td>0 / 0</td>
              <td>0SOL / 0$</td>
              <td>0 / 0</td>
              <td>-</td>
            </tr>
          )
        }}
        fakeData={[{}]}
        sortTitles={titles}
      />
    </>
  )
}
