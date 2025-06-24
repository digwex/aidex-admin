

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DNS,
  debug: false
})

// eslint-disable-next-line import/namespace
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
