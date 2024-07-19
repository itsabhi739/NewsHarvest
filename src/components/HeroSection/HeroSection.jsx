import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    const HandleClick = ()=>
    {
        window.location.href = "/aboutus"
    }
  return (
    <>
    <div className='Hero'>   
    </div>
    <div className='Herotext'>
    <div className='h1'><span>|</span> <h1>Read</h1></div>
    <div className='h2'><span>|</span> <h1> Explore</h1></div>
    <div className='h3'><span>|</span> <h1>Get the bigger Picture!</h1></div>
    <div className="Herobutton" onClick={HandleClick}>Explore more &rarr;</div>
    </div>
    </>
  )
}

export default HeroSection