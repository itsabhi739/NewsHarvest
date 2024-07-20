import React from 'react'
import './SmallCards.css'
const SmallCards = (props) => {
    let { title, description, url} = props;
  return (
  <>
    <div class="card smallCards">
  <div class="mb-3">
      <div class="card-body cardBody">
        <h5 class="card-title">{title}...</h5>
        <p class="card-text">{description}...</p>
        <a href={url} class="btn  button" target='_blank' >Read Article...</a>
      </div>
    </div>
  </div>
  </>
  )
}

export default SmallCards