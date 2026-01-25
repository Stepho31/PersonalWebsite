import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Stephen Byron,</span> Full-Stack developer based in Dallas, Tx.</h1>
      <p>I am a Full-Stack developer from Dallas, Texas with 5 years of experience in multiple companies like UNOS and First Republic Bank.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a 
            href="/StephenByronResume.pdf" 
            download="Stephen_Byron_Resume.pdf" 
            style={{ color: 'white', textDecoration: 'none' }}>
            My resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;

