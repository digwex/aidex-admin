import * as Sentry from '@sentry/react'

const dns = import.meta.env.VITE_REACT_APP_SENTRY_DNS as string | undefined

export const initSentry = () => {
  if (import.meta.env.PROD && dns) {
    Sentry.init({
      release: import.meta.env.VITE_REACT_APP_VERSION,
      dsn: dns
    })
  }
}
