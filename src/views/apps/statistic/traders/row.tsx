import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'

type Props = StatisticDay

const StatisticRow = ({}: Props) => {
  return (
    <tr>
      <td className={'min-w-[200px]'}>
        <a
          href={`https://t.me/`}
          target='_blank'
          className='whitespace-nowrap transition-all duration-300 hover:text-primary'
          rel='noreferrer'
        >
          ID / Login
        </a>
      </td>

      <td className='whitespace-nowrap'>0 $ / 0 SOL</td>
      <td className='whitespace-nowrap'>0 $ / 0 SOL</td>
      <td className='whitespace-nowrap'>0 $ / 0 SOL</td>
      <td className='whitespace-nowrap text-center flex justify-center gap-3'>
        <span className='text-success'>0 $ / 0 SOL</span> <span className='text-error'>0 $ / 0 SOL</span>
      </td>
      <td>0%</td>
      <td>
        <div className='flex items-center gap-3 justify-center'>
          <p className='text-success whitespace-nowrap'>W: 0%</p>
          <p className='text-error whitespace-nowrap'>L: 0%</p>
          <p className='text-warning whitespace-nowrap'>B: 0%</p>
        </div>
      </td>
      <td className='whitespace-nowrap flex items-center gap-2'>
        <span>Всего: 0 </span>{' '}
        <p>
          <span className='text-success'>0</span> / <span className='text-error'>0</span>
        </p>
      </td>
      <td>0</td>
      <td>0</td>
      <td className='whitespace-nowrap'>0 $ / 0 SOL</td>
      <td className='whitespace-nowrap'>0 $ / 0 SOL</td>
    </tr>
  )
}

export default StatisticRow
