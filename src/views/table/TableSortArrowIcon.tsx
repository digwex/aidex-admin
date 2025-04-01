const styles = {
  display: 'grid',
  backgroundColor: 'transparent'
}

interface Props {
  isYellow?: boolean
  isDown?: boolean
}

const ArrowIcon = ({ isYellow, isDown }: Props) => {
  const handleColor = () => (isYellow ? '#80F6BC' : '#909DA9')

  return isDown ? (
    <div style={styles}>
      <svg
        style={{ width: '12px', height: '12px' }}
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.95906 4L6.69906 7.26C6.31406 7.645 5.68406 7.645 5.29906 7.26L2.03906 4'
          stroke={handleColor()}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  ) : (
    <div style={styles}>
      <svg
        style={{ width: '12px', height: '12px' }}
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.95906 8L6.69906 4.74C6.31406 4.355 5.68406 4.355 5.29906 4.74L2.03906 8'
          stroke={handleColor()}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default ArrowIcon
