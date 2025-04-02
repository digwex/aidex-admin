const EmptyDataTitle = ({ title }: { title?: string }) => {
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
