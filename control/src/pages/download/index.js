import React from 'react'
import DownloadsWindows from './DownloadsWindows'
import DownloadsAndroid from './DownloadsAndroid'
import DownloadsIOS from './DownloadsIOS'
import DownloadsMac from './DownloadsMac'

import { isIOS, isMacOs } from 'react-device-detect'

const Download = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 640

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return width > breakpoint ? (
    <DownloadsWindows />
  ) : isIOS ? (
    <DownloadsIOS />
  ) : (
    <DownloadsAndroid />
  )
}

export default Download
