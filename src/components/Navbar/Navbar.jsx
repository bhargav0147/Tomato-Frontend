import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
    const [menu, setmenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);
    return (
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setmenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
                <a href="#explore-menu" onClick={() => setmenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
                <a href="#app-download" onClick={() => setmenu("mobileapp")} className={menu === 'mobileapp' ? 'active' : ''}>Mobile App</a>
                <a href="#footer" onClick={() => setmenu("contactus")} className={menu === 'contactus' ? 'active' : ''}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
