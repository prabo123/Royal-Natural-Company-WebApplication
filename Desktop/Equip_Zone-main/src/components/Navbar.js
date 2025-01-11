// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">Equip Zone</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/borrowed">Borrowed Items</a></li>
                <li><a href="/ReserveEquipment">Remaining Items</a></li>
            </ul>
            <div className="navbar-buttons">
                <button className="login-button">Login</button>
                <button className="signup-button">Signup</button>
            </div>
        </div>
    );
};

export default Navbar;

