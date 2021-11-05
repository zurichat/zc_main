import React, { useState, useEffect } from "react";
import styles from "../styles/Themes.module.css";
import theme16 from "../assets/images/theme16.png";
import theme17 from "../assets/images/theme17.png";
import { themeColors } from "@zuri/utilities";

const Themes = () => {
  const [active1, setActive1] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState("light");
  const [Data, setData] = useState(undefined);
  const [DataState, setDataState] = useState({});

  const toggleDarkMode = () => {
    localStorage.setItem("mode", "dark");
    setDarkMode(!darkMode ? true : true);
    setMode("dark");
    const sideBar = document.getElementById(
      "single-spa-application:@zuri/sidebar"
    );
    sideBar.setAttribute("data-theme", "dark");
    const topBar = document.getElementById(
      "single-spa-application:@zuri/topbar"
    );
    topBar.setAttribute("data-theme", "dark");
    const PrefMenu = document.getElementById("preferences-menu-container");
    PrefMenu.setAttribute("data-theme", "dark");
    const PrefMainBox = document.getElementById("preferences-main-box");
    PrefMainBox.setAttribute("data-theme", "dark");
    const MarketPlaceBox = document.getElementsByClassName(
      "market-place-custom-div"
    );
    MarketPlaceBox.setAttribute("data-theme", "dark");
  };
  const toggleLightMode = () => {
    localStorage.setItem("mode", "light");
    setDarkMode(darkMode ? false : false);
    setMode("light");
    const sideBar = document.getElementById(
      "single-spa-application:@zuri/sidebar"
    );
    sideBar.setAttribute("data-theme", "light");
    const topBar = document.getElementById(
      "single-spa-application:@zuri/topbar"
    );
    topBar.setAttribute("data-theme", "light");
    const PrefMenu = document.getElementById("preferences-menu-container");
    PrefMenu.setAttribute("data-theme", "light");
    const PrefMainBox = document.getElementById("preferences-main-box");
    PrefMainBox.setAttribute("data-theme", "light");
    const MarketPlaceBox = document.getElementsByClassName(
      "market-place-custom-div"
    );
    MarketPlaceBox.setAttribute("data-theme", "dark");
  };

  const handleThemeToggle = theme => {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", theme);
    const sideBar = document.getElementById(
      "single-spa-application:@zuri/sidebar"
    );
    sideBar.style.backgroundColor = themeColors[theme].primary;
    const topBar = document.getElementById(
      "single-spa-application:@zuri/topbar"
    );
    topBar.style.backgroundColor = themeColors[theme].primary;
    // const sideBarHeader = document.getElementsByClassName("sidebar-header-div")
    // sideBarHeader[0].style.backgroundColor = themeColors[theme].secondary
  };

  // useEffect(() => {
  //   const themeLocal = localStorage.getItem("mode") && localStorage.getItem("mode") || "light"
  //   setMode(themeLocal)
  // }, [mode])

  // useEffect(() => {
  //   if (mode === "dark") {
  //     localStorage.setItem("mode", "dark")
  //   } else {
  //     localStorage.setItem("mode", "light")
  //   }
  // }, [mode])

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
    <div
      className={styles.themeCont} /*data-theme={darkMode ? "dark" : "light"}*/
    >
      <div className={styles.title}>
        <div className={styles.them}>Themes</div>
        <div className={styles.text}>
          Change the appearance of Slack across all of your workspaces.
        </div>
      </div>
      {/* <div className={styles.sync}>
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
      </div> */}
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
            <div className={styles.radio6} onClick={toggleLightMode}>
              <input
                type="radio"
                value="light"
                checked={active1 === 0}
                onClick={() => {
                  setActive1(0);
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
                  setActive1(1);
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
            <div className={styles.large}></div>
          </div>
          <div className={styles.line2}></div>
          <div className={styles.roundPic}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec}>
            <div className={styles.thin}></div>
          </div>
          <div className={styles.thinRec2}>
            <div className={styles.hash}>#</div>
            <div className={styles.thin2}></div>
          </div>
          <div className={styles.whiteThinRec}>
            <div className={styles.hash2}>#</div>
            <div className={styles.whiteThin}></div>
          </div>
          <div className={styles.thinRec3}>
            <div className={styles.thin3}></div>
          </div>
          <div className={styles.smallRec}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent}>
            <div
              className={styles.radio8}
              onClick={handleThemeToggle.bind(this, "activeAsh")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 2}
                onClick={() => {
                  setActive1(2);
                }}
              />
            </div>
            <div className={styles.ash}>Active Ash</div>
          </div>
        </div>
        <div className={styles.activeAsh2}>
          <div className={styles.largeRec2}>
            <div className={styles.large}></div>
          </div>
          <div className={styles.line3}></div>
          <div className={styles.roundPic2}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec4}>
            <div className={styles.thin4}></div>
          </div>
          <div className={styles.thinRec5}>
            <div className={styles.hash3}>#</div>
            <div className={styles.thin5}></div>
          </div>
          <div className={styles.whiteThinRec2}>
            <div className={styles.hash4}>#</div>
            <div className={styles.whiteThin2}></div>
          </div>
          <div className={styles.thinRec6}>
            <div className={styles.thin6}></div>
          </div>
          <div className={styles.smallRec2}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent2}>
            <div
              className={styles.radio9}
              onClick={handleThemeToggle.bind(this, "peakyPurple")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 3}
                onClick={() => {
                  setActive1(3);
                }}
              />
            </div>
            <div className={styles.ash2}>Peaky Purple</div>
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
            <div className={styles.large}></div>
          </div>
          <div className={styles.line4}></div>
          <div className={styles.roundPic3}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec7}>
            <div className={styles.thin7}></div>
          </div>
          <div className={styles.thinRec8}>
            <div className={styles.hash5}>#</div>
            <div className={styles.thin8}></div>
          </div>
          <div className={styles.whiteThinRec3}>
            <div className={styles.hash6}>#</div>
            <div className={styles.whiteThin3}></div>
          </div>
          <div className={styles.thinRec9}>
            <div className={styles.thin9}></div>
          </div>
          <div className={styles.smallRec3}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent3}>
            <div
              className={styles.radio10}
              onClick={handleThemeToggle.bind(this, "leafyGreen")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 4}
                onClick={() => {
                  setActive1(4);
                }}
              />
            </div>
            <div className={styles.ash3}>Leafy Green</div>
          </div>
        </div>
        <div className={styles.activeAsh4}>
          <div className={styles.largeRec4}>
            <div className={styles.large}></div>
          </div>
          <div className={styles.line5}></div>
          <div className={styles.roundPic4}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec10}>
            <div className={styles.thin10}></div>
          </div>
          <div className={styles.thinRec11}>
            <div className={styles.hash7}>#</div>
            <div className={styles.thin11}></div>
          </div>
          <div className={styles.whiteThinRec4}>
            <div className={styles.hash8}>#</div>
            <div className={styles.whiteThin4}></div>
          </div>
          <div className={styles.thinRec12}>
            <div className={styles.thin12}></div>
          </div>
          <div className={styles.smallRec4}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent4}>
            <div
              className={styles.radio11}
              onClick={handleThemeToggle.bind(this, "darkAsh")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 5}
                onClick={() => {
                  setActive1(5);
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
            <div className={styles.large}></div>
          </div>
          <div className={styles.line6}></div>
          <div className={styles.roundPic5}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec13}>
            <div className={styles.thin13}></div>
          </div>
          <div className={styles.thinRec14}>
            <div className={styles.hash9}>#</div>
            <div className={styles.thin14}></div>
          </div>
          <div className={styles.whiteThinRec5}>
            <div className={styles.hash10}>#</div>
            <div className={styles.whiteThin5}></div>
          </div>
          <div className={styles.thinRec15}>
            <div className={styles.thin15}></div>
          </div>
          <div className={styles.smallRec5}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent5}>
            <div
              className={styles.radio12}
              onClick={handleThemeToggle.bind(this, "oceanBlue")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 6}
                onClick={() => {
                  setActive1(6);
                }}
              />
            </div>
            <div className={styles.ash5}>Ocean Blue</div>
          </div>
        </div>
        <div className={styles.activeAsh6}>
          <div className={styles.largeRec6}>
            <div className={styles.large}></div>
          </div>
          <div className={styles.line7}></div>
          <div className={styles.roundPic6}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec16}>
            <div className={styles.thin16}></div>
          </div>
          <div className={styles.thinRec17}>
            <div className={styles.hash11}>#</div>
            <div className={styles.thin17}></div>
          </div>
          <div className={styles.whiteThinRec6}>
            <div className={styles.hash12}>#</div>
            <div className={styles.whiteThin6}></div>
          </div>
          <div className={styles.thinRec18}>
            <div className={styles.thin18}></div>
          </div>
          <div className={styles.smallRec6}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent6}>
            <div
              className={styles.radio13}
              onClick={handleThemeToggle.bind(this, "roseRed")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 7}
                onClick={() => {
                  setActive1(7);
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
            <div className={styles.large}></div>
          </div>
          <div className={styles.line8}></div>
          <div className={styles.roundPic7}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec19}>
            <div className={styles.thin19}></div>
          </div>
          <div className={styles.thinRec20}>
            <div className={styles.hash13}>#</div>
            <div className={styles.thin20}></div>
          </div>
          <div className={styles.whiteThinRec7}>
            <div className={styles.hash14}>#</div>
            <div className={styles.whiteThin7}></div>
          </div>
          <div className={styles.thinRec21}>
            <div className={styles.thin21}></div>
          </div>
          <div className={styles.smallRec7}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent7}>
            <div
              className={styles.radio14}
              onClick={handleThemeToggle.bind(this, "goldenMelon")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 8}
                onClick={() => {
                  setActive1(8);
                }}
              />
            </div>
            <div className={styles.ash7}>Golden Melon</div>
          </div>
        </div>
        <div className={styles.activeAsh8}>
          <div className={styles.largeRec8}>
            <div className={styles.large}></div>
          </div>
          <div className={styles.line9}></div>
          <div className={styles.roundPic8}>
            <div className={styles.round}></div>
          </div>
          <div className={styles.thinRec22}>
            <div className={styles.thin22}></div>
          </div>
          <div className={styles.thinRec23}>
            <div className={styles.hash15}>#</div>
            <div className={styles.thin23}></div>
          </div>
          <div className={styles.whiteThinRec8}>
            <div className={styles.hash16}>#</div>
            <div className={styles.whiteThin8}></div>
          </div>
          <div className={styles.thinRec24}>
            <div className={styles.thin24}></div>
          </div>
          <div className={styles.smallRec8}>
            <div className={styles.small}></div>
          </div>
          <div className={styles.lowContent8}>
            <div
              className={styles.radio15}
              onClick={handleThemeToggle.bind(this, "canary")}
            >
              <input
                name="theme"
                type="radio"
                value="activeAsh"
                checked={active1 === 9}
                onClick={() => {
                  setActive1(9);
                }}
              />
            </div>
            <div className={styles.ash8}>Canary</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
