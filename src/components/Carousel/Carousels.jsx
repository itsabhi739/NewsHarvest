import React from 'react'
import '../Carousel/Carousels.css'


// import styled from "styled-components";
const Carousels = (props) => {
    let {title , Img , url , description} = props
   
  return (
   
    <div className="containerCarousel">
        <div className="wrapper">
                    <div className="banner-image">
                        <figure className='caroImg'>
                            <img src={!Img ?
            "https://images.unsplash.com/photo-1721146378270-1b93839f7ae7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : Img} alt={title} className='CaroImg'/>
                        </figure>
                    </div>
                    <h1 className='CaroTitle'><a href={url}>{title}</a></h1>
                    <p className='CaroText'>{description}</p>
                </div>

    </div>
    
  )
}

export default Carousels

// const Wrapper = styled.section``