import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setmenu] = useState("home");
    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setmenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
                <a href="#explore-menu" onClick={() => setmenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
                <a href="#app-download" onClick={() => setmenu("mobileapp")} className={menu === 'mobileapp' ? 'active' : ''}>Mobile App</a>
                <a href="#footer" onClick={() => setmenu("contactus")} className={menu === 'contactus' ? 'active' : ''}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
