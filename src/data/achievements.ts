export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: "certification" | "hackathon" | "internship" | "achievement";
  description: string;
  link?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "fe-rank-2",
    title: "2nd Rank in First Year CSE (AIML)",
    organization: "Lokmanya Tilak College of Engineering - CSE(AIML) Dept.",
    date: "A.Y. 2023-24",
    category: "achievement",
    description: "Secured 2nd Rank in First Year CSE(AIML) department with a CGPA of 9.13. Awarded a Certificate of Excellence and trophy for outstanding academic performance.",
    link: "https://www.linkedin.com/posts/aaryannighut_achievement-engineeringjourney-aiml-activity-7367249179330461696-5Ag8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4s6MB0gnhsmnSEoZyXObBN7UWOie0pRk"
  },
  {
    id: "ifuture-cloud-intern",
    title: "Cloud Internship Program (30 Hrs)",
    organization: "iFuture Technologies Pvt. Ltd., Thane",
    date: "July 2024",
    category: "internship",
    description: "Successfully completed a 30-hour Cloud Internship. Gained hands-on experience with Microsoft Server Management and Offline Apps in Private Cloud setups.",
    link: "https://www.linkedin.com/posts/aaryannighut_cloudcomputing-internshipexperience-microsoft-activity-7367572821562056706-r19P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4s6MB0gnhsmnSEoZyXObBN7UWOie0pRk"
  },
  {
    id: "iiie-poster-3rd",
    title: "3rd Rank - Technical Poster Presentation",
    organization: "IIIE Belapur & LTCE CSE(AIML) Dept.",
    date: "Jan 27, 2025",
    category: "achievement",
    description: "Secured 3rd Rank in the Technical Poster Presentation Competition on the 68th IIIE Foundation Day for presenting an innovative idea on 'Bus Management System Using AI'.",
    link: "https://www.linkedin.com/posts/aaryannighut_posterpresentation-iiie-busmanagementsystem-activity-7369016179371319297-zK3-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4s6MB0gnhsmnSEoZyXObBN7UWOie0pRk"
  },
  {
    id: "se-rank-3",
    title: "3rd Rank in Second Year CSE (AIML)",
    organization: "Lokmanya Tilak College of Engineering - CSE(AIML) Dept.",
    date: "A.Y. 2024-25",
    category: "achievement",
    description: "Secured 3rd Rank in Second Year CSE(AIML) department with an SGPA of 10 in Semester 3 and 9.42 in Semester 4, achieving an overall average CGPA of 9.71. Awarded a Certificate of Excellence.",
    link: "https://www.linkedin.com/posts/aaryannighut_achievement-topper-academicexcellence-activity-7402667140555735040-d373?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4s6MB0gnhsmnSEoZyXObBN7UWOie0pRk"
  },
  {
    id: "uai-hawkathon-2026",
    title: "3rd Rank - UAI Hawkathon 2026",
    organization: "Universal AI University, Karjat",
    date: "March 12-13, 2026",
    category: "hackathon",
    description: "Secured 3rd Rank in UAI Hawkathon 2026 with team TensorX. Developed an Off-Road Semantic Scene Segmentation model powered by Vision Transformers, achieving 79.4% pixel accuracy and 0.521 IoU score.",
    link: "https://www.linkedin.com/posts/aaryannighut_hackathon-hawkathon-uai-activity-7453472495170461696-heDW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4s6MB0gnhsmnSEoZyXObBN7UWOie0pRk"
  },
  {
    id: "nirman-hackathon-2026",
    title: "7th Position - Nirman Hackathon 2026",
    organization: "Amity University Mumbai",
    date: "April 15-17, 2026",
    category: "hackathon",
    description: "Secured 7th Position and finished as a Top 10 Finalist nationally among 240+ teams with team LTCE-X. Built 'RuralTriage AI', an AI-driven healthcare system with symptom analysis, image-based diagnosis, and integrated Patient/Doctor/Pharmacist dashboards.",
    link: "https://www.linkedin.com/posts/aaryannighut_hackathon-nirman-nirmanhackathon-activity-7454916270627561473-XxqK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW4s6MB0gnhsmnSEoZyXObBN7UWOie0pRk"
  }
];

