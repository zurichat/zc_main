import { useState, useEffect } from "react";
import styles from "../styles/BigModal.module.css";
import cancel from "../assets/images/cancel.svg";
import SearchValue from "./SearchValueComponent";
import Styled from "styled-components";
import noImg from "../assets/images/avatar_vct.svg";
import { NoResult } from "./SearchNotFound";
import { plugins } from "../utils/topbar-api";

export const BigModal = ({
  onClose,
  inputValue,
  result,
  isLoadingUp,
  clearSearch
}) => {
  const [results, setResult] = useState(result);
  const [isLoading, setLoading] = useState(isLoadingUp);

  const pluginName = window.location.href;
  const newName = pluginName.split("/");

  const exactPlugin = plugins.find(
    plugin => newName[3] === plugin.name || newName[3] === plugin.name + "#"
  );

  useEffect(() => {
    setResult(result);
  }, [result]);

  useEffect(() => {
    setLoading(isLoadingUp);
  }, [isLoadingUp]);
  let i = 0;

  const sidebar = document.getElementById(
    "single-spa-application:@zuri/sidebar"
  );

  const tobBar = document.getElementById("single-spa-application:@zuri/topbar");
  const width = sidebar.clientWidth;
  const top = tobBar.clientHeight;

  const SearchContainer = Styled.div`
    background-color: white;
    position: fixed;
    top: ${top}px;
    left: ${width}px;
    right: 0;
    overflow: auto;
    height: 100vh;
    z-index: 2000;
    
  `;
  const StyledInput = Styled.input`
    outline: none;
    border: none;  
    padding: 3px;
    width: 100%;
    border-bottom: 2px solid #00b87c;
  `;

  let card = results.map((item, i) => (
    <div key={i} className={styles.resultCard}>
      <SearchValue
        destination_Url={item?.destination_url}
        src={noImg}
        title={item?.title}
        onClose={onClose}
        content={item?.content}
        created_at={item?.created_at}
        plugin_name={exactPlugin.name}
      />
    </div>
  ));
  const element = (
    <SearchContainer className="bigModal">
      <div className={styles.Header}>
        <p className={styles.header_p}>{`Search result for "${inputValue}"`}</p>

        <button
          className="btn"
          onClick={() => onClose()}
          style={{ position: "absolute", top: "15px", right: "20px" }}
        >
          <img src={cancel} alt="close" />
        </button>
      </div>

      {result.length < 1 ? (
        <NoResult onClean={() => clearSearch()} />
      ) : isLoading ? (
        <p
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: `${top}`
          }}
        >
          loading...
        </p>
      ) : (
        card
      )}
    </SearchContainer>
  );

  return element;
};
