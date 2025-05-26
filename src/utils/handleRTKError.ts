const RESOURCE_DEFAULT_ERROR_MESSAGE = 'Что-то пошло не так, попробуйте позже или обратитесь в поддержку'

export const handleRTKError = (error: any): string => {
  if (typeof error === 'string') return error
  if (error === undefined) return ''
  if (!error) return RESOURCE_DEFAULT_ERROR_MESSAGE
  const message = error?.data?.message
  const isMessageString = message && typeof message === 'string'

  if (isMessageString) return message
  console.log('error', error, error?.message?.meta?.cause)
  if (error?.data?.message?.meta?.cause && typeof error?.data?.message?.meta?.cause === 'string')
    return error?.data?.message?.meta?.cause

  return RESOURCE_DEFAULT_ERROR_MESSAGE
}
