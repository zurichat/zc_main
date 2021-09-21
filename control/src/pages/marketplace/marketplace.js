import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import styles from './styles/marketplace.module.css'
import MarketPlaceContainer from './components/marketplace-container/MarketPlaceContainer'
import Footer from '../../components/Footer'
import { InstallPluginSvg } from './components/marketplace-container/InstallPluginSvg'
import { CollaborationSvg } from './components/marketplace-container/CollaborationSvg'
import { DiscoverPluginSvg } from './components/marketplace-container/DiscoverPluginSvg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import MarketplaceHeader from './components/marketplace-container/MarketplaceHeader'
import { MarketPlaceProvider } from '../../context/MarketPlace.context.js'

const MarketPlace = () => {
  return (
    <MarketPlaceProvider>
      <div className={styles.marketplace}>
        <div
          className={`w-100 d-flex flex-wrap justify-content-between align-items-baseline ${styles.marketplaceNavbar}`}
        >
          <MarketplaceHeader />
        </div>
        <div className={styles.marketplaceHero}>
          <Row className={`align-items-center justify-content-center`}>
            <Col md={8}>
              <h1>Your number one plugin hub created for better experience</h1>
              <p className="p-0">
                Integrate your favorite plugins and get more exciting experience
                from the Zuri app. Collaborate, work smarter and better.{' '}
              </p>
              <Link to="/marketplace" className={styles.marketplaceHeroButton}>
                Learn More
              </Link>
            </Col>
            <Col md={4}>
              <div className={styles.circleBackground}>
                <div className={styles.marketplaceSvg}>
                  <DiscoverPluginSvg />
                  <div className={styles.svgConnectionLineOne}>
                    <svg
                      width="179"
                      height="205"
                      viewBox="0 0 179 255"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M178.001 1C1.00098 71.8269 1.00098 255 1.00098 255"
                        stroke="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.marketplaceSvg}>
                  <InstallPluginSvg />
                  <div className={styles.svgConnectionLineTwo}>
                    <svg
                      width="516"
                      height="108"
                      viewBox="0 0 516 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.00003C1 1.00003 104.32 137.772 248.96 136.997C450.427 135.917 515 1.00003 515 1.00003"
                        stroke="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.marketplaceSvg}>
                  <CollaborationSvg />
                  <div className={styles.svgConnectionLineThree}>
                    <svg
                      width="184"
                      height="205"
                      viewBox="0 0 184 255"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00001 1C183 71.8269 183 255 183 255"
                        stroke="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.marketPlaceContainer}>
          <Tabs
            className={styles.marketplaceTabs}
            selectedTabClassName={styles.marketplaceTabSelected}
          >
            <TabList className={styles.marketplaceTabList}>
              <Tab className={styles.marketplaceTab}>New plugin</Tab>
              <Tab className={styles.marketplaceTab}>Recommended for you</Tab>
              <Tab className={styles.marketplaceTab}>Popular Plugins</Tab>
            </TabList>
            <Row className={`mx-0`}>
              <TabPanel>
                <MarketPlaceContainer />
              </TabPanel>
              <TabPanel>
                <MarketPlaceContainer />
              </TabPanel>
              <TabPanel>
                <MarketPlaceContainer />
              </TabPanel>
            </Row>
          </Tabs>
        </div>
        <Footer />
      </div>
    </MarketPlaceProvider>
  )
}

export default MarketPlace
