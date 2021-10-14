import React, { useState, useEffect } from "react"
import axios from "axios"
import { PluginCard } from "../plugins-card/PluginCard"
import styles from "../../styles/marketplace.module.css"
import logo from "../../../component-assets/zurichatlogo.svg"
import SuccessMark from "../../../component-assets/success-mark.svg"
import ErrorMark from "../../../component-assets/error-mark.svg"
import { useHistory } from "react-router-dom"
import ReactPaginate from "react-paginate";
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
  const [showError, setShowError] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const marketplace = useMarketPlaceContext()

  const history = useHistory()

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
  const retrievePopularPlugins = async () => {
    setPluginsLoading(true)
    marketplace.dispatch(fetchPlugins())
    try {
      const response = await axios.get(
        "https://api.zuri.chat/marketplace/plugins"
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        marketplace.dispatch(
          loadPlugins(data.sort((a, b) => b.install_count - a.install_count))
        )
        
        setPluginsLoading(false)
      }
    } catch (err) {
      setPluginsLoading(false)
      console.error(err)
    }
  }

  const retrieveInstalledPlugin = async () => {
    setPluginsLoading(true)
    marketplace.dispatch(fetchPlugins())
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
        setPluginsLoading(false)
      }
    } catch (err) {
      setPluginsLoading(false)
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
        setShowSuccess(false)
        setShowError(false)
      }
    } catch (error) {
      console.error(error)
    }
  }


  const installPluginToOrganization = async () => {
    if (!currentWorkspace) {
      alert("You are not logged into an Organization/workspace")
    }
    setInstallLoading(true)
    setInstallErr(null)
    try {
      const response = await axios.post(
        plugin.install_url,
        {
          user_id: user[0]?._id,
          organisation_id: currentWorkspace
        },
        {
          timeout: 1000 * 5,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.data.success === true) {
        setInstallLoading(false)
        setShowSuccess(true)
        setTimeout(() => {
          // Redirect to the plugin page, given redirect_url
          history.push(response.data.data.redirect_url);
        }, 5000)
      } else {
        throw new Error(response.data.message)
      }
    } catch (err) {
      setInstallErr(err.message ? err.message : "Plugin could not be installed")
      setShowError(true)
      setisLoading(false)
      setInstallLoading(false)
    }
  }



  let emptyImageArray = [logo, logo, logo, logo, logo]
  const addDefaultImageArray = e => {
    e.target.src = emptyImageArray
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
        break
      case "installed":
        retrieveInstalledPlugin()
        break
      case "popular":
        retrievePopularPlugins()
        break
      default:
        retrievePlugins()
        break
    }
    getLoggedInUser()
  }, [])

  useEffect(() => {
    if (marketplace.state.pluginId) {
      retrievePlugin()
    }
  }, [marketplace.state.pluginId])


  // const  indexOfLastPost = currentPage * pluginPerPage;
  // const indexOfFirstPost = indexOfLastPost - pluginPerPage;
  // const currentPlugins = plugin.slice(indexOfFirstPost, indexOfLastPost)
  
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  //Logic  for Pagination
  const pluginsPerPage = 6
  const pagesVisited = pageNumber * pluginsPerPage

  const pageCount = Math.ceil(state.plugins.length / pluginsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

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
          {state.plugins.slice(pagesVisited, pagesVisited + pluginsPerPage).map((plugin, i) => {
            return <PluginCard key={i} {...plugin} />

          })}
          {marketplace.state.isModal && marketplace.state.pluginId && (
           <MarketPlaceModal />
          )}
            <ReactPaginate 
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={styles.paginationBttns}
              previousClassName={styles.previousBttn}
              nextClassName={styles.nextBttn}
              disabledClassName={styles.paginationDisabled}
              activeClassName={styles.paginationActive}
            />
        </div>
      )}
    </>
  )
}

export default MarketPlaceContainer
