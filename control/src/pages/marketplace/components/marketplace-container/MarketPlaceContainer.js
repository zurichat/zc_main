import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PluginCard } from '../plugins-card/PluginCard'
import styles from '../../styles/marketplace.module.css'
//eslint-disable-next-line
import { Modal, Row, Col, Spinner } from 'react-bootstrap'
import { useMarketPlaceContext } from '../../../../context/MarketPlace.context'
import {
  setPluginId,
  loadPlugins,
  fetchPlugins
} from '../../../../context/marketplace/marketplace.action'

const MarketPlaceContainer = ({ organizations, user }) => {
  const [plugin, setPlugin] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [ installLoading, setInstallLoading ] = useState(false)
  const [ installErr, setInstallErr ] = useState(null)
  const marketplace = useMarketPlaceContext()


  const retrievePlugins = async () => {
    marketplace.dispatch(fetchPlugins())
    try {
      const response = await axios.get(
        'https://api.zuri.chat/marketplace/plugins'
      )
      if (response.status === 200 && response.data) {
        const { data } = response.data
        marketplace.dispatch(loadPlugins(data))
      }
    } catch (e) {
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
    if (!organizations) {
      alert('You are not logged in any Organization/workspace')
    }
    setInstallLoading(true)
    setInstallErr(null)
    try {
      const response = await axios.post(`https://api.zuri.chat/organizations/${organizations[0]}/plugins`, {
        plugin_id: plugin.id,
        user_id: user.id
      });
      if (response.data.status === 200) {
        alert(response.data.message)
        setInstallLoading(false)
        window.location.replace('/home')
      } else {
        alert(response.data.message)
        setInstallLoading(false)
      }
    } catch(err) {
      console.log(err)
      setInstallLoading(false)
    } finally {
      console.log('plugin installed')
    }
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
    <div className={styles.zuriMarketPlace__container}>
      {marketplace.state.plugins.map((plugin, i) => {
        return <PluginCard key={i} {...plugin} />
      })}
      {}
      {marketplace.state.isModal && marketplace.state.pluginId && (
        <Modal
          show={marketplace.state.isModal}
          onHide={() => marketplace.dispatch(setPluginId(null))}
          dialogClassName={styles.marketplaceModal}
        >
          {isLoading && (
            <div className="d-flex justify-content-center align-items-center flex-column py-3">
              <Spinner animation="border" variant="success" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              loading ...
            </div>
          )}
          {!isLoading && plugin && (
            <div>
              <div
                className={`d-flex flex-column justify-content-center ${styles.marketplaceModalTop}`}
              >
                <figure className={styles.modalPluginIcon}>
                  <img src={plugin.icon_url} alt={plugin.name} />
                </figure>
                <h2>{plugin.name}</h2>
                <h3>{plugin.developer_email}</h3>
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
                <button onClick={() => installPluginToOrganization()} className={styles.modalInstallBtn}>
                  {
                    installLoading ? 
                    <div className="d-flex flex-row align-items-center">
                      <Spinner animation="border" variant="light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                      <p className="ml-2">Installing</p>
                    </div>
                    : 'Install'
                  }                  
                </button>
              </div>
              <div className={styles.marketplaceModalMain}>
                <h3>about</h3>
                <p className="px-0">{plugin.description}</p>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  )
}

export default MarketPlaceContainer
