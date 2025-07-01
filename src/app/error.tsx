'use client'

import { useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    try {
      Sentry.captureException(error)
    } catch (error) {
      console.log('Sentry.captureException try catch error', error)
    }
  }, [error])

  return (
    <div
      style={{
        color: 'white',
        backgroundColor: '#1f2630',
        width: '100%',
        height: '100dvh',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
      }}
    >
      <div>
        <h2>unexpected error</h2>
        <div>
          <pre>{JSON.stringify(error?.message)}</pre>
        </div>
      </div>
    </div>
  )
}
