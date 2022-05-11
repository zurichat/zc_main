import React, { useState } from "react";
import styles from "../component-styles/SearchSuggestionBar.module.css";
import cancel from "../component-assets/closedark.svg";

const sampleSuggestionArray = [
  "frequently asked questions",
  "frequently asked suggestions",
  "FAQ",
  "Understand Guest Roles in Zuri Chat"
];

const SearchSuggestionBar = ({ className, handleSearchBarClose }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  //  {`${(suggestions[0])?  suggestions[0] :"Search for anything here (ie. jobs,news and more)"}`}

  const handleSuggesions = e => {
    setValue(e.target.value);
    let newArray = sampleSuggestionArray.filter(text =>
      text.toLowerCase().match(value.toLowerCase())
    );
    setSuggestions(newArray);
  };

  return (
    <div className={`position-relative ${className}`}>
      <div className={`${styles.searchBar}`}>
        {value !== "" && (
          <p className={`position-absolute ${styles.suggested}`}>
            {" "}
            {`${suggestions[0] ? suggestions[0] : ""}`}{" "}
          </p>
        )}
        <input
          type="text"
          value={value}
          className={`w-100 ${styles.searchInput}`}
          placeholder="Search for anything here (ie. jobs,news and more)"
          onChange={handleSuggesions}
        />
        <img
          src={cancel}
          onClick={() => handleSearchBarClose()}
          className={`flex-shrink-1 ${styles.searchSvg}`}
          alt="search"
        />
      </div>
      {suggestions[0] && (
        <div className={`position-absolute w-100  ${styles.suggestions}`}>
          {suggestions.map((text, i) => (
            <p key={i}> {text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestionBar;
