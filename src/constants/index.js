import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  Project1,
  Project2,
  Project3,
  threejs,
  degree,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "C/C++ Developer",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
];
const work = [
  {
    title: "Web Development Intern",
    company: "ASD Technologies",
    duration: "12/07/2023 - 12/09/2023",
    description: [
      "Worked in a team to develop a full-stack web app using the MERN stack (MongoDB, Express, React, Node.js). This included front-end development, back-end development, client-server interactions, and API building.",
      "Implemented a feature for a task management pipeline, enabling efficient collaboration and specific actions for involved employees."
    ]
  },
  {
    title: "Internshala Student Partner",
    company: "Internshala",
    duration: "December 2022",
    description: [
      "Empowered beginner students by providing guidance on coding basics and initial concepts, fostering their understanding and growth.",
      "Supported fellow students in navigating the Internshala platform, addressing their queries, and ensuring they effectively utilized available opportunities."
    ]
  },
  {
    title: "Freelance Web Development",
    company: "Freelance",
    duration: "Various Projects",
    description: [
      "Developed custom web applications for diverse clients, leveraging my full-stack development skills (HTML, CSS, JavaScript, React, Node.js).",
      "Ensured a positive user experience by creating responsive designs that adapt to any device and screen size. Rigorously optimized performance for fast loading times and smooth interactions."
    ]

  }
];




const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology",
    company_name: "IK GUJRAL PUNJAB TECHNICAL UNIVERSITY",
    icon: degree,
    iconBg: "#003333",
    date: " 2021 -  2025",
    points: [
      "Computer Science Engineering",
      "Software Developer",
      "Vice President at Tech Club",
      "CGPA : 8.15",
    ]
  },
  {
    title: "Senior High School",
    company_name: "Jalandhar Public School",
    icon: degree,
    iconBg: "#003333",
    date: " 2018 -  2020",
    points: [
      "Non-Medical",
      "Central Board of Secondary Education",
      "Scored: 84.8%",
      
    ]
  },
  {
    title: "Primary + Secondary High School",
    company_name: "St. George's Convent School",
    icon: degree,
    iconBg: "#003333",
    date: " 2007 -  2018",
    points: [
      "Punjab School of Education Board",
      "Score: 65%(2018)",
    ]
  },
];


const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/gurdeep-singh-3251s",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    handle: "gurdeep-singh-3251s",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/gurdeep-singh-3251s/",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    handle: "gurdeep-singh-3251s",
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/Moonlight_Coder/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    handle: "Moonlight_Coder",
  },
];

const projects = [
  {
    name: "Revelin Marketplace",
    description:
      "Created a Marketplace Web Application utilizing the MERN stack and integrating blockchain technology to enhance transparency and security in the ordering and delivery process.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Project1,
    source_code_link: "https://github.com/gurdeep-singh-3251s/Revelin-Frontend",
  },
  {
    name: "PriceWay",
    description:
      "Created a web scraping application using Next.js and TypeScript to track Amazon prices. Utilized Bright Data for CAPTCHA handling and implemented email notifications for price changes, providing users with timely updates on pricing fluctuations.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Bright data",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: Project2,
    source_code_link: "https://github.com/gurdeep-singh-3251s/PriceWay",
  },
  {
    name: "Portfolio Website",
    description:
      "Wait... that's this site! A dynamic compilation reflecting my expertise, skills, and accomplishments, a testament to my professional journey and aspirations for growth",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Project3,
    source_code_link: "https://github.com/gurdeep-singh-3251s/Portfolio",
  },
];

export { services, technologies,work, experiences, socialLinks, projects };