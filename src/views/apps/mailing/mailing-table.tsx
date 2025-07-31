import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { MailingTableRow } from './mailing-table-row'
import { useLazyGetMailingsQuery } from '@/api/endpoints/mailing/mailing'

const MailingTable = () => {
  const transactionSortTitles = [
    { label: 'Успешно отправлено', sort: 'success' },
    { label: 'Не успешно отправлено', sort: 'error' },
    { label: 'Заблокировали бота', sort: 'blocked' }
  ]

  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetMailingsQuery}
      DataItem={MailingTableRow}
      sortTitles={transactionSortTitles}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default MailingTable
