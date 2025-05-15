'use client'

// Next Imports
import { useRouter } from 'next/navigation'

import classNames from 'classnames'

import { Button } from '@mui/material'

import styles from './login.module.scss'
import { getItemFromLocalStorage } from '@/utils/localStorageService'
import { useUser } from '@/hooks/useUser'
import { useAuth } from '@/hooks/useAuth'

const Login = () => {
  const router = useRouter()
  const { login, verifySession } = useAuth()
  const { user } = useUser()

  const handleAuth = async () => {
    try {
      const accessToken = getItemFromLocalStorage('accessToken')

      if (user) {
        router.replace(`/dashboard`)
      } else if (accessToken) {
        await verifySession(
          () => router.replace(`/dashboard`),
          async () => await login()
        )
      } else {
        await login()
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log('user!!!!!')

  return (
    <div className={styles.login_wrap}>
      <div className={styles.login_panel}>
        <div className={classNames(styles.login_panel_bg, styles.login_panel_bg1)}>
          <img src='/images/login/login_bg1.png' alt='' />
        </div>
        <div className={classNames(styles.login_panel_bg, styles.login_panel_bg3)}>
          <img src='/images/login/login_bg3.png' alt='' />
        </div>
        <span>Login to admin</span>
        <Button variant='contained' className={styles.login_panel_btn} onClick={handleAuth}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
