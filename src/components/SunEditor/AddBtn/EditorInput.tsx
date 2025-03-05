import { useEffect, useRef } from 'react'

import type { IEditorInput } from '../interface'

export const EditorInput = ({ label, value, onChange, type = 'text', placeholder, min, max, focus }: IEditorInput) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current && focus) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className='se-dialog-form'>
      <label>{label}</label>
      <input
        ref={inputRef}
        className='se-input-form _se_anchor_text'
        type={type}
        min={min}
        max={max}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value

          if (type === 'number' && min && max) {
            value = value.replace('e', '')

            if (Number(value) > Number(max)) {
              value = max
              onChange(value)

              return
            }

            if (Number(value) < Number(min)) {
              value = min
              onChange(value)

              return
            }
          }

          onChange(value)
        }}
      />
    </div>
  )
}
