import { PromoContent } from '@/views/apps/content/PromoContent'

const Promo = () => {
  return (
    <div className='grid grid-cols-3 gap-4 max1400:grid-cols-2 max1000:grid-cols-1'>
      <PromoContent />
      <PromoContent />
      <PromoContent />
      <PromoContent />
      <PromoContent />
    </div>
  )
}

export default Promo
