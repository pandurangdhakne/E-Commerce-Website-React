import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="40px" />
            <p>Reblify</p>
        </div>

        <ul className='footer-links'>

                     {/* <li> Products </li>
                     <li> Offices </li>  */}
                    <Link style={{textDecoration:"none"}} to={"/about"}>  <li> About </li> </Link>
                     {/* <li> Company </li>                       */}
                    <Link style={{textDecoration:"none"}} to={"/contact"}>  <li> Contact </li> </Link>

        </ul>

        <div className='footer-social-icon'>
<div className="footer-icon-container instaHover">
<img src={instagram_icon} alt="" height="30px" />
</div>
<div className="footer-icon-container facebookHover">
<img src={facebook_icon} alt="" height="30px"  />
</div>
<div className="footer-icon-container whatsappHover">
<a href="https://wa.me/7758074123" target="_blank"> <img src={whatsapp_icon} alt=""  height="30px" /> </a>


</div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright from Reblify @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer