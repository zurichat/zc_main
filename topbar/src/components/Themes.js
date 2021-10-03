import React from 'react'
import styles from '../styles/Themes.module.css'
import theme3 from '../assets/images/theme3.png'
import theme4 from '../assets/images/theme4.png'
import theme5 from '../assets/images/theme5.png'
import theme6 from '../assets/images/theme6.png'
import theme7 from '../assets/images/theme3.png'
import theme8 from '../assets/images/theme3.png'
import theme9 from '../assets/images/theme3.png'
import theme10 from '../assets/images/theme3.png'
import theme16 from '../assets/images/theme16.png'
import theme17 from '../assets/images/theme17.png'
import { useState, useEffect } from 'react'


const Themes = () => {
  const [active1, setActive1] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [mode, setMode] = useState('light')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode ? true : true)
    setMode('dark')
  }
  const toggleLightMode = () => {
    setDarkMode(darkMode ? false : false)
    setMode('light')
  }

  useEffect(() => {
    if (mode === 'dark') {
      localStorage.setItem('mode', 'dark')
    } else {
      localStorage.setItem('mode', 'light')
    }
  }, [mode])

  // const [mode, setMode] = useState(() => localStorage.getItem('mode'))

  // 

  //const [isChecked, setIsChecked] = useState(false)

  // handleSubmit function on the form
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   console.log(isChecked)
  // }

  // React.useEffect(() => {
  //   fetch('https://api.zuri.chat/', {
  //     method: 'POST',
  //     headers: {
  //       // authorization if any
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(isChecked)
  //   })
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error))
  // })

  return (
    <div className={styles.themeCont} data-theme={darkMode ? 'dark' : 'light'}>
      <div className={styles.title}>
        <div className={styles.them}>Themes</div>
        <div className={styles.text}>
          Change the appearance of Slack across all of your workspaces.
        </div>
      </div>
      <div className={styles.sync}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="sync"
              onClick={() => {
                setDataState({sync_with_os: 'yes'})
                setData()
              }}
            />
          </div>
        <div className={styles.os}>Sync with OS setting</div>
      </div>
      <div className={styles.direct}>
          <div className={styles.radio}>
            <input
              type="checkbox"
              name="sync"
              onClick={() => {
                setDataState({direct_messages_mentions_and_network: 'yes'})
                setData()
              }}
            />
          </div>
        <div className={styles.mention}>
          Direct messages, mentions &amp; network
        </div>
      </div>
      <div className={styles.text2}>
        Automatically switch between light and dark themes when your system does.
      </div>
        <div className={styles.img}>
          <div className={styles.up}>
            <div className={styles.upper}>
            <img src={theme16} alt="theme16" className={styles.theme16} />
            <div className={styles.bot}>Zuribot</div>
            <div className={styles.time}>9:25am</div>
            </div>
            <div className={styles.nice}>Look nice today.</div>
          </div>
          <div className={styles.low}>
            <div className={styles.lower}>
              <div className={styles.radio6} onClick={toggleLightMode}>
                <input type="radio" value="light" checked={active1 === 0} onClick={() => {setActive1(0)}} />
              </div>
              <div className={styles.light}>Light</div>
            </div>
          </div>
        </div>
        <div className={styles.img2}>
          <div className={styles.up2}>
            <div className={styles.upper2}>
              <img src={theme17} alt="theme17" className={styles.theme17} />
              <div className={styles.bot2}>Zuribot</div>
              <div className={styles.time2}>9:25am</div>
            </div>
            <div className={styles.nice2}>Look nice today.</div>
          </div>
          <div className={styles.low2}>
            <div className={styles.lower2} onClick={toggleDarkMode}>
              <div className={styles.radio7}>
                <input type="radio" value="light" checked={active1 === 1} onClick={() => {setActive1(1)}} />
              </div>
              <div className={styles.light2}>Dark</div>
            </div>
          </div>
      </div>
      <div className={styles.customize}>
        <div className={styles.text3}>Colors</div>
        <div className={styles.custom}>
          Customize the look of your workspace. Feeling
        </div>
        <div className={styles.custom2}>adventurous?</div>
        <div className={styles.create}>Create a custom theme</div>
        <div className={styles.true}>Tried and true</div>
      </div>
      <div className={styles.set1}>
        <div className={styles.img3}>
          <img src={theme3} alt="theme3" className={styles.theme3} />
        </div>
        <div className={styles.img4}>
          <img src={theme4} alt="theme4" className={styles.theme4} />
        </div>
      </div>
      <div className={styles.all}>
        <div className={styles.arrow}>↓</div>
        <div className={styles.show}>Show all classic themes</div>
      </div>
      <div className={styles.clean}>Clean and minimal</div>
      <div className={styles.set2}>
        <div className={styles.img5}>
          <img src={theme5} alt="theme5" className={styles.theme5} />
        </div>
        <div className={styles.img6}>
          <img src={theme6} alt="theme6" className={styles.theme6} />
        </div>
      </div>
      <div className={styles.set3}>
        <div className={styles.img7}>
          <img src={theme7} alt="theme7" className={styles.theme7} />
        </div>
        <div className={styles.img8}>
          <img src={theme8} alt="theme8" className={styles.theme8} />
        </div>
      </div>
      <div className={styles.set4}>
        <div className={styles.bottom}>
          <div className={styles.img9}>
            <img src={theme9} alt="theme9" className={styles.theme9} />
          </div>
          <div className={styles.img10}>
            <img src={theme10} alt="theme10" className={styles.theme10} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Themes
