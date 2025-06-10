import { calcDate } from '@/utils/calcDate'
import { shortIdTooltip } from '@/utils/shortIdTooltip'

const capitalizeStatus = (status: string) => {
  switch (status) {
    case 'WITHDRAWAL_APPROVED':
      return 'Approved'
    case 'WITHDRAWAL_CANCELED':
      return 'Canceled'
    default:
      return status
  }
}

export const ReferralsWithdrawalHistoryRow = ({ id, createdAt, nId, walletTo, amount, signature, status }: any) => {
  return (
    <tr>
      <td>{calcDate(createdAt)}</td>
      <td>{nId}</td>
      <td>{shortIdTooltip(id)}</td>
      <td>${amount}</td>
      <td>{walletTo}</td>
      <td>{shortIdTooltip(signature)}</td>
      <td>{capitalizeStatus(status)}</td>
    </tr>
  )
}
