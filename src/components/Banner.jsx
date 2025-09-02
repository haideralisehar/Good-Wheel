import React, { useState } from "react";
import "../styling/Banner.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";

const Banner = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>Let’s book your trips!</h1>
          <p>Choose from over 2+ million hotels worldwide!</p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          {/* Destination */}
          <div className="search-box">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Enter a destination" />
          </div>

          {/* Dates */}
          <div className="search-box date-box">
            <FaCalendarAlt className="icon" />
            <div className="date-inputs">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  if (toDate && e.target.value > toDate) {
                    setToDate(""); // reset if invalid
                  }
                }}
              />
              <span className="date-separator">-</span>
              <input
                type="date"
                value={toDate}
                min={fromDate} // ✅ ensures "To" is not earlier than "From"
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          {/* Rooms / Guests */}
          <div className="search-box">
            <FaUsers className="icon" />
            <input type="text" placeholder="1 Room, 2 Adults" />
          </div>

          {/* Search Button */}
          <button className="search-btn">
            <FaSearch className="btn-icon" /> Search Hotels
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
