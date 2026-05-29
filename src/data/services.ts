export interface Service {
  id: string; // e.g. "01"
  title: string;
  description: string;
  details?: string[];
  iconName?: string;
}

export const servicesData: Service[] = [
  {
    id: "01",
    title: "AI/ML Solutions",
    description: "Building intelligent systems using Machine Learning, predictive models, recommendation systems, and AI-powered applications for solving real-world problems."
  },
  {
    id: "02",
    title: "Full Stack Development",
    description: "Developing scalable and responsive web applications using MERN stack with secure authentication, APIs, and modern architectures."
  },
  {
    id: "03",
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces with wireframes, interactive prototypes, and intuitive user experiences."
  },
  {
    id: "04",
    title: "AI Integration",
    description: "Integrating AI features such as chatbots, automation tools, recommendation systems, healthcare intelligence, and smart assistants."
  },
  {
    id: "05",
    title: "Data Analytics",
    description: "Transforming raw data into meaningful insights using visualization, analytics tools, and data-driven decision making."
  },
  {
    id: "06",
    title: "Smart Solution Development",
    description: "Creating innovative real-world solutions through hackathons and projects including healthcare, automation, and intelligent systems."
  }
];
