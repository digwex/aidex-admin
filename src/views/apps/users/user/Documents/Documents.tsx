import { DocumentField } from './DocumentField'

export const Documents = () => {
  return (
    <div className='grid grid-cols-4 gap-4 max1600:grid-cols-2 max800:grid-cols-1'>
      <DocumentField title='Селфи' />
      <DocumentField title='Документы' />
      <DocumentField title='Пруф доход/адрес' />
      <DocumentField title='Доп. документы' />
    </div>
  )
}
