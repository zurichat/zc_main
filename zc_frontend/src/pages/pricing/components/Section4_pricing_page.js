import React from 'react'
import Card from './CardComponentPricingPage'
import Logocard from './LogoComponent'
import section4 from '../styles/Section4_pricing_page.module.css'
import card from '../styles/CardComponentPricingPage.module.css'
import logo from '../styles/LogoComponent.module.css'

function Section4PricingPage() {
  return (
    <div className={section4.wrapper}>
      <div className={section4.titletext}>
        <h2>You're in good company</h2>
        <h3>
          Teams of every size , shape and kind have already made Slack the place
          where their work happens
        </h3>
        <h4>
          {' '}
          <a href="https://www.google.com" rel="noreferrer" _blank="true">
            {' '}
            View all customer stories &nbsp;{' '}
            <span className={section4.arrow}>⟶</span>
          </a>
        </h4>
      </div>
      <div className={section4.cardwrapper}>
        <Card
          coverImageClass={card.image}
          logoImageClass={card.logo}
          descriptionText={
            'Support agents at intuit QuickBooks increase customer satisfaction by 12% with Slack'
          }
        />

        <Card
          coverImageClass={card.image2}
          logoImageClass={card.logo2}
          descriptionText={'Mission-critical sales work at Lyft Business'}
        />

        <Card
          coverImageClass={card.image3}
          logoImageClass={card.logo3}
          descriptionText={
            'eCommerce platform deploys super bot to enable glitch-free purchases'
          }
        />

        <Card
          coverImageClass={card.image4}
          logoImageClass={card.logo4}
          descriptionText={
            'Everlane and Happy Returns elevate customer service with zuri chat'
          }
        />
      </div>
      <div className={section4.logowrapper}>
        <Logocard logoImageClass={logo.image} />
        <Logocard logoImageClass={logo.image2} />
        <Logocard logoImageClass={logo.image3} />
        <Logocard logoImageClass={logo.image4} />
        <Logocard logoImageClass={logo.image5} />
        <Logocard logoImageClass={logo.image6} />
      </div>
    </div>
  )
}

export default Section4PricingPage
