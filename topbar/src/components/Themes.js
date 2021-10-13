import React, { useState, useEffect } from "react"
import styles from "../styles/Themes.module.css"
import theme16 from "../assets/images/theme16.png"
import theme17 from "../assets/images/theme17.png"
import large from "../assets/images/ashlgrec.svg"
import round from "../assets/images/circleash.svg"
import thin from "../assets/images/ashthinrec.svg"
import whitethin from "../assets/images/lightash.svg"
import small from "../assets/images/ashsmrec.svg"
import seclarge from "../assets/images/purplelgrec.svg"
import secround from "../assets/images/circlepurple.svg"
import secthin from "../assets/images/purplethinrec.svg"
import secwhitethin from "../assets/images/lightpurple.svg"
import secsmall from "../assets/images/purplesmrec.svg"
import thdlarge from "../assets/images/greenlgrec.svg"
import thdround from "../assets/images/circlegreen.svg"
import thdthin from "../assets/images/greenthinrec.svg"
import thdwhitethin from "../assets/images/lightgreen.svg"
import thdsmall from "../assets/images/greensmrec.svg"
import forlarge from "../assets/images/darkashlgrec.svg"
import forround from "../assets/images/circledarkash.svg"
import forthin from "../assets/images/darkashthinrec.svg"
import forwhitethin from "../assets/images/lightdarkash.svg"
import forsmall from "../assets/images/darkashsmrec.svg"
import fivlarge from "../assets/images/bluelgrec.svg"
import fivround from "../assets/images/circleblue.svg"
import fivthin from "../assets/images/bluethinrec.svg"
import fivwhitethin from "../assets/images/lightblue.svg"
import fivsmall from "../assets/images/bluesmrec.svg"
import sixlarge from "../assets/images/redlgrec.svg"
import sixround from "../assets/images/circlered.svg"
import sixthin from "../assets/images/redthinrec.svg"
import sixwhitethin from "../assets/images/lightred.svg"
import sixsmall from "../assets/images/redsmrec.svg"
import sevlarge from "../assets/images/orangelgrec.svg"
import sevround from "../assets/images/circleorange.svg"
import sevthin from "../assets/images/orangethinrec.svg"
import sevwhitethin from "../assets/images/lightorange.svg"
import sevsmall from "../assets/images/orangesmrec.svg"
import eiglarge from "../assets/images/yellowlgrec.svg"
import eiground from "../assets/images/circleyellow.svg"
import eigthin from "../assets/images/yellowthinrec.svg"
import eigwhitethin from "../assets/images/lightyellow.svg"
import eigsmall from "../assets/images/yellowsmrec.svg"



