import { useRef, useState, useCallback } from 'react'

import { toPng, getFontEmbedCSS } from 'html-to-image'

interface UseDownloadElementOptions {
  fileName: string
}

export const convertElementToBase64 = async (node: HTMLElement): Promise<string> => {
  if (!node) {
    throw new Error('The provided HTML element is null or undefined.')
  }

  try {
    const fontEmbedCSS = await getFontEmbedCSS(node)

    return await toPng(node, {
      quality: 1,
      cacheBust: false,
      fontEmbedCSS,
      style: {
        fontFamily: 'Geologica, sans-serif'
      }
    })
  } catch (error) {
    console.error('Failed to convert element to image:', error)
    throw error
  }
}

export const useDownloadElementAsImage = <T extends HTMLElement>({ fileName }: UseDownloadElementOptions) => {
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef<T | null>(null)

  const saveImage = useCallback(async () => {
    if (!ref.current) {
      console.error('No element is assigned to the ref.')

      return
    }

    setIsLoading(true)

    try {
      const imgBase64 = await convertElementToBase64(ref.current)

      const link = document.createElement('a')

      link.download = `${fileName}.png`
      link.href = imgBase64
      link.click()
    } catch (error) {
      console.error('Failed to save the image:', error)
    } finally {
      setIsLoading(false)
    }
  }, [fileName])

  return { isLoading, ref, saveImage }
}
