import React from 'react'
import LinkComponent from '../../../components/externalPagesComponents/Link'
import intuitIcon from '../../../assets/intuit-logo.svg'
import lyftIcon from '../../../assets/lyft-logo.svg'
import shopifyIcon from '../../../assets/shopify-logo.svg'
import everlaneIcon from '../../../assets/everlane-logo.svg'
import card1 from '../../../assets/card1.svg'
import card2 from '../../../assets/card2.svg'
import card3 from '../../../assets/card3.svg'
import card4 from '../../../assets/card4.svg'

function Section4PricingPage() {
  return (
    <>
      <div className={`my-3 py-5 section4.wrapper`}>
        <div className={`text-center`}>
          <h2 className={``}>You're in good company</h2>
          <p className={`py-3`}>
            Teams of every size , shape and kind have already made Slack the
            place where their work happens
          </p>
          <LinkComponent
            className={`py-3`}
            title={`View all customer stories`}
            to={`/customer-stories`}
            color={`#00B87C`}
          />
        </div>
        <div className={`container py-3`}>
          <div className={`row g-2`}>
            <div className={`col-lg-3 col-md-6 col-12`}>
              <div className={`card`}>
                <img src={card1} className={`card-img-top`} alt="..." />
                <div className={`card-body`}>
                  <img src={intuitIcon} alt={`intuit logo`} />
                  <p className={`pt-3 card-text`}>
                    Support agents at Intuit QuickBooks increase customer
                    satisfaction by 12% with Slack
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-12`}>
              <div className={`card`}>
                <img src={card2} className={`card-img-top`} alt="..." />
                <div className={`card-body`}>
                  <img src={lyftIcon} alt={`lyft logo`} />
                  <p className={`pt-3 card-text`}>
                    Mission-critical sales work at Lyft Business
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-12`}>
              <div className={`card`}>
                <img src={card3} className={`card-img-top`} alt="..." />
                <div className={`card-body`}>
                  <img src={shopifyIcon} alt={`shopify logo`} />
                  <p className={`pt-3 card-text`}>
                    eCommerce platform deploys super bot to enable glitch-free
                    purchases
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-12`}>
              <div className={`card`}>
                <img src={card4} className={`card-img-top`} alt="..." />
                <div className={`card-body`}>
                  <img src={everlaneIcon} alt={`everlane logo`} />
                  <p className={`pt-3 card-text`}>
                    Everlane and Happy Returns elevate customer service with
                    Zuri Chat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4PricingPage
