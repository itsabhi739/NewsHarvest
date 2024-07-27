import React from 'react'
import "./SearchResults.css"

const SearchResults = ({results}) => {
  return (
    <>
    <div className="searchResults">
    {
        results.map((res , id)=>
        {
            return <div key ={id} > <a href={res.url}>{res.title}</a> </div>
        }) 

    }
        
    </div>
   
    </>
  )
}

export default SearchResults