export interface Skill {
  name: string;
  level: number; // 0-100 for visual progress if needed, or simply name-based
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "C Programming", level: 70 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "TypeScript", level: 90 }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Next.js", level: 92 },
      { name: "React.js", level: 95 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Bootstrap", level: 80 },
      { name: "MERN Stack", level: 90 },
      { name: "MVC Framework", level: 85 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Canva", level: 85 },
      { name: "Poster Making", level: 75 }
    ]
  },
  {
    category: "AI Tools",
    skills: [
      { name: "AIML", level: 85 },
      { name: "Data Analysis and Data Visualization", level: 80 },
      { name: "OpenAI API", level: 90 },
      { name: "Cursor AI", level: 95 }
    ]
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "Data Structure and Algorithm", level: 85 }
    ]
  },
  {
    category: "Cloud",
    skills: [
      { name: "Vercel", level: 95 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "Netlify", level: 90 }
    ]
  }
];
