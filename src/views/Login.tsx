'use client'

// Next Imports
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// Third-party Imports
import { signIn } from 'next-auth/react'

// Type Imports
import { toast } from 'react-toastify'

import classNames from 'classnames'

import { Button } from '@mui/material'

import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

import styles from './login.module.scss'

const Login = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()

  const login = async () => {
    const res = await signIn('credentials', {
      password: 'admin',
      email: 'admin@apedex.com',
      redirect: false
    })

    if (res && res.ok && res.error === null) {
      const redirectURL = searchParams.get('redirectTo') ?? '/'

      router.replace(getLocalizedUrl(redirectURL, locale as Locale))
    } else {
      if (res?.error) {
        const error = JSON.parse(res.error)

        toast.error(error)
      }
    }
  }

  return (
    <div className={styles.login_wrap}>
      <div className={styles.login_panel}>
        <div className={classNames(styles.login_panel_bg, styles.login_panel_bg1)}>
          <img src='/images/login/login_bg1.png' alt='' />
        </div>
        {/* <div className={classNames(styles.login_panel_bg, styles.login_panel_bg2)}>
          <img src='/images/login/login_bg2.svg' alt='' />
        </div> */}
        <div className={classNames(styles.login_panel_bg, styles.login_panel_bg3)}>
          <img src='/images/login/login_bg3.png' alt='' />
        </div>
        <span>Login to admin</span>
        <Button variant='contained' className={styles.login_panel_btn} onClick={login}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
