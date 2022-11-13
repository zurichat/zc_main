import React from "react";
import { Link } from "react-router-dom";
import styles from "./PricingPageSection1.module.css";
import { Pricing } from "./PricingDummyData";

const PricingPageSection1 = () => {
  return (
    <>
      <div className={styles.topPricingSectionContainer}>
        <div className={styles.topPricingPageSection1}>
          <p className={styles.ptopheader}>Make teamwork more productive</p>

          <div className={styles.topPricingPageBody}>
            <div className={styles.topPricingLine}></div>
            <div className={styles.topPricingPageColumns}>
              {Pricing.map((p, id) => {
                return (
                  <div key={id} className={styles.cards}>
                    <div className={styles.topPricingTop}>
                      <p
                        className={styles.topPricingTitle}
                      >{`${p.topPricingTitle}`}</p>
                      <p className={styles.topPricingSubtitle}>
                        {p.topPricingSubtitle}
                      </p>
                      <p className={styles.topPricingAmount}>
                        {p.topPricingAmount}
                      </p>
                    </div>

                    <button className={styles.topPricingButton}>
                      <Link to="/login" className={styles.link}>
                        Get Started
                      </Link>
                    </button>

                    <div className={styles.topPricingBottom}>
                      <div className={styles.topPricingBottomHead}>
                        <p className={styles.topPricingBottomHeadText}>
                          {p.topPricingBottomHeadText}
                        </p>
                      </div>

                      <div className={styles.topPricingBottomBody}>
                        {p.topPricingText.map((pt, id) => {
                          return (
                            <div
                              key={id}
                              className={styles.topPricingBottomBodyPart}
                            >
                              <img
                                className={styles.topPricingTick}
                                src={p.topPricingTick}
                                alt={p.topPricingTickAlt}
                              />
                              <p className={styles.topPricingText}>{pt}</p>
                            </div>
                          );
                        })}
                      </div>

                      <div className={styles.topPricingBottomFoot}>
                        <Link to="/">
                          {" "}
                          <span className={styles.span}>Learn more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Was instructed by Mark to take out the comparison section, Instead of deleting, I just commented out..... Please Leave this area commented out. T for thanks */}
      {/* Starts here from this sections line 77 at time of edit */}

      {/* <table className={styles.tableMain}>
       <section className={styles.section2}>
        <div className={styles.tableContainer}>
            <colgroup className={styles.colgroup}>
              <col className={styles.col}></col>
              <col className={styles.col}></col>
              <col className={styles.colSpec}></col>
              <col className={styles.pricingtableSpacer}></col>
              <col className={styles.colSpec}></col>
              <col className={styles.pricingtableSpacer}></col>
              <col className={styles.colSpec}></col>
              <col className={styles.pricingtableSpacer}></col>
              <col className={styles.colSpec}></col>
              <col className={styles.pricingtableSpacer}></col>
            </colgroup>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th
                  colSpan="2"
                  className={`{styles.th1col} {styles.colStart}`}
                ></th>
                <th className={styles.th1col}>
                  <strong>Free</strong>
                </th>
                <th className={styles.pricingtableSpacer}></th>
                <th className={styles.th1col}>
                  <strong>Pro</strong>
                </th>
                <th className={styles.pricingtableSpacer}></th>
                <th className={styles.th1col}>
                  <strong>Business+</strong>
                </th>
                <th className={styles.pricingtableSpacer}></th>
                <th className={styles.th1col}>
                  <strong>Enterprise Grid</strong>
                  <th
                    className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                  ></th>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRowPricingHeader}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>PRODUCTIVITY BASICS</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{stles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Message history
                </td>
                <td>10K of your team's most recent messages</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td
                  className={`{stles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Relevant People, channels and files in search results
                </td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Integrations with other apps
                </td>
                <td>10</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  File storage
                </td>
                <td>5 GB total</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>10 GB per team member</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>20 GB per team member</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>1 TB per team member</td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Workspaces
                </td>
                <td>1</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>1</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>1</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited</td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Customizable sections
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Slack Huddles
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>EXTERNAL COLLABORATION</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Work with other organizations
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Work with individuals
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>SECURITY</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Data encryption at rest and in transit
                </td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Two-factor authentication
                </td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  OAuth with Google
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  SAML-based single sign-on(SSO)
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Slack Enterprise Key Management
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Add-on</td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className="pricingTableRowFeature ">
                <td colSpan="2" className={styles.colStart}>
                  Integration with Enterprise Mobility Management (EMM)
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>COMPLIANCE</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Customer retention policies for messages and files
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Data exports for all messages
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Support for HIPAA compliances
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Data residency
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>ADMINISTRATION</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Manage channel posting permissions
                </td>
                <td>Limited to #general channel only</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Limited to #general channel only</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited number of channels</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Unlimited number of channels</td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Custom User Groups
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Real-time Active Directory Sync with OneLogin, Okte and Ping
                  Identity
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  User management with SCIM provisioning
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Support for intergrations with Data Loss Prevention (DLP),
                  e-Discovery, and offline backup providers
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Domain claiming
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Custom Terms of Service
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>CALLS</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Video and video calls
                </td>
                <td>One-on-one only</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Up to 15 participants</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Up to 15 participants</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>Up to 15 participants</td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Screen sharing
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  <strong>SUPPORT</strong>
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Access to customer support
                </td>
                <td>Standard support</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>24/7 support</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>24/7 support with four-hour first response time</td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  24/7 priority support with four-hour first response time
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  99.99% guaranteed uptime SLA
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
              </tr>
              <tr className={styles.pricingTableRowFeature}>
                <td colSpan="2" className={styles.colStart}>
                  Disginated account and customer success team
                </td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td></td>
                <td className={styles.pricingtableSpacer}></td>
                <td>
                  <svg
                    className="c-check"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-255 347 100 100"
                  >
                    <title></title>
                    <path d="M-217.1 431.8c-1 1.2-2.6 2.2-4 2.3-1.4.1-3-.8-4.3-1.9l-27.5-24.5 7.8-8.7 23.2 20.6 54.6-61.7 8.6 7.9-58.4 66z"></path>
                  </svg>
                </td>
                <td
                  className={`{styles.pricingtableSpacer} {styles.lastColumn}`}
                ></td>
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
              <tr className={styles.pricingTableRowFooter}>
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
      </section> */}

      {/* Ends here, the closing section line 1366 at time of edit */}
    </>
  );
};

export default PricingPageSection1;
