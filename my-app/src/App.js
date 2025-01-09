import React from 'react';
import './App.css';
import logoImage from './images/logo.png'; // Import the logo image
import about from './about'; // Ensure the path is correct


const App = () => {
  return (
    <div>
      <section id="banner">
        <div className="navbar">
          <img src={logoImage} className="logo" alt="Logo" /> {/* Use the imported image */}
          <ul className="nav">
            <li><a href="find-more.html">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order-now">Order Now</a></li>
          </ul>
        </div>
        <div className="banner-text">
          <h1>
            ROYAL NATURAL <br />
            PVT LTD
          </h1>
          <p>-Creative Sign of Explores-</p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100084306980023">
            <img
              src="https://abettercollegepoint.com/wp-content/uploads/2022/02/facebook-logo-removebg-preview.png?w=632"
              className="social-img"
              alt="Facebook"
            />
          </a>
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            className="social-img"
            alt="Instagram"
          />
          <a href="https://twitter.com/home">
            <img
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
              className="social-img"
              alt="Twitter"
            />
          </a>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            className="social-img"
            alt="YouTube"
          />
        </div>
      </section>
    </div>
  );
};

export default App;
