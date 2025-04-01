const EmptyDataTitle = ({ title }: { title?: string }) => {
  return (
    <p
      style={{
        width: '100%',
        textAlign: 'center',
        paddingBlock: '30px',
        color: '#ffffff'
      }}
    >
      {title ?? 'Список пуст'}
    </p>
  )
}

export default EmptyDataTitle
