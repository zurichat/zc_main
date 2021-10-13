import React, { useState } from "react"
import styles from "./NewPricingSection.module.css"
import { Pricing, plans, features } from "./PricingDummyData"
import PricingBox from "./PricingBox"

const NewPricingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mobile}>
          {Pricing.map((item, id) => (
            <PricingBox pricing={item} key={id} />
          ))}
        </div>
      </div>

      <div className={styles.desktop}>
        <section className={styles.pricingWrapper}>
          <PricingBox pricing={features} />

          {plans.map((plan, id) => (
            <PricingBox pricing={plan} key={id} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default NewPricingSection
