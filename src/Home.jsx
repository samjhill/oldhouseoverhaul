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
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-overlay">
                    <img src={logo} alt="Old House Overhaul Logo" className="logo" />
                    <h1 className="hero-title">Old House Overhaul</h1>
                    <p className="hero-tagline">Restoring the Past, Building the Future</p>
                    <p className="hero-description">
                        Bringing new life to historic homes in Bloomfield, Glen Ridge, and Montclair. 
                        Expert renovations that honor the past while embracing modern living.
                    </p>
                    <a href="#contact" className="cta-button">Get Your Free Consultation</a>
                </div>
            </header>

            <main className="main-content">
                {/* Featured Image Gallery */}
                <section className="gallery-preview">
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src={apartment} alt="Before and after renovation" />
                        </div>
                        <div className="gallery-item">
                            <img src={diningRoom} alt="Dining room renovation" />
                        </div>
                        <div className="gallery-item">
                            <img src={wallBrick} alt="Wall restoration" />
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Comprehensive renovation solutions for historic homes</p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🏠</div>
                            <h3>Full Home Renovations</h3>
                            <p>From foundation repairs to new additions, we handle every aspect of your project with care and precision.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🏛️</div>
                            <h3>Historical Restorations</h3>
                            <p>Our expertise in working with older homes ensures that your renovation respects the building's history while modernizing its functionality.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🍳</div>
                            <h3>Kitchen & Bathroom Remodeling</h3>
                            <p>We create beautiful, functional spaces that blend modern amenities with classic design elements.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔨</div>
                            <h3>Basement Finishing</h3>
                            <p>Transform your basement into a valuable, livable space for your family.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">➕</div>
                            <h3>Custom Additions</h3>
                            <p>Whether it's a new second floor, an extra bathroom, or any custom project, we make your vision a reality.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="why-choose-section">
                    <div className="why-choose-content">
                        <div className="why-choose-image">
                            <img src={couple} alt="Happy homeowners" />
                        </div>
                        <div className="why-choose-text">
                            <h2 className="section-title">Why Choose Us?</h2>
                            <div className="feature-list">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <div>
                                        <h4>Experience</h4>
                                        <p>With years of hands-on experience, we understand the intricacies of older homes and how to work with their unique challenges.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <div>
                                        <h4>Quality Craftsmanship</h4>
                                        <p>We pride ourselves on delivering high-quality work with attention to detail.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <div>
                                        <h4>Personalized Approach</h4>
                                        <p>We collaborate closely with you to ensure your vision comes to life while staying within your budget.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <div>
                                        <h4>Licensed & Insured</h4>
                                        <p>We are fully licensed and insured, giving you peace of mind throughout your renovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About/Background Section */}
                <section className="about-section">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title">Meet the Owner</h2>
                            <p className="about-description">
                                I'm a software engineer turned hands-on renovator. I've always been passionate 
                                about building and fixing things, and now, I've taken on my biggest project yet: 
                                renovating old homes from the ground up.
                            </p>
                            <div className="owner-info">
                                <img src={headshot} className="headshot" alt="Sam, Owner" />
                                <div className="owner-details">
                                    <h3>Sam Hill</h3>
                                    <p>Owner & Lead Renovator</p>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="https://www.youtube.com/@Old_House_Overhaul" target="_blank" rel="noopener noreferrer" className="youtube-link">
                                    <span className="youtube-icon">▶️</span>
                                    Watch Our Projects on YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact-section" id="contact">
                    <div className="contact-container">
                        <div className="contact-info">
                            <h2 className="section-title">Let's Start Your Project</h2>
                            <p className="contact-description">
                                Ready to transform your historic home? Get in touch with us today for a free consultation.
                            </p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <span className="contact-icon">📞</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>(877) 754-1288</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>samuhill@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <div>
                                        <h4>Service Area</h4>
                                        <p>Bloomfield, Glen Ridge & Montclair, NJ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <h3>Send Us a Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
        </>);
}

export default App;