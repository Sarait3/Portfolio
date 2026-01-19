import profilePic from "../assets/profile.png";

function Hero() {
    return (
        <section id="home" className="hero hero--agency">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">Sara Aithssayene</span>
                        <span className="title">Junior Full-Stack Developer</span>
                    </h1>

                    <p className="hero-description">
                        Building digital infrastructure with the same precision I once brought to physical structures. I leverage engineering
                        fundamentals to create robust, scalable software solutions.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Engineering</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Coding</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects Built</span>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-secondary">View My Work</a>
                        <a
                            href="/Sara-Aithssayene-Resume.pdf"
                            className="btn btn-secondary"
                            download
                        >
                            Download My Resume
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-shape"></div>
                    <img
                        src={profilePic}
                        alt="Sara - Software Developer"
                        className="profile-image hero-profile"
                    />
                </div>
            </div>

        </section>
    );
}

export default Hero;
