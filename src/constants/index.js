import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Welcome to my portfolio! I am a seasoned Frontend React Developer with over 2 years of experience in creating dynamic, user-centric web applications. My expertise lies in leveraging cutting-edge technologies and frameworks to deliver seamless, responsive, and visually appealing user interfaces. `;

export const ABOUT_TEXT = `Here’s a glimpse into my skill set and the tools I master:

React.js: Mastery in building robust, high-performance applications with React, ensuring maintainability and scalability.
Ant Design (AntD): Skilled in implementing Ant Design components for sophisticated, enterprise-grade UI designs.
Styled Components (SHDCN): Proficient in using styled components to write modular, maintainable CSS directly within JavaScript.
Tailwind CSS: Expertise in rapidly creating custom designs with Tailwind CSS, achieving a perfect blend of flexibility and efficiency.
Material-UI: Experienced in deploying Material-UI to craft intuitive, responsive, and visually consistent user interfaces.
Deployment: Comprehensive knowledge of modern deployment strategies to ensure smooth, reliable application delivery and updates.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend React Developer",
    company: "Nivzen Technologies",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "ShadCN", "ANTD"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Gota, Ahmedabad, 380060 ",
  phoneNo: "+917041041197",
  email: "jaydeepraj2001@gmail.com",
};
