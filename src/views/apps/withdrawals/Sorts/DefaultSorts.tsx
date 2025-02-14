import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  tabs: Array<{ value: string; label: React.ReactNode }>
}

export const DefaultSorts = ({ tabs }: Props) => {
  return <Sorts tabs={{ tabs }} />
}
