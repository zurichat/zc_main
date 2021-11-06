import styles from "../styles/SearchAutocomplete.module.css";

const searchAutocomplete = props => {
  const {
    suggestions,
    inputValue,
    onSelectSuggestion,
    displaySuggestions,
    selectedSuggestion
  } = props;

  if (inputValue && displaySuggestions) {
    if (suggestions.length > 0) {
      return (
        <ul className={styles.suggestionsList}>
          {suggestions.map((suggestion, index) => {
            const isSelected = selectedSuggestion === index;
            const classname = `${styles.suggestion} ${
              isSelected ? "selected" : ""
            }`;
            return (
              <li
                key={index}
                className={classname}
                onClick={() => onSelectSuggestion(index)}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return <></>;
};

export default searchAutocomplete;
