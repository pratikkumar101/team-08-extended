import React from 'react'
import emailjs from 'emailjs-com'

import '../css/Joinus.css'
import Marquee from './Marquee';
import Footer from './Footer';
const Joinus = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_2ocxiru', 'template_jdy4ysj', e.target, 'KWPxi2M9F-Uif6ep5').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (

<>
<Marquee/>
<section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>Join US</h2>

          </div>
          <div className="contact-form-wrapper" style={{backgroundColor: "#46a9c4"}}>
            <form onSubmit={sendEmail}>
              {/* <h2>Contact</h2> */}
              <div className="form-item">
                <input type="text" name="name" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="gender" required />
                <label>Gender:</label>
              </div>
              <div className="form-item">
                <input type="text" name="user_number" required />
                <label>Phone Number:</label>
              </div>
              <div className="form-item">
                <input type="email" name="user_email" required />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="join" required />
                <label>Why you want to join us?:</label>
              </div>
              <button type="submit" className="submit-btn">Send</button>
              
            </form>
          </div>
        </div>
        {/* <Faq/> */}
      </section>
      <Footer/>
</>
    )
}

{/* <div>
<h1>Contact Form</h1>
<form onSubmit={sendEmail}>
    <label >Name</label>
    <input type="text" name="name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Male</label>
    <input type="radio" name="gender" />
    <label>Female</label>
    <input type="radio" name="gender" />
    <label>Why we want to join us?</label>
    <input type="text" name="join" />
    <label > Message</label>
    <textarea rows='4' name="message" />
    <input type="submit" value='Send' />
</form>
</div>  */}
     


export default Joinus