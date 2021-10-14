import React, { useState, useEffect } from "react"
import styles from "../styles/Themes.module.css"
import theme3 from "../assets/images/theme3.png"
import theme4 from "../assets/images/theme4.png"
import theme5 from "../assets/images/theme5.png"
import theme6 from "../assets/images/theme6.png"
import theme7 from "../assets/images/theme7.png"
import theme8 from "../assets/images/theme8.png"
import theme9 from "../assets/images/theme9.png"
import theme10 from "../assets/images/theme10.png"
import theme16 from "../assets/images/theme16.png"
import theme17 from "../assets/images/theme17.png"
import theme18 from "../assets/images/theme18.png"
import theme19 from "../assets/images/theme19.png"
import theme20 from "../assets/images/theme20.png"
import theme21 from "../assets/images/theme21.png"
// import dispath and selector values for store
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode as toggle_dark_mode } from "../redux/userAction/userActions"

const Themes = () => {
  // store useSelector and dispatcher
  const store_dark_mode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()

  const [active1, setActive1] = useState(0)
  const [mode, setMode] = useState("light")
  const [Data, setData] = useState(undefined)
  const [DataState, setDataState] = useState({})

  // toggle dark mode on/off on store
  const handleToggle = (value) => {
    dispatch(toggle_dark_mode(value == 1 ? true : false))
    setMode(value == 1 ? "dark" : "light")
    setActive1(value)
    // eslint-disable-next-line no-console
    console.log(store_dark_mode);
  }

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("mode", "dark")
    } else {
      localStorage.setItem("mode", "light")
    }
  }, [mode])

  

  return (
    // switch dark mode on toggle
    <div className={styles.themeCont} data-theme={store_dark_mode ? "dark" : "light"}>
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
              setDataState({ sync_with_os: "yes" })
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
              setDataState({ direct_messages_mentions_and_network: "yes" })
              setData()
            }}
          />
        </div>
        <div className={styles.mention}>
          Direct messages, mentions &amp; network
        </div>
      </div>
      <div className={styles.text2}>
        Automatically switch between light and dark themes when your system
        does.
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
            {/* toggle light/dark mode */}
            <div className={styles.radio6} onClick={() => {handleToggle(0)}}>
              <input
                type="radio"
                value="light"
                checked={active1 === 0}
                onClick={() => {
                  setActive1(0)
                }}
              />
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
          <div className={styles.lower2} onClick={() => {handleToggle(1)}}>
            <div className={styles.radio7}>
              <input
                type="radio"
                value="light"
                checked={active1 === 1}
                onClick={() => {
                  setActive1(1)
                }}
              />
            </div>
            <div className={styles.light2}>Dark</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Themes
