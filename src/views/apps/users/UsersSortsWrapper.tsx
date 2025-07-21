import { useLocation } from 'react-use'

interface Props {
  children: React.ReactNode
}

export const UsersSortsWrapper = ({ children }: Props) => {
  const { pathname } = useLocation()

  const regex = new RegExp(`^/users/\\d+(/.*)?$`)
  const isPartnerPage = regex.test(pathname || '')

  if (isPartnerPage) return null

  return children
}
