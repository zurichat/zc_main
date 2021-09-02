import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import styles from '../../styles/marketplace.module.css'
import MarketPlaceContainer from '../../components/marketplace/marketplace-container/MarketPlaceContainer'
import { MarketPlaceLabel } from '../../components/marketplace/labels/Label'

const MarketPlace = () => {
  return (
    <div className={styles.marketplace}>
      <div className={`w-100 d-flex flex-wrap justify-content-between align-items-baseline ${styles.marketplaceNavbar}`}>
        <div className='mb-2'>
          <Link to='/'>
            <img src='/zurichatlogo.svg' alt='' className='brand-logo' />
        </Link>
      </div>
    </div>
    <Container>
      <Row className={`${styles.marketplaceHero} align-items-center justify-content-center`}>
        <h1>
          A whole marketplace of plugins for different usecase
        </h1>
        <p>
          More than hundreds of business / personal plugins on organization, management,
          relaxation and much more in just some simple click.{' '}
        </p>
        <Row className='d-flex px-2 px-md-0 justify-content-center flex-md-wrap'>
          <Col md={4} className={styles.marketplaceFeature}>
            <MarketPlaceLabel
              svg={'/green-mark.svg'}
              content='Discover apps for zuri chat'
              styling='hero-label'
            />
          </Col>
          <Col md={4} className={styles.marketplaceFeature}>
            <MarketPlaceLabel
              svg={'/green-mark.svg'}
              content='Add Plugins, get things done'
              styling='hero-label'
            />
          </Col>
          <Col md={4} className={styles.marketplaceFeature}>
            <MarketPlaceLabel
              svg={'/green-mark.svg'}
              content='Speed up Collaboration'
              styling='hero-label'
            />
          </Col>
        </Row>
      </Row>
    </Container>
    <Container className={styles.marketPlaceContainer}>
      <Row className={styles.marketplaceMain}>
        <Col md={2}>
          <div className={styles.marketPlaceSidebar}>            
            <section className={styles.marketPlaceSidebarList}>          
                <div className={styles.marketPlaceSidebarItem}>
                  <span className={styles.marketPlaceSidebarItem__info}>                  
                    <p className='ml-2'>Files Management</p>
                  </span>
                </div>
                <div className={styles.marketPlaceSidebarItem}>
                  <span className={styles.marketPlaceSidebarItem__info}>                  
                    <p className='ml-2'>Marketing</p>
                  </span>
                </div>              
                <div className={styles.marketPlaceSidebarItem}>
                  <span className={styles.marketPlaceSidebarItem__info}>                  
                    <p className='ml-2'>Productivity</p>
                  </span>
                </div>
                <div className={styles.marketPlaceSidebarItem}>
                  <span className={styles.marketPlaceSidebarItem__info}>                  
                    <p className='ml-2'>Voice & Video</p>
                  </span>
                </div>            
            </section>          
          </div>
        </Col>        
        <Col md={10} className={styles.pluginContent}>
          <div className="flex-one d-flex justify-content-center align-items-center">
            <div className={`${styles.zuri_marketplaceHome__searchInput_container} position-relative large_bottom_margin`}>
              <form className={styles.zuri_marketplace__searchForm}>                
                  <input 
                    name="marketplace__searchField"
                    className={styles.marketPlace__searchField}
                    type="text"                   
                    placeholder="Find a new plugin, or a plugin you already installed." 
                    autocomplete="off"                                    
                  />
                  <i class="ts_icon ts_icon_search icon_search icon_search_input"></i>              
              </form>
            </div>
          </div>
          <MarketPlaceContainer />
        </Col>
      </Row>
    </Container>
  </div>   
  )
}


export default MarketPlace
