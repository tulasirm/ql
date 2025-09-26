'use client';
import React, { useState } from 'react';
//= Components
import Split from '@/components/Common/Split';
//= Static Data
import contentFormData from "@/data/contact-form.json";

function ContactForm({ theme }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    setError(null);
    // Let browser handle submission, but listen for Formspree response
    // Formspree will redirect to a thank you page or show error
    // We use a hidden iframe to catch the response
    // For SPA, we can use fetch instead, but for static export, this is safest
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h4 className="success-title">Thank You!</h4>
                  <p className="success-text">
                    Your message has been sent successfully. We appreciate you reaching out to us and will get back to you within 24 hours.
                  </p>
                  <button 
                    className="butn bord mt-30" 
                    onClick={() => setSubmitted(false)}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mldpgrge"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={e => {
                    setSubmitted(true);
                    handleSubmit(e);
                  }}
                  id="contact-form"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  <div className="messages"></div>
                  <div className="controls">
                    <div className="form-group">
                      <input id="form_name" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input id="form_email" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className={`butn ${theme === 'light' ? 'dark' : 'bord'}`}>
                      <span>Send Message</span>
                    </button>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                </form>
              )}
              <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <Split>
                <h3 className="wow" data-splitting>{contentFormData.title}</h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contentFormData.email}</a>
                </h5>
                <h5>{contentFormData.phone}</h5>
              </div>
              <Split>
                <h3 className="wow" data-splitting>Registered Office.</h3>
              </Split>
              <div className="item">
                <h6>
                  {contentFormData.location.first}
                  <br />
                  {contentFormData.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .success-message {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border: 1px solid #e9ecef;
        }
        .success-icon {
          font-size: 4rem;
          color: #28a745;
          margin-bottom: 20px;
          animation: checkmark 0.8s ease-in-out;
        }
        .success-title {
          color: #212529;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .success-text {
          color: #6c757d;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 0;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        @keyframes checkmark {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        @media (max-width: 768px) {
          .success-message {
            padding: 40px 20px;
          }
          .success-icon {
            font-size: 3rem;
          }
          .success-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactForm