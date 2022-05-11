import styles from "../../styles/section6.module.css";
import ArticlesCard from "../articlesCard/articlesCard";
import { Articles } from "./articlesData";

const Section6 = () => {
  return (
    <div className={styles.section6}>
      <div className={styles.section6Wrapper}>
        <div className={styles.section6TopTextWrapper}>
          <h2>Learn More about the Zuri chat workspace</h2>
        </div>
        <div className={styles.section6CardWrapper}>
          {Articles.map(article => (
            <ArticlesCard key={article.article_id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
