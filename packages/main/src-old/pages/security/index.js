import ComplianceCertification from "./components/ComplianceCertification";
import SecurityFeature from "./components/SecurityFeature";
import securityStyles from "./styles/security.module.css";
import securityFeatureStyles from "./styles/security_features.module.css";
import Footer from "../../components/Footer";
import Section1 from "../../components/Security";
import Header from "../../components/Header";
import iso_27001 from "../../component-assets/iso_27001.png";
import iso_27017 from "../../component-assets/iso_27017.png";
import iso_27018 from "../../component-assets/iso_27018.png";
import logo_soc2 from "../../component-assets/logo_soc2.png";
import logo_soc3 from "../../component-assets/logo_soc3.png";
import logo_csa from "../../component-assets/logo_csa.png";
import SchellmanAPECProcessor2 from "../../component-assets/Schellman-APEC-Processor2.png";
import SchellmanAPECProcessor from "../../component-assets/Schellman-APEC-Processor.png";
import HIPAA from "../../component-assets/HIPAA.png";
import FINRA from "../../component-assets/FINRA.png";
import TISAX from "../../component-assets/TISAX.png";
import FR from "../../component-assets/FR.png";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

const Security = () => {
  const { push } = useHistory();

  return (
    <div>
      <Helmet>
        <title> Security - Zuri Chat</title>
      </Helmet>
      <Header />
      <Section1 />
      <section className={securityStyles.compliancesection}>
        <h2 className={securityStyles.complianceheading}>
          The security program at Zuri protects our organization and your data
          at every layer
        </h2>
        <p className={securityStyles.compliancetext}>
          Compliance certifications and attestations
        </p>
        <div className={securityStyles.compliancewrapper}>
          <ComplianceCertification
            img={iso_27001}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={iso_27017}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={iso_27018}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={iso_27018}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={logo_soc3}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={logo_soc2}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={SchellmanAPECProcessor}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={SchellmanAPECProcessor2}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={logo_csa}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
        </div>
      </section>
      <section className={securityFeatureStyles.wrapper}>
        <h2 className={securityStyles.complianceheading}>
          Meet specific industry regulations and international security and data
          privacy standards.
        </h2>
        <div className={securityFeatureStyles.features}>
          <SecurityFeature
            img={HIPAA}
            title="Health Insurance Portability and Accountability Act(HIPAA)"
          />
          <SecurityFeature
            img={FINRA}
            title="Financial Industry Regulatory Authority(FINRA)"
          />
          <SecurityFeature img={FR} title="FR" />
          <SecurityFeature
            img={TISAX}
            title="TRUSTED INFORMATION SECURITY ASSESSMENT EXCHANGE(TISAX)"
          />
        </div>
        <div className={securityFeatureStyles.banner}>
          <h2>Want to know more about Zuri for your Organisation?</h2>
          <button onClick={() => push("/contact-us")}>Contact sales</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Security;
