import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './about'; // Ensure the path is correct (capitalize 'about' to 'About')
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import SignUp from './signUp'; 
import SignIn from './SignIn';   



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home Page */}
        <Route path="/about" element={<About />} /> {/* About Page */}
        <Route path="/signUp" element={<SignUp />} /> {/* Sign Up Page */}
        <Route path="/signin" element={<SignIn />} /> {/* Sign In Page */}
      
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();




