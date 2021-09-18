import styles from '../../styles/articlesCard.module.css'

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
        <img src="/arrow-right.png" alt="Arrow Right" />
      </div>
    </div>
  )
}

export default articlesCard
