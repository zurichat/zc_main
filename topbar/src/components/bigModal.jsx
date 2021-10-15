import { useState } from "react"
import axios from 'axios'
import cancel from "../assets/images/cancel.svg"
import SearchValue from "./searchValueComponent"
import Styled from "styled-components"
import noImg from "../assets/images/no-img.svg"
import SearchModalResult from "./ModalAutoCompleteResult"
import {NoResult} from './SearchNotFound'
export const BigModal = ({ onClose, inputValue }) => {
  const [value, setValue] = useState(inputValue)
  const [result, setResult] = useState([])
     const base_URL = `https://todo.zuri.chat/api/v1/search/614679ee1a5607b13c00bcb7/614679ee1a5607b13c00bcb7?key=${inputValue}&member_id=6139a43559842c7444fb01ef&org_id=613a3ac959842c7444fb0240`
    
       axios.get(base_URL).then(res => {
         setResult(res.data.data)
        //  console.log(result)
      })
     .catch(error => {
       if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         setResult([])
       }}
     )
  // console.log(result)
  let i = 0;
  
  const sidebar = document.getElementById(
    "single-spa-application:@zuri/sidebar"
  )
  const width = sidebar.clientWidth

  const SearchContainer = Styled.div`
  background-color: white;
  position: fixed;
  left: ${width}px;
  top: 12vh;
  right: 0;
  overflow: auto;
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
let card =  result.map((item, i) => (<SearchValue key={i} src={noImg} title={item.title} description={item.description} />))

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
      {/* <StyledInput
        placeholder="Search"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }} 
      />*/}
      { result === [] ?  <h1>nhjdjsjrgi nrv</h1> : card
         }
      
       
    </SearchContainer>
  )
}
