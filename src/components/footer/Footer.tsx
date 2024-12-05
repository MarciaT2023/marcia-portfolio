import React, { FC } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.css';

interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = ({ text }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className='footer-top'>
      {/* Left Section: Info and Social Links */}
      <div className="footer-info">
          <p className="footer-name">Marcia T. Merritt | Full Stack Developer</p>
          <div className="footer-socials">
          <a href="mailto:marciatmerritt@gmail.com" className="footer-email">
            <FaEnvelope size={40} className="footer-icon" />
          </a>
            <a
              href="https://github.com/marciatmerritt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/marcia-merritt-58662761/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>

        {/* Right Section: Contact Form */}
        <div className="footer-contact" id='contact'>
          <h4>Contact Me</h4>
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="footer-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="footer-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="footer-textarea"
            ></textarea>
            <button type="submit" className="footer-button">Send</button>
          </form>
        </div>

      {/* Bottom: Copyright and Back to Top */}
      <div className="footer-bottom">
        <p>&copy; {year} {text}</p>
        <a href="#top" className="back-to-top">Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;
