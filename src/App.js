import React, { useState } from 'react';
import "./App.css";
import benzLogo from './logo_benz.jpg'; // Import your logo file

function App() {

  const [service, setService] = useState('');
  const [otherService, setOtherService] = useState('');

  const handleServiceChange = (event) => {
    const selectedService = event.target.value;
    setService(selectedService);
    if (selectedService !== 'Other Services') {
      setOtherService('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      
        <nav className="navbar">
        <img src={benzLogo} className="App-logo" alt="Benz IT Services Logo" />
          <div className="logo">Benz IT Services</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#why-choose-us">Why Choose Us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="content-container">
        <div className="about-container">
          <section id="about">
              <h2>About Us</h2>
              <p>
                Founded in November 2022, Benz IT Services is a leading IT solutions provider based in Tasmania, Australia.
                With a passion for innovation and excellence, we specialize in a wide range of IT services, including
                Salesforce development, web and mobile app development, IT consulting, cloud services, and software development.
              </p>
              <p>
                Our team of skilled engineers, boasting more than 6 years of experience in Salesforce and software development,
                is dedicated to delivering high-quality solutions tailored to our clients' unique needs. At Benz IT Services,
                customer satisfaction is not just a goal; it's our top priority. We pride ourselves on providing affordable,
                top-notch services without compromising on quality.
              </p>
              <p>
                Whether you're a small business seeking to enhance your online presence or a large enterprise in need of
                complex IT solutions, we have the expertise and dedication to meet your requirements. Join hands with Benz IT
                Services, where innovation meets reliability, and let's shape the future of your business together.
              </p>
            </section>
            </div>

            <div className="services-container">
              <section id="services">
              <h2>Our Services</h2>
              <div className="service-category">
                <h3>Salesforce Development</h3>
                <ul>
                  <li>Custom Salesforce App Development</li>
                  <li>Salesforce Integration and Implementation</li>
                  <li>Salesforce Consulting and Support</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>Web Development</h3>
                <ul>
                  <li>Responsive Website Design</li>
                  <li>E-commerce Solutions</li>
                  <li>CMS Development</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>IT Support</h3>
                <ul>
                  <li>24/7 Technical Support</li>
                  <li>Network Maintenance and Security</li>
                  <li>Remote IT Assistance</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>IT Training</h3>
                <ul>
                  <li>Customized IT Training Programs</li>
                  <li>Certification Preparation Courses</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>Software Development</h3>
                <ul>
                  <li>Bespoke Software Solutions</li>
                  <li>Mobile App Development</li>
                  <li>Database Design and Development</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>Other Services</h3>
                <ul>
                  <li>Cloud Services</li>
                  <li>IT Consulting</li>
                  {/* Add any other additional services here */}
                </ul>
              </div>
            </section>
            </div>

            <div className="chooseus-container">
            <section id="why-choose-us">
              <h2>Why Choose Us</h2>
              <ul>
                <li>
                  Over 6 years of experience in Salesforce and software
                  development
                </li>
                <li>Customer satisfaction is our top priority</li>
                <li>Affordable solutions without compromising quality</li>
                <li>Innovative IT solutions tailored to your needs</li>
              </ul>
            </section>
          </div>

          <div className="contact-container">
          <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="service">Service Required:</label>
            <select id="service" name="service" value={service} onChange={handleServiceChange} required>
              <option value="" disabled>Select a service</option>
              <option value="Salesforce Development">Salesforce Development</option>
              <option value="Web Development">Web Development</option>
              <option value="IT Support">IT Support</option>
              <option value="IT Training">IT Training</option>
              <option value="Software Development">Software Development</option>
              <option value="Other Services">Other Services</option>
            </select>

            {service === 'Other Services' && (
            <div className="other-services">
              <label htmlFor="otherService">Specify Other Service:</label>
              <input type="text" id="otherService" name="otherService" value={otherService} onChange={(e) => setOtherService(e.target.value)} required />
            </div>
          )}

              <button type="submit">Submit</button>
            </form>
          </section>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
