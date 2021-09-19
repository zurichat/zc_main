import React from 'react'
import { Link } from 'react-router-dom'
import './PricingPageSection1.css'
import { Pricing } from './PricingDummyData'

const PricingPageSection1 = () => {
  return (
    <>
      <div className="topPricingSectionContainer">
        <div className="topPricingPageSection1">
          <p>Make teamwork more productive</p>

          <div className="topPricingPageBody">
            <div className="topPricingLine"></div>
            <div className="topPricingPageColumns">
              {Pricing.map((p, id) => {
                return (
                  <div key={id} className={p.className}>
                    <div className="topPricingTop">
                      <p className="topPricingTitle">{p.topPricingTitle}</p>
                      <p className="topPricingSubtitle">
                        {p.topPricingSubtitle}
                      </p>
                      <p className="topPricingAmount">{p.topPricingAmount}</p>
                    </div>

                    <button className="topPricingButton"><Link to='/login' className='link'>Get Started</Link></button>

                    <div className="topPricingBottom">
                      <div className="topPricingBottomHead">
                        <p className="topPricingBottomHeadText">
                          {p.topPricingBottomHeadText}
                        </p>
                      </div>

                      <div className="topPricingBottomBody">
                        {p.topPricingText.map((pt, id) => {
                          return (
                            <div key={id} className="topPricingBottomBodyPart">
                              <img
                                className="topPricingTick"
                                src={p.topPricingTick}
                                alt={p.topPricingTickAlt}
                              />
                              <p className="topPricingText">{pt}</p>
                            </div>
                          )
                        })}
                      </div>

                      <div className="topPricingBottomFoot">
                        <Link to='/'> <span>Learn more</span></Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPageSection1
