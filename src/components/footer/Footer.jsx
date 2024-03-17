import React from 'react'
import './Footer.css'
import {AiFillGithub,AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2024 NewsHarvest, Abhijeet Tiwari All right reserved.</p>
        <div className="footerIcons">
            <div className="icon">
                <Link to="https://github.com/itsabhi739/" target="_blank">
                <AiFillGithub className='subIcon'/>
                </Link>
            </div>
            <div className="icon">
                <Link to="https://www.linkedin.com/in/abhijeet-tiwari-a96940214/" target="_blank">
                <AiOutlineLinkedin className='subIcon'/>
                </Link>
            </div>
            <div className="icon">
                <Link to="https://www.instagram.com/itsabhi.exe/" target="_blank">
                <AiOutlineInstagram className='subIcon'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer