import { ContentBanner } from '@/views/apps/content/ContentBanner'

export const runtime = 'edge'

const Content = () => {
  return (
    <div className='grid grid-cols-4 gap-4 max1400:grid-cols-3 max1200:grid-cols-2 max700:grid-cols-1'>
      <ContentBanner />
      <ContentBanner />
      <ContentBanner />
      <ContentBanner />
      <ContentBanner />
    </div>
  )
}

export default Content
