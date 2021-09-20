import React from 'react'
import styles from '../styles/Themes.module.css'
import theme1 from '../../images/theme1.png'
import theme2 from '../../images/theme2.png'
import theme3 from '../../images/theme3.png'
import theme4 from '../../images/theme4.png'
import theme5 from '../../images/theme5.png'
import theme6 from '../../images/theme6.png'
import theme7 from '../../images/theme3.png'
import theme8 from '../../images/theme3.png'
import theme9 from '../../images/theme3.png'
import theme10 from '../../images/theme3.png'
import { useState, useContext, useEffect } from 'react'
import { authAxios } from '../../../util/Api'
import { ProfileContext } from '../../../context/ProfileModal'

const Themes = () => {
  const [colorName, setColorName] = useState('')
  const [themeName, setThemeName] = useState('')

  const [syncOs, setSyncOs] = useState(false)
  const [directMsg, setDirectMsg] = useState(false)

  const { user, orgId } = useContext(ProfileContext)

  // handleSubmit function on the form
  /*const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isChecked)
  }*/

  // React.useEffect(() => {
  //   fetch("https://api.zuri.chat/", {
  //       method: "POST",
  //       headers: {
  //           // authorization if any
  //           "Content-Type": 'application/json',
  //       },
  //       body: JSON.stringify()
  //   }).then((res) => console.log(res)).catch((error) => console.log(error))
  // })

  const [themes, setThemes] = useState({
    // channel_hurdle_notification: channel_hurdle,
    colors: '',
    themes: ''
  })

  const setData = () => {
    authAxios
      .patch(`/organizations/${orgId}/members/${user._id}/settings`, {
        settings: {
          themes: themes
        }
      })
      .then(res => {
        console.log(res)
        setState({ loading: false })
      })
      .catch(err => {
        console.log(err?.response?.data)
        setState({ loading: false })
      })
  }
  const [state, setState] = useState({
    name: 'React',
    value: 'duration'
  })

  const handleChange = event => {
    setState({ value: event.target.value })
  }

  React.useEffect(() => {
    setData()
    console.log(themes)
    console.log(user)
  }, [themes])

  return (
    <div className={styles.themeCont}>
      <div className={styles.title}>
        <div className={styles.text}>
          Change the appearance of Slack across all of your workspaces.
        </div>
      </div>
      <div className={styles.sync}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            checked={syncOs}
            onClick={() => {
              setSyncOs(!syncOs)
              setThemes({ colors: '' })
            }}
          />
        </div>
        <div className={styles.os}>Sync with OS setting</div>
      </div>
      <div className={styles.direct}>
        <div className={styles.radio}>
          <input
            type="checkbox"
            checked={directMsg}
            onClick={() => {
              setDirectMsg(!directMsg)
              setThemes({ colors: '' })
            }}
          />
        </div>
        <div className={styles.mention}>
          Direct messages, mentions & network
        </div>
      </div>
      <div className={styles.text2}>
        Automatically switch between light and dark themes when your <br />
        system does.
      </div>
      <div className={styles.img}>
        <img
          src={theme1}
          alt="theme1"
          className={styles.theme1}
          onClick={() => {
            setColorName(colorName)
            setThemes({ colors: '' })
            setData()
          }}
        />
      </div>
      <div className={styles.img2}>
        <img
          src={theme2}
          alt="theme2"
          className={styles.theme2}
          onClick={() => {
            setColorName(colorName)
            setThemes({ colors: '' })
            setData()
          }}
        />
      </div>
      <div className={styles.customize}>
        <div className={styles.text3}>Colors</div>
        <div className={styles.custom}>
          Customize the look of your workspace. Feeling <br /> adventurous?
        </div>
        <div className={styles.create}>Create a custom theme</div>
        <div className={styles.true}>Tried and true</div>
      </div>
      <div className={styles.set1}>
        <div className={styles.img3}>
          <img
            src={theme3}
            alt="theme3"
            className={styles.theme3}
            onClick={() => {
              setThemeName('theme3')
            }}
          />
        </div>
        <div className={styles.img4}>
          <img
            src={theme4}
            alt="theme4"
            className={styles.theme4}
            onClick={() => {
              setThemeName('theme4')
            }}
          />
        </div>
      </div>
      <div className={styles.all}>
        <div className={styles.arrow}>↓</div>
        <div className={styles.show}>Show all classic themes</div>
      </div>
      <div className={styles.clean}>Clean and minimal</div>
      <div className={styles.set2}>
        <div className={styles.img5}>
          <img
            src={theme5}
            alt="theme5"
            className={styles.theme5}
            onClick={() => {
              setThemeName('theme5')
            }}
          />
        </div>
        <div className={styles.img6}>
          <img
            src={theme6}
            alt="theme6"
            className={styles.theme6}
            onClick={() => {
              setThemeName('theme6')
            }}
          />
        </div>
      </div>
      <div className={styles.set3}>
        <div className={styles.img7}>
          <img
            src={theme7}
            alt="theme7"
            className={styles.theme7}
            onClick={() => {
              setThemeName('theme7')
            }}
          />
        </div>
        <div className={styles.img8}>
          <img
            src={theme8}
            alt="theme8"
            className={styles.theme8}
            onClick={() => {
              setThemeName('theme8')
            }}
          />
        </div>
      </div>
      <div className={styles.set4}>
        <div className={styles.bottom}>
          <div className={styles.img9}>
            <img
              src={theme9}
              alt="theme9"
              className={styles.theme9}
              onClick={() => {
                setThemeName('theme9')
              }}
            />
          </div>
          <div className={styles.img10}>
            <img
              src={theme10}
              alt="theme10"
              className={styles.theme10}
              onClick={() => {
                setThemeName('theme9')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Themes
