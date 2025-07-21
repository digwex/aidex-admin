import classNames from 'classnames'

import { Button } from '@mui/material'

import styles from './login.module.scss'
import { getItemFromLocalStorage } from '@/utils/localStorageService'
import { useUser } from '@/hooks/useUser'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {
  const router = useNavigate()
  const { login, verifySession } = useAuth()
  const { user } = useUser()

  const handleAuth = async () => {
    try {
      const accessToken = getItemFromLocalStorage('accessToken')

      if (user) {
        router(`/dashboard`, { replace: true })
      } else if (accessToken) {
        await verifySession(
          () => router(`/dashboard`, { replace: true }),
          async () => await login()
        )
      } else {
        await login()
      }
    } catch (error) {
      console.log(error)
    }
  }

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
