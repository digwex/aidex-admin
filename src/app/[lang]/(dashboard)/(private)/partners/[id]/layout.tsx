import type { Locale } from '@/configs/i18n'
import { Addresses } from '@/views/apps/partners/partner/Addresses'
import { Head } from '@/views/apps/partners/partner/Head'
import PartnersTableSorts from '@/views/apps/partners/partner/PartnersTableSorts'
import { Sessions } from '@/views/apps/partners/partner/Sessions'
import { Stats } from '@/views/apps/partners/partner/Stats'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale; id: string }>
}

const PartnerLayout = async ({ children, params }: Props) => {
  const { id, lang } = await params

  return (
    <div className='space-y-4'>
      <Head />
      <Stats />
      <div className='grid grid-cols-2 gap-6 max1300:grid-cols-1'>
        <Addresses />
        <Sessions />
      </div>

      <div className='space-y-4'>
        <PartnersTableSorts id={id} lang={lang} />
        {children}
      </div>
    </div>
  )
}

export default PartnerLayout
