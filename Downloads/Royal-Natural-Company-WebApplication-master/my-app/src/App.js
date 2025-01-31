import React, { useState } from "react";
import './App.css';
import logoImage from './images/logo.png'; 

import blueImage from './images/blue.png'; 
import whiteImage from './images/white1.png'; 

import { Card, CardContent } from "./components/card";

const products = [
  {
    name: "Alovera Hand wosh",
    image: blueImage,
  },
  {
    name: "Alovera Hand wosh",
    image: blueImage,
  },
  {
    name: "Alovera Hand wosh",
    image: whiteImage,
  },
  {
    name: "Alovera Hand wosh",
    image: whiteImage,
  },
];

const App = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false); // State to manage About section visibility

  const toggleAboutSection = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    <div>
      {/* Banner Section */}
      <section id="banner">
        <div className="navbar">
          <img src={logoImage} className="logo" alt="Logo" />
          <ul className="nav">
            <li><a href="find-more.html">Home</a></li>
            <li><a href="#about" onClick={toggleAboutSection}>About</a></li>
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

     

      {/* Product Section */}
      <section id="products">
        <h2 className="section-title">Our Products</h2>
        <div className="product-column-container">
          {products.map((product, i) => (
            <Card key={i} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <CardContent>
                <h3 className="product-title">{product.name}</h3>
                <button className="btn">View Details</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-column-container">
         
              <div className="contact-details">
                <h3>Our Address</h3>
                <p>
                  Royal Natural Pvt Ltd,<br />
                  Kaduwela, Colombo District, Sri Lanka.
                </p>
                <h3>Phone</h3>
                <p>+94 123 456 789</p>
                <h3>Email</h3>
                <p>thanuka@royalnatural.lk</p>
              </div>
          

      
              <div className="contact-form">
                <h3>Get In Touch</h3>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Royal Natural Pvt Ltd. All rights reserved.</p>
        <p>
          <a href="#about">About Us</a> | <a href="#contact">Contact</a> | <a href="#products">Products</a>
        </p>
      </footer>
    </div>
  );
};

export default App;


