import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NavBarCate = () => {

    let myStyle = 
    {
      borderStyle : "none",
      color :"black",
      backgroundColor:"#94a3b8",
      fontWeight:"500",
      fontSize:"16px",
      padding:"2px"
    }

    function ChangeColor()
{
    let button = document.querySelectorAll(".navButton");
    button.style.backgroundColor = "#94a3b8";
}

    return (
      <div className='container' style={{backgroundColor:"#94a3b8"}}>
        <ul className="nav nav-tabs  d-flex justify-content-center ">
  <li className="nav-item" >
    <Link className='nav-link' aria-current="page" to="/business"><button type="button" className='navButton' value={"button"}  style={myStyle} >Business</button></Link>
    {/* onClick={ChangeColor} */}
  </li>
  <li className="nav-item">
    <Link className="nav-link " aria-current="page" to="/entertainment"><button type="button" style={myStyle}>Entertainment</button></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " aria-current="page" to="/health"><button type="button" style={myStyle}>Health</button></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " aria-current="page" to="/science"><button type="button" style={myStyle}>Science </button></Link>
  </li>
  <li className="nav-item">
   <Link className="nav-link " aria-current="page" to="/sports"> <button type="button" style={myStyle}>Sports</button></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " aria-current="page" to="/technology"><button type="button" style={myStyle}>Technology</button></Link>
  </li>
 </ul>

      </div>
    )
  }


export default NavBarCate


  