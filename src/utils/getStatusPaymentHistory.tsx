interface Props {
  status: string
}

export const getStatusPaymentHistory = ({ status }: Props): any => {
  switch (status) {
    case 'COMPLETED':
      return (
        <div className='td_success_row text-success bg-success/15'>
          <img src='/images/icons/success2.svg' alt='Status icon' />
          <span>Завершенный</span>
        </div>
      )
    case 'CANCELLED':
      return (
        <div className='td_success_row text-error bg-error/15'>
          <img src='/images/icons/cancelled.svg' alt='Status icon' />
          <span>Отмененный</span>
        </div>
      )
    case 'PENDING':
      return (
        <div className='td_success_row text-warning bg-warning/15'>
          <img src='/images/icons/pending.svg' alt='Status icon' />
          <span>В обработке</span>
        </div>
      )
    case 'FAILED':
      return (
        <div className='td_success_row text-error bg-error/15'>
          <img src='/images/icons/cancelled.svg' alt='Status icon' />
          <span>Неуспешный</span>
        </div>
      )
  }
}
