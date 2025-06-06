import { QRCode as ReactQrCodeLogo } from 'react-qrcode-logo'
import cn from 'classnames'

interface IProps {
  value: string
  size?: number
  logoSize?: number
  className?: string
}

export const QrCode = ({ value, size = 150, className }: IProps) => {
  return (
    <div className={cn('mx-auto w-fit rounded-[8px] bg-[#252b3c]', className)}>
      <ReactQrCodeLogo
        size={size}
        value={value}
        qrStyle='dots'
        bgColor='transparent'
        eyeColor='#fcd434'
        fgColor='#fcd434'
        logoPaddingStyle='circle'
        quietZone={18}
      />
    </div>
  )
}
