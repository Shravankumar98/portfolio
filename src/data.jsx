import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Shravan",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kumar",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Bengaluru",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8867343140",
  },

  {
    id: 8,
    title: "Email : ",
    description: "shravankumar200298@mail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Kannada, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "4+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "1+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "0+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - 2025",
    title: "Full Stack Web Developer <span> Tap Academy </span>",
    desc: "I have worked at Tap Academy, an early-stage edtech startup with a team size of around 50–100 members. As a Full Stack Developer over the past year, I had the opportunity to contribute across both frontend and backend systems in a fast-paced, collaborative environment. Working closely with designers, backend engineers, and the product team, I developed and enhanced key features such as the Blogs Page and Course Details Page for the Tai Website using Next.js, TypeScript, and Material UI. I was also responsible for building and maintaining dynamic components that consumed APIs and supported smooth user navigation.",
  },

  // {
  //   id: 2,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2013 - 2018",
  //   title: "UI/UX Designer <span> Themeforest </span>",
  //   desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  // },

  // {
  //   id: 3,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2005 - 2013",
  //   title: "Consultant <span> Videohive </span>",
  //   desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Bachelor's Degree <span> Bengaluru City University </span>",
    desc: "Percentage: 90%",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "PU College <span> Shri Vijetha PU College </span>",
    desc: "Percentage: 89%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "SSLC <span> Shri Prashanthi High School </span>",
    desc: "Percentage: 86%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html/Css",
    percentage: "85",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 3,
    title: "SASS",
    percentage: "90",
  },

  {
    id: 4,
    title: "JSE",
    percentage: "75",
  },

  {
    id: 5,
    title: "NodeJs",
    percentage: "80",
  },

  {
    id: 6,
    title: "MongoDb",
    percentage: "70",
  },

  {
    id: 7,
    title: "Express.js",
    percentage: "80",
  },

  {
    id: 8,
    title: "React",
    percentage: "85",
  },

  {
    id: 9,
    title: "Redux",
    percentage: "80",
  },
  {
    id: 10,
    title: "Git",
    percentage: "80",
  },
  {
    id: 11,
    title: "GitHub",
    percentage: "75",
  },
  {
    id: 12,
    title: "Testing",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Full Stack Web Developer",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Tai Platform",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Tap Academy",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React/TypeScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://tai.thetapacademy.com/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Front End Developer",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Tap Academy",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "NextJS/TypeScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://thetapacademy.com/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Web Developer",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Weather Forecasting",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Express/EJS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://weather-forecast-p33d.onrender.com/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Html Developer",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Portfolio",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Self",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Html",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://shravanreddy98.github.io/html-portfolio/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
