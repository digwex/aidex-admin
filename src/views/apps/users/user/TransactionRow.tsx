import { TRANSACTION_TYPE, type UserTransaction } from '@/api/endpoints/user/user-types'
import { formatCurrency } from '@/utils/formatCurrency'
import { capitalize } from '@/utils/capitalize'
import { calcDate } from '@/utils/calcDate'
import { CopyButton } from '@/hooks/useCopy'

type TransactionProps = UserTransaction

const P2P_PROVIDERS_SHORT: Record<string, string> = {
  bova: 'BO',
  merchant001: 'ME',
  bikini: 'BI',
  payLink: 'PA'
}

export const TransactionRow = (props: TransactionProps) => {
  const transaction = props
  const isWithdrawal = transaction.PaymentType === TRANSACTION_TYPE.WITHDRAWAL

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
          <div className='flex justify-center items-center gap-1'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='block max-w-[100px] truncate hover:text-primary transition-all duration-300'
              href={`https://solscan.io/tx/2NHiUeE44PwrqxGXBiQW1FCLabAKHkRv9c7K1o6XaUSvfeFyi2zakC9zbN9rWAz7DgQBmppkcGuEwED9UxeZYkN6`}
            >
              2NHiUeE44PwrqxGXBiQW1FCLabAKHkRv9c7K1o6XaUSvfeFyi2zakC9zbN9rWAz7DgQBmppkcGuEwED9UxeZYkN6
            </a>
            <CopyButton text='2NHiUeE44PwrqxGXBiQW1FCLabAKHkRv9c7K1o6XaUSvfeFyi2zakC9zbN9rWAz7DgQBmppkcGuEwED9UxeZYkN6' />
          </div>
        </td>
        <td>
          <div className='flex justify-center min-w-[200px]'>
            <div className='text-left '>
              <div className='flex items-center gap-1'>
                <span className='whitespace-nowrap'>С кошелька:</span>
                <div className='flex items-center gap-2'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://solscan.io/account/5vgjNd3cH9BsB4iGPTYQnuTfZgRXYdK6KC3HBnH6ycow`}
                    className='max-w-[200px] hover:text-primary transition-all cursor-pointer duration-300 block w-full truncate'
                  >
                    5vgjNd3cH9BsB4iGPTYQnuTfZgRXYdK6KC3HBnH6ycow
                  </a>
                  <CopyButton text='5vgjNd3cH9BsB4iGPTYQnuTfZgRXYdK6KC3HBnH6ycow' />
                </div>
              </div>

              <p className='-mt-3'>
                ID: 1234
                <CopyButton text='1234' />
              </p>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}
