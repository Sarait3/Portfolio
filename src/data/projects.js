import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";


const projects = [
  {
    id: 1,
    title: "Recall",
    description:
      "An AI-powered meeting intelligence platform using RAG, semantic search, transcript parsing, and multi-user authentication.",
    category: "web",
    image: project5,
    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "LLM",
    ],
    demoLink: "https://recall-frontend-plum.vercel.app/",
    codeLink: "https://github.com/Sarait3/Recall_Backend",
  },
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
    title: "EquiTrack",
    description:
      "An equipment tracking system built with Java and JSP, featuring user roles, authentication, and MySQL database integration.",
    category: "web",
    image: project2,
    tech: ["Java", "JSP", "HTML", "CSS", "MySQL"],
    demoLink: "https://equitrack1-0.onrender.com/EquiTrack",
    codeLink: "https://github.com/Sarait3/EquiTrack1.0",
  },
  {
    id: 3,
    title: "My Recipe Book",
    description:
      "A full-stack recipe website with user authentication, dynamic content, and a responsive design.",
    category: "web",
    image: project4,
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    demoLink: "https://my-recipe-book-y6j5.onrender.com/",
    codeLink: "https://github.com/Sarait3/My_Recipe_Book",
  },
];

export default projects;
