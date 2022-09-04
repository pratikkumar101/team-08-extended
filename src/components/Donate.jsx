import React from 'react'
import '../css/Donate.css'
import Footer from './Footer';
import Marquee from './Marquee';
const Donate = () => {
    return (
        <>
        <Marquee/>
        <div className="donation">
        <div className="donate">
            <div className="panel pricing-table">

            <div className="pricing-plan">
                    {/* <img src="icons/icon3.png" alt="" className="pricing-img" /> */}
                    <h2 className="pricing-header">One Time</h2>
                    <ul className="pricing-features">
                        <li className="pricing-features-item">Dedicated</li>
                        <li className="pricing-features-item pfi">"Animal protection is education to humanity."</li>
                    </ul>
                    <span className="pricing-price">Custom</span>
                    <a href="https://rzp.io/l/ssvTP7N" className="pricing-button">Donate Now</a>
                </div>

                

                

            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Donate;