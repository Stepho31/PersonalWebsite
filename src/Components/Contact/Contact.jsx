// export default Contact;
import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import linkedin_icon from '../../assets/LinkedinLogo.jpg';
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();
    formPayload.append("access_key", "95827325-e043-47ec-8a4a-d3cdc8bac509");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    const object = Object.fromEntries(formPayload);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      // Use toast to show the response message
      if (res.success) {
        toast.success(res.message);
        // Clear form data after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Form submission error. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div id='contact' className='contact'>
      <ToastContainer />
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>stephenbyron31@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>(405)-962-8772</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>TX, United States</p>
                </div>
                <div className="contact-detail">
                <a href="https://www.linkedin.com/in/stephen-byron-045646119/" target="_blank" rel="noopener noreferrer" className="linkedin-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src={linkedin_icon} alt="" /> 
                  <p style={{ margin: 0 }}>LinkedIn</p>
                </a>
              </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
