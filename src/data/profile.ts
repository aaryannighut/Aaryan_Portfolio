export interface Profile {
  name: string;
  titles: string[];
  tagline: string;
  avatarUrl: string;
  resumeUrl: string;
  aboutStory: string[];
  quickFacts: { label: string; value: string }[];
  location: string;
  email: string;
  phone: string;
}

export const profileData: Profile = {
  name: "Aaryan Nighut",
  titles: ["Developer", "Designer", "AI Enthusiast", "Problem Solver"],
  tagline: "Crafting immersive digital experiences by combining elegant design with robust engineering and cutting-edge artificial intelligence.",
  avatarUrl: "/about-profile.jpg",
  resumeUrl: "https://drive.google.com/file/d/1My6Mao9D4xcX8LFjDxcO4IP_F3sgLWnL/view?usp=drive_link",
  location: "Thane, Maharashtra",
  email: "aaryannighut07@gmail.com",
  phone: "+91 99999 99999", // Replace with real phone or placeholder
  aboutStory: [
    "I am an innovative developer and designer with a deep curiosity for artificial intelligence and user experience. I build web applications that aren't just functional, but feel alive, responsive, and cinematic.",
    "Driven by the intersection of technology and art, I specialize in crafting interactive user interfaces, backend APIs, and integrating AI models to solve complex real-world problems.",
    "When I'm not coding, I experiment with visual design, study new machine learning papers, and collaborate on open-source projects."
  ],
  quickFacts: [
    { label: "Completed Projects", value: "15+" },
    { label: "Technologies Handled", value: "12+" },
    { label: "AI Integration Work", value: "5+" },
    { label: "Design Tools", value: "3+" }
  ]
};
