import React, { Component } from 'react'

const NewsItem = (props) => {
  
    let { title,imageUrl, url, publishedAt, author ,source } = props;
    let myStyle =
    {
      backgroundColor: "#774023",
      color: "#f3e7c9"
    }
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ?
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=2048x2048&w=is&k=20&c=ohMtddTt7BppCvEUNGqJ9FRDyJqAdkzonVQ7KmWbTrg=" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger' style = {{zIndex:'1',
          left:'90%'}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text"><small className="text-body-secondary"> By {author ? author : "Unknown"} on {new Date(publishedAt).toTimeString()}</small></p>
            <a href={url} target='_blank' className="btn btn-sm" style={{backgroundColor:'black',
          color:"white"}} >Read More..</a>
          </div>
        </div>
      </>
    )
  }


export default NewsItem



