import styles from "../../styles/section5.module.css";
import SpecialFeaturesCard from "../specialFeaturesCard/SpecialFeaturesCard";
import { Features } from "./featuresData";
function SpecialFeatures() {
  return (
    <div className={styles.section5}>
      <div className={styles.section5Wrapper}>
        <div className={styles.section5TopTextsWrapper}>
          <h2>Special Features you need</h2>
          <p>
            Get all your work tools and information assembled in one place for
            easy access and increase Productivity.
          </p>
        </div>
        <div className={styles.section5CardWrapper}>
          {Features.map(feature => (
            <SpecialFeaturesCard key={feature.feature_id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialFeatures;
