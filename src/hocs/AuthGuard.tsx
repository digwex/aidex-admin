'use client'
import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useBoolean } from 'usehooks-ts'

import type { ChildrenType } from '@core/types'
import { getItemFromLocalStorage } from '@/utils/localStorageService'
import { useAuth } from '@/hooks/useAuth'
import { useUser } from '@/hooks/useUser'
import { Loader } from '@/components/Loader'

export default function AuthGuard({ children }: ChildrenType) {
  const { isLogged } = useUser()
  const { value: isLoading, setFalse } = useBoolean(true)
  const { verifySession } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      setFalse()

      return
    }

    const accessToken = getItemFromLocalStorage('accessToken')

    if (accessToken) {
      void verifySession(setFalse, () => router.replace(`/login`))
    } else {
      router.replace(`/login`)
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
