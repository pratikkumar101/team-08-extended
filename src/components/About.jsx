import React from 'react'
import '../css/About.css'
import Footer from './Footer'
import Marquee from './Marquee'
const About = () => {
    return (
        <>
        <Marquee />
            <div className="about_us">
            
                <div class="about-section">
                    <div class="about-container">
                        <h1>About Us</h1>
                        <p class="text">
                            Adopt A Pet is a website where you find pets of different categories. Our mission (and passion) is to provide every homeless pet the chance to do what they do best: give people snoopleboops. Adopt A Pet and find your new best friend for life.</p>
                    </div>
                </div>
            </div>
            <div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h1 className='developer_heading'>Our Developers</h1>
        {/* <p class="font-italic text-muted">.</p> */}
      </div>
    </div>

    <div class="row text-center">
      
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Pratik Kumar</h5><span class="small text-uppercase text-muted"> Developer</span>
          
        </div>
      </div>
     
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Madhav Gupta</h5><span class="small text-uppercase text-muted"> Developer</span>
          
        </div>
      </div>
      
        <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Manibhushan Kumar</h5><span class="small text-uppercase text-muted"> Developer</span>
          
        </div>
      </div>
      
      {/* <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          
        </div>
      </div> */}
    

    </div>
  </div>
</div>
<Footer/>
        </>
    )
}

export default About
