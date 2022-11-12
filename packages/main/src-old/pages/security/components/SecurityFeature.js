import securityFeatureStyles from "../styles/security_features.module.css";

const SecurityFeature = ({ img, title }) => {
  return (
    <div className={securityFeatureStyles.feature}>
      <img src={img} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default SecurityFeature;
