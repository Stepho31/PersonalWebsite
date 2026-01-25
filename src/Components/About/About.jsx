import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.img';
import swiftui_logo from '../../assets/swift.png';
import dotnet_logo from '../../assets/net.png';
import sql_logo from '../../assets/SQL.png';
import python_logo from '../../assets/Python.png';
import js_logo from '../../assets/javascript.png';

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
          {/* Replacing progress bars with logos */}
          <div className="about-skills">
            <div className="about-skill">
              <img src={swiftui_logo} alt="SwiftUI Logo" style={{ width: '50px', height: 'auto' }} />
              <p>SwiftUI</p>
            </div>
            <div className="about-skill">
              <img src={dotnet_logo} alt=".NET Logo" style={{ width: '50px', height: 'auto' }} />
              <p>.NET</p>
            </div>
            <div className="about-skill">
              <img src={sql_logo} alt="SQL Logo" style={{ width: '50px', height: 'auto' }} />
              <p>SQL</p>
            </div>
            <div className="about-skill">
              <img src={python_logo} alt="Python Logo" style={{ width: '50px', height: 'auto' }} />
              <p>Python</p>
            </div>
            <div className="about-skill">
              <img src={js_logo} alt="JavaScript Logo" style={{ width: '50px', height: 'auto' }} />
              <p>JavaScript</p>
            </div>
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
  );
}

export default About;
