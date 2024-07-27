import React, { useState } from 'react'
import "./SearchBar.css";

const SearchBar = ({setResults}) => {
    const [input  , setInput] = useState("");


    const fetchData = async (value)=>{
       let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=a4f2093ad0674354800d8e9e4348a940");
       let parsedData = await data.json().then((data)=>{
  
        const res = data.articles.filter((art)=>
        {
          return (
               value 
             && art
             && art.title 
             && art.title.toLowerCase().includes(value)
            );
        })
       
      setResults(res);
  
      })
      
    }
  
    const handleChange = (value)=>
      {
        setInput(value);
        fetchData(value);
      }
  return (
    <>
    <div className="searchbar" >
    <h3 >Enter the Keyword to Search Anything</h3>
        <input type="text" name="input" id="SearchInput" placeholder='Search Anything Here'  value={input}
         onChange={(e)=>{
          handleChange(e.target.value);
         }
        }  />
    </div>
    </>
  )
}

export default SearchBar