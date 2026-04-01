export const personalInfo = {
  name: "Albert Mihai Ioan",
  displayName: "Mihai Albert",
  title: "Senior Frontend Developer",
  titles: [
    "Senior Frontend Developer",
    "React & Next.js Specialist",
    "UI Performance Engineer",
  ],
  email: "mihai.albert.Ioan@gmail.com",
  phone: "+40770936013",
  linkedin: "https://www.linkedin.com/in/mihai-albert-732799162/",
  bio: "Senior Frontend Developer with 7+ years of experience building high-performance web applications with React, TypeScript, and Next.js. Passionate about crafting beautiful, accessible UIs that delight users and drive business results.",
} as const;

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Little Club Friends",
    description:
      "Children's outdoor adventure school at Poiana Brașov offering skiing, snowboarding, biking, and hiking lessons for kids aged 4–14. Multi-language (i18n), booking CTAs, polaroid gallery.",
    image: "/images/little-club-friends.png",
    url: "https://little-club-friends.vercel.app/en",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
  },
  {
    title: "King's Court Pub",
    description:
      "Website for a medieval-themed pub in Brașov featuring event listings, weekly specials, operational info, and a Clerk-authenticated reservations area.",
    image: "/images/kings-court.png",
    url: "https://kings-court-zeta.vercel.app/",
    tags: ["Next.js", "TypeScript", "Clerk", "Glassmorphism"],
  },
  {
    title: "Aventură și Călătorii",
    description:
      "Tourism company website offering bus excursions, school trips, and coach rentals from Brașov. Features service showcase, testimonials, credentials, and a contact/booking form.",
    image: "/images/aventura-si-calatorii.png",
    url: "https://aventura-si-calatorii.vercel.app/",
    tags: ["Next.js", "React", "CSS Modules", "SSR"],
  },
];

export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  achievements: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: "Feb 2024 – Present",
    company: "Cellebrite",
    role: "Frontend Developer",
    achievements: [
      "Built complex SVG data visualizations with D3.js for investigative analytics dashboards",
      "Implemented GPS tracking maps with Leaflet for geolocation data analysis",
      "Developed Excel-like grid systems and interactive Kanban boards",
      "Collaborated closely with UX/design teams to deliver pixel-perfect interfaces",
    ],
  },
  {
    period: "Aug 2022 – Feb 2024",
    company: "Fortech",
    role: "Software Developer (Frontend Focus)",
    achievements: [
      "Built multi-country registration platform with EU VAT validation across 10+ countries",
      "Integrated Adobe Analytics for comprehensive user behaviour instrumentation",
      "Authored internal React Best Practices Guide adopted across the engineering team",
      "Led frontend architecture decisions on a large-scale SaaS product",
    ],
  },
  {
    period: "Oct 2017 – Aug 2022",
    company: "BitSoftware",
    role: "Software Developer (Frontend Focus)",
    achievements: [
      "Led Storybook component library initiative, improving design-development consistency",
      "Drove significant performance optimizations reducing load times by 40%+",
      "Collaborated directly with UI/UX designers to implement complex interactive features",
      "Mentored junior developers on React best practices and component architecture",
    ],
  },
];

export interface EducationEntry {
  period: string;
  institution: string;
  degree: string;
}

export const education: EducationEntry[] = [
  {
    period: "2020 – 2022",
    institution: "Transilvania University of Brașov",
    degree: "Master's Degree — Internet Technologies",
  },
  {
    period: "2017 – 2020",
    institution: "Transilvania University of Brașov",
    degree: "Bachelor's Degree — Mathematics & Computer Science",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Framer Motion"],
  },
  {
    category: "Data & Maps",
    items: ["D3.js", "Leaflet"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Testing & DX",
    items: ["Playwright", "Jest", "Storybook", "Git"],
  },
  {
    category: "Analytics & DB",
    items: ["Adobe Analytics", "MongoDB"],
  },
];

export const certifications: string[] = [
  "ReactJS",
  "Python 3",
  "English Language",
  "MongoDB",
];
