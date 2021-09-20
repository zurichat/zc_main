import React from 'react'
import { Link } from 'react-router-dom'
import './PricingPageSection1.css'
import { Pricing } from './PricingDummyData'

const PricingPageSection1 = () => {
  return (
    <>
      <div className="topPricingSectionContainer">
        <div className="topPricingPageSection1">
          <p className="p">Make teamwork more productive</p>

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

                    <button className="topPricingButton">
                      <Link to="/login" className="link">
                        Get Started
                      </Link>
                    </button>

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
                        <Link to="/">
                          {' '}
                          <span className="span">Learn more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="section2">
        <div className="tableContainer">
          <table className="tableMain">
            <colgroup className="colgroup">
              <col className="col"></col>
              <col className="col"></col>
              <col className="colSpec"></col>
              <col className="pricingtableSpacer"></col>
              <col className="colSpec"></col>
              <col className="pricingtableSpacer"></col>
              <col className="colSpec"></col>
              <col className="pricingtableSpacer"></col>
              <col className="colSpec"></col>
              <col className="pricingtableSpacer"></col>
            </colgroup>
            <thead className="thead">
              <tr className="tr">
                <th colSpan="2" className="th1col colStart"></th>
                <th className="th1col">
                  <strong>Free</strong>
                </th>
                <th className="pricingtableSpacer"></th>
                <th className="th1col">
                  <strong>Pro</strong>
                </th>
                <th className="pricingtableSpacer"></th>
                <th className="th1col">
                  <strong>Business+</strong>
                </th>
                <th className="pricingtableSpacer"></th>
                <th className="th1col">
                  <strong>Enterprise Grid</strong>
                  <th className="pricingtableSpacer lastColumn"></th>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tableRowPricingHeader">
                <td colSpan="2" className="colStart">
                  <strong>PRODUCTIVITY BASICS</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Message history
                </td>
                <td>10K of your team's most recent messages</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Relevant People, channels and files in search results
                </td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>

                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Integrations with other apps
                </td>
                <td>10</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  File storage
                </td>
                <td>5 GB total</td>
                <td className="pricingtableSpacer"></td>
                <td>10 GB per team member</td>
                <td className="pricingtableSpacer"></td>
                <td>20 GB per team member</td>
                <td className="pricingtableSpacer"></td>
                <td>1 TB per team member</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Workspaces
                </td>
                <td>1</td>
                <td className="pricingtableSpacer"></td>
                <td>1</td>
                <td className="pricingtableSpacer"></td>
                <td>1</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Customizable sections
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Slack Huddles
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  <strong>EXTERNAL COLLABORATION</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Work with other organizations
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Work with individuals
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  <strong>SECURITY</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Data encryption at rest and in transit
                </td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Two-factor authentication
                </td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  OAuth with Google
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  SAML-based single sign-on(SSO)
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Slack Enterprise Key Management
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>Add-on</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Integration with Enterprise Mobility Management (EMM)
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  <strong>COMPLIANCE</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Customer retention policies for messages and files
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Data exports for all messages
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Support for HIPAA compliances
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Data residency
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  <strong>ADMINISTRATION</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Manage channel posting permissions
                </td>
                <td>Limited to #general channel only</td>
                <td className="pricingtableSpacer"></td>
                <td>Limited to #general channel only</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited number of channels</td>
                <td className="pricingtableSpacer"></td>
                <td>Unlimited number of channels</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Custom User Groups
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Real-time Active Directory Sync with OneLogin, Okte and Ping
                  Identity
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  User management with SCIM provisioning
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Support for intergrations with Data Loss Prevention (DLP),
                  e-Discovery, and offline backup providers
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Domain claiming
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Custom Terms of Service
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  <strong>CALLS</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Video and video calls
                </td>
                <td>One-on-one only</td>
                <td className="pricingtableSpacer"></td>
                <td>Up to 15 participants</td>
                <td className="pricingtableSpacer"></td>
                <td>Up to 15 participants</td>
                <td className="pricingtableSpacer"></td>
                <td>Up to 15 participants</td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Screen sharing
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  <strong>SUPPORT</strong>
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  Access to customer support
                </td>
                <td>Standard support</td>
                <td className="pricingtableSpacer"></td>
                <td>24/7 support</td>
                <td className="pricingtableSpacer"></td>
                <td>24/7 support with four-hour first response time</td>
                <td className="pricingtableSpacer"></td>
                <td>
                  24/7 priority support with four-hour first response time
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className="colStart">
                  99.99% guaranteed uptime SLA
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
              <tr className="pricingTableRowFeature">
                <td colSpan="2" className="colStart">
                  Disginated account and customer success team
                </td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td></td>
                <td className="pricingtableSpacer"></td>
                <td>
                  <svg
                    class="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className="pricingtableSpacer lastColumn"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2"></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr className="pricingTableRowFooter">
                <th colSpan="2"></th>
                <th>
                  <a href="/login">Get started</a>
                </th>
                <th></th>
                <th>
                  <a href="/login">Get started</a>
                </th>
                <th></th>
                <th>
                  <a href="/login">Get started</a>
                </th>
                <th></th>
                <th>
                  <a href="/login">Get started</a>
                </th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  )
}

export default PricingPageSection1
