import React from 'react'
import Button from '@material-ui/core/Button/Button.js'
import Logo from "../asseets/Logo.png"
import "./Header.css"
import {Link} from "react-router-dom"



function Header() {
  return (
    <div className='header'>
        <Link to="/" style={{textDecoration:"none"}}>
          <img   className='header_logo'    src={Logo} alt="logo de site" />
        </Link>
        <div className="header_center">
            <div className="center_button"><Link to="/" className='links' style={{textDecoration:"none"}}>Home</Link></div>
            <div className="center_button"><Link to="/search" className='links' style={{textDecoration:"none"}}>Rooms & Suits</Link></div>
            <div className="center_button"><Link to="/search" className='links' style={{textDecoration:"none"}}>offers</Link></div>
            <div className="center_button"><Link to="/" className='links' style={{textDecoration:"none"}}>My Bookings</Link></div>
            <div className="center_button"><Link to="/" className='links' style={{textDecoration:"none"}}>Profile</Link></div>
        </div>
        <div className="header_right">
          <div className="headerContainer">
            <Link to="/authentification" style={{textDecoration:"none"}}><Button className="header_button">Sign Up</Button></Link>
          </div>
        </div>
    </div>
  )
}

export default Header
