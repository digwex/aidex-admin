'use client'

import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { userActions } from '@/redux-store/slices'
import { API_URL } from '@/utils/constants'
import { useAppDispatch } from '../hooks/useRedux'
import { useUser } from '../hooks/useUser'

export const mainDomainApi = new URL(API_URL).host

interface Props {
  children: any
}

let socket: WebSocket

const WebSocketUserProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  const { adminTicket } = useUser()

  const connectToUserWebsocket = (ticket: string) => {
    console.log('reconnect to socket')

    if (socket) {
      console.log('Close socket from connectToUserWebsocket')
      socket.close()
    }

    socket = new WebSocket(`wss://${mainDomainApi}/admin`, [ticket])
  }

  useEffect(() => {
    if (adminTicket) {
      connectToUserWebsocket(adminTicket)
    }

    if (socket) {
      socket.addEventListener('message', (event: { data: string }) => {
        const message = JSON.parse(event.data)

        if (message.data?.accessToken) {
          const { id, accessToken, refreshTokenId, accessLevel, permissions } = message.data

          dispatch(
            userActions.setTokens({
              id,
              accessLevel,
              permissions,
              accessToken,
              refreshTokenId
            })
          )
        } else if (message?.message?.includes?.('token already connected')) {
          toast.error('Клиент, использующий этот токен, уже подключен')
          console.log('Close socket from token already connected')
          socket.close()
        }
      })

      socket.onclose = function (this: WebSocket, ev: CloseEvent) {
        console.log('Socket on close event', ev)
      }
    }

    return () => {
      if (socket && !adminTicket) {
        console.log('Close from main')
        socket.close()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminTicket])

  return children
}

export default WebSocketUserProvider
