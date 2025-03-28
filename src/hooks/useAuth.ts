import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'

import { useLazyGetTicketQuery, useLazyVerifySessionQuery } from '../api/endpoints/auth'

import { userActions } from '@/redux-store/slices'

import { BOT_URL } from '@/utils/constants'

export const useAuth = () => {
  const dispatch = useDispatch()
  const [mutate] = useLazyVerifySessionQuery()
  const [getTicket] = useLazyGetTicketQuery()

  const login = async () => {
    try {
      const response = (await getTicket().unwrap()).data

      console.debug('response', response)

      dispatch(userActions.setTicket(response))
      window.open(`tg://resolve?domain=${BOT_URL}&start=${response}`, '_self')
    } catch (error) {
      toast.error('Пожалуйста, повторите попытку позже')

      console.error(error)
    }
  }

  const verifySession = async (successCallback?: () => void, errorCallback?: () => void) => {
    try {
      await mutate().unwrap()
      successCallback?.()
    } catch (error) {
      console.log(error)
      errorCallback?.()
    }
  }

  const logout = async () => {
    dispatch(userActions.clearUser())
  }

  return { logout, login, verifySession }
}
