import profilePic from "../assets/profile2.png";
import useReveal from "../hooks/useReveal";

function About() {
  const { setRef } = useReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 ref={setRef} className="section-title reveal">My Journey</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-top">
            <div className="about-image">
              <div className="about-shape"></div>
              <img src={profilePic} alt="Software Developer at Work" />
            </div>

            <div ref={setRef} className="about-text reveal">
              <h3 className="about-subtitle">🏗️ From Structures to Software</h3>

              <p>
                I began my career with a strong engineering foundation, trained to think in terms of structure, systems,
                and long-term reliability. That background shaped how I approach problem-solving: methodical, analytical,
                and focused on building solutions that last.
              </p>

              <p>
                Today, I apply that same mindset as a software developer. I focus on building clean, reliable, and scalable
                applications, translating ideas into well-structured code, designing maintainable systems, and continuously
                improving through hands-on projects across full-stack development and cloud technologies.
              </p>
            </div>
          </div>

          <div ref={setRef} className="about-bottom journey-flow reveal">
            {/* Card 1 */}
            <div className="journey-card about-card">
              <div className="about-card-icon">🏗️</div>
              <h4 className="about-card-title">Civil Engineer</h4>
              <span className="about-card-subtitle">Master’s-level Engineering Degree</span>
              <p className="about-card-text">
                Trained as a civil engineer with a master’s-level engineering degree and professional
                experience in structural design—building a strong foundation in precision, standards,
                and system thinking.
              </p>
            </div>

            {/* Connector */}
            <div className="journey-connector" aria-hidden="true">
              <span className="journey-line"></span>
              <span className="journey-dot"></span>
            </div>

            {/* Card 2 */}
            <div className="journey-card about-card">
              <div className="about-card-icon">💡</div>
              <h4 className="about-card-title">Discovered Programming</h4>
              <span className="about-card-subtitle">First Real Code Experience</span>
              <p className="about-card-text">
                While building my business website, I gained hands-on experience with code and developed
                a strong interest in software development. That curiosity quickly turned into focused
                learning and academic projects.
              </p>
            </div>

            {/* Connector */}
            <div className="journey-connector" aria-hidden="true">
              <span className="journey-line"></span>
              <span className="journey-dot"></span>
            </div>

            {/* Card 3 */}
            <div className="journey-card about-card">
              <div className="about-card-icon">☁️</div>
              <h4 className="about-card-title">Software & Cloud Path</h4>
              <span className="about-card-subtitle">Programming Diploma + Cloud Studies</span>
              <p className="about-card-text">
                I earned a college diploma in Computer Programming and I'm now studying Cloud Development
                & Operations, continuing to build modern, scalable applications and enjoying the journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
