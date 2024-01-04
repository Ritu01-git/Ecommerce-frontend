import React from 'react'
import './Footer.css';
import footer_logo from '../Assests/logo_big.png';
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-img">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social-icon">
        <div className="icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copy Right @ 20223</p>
      </div>
    </div>
  )
}

export default Footer