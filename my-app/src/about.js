// About.js
import React from 'react';
import './about.css';

const About = () => {
    return (
        <div id="about">
            <div className="title">
                <h1>About Us</h1>
                <p>Learn more about our services</p>
            </div>

            <div className="feature-box">
                <div className="features">
                    <h1>Our Features</h1>
                    <div className="feature-text">
                        <p>
                            We offer an array of unique features that help us stand out in the industry.
                            Our commitment to excellence ensures that you receive top-notch service.
                        </p>
                    </div>
                </div>
                <div className="features-img">
                    <img src="https://via.placeholder.com/500" alt="Features" />
                </div>
            </div>

            <div className="feature-box">
                <div className="features">
                    <h1>Quality Assurance</h1>
                    <div className="feature-text">
                        <p>
                            Quality is our top priority, and we have a dedicated team ensuring all our
                            services meet the highest standards.
                        </p>
                    </div>
                </div>
                <div className="features-img">
                    <img src="https://via.placeholder.com/500" alt="Quality Assurance" />
                </div>
            </div>
        </div>
    );
};

export default About;
