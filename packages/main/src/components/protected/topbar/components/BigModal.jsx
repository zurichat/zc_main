import { useState, useEffect } from "react";
import styles from "../styles/BigModal.module.css";
import cancel from "../assets/images/cancel.svg";
import SearchValue from "./SearchValueComponent";
import Styled from "styled-components";
import noImg from "../assets/images/avatar_vct.svg";
import { NoResult } from "./SearchNotFound";
import { plugins } from "../utils/topbar-api";
import { FaCaretDown } from "react-icons/fa";

export const BigModal = ({
  onClose,
  inputValue,
  result,
  isLoadingUp,
  clearSearch,
  searchType
}) => {
  const [results, setResult] = useState(result);
  const [isLoading, setLoading] = useState(isLoadingUp);
  const [searchFocus, setSearchFocus] = useState(searchType);

  // const pluginName = window.location.href;
  // const newName = pluginName.split("/");

  // const exactPlugin = plugins.find(
  //   plugin => newName[3] === plugin.name || newName[3] === plugin.name + "#"
  // );

  useEffect(() => {
    setResult(result);
  }, [result]);

  useEffect(() => {
    setLoading(isLoadingUp);
  }, [isLoadingUp]);
  let i = 0;

  const getResultCount = type => {
    return results[type].length;
  };

  const mainContentDivs = document.querySelectorAll("#workspace-all > div");

  const width =
    mainContentDivs.length === 3
      ? mainContentDivs[0]?.clientWidth + mainContentDivs[1]?.clientWidth
      : mainContentDivs[0]?.clientWidth;

  const topBar = document.getElementById("topBarWrapper");
  const top = topBar.clientHeight;

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

  const messageCards = result ? (
    results.messages.map((item, i) => (
      <div key={i} className={styles.resultCard}>
        <SearchValue
          destination_Url={item.url}
          src={item.profile_img}
          title={item.sender}
          onClose={onClose}
          content={item.body}
          created_at={"12-11-2021"}
          plugin_name={item.channel}
        />
      </div>
    ))
  ) : (
    <></>
  );

  const filesCard = results.files.map((item, i) => (
    <div key={i} className={styles["file-card"]}>
      <img src={"https://placehold.jp/3e4170/ffffff/100x100.png?text=DOCX"} />
      <div>
        <p>{item.filename}</p>
        <p>
          Shared by {item.sender} on {item.created_at}
        </p>
      </div>
    </div>
  ));

  const peopleCard = results.people.map((item, i) => (
    <div key={i} className={styles["people-card"]}>
      <img src={item.profile_img} />
      <div>
        <p>{item.name}</p>
        <p>{item.title}</p>
        <p>{item.about}</p>
      </div>
    </div>
  ));

  const channelsCard = results.channels.map((item, i) => (
    <div key={i} className={styles["channel-card"]}>
      <div>
        <p>{item.name}</p>
        <p>{item.about}</p>
        <p>{item.members} members</p>
      </div>
      <div>
        <button>Join</button>
      </div>
    </div>
  ));

  const tabs = {
    messages: messageCards,
    files: filesCard,
    people: peopleCard,
    channels: channelsCard
  };

  const element = (
    <SearchContainer
      className="bigModal"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className={styles.Header}
        style={{
          height: "44px",
          position: "fixed",
          left: width,
          right: 0
        }}
      >
        <p className={styles.header_p}>{`Search result for "${inputValue}"`}</p>

        <button
          type="click"
          className="btn"
          onClick={() => onClose()}
          style={{ position: "absolute", top: "15px", right: "20px" }}
        >
          <img src={cancel} alt="close" />
        </button>
      </div>

      <div className={styles["filter-search-type"]}>
        <span
          onClick={() => setSearchFocus("messages")}
          style={{
            borderBottom: `${
              searchFocus === "messages" ? "2px solid #00b87c" : "none"
            }`
          }}
        >
          Messages <span>{getResultCount("messages")}</span>
        </span>

        <span
          onClick={() => setSearchFocus("files")}
          style={{
            borderBottom: `${
              searchFocus === "files" ? "2px solid #00b87c" : "none"
            }`
          }}
        >
          Files <span>{getResultCount("files")}</span>
        </span>

        <span
          onClick={() => setSearchFocus("people")}
          style={{
            borderBottom: `${
              searchFocus === "people" ? "2px solid #00b87c" : "none"
            }`
          }}
        >
          People <span>{getResultCount("people")}</span>
        </span>

        <span
          onClick={() => setSearchFocus("channels")}
          style={{
            borderBottom: `${
              searchFocus === "channels" ? "2px solid #00b87c" : "none"
            }`
          }}
        >
          Channels <span>{getResultCount("channels")}</span>
        </span>
      </div>

      <div style={{ padding: "3rem 0", marginTop: "50px" }}>
        <div>
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
            tabs[searchFocus]
          )}
        </div>
      </div>
    </SearchContainer>
  );

  return element;
};
