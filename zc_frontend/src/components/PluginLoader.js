import { useContext, useEffect, useRef, useState } from 'react'
import { PluginLoaderContext } from '../context/PluginLoaderState'
import styles from '../styles/PluginLoader.module.css'

const PluginLoader = () => {
  const [show, setShow] = useState(false)
  const { loader } = useContext(PluginLoaderContext)
  const loaderEl = useRef(null)

  useEffect(() => {
    if (loader === 'loading') {
      setShow(true)
    } else if (loader === 'ready' && loaderEl.current) {
      loaderEl.current.style.clipPath = 'circle(0px at 50% 50%)'
      loaderEl.current.style.opacity = '0'
      setTimeout(() => {
        setShow(false)
      }, 400)
    }
  }, [loader])

  return (
    show && (
      <div ref={loaderEl} className={styles.loader}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="72"
          viewBox="0 0 47 52"
          fill="none"
        >
          <rect
            className={styles.topLeft}
            x="6.30078"
            width="18.9016"
            height="19.8545"
            rx="1.0991"
            fill="#00B87C"
          />
          <rect
            className={styles.bottomLeft}
            y="22.6904"
            width="18.9016"
            height="19.8545"
            rx="1.0991"
            fill="#FEA162"
          />
          <rect
            className={styles.topRight}
            x="27.9033"
            y="9.45508"
            width="18.9016"
            height="19.8545"
            rx="1.0991"
            fill="#1A61DB"
          />
          <rect
            className={styles.bottomRight}
            x="21.6025"
            y="32.1455"
            width="18.9016"
            height="19.8545"
            rx="1.0991"
            fill="#DC1AA3"
          />
        </svg>
      </div>
    )
  )
}

export default PluginLoader
