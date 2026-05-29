export interface Social {
  name: string;
  url: string;
  iconName: string; // mapped to Lucide icons (or custom SVGs in Contact)
  color: string;
}

export const socialsData: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/aaryannighut",
    iconName: "Github",
    color: "#ffffff"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aaryannighut/",
    iconName: "Linkedin",
    color: "#0A66C2"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/aaryannighut07/",
    iconName: "Instagram",
    color: "#DD2A7B"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    iconName: "Twitter",
    color: "#1DA1F2"
  },
  {
    name: "Email",
    url: "mailto:aaryannighut07@gmail.com",
    iconName: "Mail",
    color: "#FFD43B"
  }
];
