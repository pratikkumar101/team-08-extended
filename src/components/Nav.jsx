import React, { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import '../css/Nav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiShoppingBag } from 'react-icons/gi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import ShopData from './Data/ShopData'
// import { Link, Outlet } from "react-router-dom"
const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const response = ShopData;
    return (
        <>
            <div className="nav">
                <div className="nav_logo">

                    <Link className="nav_element" to="/"><h1>Pet-Buddy</h1></Link>
                </div>
                <div className="nav_items">
                    <NavLink className="nav_element nav_item" to="/">Home</NavLink>
                    <NavLink className="nav_element nav_item" to="/pets">Pets</NavLink>
                    <NavLink className="nav_element nav_item" to="/shop">Shop</NavLink>
                    <NavLink className="nav_element nav_item" to="/about">About</NavLink>
                    <NavLink className="nav_element nav_item" to="/contact">Contact</NavLink>
                    <NavLink className="nav_element nav_item" to="/faqs">FAQs</NavLink>

                    {/* <Link className="nav_element nav_item" to="/donate">Donate</Link> */}
                </div>

                {/* 2nd menu part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <NavLink className="nav_menu menu_item" to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</NavLink>
                    <NavLink className="nav_menu menu_item" to="/pets" onClick={() => setShowMediaIcons(!showMediaIcons)}>Pets</NavLink>
                    <NavLink className="nav_menu menu_item" to="/about" onClick={() => setShowMediaIcons(!showMediaIcons)}>About</NavLink>
                    <NavLink className="nav_menu menu_item" to="/contact" onClick={() => setShowMediaIcons(!showMediaIcons)}>Contact</NavLink>
                    <NavLink className="nav_menu menu_item" to="/shop" onClick={() => setShowMediaIcons(!showMediaIcons)}>Shop</NavLink>
                    <NavLink className="nav_menu menu_item" to="/donate" onClick={() => setShowMediaIcons(!showMediaIcons)}>Donate</NavLink>
                </div>


                <div className="nav_side">
                    <div className="nav_cart">
                        <Link to="/cart">
                            <GiShoppingBag /><sup> 1 </sup>
                        </Link>
                    </div>
                    <div className="nav_donate">
                        <Link className="nav_element" to="/donate">DONATE</Link>
                    </div>
                </div>
                <div className="nav_hamburger nav_element">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav