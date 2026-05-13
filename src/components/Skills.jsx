import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/JavaScript.png";
import reactLogo from "../assets/logos/react.png";
import angularLogo from "../assets/logos/Angular.png";
import mongodbLogo from "../assets/logos/mongodb.png";
import nodeLogo from "../assets/logos/node.png";
import expressLogo from "../assets/logos/Express.png";
import fastapiLogo from "../assets/logos/fastapi.png";
import phpLogo from "../assets/logos/php.png";
import javaLogo from "../assets/logos/java.png";
import pythonLogo from "../assets/logos/python.png";
import mysqlLogo from "../assets/logos/mysql.png";
import gitLogo from "../assets/logos/git.png";
import githubLogo from "../assets/logos/github.png";
import dockerLogo from "../assets/logos/docker.png";
import androidStudioLogo from "../assets/logos/android-studio.png";
import k8sLogo from "../assets/logos/Kubernetes.png";
import postgresqlLogo from "../assets/logos/PostgreSQL.png";
import useReveal from "../hooks/useReveal";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: htmlLogo },
      { name: "CSS", icon: cssLogo },
      { name: "JavaScript", icon: jsLogo },
      { name: "React", icon: reactLogo },
      { name: "Angular", icon: angularLogo },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", icon: javaLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "Express", icon: expressLogo },
      { name: "FastAPI", icon: fastapiLogo },
      { name: "Python", icon: pythonLogo },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: mysqlLogo },
      { name: "MongoDB", icon: mongodbLogo },
      { name: "PostgreSQL", icon: postgresqlLogo },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: gitLogo },
      { name: "GitHub", icon: githubLogo },
      { name: "Docker", icon: dockerLogo },
      { name: "Android Studio", icon: androidStudioLogo },
      { name: "Kubernetes", icon: k8sLogo },
    ],
  },
];

function Skills() {
  const { setRef } = useReveal();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 ref={setRef} data-delay="120" className="section-title reveal">Technical Skills</h2>
          <div className="section-divider"></div>

          <p ref={setRef} data-delay="220" className="skills-subtitle reveal">
            These tools reflect the technologies Iâ€™ve used in my academic work and personal projects, giving me exposure to 
            different parts of the development stack.
          </p>
        </div>

        <div ref={setRef} data-delay="320" className="skills-panels reveal">
          {SKILL_GROUPS.map((group) => (
            <div className="skills-panel" key={group.title}>
              <div className="skills-panel-header">
                <span className="skills-panel-accent" />
                <h4 className="skills-panel-title">{group.title}</h4>
              </div>

              <div className="skills-tiles">
                {group.items.map((skill) => (
                  <div className="skill-tile" key={skill.name}>
                    <div className="skill-icon-wrap">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <span className="skill-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
