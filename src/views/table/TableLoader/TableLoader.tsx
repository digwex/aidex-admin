import clsx from 'clsx'

import styles from './TabletLoader.module.css'

interface Props {
  isLoading: boolean
  className?: string
}

const TableLoader = ({ isLoading, className }: Props) => {
  if (!isLoading) return null

  return (
    <tr className={clsx(styles.wrapper)}>
      <td className={clsx(styles.body, className)}>
        <div className={styles.container}>
          <img src='/img/logo.svg' alt='' className={styles.animatedItem} />
        </div>
        <div className={styles.pointsContainer}>
          <div className={styles.point} />
          <div style={{ animationDelay: '1s' }} className={styles.point} />
          <div style={{ animationDelay: '.5s' }} className={styles.point} />
        </div>
      </td>
    </tr>
  )
}

export default TableLoader
