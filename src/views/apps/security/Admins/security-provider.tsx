'use client'

import type { PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'

import type { SelectedAdmin, SecurityContext as SecurityContextType } from './security-context-interface'

export const SecurityContext = createContext<SecurityContextType>({
  selectedAdmins: [],
  setSelectedAdmins: () => {}
})

export const SecurityProvider = ({ children }: PropsWithChildren) => {
  const [selectedAdmins, setSelectedAdmins] = useState<SelectedAdmin[]>([])

  return <SecurityContext.Provider value={{ selectedAdmins, setSelectedAdmins }}>{children}</SecurityContext.Provider>
}

export const useSecurityContext = () => {
  const context = useContext(SecurityContext)

  if (!context) {
    throw new Error('useSecurityContext must be used within a SecurityProvider')
  }

  return context
}
