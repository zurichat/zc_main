import styles from "../../styles/articlesCard.module.css";

const articlesCard = ({ article }) => {
  return (
    <div className={styles.articlesCard}>
      <div className={styles.articlesImageWrapper}>
        <img src={`${article.article_image}`} alt="Articles Thumbnail" />
      </div>
      <div className={styles.articleBodyWrapper}>
        <p className={styles.articleCategory}>{article.article_category}</p>
        <p className={styles.articleTitle}>{article.article_title}</p>
      </div>
      <div className={styles.articleFooterWrapper}>
        <p>Continue Reading</p>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 9.5H15.5"
            stroke="#00B87C"
            strokeWidth="1.22693"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 5L15.5 9.5L11 14"
            stroke="#00B87C"
            strokeWidth="1.22693"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default articlesCard;
