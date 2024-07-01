import React from 'react'
import { useState } from 'react'


const Navbar = () => {
  const[Input , setInput] = useState("");

    let myStyle = 
    {
      color :"#f3e7c9",
      backgroundColor:"#774023",
    }


  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={myStyle}>
  <div className="container-fluid"  style={myStyle}>
    <a className="navbar-brand my-3" href="/" style={myStyle}>
    <img src="Logo.png" alt="Logo" srcset="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active my-3" aria-current="page" href="/"style={myStyle}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-3" href="/aboutus"style={myStyle}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-3" href="/contactus"style={myStyle}>Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-3" href="/search"style={myStyle}>Search</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar