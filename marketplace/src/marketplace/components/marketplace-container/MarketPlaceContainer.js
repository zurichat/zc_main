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

  const addDefaultImage = e => {
    e.target.src = logo
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
            <Modal
              show={marketplace.state.isModal}
              onHide={() => marketplace.dispatch(setPluginId(null))}
              dialogClassName={styles.marketplaceModal}
              contentClassName={styles.modalContent}
              centered
            >
              {isLoading && (
                <div className="d-flex h-100 justify-content-center align-items-center flex-column py-3">
                  <Spinner
                    animation="border"
                    variant="success"
                    role="status"
                  ></Spinner>
                </div>
              )}
              {!isLoading && plugin && !showSuccess && !showError && (
                <div className="h-100">
                  <div
                    className={`d-flex flex-column justify-content-center ${styles.marketplaceModalTop}`}
                  >
                    <div className={`${styles.pluginGrid}`}>
                      <figure className={styles.modalPluginIcon}>
                        <img
                          src={plugin.icon_url}
                          onError={addDefaultImage}
                          alt={plugin.name}
                        />
                      </figure>
                      <div className={`ml-3 ${styles.pluginMainContent}`}>
                        <h2>{plugin.name}</h2>

                        <button
                          onClick={() => installPluginToOrganization()}
                          className={styles.modalInstallBtn}
                          disabled={installLoading}
                        >
                          {installLoading ? (
                            <div className="d-flex flex-row align-items-center">
                              <Spinner
                                animation="border"
                                variant="light"
                                role="status"
                              >
                                <span className="visually-hidden text-capitalize">
                                  Loading...
                                </span>
                              </Spinner>
                            </div>
                          ) : (
                            "Install"
                          )}
                        </button>
                      </div>
                    </div>
                    {/**
                     * <Row className="justify-content-between w-75 align-self-center align-items-center">
                      <Col md={5}>
                        <p className="px-0 mb-0">12mb</p>
                      </Col>
                      <Col md={7} className="px-0">
                        <p className={`${styles.modalDownloadAmount} px-0 mb-0`}>
                          15k downloads
                        </p>
                      </Col>
                    </Row>
                    */}
                  </div>
                  <div className={styles.marketplaceModalMain}>
                    <h3>About</h3>
                    <div className={styles.marketplaceModalPluginImages}>
                      {plugin.images !== undefined
                        ? plugin.images
                            .filter((image, idx) => idx < 3)
                            .map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                onError={addDefaultImageArray}
                                alt={plugin.name}
                              />
                            ))
                        : emptyImageArray
                            .filter((image, idx) => idx < 3)
                            .map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                onError={addDefaultImageArray}
                                alt={plugin.name}
                                style={{ display: "none" }}
                              />
                            ))}
                    </div>
                    <p className="px-0">{plugin.description}</p>
                    <hr />
                    <div className="styles.marketplacePluginInfo">
                      <h3>Plugin info</h3>

                      <br />
                      <p>Downloads: {plugin.install_count}</p>
                      <p>Version: {plugin.version}</p>
                      <p>Created on: {plugin.created_at.slice(0, 10)}</p>
                      <p>Offered by: {plugin.developer_name}</p>
                      <p>Updated on: {plugin.updated_at.slice(0, 10)}</p>
                    </div>
                  </div>
                </div>
              )}
              {!isLoading && showSuccess && (
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <figure className={styles.successMarkContainer}>
                    <img
                      src={SuccessMark}
                      className={styles.successMark}
                      alt="success icon"
                    />
                  </figure>
                  <p className={styles.successMarkText}>
                    Plugin installed successfully to organisation
                  </p>
                </div>
              )}
              {!isLoading && showError && (
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <figure className={styles.errorMarkContainer}>
                    <img
                      src={ErrorMark}
                      className={styles.errorMark}
                      alt="error icon"
                    />
                  </figure>
                  <p className={styles.successMarkText}>{installErr}</p>
                </div>
              )}
            </Modal>
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
