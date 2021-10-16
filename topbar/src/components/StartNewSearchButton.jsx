import React from 'react'
import styled from 'styled-components';
//import SearchBar from '...topbar/src/components/SearchBar'

/*const clearSearchBar = () => {
      SearchBar("");
    };*/
const Button = styled.button`
    padding: 1rem 1.5rem;
    background-color: var(--primary-color);
    color: #ffffff;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 24px;
    border: none;
    transition: 200ms;
    outline: none;
    cursor: pointer;
    border-radius: var(--radius);
`
class StartNewSearch extends React.Component {
   render () {  
       return (
    <Button /*onClick={clearSearchBar}*/ >Start New Search</Button>
    );
    } 
} 
  

export default StartNewSearch
