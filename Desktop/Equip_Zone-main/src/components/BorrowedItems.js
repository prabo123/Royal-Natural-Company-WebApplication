import React from "react";
import "./BorrowedItems.css"; 

const App = () => {
  const borrowedItems = [
    { date: "07/01/2025", name: "Cricket Hard ball Bat", image: "hardbat.jpg" },
    { date: "10/01/2025", name: "Netball", image: "netball.jpg" },
  ];

  return (
    <div className="app">
      <div className="main-content">
        {/* Borrowed Items Section */}
        <div className="borrowed-items">
          <h2>Borrowed Items</h2>
          <div className="items-list">
            {borrowedItems.map((item, index) => (
              <div key={index} className="item-card">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <p className="item-date">{item.date}</p>
                  <p className="item-name">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src="BIU.png" // Replace this with your actual image file
            alt="Sports"
            className="sports-image"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
