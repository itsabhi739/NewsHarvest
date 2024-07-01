import React from 'react'

const AboutUs = () => {
  let myStyle = 
    {
      color :"#f3e7c9",
      backgroundColor:"#774023"
    }
  return (
    
  
      <div>
        <section className="py-3 py-md-5 py-xl-8">
  <div className="container" style={{marginTop:"180px"}}>
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5" style={{height:634}}>
        <img className="img-fluid" loading="lazy" srcSet="NewsHarvest.gif" alt="Logo"/>

        <div className="container" style={{marginLeft : "64px"}}>

        </div>

      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="h1 mb-3 heading">What Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">"A news organization passionate about keeping people informed and connected with global events. Our application aggregates news from various reputable sources worldwide, allowing users to explore articles categorized by their topics of interest. Our goal is to provide a convenient and comprehensive platform for accessing diverse perspectives on current affairs."</p>
            <p className="mb-5">This a Web Appication that provides the way to read the news from different sources effectively and conventionally
            Looking for more several updates in the future
            help us to enhance the fuctionality even more </p>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3">Versatile Brand</h4>
                    <p className="text-secondary mb-0">We are crafting a digital method that subsists sharing knowledge accross all format.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3">Digital Agency</h4>
                    <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container my-3" style={{color:'black'}}>
<h2 className='text-center heading'>FAQ's </h2>
    <div className="accordion" id="accordionPanelsStayOpenExample" >
  <div className="accordion-item">
    <h2 className="accordion-header"style={myStyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
      What we do?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" style={{color:'#774023'}} >
      <div className="accordion-body" style={{color:'#774023',
    backgroundColor:"#f3e7c9"}}>
        <strong>We help us gain knowledge all around the world </strong> Empowering with comprehensive insights, our website aggregates data from diverse sources, offering a holistic view of current events across India. Stay informed and enlightened about the latest happenings, trends, and developments, enabling deeper understanding and informed decision-making. Your gateway to knowledge, tailored for the Indian context. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"style={myStyle}>
       What are we?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" style={myStyle}>
      <div className="accordion-body" style={{color:'#774023',
    backgroundColor:"#f3e7c9"}}>
        <strong>We are a news organization</strong> We are a pioneering news organization dedicated to delivering comprehensive coverage of India's events by sourcing data from diverse channels. Our mission is to provide insightful analysis and facilitate a deeper understanding of the country's happenings, empowering informed citizens with knowledge to navigate their world effectively.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header"style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"style={myStyle}>
       How we do?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" style={myStyle}>
      <div className="accordion-body"style={{color:'#774023',
    backgroundColor:"#f3e7c9"}}>
        <strong>Gather News from Different Resources</strong> Utilizing advanced data gathering techniques, we scour various resources across multiple categories to curate a rich tapestry of news from India. Employing algorithms and user-friendly interfaces, we present this information in an easily accessible manner, tailored to individual preferences. Our platform is designed to empower users with comprehensive insights, enabling them to stay informed about the latest developments in India with efficiency and ease.
      </div>
    </div>
  </div>
</div>

    </div>
      </div>



    )
  }
    

export default AboutUs
