import { memo, useCallback, useContext, useEffect, useRef } from 'react'

import SunEditor from 'suneditor-react'
import plugins from 'suneditor/src/plugins'

import { ru } from 'suneditor/src/lang'

import { useToggle } from 'react-use'

import { AddEditBtnContainer } from './AddBtn/AddEditBtnContainer'
import { initialButtonStyles, sortedFontOptions } from './constants'
import { removeAllFormatsPlugin } from './customPlugins/removeAllFormats'
import { getDataExistButton, handleAddButtonEditModal } from './helpers'
import type { ICustomSunEditor, IExistButton } from './interface'
import './styles.css'
import { EditorContext } from './EditorProvider'

export const CustomSunEditor = memo(({ setValue, setRefToParent }: ICustomSunEditor) => {
  const editorRef = useRef<any>(null)
  const buttonData = useRef<IExistButton>(initialButtonStyles)
  const isGeneralLinkExist = useRef<boolean | null>(false)
  const nodeButtonRef = useRef<null | HTMLLinkElement>(null)

  const [addBtnModal, toggleModal] = useToggle(false)
  const [editBtnModal, toggleEditBtn] = useToggle(false)

  const setEditor = useContext(EditorContext).setEditor

  const setButtonDataAndOpenEditModal = (data: IExistButton, nodeButton: HTMLLinkElement) => {
    buttonData.current = data
    nodeButtonRef.current = nodeButton
    toggleEditBtnModal()
  }

  const setGeneralLinkRef = (value: boolean | null) => {
    isGeneralLinkExist.current = value
  }

  const resetButtonData = () => {
    buttonData.current = initialButtonStyles
    nodeButtonRef.current = null
  }

  const getSunEditorInstance = (sunEditor: any) => {
    editorRef.current = sunEditor
  }

  const handleButtonClick = useCallback((e: Event) => {
    e.preventDefault()
    const existButtonData = getDataExistButton(e.target as HTMLLinkElement)

    setButtonDataAndOpenEditModal(existButtonData, e.target as HTMLLinkElement)
  }, [])

  const toggleEditBtnModal = () => {
    toggleEditBtn()
    handleAddButtonEditModal(handleButtonClick, setGeneralLinkRef, isGeneralLinkExist.current)
  }

  const buttonAddButtonPlugin = {
    name: 'buttonAddButton',
    display: 'command',
    buttonClass: 'custom_add_btn',
    title: 'Добавить кнопку',
    innerHTML: 'Добавить кнопку',

    add: function (core: any, targetElement: any) {
      const context = core.context
      const rangeTag = core.util.createElement('div')

      core.util.addClass(rangeTag, '__se__format__range_custom')
      context.customCommand = {
        targetButton: targetElement,
        tag: rangeTag
      }
    },

    action: function () {
      toggleModal()
    }
  }

  useEffect(() => {
    if (setRefToParent && editorRef.current) {
      setRefToParent(editorRef.current)
      if (setEditor) setEditor(editorRef.current)
    }
  }, [])

  return (
    <>
      {addBtnModal && (
        <AddEditBtnContainer
          editor={editorRef.current}
          onClose={toggleModal}
          toggleEditButtonModal={toggleEditBtnModal}
          buttonData={buttonData.current}
          setGeneralLinkRef={setGeneralLinkRef}
          generalLinkRef={isGeneralLinkExist.current}
        />
      )}
      {editBtnModal && (
        <AddEditBtnContainer
          editor={editorRef.current}
          onClose={toggleModal}
          buttonData={buttonData.current}
          toggleEditButtonModal={toggleEditBtnModal}
          nodeButton={nodeButtonRef.current}
          resetButtonData={resetButtonData}
          isEditButton
          setGeneralLinkRef={setGeneralLinkRef}
          generalLinkRef={isGeneralLinkExist.current}
        />
      )}
      <div className='suneditor'>
        <SunEditor
          getSunEditorInstance={getSunEditorInstance}
          onChange={e => {
            handleAddButtonEditModal(handleButtonClick, setGeneralLinkRef, isGeneralLinkExist.current)
            setValue(e)
          }}
          setOptions={{
            plugins: {
              buttonAddButtonPlugin,
              removeAllFormatsPlugin,
              ...plugins
            },
            imageResizing: true,
            imageAlignShow: true,
            imageFileInput: false,
            linkTargetNewWindow: true,
            linkNoPrefix: true,
            attributesWhitelist: { all: 'style|data-.+|contenteditable' },
            buttonList: [
              ['undo', 'redo'],
              ['font', 'fontSize', 'formatBlock'],
              ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
              ['fontColor', 'hiliteColor'],
              ['align', 'list'],
              ['outdent', 'indent'],
              ['buttonAddButton', 'link', 'image'],
              ['removeAllFormats']
            ],
            defaultTag: 'p',
            minHeight: '350px',
            showPathLabel: false,
            font: sortedFontOptions,
            defaultStyle: 'font-size: 16px;'
          }}
          lang={ru}
        />
      </div>
    </>
  )
})

CustomSunEditor.displayName = 'CustomSunEditor'
