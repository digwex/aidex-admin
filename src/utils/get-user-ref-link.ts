import type { User } from '@/api/endpoints/users/users-types'

export const getUserRefLink = (data: User | undefined) => `https://apedex.ai?refCode=${data?.refCode}`
