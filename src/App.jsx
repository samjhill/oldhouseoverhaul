import React from "react";
import ContactForm from "./ContactForm";
import "./App.css";
import trailPhoto from "./assets/images/green-trail.jpg";
import logo from "./assets/images/logo.jpg";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Hidden Trail Society Logo" className="logo" />
        {/* <h1>Hidden Trail Society</h1> */}
        <p>Explore the path less traveled. Join us on unforgettable adventures!</p>
      </header>
      <main className="main-content">
      <section className="about">
          <h2>Who are we?</h2>
          <p>
            We're a group of people who seek adventure, wherever we can find it. Expect physical challenges, adrenaline, and the unexpected. A great mixture of <a href="https://www.rei.com/blog/climb/fun-scale" target="_blank">type 1 and type 2 fun</a>.
          </p>
        </section>
        <section className="about">
          <h2>Why join us?</h2>
          <p>
            Hidden Trail Society is your gateway to discovering the hidden gems of the outdoors. 
            Whether you're a seasoned adventurer or just starting, we provide community, guidance, and unforgettable experiences.
          </p>
        </section>
        <section>
          <h2>Upcoming trip</h2>
          <a href="https://bikepacking.com/routes/delaware-water-gap-loop/" target="_blank">Delaware Water Gap Loop</a>
          <p>Date: Spring 2025 (exact date tbd)</p>
          <p>Enjoy a weekend trip biking through the beautiful NJ & PA border trails. We will be hosting training sessions and how to pack to make sure you're ready for it!</p>
        </section>
        <section className="signup">
        <img src={trailPhoto} alt="green trail" className="logo" />
          <h2>Sign Up for Adventure</h2>
          <ContactForm />
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Sam Hill. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;