import { useAppSelector } from './useRedux'

export const useUser = () => useAppSelector(state => state.user)
