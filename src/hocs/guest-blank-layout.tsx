import type { ChildrenType } from '@core/types'
import BlankLayout from '@layouts/BlankLayout'

import { getSystemMode } from '@core/utils/serverHelpers'

type Props = ChildrenType

export const GuestBlankLayout = (props: Props) => {
  const { children } = props

  const systemMode = getSystemMode()

  return <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
}
