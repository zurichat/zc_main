import Styled from "styled-components"
const SearchValueStyled = Styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(2, min-content);
    justify-items: flex-start;
    align-content: flex-start;
    width: 100%;
    gap: 5px;
`
const SearchImageCover = Styled.div`
    grid-row: 1/-1;
    width: 50px;
    height: 50px;
`
const SearchImg = Styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const SearchValue = ({ src, title, description }) => {
  return (
    <SearchValueStyled>
      <SearchImageCover>
        <SearchImg src={src} alt="photo" />
      </SearchImageCover>
      <h5
        className="title"
        style={{ padding: "0", margin: "0", fontSize: "15px", lineHeight: 1 }}
      >
        {title}
      </h5>
      <div className="content">{description}</div>
    </SearchValueStyled>
  )
}

export default SearchValue
