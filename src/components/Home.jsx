import React from 'react'
import '../css/home.css'
import Footer from './Footer'
import Steps from './Steps'
import StepsData from './StepsData'
import {Link} from 'react-router-dom'
import Marquee from './Marquee'
const Home = () => {
  // const img = ""
  return (
    <>
    <Marquee/>
      <div className="poster">
        <div className="poster-content">
          <div className="poster-heading">
            <h1>FIND YOUR NEW BEST FRIEND!!</h1>
          </div>
          <div className="poster-quote">
            <p><q>They [pets] never talk about themselves but listen to you while you talk about yourself, and keep up an appearance of being interested in the conversation.
            </q><br /><cite><strong> – Jerome K. Jerome</strong></cite></p>
          </div>
          <div className="join-btn">
            <Link to="/joinus" class="button"><span>Join Us! </span></Link>
          </div>
        </div>
      </div>
      <div className="how-to">
        <div className="how-to-heading-content">


          <div className="how-to-heading">
            <h1>How to Adopt ??</h1>
          </div>
          <div className="how-to-content">
            <p>Your local animal shelter or rescue organization can help you find the right match for your family. There are also breed-specific rescue groups for every breed of dog, including "designer" or "hybrids" like labradoodles and puggles. The Shelter Pet Project can help you find a great dog or puppy in your area!</p><br />
            <div className="how-to-content-quote">
              <p>
                <blockquote> <q>Dogs have given us their absolute all. We are the center of their universe. We are the focus of their love and faith and trust. They serve us in return for scraps. It is without a doubt the best deal man has ever made.</q><br /> <span><strong>– Roger A. Caras</strong></span></blockquote></p>
            </div>
          </div>
        </div>
      </div>

      <div className="steps">
      <div className="steps-heading">
        <h1>Your Pet Adoption Journey With Us</h1>
      </div>
        <div className="step">
          {StepsData.map(function ncard(value, index) {
            return (
              <Steps key={index} image={value.image} step={value.step} instruction={value.instruction} />
            )
          })}
        </div>
      </div>
      <div className="footer-section">
        <Footer/>
      </div>
    </>
  )
}

export default Home