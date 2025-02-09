import React from "react";
import ContactForm from "./ContactForm";
import "./App.css";
import logo from "./assets/images/logo.jpg";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Old House Overhaul Logo" className="logo" />
        <p>At Old House Overhaul, we specialize in bringing new life to historic homes in the Bloomfield, Glen Ridge, and Montclair areas. With years of experience and a passion for preserving the charm and character of older properties, we offer comprehensive renovation services tailored to your unique needs. Whether you're restoring a century-old home or making modern upgrades to enhance its functionality, we're here to guide you through every step of the process.</p>
      </header>
      <main className="main-content">
      <section className="links">
          <h2>Our work</h2>
          <ul>
            <li><a href="https://www.youtube.com/@Old_House_Overhaul" target="_blank">🎥Youtube channel</a></li>
          </ul>
        </section>
      <section className="about">
          <h2>Our Services</h2>
          <ul>
            <li><strong>Full Home Renovations:</strong> From foundation repairs to new additions, we handle every aspect of your project with care and precision.</li>
            <li><strong>Historical Restorations:</strong> Our expertise in working with older homes ensures that your renovation respects the building’s history while modernizing its functionality.</li>
            <li><strong>Kitchen & Bathroom Remodeling:</strong> We create beautiful, functional spaces that blend modern amenities with classic design elements.</li>
            <li><strong>Basement Finishing:</strong> Transform your basement into a valuable, livable space for your family.</li>
            <li><strong>Custom Additions:</strong> Whether it's a new second floor, an extra bathroom, or any custom project, we make your vision a reality.</li>
          </ul>
        </section>
        <section className="about">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Experience:</strong> With years of hands-on experience, we understand the intricacies of older homes and how to work with their unique challenges.</li>
            <li><strong>Quality Craftsmanship:</strong> We pride ourselves on delivering high-quality work with attention to detail.</li>
            <li><strong>Personalized Approach:</strong> We collaborate closely with you to ensure your vision comes to life while staying within your budget.</li>
            <li><strong>Licensed & Insured:</strong> We are fully licensed and insured, giving you peace of mind throughout your renovation.</li>
          </ul>
        </section>
        <section className="signup">
        
          <h2>Contact Us Today</h2>
          <ContactForm />
        </section>
      </main>
      <footer className="footer">
        <p>made with love by <a href="https://hillside.llc">Hillside Innovations</a></p>
      </footer>
    </div>
  );
}

export default App;