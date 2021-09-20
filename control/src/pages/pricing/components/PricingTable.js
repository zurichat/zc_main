import React from 'react'
import styles from '../styles/pricingTable.module.css'
import TableRow from './TableRow'

const PricingTable = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.table_container}>
        <table>
          <colgroup>
            <col span="1" />
            <col span="4" style={{ backgroundColor: '#f2f2f2' }} />
          </colgroup>
          <thead>
            <tr>
              <th className={styles.sidebar}></th>
              <th>Free</th>
              <th>Pro</th>
              <th>Business+</th>
              <th>Enterprise Grid</th>
            </tr>
          </thead>
          <tbody>
            <TableRow head="Productivity Basics" isLabel={true} />
            <TableRow
              head="Message history"
              free="10K of your team’s most recent messages"
              pro="Unlimited"
              business="Unlimited"
              enterprise="Unlimited"
            />
            <TableRow
              head="Relevant people, channels and files in search results"
              free="thick"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Integrations with other apps"
              free="10"
              pro="Unlimited"
              business="Unlimited"
              enterprise="Unlimited"
            />
            <TableRow
              head="File storage"
              free="5 GB Total"
              pro="10 GB per team member"
              business="20 GB per team member"
              enterprise="1 TB per team member"
            />
            <TableRow
              head="Workspaces"
              free="1"
              pro="1"
              business="1"
              enterprise="Unlimited"
            />
            <TableRow
              head="Customizable sections"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Zuri Chat Huddles"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow head="EXTERNAL COLLABORATION" isLabel={true} />
            <TableRow
              head="Work with other organizations"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Work with individuals"
              free="thick"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow head="SECURITY" isLabel={true} />
            <TableRow
              head="Data encryption at rest and in transit"
              free="thick"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Two-factor authentication"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow head="OAuth with Google" pro="thick" business="thick" />
            <TableRow
              head="SAML-based single sign-on (SSO)"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Slack Enterprise Key Management"
              enterprise="Add-on"
            />

            <TableRow
              head="Integration with Enterprise Mobility Management
                (EMM)"
              enterprise="thick"
            />

            <TableRow head="Work with individuals" />

            <TableRow head="COMPLIANCE" isLabel={true} />
            <TableRow
              head="Custom retention policies for messages and files"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Data exports for all messages"
              business="thick"
              enterprise="thick"
            />
            <TableRow head="Support for HIPAA compliance" enterprise="thick" />
            <TableRow
              head="Data residency"
              business="thick"
              enterprise="thick"
            />
            <TableRow head="ADMINISTRATION" isLabel={true} />
            <TableRow
              head="Manage channel posting permissions"
              free="Limited to #general channel only"
              pro="Limited to #general channel only"
              business="Unlimited number of channels"
              enterprise="Unlimited number of channels"
            />
            <TableRow
              head="Custom User Groups"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Real-time Active Directory sync with OneLogin,
                Okta and Ping Identity"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="User management with SCIM provisioning"
              enterprise="thick"
            />
            <TableRow
              head="Support for integrations with Data Loss Prevention (DLP),
                e-Discovery, and offline backup providers"
              enterprise="thick"
            />
            <TableRow head="Domain claiming" enterprise="thick" />
            <TableRow head="Custom Terms of Service" enterprise="thick" />
            <TableRow head="CALLS" isLabel={true} />
            <TableRow
              head="Voice and video calls"
              free="One-on-one only"
              pro="Up to 15 participants"
              business="Up to 15 participants"
              enterprise="Up to 15 participants"
            />
            <TableRow
              head="Screen sharing"
              pro="thick"
              business="thick"
              enterprise="thick"
            />
            <TableRow head="SUPPORT" isLabel={true} />
            <TableRow
              head="Access to customer support"
              free="Standard support"
              pro="24/7 support"
              business="24/7 support with four-hour first response time"
              enterprise="24/7 support with four-hour first response time"
            />
            <TableRow
              head="99.99% guaranteed uptime SLA"
              business="thick"
              enterprise="thick"
            />
            <TableRow
              head="Designated account and customer success team"
              business="thick"
              enterprise="thick"
            />
            <tr>
              <td className={styles.sidebar}></td>
              <td>
                <div className={styles.btn}>
                  <a href="/get-started">Get Started</a>
                </div>
              </td>
              <td>
                <div className={styles.btn}>
                  <a href="/get-started">Get Started</a>
                </div>
              </td>
              <td>
                <div className={styles.btn}>
                  <a href="/get-started">Get Started</a>
                </div>
              </td>
              <td>
                <div className={styles.btn}>
                  <a href="/get-started">Get Started</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PricingTable
