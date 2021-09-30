import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PluginCard } from '../plugins-card/PluginCard'
import styles from '../../styles/marketplace.module.css'
import logo from '../../../../component-assets/zurichatlogo.svg'
import SuccessMark from '../../../../component-assets/success-mark.svg'
//eslint-disable-next-line
import { Modal, Spinner } from 'react-bootstrap'
import { useMarketPlaceContext } from '../../../../context/MarketPlace.context'
import {
  setPluginId,
  loadPlugins,
  fetchPlugins
} from '../../../../context/marketplace/marketplace.action'

const MarketPlaceContainer = ({ organizations, user }) => {
  const [plugin, setPlugin] = useState([])
  const [ pluginsLoading, setPluginsLoading ] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [installLoading, setInstallLoading] = useState(false)
  const [installErr, setInstallErr] = useState(null)
  const [ showSuccess, setShowSuccess ] = useState(false)
  const marketplace = useMarketPlaceContext()

  const { state } = marketplace

  let currentWorkspace = localStorage.getItem('currentWorkspace')
  let token = sessionStorage.getItem('token')

  const retrievePlugins = async () => {
    setPluginsLoading(true)
    marketplace.dispatch(fetchPlugins())
    try {
      const response = await axios.get(
        'https://api.zuri.chat/marketplace/plugins'
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        marketplace.dispatch(loadPlugins(data))
        setPluginsLoading(false)
      }
    } catch (e) {
      setPluginsLoading(false)
      console.log(e)      
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
    } catch (e) {
      console.log(e)
    }
  }

  const installPluginToOrganization = async () => {
    if (!currentWorkspace) {
      alert('You are not logged into an Organization/workspace')
    }
    setInstallLoading(true)
    setInstallErr(null)
    try {
      const response = await axios.post(
        `https://api.zuri.chat/organizations/${currentWorkspace}/plugins`,
        {
          plugin_id: plugin.id,
          user_id: user.id
        }, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.data.status === 200) {
        //alert(response.data.message)
        setInstallLoading(false)
        setShowSuccess(true)
        setTimeout(() => {
          window.location.replace('/home')
        }, 5000)        
      } else {
        alert(response.data.message)
        setInstallLoading(false)
      }
    } catch (err) {
      console.log(err)
      setInstallLoading(false)
    }
  }

  const addDefaultImage = (e) => {
    e.target.src = logo
  }

  useEffect(() => {
    retrievePlugins()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (marketplace.state.pluginId) {
      retrievePlugin()
    }
    //eslint-disable-next-line
  }, [marketplace.state.pluginId])

  return (
    <>
      {
        pluginsLoading && 
        <div className="d-flex justify-content-center align-items-center w-100 flex-column py-3 mb-5">
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>          
        </div>
      }
      { 
        !pluginsLoading && state.plugins.length > 0 &&
      <div className={styles.zuriMarketPlace__container}>     
        {
          state.plugins.map((plugin, i) => {
            return <PluginCard key={i} {...plugin} />
          })
        }  
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
                <Spinner animation="border" variant="success" role="status">                  
                </Spinner>
              </div>
            )}
            {!isLoading && plugin && !showSuccess && (
              <div className="h-100">
                <div
                  className={`d-flex flex-column justify-content-center ${styles.marketplaceModalTop}`}
                >
                  <div className={`${styles.pluginGrid}`}>
                    <figure className={styles.modalPluginIcon}>
                      <img src={plugin.icon_url} onError={addDefaultImage} alt={plugin.name} />
                    </figure>  
                    <div className={`ml-3 ${styles.pluginMainContent}`}>
                      <h2>{plugin.name}</h2>
                      <div>
                        <h3>{plugin.developer_email}</h3>
                      </div>                      
                      <button
                        onClick={() => installPluginToOrganization()}
                        className={styles.modalInstallBtn}
                        disabled={installLoading}
                      >
                        {installLoading ? (
                          <div className="d-flex flex-row align-items-center">
                            <Spinner animation="border" variant="light" role="status">
                              <span className="visually-hidden text-capitalize">Loading...</span>
                            </Spinner>                            
                          </div>
                        ) : (
                          'Install'
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
                  <p className="px-0">{plugin.description}</p>
                </div>
              </div>
            )}
            {
              !isLoading && showSuccess && 
              <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                <figure className={styles.successMarkContainer}>
                  <img src={SuccessMark} className={styles.successMark} alt="success icon" />
                </figure>
                <p className={styles.successMarkText}>Plugin installed successfully to organisation</p>
              </div>
            }
          </Modal>
        )}
      </div>
      }
    </>
  )
}

export default MarketPlaceContainer
