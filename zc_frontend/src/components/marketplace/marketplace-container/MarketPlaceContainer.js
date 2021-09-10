import React, { useState, useEffect } from 'react'
import { PluginCard } from '../plugins-card/PluginCard'
import registeredPlugins from './data'
import styles from '../../../styles/marketplace.module.css'
import { Modal, Row, Col } from 'react-bootstrap'
import { useMarketPlaceContext } from '../../../context/MarketPlace.context'

const MarketPlaceContainer = () => {
  const [plugins, setPlugins] = useState([])
  const marketplace = useMarketPlaceContext()
  useEffect(() => {
    setPlugins(registeredPlugins)
  }, [])

  let modalData = marketplace.pluginId
    ? registeredPlugins.filter(plugins => plugins.id === marketplace.pluginId)
    : []

  return (
    <div className={styles.zuriMarketPlace__container}>
      {plugins.map((plugin, i) => {
        return <PluginCard key={i} {...plugin} />
      })}
      {marketplace.modal && marketplace.pluginId && (
        <Modal
          show={marketplace.modal}
          onHide={() => marketplace.setPluginId(null)}
          dialogClassName={styles.marketplaceModal}
        >
          <div
            className={`d-flex flex-column justify-content-center ${styles.marketplaceModalTop}`}
          >
            <figure className={styles.modalPluginIcon}>
              <img src={modalData[0]?.icon_url} alt={modalData[0].name} />
            </figure>
            <h2>{modalData[0]?.name}</h2>
            <h3>{modalData[0]?.team}</h3>
            <Row className="justify-content-between w-75 align-self-center align-items-center">
              <Col md={5}>
                <p className="px-0 mb-0">12mb</p>
              </Col>
              <Col md={7} className="px-0">
                <p className={`${styles.modalDownloadAmount} px-0 mb-0`}>
                  15k downloads
                </p>
              </Col>
            </Row>
            <button className={styles.modalInstallBtn}>Install</button>
          </div>
          <div className={styles.marketplaceModalMain}>
            <h3>about</h3>
            <p className="px-0">{modalData[0]?.uses}</p>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default MarketPlaceContainer
