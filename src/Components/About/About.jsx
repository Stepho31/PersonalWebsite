import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
        <div className="about-para">
            <p>I am a skilled Software Developer with a strong background in creating innovative solutions across various industries. My expertise spans a wide range of technologies, including SwiftUI, .NET, SQL, and Python, allowing me to deliver high-quality applications that meet business goals.</p>
        </div>
            <div className="about-skills">
            <div className="about-skill"><p>SwiftUI</p><hr style={{width:"85%"}} /></div>
            <div className="about-skill"><p>.NET</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>SQL</p><hr style={{width:"75%"}} /></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"65%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"75%"}} /></div>
        </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
