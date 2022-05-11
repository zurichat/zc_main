import React, { Fragment } from "react";
import Link from "../../../components/Link";
import Style from "../styles/content.module.css";

import imageTut from "../assets/image1.png";
import bulbiImage from "../assets/bulb.png";
import shakeImage from "../assets/shake.png";
import bigLock from "../assets/bigLock.svg";
import yellowBulb from "../assets/yellowBulb.svg";
import smallLock from "../assets/smallLock.svg";
import handShake from "../assets/handShake.svg";
import veryBigLock from "../assets/veryBigLock.svg";

const Content = () => {
  return (
    <div className={Style.privacyContainer}>
      <div className={Style.privacyAndTerms}>
        <div className={Style.content}>
          <h1 className={Style.headingOne}>Privacy & Terms</h1>
          <div className={Style.section}>
            <h5 className={Style.headingIntro}>Introduction</h5>
            <div className={Style.mainContainer}>
              <div className={Style.partContainer}>
                <div className={Style.contentImage}>
                  <img
                    src={bulbiImage}
                    className={Style.bulbImage}
                    alt="bulb image"
                  />
                  <p className={Style.parplat}>
                    We are a social network and online platform for
                    professionals and beginners. People use our Services to find
                    and be found for business opportunities, to connect with
                    others and find information. Our Privacy Policy applies to
                    any Member or Visitor to our Services.{" "}
                  </p>
                </div>
                <p className={Style.parregistered}>
                  Our registered users (“Members”) share their professional
                  identities, engage with their network, exchange knowledge and
                  professional insights, post and view relevant content, learn
                  and develop skills, and find business and career
                  opportunities. Content and data on some of our Services is
                  viewable to non-members (“Visitors”). We use the term
                  “Designated Countries” to refer to countries in the European
                  Union (EU), European Economic Area (EEA), and Switzerland.
                </p>

                <div className={Style.sectionServices}>
                  <h5 className={Style.headingServices}>Services</h5>
                  <div className={Style.contentImage}>
                    <img src={shakeImage} className={Style.shakeImage} />
                    <p className={Style.paraPolicy}>
                      {" "}
                      This Privacy Policy, including our{" "}
                      <Link to="/cookies-banner" title="Cookie Policy" />{" "}
                      applies to your use of our Services.
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
                  <p className={Style.privacy}>Privacy</p>
                  <Link title="Zurichat Privacy" /> <br />
                  <Link title="Policy" /> <br />
                  <Link title="Privacy FAQ" />
                  <p className={Style.datareq}>Data Requests</p>
                  <Link title="Data Request Overview" underline /> <br />
                  <Link title="Data Request Policy" underline /> <br />
                  <Link title="Transparency Report" underline />
                  <p className={Style.compliance}>Compliance</p>
                  <Link title="Cookie Policy" /> <br />
                  <Link title="Zurichat's GDPR Commitment" /> <br />
                  <Link title="California's Consumer Policy Act" />
                  <br />
                  <Link title="(CCPA) FAQ" /> <br />
                  <Link title="CCPA Metric Disclosure" /> <br />
                  <Link title="FERPA Compliance" />
                </div>
                <div className={Style.effectiveAll}>
                  <h6 className={Style.effectDate}>
                    Effective: March 14, 2021
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
              <h5 className={Style.privacymat}>Your Privacy Matters</h5>
              <p className={Style.zurimission}>
                Zurichat’s mission is to connect the world’s professionals to
                allow them to be more productive and successful. Central to this
                mission is our commitment to be transparent about the data we
                collect about you, how it is used and with whom it is shared.
              </p>
              <p className={Style.privPol}>
                This Privacy Policy applies when you use our Services (described
                below). We offer our users{" "}
                <Link to="/choices" title="choices" size /> about the data we
                collect, use and share as described in this{" "}
                <Link to="/privacy " title="Privacy Policy," size />{" "}
                <Link to="/cookies-banner" title="Cookie Policy," size />{" "}
                Settings and our{" "}
                <Link to="/contact-us" title="Help Center." size />{" "}
              </p>
              <div className={Style.imageBox}>
                <img
                  className={Style.imageBox}
                  src={imageTut}
                  alt="Image Tutorial"
                />
              </div>
            </div>
            <div>
              <h5 className={Style.headingAppl}>
                Applicability Of This Privacy Policy
              </h5>
              <div className={Style.applicabilityImage}>
                <img className={Style.bigLock} src={bigLock} alt="Big Lock" />
                <p className={Style.appPrivPol1}>
                  This Privacy Policy applies to Zurichat’s online workplace
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
              <p className={Style.appPrivPol2}>
                This Privacy Policy does not apply to any third-party
                applications or software that integrate with the Services
                through the Zurichat platform (“Third-Party Services”), or any
                other third-party products, services or businesses. In addition,
                a separate agreement governs delivery, access and use of the
                Services (the “Customer Agreement”), including the processing of
                any messages, files or other content submitted through Services
                accounts (collectively, “Customer Data”). The organization
                (e.g., your employer or another entity or person) that entered
                into the Customer Agreement (“Customer”) controls its instance
                of the Services (its “Workspace”) and any associated Customer
                Data. If you have any questions about specific Workspace
                settings and privacy practices, please contact the Customer
                whose Workspace you use. If you have an account, you can check{" "}
                <Link to="/pricing" title="http://Zurichat.com/account/team" />,
                for contact information of your Workspace owner(s) and
                administrator(s). If you have received an invitation to join a
                Workspace but have not yet created an account, you should
                request assistance from the Customer that sent the invitation.
              </p>
            </div>
            <div className={Style.infoCollected}>
              <h5 className={Style.infoCollect}>
                Information We Collect And Receive
              </h5>
              <div className={Style.infoImage}>
                <img
                  className={Style.bulb}
                  src={yellowBulb}
                  alt="Yellow Bulb"
                />
                <p className={Style.infopar1}>
                  Zurichat may collect and receive Customer Data and other
                  information and data (“Other Information”) in a variety of
                  ways: Customer Data. Customers or individuals granted access
                  to a Workspace by a Customer (“Authorized Users”) routinely
                  submit Customer Data to Zurichat when using the Services.
                  Other Information. Zurichat also collects, generates and/or
                  receives Other Information:
                </p>
              </div>
              <br />
              <div className={Style.privbreakdown1}>
                <p className={Style.paraPriv1}>
                  (1) Workspace and account information. To create or update a
                  Workspace account, you or your Customer (e.g. your employer)
                  supply Zurichat with an email address, phone number, password,
                  domain and/or similar account details. For details on
                  Workspace creation,{" "}
                  <Link to="/create-workspace" title="click here" /> . In
                  addition, Customers that purchase a paid version of the
                  Services provide Zurichat (or its payment processors) with
                  billing details such as credit card information, banking
                  information and/or a billing address.
                </p>{" "}
                <br />
                <p className={Style.paraPriv1}>
                  (2) Usage information. <br />
                  <u>*Services metadata</u>. When an Authorized User interacts
                  with the Services, metadata is generated that provides
                  additional context about the way Authorized Users work. For
                  example, Zurichat logs the Workspaces, channels, people,
                  features, content and links you view or interact with, the
                  types of files shared and what Third-Party Services are used
                  (if any).
                </p>
                <p className={Style.paraPriv1}>
                  <u>*Log data</u>. As with most websites and technology
                  services delivered over the Internet, our servers
                  automatically collect information when you access or use our
                  Websites or Services and record it in log files. This log data
                  may include the Internet Protocol (IP) address, the address of
                  the web page visited before using the Website or Services,
                  browser type and settings, the date and time the Services were
                  used, information about browser configuration and plugins,
                  language preferences and cookie data.
                </p>{" "}
                <p className={Style.paraPriv1}>
                  <u>*Device information</u>. Zurichat collects information
                  about devices accessing the Services, including type of
                  device, what operating system is used, device settings,
                  application IDs, unique device identifiers and crash data.
                  Whether we collect some or all of this Other Information often
                  depends on the type of device used and its settings.
                </p>
                <p className={Style.paraPriv1}>
                  <u>*Location information</u>. We receive information from you,
                  your Customer and other third-parties that helps us
                  approximate your location. We may, for example, use a business
                  address submitted by your employer or an IP address received
                  from your browser or device to determine approximate location.
                  Zurichat may also collect location information from devices in
                  accordance with the consent process provided by your device.
                  Cookie information. Zurichat uses a variety of cookies and
                  similar technologies in our Websites and Services to help us
                  collect Other Information. For more details about how we use
                  these technologies, and your opt-out opportunities and other
                  options, please see our Cookie Policy. Third-Party services. A
                  Customer can choose to permit or restrict Third-Party Services
                  for its Workspace. Typically, Third-Party Services are
                  software that integrate with our Services, and a Customer can
                  permit its Authorized Users to enable and disable these
                  integrations for its Workspace. Zurichat may also develop and
                  offer Zurichat applications that connect the Services with a
                  Third-Party Service. Once enabled, the provider of a
                  Third-Party Service may share certain information with
                </p>{" "}
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
                and partners, such as employers or prospective employers and
                applicant tracking systems providing us job application data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
