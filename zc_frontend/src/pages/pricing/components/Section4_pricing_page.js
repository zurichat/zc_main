import React from 'react'
import LinkComponent from '../../../components/externalPagesComponents/Link'
import styles from '../styles/Section4.module.css'

function Section4PricingPage() {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div>
          <h2 className={`text-center topText`}>You're in good company</h2>
          <p className={`py-3 text-center`}>
            Teams of every size , shape and kind have already made Slack the
            place where their work happens
          </p>
          <div className={styles.link}>
            <LinkComponent
              className={`py-3 p-auto`}
              title={`View all customer stories`}
              to={`/customer-stories`}
              color={`#00B87C`}
            />
          </div>
        </div>

        <div className={`${styles.cardContainer}`}>
          <div className={`${styles.card}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus eum, impedit dolorum, sit ducimus inventore eveniet sed, at accusantium aliquam cupiditate voluptate. Quidem amet ea minima aliquam possimus voluptate, obcaecati aspernatur earum praesentium quisquam eaque. Tempore ut iste voluptate repudiandae reprehenderit accusamus aperiam odit consectetur recusandae eligendi. Corporis ad aperiam a dolore laboriosam voluptate odit itaque, natus nobis modi nostrum perferendis alias eveniet molestias dolorum assumenda sapiente, ipsa sequi ullam consequatur suscipit sit? Esse eius eaque rerum, omnis eum nesciunt maxime blanditiis quibusdam explicabo inventore magnam vitae asperiores vel praesentium, fugiat temporibus incidunt quasi accusantium illum odio labore distinctio? 
          </div>
          <div className={`${styles.card}`}>
            
          </div>
          <div className={`${styles.card}`}>
            
          </div>
          <div className={`${styles.card}`}>
            
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Section4PricingPage



//  <div className={`${styles.cardContainer}`}>
//           <div className={`row g-2`}>



//             <div className={`col-lg-3 col-md-6 col-12`}>
//               <div className={`card`}>
//                 <img src={`/card1.svg`} className={`card-img-top`} alt="..." />
//                 <div className={`card-body`}>
//                   <img src={`/intuit-logo.svg`} alt={`intuit logo`} />
//                   <p className={`pt-3 card-text`}>
//                     Support agents at Intuit QuickBooks increase customer
//                     satisfaction by 12% with Slack
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className={`col-lg-3 col-md-6 col-12`}>
//               <div className={`card`}>
//                 <img src={`/card2.svg`} className={`card-img-top`} alt="..." />
//                 <div className={`card-body`}>
//                   <img src={`/lyft-logo.svg`} alt={`lyft logo`} />
//                   <p className={`pt-3 card-text`}>
//                     Mission-critical sales work at Lyft Business
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className={`col-lg-3 col-md-6 col-12`}>
//               <div className={`card`}>
//                 <img src={`card3.svg`} className={`card-img-top`} alt="..." />
//                 <div className={`card-body`}>
//                   <img src={`/shopify-logo.svg`} alt={`shopify logo`} />
//                   <p className={`pt-3 card-text`}>
//                     eCommerce platform deploys super bot to enable glitch-free
//                     purchases
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className={`col-lg-3 col-md-6 col-12`}>
//               <div className={`card`}>
//                 <img src={`/card4.svg`} className={`card-img-top`} alt="..." />
//                 <div className={`card-body`}>
//                   <img src={`/everlane-logo.svg`} alt={`everlane logo`} />
//                   <p className={`pt-3 card-text`}>
//                     Everlane and Happy Returns elevate customer service with
//                     Zuri Chat
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>