import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './about'; // Rename to 'About' to follow React's convention
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <About />  {/* Correct JSX to use the About component */}
  </React.StrictMode>
);

reportWebVitals();
