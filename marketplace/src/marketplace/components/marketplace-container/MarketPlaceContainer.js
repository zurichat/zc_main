import React, { useState, useEffect } from "react"
import axios from "axios"
import { PluginCard } from "../plugins-card/PluginCard"
import styles from "../../styles/marketplace.module.css"
import logo from "../../../component-assets/zurichatlogo.svg"
import SuccessMark from "../../../component-assets/success-mark.svg"
//eslint-disable-next-line
import { Modal, Spinner } from "react-bootstrap"
import { useMarketPlaceContext } from "../../../context/MarketPlace.context"
import {
  setPluginId,
  loadPlugins,
  fetchPlugins
} from "../../../context/marketplace/marketplace.action"
import { GetUserInfo } from "@zuri/control"
import MarketPlaceModal from "./MarketPlaceModal"

const MarketPlaceContainer = ({ type }) => {
  const [user, setUser] = useState({})
  const [plugin, setPlugin] = useState([])
  const [pluginsLoading, setPluginsLoading] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [installLoading, setInstallLoading] = useState(false)
  const [installErr, setInstallErr] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const marketplace = useMarketPlaceContext()

  const { state } = marketplace

  let currentWorkspace = localStorage.getItem("currentWorkspace")
  let token = sessionStorage.getItem("token")

  const retrievePlugins = async () => {
    setPluginsLoading(true)
    marketplace.dispatch(fetchPlugins())
    try {
      const response = await axios.get(
        "https://api.zuri.chat/marketplace/plugins"
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        marketplace.dispatch(loadPlugins(data))
        setPluginsLoading(false)
      }
    } catch (err) {
      setPluginsLoading(false)
      console.error(err)
    }
  }

  const retrieveInstalledPlugin = async () => {
    setisLoading(true)
    try {
      const response = await axios.get(
        `https://api.zuri.chat/organizations/${currentWorkspace}/plugins`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        marketplace.dispatch(loadPlugins(data.map(plugin => plugin.plugin)))
        setisLoading(false)
      }
    } catch (err) {
      setisLoading(false)
      console.error(err)
    }
  }

  const retrievePlugin = async () => {
    setisLoading(true)
    try {
      const response = await axios.get(
        `https://api.zuri.chat/marketplace/plugins/${marketplace.state.pluginId}`
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        setPlugin(data)
        setisLoading(false)
      }
    } catch (error) {
      console.error(error)
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

  useEffect(() => {
    switch (type) {
      case "all":
        retrievePlugins()
        break;
      case "installed":
        retrieveInstalledPlugin()
        break;
      case "popular":
        retrievePlugins()
        break;
      default:
        retrievePlugins()
        break;
    }
    getLoggedInUser()
  }, [])

  useEffect(() => {
    if (marketplace.state.pluginId) {
      retrievePlugin()
    }
    //eslint-disable-next-line
  }, [marketplace.state.pluginId])

  return (
    <>
      {pluginsLoading && (
        <div className="d-flex justify-content-center align-items-center w-100 flex-column py-3 mb-5">
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!pluginsLoading && state.plugins.length > 0 && (
        <div className={styles.zuriMarketPlace__container}>
          {state.plugins.map((plugin, i) => {
            return <PluginCard key={i} {...plugin} />
          })}
          {marketplace.state.isModal && marketplace.state.pluginId && (

            <MarketPlaceModal />
          )}
        </div>
      )}
    </>
  )
}

export default MarketPlaceContainer
