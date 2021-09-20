import React from 'react'
import DownloadsDesktop from './DownloadsDesktop'
import DownloadsAndroid from './DownloadsAndroid'
import DownloadsIOS from './DownloadsIOS'

import { isIOS } from 'react-device-detect'

const Download = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 768

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return width > breakpoint ? (
    <DownloadsDesktop />
  ) : isIOS ? (
    <DownloadsIOS />
  ) : (
    <DownloadsAndroid />
  )
}

export default Download
