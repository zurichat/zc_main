
import axios from "axios"
import { Helmet } from "react-helmet"
import { Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

// Styles and Assets
import "react-tabs/style/react-tabs.css"
import styles from "./styles/marketplace.module.css"
import InstallPluginIcon from "../component-assets/InstallPluginIcon.svg"
import CollaborationIcon from "../component-assets/CollaborationIcon.svg"
import DiscoverPluginIcon from "../component-assets/DiscoverPluginIcon.svg"

// Components
// import MarketplaceHeader from './components/marketplace-container/MarketplaceHeader'
// import Footer from '../../components/Footer'
import MarketPlaceContainer from "./components/MarketPlaceContainer"
import { MarketPlaceProvider } from "../context/MarketPlace.context.js"
import { GetUserInfo } from "@zuri/utilities"

const MarketPlace = () => {
  let currentWorkspace = localStorage.getItem("currentWorkspace")
  let token = sessionStorage.getItem("token")

  // States
  const [user, setUser] = useState({})
  const [isMarketPlaceLoading, setIsMarketPlaceLoading] = useState(false)
  const [plugins, setPlugins] = useState({
    all: [],
    installed: [],
    popular: []
  })
  const [filteredPlugins, setFilteredPlugins] = useState(plugins)

  useEffect(() => {
    getPlugins()
    getLoggedInUser()
  }, [])

  useEffect(() => {
    setFilteredPlugins(plugins)
  }, [plugins])

  const getPlugins = async () => {
    setIsMarketPlaceLoading(true)
    try {
      let pluginData = plugins

      const get_all_plugins = await axios.get(
        "https://api.zuri.chat/marketplace/plugins?limit=10000"
      )
      const get_popular_plugins = await axios.get(
        "https://api.zuri.chat/marketplace/plugins/popular"
      )
      const get_installed_plugins = await axios.get(
        `https://api.zuri.chat/organizations/${currentWorkspace}/plugins`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (get_all_plugins.status === 200) {
        pluginData["all"] = get_all_plugins.data.data.plugins
      }

      if (get_popular_plugins.status === 200) {
        pluginData["popular"] = get_popular_plugins.data.data.filter(
          plugin => plugin.install_count > 10
        )
      }

      if (
        get_installed_plugins.status === 200 &&
        get_installed_plugins.data.data !== null
      ) {
        pluginData["installed"] = get_installed_plugins.data.data.map(
          plugin => plugin.plugin
        )
      }

      // marketplaceContext.dispatch(loadPlugins(data))
      setPlugins(pluginData)
      setIsMarketPlaceLoading(false)
    } catch (err) {
      setIsMarketPlaceLoading(false)
      console.error(err)
    }
  }

  const getLoggedInUser = async () => {
    try {
      const userInfo = await GetUserInfo()
      //Check if user id is valid and get user organization
      if (userInfo[0]._id !== "") {
        setUser(userInfo)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearch = event => {
    let value = event.target.value.toLowerCase()
    let result = {};
    result["all"] = plugins.all.filter(plugin => {
      return plugin.name.toLowerCase().search(value) != -1 || plugin.description.toLowerCase().search(value) != -1
    })
    result["installed"] = plugins.installed.filter(plugin => {
      return plugin.name.toLowerCase().search(value) != -1 || plugin.description.toLowerCase().search(value) != -1
    })
    result["popular"] = plugins.popular.filter(plugin => {
      return plugin.name.toLowerCase().search(value) != -1 || plugin.description.toLowerCase().search(value) != -1
    })
    setFilteredPlugins(result)
  }


  return (
    <MarketPlaceProvider>
      <Helmet>
        <title>Market Place - Zuri Chat</title>
      </Helmet>

      <div className={styles.marketplace}>
        <div
          className={`w-100 d-flex flex-wrap justify-content-between align-items-baseline ${styles.marketplaceNavbar}`}
        >
          {/* Mark doesn't want the header here anymore */}
          {/* <MarketplaceHeader /> */}
        </div>

        <div className={styles.marketplaceHero}>
          <Row>
            <Col md={8}>
              <h1>Your number one plugin hub created for better experience</h1>
              <p className="p-0">
                Integrate your favorite plugins and get more exciting experience
                from the Zuri app. Collaborate, work smarter and better.{" "}
              </p>
            </Col>
          </Row>
        </div>

        <div className={styles.marketPlaceContainer}>
          <div className={`d-flex mb-5 align-items-center ${styles.marketplaceSearchBox}`}>
            <div className={styles.marketplaceSearchBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                  fill="rgba(190,190,190,1)"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Plugins"
                onChange={handleSearch}
                id={styles.marketplaceSearchFocus}
              />
            </div>
            <button className={styles.marketplaceHeroButton}>Search</button>
          </div>
          <Tabs
            className={styles.marketplaceTabs}
            selectedTabClassName={styles.marketplaceTabSelected}
          >
            <div
              className={`d-flex justify-content-between w-100 ${styles.marketplaceContainerMain}`}
            >
              <div>
                <h2 className={styles.marketplaceContainerTitle}>
                  Marketplace for you
                </h2>
                <p className={styles.marketplaceContainerCaption}>
                  Get Plugins that you would enjoy
                </p>
              </div>
              <TabList className={styles.marketplaceTabList}>
                <Tab className={styles.marketplaceTab}>Discover</Tab>
                <Tab className={styles.marketplaceTab}>Popular Plugins</Tab>
                <Tab className={styles.marketplaceTab}>Installed Plugins</Tab>
              </TabList>
            </div>
            <Row className={`mx-0`}>
              <TabPanel>
                <MarketPlaceContainer
                  user={user}
                  isMarketPlaceLoading={isMarketPlaceLoading}
                  setPlugins={setPlugins}
                  plugins={filteredPlugins}
                  type={"all"}
                />
              </TabPanel>
              <TabPanel>
                <MarketPlaceContainer
                  user={user}
                  isMarketPlaceLoading={isMarketPlaceLoading}
                  setPlugins={setPlugins}
                  plugins={filteredPlugins}
                  type={"popular"}
                />
              </TabPanel>
              <TabPanel>
                <MarketPlaceContainer
                  user={user}
                  isMarketPlaceLoading={isMarketPlaceLoading}
                  setPlugins={setPlugins}
                  plugins={filteredPlugins}
                  type={"installed"}
                />
              </TabPanel>
            </Row>
          </Tabs>
        </div>

        {/* <Footer /> */}
      </div>
    </MarketPlaceProvider>
  )
}

export default MarketPlace
