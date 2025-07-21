import { useEffect } from 'react'

import { useBoolean } from 'usehooks-ts'

import { useNavigate } from 'react-router'

import { Loader } from '@/components/Loader'
import { useAuth } from '@/hooks/useAuth'
import { useUser } from '@/hooks/useUser'
import { getItemFromLocalStorage } from '@/utils/localStorageService'
import type { ChildrenType } from '@core/types'

export default function AuthGuard({ children }: ChildrenType) {
  const { isLogged } = useUser()
  const { value: isLoading, setFalse } = useBoolean(true)
  const { verifySession } = useAuth()
  const router = useNavigate()

  useEffect(() => {
    if (isLogged) {
      setFalse()

      return
    }

    const accessToken = getItemFromLocalStorage('accessToken')

    if (accessToken) {
      void verifySession(setFalse, () =>
        router(`/login`, {
          replace: true
        })
      )
    } else {
      router(`/login`, {
        replace: true
      })
    }
  }, [isLogged])

  if (isLoading) {
    return (
      <div className='w-screen min-h-screen flex items-center justify-center'>
        <Loader />
      </div>
    )
  }

  return <>{children}</>
}
