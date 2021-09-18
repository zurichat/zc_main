import ComplianceCertification from './components/ComplianceCertification'
import SecurityFeature from './components/SecurityFeature'
import securityStyles from './styles/security.module.css'
import securityFeatureStyles from './styles/security_features.module.css'
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Section1 from '../../components/externalPagesComponents/Security'
import SearchSuggestion from '../searchSuggestion'
import iso1 from '../../assets/iso_27001.png'
import iso2 from '../../assets//iso_27017.png'
import iso3 from '../../assets/iso_27018.png'
import soc2 from '../../assets/logo_soc2.png'
import csaLogo from '../../assets/logo_csa.png'
import HIPAA from '../../assets/HIPAA.png'
import FINRA from '../../assets/FINRA.png'
import TISAX from '../../assets/TISAX.png'
import FR from '../../assets/FR.png'
import schellman from '../../assets/Schellman-APEC-Processor.png'

const Security = () => {
  return (
    <div>
      <SearchSuggestion />
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
            img={iso1}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={iso2}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={iso3}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={iso3}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={soc2}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={soc2}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={schellman}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={schellman}
            title="ISO/IEC 27001"
            description="Information Security Management System (ISMS)"
          />
          <ComplianceCertification
            img={csaLogo}
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
          <button href="#">Contact sales</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Security
