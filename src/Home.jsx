import React from "react";
import ContactForm from "./components/ContactForm";
import "./App.css";
import logo from "./assets/images/logo_transparent.png";
import apartment from "./assets/images/apartment-before-after.jpg"
import couple from "./assets/images/couple.jpg";
import diningRoom from "./assets/images/dining-room.jpg"
import wallBrick from "./assets/images/wall-brick.jpg"
import headshot from "./assets/images/headshot.jpg"

function App() {
    return (
        <>
            <section>
                <p>
                    Proof of Consent (Opt-In)

                    Consumer-Initiated Consent to Receive SMS Communications via Twilio

                    This document serves as proof that the following consumer has given explicit, verifiable consent to receive SMS communications from OLD HOUSE OVERHAUL LLC through the Twilio platform.

                    Consent Method:
                    The consumer initiated contact by sending an SMS message to our Twilio number, which contained a link to a home listing for evaluation (e.g., a Redfin or Zillow URL). This action clearly indicates interest and serves as opt-in to receive SMS responses related to the home evaluation service.

                    By initiating the message, the consumer has agreed to receive the following types of communication:

                    Automated SMS responses with property analysis and evaluation results

                    Follow-up messages relevant to the property or service requested

                    An option to opt-out by replying STOP at any time

                    Business Contact Information:

                    Business Name: OLD HOUSE OVERHAUL LLC

                    Twilio Number: (877) 754-1288

                    Contact Email: samuhill@gmail.com

                    Retention Policy:
                    This opt-in record (including the original message content and timestamp) is securely stored in our system logs and can be produced upon request to demonstrate compliance with carrier and regulatory requirements.

                </p>
            </section>
            <header className="header">
                <img src={logo} alt="Old House Overhaul Logo" className="logo" />
                <h3 style={{ fontStyle: "italic" }}>Restoring the Past; Building the Future</h3>
                <p>At Old House Overhaul, we specialize in bringing new life to historic homes in the Bloomfield, Glen Ridge, and Montclair areas. With years of experience and a passion for preserving the charm and character of older properties, we offer comprehensive renovation services tailored to your unique needs. Whether you're restoring a century-old home or making modern upgrades to enhance its functionality, we're here to guide you through every step of the process.</p>
            </header>

            <main className="main-content">

                <section className="about">
                    <img src={wallBrick} />
                    <h2>Our Services</h2>
                    <ul>
                        <li><strong>Full Home Renovations:</strong> From foundation repairs to new additions, we handle every aspect of your project with care and precision.</li>
                        <li><strong>Historical Restorations:</strong> Our expertise in working with older homes ensures that your renovation respects the building’s history while modernizing its functionality.</li>
                        <li><strong>Kitchen & Bathroom Remodeling:</strong> We create beautiful, functional spaces that blend modern amenities with classic design elements.</li>
                        <li><strong>Basement Finishing:</strong> Transform your basement into a valuable, livable space for your family.</li>
                        <li><strong>Custom Additions:</strong> Whether it's a new second floor, an extra bathroom, or any custom project, we make your vision a reality.</li>
                    </ul>
                </section>
                <img src={couple} />
                <section className="about">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Experience:</strong> With years of hands-on experience, we understand the intricacies of older homes and how to work with their unique challenges.</li>
                        <li><strong>Quality Craftsmanship:</strong> We pride ourselves on delivering high-quality work with attention to detail.</li>
                        <li><strong>Personalized Approach:</strong> We collaborate closely with you to ensure your vision comes to life while staying within your budget.</li>
                        <li><strong>Licensed & Insured:</strong> We are fully licensed and insured, giving you peace of mind throughout your renovation.</li>
                    </ul>
                </section>
                <img src={diningRoom} />
                <section className="links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://www.youtube.com/@Old_House_Overhaul" target="_blank">🎥Youtube channel</a></li>
                    </ul>
                </section>
                <section>
                    <h2>Background</h2>
                    <p style={{ fontStyle: "italic" }}>I’m a software engineer turned hands-on renovator. I’ve always been passionate about building and fixing things, and now, I’ve taken on my biggest project yet: renovating old homes from the ground up.</p>

                    <div style={{ display: "inline-flex", marginLeft: "1rem" }}>

                        <img src={headshot} className="headshot" /><p>Sam, Owner</p>
                    </div>
                </section>
                <img src={apartment} />
                <section className="signup">

                    <h2>Contact Us Today</h2>
                    <ContactForm />
                </section>
            </main></>);
}

export default App;