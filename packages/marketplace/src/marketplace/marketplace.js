import axios from "axios";
import { Helmet } from "react-helmet";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Styles and Assets
import "react-tabs/style/react-tabs.css";
import styles from "./styles/marketplace.module.css";
// Components
import MarketPlaceContainer from "./components/MarketPlaceContainer";
import { MarketPlaceProvider } from "../context/MarketPlace.context.js";
import { getUserInfo, BASE_API_URL } from "@zuri/utilities";

const MarketPlace = () => {
  let currentWorkspace = localStorage.getItem("currentWorkspace");

  let token = sessionStorage.getItem("token");

  // States
  const [user, setUser] = useState({});
  const [isMarketPlaceLoading, setIsMarketPlaceLoading] = useState(false);
  const [plugins, setPlugins] = useState({
    all: [],
    installed: [],
    popular: []
  });
  const [filteredPlugins, setFilteredPlugins] = useState(plugins);

  useEffect(() => {
    getPlugins();
    getLoggedInUser();
  }, []);

  useEffect(() => {
    setFilteredPlugins(plugins);
  }, [plugins]);

  const getPlugins = async () => {
    setIsMarketPlaceLoading(true);
    try {
      let pluginData = plugins;

      const get_all_plugins = await axios.get(
        `${BASE_API_URL}/marketplace/plugins?limit=10000`
      );
      const get_popular_plugins = await axios.get(
        `${BASE_API_URL}/marketplace/plugins/popular`
      );
      const get_installed_plugins = await axios.get(
        `${BASE_API_URL}/organizations/${currentWorkspace}/plugins`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (get_all_plugins.status === 200) {
        pluginData["all"] = get_all_plugins.data.data.plugins;
      }

      if (get_popular_plugins.status === 200) {
        pluginData["popular"] = get_popular_plugins.data.data.filter(
          plugin => plugin.install_count > 10
        );
      }

      if (
        get_installed_plugins.status === 200 &&
        get_installed_plugins.data.data !== null
      ) {
        pluginData["installed"] = get_installed_plugins.data.data.map(
          plugin => plugin.plugin
        );
      }

      // marketplaceContext.dispatch(loadPlugins(data))
      setPlugins(pluginData);
      setIsMarketPlaceLoading(false);
    } catch (err) {
      setIsMarketPlaceLoading(false);
      console.error(err);
    }
  };

  const getLoggedInUser = async () => {
    try {
      const userInfo = await getUserInfo();
      //Check if user id is valid and get user organization
      if (userInfo.user._id !== "") {
        setUser(userInfo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = event => {
    let value = event.target.value.toLowerCase();
    let result = {};
    result["all"] = plugins.all.filter(plugin => {
      return (
        plugin.name.toLowerCase().search(value) != -1 ||
        plugin.description.toLowerCase().search(value) != -1
      );
    });
    result["installed"] = plugins.installed.filter(plugin => {
      return (
        plugin.name.toLowerCase().search(value) != -1 ||
        plugin.description.toLowerCase().search(value) != -1
      );
    });
    result["popular"] = plugins.popular.filter(plugin => {
      return (
        plugin.name.toLowerCase().search(value) != -1 ||
        plugin.description.toLowerCase().search(value) != -1
      );
    });
    setFilteredPlugins(result);
  };

  return (
    <MarketPlaceProvider>
      <Helmet>
        <title>Market Place - Zuri Chat</title>
      </Helmet>

      <div className={styles.marketplace}>
        <div className={styles.marketplaceHero}>
          <div className={styles.marketplaceSearchBar}>
            <div>
              <input
                type="text"
                placeholder="Search Plugins"
                onChange={handleSearch}
              />
            </div>
            <div>
              <button className={styles.marketplaceHeroButton}>Search</button>
            </div>
          </div>
        </div>

        <div className={styles.marketPlaceContainer}>
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
  );
};

export default MarketPlace;
