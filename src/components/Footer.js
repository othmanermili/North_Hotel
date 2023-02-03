import React from 'react'
import "./Footer.css"
import Logo from "../asseets/Logo.png"
import {Link} from "react-router-dom"



function Footer() {
  return (
    <div className="footer_top">
        <div className="footer">
            <div className="footer_left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <img className='logo_header_footer' src={Logo} alt="" />
                </Link>
                <div style={{display:"flex",alignItems:"center",
                    justifyContent:"space-between",width:"300px"}}>
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/
                        facebook-new.png" alt="" />
                        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/
                        instagram-new.png" alt="" />
                        <img src="https://img.icons8.com/ios-glyphs/24/ffffff/
                        twitter--v1.png" alt="" />
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/
                        linkedin.png" alt="" />
                </div>
            </div>
            <div className="footer_right">
                <div style={{display:"flex",alignItems:"center",
                padding:"10px"}} className="address_footer">
                    <img src="https://img.icons8.com/material-outlined/24/
                    ffffff/marker.png" alt="" style={{marginLeft:"34px",
                    width:"19px"}} />
                    tanger,maroc,*******************
                    ********************************
                </div>
                <div style={{display:"flex",alignItems:"center",
                padding:"10px"}}>
                    <img src="https://img.icons8.com/material-outlined/24/
                    ffffff/new-post.png" alt="" style={{marginLeft:"34px",
                    width:"19px"}} />
                    othmanermili@gmail.com
                </div>
                <div style={{display:"flex",alignItems:"center",
                padding:"10px"}}>
                    <img src="https://img.icons8.com/material-outlined/24/
                    ffffff/new-post.png" alt="" style={{marginLeft:"34px",
                    width:"19px"}} />
                    212+ 666666666
                </div>
            </div>
        </div>
        <div>
            <p style={{color:"grey"}}>Copyright ©2023 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
