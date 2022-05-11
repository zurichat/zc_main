import styles from "../../styles/specialFeaturesCard.module.css";

const SpecialFeaturesCard = ({ feature }) => {
  return (
    <div className={styles.specialFeaturesCard}>
      <img
        src={`${feature.feature_image}`}
        className={styles.featureCardIcon}
        alt="Feature Icon"
      />
      <h3>{feature.feature_title}</h3>
      <p>{feature.feature_detail}</p>
    </div>
  );
};

export default SpecialFeaturesCard;
