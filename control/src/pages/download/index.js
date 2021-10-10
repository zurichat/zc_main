import React from 'react'
import DownloadsMobile from './DownloadsMobile'
import DownloadsDesktop from './DownloadsDesktop'
import useMediaQuery from '../../components/useMediaQuery'

const Download = () => {
  //const [width, setWidth] = React.useState(window.innerWidth)
  const pageWidth = useMediaQuery('(max-width: 640px)');

  //React.useEffect(() => {
  //  const handleWindowResize = () => setWidth(window.innerWidth)
  //  window.addEventListener('resize', handleWindowResize)
//
  //  return () => window.removeEventListener('resize', handleWindowResize)
  //}, [])

  return pageWidth ? <DownloadsMobile /> : <DownloadsDesktop />
}

export default Download
