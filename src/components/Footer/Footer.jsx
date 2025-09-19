import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea, cumque repudiandae saepe atque deserunt sint dicta consequatur et impedit voluptas iste exercitationem itaque eius vitae quo a rem? Assumenda?</p>

                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
             <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-333-44-2-222</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 c Tomato.com - All Right Reseved.</p>
    </div>
  )
}

export default Footer
