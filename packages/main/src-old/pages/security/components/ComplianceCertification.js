import securityStyles from "../styles/security.module.css";
const ComplianceCertification = props => {
  const img = props.img;
  const title = props.title;
  const description = props.description;
  return (
    <div className={securityStyles.compliancecard}>
      <img src={img} alt="" className={securityStyles.compliancelogo} />
      <h5 className={securityStyles.titletext}>{title}</h5>
      <p className={securityStyles.descriptiontext}>{description}</p>
    </div>
  );
};

export default ComplianceCertification;
