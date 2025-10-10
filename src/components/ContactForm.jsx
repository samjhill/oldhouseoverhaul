import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xvgzqlld");
  if (state.succeeded) {
      return (
        <div className="success-message">
          <span className="success-icon">✓</span>
          <h3>Message Sent Successfully!</h3>
          <p>Thanks for contacting us! We'll get back to you within 24 hours.</p>
        </div>
      );
  }
  
  return (
    <form onSubmit={handleSubmit} className='signup-form'>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text" 
          name="name"
          placeholder="Your name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="your.email@example.com"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number (Optional)</label>
        <input
          id="phone"
          type="tel" 
          name="phone"
          placeholder="(123) 456-7890"
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Tell us about your project..."
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;