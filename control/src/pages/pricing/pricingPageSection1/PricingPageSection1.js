import React from 'react'
import styles from './PricingPageSection1.module.css'
import { Pricing } from './PricingDummyData'

const PricingPageSection1 = () => {
  return (
    <>
      <div className={`${styles.topPricingSectionContainer}`}>
        <div className={`${styles.topPricingPageSection1}`}>
          <p>Make teamwork more productive</p>

          <div className={`${styles.topPricingPageBody}`}>
            <div className={`${styles.topPricingLine}`}></div>
            <div className={`${styles.topPricingPageColumns}`}>
              {Pricing.map(p => {
                return (
                  <li key={p.className} className={p.className}>
                    <div className={`${styles.topPricingTop}`}>
                      <p className={`${styles.topPricingTitle}`}>
                        {p.topPricingTitle}
                      </p>
                      <p className={`${styles.topPricingSubtitle}`}>
                        {p.topPricingSubtitle}
                      </p>
                      <p className={`${styles.topPricingAmount}`}>
                        {p.topPricingAmount}
                      </p>
                    </div>

                    <button className={`${styles.topPricingButton}`}>
                      Get Started
                    </button>

                    <div className={`${styles.topPricingBottom}`}>
                      <div className={`${styles.topPricingBottomHead}`}>
                        <p className={`${styles.topPricingBottomHeadText}`}>
                          {p.topPricingBottomHeadText}
                        </p>
                      </div>

                      <div className={`${styles.topPricingBottomBody}`}>
                        {p.topPricingText.map((pt, id) => {
                          return (
                            <div
                              key={id}
                              className={`${styles.topPricingBottomBodyPart}`}
                            >
                              <img
                                className={`${styles.topPricingTick}`}
                                src={p.topPricingTick}
                                alt={p.topPricingTickAlt}
                              />
                              <p className={`${styles.topPricingText}`}>{pt}</p>
                            </div>
                          )
                        })}
                      </div>

                      <div className={`${styles.topPricingBottomFoot}`}>
                        <span>Learn more</span>
                      </div>
                    </div>
                  </li>
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