const Themes = () => {
  const [active1, setActive1] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [mode, setMode] = useState("light")
  const [Data, setData] = useState(undefined)
  const [DataState, setDataState] = useState({})

  const toggleDarkMode = () => {
    setDarkMode(!darkMode ? true : true)
    setMode("dark")
  }
  const toggleLightMode = () => {
    setDarkMode(darkMode ? false : false)
    setMode("light")
  }

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("mode", "dark")
    } else {
      localStorage.setItem("mode", "light")
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
    <div className={styles.themeCont} data-theme={darkMode ? "dark" : "light"}>
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
        Automatically switch between light and dark themes when 
      </div>
      <div className={styles.extra}>
        your system does.
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
          <div className={styles.lower2} onClick={toggleDarkMode}>
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
      <div className={styles.line}></div>
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
        <div className={styles.activeAsh}>
          <div className={styles.largeRec}>
            <img src={large} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line2}></div>
          <div className={styles.roundPic}>
            <img src={round} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec}>
            <img src={thin} alt="thin-rectangle" className={styles.thin} />
          </div>
          <div className={styles.thinRec2}>
            <div className={styles.hash}>#</div>
            <img src={thin} alt="thin-rectangle" className={styles.thin2} />
          </div>
          <div className={styles.whiteThinRec}>
            <div className={styles.hash2}>#</div>
            <img src={whitethin} alt="white-thin-rectangle" className={styles.whiteThin} />
          </div>
          <div className={styles.thinRec3}>
            <img src={thin} alt="thin-rectangle" className={styles.thin3} />
          </div>
          <div className={styles.smallRec}>
            <img src={small} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent}>
            <div className={styles.radio8}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 2}
                onClick={() => {
                  setActive1(2)
                }}
              />
            </div>
            <div className={styles.ash}>Active Ash</div>
          </div>
        </div>
        <div className={styles.activeAsh2}>
          <div className={styles.largeRec2}>
            <img src={seclarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line3}></div>
          <div className={styles.roundPic2}>
            <img src={secround} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec4}>
            <img src={secthin} alt="thin-rectangle" className={styles.thin4} />
          </div>
          <div className={styles.thinRec5}>
            <div className={styles.hash3}>#</div>
            <img src={secthin} alt="thin-rectangle" className={styles.thin5} />
          </div>
          <div className={styles.whiteThinRec2}>
            <div className={styles.hash4}>#</div>
            <img src={secwhitethin} alt="white-thin-rectangle" className={styles.whiteThin2} />
          </div>
          <div className={styles.thinRec6}>
            <img src={secthin} alt="thin-rectangle" className={styles.thin6} />
          </div>
          <div className={styles.smallRec2}>
            <img src={secsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent2}>
            <div className={styles.radio9}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 3}
                onClick={() => {
                  setActive1(3)
                }}
              />
            </div>
            <div className={styles.ash2}>Picky Purple</div>
          </div>
        </div>
      </div>
      <div className={styles.all}>
        <div className={styles.arrow}>↓</div>
        <div className={styles.show}>Show all classic themes</div>
      </div>
      <div className={styles.clean}>Clean and minimal</div>
      <div className={styles.set3}>
      <div className={styles.activeAsh3}>
          <div className={styles.largeRec3}>
            <img src={thdlarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line4}></div>
          <div className={styles.roundPic3}>
            <img src={thdround} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec7}>
            <img src={thdthin} alt="thin-rectangle" className={styles.thin7} />
          </div>
          <div className={styles.thinRec8}>
            <div className={styles.hash5}>#</div>
            <img src={thdthin} alt="thin-rectangle" className={styles.thin8} />
          </div>
          <div className={styles.whiteThinRec3}>
            <div className={styles.hash6}>#</div>
            <img src={thdwhitethin} alt="white-thin-rectangle" className={styles.whiteThin3} />
          </div>
          <div className={styles.thinRec9}>
            <img src={thdthin} alt="thin-rectangle" className={styles.thin9} />
          </div>
          <div className={styles.smallRec3}>
            <img src={thdsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent3}>
            <div className={styles.radio10}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 4}
                onClick={() => {
                  setActive1(4)
                }}
              />
            </div>
            <div className={styles.ash3}>Leaf Green</div>
          </div>
        </div>
        <div className={styles.activeAsh4}>
          <div className={styles.largeRec4}>
            <img src={forlarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line5}></div>
          <div className={styles.roundPic4}>
            <img src={forround} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec10}>
            <img src={forthin} alt="thin-rectangle" className={styles.thin10} />
          </div>
          <div className={styles.thinRec11}>
            <div className={styles.hash7}>#</div>
            <img src={forthin} alt="thin-rectangle" className={styles.thin11} />
          </div>
          <div className={styles.whiteThinRec4}>
            <div className={styles.hash8}>#</div>
            <img src={forwhitethin} alt="white-thin-rectangle" className={styles.whiteThin4} />
          </div>
          <div className={styles.thinRec12}>
            <img src={forthin} alt="thin-rectangle" className={styles.thin12} />
          </div>
          <div className={styles.smallRec4}>
            <img src={forsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent4}>
            <div className={styles.radio11}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 5}
                onClick={() => {
                  setActive1(5)
                }}
              />
            </div>
            <div className={styles.ash4}>Dark Ash</div>
          </div>
        </div>
      </div>
      <div className={styles.set3}>
      <div className={styles.activeAsh5}>
          <div className={styles.largeRec5}>
            <img src={fivlarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line6}></div>
          <div className={styles.roundPic5}>
            <img src={fivround} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec13}>
            <img src={fivthin} alt="thin-rectangle" className={styles.thin13} />
          </div>
          <div className={styles.thinRec14}>
            <div className={styles.hash9}>#</div>
            <img src={fivthin} alt="thin-rectangle" className={styles.thin14} />
          </div>
          <div className={styles.whiteThinRec5}>
            <div className={styles.hash10}>#</div>
            <img src={fivwhitethin} alt="white-thin-rectangle" className={styles.whiteThin5} />
          </div>
          <div className={styles.thinRec15}>
            <img src={fivthin} alt="thin-rectangle" className={styles.thin15} />
          </div>
          <div className={styles.smallRec5}>
            <img src={fivsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent5}>
            <div className={styles.radio12}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 6}
                onClick={() => {
                  setActive1(6)
                }}
              />
            </div>
            <div className={styles.ash5}>Ocean Blue</div>
          </div>
        </div>
        <div className={styles.activeAsh6}>
          <div className={styles.largeRec6}>
            <img src={sixlarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line7}></div>
          <div className={styles.roundPic6}>
            <img src={sixround} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec16}>
            <img src={sixthin} alt="thin-rectangle" className={styles.thin16} />
          </div>
          <div className={styles.thinRec17}>
            <div className={styles.hash11}>#</div>
            <img src={sixthin} alt="thin-rectangle" className={styles.thin17} />
          </div>
          <div className={styles.whiteThinRec6}>
            <div className={styles.hash12}>#</div>
            <img src={sixwhitethin} alt="white-thin-rectangle" className={styles.whiteThin6} />
          </div>
          <div className={styles.thinRec18}>
            <img src={sixthin} alt="thin-rectangle" className={styles.thin18} />
          </div>
          <div className={styles.smallRec6}>
            <img src={sixsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent6}>
            <div className={styles.radio13}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 7}
                onClick={() => {
                  setActive1(7)
                }}
              />
            </div>
            <div className={styles.ash6}>Rose Red</div>
          </div>
        </div>
      </div>
      <div className={styles.set4}>
      <div className={styles.activeAsh7}>
          <div className={styles.largeRec7}>
            <img src={sevlarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line8}></div>
          <div className={styles.roundPic7}>
            <img src={sevround} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec19}>
            <img src={sevthin} alt="thin-rectangle" className={styles.thin19} />
          </div>
          <div className={styles.thinRec20}>
            <div className={styles.hash13}>#</div>
            <img src={sevthin} alt="thin-rectangle" className={styles.thin20} />
          </div>
          <div className={styles.whiteThinRec7}>
            <div className={styles.hash14}>#</div>
            <img src={sevwhitethin} alt="white-thin-rectangle" className={styles.whiteThin7} />
          </div>
          <div className={styles.thinRec21}>
            <img src={sevthin} alt="thin-rectangle" className={styles.thin21} />
          </div>
          <div className={styles.smallRec7}>
            <img src={sevsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent7}>
            <div className={styles.radio14}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 8}
                onClick={() => {
                  setActive1(8)
                }}
              />
            </div>
            <div className={styles.ash7}>Golden Melon</div>
          </div>
        </div>
        <div className={styles.activeAsh8}>
          <div className={styles.largeRec8}>
            <img src={eiglarge} alt="large-rectangle" className={styles.large} />
          </div>
          <div className={styles.line9}></div>
          <div className={styles.roundPic8}>
            <img src={eiground} alt="circle" className={styles.round} />
          </div>
          <div className={styles.thinRec22}>
            <img src={eigthin} alt="thin-rectangle" className={styles.thin22} />
          </div>
          <div className={styles.thinRec23}>
            <div className={styles.hash15}>#</div>
            <img src={eigthin} alt="thin-rectangle" className={styles.thin23} />
          </div>
          <div className={styles.whiteThinRec8}>
            <div className={styles.hash16}>#</div>
            <img src={eigwhitethin} alt="white-thin-rectangle" className={styles.whiteThin8} />
          </div>
          <div className={styles.thinRec24}>
            <img src={eigthin} alt="thin-rectangle" className={styles.thin24} />
          </div>
          <div className={styles.smallRec8}>
            <img src={eigsmall} alt="small-rectangle" className={styles.small} />
          </div>
          <div className={styles.lowContent8}>
            <div className={styles.radio15}>
              <input
                type="radio"
                value="activeAsh"
                checked={active1 === 9}
                onClick={() => {
                  setActive1(9)
                }}
              />
            </div>
            <div className={styles.ash8}>Canary</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Themes
