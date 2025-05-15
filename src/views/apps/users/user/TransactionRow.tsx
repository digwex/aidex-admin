import { useState } from 'react'

import clsx from 'clsx'

import { TRANSACTION_TYPE, type UserTransaction } from '@/api/endpoints/user/user-types'

// import { TransactionDetails } from './TransactionDetails'
import { formatCurrency } from '@/utils/formatCurrency'
import { capitalize } from '@/utils/capitalize'
import { calcDate } from '@/utils/calcDate'

type TransactionProps = UserTransaction

const P2P_PROVIDERS_SHORT: Record<string, string> = {
  bova: 'BO',
  merchant001: 'ME',
  bikini: 'BI',
  payLink: 'PA'
}

export const TransactionRow = (props: TransactionProps) => {
  const transaction = props
  const [active, setActive] = useState(true)
  const [, setCancelActive] = useState(false)

  const isWithdrawal = transaction.PaymentType === TRANSACTION_TYPE.WITHDRAWAL

  const isWithdrawalAndPending = isWithdrawal && transaction.PaymentStatus === 'PENDING'

  const paymentHistoryStatus = () => {
    switch (transaction.PaymentStatus) {
      case 'PENDING':
        switch (transaction.PaymentType) {
          case 'WITHDRAWAL':
            return 'Ожидание вывода'
          default:
            return capitalize(transaction.PaymentStatus)
        }

      case 'COMPLETED':
        switch (transaction.PaymentType) {
          case 'DEPOSIT':
            return 'Зачислено на баланс'
          case 'WITHDRAWAL':
            return 'Удачный вывод'
          default:
            return capitalize(transaction.PaymentStatus)
        }

      case 'CANCELLED':
        switch (transaction.PaymentType) {
          case 'WITHDRAWAL':
            return 'Отмена вывода'
          default:
            return capitalize(transaction.PaymentStatus)
        }

      default:
        return capitalize(transaction.PaymentStatus)
    }
  }

  let transactionId: string = props.nId + ''

  if (transaction.PaymentType === 'DEPOSIT' && transaction.coin.type === 'P2P') {
    transactionId =
      (transaction.additionalData?.type ? P2P_PROVIDERS_SHORT[transaction.additionalData.type] : 'P2P') + props.nId
  }

  return (
    <>
      <tr>
        <td>{transactionId}</td>
        <td>{calcDate(transaction.createdAt)}</td>
        <td>{transaction.coin.symbol}</td>
        <td>
          {isWithdrawal ? (
            <span className='color_red'>
              {`-${formatCurrency(Number(transaction.amount))} ${transaction.coin.symbol}`}
            </span>
          ) : (
            <span className='color_green'>
              {`+${formatCurrency(Number(transaction.amount))} ${transaction.coin.symbol}`}
            </span>
          )}
        </td>
        <td>
          {isWithdrawal ? (
            <span className='color_red'>
              {transaction.PaymentStatus === 'COMPLETED' ? `-${formatCurrency(Number(transaction.toUSDT))} USDT` : '--'}
            </span>
          ) : (
            <span className='color_green'>
              {transaction.PaymentStatus === 'COMPLETED' ? `+${formatCurrency(Number(transaction.toUSDT))} USDT` : '--'}
            </span>
          )}
        </td>
        <td>{transaction.balance} USDT</td>
        <td>{paymentHistoryStatus()}</td>
        <td>
          {isWithdrawalAndPending ? (
            <div
              onClick={e => {
                e.stopPropagation()
                setCancelActive(true)
              }}
              className='td_btn td_btn_cancel'
            >
              <span>Отменить</span>
            </div>
          ) : (
            <div
              style={{
                width: 100
              }}
              className={clsx('td_btn td_btn_details', {
                td_btn_details_active: !active
              })}
              onClick={() => setActive(!active)}
            >
              <span>Детали</span>
            </div>
          )}
        </td>
      </tr>
      {/* {!active && <TransactionDetails {...transaction} />} */}
      {/* <Cancel isOpen={cancelActive} onClose={() => setCancelActive(false)} transactionId={transaction.id} /> */}
    </>
  )
}
