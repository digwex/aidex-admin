export interface SecurityContext {
  selectedAdmins: SelectedAdmin[]
  setSelectedAdmins: React.Dispatch<React.SetStateAction<SelectedAdmin[]>>
}

export interface SelectedAdmin {
  id: string
  login: string
  level: string
}
