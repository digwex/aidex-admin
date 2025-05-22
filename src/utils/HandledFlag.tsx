import { codeList } from 'flagpack-core'
import Flag from 'react-flagpack'

interface Props {
  flag: string | undefined | null
  className?: string
}

export const HandledFlag = ({ flag, className }: Props) => {
  if (!flag) return null

  const findFlag = codeList.find(code => code?.alpha2 === flag || code?.alpha3 === flag)

  if (!findFlag) return null

  return <Flag className={className} code={findFlag.alpha2} />
}
