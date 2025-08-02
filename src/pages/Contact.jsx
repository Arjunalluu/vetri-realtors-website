import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:vetrirealtorspvtltd@gmail.com?subject=New%20Contact%20Request&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page page-container">
      <div className="glass-container">
        <h1 className="gold-gradient">Contact <span>Vetri Realtors</span></h1>
        
        {submitted && (
          <div className="form-success glass-card">
            <i className="fas fa-check-circle success-icon"></i>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt gold-icon"></i>
              <div>
                <h3>Office Address</h3>
                <p>No.2. Thirum, East Coast Road, Kovalam<br />
                Chengalpattu District, PIN-603112</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope gold-icon"></i>
              <div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:vetrirealtorspvtltd@gmail.com" className="email-link">
                    vetrirealtorspvtltd@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone-alt gold-icon"></i>
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+918438623133" className="phone-link">+91 84386 23133</a>
                </p>
              </div>
            </div>
            
            <div className="contact-hours">
              <h3>Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>
          </div>
          
          <div className="contact-form glass-card">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="glass-input"
                />
              </div>
              <div className="form-group">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="glass-input"
                >
                  <option value="">Service Interested In</option>
                  <option value="farm-land">Farm Land Purchase/Sale</option>
                  <option value="residential">Residential Plots</option>
                  <option value="ecr-omr">ECR/OMR Properties</option>
                  <option value="legal">Legal Consultation</option>
                  <option value="registration">Registration Process</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-input"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="cta-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;