import React, { Fragment } from "react"
import Link from "../../../components/Link"
import Style from "../styles/content.module.css"
import imageTut from "../assets/image1.png"
import bulbiImage from "../assets/bulb.png"
import bigLock from "../assets/bigLock.svg"
import yellowBulb from "../assets/yellowBulb.svg"
import smallLock from "../assets/smallLock.svg"
import handShake from "../assets/handShake.svg"
import veryBigLock from "../assets/veryBigLock.svg"

const Content = () => {
  return (
    <div className={Style.privacyContainer}>
      <div className={Style.privacyAndTerms}>
        <div className={Style.content}>
          <h1 className={Style.headingOne}>Terms & Policies </h1>
          <div className={Style.section}>
            <h5 className={Style.headingIntro}>User Terms Of Services</h5>
            <div className={Style.mainContainer}>
              <div className={Style.partContainer}>
                <div className={Style.contentImage}>
                  <p className={Style.parplat}>
                    We are a social network and online platform for
                    professionals and beginners.
                    By accessing you agree, understand and acknowledge that you bound by the 
                    terms and conditions 
                    contained in the Terms Of Use outlined below. These terms apply to the entire website or part 
                    of website or  any email or other type of communication between you and platform,
                    If you do not agree to all the terms and conditions of this agreement, 
                    then you may not access the Website/App or use any services.
                    Under no circumstances shall be liable for any direct, indirect, special, 
                    incidental, exemplary or consequential damages, including, but not limited to, 
                    loss of data or profit, arising out of the use, or the inability to use, 
                    the materials on this site, even if team or an authorized representative 
                    has been advised of the possibility of such damages. 
                    If your use of items(license) from this site results in the need for servicing, 
                    repair or correction of equipment or data, you assume any costs thereof.
                    Platform will not be responsible for any outcome that may occur during the course of usage of our resources.We reserve the rights to change prices and revise the resources usage policy in any moment.
                  </p>
                </div>
                <p className={Style.parregistered}>
                  We use the term
                  “Designated Countries” to refer to countries in the European
                  Union (EU), European Economic Area (EEA), and Switzerland.
                </p>

                <div className={Style.sectionServices}>
                  <h5 className={Style.headingServices}>API Terms of Services</h5>
                  <div className={Style.contentImage}>
                    
                    <p className={Style.paraPolicy}>
                      {" "}
                      This Privacy Policy, including our{" "}
                      <Link to="/cookies-banner" title="Cookie Policy" />{" "}
                      applies to your use of our API Services.
                    </p>
                  </div>
                  <p className={Style.parservices}>
                    This Privacy Policy applies to LinkedIn.com,
                    Zurichat’s-branded apps, zuri Learning and other
                    Zurichat’s-related sites, apps, communications and services
                    (“Services”), including off-site Services, such as our ad
                    services and the “Apply with Zurichat’s” and “Share with
                    LinkedIn” plugins, but excluding services that state that
                    they are offered under a different privacy policy. For
                    Nigeria residents, additional disclosures required by
                    Nigerian law may be found in our{" "}
                    <Link
                      to="/nigeria-privacy-disclosure"
                      title="Nigeria Privacy Disclosure."
                    />
                  </p>
                </div>
              </div>
              <div className={Style.bigLockImage}>
                <img
                  src={veryBigLock}
                  className={Style.veryBigLock}
                  alt="very big lock"
                />
              </div>
            </div>
          </div>

          <div className={Style.contain2}>
            <div className={Style.sectionServDev}>
              <h5 className={Style.headingFive}>Service Development</h5>
              <div className={Style.contentBox}>
                <div className={Style.contentBox_1}>
                  <h6 className={Style.headingstarted}>Getting started</h6>
                  <Link title="Overview" />
                  <p className={Style.privacy}>Terms</p>
                  <Link title="Zurichat Customer Terms of Service" /> <br />
                  <Link title="User Terms Of Service" /> <br />
                  <Link title="Customer-Specific suppl." />
                  <p className={Style.datareq}>API Terms of Service</p>
                  <Link title="APP Directory agreement" /> <br />
                  <Link title="Service Level Agreement" underline /> <br />
                  <Link title="Data processing addenda" underline /> <br />
                  <Link title="Zuri Partner Programme Terms and Conditions" />
                  <p className={Style.compliance}>Policies</p>
                  <Link title="Cookie Policy" /> <br />
                  <Link title="Acceptable use Policy" /> <br />
                  <Link title="Zurichat's subprocessors" /> <br />
                  <Link title="California's Consumer Policy Act" />
                  <br />
                  <Link title="DMCA Policy" /> <br />
                  <Link title="CCPA Metric Disclosure" /> <br />
                  <Link title="FERPA Compliance" />
                </div>
                <div className={Style.effectiveAll}>
                  <h6 className={Style.effectDate}>
                    Effective: August 22, 2021
                  </h6>
                  <p className={Style.parinfo}>
                    This Privacy Policy describes how Zurichat’s collects, uses
                    and discloses information and what choices you have with
                    respect to the information.
                  </p>
                  <p className={Style.referZuri}>
                    When we refer to “Zuri”, we mean the Zurichat’s entity that
                    acts as the controller or processor of your information, as
                    explained in more detail in the “Identifying the Data
                    Controller and Processor” section below.
                  </p>
                  <h6 className={Style.tableContents}>Table of Contents:</h6>
                  <div className={Style.tablelinks}>
                    <Link
                      title="Applicability of this Privacy Policy"
                      underline
                    />{" "}
                    <br />
                    <Link
                      title="Information We Collect and Receive"
                      underline
                    />{" "}
                    <br />
                    <Link title="How We Use Information" underline /> <br />
                    <Link title="Data Retention" underline /> <br />
                    <Link
                      title="How We Share and Disclose Information"
                      underline
                    />{" "}
                    <br />
                    <Link title="Security" underline /> <br />
                    <Link title="Age Limitations" underline /> <br />
                    <Link
                      title="Changes to this Privacy Policy"
                      underline
                    />{" "}
                    <br />
                    <Link title="International Data Transfers" underline />{" "}
                    <br />
                    <Link title="Data Protection Officer" underline /> <br />
                    <Link
                      title="Identifying the Data Controller and Processor"
                      underline
                    />{" "}
                    <br />
                    <Link title="Your Rights" underline /> <br />
                    <Link title="California Privacy Rights" underline /> <br />
                    <Link title="Data Protection Authority" underline s />{" "}
                    <br />
                    <Link title="Contacting Zurichat" underline />
                  </div>
                </div>
              </div>
            </div>

            <div className={Style.section}>
              
            </div>
            <div>
              <h5 className={Style.headingAppl}>
                Applicability Of This Conditions
              </h5>
              <div className={Style.applicabilityImage}>
                <img className={Style.bigLock} src={bigLock} alt="Big Lock" />
                <p className={Style.appPrivPol1}>
                  This Policy applies to Zurichat’s online workplace
                  productivity tools and platform, including the associated
                  Zurichat’s mobile and desktop applications (collectively, the
                  “Services”), <Link to="/" title="Zurichat.com" /> and other
                  Zurichat websites (collectively, the “Websites”) and other
                  interactions (e.g., customer service inquiries, user
                  conferences, etc.) you may have with Zuri. If you do not agree
                  with the terms, do not access or use the Services, Websites or
                  any other aspect of Zurichat’s business.
                </p>
              </div>
              
            </div>
            

            <div className={Style.DataOthers}>
              <h5 className={Style.headingDataOthers}>Data From Others</h5>
              <div className={Style.securityData}>
                <img
                  className={Style.smallLock}
                  src={smallLock}
                  alt="Security Lock"
                />
                <p className={Style.parOthers}>
                  Others may post or write about you.
                </p>
              </div>
              <p className={Style.parOthers2}>
                You and others may post content that includes information about
                you (as part of articles, posts, comments, videos) on our
                Services. We also may collect public information about you, such
                as professional-related news and accomplishments, and make it
                available as part of our Services, including, as permitted by
                your settings, in notifications to others of mentions in the
                news.
              </p>
            </div>
            <div className={Style.partnersAll}>
              <div className={Style.imagePart}>
                <img
                  className={Style.handShake}
                  src={handShake}
                  alt="Hand shake"
                />
                <h5 className={Style.partners}>Partners</h5>
              </div>
              <p className={Style.parPartners}>
                We receive personal data (e.g., your job title and work email
                address) about you when you use the services of our customers
                and partners, and
                applicant tracking systems providing us job application data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
