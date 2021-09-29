import ComplianceCertification from './components/ComplianceCertification'
import SecurityFeature from './components/SecurityFeature'
import securityStyles from './styles/security.module.css'
import securityFeatureStyles from './styles/security_features.module.css'
import Footer from '../../components/Footer'
import Section1 from '../../components/Security'
import Header from '../../components/Header'

const Security = () => {
  return (
    <div>
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
            img="/iso_27001.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/iso_27017.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/iso_27018.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/iso_27018.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/logo_soc3.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/logo_soc2.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/Schellman-APEC-Processor.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/Schellman-APEC-Processor2.png"
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img="/logo_csa.png"
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
            img="/HIPAA.png"
            title="Health Insurance Portability and Accountability Act(HIPAA)"
          />
          <SecurityFeature
            img="/FINRA.png"
            title="Financial Industry Regulatory Authority(FINRA)"
          />
          <SecurityFeature img="/FR.png" title="FR" />
          <SecurityFeature
            img="/TISAX.png"
            title="TRUSTED INFORMATION SECURITY ASSESSMENT EXCHANGE(TISAX)"
          />
        </div>
        <div className={securityFeatureStyles.banner}>
          <h2>Want to know more about Zuri for your Organisation?</h2>
          <button href="#">Contact sales</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Security
