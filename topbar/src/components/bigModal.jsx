import { useState, useEffect, useContext } from "react"
import styles from "../styles/bigModal.module.css"
import axios from "axios"
import cancel from "../assets/images/cancel.svg"
import SearchValue from "./searchValueComponent"
import Styled from "styled-components"
import noImg from "../assets/images/avatar_vct.svg"
import SearchModalResult from "./ModalAutoCompleteResult"
import { NoResult } from "./SearchNotFound"
import { plugins } from "../utils/topbarApi"
import { ProfileContext } from "../context/ProfileModal"

export const BigModal = ({ onClose, inputValue, filter }) => {
  const [result, setResult] = useState([])
  const [isLoading, setLoading] = useState(false)

  const { user } = useContext(ProfileContext)

  const pluginName = window.location.href
  const newName = pluginName.split("/")

  const exactPlugin = plugins.find(
    plugin => newName[3] === (plugin.name || plugin.name + "#")
  )

  useEffect(() => {
    setLoading(true)
    setLoading(true)
    const getResult = async () => {
      try {
        let response = await exactPlugin.apiCall(
          user.org_id,
          user._id,
          inputValue,
          filter
        )
        if (response.status >= 200 || response.status <= 299) {
          setResult(response.data.results.data)
          setLoading(false)
        }
        setLoading(false)
      } catch (e) {
        console.error(e)
        setLoading(false)
      }
    }
    getResult()
  }, [result[0]])
  // console.log(result)
  let i = 0

  const sidebar = document.getElementById(
    "single-spa-application:@zuri/sidebar"
  )

  const tobBar = document.getElementById("single-spa-application:@zuri/topbar")
  const width = sidebar.clientWidth
  const top = tobBar.clientHeight

  const SearchContainer = Styled.div`
    background-color: white;
    position: fixed;
    top: ${top}px;
    left: ${width}px;
    right: 0;
    overflow: auto;
    height: 100vh;
    z-index: 2000;
    padding: 10px 20px;
  `
  const StyledInput = Styled.input`
    outline: none;
    border: none;  
    padding: 3px;
    width: 100%;
    border-bottom: 2px solid #00b87c;
  `

  let card = result.map((item, i) => (
    <div key={i} className={styles.resultCard}>
      <SearchValue
        destination_Url={item.destination_url}
        src={noImg}
        title={item.title}
        onClose={onClose}
        content={item.content}
        created_at={item.created_at}
        plugin_name={exactPlugin.name}
      />
    </div>
  ))
  const element = isLoading ? (
    <p>loading...</p>
  ) : (
    <SearchContainer className="bigModal">
      <h2>{`Search result for "${inputValue}"`}</h2>

      <button
        className="btn"
        onClick={() => onClose()}
        style={{ position: "absolute", top: "15px", right: "20px" }}
      >
        <img src={cancel} alt="close" />
      </button>
      {result.length < 1 ? (
        <div className={styles.noResult}>
          <p className={styles.no_result_title}>No Result Found</p>
          <p className={styles.no_result_desc}>
            Looking for something? If it happened in zuri-chat,
            <br /> you can find it in search.
          </p>
          <button className={styles.startNewSearch}>Start A New Search</button>
        </div>
      ) : (
        card
      )}
    </SearchContainer>
  )

  return element
}
