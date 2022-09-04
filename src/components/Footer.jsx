import React from 'react'
import "../css/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer">

                <a href="/"><img src="photos/logo.png" alt="" /></a>
                <div className="frow">
                    <div className="fcol1 fcol">
                        <h2>About Us</h2>
                        <blockquote><q>Our mission (and passion) is to provide every homeless pet the chance to do what they do best: give people snoopleboops.</q></blockquote>
                    </div>
                    <div className="fcol2 fcol cate">
                        <h2>Pet Categories</h2>
                        <ul>
                            <Link to="/pets"><li>Pets</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/shop"><li>Shop</li></Link>
                            <Link to="/donate"><li>Donate</li></Link>
                            <Link to="/joinus"><li>Join</li></Link>
                        </ul>
                    </div>
                    <div className="fcol3 fcol">
                        <h2>Contact</h2>
                        <address>Address: Landran, Mohali<br />Punjab<br />Pin : 140307<br />Ph: XXXX-XXXXXX<br />Email: example@gmail.com</address>
                    </div>
                    <div className="fcol4 fcol">
                        <h2>Social Links</h2>
                        <ul>
                            <a href="/"><li><FacebookIcon /></li></a>
                            <a href="/"><li><InstagramIcon /></li></a>
                            <a href="/"><li><TwitterIcon /></li></a>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2022 Adopt A Pet. All Right Reserved. </p>
                </div>
            </div>
        </>
    )
}

export default Footer