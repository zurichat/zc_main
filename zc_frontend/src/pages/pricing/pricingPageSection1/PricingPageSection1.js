import React from "react";
import "./PricingPageSection1.css";

const PricingPageSection1 = () => {
  return (
    <div className="topPricingSectionContainer">
      <div className="topPricingPageSection1">

        <p>Make teamwork more productive</p>

        <div className="topPricingPageBody">
          <div className="topPricingLine"></div>
          <div className="topPricingPageColumns">
            <div className="topPricingStart">
              <div className="topPricingTop">
                <p className="topPricingTitle">Free</p>
                <p className="topPricingSubtitle">
                  The quickest and easiest way to try Zuri Chat
                </p>
                <p className="topPricingAmount">$0 USD/mo</p>
              </div>
              <button className="topPricingButton">Get Started</button>
            </div>

            <div className="topPricingMiddle1">
              <div className="topPricingTop">
                <p className="topPricingTitle">Pro</p>
                <p className="topPricingSubtitle"></p>
                <p className="topPricingAmount">$6.67 USD/mo</p>
              </div>
              <button className="topPricingButton">Get Started</button>
            </div>

            <div className="topPricingMiddle2">
              <div className="topPricingTop">
                <p className="topPricingTitle">Business+</p>
                <p className="topPricingSubtitle">
                  Scale your business, increase productivity and keep your items
                  connected
                </p>
                <p className="topPricingAmount">$12.50 USD/mo</p>
              </div>
              <button className="topPricingButton">Get Started</button>
            </div>

            <div className="topPricingEnd">
              <div className="topPricingTop">
                <p className="topPricingTitle">Enterprise Grid</p>
                <p className="topPricingSubtitle">
                  Slack for the most demanding enterprises - all the flexibility
                  to meet your regulatory requirementsand all the power to match
                  your growth
                </p>
                <p className="topPricingAmount"></p>
              </div>


              <button className="topPricingButton">Get Started</button>


              <div className="topPricingBottom">
                <div className="topPricingBottomHead">
                  <p className="topPricingBottomHeadText">
                    All the greatness of business+, and:
                  </p>
                </div>

                <div className="topPricingBottomBody">
                  <div className="topPricingBottomBodyPart">
                      <img className="topPricingTick" src="../assets/checkmarks.svg/" alt="" />
                    <p className="topPricingText">
                      Peace of mind with enterprise-grade security and
                      compliance, such as HIPAA support and the Enterprise Key
                      Management add-on
                    </p>
                  </div>

                  <div className="topPricingBottomBodyPart">
                  <img className="topPricingTick" src="../assets/checkmarks.svg/" alt="" />
                    <p className="topPricingText">
                      Large scale collaboration and alignment with support for
                      up to 500,000 users
                    </p>
                  </div>

                  <div className="topPricingBottomBodyPart">
                  <img className="topPricingTick" src="../assets/checkmarks.svg/" alt="" />
                    <p className="topPricingText">
                      Streamlined administration with centralized controls and
                      customizable policies
                    </p>
                  </div>
                  
                  <div className="topPricingBottomBodyPart">
                  <embed className="topPricingTick" src="./assets/checkmark.svg" alt="" />
                    <p className="topPricingText">
                      Tailored support with a designated account and customer
                      success team
                    </p>
                  </div>
                </div>

                <div className="topPricingBottomFoot">
                  <span>Learn more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPageSection1;
