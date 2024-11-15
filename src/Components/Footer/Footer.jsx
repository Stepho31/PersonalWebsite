import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.jpg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* Adding inline style to decrease the size of the footer logo */}
          <img src={footer_logo} alt="Footer Logo" style={{ maxWidth: '150px', width: '100%', height: 'auto' }} />
          <p>I am a Full-Stack developer from Texas with 2 years of experience in companies like UNOS and First Republic Bank.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Stephen Byron. All rights reserved.</p>
        <div className="footer-bottom-right">
        </div>
      </div>
    </div>
  );
}

export default Footer;
