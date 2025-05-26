import { Chip } from '@mui/material'

const EmptyDataTitle = ({ title }: { title?: string }) => {
  if (title === 'Permission denied') {
    return (
      <div className='w-full flex justify-center  h-full items-center py-2'>
        <Chip variant='tonal' label={title} color='error' className='text-center w-fit mx-auto' />
      </div>
    )
  }

  return (
    <p
      style={{
        height: '100%',
        width: '100%',
        textAlign: 'center',
        paddingBlock: '30px'
      }}
    >
      {title || 'Список пуст'}
    </p>
  )
}

export default EmptyDataTitle
