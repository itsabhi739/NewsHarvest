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
    <div className='join'><h1 className='joining' >Join the </h1></div>
    <div className='conversation'><h2 className='conver' >conversation! </h2></div>
    <div className='conversation'><p className='text'>Newsharvest brings the world’s top headlines to your fingertips. Dive into a seamless news experience, where stories are curated, categorized, and delivered in real-time. Explore the news that matters most to you, all in one place.  </p></div>

    <div className='h2'><span>|</span> <h1> Explore</h1></div>
    <div className='h3'><span>|</span> <h1>Get the bigger Picture!</h1></div>
    <div className="Herobutton" onClick={HandleClick}>Explore more &rarr;</div>
    </div>
    </>
  )
}

export default HeroSection