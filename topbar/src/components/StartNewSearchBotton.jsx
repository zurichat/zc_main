import React from "react"
import styled from "styled-components"
import SearchBar from "./SearchBar"

const clearSearchBar = () => {
  SearchBar("")
}
const buttonStyle = styled.button`
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  color: #ffffff;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  border: 0;
  transition: 200ms;
  outline: none;
  cursor: pointer;
  border-radius: var(--radius);
`
class startNewSearch extends React.Component {
  render() {
    return <button onClick={clearSearchBar}>Start New Search</button>
  }
}

export default startNewSearch
