import React from 'react'
import styles from '../styles/pricingTable.module.css'
import { ReactComponent as Tick } from '../assets/goodTick.svg'

export default class PricingTable extends React.Component {
  render() {
    return (
      <section>
        <div className={styles.pricingTable}>
          <div className={styles.col1}>
            <div>
              <p className={styles.colHeader}>Productivity Basics</p>
              <p>Message history</p>
              <p style={{ marginBottom: '1px' }}>
                Relevant people, channels and files in search results
              </p>
              <p>Integrations with other apps</p>
              <p style={{ paddingTop: '15px' }}>File storage</p>
              <p className={styles.adjustWok}>Workspaces</p>
              <p>Customizable sections</p>
              <p>Zuri Chat Huddles</p>
            </div>
            <div>
              <p style={{ marginTop: '20px', fontWeight: 'Bold' }}>
                EXTERNAL COLLABORATION
              </p>
              <p>Work with other organizations</p>
              <p style={{ marginBottom: '1px' }}>Work with individuals</p>
            </div>

            <div>
              <p style={{ marginTop: '20px', fontWeight: 'Bold' }}>SECURITY</p>
              <p>Data encryption at rest and in transit</p>
              <p>Two-factor authentication</p>
              <p>OAuth with Google</p>
              <p>SAML-based single sign-on (SSO)</p>
              <p>Slack Enterprise Key Management</p>
              <p>
                Integration with Enterprise Mobility Management
                <br /> (EMM)
              </p>
              <p style={{ marginBottom: '1px' }}>Work with individuals</p>
            </div>
            <div>
              <p style={{ marginTop: '20px', fontWeight: 'Bold' }}>
                COMPLIANCE
              </p>
              <p>Custom retention policies for messages and files</p>
              <p>Data exports for all messages</p>
              <p>Support for HIPAA compliance</p>
              <p style={{ marginBottom: '1px' }}>Data residency</p>
            </div>
            <div>
              <p style={{ marginTop: '20px', fontWeight: 'Bold' }}>
                ADMINISTRATION
              </p>
              <p>Manage channel posting permissions</p>
              <p style={{ marginTop: '14px' }}>Custom User Groups</p>
              <p>
                Real-time Active Directory sync with OneLogin,
                <br /> Okta and Ping Identity
              </p>
              <p>User management with SCIM provisioning</p>
              <p>
                Support for integrations with Data Loss Prevention (DLP),
                <br />
                e-Discovery, and offline backup providers
              </p>
              <p>Domain claiming</p>
              <p style={{ marginBottom: '1px' }}>Custom Terms of Service</p>
            </div>
            <div>
              <p style={{ marginTop: '20px', fontWeight: 'Bold' }}>CALLS</p>
              <p>Voice and video calls</p>
              <p style={{ marginBottom: '1px' }}>Screen sharing</p>
            </div>
            <div>
              <p style={{ marginTop: '20px', fontWeight: 'Bold' }}>SUPPORT</p>
              <p>Access to customer support</p>
              <p>99.99% guaranteed uptime SLA</p>
              <p style={{ marginTop: '5px' }}>
                Designated account and customer success team
              </p>
            </div>
          </div>

          <div className={styles.col2}>
            <div>
              <div className={styles.headText}>
                <strong> Free</strong>
              </div>
              <p className={styles.colHeader}></p>
              <p className={styles.text}>
                10K of your team’s most recent messages
              </p>
              <p style={{ padding: '10px' }}>
                <Tick />
              </p>
              <p>10</p>
              <p>5 GB Total</p>
              <p className={styles.adjustWok}> 1</p>
              {/* <p></p>
            <p style={{ marginTop: '20px', fontWeight: 'Bold' }}></p> */}
            </div>
            <div style={{ marginTop: '280px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '506px' }}>
              <p>Limited to #general channel only</p>
            </div>
            <div style={{ marginTop: '343px' }}>
              <p>One-on-one only </p>
            </div>
            <div style={{ marginTop: '100px' }}>
              <p> Standard support</p>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <div className={styles.headText}>
                <strong>Pro</strong>
              </div>
              <p className={styles.colHeader}></p>
              <p>Unlimited</p>
              <p className={styles.adjust}>
                <Tick />
              </p>
              <p>Unlimited</p>
              <p>10 GB per team member</p>
              <p>1</p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '39px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '42px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p style={{ paddingTop: '2px' }}>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '225px' }}>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '192px' }}>
              <p>Limited to #general channel only</p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '293px' }}>
              <p>Up to 15 participants</p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '50px' }}>
              <p>24/7 support</p>
            </div>
          </div>

          <div className={styles.col2}>
            <div>
              <div className={styles.headText}>
                <strong>Business+</strong>
              </div>
              <p className={styles.colHeader}></p>
              <p>Unlimited</p>
              <p className={styles.adjust}>
                <Tick />
              </p>
              <p>Unlimited</p>
              <p>20 GB per team member</p>
              <p>1</p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p style={{ paddingTop: '2px' }}>
                <Tick />
              </p>
              <p style={{ paddingTop: '2px' }}>
                <Tick />
              </p>
            </div>
            <div style={{ paddingTop: '185px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p></p>
              <p style={{ marginTop: '15px' }}>
                <Tick />
              </p>
              <div style={{ marginTop: '58px' }}>
                <p>Unlimited number of channels</p>
                <p>
                  <Tick />
                </p>
                <p>
                  <Tick />
                </p>
              </div>
              <div style={{ marginTop: '241px' }}>
                <p>Up to 15 participants</p>
                <p>
                  <Tick />
                </p>
              </div>
              <div style={{ marginTop: '50px' }}>
                <p> 24/7 support with four-hour first response time</p>
                <p style={{ paddingTop: '4px' }}>
                  <Tick />
                </p>
                <p>
                  <Tick />
                </p>
              </div>
            </div>
          </div>

          <div className={styles.col2}>
            <div>
              <div className={styles.headText}>
                <strong>Enterprise Grid</strong>
              </div>
              <p className={styles.colHeader}></p>
              <p>Unlimited</p>
              <p className={styles.adjust}>
                <Tick />
              </p>
              <p>Unlimited</p>
              <p>1 TB per team member </p>
              <p className={styles.adjustWok}>Unlimited</p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '43px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '42px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p></p>
              <p>
                <Tick />
              </p>
              <p>Add-on</p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '98px' }}>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '50px' }}>
              <p>Unlimited number of channels</p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <p>Up to 15 participants</p>
              <p>
                <Tick />
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <p>24/7 priority support with four-hour first response time</p>
              <p style={{ paddingTop: '0' }}>
                <Tick />
              </p>
              <p>
                <Tick />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btnGroup}>
          <div style={{ marginLeft: '700px' }} className={styles.btn}>
            <a href="/get-started">Get Started</a>
          </div>
          <div style={{ marginLeft: '110px' }} className={styles.btn}>
            <a href="/get-started">Get Started</a>
          </div>
          <div style={{ marginLeft: '120px' }} className={styles.btn}>
            <a href="/get-started">Get Started</a>
          </div>
          <div style={{ marginLeft: '120px' }} className={styles.btn}>
            <a href="/get-started">Get Started</a>
          </div>
        </div>
      </section>
    )
  }
}
