import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

const ACADEMIC_PROJECTS = [
  {
    id: "acad-1",
    title: "Struct3D",
    subtitle: "Python FastAPI + React",
    description:
      "A structural engineering pre-design calculator that automates load distribution and stimulates deformations.",
    tech: ["Python", "FastAPI", "React"],
    repoLink: "https://github.com/Sarait3",
  },
  {
    id: "acad-2",
    title: "My Recipe Book",
    subtitle: "Web development",
    description:
      "A full-stack recipe website with user authentication, dynamic content, and a responsive design.",
    tech:["HTML", "CSS", "JavaScript", "PHP"],
    repoLink: "https://github.com/Sarait3",
  },
  {
    id: "acad-3",
    title: "Microservices (UMS + Messages)",
    subtitle: "Spring Boot + JWT",
    description:
      "Enterprise-style services with REST APIs, auth concepts, and structured API design.",
    tech: ["Java", "Spring", "JWT", "REST"],
    repoLink: "https://github.com/Sarait3",
  },
];

function Projects() {
  const data = projects.slice(0, 4);
  const [current, setCurrent] = useState(0);

  const slideRefs = useRef([]);
  const revealRefs = useRef([]);
  const userNavRef = useRef(false); 

  useEffect(() => {
    const items = [...slideRefs.current, ...revealRefs.current].filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-in");
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);


  useEffect(() => {
    if (!userNavRef.current) return;

    const el = slideRefs.current[current];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });

    userNavRef.current = false;
  }, [current]);

  const goPrev = () => {
    userNavRef.current = true;
    setCurrent((p) => (p - 1 + data.length) % data.length);
  };

  const goNext = () => {
    userNavRef.current = true;
    setCurrent((p) => (p + 1) % data.length);
  };

  const goTo = (i) => {
    userNavRef.current = true;
    setCurrent(i);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-subhead">
          <span className="projects-accent" />
          <h3 className="projects-subtitle">Featured Projects</h3>
        </div>

        <div className="featured-wrap">
          {data.length > 1 && (
            <>
              <button
                className="edge-arrow edge-arrow-left"
                onClick={goPrev}
                type="button"
                aria-label="Previous project"
              >
                <span className="arrow-icon" aria-hidden="true">
                  &lt;
                </span>
              </button>

              <button
                className="edge-arrow edge-arrow-right"
                onClick={goNext}
                type="button"
                aria-label="Next project"
              >
                <span className="arrow-icon" aria-hidden="true">
                  &gt;
                </span>
              </button>
            </>
          )}

          <div className="projects-row" role="list">
            {data.map((p, idx) => (
              <article
                key={p.id}
                className={`project-slide ${idx === current ? "active" : ""}`}
                ref={(el) => (slideRefs.current[idx] = el)}
                role="listitem"
              >
                <div className="project-left">
                  <img className="project-image" src={p.image} alt={`${p.title} screenshot`} />
                </div>

                <div className="project-right">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-description">{p.description}</p>

                  <div className="project-tech">
                    {p.tech?.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {p.demoLink && (
                      <a href={p.demoLink} className="project-link" target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                    {p.codeLink && (
                      <a href={p.codeLink} className="project-link" target="_blank" rel="noreferrer">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {data.length > 1 && (
            <div className="featured-indicators">
              <div className="carousel-indicators">
                {data.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${current === i ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    type="button"
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="projects-subhead projects-subhead-spaced">
          <span className="projects-accent" />
          <h3 className="projects-subtitle">Academic Work</h3>
        </div>

        <div className="academic-grid" role="list">
          {ACADEMIC_PROJECTS.map((p, idx) => (
            <article
              key={p.id}
              className="academic-card"
              role="listitem"
              ref={(el) => (revealRefs.current[idx] = el)}
            >
              <div className="academic-top">
                <div className="academic-icon" aria-hidden="true">
                  📘
                </div>

                {p.repoLink && (
                  <a
                    className="academic-gh"
                    href={p.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open GitHub repo for ${p.title}`}
                    title="View repo"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              <h4 className="academic-title">{p.title}</h4>
              <p className="academic-subtitle">{p.subtitle}</p>
              <p className="academic-desc">{p.description}</p>

              <div className="tag-row compact">
                {p.tech?.map((t) => (
                  <span className="tag small" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
