import styles from "../styles/SearchValueComponent.module.css"
import * as singleSpa from "single-spa" // import Styled from "styled-components"
// const SearchValueStyled = Styled.div`
//     margin-top: 20px;
//     display: grid;
//     grid-template-columns: min-content 1fr;
//     grid-template-rows: repeat(2, min-content);
//     justify-items: flex-start;
//     align-content: flex-start;
//     width: 100%;
//     gap: 5px;
// `
// const SearchImageCover = Styled.div`
//     grid-row: 1/-1;
//     width: 50px;
//     height: 50px;
// `
// const SearchImg = Styled.img`
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
// `
const SearchValue = ({
  src,
  title,
  content,
  onClose,
  created_at,
  plugin_name,
  destination_Url
}) => {
  const redirect = () => {
    if (!destination_Url) {
      onClose()
    }
    // console.log('hi')
    singleSpa.navigateToUrl(destination_Url)
    onClose()
  }

  const timeStamp = new Date(created_at).toDateString()
  return (
    <div onClick={() => redirect()} className={styles.resultCard}>
      <p className={styles.result_plugin}>
        {`#${plugin_name} plugin`}{" "}
        <span className={styles.created_date}>{` - ${timeStamp}`}</span>
      </p>
      <div className={styles.card_cont}>
        <div className={styles.card_img}>
          <img src={src} />
        </div>
        <div className={styles.card_desc}>
          <p className={styles.result_card_title}>
            {title}
            <span className={styles.result_card_time}>{timeStamp}</span>
          </p>
          <p className={styles.result_card_desc}>{content}</p>
        </div>
      </div>
    </div>
    // <SearchValueStyled>
    //   <SearchImageCover>
    //     <SearchImg src={src} alt="photo" />
    //   </SearchImageCover>
    //   <h5
    //     className="title"
    //     style={{ padding: "0", margin: "0", fontSize: "15px", lineHeight: 1 }}
    //   >
    //     {title}
    //   </h5>
    //   <div className="content">{description}</div>
    // </SearchValueStyled>
  )
}

export default SearchValue
