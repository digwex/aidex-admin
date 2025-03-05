import { SelectColor } from './SelectColor'
import { CloseButton } from './CloseButton'
import { EditorInput } from './EditorInput'
import type { IModalBtn } from '../interface'
import { buttonStyleValidation } from '../constants'

export const ModalBtn = ({
  handleOutsideClick,
  onCloseModal,
  handleSubmit,
  toggleBgColor,
  toggleTextColor,
  setUrl,
  setText,
  setBorderRadius,
  setPaddingOnSides,
  setPaddingTopBottom,
  setFontSize,
  setBgColor,
  setTextColor,
  setIsChecked,
  setIsGeneralLinkChecked,
  isCreateGeneralLinkAvailable,
  isGeneralLinkChecked,
  title,
  url,
  text,
  borderRadius,
  paddingOnSides,
  paddingTopBottom,
  fontSize,
  bgColor,
  isBgColorOpen,
  textColor,
  isTextColorOpen,
  isChecked,
  defaultBgColor,
  defaultTextColor
}: IModalBtn) => {
  return (
    <div className='sun-editor'>
      <div className='se-dialog sun-editor-common' style={{ position: 'fixed', display: 'block' }}>
        <div className='se-dialog-back' style={{ display: 'block' }}></div>
        <div className='se-dialog-inner' style={{ display: 'block', cursor: 'pointer' }} onClick={handleOutsideClick}>
          <div
            className='se-dialog-content'
            style={{
              display: 'block',
              maxWidth: 400,
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <div className='se-dialog-header'>
              <CloseButton onClose={onCloseModal} />
              <span className='se-modal-title'>{title}</span>
            </div>
            <div className='se-dialog-body'>
              <EditorInput label='Ссылка' focus onChange={setUrl} value={url} />
              <EditorInput label='Текст' onChange={setText} value={text} />
              <EditorInput
                label='Радиус углов'
                onChange={setBorderRadius}
                value={borderRadius}
                type='number'
                min={buttonStyleValidation.borderRadius.min}
                max={buttonStyleValidation.borderRadius.max}
              />
              <EditorInput
                label='Отступы по бокам'
                onChange={setPaddingOnSides}
                value={paddingOnSides}
                type='number'
                min={buttonStyleValidation.paddingOnSides.min}
                max={buttonStyleValidation.paddingOnSides.max}
              />
              <EditorInput
                label='Отступы сверху и снизу'
                onChange={setPaddingTopBottom}
                value={paddingTopBottom}
                type='number'
                min={buttonStyleValidation.paddingTopBottom.min}
                max={buttonStyleValidation.paddingTopBottom.max}
              />
              <EditorInput
                label='Размер шрифта'
                onChange={setFontSize}
                value={fontSize}
                type='number'
                min={buttonStyleValidation.fontSize.min}
                max={buttonStyleValidation.fontSize.max}
              />

              <div
                style={{
                  display: 'flex',
                  gap: 15,
                  flexWrap: 'wrap',
                  cursor: 'default'
                }}
              >
                <SelectColor
                  color={bgColor}
                  setColor={setBgColor}
                  defaultColor={defaultBgColor}
                  toggleOpen={toggleBgColor}
                  labelText={'Цвет заливки'}
                  isOpen={isBgColorOpen}
                />

                <SelectColor
                  color={textColor}
                  setColor={setTextColor}
                  defaultColor={defaultTextColor}
                  toggleOpen={toggleTextColor}
                  labelText={'Цвет текста'}
                  isOpen={isTextColorOpen}
                />
              </div>
              {isCreateGeneralLinkAvailable && (
                <div className='se-dialog-form-footer'>
                  <label>
                    <input
                      type='checkbox'
                      checked={isGeneralLinkChecked}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsGeneralLinkChecked(e.target.checked)}
                      className='se-dialog-btn-check _se_anchor_check'
                    />
                    &nbsp;Использовать как генеральную ссылку
                  </label>
                </div>
              )}
              <div className='se-dialog-form-footer'>
                <label>
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
                    className='se-dialog-btn-check _se_anchor_check'
                  />
                  &nbsp;Открывать в новом окне
                </label>
              </div>
            </div>

            <div
              className='se-dialog-form'
              style={{
                borderTop: ' 1px solid #e5e5e5',
                paddingTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'default'
              }}
            >
              <label>Превью</label>
              <div
                style={{
                  overflow: 'hidden',
                  overflowX: 'auto',
                  maxWidth: 400,
                  paddingBottom: 5
                }}
              >
                {!!text.length && (
                  <div
                    style={{
                      display: 'inline-block',
                      padding: `${Number(paddingTopBottom)}px ${Number(paddingOnSides)}px`,
                      backgroundColor: bgColor,
                      color: textColor,
                      borderRadius: `${Number(borderRadius)}px`,
                      fontSize: `${Number(fontSize)}px`
                    }}
                  >
                    {text}
                  </div>
                )}
              </div>
            </div>

            <div className='se-dialog-footer'>
              <button onClick={handleSubmit} className='se-btn-primary' title='Подтвердить' aria-label='Подтвердить'>
                <span>Подтвердить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
