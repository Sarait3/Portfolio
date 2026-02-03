import profilePic from "../assets/profile.png";
import useReveal from "../hooks/useReveal";

function Hero() {
    const { setRef } = useReveal();

    return (
        <section id="home" className="hero hero--agency">
            <div className="container">
                <div className="hero-content">
                    <h1 ref={setRef} data-delay="120" className="hero-title reveal">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">Sara Aithssayene</span>
                        <span className="title">Junior Full-Stack Developer</span>
                    </h1>

                    <p ref={setRef} data-delay="220" className="hero-description reveal">
                        Building digital infrastructure with the same precision I once brought to physical structures. I leverage engineering
                        fundamentals to create robust, scalable software solutions.
                    </p>

                    <div className="hero-stats">
                        <div ref={setRef} data-delay="320" className="stat-item reveal">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Engineering</span>
                        </div>
                        <div ref={setRef} data-delay="420" className="stat-item reveal">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Coding</span>
                        </div>
                        <div ref={setRef} data-delay="520" className="stat-item reveal">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects Built</span>
                        </div>
                    </div>

                    <div ref={setRef} data-delay="620" className="hero-cta reveal">
                        <a href="#projects" className="btn btn-secondary">View My Work</a>
                        <a
                            href={`${import.meta.env.BASE_URL}Sara-Aithssayene-Resume.pdf`}
                            className="btn btn-secondary"
                            download
                        >
                            Download My Resume
                        </a>
                    </div>
                </div>

                <div ref={setRef} data-delay="720" className="hero-image reveal">
                    <div className="hero-shape"></div>
                    <img
                        ref={setRef}
                        src={profilePic}
                        alt="Sara - Software Developer"
                        className="profile-image hero-profile reveal"
                    />
                </div>
            </div>

        </section>
    );
}

export default Hero;
