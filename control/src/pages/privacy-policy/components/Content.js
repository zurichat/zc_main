import React, { Fragment } from 'react'
import Link from '../../../components/Link'
import Style from '../styles/content.module.css'

import imageTut from '../assets/image1.png'
import bulbiImage from '../assets/bulb.png'
import shakeImage from '../assets/shake.png'

const Content = () => {
  return (
    <React.Fragment>
      <div className={Style.content}>
        <h1 className={Style.headingOne}>Privacy Policy</h1>
        <div className={Style.section}>
          <h5 className={Style.headingFive}>Introduction</h5>
          <div className={Style.contentImage}>
            <img src={bulbiImage} />
            <p className={Style.paragraph}>
              We are a social network and online platform for professionals and
              beginners. People use our Services to find and be found for
              business opportunities, to connect with others and find
              information. Our Privacy Policy applies to any Member or Visitor
              to our Services.{' '}
            </p>
          </div>
          <p className={Style.paragraph}>
            Our registered users (“Members”) share their professional
            identities, engage with their network, exchange knowledge and
            professional insights, post and view relevant content, learn and
            develop skills, and find business and career opportunities. Content
            and data on some of our Services is viewable to non-members
            (“Visitors”). We use the term “Designated Countries” to refer to
            countries in the European Union (EU), European Economic Area (EEA),
            and Switzerland.
          </p>
        </div>
        <div className={Style.section}>
          <h5 className={Style.headingFive}>Services</h5>
          <div className={Style.contentImage}>
            <img src={shakeImage} />
            <p className={Style.paragraph}>
              {' '}
              This Privacy Policy, including our <Link title="Cookie Policy" />{' '}
              applies to your use of our Services.
            </p>
          </div>
          <p className={Style.paragraph}>
            This Privacy Policy applies to LinkedIn.com, Zurichat’s-branded
            apps, zuri Learning and other Zurichat’s-related sites, apps,
            communications and services (“Services”), including off-site
            Services, such as our ad services and the “Apply with Zurichat’s”
            and “Share with LinkedIn” plugins, but excluding services that state
            that they are offered under a different privacy policy. For Nigeria
            residents, additional disclosures required by Nigerian law may be
            found in our <Link title="Nigeria Privacy Disclosure." />
          </p>
        </div>
        <div className={Style.section}>
          <h5 className={Style.headingFive}>Service Development</h5>
          <div className={Style.contentBox}>
            <div>
              <h6 className={Style.headingSix}>Getting started</h6>
              <Link title="Overview" />
              <p>Privacy</p>
              <Link title="Slack Privacy Policy" /> <br />
              <Link title="Privacy FAQ" />
              <p>Data Requests</p>
              <Link title="Data Request Overview" underline /> <br />
              <Link title="Data Request Policy" underline /> <br />
              <Link title="Transparency Report" underline />
            </div>
            <div>
              <h6 className={Style.headingSix}>Effective: March 14, 2021</h6>
              <p className={Style.paragraph}>
                This Privacy Policy describes howZurichat’s collects, uses and
                discloses <br /> information and what choices you have with
                respect to the information.
              </p>
              <p className={Style.paragraph}>
                When we refer to “Zuri”, we mean the Zurichat’s entity that acts
                as the controller <br /> or processor of your information, as
                explained in more detail in the <br /> “Identifying the Data
                Controller and Processor” section below.
              </p>
              <Link title="Applicability of this Privacy Policy" underline />{' '}
              <br />
              <Link title="Information We Collect and Receive" underline />{' '}
              <br />
              <Link title="How We Use Information" underline /> <br />
              <Link title="Data Retention" underline /> <br />
              <Link
                title="How We Share and Disclose Information"
                underline
              />{' '}
              <br />
              <Link title="Security" underline /> <br />
              <Link title="Age Limitations" underline /> <br />
              <Link title="Changes to this Privacy Policy" underline /> <br />
              <Link title="International Data Transfers" underline /> <br />
              <Link title="Data Protection Officer" underline /> <br />
              <Link
                title="Identifying the Data Controller and Processor"
                underline
              />{' '}
              <br />
              <Link title="Your Rights" underline /> <br />
              <Link title="California Privacy Rights" underline /> <br />
              <Link title="Data Protection Authority" underline s /> <br />
              <Link title="Contacting Slack" underline />
            </div>
          </div>
        </div>

        <div className={Style.section}>
          <h5 className={Style.headingFive}>Your Privacy Matters</h5>
          <p className={Style.paragraph}>
            Zurichat’s mission is to connect the world’s professionals to allow
            them to be more productive and successful. Central to this mission
            is our commitment to be transparent about the data we collect about
            you, how it is used and with whom it is shared.
          </p>
          <p className={Style.paragraph}>
            This Privacy Policy applies when you use our Services (described
            below). We offer our users choices about the data we collect, use
            and share as described in this <Link title="Privacy Policy," size />{' '}
            <Link title="Cookie Policy," size /> Settings and our{' '}
            <Link title="Help Center." size />{' '}
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
          <h5 className={Style.headingFive}>
            Applicability Of This Privacy Policy
          </h5>
          <p className={Style.paragraph}>
            This Privacy Policy applies to Zurichat’s online workplace
            productivity tools and platform, including the associated Zurichat’s
            mobile and desktop applications (collectively, the “Services”),{' '}
            <Link title="Zurichat.com" /> and other Zurichat websites
            (collectively, the “Websites”) and other interactions (e.g.,
            customer service inquiries, user conferences, etc.) you may have
            with Zuri. If you do not agree with the terms, do not access or use
            the Services, Websites or any other aspect of Zurichat’s business.
          </p>
          <p className={Style.paragraph}>
            This Privacy Policy does not apply to any third-party applications
            or software that integrate with the Services through the Zurichat
            platform (“Third-Party Services”), or any other third-party
            products, services or businesses. In addition, a separate agreement
            governs delivery, access and use of the Services (the “Customer
            Agreement”), including the processing of any messages, files or
            other content submitted through Services accounts (collectively,
            “Customer Data”). The organization (e.g., your employer or another
            entity or person) that entered into the Customer Agreement
            (“Customer”) controls its instance of the Services (its “Workspace”)
            and any associated Customer Data. If you have any questions about
            specific Workspace settings and privacy practices, please contact
            the Customer whose Workspace you use. If you have an account, you
            can check http://Zurichat.com/account/team for contact information
            of your Workspace owner(s) and administrator(s). If you have
            received an invitation to join a Workspace but have not yet created
            an account, you should request assistance from the Customer that
            sent the invitation.
          </p>
        </div>
        <div>
          <h5 className={Style.headingFive}>
            Applicability Of This Privacy Policy
          </h5>
          <p className={Style.paragraph}>
            This Privacy Policy applies to Zurichat’s online workplace
            productivity tools and platform, including the associated Zurichat’s
            mobile and desktop applications (collectively, the “Services”),{' '}
            <Link title="Zurichat.com" /> and other Zurichat websites
            (collectively, the “Websites”) and other interactions (e.g.,
            customer service inquiries, user conferences, etc.) you may have
            with Zuri. If you do not agree with the terms, do not access or use
            the Services, Websites or any other aspect of Zurichat’s business.
          </p>
          <p className={Style.paragraph}>
            This Privacy Policy does not apply to any third-party applications
            or software that integrate with the Services through the Zurichat
            platform (“Third-Party Services”), or any other third-party
            products, services or businesses. In addition, a separate agreement
            governs delivery, access and use of the Services (the “Customer
            Agreement”), including the processing of any messages, files or
            other content submitted through Services accounts (collectively,
            “Customer Data”). The organization (e.g., your employer or another
            entity or person) that entered into the Customer Agreement
            (“Customer”) controls its instance of the Services (its “Workspace”)
            and any associated Customer Data. If you have any questions about
            specific Workspace settings and privacy practices, please contact
            the Customer whose Workspace you use. If you have an account, you
            can check http://Zurichat.com/account/team for contact information
            of your Workspace owner(s) and administrator(s). If you have
            received an invitation to join a Workspace but have not yet created
            an account, you should request assistance from the Customer that
            sent the invitation.
          </p>
        </div>
        <div>
          <h5 className={Style.headingFive}>
            Information We Collect And Receive
          </h5>
          <p className={Style.paragraph}>
            Slack may collect and receive Customer Data and other information
            and data (“Other Information”) in a variety of ways: Customer Data.
            Customers or individuals granted access to a Workspace by a Customer
            (“Authorized Users”) routinely submit Customer Data to Zurichat when
            using the Services. Other Information. Slack also collects,
            generates and/or receives Other Information:
          </p>
          <p className={Style.paragraph}>
            This Privacy Policy does not apply to any third-party applications
            or software that integrate with the Services through the Zurichat
            platform (“Third-Party Services”), or any other third-party
            products, services or businesses. In addition, a separate agreement
            governs delivery, access and use of the Services (the “Customer
            Agreement”), including the processing of any messages, files or
            other content submitted through Services accounts (collectively,
            “Customer Data”). The organization (e.g., your employer or another
            entity or person) that entered into the Customer Agreement
            (“Customer”) controls its instance of the Services (its “Workspace”)
            and any associated Customer Data. If you have any questions about
            specific Workspace settings and privacy practices, please contact
            the Customer whose Workspace you use. If you have an account, you
            can check http://Zurichat.com/account/team for contact information
            of your Workspace owner(s) and administrator(s). If you have
            received an invitation to join a Workspace but have not yet created
            an account, you should request assistance from the Customer that
            sent the invitation.
          </p>{' '}
          <br />
          <div>
            <p className={Style.paragraph}>
              (1) Workspace and account information. To create or update a
              Workspace account, you or your Customer (e.g. your employer)
              supply Zurichat with an email address, phone number, password,
              domain and/or similar account details. For details on Workspace
              creation, click here. In addition, Customers that purchase a paid
              version of the Services provide Slack (or its payment processors)
              with billing details such as credit card information, banking
              information and/or a billing address.
            </p>{' '}
            <br />
            <p className={Style.paragraph}>
              (2) Usage information. <br />
              *Services metadata. When an Authorized User interacts with the
              Services, metadata is generated that provides additional context
              about the way Authorized Users work. For example, Slack logs the
              Workspaces, channels, people, features, content and links you view
              or interact with, the types of files shared and what Third-Party
              Services are used (if any).
            </p>
            <p className={Style.paragraph}>
              *Log data. As with most websites and technology services delivered
              over the Internet, our servers automatically collect information
              when you access or use our Websites or Services and record it in
              log files. This log data may include the Internet Protocol (IP)
              address, the address of the web page visited before using the
              Website or Services, browser type and settings, the date and time
              the Services were used, information about browser configuration
              and plugins, language preferences and cookie data.
            </p>{' '}
            <br />
            <p className={Style.paragraph}>
              *Device information. Slack collects information about devices
              accessing the Services, including type of device, what operating
              system is used, device settings, application IDs, unique device
              identifiers and crash data. Whether we collect some or all of this
              Other Information often depends on the type of device used and its
              settings.
            </p>
            <p className={Style.paragraph}>
              *Location information. We receive information from you, your
              Customer and other third-parties that helps us approximate your
              location. We may, for example, use a business address submitted by
              your employer or an IP address received from your browser or
              device to determine approximate location. Slack may also collect
              location information from devices in accordance with the consent
              process provided by your device. Cookie information. Slack uses a
              variety of cookies and similar technologies in our Websites and
              Services to help us collect Other Information. For more details
              about how we use these technologies, and your opt-out
              opportunities and other options, please see our Cookie Policy.
            </p>{' '}
            <br />
            <p className={Style.paragraph}>
              Third-Party services. A Customer can choose to permit or restrict
              Third-Party Services for its Workspace. Typically, Third-Party
              Services are software that integrate with our Services, and a
              Customer can permit its Authorized Users to enable and disable
              these integrations for its Workspace. Slack may also develop and
              offer Slack applications that connect the Services with a
              Third-Party Service. Once enabled, the provider of a Third-Party
              Service may share certain information with
            </p>
          </div>
        </div>

        <div className={Style.section}>
          <h5 className={Style.headingFive}>Data From Others</h5>
          <p className={Style.paragraph}>Others may post or write about you.</p>
          <br />
          <p className={Style.paragraph}>
            You and others may post content that includes information about you
            (as part of articles, posts, comments, videos) on our Services. We
            also may collect public information about you, such as
            professional-related news and accomplishments, and make it available
            as part of our Services, including, as permitted by your settings,
            in notifications to others of mentions in the news.
          </p>
        </div>
        <div className={Style.section}>
          <h5 className={Style.headingFive}>Partners</h5>
          <p className={Style.paragraph}>
            We receive personal data (e.g., your job title and work email
            address) about you when you use the services of our customers and
            partners, such as employers or prospective employers and applicant
            tracking systems providing us job application data.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Content
