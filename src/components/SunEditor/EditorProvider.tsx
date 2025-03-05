// import type { PropsWithChildren } from 'react'
import { createContext, useState } from 'react'

export const EditorContext = createContext({
  value: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setEditor: (value: any) => {}
})

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<any>({})

  const setEditor = (newValue: any) => {
    setValue(newValue)
  }

  const contextValue = {
    value,
    setEditor
  }

  return <EditorContext.Provider value={contextValue}>{children}</EditorContext.Provider>
}

// const EditorContextProvider = ({ children }: PropsWithChildren) => {
//   return <EditorProvider>{children}</EditorProvider>
// }

// export default EditorContextProvider
