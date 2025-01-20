import React from "react";
import './App.css';
import logoImage from './images/logo.png'; // Import the logo image
import { Link } from 'react-router-dom'; // Import Link for navigation

const AboutPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <section>
        <div className="navbar">
          <img src={logoImage} className="logo" alt="Logo" /> {/* Use the imported image */}
          <ul className="nav">
            <li><a href="/">Home</a></li>
            <li><Link to="/about">About</Link></li> {/* Link to About page using React Router */}
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order-now">Order Now</a></li>
          </ul>
        </div>
        </section>

      {/* Hero Section */}
      <section id="about" style={{ backgroundImage: "url('./alovera.jpg')", backgroundSize: "cover", backgroundPosition: "center", color: "#fff", textAlign: "center", padding: "50px 20px" }}>
        <h1>About Us</h1>
        <p>
          We are here to provide unique and immersive tourism and hospitality experiences
          in the stunning Southern Province of Sri Lanka.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Meet Our Team</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
          {[1, 2, 3].map((_, index) => (
            <div key={index} style={{ border: "1px solid #ddd", borderRadius: "8px", width: "300px", padding: "20px", textAlign: "center" }}>
              <img src={`./alovera2.jpg${index + 1}.jpg`} alt="Team Member" style={{ width: "100%", borderRadius: "8px" }} />
              <h3>Team Member {index + 1}</h3>
              <p>A short description about the team member's role.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" style={{ padding: "40px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
        <h2>Reviews & Feedbacks</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
          {[1, 2, 3].map((_, index) => (
            <div key={index} style={{ border: "1px solid #ddd", borderRadius: "8px", width: "300px", padding: "20px" }}>
              <h3>Reviewer {index + 1}</h3>
              <p>"This is a sample review. The experience was amazing!"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Form */}
      <section id="feedback" style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Add Your Feedback</h2>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", maxWidth: "400px", margin: "0 auto" }}>
          <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          <input type="email" placeholder="Your Email" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          <textarea placeholder="Your Feedback" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", minHeight: "100px" }} />
          <button type="submit" style={{ background: "#003366", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ background: "#003366", color: "#fff", textAlign: "center", padding: "20px" }}>
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default AboutPage;


