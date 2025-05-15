// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Login from '@views/Login'

export const metadata: Metadata = {
  title: 'Авторизация'
}

const LoginPage = async () => {
  return <Login />
}

export default LoginPage
