import React, { useState, useRef } from "react";
import Link from "../../../../components/link/Link";
import Style from "../styles/content.module.css";

import veryBigLock from "../assets/padlock.png";
import Icon from "../assets/close-modal.png";
import Modal from "../components/modal/Modal";
import { policyData } from "../policyData";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const applRef = useRef(null);
  const infoRef = useRef(null);
  const dataRef = useRef(null);
  const partnerRef = useRef(null);

  const handleToUpdate = action => {
    setIsModalOpen(action);
  };

  const changeContent = data => {
    setModalContent([data]);
    handleToUpdate(true);
  };

  const handleClick = curRef => {
    curRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Style.privacyContainer}>
      <div className={Style.mainContainer}>
        <div className={Style.partContainer}>
          <h1 className={Style.headingOne}>Privacy & Terms</h1>
          <div className={Style.info}>
            Learn more about how Zuri Chat collects and uses data and your
            rights as a Zuri Chat user.
          </div>
        </div>
        <div className={Style.imageWrapper}>
          <div className={Style.bigLockImage}>
            <img
              src={veryBigLock}
              className={Style.veryBigLock}
              alt="very big lock"
            />
          </div>
        </div>
      </div>
      <div className={Style.subContainer}>
        <h2 className={Style.section}>Updated Nov 14, 2022</h2>
        <p className={Style.textUnderline}>
          <strong>INTRODUCTION</strong>
        </p>
        <p>
          We are a social network and online platform for professionals and
          beginners. People use our Services to find and be found for business
          opportunities, to connect with others and find information. Our
          Privacy Policy applies to any Member or Visitor to our Services.
        </p>
        <p>
          Our registered users (“Members”) share their professional identities,
          engage with their network, exchange knowledge and professional
          insights, post and view relevant content, learn and develop skills,
          and find business and career opportunities. Content and data on some
          of our Services is viewable to non-members (“Visitors”). We use the
          term “Designated Countries” to refer to countries in the European
          Union (EU), European Economic Area (EEA), and Switzerland.
        </p>
        <p className={Style.textUnderline}>
          <strong>SERVICES</strong>
        </p>
        <p>
          This Privacy Policy, including our{" "}
          <Link to="/cookies-banner" title="Cookie Policy" /> Cookies Policy
          applies to your use of our Services.
        </p>
        <p>
          This Privacy Policy applies to LinkedIn.com, Zurichat’s-branded apps,
          zuri Learning and other Zurichat’s-related sites, apps, communications
          and services (“Services”), including off-site Services, such as our ad
          services and the “Apply with Zurichat’s” and “Share with LinkedIn”
          plugins, but excluding services that state that they are offered under
          a different privacy policy. For Nigeria residents, additional
          disclosures required by Nigerian law may be found in our{" "}
          <Link
            to="/nigeria-privacy-disclosure"
            title="Nigeria Privacy Disclosure."
          />
        </p>
        <p className={Style.textUnderline}>
          <strong>SERVICE DEVELOPMENT</strong>
        </p>
        <div className={Style.contentBox}>
          <div className={Style.contentBox_1}>
            {policyData.map(data => (
              <div key={data.id}>
                <button
                  className={Style.button_link}
                  onClick={() => changeContent(data)}
                >
                  {data.title}
                </button>
              </div>
            ))}
          </div>
          <div className={Style.effectiveAll}>
            <p className={Style.textUnderline}>
              <strong>EFFECTIVE: March 14, 2021</strong>
            </p>
            <p className={Style.parinfo}>
              This Privacy Policy describes how Zurichat’s collects, uses and
              discloses information and what choices you have with respect to
              the information.
            </p>
            <p className={Style.referZuri}>
              When we refer to “Zuri”, we mean the Zurichat’s entity that acts
              as the controller or processor of your information, as explained
              in more detail in the “Identifying the Data Controller and
              Processor” section below.
            </p>
            <p className={Style.textUnderline}>
              <strong>TABLE OF CONTENTS</strong>
            </p>
            <div className={Style.tablelinks}>
              <button
                className={Style.tb_button}
                onClick={() => handleClick(applRef)}
                underline
              >
                Applicability of this Privacy Policy
              </button>{" "}
              <br />
              <button
                className={Style.tb_button}
                onClick={() => handleClick(infoRef)}
                underline
              >
                Information We Collect and Receive
              </button>{" "}
              <br />
              <button
                className={Style.tb_button}
                onClick={() => handleClick(dataRef)}
                underline
              >
                Data Retention
              </button>{" "}
              <br />
              <button
                className={Style.tb_button}
                onClick={() => handleClick(partnerRef)}
                underline
              >
                Our Partners
              </button>{" "}
              <br />
              {/* <Link title="Security" underline /> <br />
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
                    <Link title="Contacting Zurichat" underline /> */}
            </div>
          </div>
        </div>
        <p className={Style.textUnderline}>
          <strong>Your Privacy Matter</strong>
        </p>
        <p>
          Zurichat’s mission is to connect the world’s professionals to allow
          them to be more productive and successful. Central to this mission is
          our commitment to be transparent about the data we collect about you,
          how it is used and with whom it is shared.
        </p>
        <p>
          This Privacy Policy applies when you use our Services (described
          below). We offer our users <Link to="/choices" title="choices" size />{" "}
          about the data we collect, use and share as described in this{" "}
          <Link to="/privacy " title="Privacy Policy," size />{" "}
          <Link to="/cookies-banner" title="Cookie Policy," size /> Settings and
          our <Link to="/contact-us" title="Help Center." size />{" "}
        </p>
        <p className={Style.textUnderline}>
          <strong>Application Of This Privacy Policy</strong>
        </p>
        <p>
          This Privacy Policy applies to Zurichat’s online workplace
          productivity tools and platform, including the associated Zurichat’s
          mobile and desktop applications (collectively, the “Services”),{" "}
          <Link to="/" title="Zurichat.com" /> and other Zurichat websites
          (collectively, the “Websites”) and other interactions (e.g., customer
          service inquiries, user conferences, etc.) you may have with Zuri. If
          you do not agree with the terms, do not access or use the Services,
          Websites or any other aspect of Zurichat’s business.
        </p>
        <p>
          This Privacy Policy does not apply to any third-party applications or
          software that integrate with the Services through the Zurichat
          platform (“Third-Party Services”), or any other third-party products,
          services or businesses. In addition, a separate agreement governs
          delivery, access and use of the Services (the “Customer Agreement”),
          including the processing of any messages, files or other content
          submitted through Services accounts (collectively, “Customer Data”).
          The organization (e.g., your employer or another entity or person)
          that entered into the Customer Agreement (“Customer”) controls its
          instance of the Services (its “Workspace”) and any associated Customer
          Data. If you have any questions about specific Workspace settings and
          privacy practices, please contact the Customer whose Workspace you
          use. If you have an account, you can check{" "}
          <Link to="/pricing" title="http://Zurichat.com/account/team" />, for
          contact information of your Workspace owner(s) and administrator(s).
          If you have received an invitation to join a Workspace but have not
          yet created an account, you should request assistance from the
          Customer that sent the invitation.
        </p>
        <p className={Style.textUnderline}>
          <strong>Information We Collect and Receive</strong>
        </p>
        <p>
          Zurichat may collect and receive Customer Data and other information
          and data (“Other Information”) in a variety of ways: Customer Data.
          Customers or individuals granted access to a Workspace by a Customer
          (“Authorized Users”) routinely submit Customer Data to Zurichat when
          using the Services. Other Information. Zurichat also collects,
          generates and/or receives Other Information:
        </p>
        <ul className="privacy-info-list">
          <li>
            <strong>Workspace and account information </strong> - To create or
            update a Workspace account, you or your Customer (e.g. your
            employer) supply Zurichat with an email address, phone number,
            password, domain and/or similar account details. For details on
            Workspace creation,{" "}
            <Link to="/create-workspace" title="click here" /> . In addition,
            Customers that purchase a paid version of the Services provide
            Zurichat (or its payment processors) with billing details such as
            credit card information, banking information and/or a billing
            address.
          </li>
          <li>
            <strong>Usage information </strong> - When an Authorized User
            interacts with the Services, metadata is generated that provides
            additional context about the way Authorized Users work. For example,
            Zurichat logs the Workspaces, channels, people, features, content
            and links you view or interact with, the types of files shared and
            what Third-Party Services are used (if any).
          </li>
          <li>
            <strong>Log data </strong> - As with most websites and technology
            services delivered over the Internet, our servers automatically
            collect information when you access or use our Websites or Services
            and record it in log files. This log data may include the Internet
            Protocol (IP) address, the address of the web page visited before
            using the Website or Services, browser type and settings, the date
            and time the Services were used, information about browser
            configuration and plugins, language preferences and cookie data.
          </li>
          <li>
            <strong>Device information </strong> - As with most websites and
            technology services delivered over the Internet, our servers
            automatically collect information when you access or use our
            Websites or Services and record it in log files. This log data may
            include the Internet Protocol (IP) address, the address of the web
            page visited before using the Website or Services, browser type and
            settings, the date and time the Services were used, information
            about browser configuration and plugins, language preferences and
            cookie data.
          </li>
          <li>
            <strong>Location information </strong> - We receive information from
            you, your Customer and other third-parties that helps us approximate
            your location. We may, for example, use a business address submitted
            by your employer or an IP address received from your browser or
            device to determine approximate location. Zurichat may also collect
            location information from devices in accordance with the consent
            process provided by your device. Cookie information. Zurichat uses a
            variety of cookies and similar technologies in our Websites and
            Services to help us collect Other Information. For more details
            about how we use these technologies, and your opt-out opportunities
            and other options, please see our Cookie Policy. Third-Party
            services. A Customer can choose to permit or restrict Third-Party
            Services for its Workspace. Typically, Third-Party Services are
            software that integrate with our Services, and a Customer can permit
            its Authorized Users to enable and disable these integrations for
            its Workspace. Zurichat may also develop and offer Zurichat
            applications that connect the Services with a Third-Party Service.
            Once enabled, the provider of a Third-Party Service may share
            certain information with
          </li>
        </ul>
        <p className={Style.textUnderline}>
          <strong>DATA FROM OTHERS</strong>
        </p>
        <p>
          You and others may post content that includes information about you
          (as part of articles, posts, comments, videos) on our Services. We
          also may collect public information about you, such as
          professional-related news and accomplishments, and make it available
          as part of our Services, including, as permitted by your settings, in
          notifications to others of mentions in the news.
        </p>
        <p className={Style.textUnderline}>
          <strong>PARTNERS</strong>
        </p>
        <p>
          We receive personal data (e.g., your job title and work email address)
          about you when you use the services of our customers and partners,
          such as employers or prospective employers and applicant tracking
          systems providing us job application data.
        </p>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} handleToUpdate={handleToUpdate}>
          {modalContent.map(content => (
            <div className={Style.modal} key={content.id}>
              <div className={Style.modal_head}>
                <img
                  src={Icon}
                  alt="close"
                  height={50}
                  onClick={() => {
                    handleToUpdate(false);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={Style.modal_body}>
                <h1 className={Style.modal_title}>{content.title}</h1>
                <p className={Style.modal_text}>{content.text}</p>
                <p className={Style.modal_text}>{content.text2}</p>
                <p className={Style.modal_text}>{content.text3}</p>
              </div>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default Content;
