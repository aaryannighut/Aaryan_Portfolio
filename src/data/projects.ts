export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "library-management",
    title: "Library Management System",
    description: "A digital library management system that automates book search, user access, and issue-returns with secure portals and database integrations.",
    longDescription: "A web-based platform developed as a Semester 3 mini-project to replace manual records. Features real-time book availability tracking, user logs, and detailed borrowing histories. Secured with administrative and student access control.",
    image: "/projects/library/01_LMS.jpg",
    screenshots: [
      "/projects/library/01_LMS.jpg",
      "/projects/library/02_LMS.jpg",
      "/projects/library/03_LMS.jpg",
      "/projects/library/04_LMS.jpg",
      "/projects/library/05_LMS.jpg",
      "/projects/library/06_LMS.jpg",
      "/projects/library/07_LMS.jpg"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/aaryannighut/Library-Management-System",
    liveUrl: "",
    featured: true,
    category: "ACADEMIC • PROJECT"
  },
  {
    id: "school-bus-management",
    title: "School Bus Management System",
    description: "A school bus management system with route scheduling, booking automation, and secure role-based portals for admins, drivers, and parents.",
    longDescription: "Designed to solve real-world transportation challenges. Features role-based dashboards for Admins (central control, route management, earnings tracker), Drivers (assigned buses, trip status, upcoming routes), and Parents (bus schedules, profile configurations, payment setup). Secured using JWT and Bcrypt session management.",
    image: "/projects/bus/02_SBMS.png",
    screenshots: [
      "/projects/bus/02_SBMS.png",
      "/projects/bus/03_SBMS.png",
      "/projects/bus/04_SBMS.png",
      "/projects/bus/05_SBMS.png",
      "/projects/bus/06_SBMS.png"
    ],
    tech: ["HTML", "CSS", "JavaScript", "JWT", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/aaryannighut/School-Bus-Management",
    liveUrl: "",
    featured: true,
    category: "ACADEMIC • PROJECT"
  },
  {
    id: "alertexa",
    title: "AlertExa - Online Examination System",
    description: "An AI-powered proctoring and quiz system combining camera face-api.js monitoring, noise detection, and secure tab-switch exam validation.",
    longDescription: "Developed as a Semester 5 mini-project focused on maintaining online exam integrity. Features automated proctoring alerts for tab switching, screen exit, or voice/noise triggers, alongside complete course/student dashboards.",
    image: "/projects/alertexa/01_Alertexa.png",
    screenshots: [
      "/projects/alertexa/01_Alertexa.png",
      "/projects/alertexa/3.1_Alertexa.png",
      "/projects/alertexa/3.2_Alertexa.png",
      "/projects/alertexa/04_Alertexa.png",
      "/projects/alertexa/05_Alertexa.png",
      "/projects/alertexa/06_Alertexa.png",
      "/projects/alertexa/07_Alertexa.png",
      "/projects/alertexa/08_Alertexa.png",
      "/projects/alertexa/09_Alertexa.png"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "face-api.js", "Web Audio API", "SweetAlert"],
    githubUrl: "https://github.com/aaryannighut/AlertExa",
    liveUrl: "",
    featured: true,
    category: "ACADEMIC • PROJECT"
  },
  {
    id: "wanderlust",
    title: "Wanderlust - Airbnb Clone",
    description: "A full-stack Airbnb clone featuring CRUD listings, Passport.js authentication, Cloudinary uploads, and Mapbox map integrations. Guided by Shradha Khapra.",
    longDescription: "Developed as a full-stack learning project to apply MVC design patterns and RESTful API structures under the guidance of Shradha Khapra from Apna College. Features secure JWT/Passport session handlers, interactive review/rating widgets, Mapbox SDK location search pinouts, and custom category-based UI filters.",
    image: "/projects/wanderlust/01.png",
    screenshots: [
      "/projects/wanderlust/01.png",
      "/projects/wanderlust/02.png",
      "/projects/wanderlust/03.png",
      "/projects/wanderlust/04.png",
      "/projects/wanderlust/05.png"
    ],
    tech: ["Bootstrap", "EJS", "Mapbox", "Cloudinary", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/aaryannighut/Wanderlust",
    liveUrl: "https://wanderlustdevelopedbyaaryan.onrender.com",
    featured: true,
    category: "PERSONAL • FULL STACK"
  },
  {
    id: "mediai",
    title: "MediAI - Healthcare Bot",
    description: "An AI-powered healthcare platform that delivers intelligent symptom analysis, disease prediction, and smart doctor recommendations through a seamless multilingual experience.",
    longDescription: "A comprehensive AI-driven healthcare system designed to provide preliminary medical insights and early diagnosis. Features an interactive AI chatbot for symptom analysis, a disease prediction engine, medical history logs, and doctor recommendation modules. Developed under the guidance of Prof. Narendra Ragav Venkatesan.",
    image: "/projects/mediai/01_MediAI.png",
    screenshots: [
      "/projects/mediai/01_MediAI.png",
      "/projects/mediai/02_MediAI.png",
      "/projects/mediai/03_MediAI.png",
      "/projects/mediai/04_MediAI.png",
      "/projects/mediai/05_MediAI.png",
      "/projects/mediai/06_MediAI.png"
    ],
    tech: ["Next.js", "Tailwind CSS", "JWT", "FastAPI", "Python", "Scikit-learn", "MongoDB"],
    githubUrl: "https://github.com/aaryannighut/MediAI",
    liveUrl: "",
    featured: true,
    category: "ACADEMIC • PROJECT"
  }
];



