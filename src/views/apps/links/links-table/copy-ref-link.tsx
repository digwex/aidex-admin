import { CopyButton } from '@/hooks/useCopy'

interface Props {
  refLink: string
}

export const CopyRefLink = ({ refLink }: Props) => {
  return (
    <td>
      <div className='flex gap-2 items-center'>
        <a href={refLink} target='_blank' className='hover:text-primary transition-all duration-300 truncate w-[200px]'>
          {refLink}
        </a>
        <CopyButton text={refLink} />
      </div>
    </td>
  )
}
