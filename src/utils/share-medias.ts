export const shareMedias = [
  {
    icon: '/img/icons/share-telegram.svg',
    title: 'Telegram',
    onClick: (url: string, text: string) =>
      window.open(`https://telegram.me/share/url?url=${url}&text=${encodeURIComponent(text)}`, '_blank')
  },
  {
    icon: '/img/icons/share-x.svg',
    title: 'X',
    onClick: (url: string, text: string) =>
      window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank')
  },
  {
    icon: '/img/icons/share-whatsapp.svg',
    title: 'WhatsApp',
    onClick: (url: string, text: string) => {
      const textTest = `${text} \n ${url} `

      return window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(textTest)}`, '_blank')
    }
  },
  {
    icon: '/img/icons/share-facebook.svg',
    title: 'Facebook',
    onClick: (url: string, text: string) =>
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
        '_blank'
      )
  }

  // {
  //   title: 'Viber',
  //   onClick: (url: string, text: string) =>
  //     window.open(
  //       'viber://forward?text=' + encodeURIComponent(text + ' ' + url),
  //       '_blank'
  //     )
  // }
] as const

export const useShareInMedia = () => {}
