import React from 'react'
import { useState } from 'react'
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const[Input , setInput] = useState("");
  const { loginWithRedirect  , logout, isAuthenticated , user} = useAuth0();

    let myStyle = 
    {
      color :"#fff",
      backgroundColor:"#334155",
    }


  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={myStyle}>
  <div className="container-fluid"  style={{width:"1480px" , display:'flex',marginLeft :'16px' ,}}>
    <a className="navbar-brand my-3" href="/" style={{color:"#fff" , display:"flex",justifyContent:"space-between"}}>
    NewsHarvest 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className=" navItem nav-item">
          <a className="nav-link active my-3" aria-current="page" href="/"style={{ padding:'8px 35px 8px 35px' ,display:'flex',alignItems:"center" , color :"white", justifyContent:'center'}}>Home</a>
        </li>
        <li className="nav-item navItem ">
          <a className="nav-link my-3" href="/aboutus"style={{padding:'8px 35px 8px 35px' ,display:'flex',alignItems:"center" , color :"white", justifyContent:'center'}}>About Us</a>
        </li>
        <li className="nav-item navItem ">
          <a className="nav-link my-3" href="/contactus"style={{padding:'8px 35px 8px 35px' ,display:'flex',alignItems:"center" , color :"white", justifyContent:'center'}}>Contact Us</a>
        </li>
        <li className="nav-item navItem ">
          <a className="nav-link my-3" href="/search"style={{padding:'8px 35px 8px 35px' ,display:'flex',alignItems:"center" , color :"white", justifyContent:'center'}}>Search</a>
        </li>
        {
          isAuthenticated && <li className='username'><p className='userName'>
            Hello , {user.name}
          </p>
          </li>
        }
      
        {
          isAuthenticated?
          (<div className='ButtonDiv position-absolute'>
            <li className='nav-item Button2'>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out &rarr;
            </button>
            </li>
            </div>):(<div className='ButtonDiv position-absolute'>
          <li className="nav-item Button ">
             <button onClick={() => loginWithRedirect()}>Log In &rarr;</button>
          </li>
        </div>)
        }
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar