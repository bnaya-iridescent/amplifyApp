import React from 'react';
import benzLogo from './logo_benz.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={benzLogo} className="App-logo" alt="logo" />
        <h1>Benz IT Services</h1>
        <p>Website Coming Soon</p>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: info@benzitservices.com</p>
          <p>Phone: +61 (466) 228-870</p>
          <p>Address: 6 Philip Ave, Montrose TAS</p>
        </div>

        {/* Services Offered */}
        <div className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Salesforce Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>IT Consulting</li>
            <li>Cloud Services</li>
            {/* Add more services as needed */}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
