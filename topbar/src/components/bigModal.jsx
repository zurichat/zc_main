import { useState, useEffect } from "react"
import styles from '../styles/bigModal.module.css'
import axios from "axios"
import cancel from "../assets/images/cancel.svg"
import SearchValue from "./searchValueComponent"
import Styled from "styled-components"
import noImg from "../assets/images/avatar_vct.svg"
import SearchModalResult from "./ModalAutoCompleteResult"
import { NoResult } from "./SearchNotFound"
export const BigModal = ({ onClose, inputValue }) => {
  const [result, setResult] = useState([])
  const base_URL = `https://todo.zuri.chat/api/v1/search/614679ee1a5607b13c00bcb7/614679ee1a5607b13c00bcb7?key=${inputValue}&member_id=6139a43559842c7444fb01ef&org_id=613a3ac959842c7444fb0240`
  
  useEffect(() => {
    axios
      .get(base_URL)
      .then(res => {
        setResult(res.data.data)
        //  console.log(result)
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setResult([])
        }
      })
  }, [result[0]])
  // console.log(result)
  let i = 0;
  const showResult = (result.length === 0) ? false : true;

  const sidebar = document.getElementById(
    "single-spa-application:@zuri/sidebar"
  )

  const tobBar = document.getElementById("single-spa-application:@zuri/topbar")
  const width = sidebar.clientWidth
  const top = tobBar.clientHeight

  const SearchContainer = Styled.div`
  background-color: white;
  position: fixed;
  top: 6vh;
  left: ${width}px;
  right: 0;
  overflow: auto;
  height: 100vh;
  z-index: 2000;
  `

  const StyledInput = Styled.input`
  outline: none;
  border: none;  
  padding: 3px;
  width: 100%;
  border-bottom: 2px solid #00B87C;
  `
  let card = result.map((item, i) => (
    <SearchValue
      key={i}
      src={noImg}
      title={item.title}
      description={item.description}
    />
  ))
  return (
    <SearchContainer className="bigModal">
      {showResult && <div className={styles.Header}>
        <p className={styles.header_p}>{`Search result for "${inputValue}"`}</p>
        <button
        className={styles.button}
        onClick={() => onClose()}
        ><img src={cancel} alt="close" />
      </button>
      </div> }
      {/* this is to return total counts */}
      {/* <p className={styles.total}>Total Results Found - 12</p> */}
      
        
      {/* <StyledInput
        placeholder="Search"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }} 
      />*/}
      {/* this is the reult card */}
      {showResult && <div className={styles.resultCard}>
          <SearchValue
          
                key={i}
                src={noImg}
                title={"title"}
                description={"description"}
              />
      </div> }
      {showResult && card}
      {/* if the response returns no result */}
      {/*<div className={styles.noResult}>
        <p className={styles.no_result_title}>No Result Found</p>
          <p className={styles.no_result_desc}>Looking for something? If it happened in zuri-chat,
              <br /> you can find it in search.</p>
        <button className={styles.startNewSearch}>Start A New Search</button>
    </div>*/}
    {!showResult && <NoResult onClosed={() => onClose()}/>}
    </SearchContainer>
  )
}