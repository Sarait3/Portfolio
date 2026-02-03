import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

function Contact() {
  const { setRef } = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 ref={setRef} className="section-title reveal">Get in Touch</h2>
          <div className="section-divider" />
        </div>

        <p ref={setRef} className="contact-intro reveal">
          Interested in collaborating, hiring, or just having a conversation?
          Feel free to reach out via email or connect on LinkedIn and GitHub.
        </p>

        <div className="contact-links">
          <a ref={setRef} href="mailto:sara.aithssayene@gmail.com" className="contact-link reveal">
            <span className="contact-icon" aria-hidden="true">
              <FaEnvelope />
            </span>
            <div className="contact-text">
              <span className="contact-label">Email</span>
              <span className="contact-value">sara.aithssayene@gmail.com</span>
            </div>
          </a>

          <a
            ref={setRef}
            href="https://github.com/Sarait3"
            target="_blank"
            rel="noreferrer"
            className="contact-link reveal"
          >
            <span className="contact-icon" aria-hidden="true">
              <FaGithub />
            </span>
            <div className="contact-text">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/Sarait3</span>
            </div>
          </a>

          <a
            ref={setRef}
            href="https://www.linkedin.com/in/sara-aithssayene-b4866512b/"
            target="_blank"
            rel="noreferrer"
            className="contact-link reveal"
          >
            <span className="contact-icon" aria-hidden="true">
              <FaLinkedinIn />
            </span>
            <div className="contact-text">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                linkedin.com/in/sara-aithssayene-b4866512b
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
