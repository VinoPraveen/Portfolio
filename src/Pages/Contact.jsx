import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      
      // Reset after  seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  }

  return (
    <div id="Contact" className="contact-container">
      <h1>Get In Touch</h1>
      <p className="contact-intro">
        I'm always interested in hearing about new projects and opportunities. 
        Feel free to reach out using the form below or connect with me directly.
      </p>

      <div className="contact-content">
        <section className="contact-form-section">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Thank You, {formData.name}! 🎉</h2>
              <p>
                I've received your message and will get back to you as soon as possible.
              </p>
              <p className="success-note">
                Redirecting you back in a moment...
              </p>
            </div>
          )}
        </section>

        <section className="contact-info-section">
          <h2>Other Ways to Reach Me</h2>

          <div className="contact-info">
            <h3> Email</h3>
            <a href="mailto:avinopraveen@gmail.com" className="contact-link">
              avinopraveen@gmail.com
            </a>
          </div>

          <div className="contact-info">
            <h3>Phone</h3>
            <a href="tel:+917305206578" className="contact-link">
              +91 73052 06578
            </a>
          </div>

          <div className="contact-info">
            <h3> Location</h3>
            <p>Chennai, Tamil Nadu, India</p>
          </div>

          <div className="contact-info">
            <h3>🔗 Connect</h3>
            <div className="social-links">
              <a href="https://github.com/vinopraveen" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vino-praveen" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="contact-section">
        <h2>Response Time</h2>
        <p>
          I try to respond to all messages within 24-48 hours. Whether you have a project opportunity, 
          collaboration proposal, or just want to say hello, I'd love to hear from you!
        </p>
      </section>
    </div>
  );
}

export default Contact;
