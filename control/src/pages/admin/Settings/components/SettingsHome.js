import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap"
import AdminSettings from '../../.'
import settings from '../../assets/cog.svg'
import analytics from '../../assets/dashboard.svg'
import right_caret from '../../assets/cheveron-right.svg'
import customize from '../../assets/magic-wand.svg'
import classes from '../styles//SettingsHome.module.css'

import {FaMagic} from 'react-icons/fa'
import {BsChevronRight} from 'react-icons/bs'
import {MdOutlinePayment, MdSettingsSuggest} from 'react-icons/md'
import {AiOutlineDashboard, AiOutlineSetting, AiOutlineUser} from 'react-icons/ai'
import {GoPlug} from 'react-icons/go'

const randomizedGreeting = [
  "Hey there",
  "Welcome,",
  "¡Hola,"
]

const generateRandomNumber = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
};

const Home = () => {
  const [greeting, setGreeting] = useState(null);
  useEffect(() => {
    const newNumber = generateRandomNumber(1, 3)
    const greetingProcedure = randomizedGreeting[newNumber]
    setGreeting(greetingProcedure)
  }, [])
  return (
    <AdminSettings>
        <Container className={`p-4 ${classes.mtN3}`}>
          <div className={classes.page}>
            <div data-qa="page_contents" className={classes.page_contents}>
              <h1 className="mb-4">
                <span className={`${classes.member_image} ${classes.thumb_32}`}  data-thumb-size="32" data-member_id="U02HH3XBFAR">
                  <ts-icon className={`${classes.member_type_badge} ${classes.member_type_badge_16}`}>
                    {/* <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="badge_bg" fill="#FFFFFF"></g>
                      </g>
                    </svg>
                    <svg className="member_type_badge_icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"></g>
                    </svg> */}
                  </ts-icon>
                </span>
                {greeting} Mark
              </h1>
            </div>
          </div>
        </Container>
        <div className={`${classes.card} ${classes.home_card} ${classes.clearfix}`}>
          <Link to="/Linkccount" className={classes.container_row}>
            <BsChevronRight className={classes.cheveron}/>
            <h3 className={classes.home_home}><span className={classes.blueIcon}><AiOutlineSetting/></span>Account Settings</h3>
            <span className={classes.description}> 
              Edit your profile, update your username and password, and manage other account settings.
            </span>
          </Link>
          <div className={`${classes.card} ${classes.home_card} ${classes.clearfix}`}>
                  <Link to="/admin/settings" className={classes.container_row}>
                    <BsChevronRight className={classes.cheveron}/>
                    <h3 className={classes.home_home}><span className={classes.blueIcon}><MdSettingsSuggest/></span>Settings &amp; Permissions</h3> 
                    <span className={classes.description}>
                      Configure your workspace settings, permissions, and authentication preferences.
                    </span>
                  </Link> 
                  <Link to="/" className={classes.container_row}>
                    <BsChevronRight className={classes.cheveron}/>
                    <h3 className={classes.home_home}><span className={classes.redIcon}><AiOutlineUser/></span>Manage Your Workspace</h3> 
                    <span className={classes.description}>
                      Invite new members and manage user permissions.
                    </span>
                  </Link>
                      <div className={classes.container_row}>
                        <Link to="/admin/billing?ui_element=15&amp;ui_step=33" data-clog-event="GROWTH_PRICING" data-clog-ui-element="upgrade_row" data-clog-ui-action="click" data-clog-ui-step="home" className="/" >
                        </Link>
                        <BsChevronRight className={classes.cheveron}/>
                        <h3 className={classes.home_home}><span className={classes.greenIcon}><MdOutlinePayment/></span>Billing</h3>
                        <span className={`${classes.description} ${classes.indifferent_grey} ${classes.small_bottom_margin}`}>
                          Your workspace is on the <strong>Free plan</strong>.
                        </span>
                        <span className={`${classes.description} ${classes.indifferent_grey} ${classes.small}_${classes.bottom_margin}`}>
                          Upgrade to the <strong>Pro plan</strong> or 
                          <Link to="/">
                            <strong>
                              Business+ plan
                            </strong>
                          </Link> 
                          for additional features, including:
                        </span>
                        <span className={`${classes.description} ${classes.indifferent_grey} ${classes.bottom_margin}`}>
                          • Unlimited message archives and search<br/>
                          • Unlimited integrations with external services<br/>
                          • Premium support<br/>
                          • Guest accounts<br/>
                          • Voice and video calls for groups<br/>
                          • Screen sharing 
                        </span>
                        <form action="/checkout/router" method="post">
                          <input type="hidden" name="crumb" value="s-1634333647-80aa2c426ba2e945adb495fa1f344bfecfd030025fd7933506d6068da79ca9ba-☃"/>
                          <input type="hidden" name="product_id" value="std_y"/>
                          <input type="hidden" name="step" value="1"/>
                          <input type="hidden" name="referring_step" value="page_home"/>
                          <input type="hidden" name="referring_ui_element" value="checkout_button"/>
                          <button type="submit" className={`${classes.btn} ${classes.small_right_margin} ${classes.inline_block}`} data-clog-event="GROWTH_PRICING" data-clog-ui-element="checkout_button" data-clog-ui-action="click" data-clog-ui-step="home">
                            Upgrade your team
                          </button>
                          <Link to="/" className={`${classes.btn} ${classes.btn_outline} ${classes.inline_block}`} data-clog-event="GROWTH_PRICING" data-clog-ui-element="pricing_button" data-clog-ui-action="click" data-clog-ui-step="home" data-qa="billing_compare_plans">
                            Compare Plans
                          </Link>
                        </form>
                      </div>
                      <hr className={`${classes} ${classes.small_right_margin} ${classes.small_left_margin}`}/>
                        <Link to="/" className={classes.container_row}>
                          <BsChevronRight className={classes.cheveron}/>
                          <h3 className={classes.home_home}><span className={classes.greenIcon}><FaMagic/></span>Customize Slack</h3> 
                          <span className={classes.description}>
                            Use these settings to make Slack your own.
                          </span>
                        </Link>
                        <Link to="/" className={classes.container_row}>
                          <BsChevronRight className={classes.cheveron}/>
                          <h3 className={classes.home_home}><span className={classes.brownIcon}><AiOutlineDashboard/></span>Analytics</h3> 
                          <span className={classes.description}>
                            View stats for your workspace, including activity, files, and integrations.
                          </span>
                        </Link>
                    </div>

                    <div className={classes.card}>
                      <h3>
                        <div className={classes.redIcon}><GoPlug/></div>
                          Applications
                      </h3>
                          <p className={classes.large_bottom_margin}>
                            Applications let you automatically pull information and activity from outside tools into Slack in a way that's timely, relevant, and searchable. Get started with some of our most popular applications:
                          </p>
                          <p className={`${classes.services_promo} ${classes.align_center}`}>
                            <Link to="/services/new/dropbox" data-toggle="tooltip" title="" data-original-title="Dropbox">
                              <img src="https://a.slack-edge.com/80588/img/services/dropbox_128.png"/>
                            </Link> 
                            <Link to="/services/new/trello" data-toggle="tooltip" title="" data-original-title="Trello">
                              <img src="https://a.slack-edge.com/80588/img/services/trello_128.png"/>
                            </Link> 
                            <Link to="/services/new/gdrive" data-toggle="tooltip" title="" data-original-title="Google Drive">
                              <img src="https://a.slack-edge.com/6ee36/img/services/gdrive_128.png"/>
                            </Link>
                            <Link to="/services/new/github" data-toggle="tooltip" title="" data-original-title="GitHub">
                              <img src="https://a.slack-edge.com/80588/img/services/github_128.png"/>
                            </Link> 
                            <Link to="/services/new/twitter" data-toggle="tooltip" title="" data-original-title="Twitter">
                              <img src="https://a.slack-edge.com/80588/img/services/twitter_128.png"/>
                            </Link> 
                            <Link to="/services/new/hangouts" data-toggle="tooltip" title="" data-original-title="Google Hangouts">
                              <img src="https://a.slack-edge.com/80588/img/services/hangouts_128.png"/>
                            </Link>
                          </p>
                          <p className={classes.align_center}>
                            <Link to="/" className={`${classes.btn} ${classes.btn_large} ${classes.hide_on_mobile} ${classes.large_bottom_margin}`}>
                              <GoPlug className={classes.footerIcon}/>
                              View App Directory
                            </Link>
                            <Link to="/" className={`${classes.btn} ${classes.show_on_mobile}`}>
                              <GoPlug/> 
                              Browse Applications
                            </Link>
                          </p>
                    </div>
                    <ul className={classes.settings_home_footer}>
                      <li>
                        <Link to="/tour">Tour</Link>
                      </li>
                      <li>
                        <Link to="/download-apps">Download Apps</Link>
                      </li>
                      <li>
                        <Link to="/legal">Brand Guidelines</Link>
                      </li>
                      <li>
                        <Link to="/help">Help</Link>
                      </li>
                      <li>
                        <Link to="/confirm-deactivation" target="_blank">
                          API
                        </Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                        <li>
                          <Link to="/contact-us">Contact</Link>
                        </li>
                        <li>
                          <Link to="/privacy">Policies</Link>
                        </li>
                        <li>
                          <Link to="/ZurichatBlog" target="_blank">
                            Our Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/session-signout">Sign Out</Link>
                        </li>
                    </ul>
          </div>
                <div className={classes.overlay}></div>
     
    </AdminSettings>
)
}

export default Home
