import ComplianceCertification from './components/ComplianceCertification'
import securityStyles from './styles/security.module.css'
import Header from '../../components/externalPagesComponents/Header'
import Footer from '../../components/externalPagesComponents/Footer/Footer'

const Security = () => {
  return (
    <div>
      <Header />
      <section className={securityStyles.compliancesection}>
        <h2 className={securityStyles.complianceheading}>The security program at Zuri protects our organization and your data at every layer</h2>
        <p className={securityStyles.compliancetext}>Compliance certifications and attestations</p>
        <div className={securityStyles.compliancewrapper}>
          <ComplianceCertification img="/iso_27001.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/iso_27017.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/iso_27018.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/security-badge-green.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/logo_soc3.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/logo_soc2.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/Schellman-APEC-Processor.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/Schellman-APEC-Processor2.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
          <ComplianceCertification img="/logo_csa.png" title="ISO/IEC 27001" description="Information Security Management System (ISMS)" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Security
