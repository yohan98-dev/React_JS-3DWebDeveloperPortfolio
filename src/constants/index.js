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
  threejs,
  UOR,
  amcc,
  java,
  python,
  mysql,
  unity,
  smoothScroll,
  todo,
  fitness,
  blogapp,
  port,
  flappy,
  jobapp,
  Entert,
  Eticket,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },

  {
    name: "Java",
    icon: java,
  },

  {
    name: "Python",
    icon: python,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "Unity 3D",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "R/ Ananda Maithreya Central College",
    icon: amcc,
    iconBg: "#E6DEDD",
    date: "Jan 2009 - Aug 2017",
    points: [
      "Participating in extracurricular activities developing my social skills.",
      "Passed GCE Ordinary Level exams with A-4, B-3 And C-2 ",
      "Did Advanced levels with Technology Stream and Passed with 3Cs",
    ],
  },

  {
    title: "Undergraduate",
    company_name: "University of Ruhuna",
    icon: UOR,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Present",
    points: [
      "Developing My Communication skills so i can articulate my ideas and collaborate effectively with others.",
      "Developing My professional skills, such as leadership, teamwork, and project management This can help prepare myself for my future career.",
      "With wide range of Academic programs that provided me with in-depth knowledge Of the field of IT and new Technologies that are currently used in the industry.",
      "Participating in External clubs and Societies Such as ICT Society, Leo club and FOT gaming Club has helped me develop my Social Skills.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gaming Blog",
    description:
      "Blog Site about Video Games with login and user registration. Each user can post blogs and Edit posts that posted by them. Frontend with React and backend with Node.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "expressJs",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "blue-text-gradient",
      },
    ],
    image: blogapp,
    source_code_link: "https://github.com/yohan98-dev/MERN-BlogApp-client",
  },
  {
    name: "Fitness App",
    description:
      "Fitness app containing exersices for different parts of the body. Exercises Data is taken Form RapidAPI ExerciseDB. Used meterial UI for the user interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/yohan98-dev/React-js-FitnessApp",
  },
  {
    name: "Smooth Scrolling Website",
    description:
      "Simple website with HTML, CSS, and Smooth Scrolling mothion done with JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: smoothScroll,
    source_code_link: "https://github.com/yohan98-dev/JS-smoothScrollWeb",
  },
  {
    name: "To-Do app",
    description: "Simple to-do  app with HTML,CSS and JavaScript .",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/yohan98-dev/JS-Todo-List-App",
  },
  {
    name: "My 3D portfolio",
    description:
      "Portfolio with 3d graphics and animations using ThreeJS, Framer Motion, React Three Fiber and TailwindCSS. Has a working Email function using EmailJs",
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
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link:
      "https://github.com/yohan98-dev/React_JS-3DWebDeveloperPortfolio",
  },

  {
    name: "Flappy Bird Clone",
    description:
      "Popular Flappy bird game Clone created using Unity 3d Game Engine",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
    ],
    image: flappy,
    source_code_link: "https://github.com/yohan98-dev",
  },
  {
    name: "JobApp",
    description: "Job searching app using React Native and Expo",
    tags: [
      {
        name: "React_Native",
        color: "blue-text-gradient",
      },
      {
        name: " Expo",
        color: "green-text-gradient",
      },
    ],
    image: jobapp,
    source_code_link: "https://github.com/yohan98-dev/React-Native-JobApp",
  },
  {
    name: "EntertainmentWEB",
    description:
      "Built using .NET Core (.NET 6) simple entertainment web With MVC",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
    ],
    image: Entert,
    source_code_link: "https://github.com/yohan98-dev/ASP.Net-EntertainmentWeb",
  },
  {
    name: "eTickets",
    description:
      "eCommerce applicaion to book movie tickets Online using ASP.NET Core - MVC",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
    ],
    image: Eticket,
    source_code_link: "https://github.com/yohan98-dev/ASP.Net-eTickets",
  },
];

export { services, technologies, experiences, testimonials, projects };
