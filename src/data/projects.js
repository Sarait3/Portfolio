import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";


const projects = [
  {
    id: 1,
    title: "PlanIt Wise",
    description:
      "A project planning and scheduling tool with task management, timeline visualization, and resource allocation.",
    category: "web",
    image: project1,
    tech: ["Express", "Node.js", "MongoDB", "MEAN Stack"],
    demoLink: "https://plan-it-wise.vercel.app/",
    codeLink: "https://github.com/Sarait3/PlanItWise",
  },
{
    id: 2,
    title: "EquiTrack 1.0",
    description:
      "An equipment tracking system built with Java and JSP, featuring user roles, authentication, and MySQL database integration.",
    category: "web",
    image: project2,
    tech: ["Java", "JSP", "HTML", "CSS", "MySQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Struct3D",
    description:
      "A structural engineering pre-design calculator that automates load distribution and stimulates deformations.",
    category: "web",
    image: project3,
    tech: ["Python", "React", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "My Recipe Book",
    description:
      "A full-stack recipe website with user authentication, dynamic content, and a responsive design.",
    category: "web",
    image: project4,
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    demoLink: "#",
    codeLink: "#",
  },
];

export default projects;
