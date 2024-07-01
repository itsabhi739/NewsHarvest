import React, { useState } from 'react'
import './SearchResults.css';
import SearchBar from './SearchBar';
import SearchResults from "./SearchResults";

const Search = () => {

  const [results , setResults] = useState([]);
   return (
    <>
    <div className="search-container">
    <SearchBar setResults = {setResults}/>
    {
      <SearchResults results = {results}/>
      }
    </div>
    </>
  )
}

export default Search