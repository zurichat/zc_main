import { useState } from "react"

import cancel from "../assets/images/cancel.svg"
import SearchValue from "./searchValueComponent"
import Styled from "styled-components"
import theme1 from "../assets/images/theme1.png"
import theme2 from "../assets/images/theme2.png"
import theme3 from "../assets/images/theme3.png"

export const BigModal = ({ onClose, inputValue }) => {
  const [value, setValue] = useState(inputValue)

  const sidebar = document.getElementById(
    "single-spa-application:@zuri/sidebar"
  )
  const width = sidebar.clientWidth

  const SearchContainer = Styled.div`
  background-color: white;
  position: fixed;
  left: ${width}px;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 2000;
  padding: 20px; `

  const StyledInput = Styled.input`
  outline: none;
  border: none;  
  padding: 3px;
  width: 100%;
  border-bottom: 2px solid #00B87C;
  `

  return (
    <SearchContainer className="bigModal">
      <button
        className="btn"
        style={{
          position: "absolute",
          top: 10,
          right: "20px"
        }}
        onClick={() => onClose()}
      >
        <img src={cancel} alt="close" />
      </button>
      <StyledInput
        placeholder="Search"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
      <SearchValue
        src={theme1}
        title="the main title"
        description="please work for me i beg of you i want to check bla bla please be this i want to do somwthing i want you to work please work for daddy og work for daydy just work for me  ohhhh lala la la oh la ble bla bla sheep black black black sheeep"
      />
      <SearchValue
        src={theme2}
        title="small small oh"
        description="please work for me i beg of you i want to check"
      />
      <SearchValue
        src={theme3}
        title="its being going"
        description="please work for me i beg of you i want to check"
      />
      <SearchValue
        src={theme3}
        title="its being going"
        description="please work for me i beg of you i want to check"
      />

      <SearchValue
        src={theme3}
        title="its being going"
        description="please work for me i beg of you i want to check"
      />

      <SearchValue
        src={theme3}
        title="its being going"
        description="please work for me i beg of you i want to check"
      />
    </SearchContainer>
  )
}
