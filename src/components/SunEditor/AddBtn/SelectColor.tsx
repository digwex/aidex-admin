import Colorful from '@uiw/react-color-colorful'
import { hsvaToHexa } from '@uiw/color-convert'

import { CloseButton } from './CloseButton'
import type { ISelectColor } from '../interface'

export const SelectColor = ({ color, setColor, defaultColor, toggleOpen, isOpen, labelText }: ISelectColor) => {
  const handleDefaultColor = () => setColor(defaultColor)

  return (
    <div className='se-dialog-form'>
      <label>{labelText}</label>
      <div style={{ display: 'flex' }}>
        <div
          onClick={toggleOpen}
          style={{
            borderRadius: 4,
            border: '1px solid #ccc',
            width: '20px',
            height: '20px',
            backgroundColor: color,
            cursor: 'pointer'
          }}
        />
        {isOpen && (
          <div style={{ marginLeft: 15, display: 'flex' }}>
            <div>
              <Colorful
                style={{ marginBottom: 5 }}
                color={color}
                onChange={color => {
                  setColor(hsvaToHexa(color.hsva))
                }}
              />
              <label
                style={{
                  display: 'block',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onClick={handleDefaultColor}
              >
                Установить по умолчанию
              </label>
            </div>
            <div style={{ marginLeft: 10, marginTop: -10 }}>
              <CloseButton onClose={toggleOpen} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
