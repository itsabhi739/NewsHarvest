import React from 'react'
import './Contact.css'

const Contact = () => {
    let MyStyle = 
    {
        margin: '0px  54px 54px 54px', 
        width: '500px',
    }
  return (
      <div>

<section className="mb-4" style={{marginTop:"180px"}}>

        <h2 className="h1-responsive font-weight-bold text-center my-4 h1 mb-3 heading">Contact us</h2>
    
   <div className="contact_text" style={{width:"90%", textAlign:"justify" }}>
   <p className="text-center w-responsive mx-auto mb-5" style={{fontSize:"20px"}}><span class = "heading">Thank you for reaching out! </span>I'd love to take this opportunity to learn more about your team and the services you provide. Could you share some details about your team's expertise and areas of specialization? Understanding your team's strengths will help me tailor my questions and responses to better align with your goals and objectives.

Additionally, I'm curious to know more about your customer base. Who are your typical clients or target audience? Understanding their needs and preferences will enable me to provide more relevant suggestions and assistance.

Furthermore, could you provide some insight into your company's mission and values? Knowing what drives your team will allow me to offer more personalized and meaningful support.

Finally, I'd like to inquire about any specific challenges or pain points your team may be facing. By understanding your obstacles, I can offer insights and solutions to help you overcome them more effectively.

<br /><span style={{fontWeight:"bold" , fontSize:"30px" , display:'flex', flexDirection:'column' , alignContent:'center' , alignItems:'center' , justifyContent:'center'}}>Thank you for the opportunity to assist you</span>, and I look forward to learning more about your team!</p>
   </div>

    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0" style={MyStyle}>
                            <label htmlFor="name" className="">Your name *</label>
                            <input type="text" id="name" name="name" className="form-control" required style={{borderRadius:"18px"}}/>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0" style={MyStyle}>
                            <label htmlFor="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control" required style={{borderRadius:"18px"}}/>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                    <div className="col-md-12" >
                        <div className="md-form mb-0" style={{marginLeft:"54px"}}>
                            <label htmlFor="subject" className="subject">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control" style={{borderRadius:"18px"}}/>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-12">

                        <div className="md-form" style={{marginLeft:"54px"}}>
                            <label htmlFor="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" style={{borderRadius:"18px"}}></textarea>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div className="text-center text-md-left" style={{marginTop:"54px",
        marginBottom:"54px"}}>
                <a className="btn btn-primary" style ={{padding: '10px 26px 10px 26px',
    color: '#f3e7c9',
    backgroundColor: "#774023"
    ,marginLeft: '48px'}} >Send</a>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-3 text-center" style={{marginTop:"60px" , fontSize:"15px"}}>
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Kondagaon,(Chhattisgarh), India</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 62322650453</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>itsabhi739@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

    <div className="map">
<div className="heading"></div>
<h3 className = "heading"style={{display : "flex", justifyContent : "center"}}> Lookout in the map for address</h3>
</div>
<div className="map_section map_responsive d-flex justify-content-center" >
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30070.168220807176!2d81.64825393574952!3d19.594307960783404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2fcf97c3c69689%3A0xb8bde001b713a08a!2sKondagaon%2C%20Chhattisgarh%20494226!5e0!3m2!1sen!2sin!4v1708809163300!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</section>
    </div>
  )
}

export default Contact