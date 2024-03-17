import React, { useState , useEffect } from 'react'
import './Search.css';

const Search = () => {
  
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4f2093ad0674354800d8e9e4348a940`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setArticle(data)
      setFilterArticle(data)
    })
    .catch (err=>console.log(err))
  }, [])

  //States
  const[article , setArticle] = useState([]);
  const[filterArticle , setFilterArticle] = useState([]);
  let InputEvent = (value)=>
  {
    let values  = Object.values(filterArticle);
  }
  return (
    <>

    <div className="search_top">
    <div className="searchbar" >
    <h3 >Enter the Keyword to Search Anything</h3>
        <input type="text" name="input" id="SearchInput" placeholder='Search Anything Here' onChange={InputEvent}  />
    </div>
    </div>

    <div className="search_results">
      
    </div>

      </>
  )
}

export default Search