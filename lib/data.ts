// Non-translatable data — URLs, image paths, dates, identifiers.
// All display text (bio, descriptions, achievements) lives in lib/i18n/translations.ts.

export const personalInfo = {
  name: "Albert Mihai Ioan",
  displayName: "Mihai Albert",
  email: "mihai.albert.Ioan@gmail.com",
  phone: "+40770936013",
  linkedin: "https://www.linkedin.com/in/mihai-albert-732799162/",
} as const;

export interface Project {
  id: string;
  image: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "little-club-friends",
    image: "/images/little-club-friends.png",
    url: "https://little-club-friends.vercel.app/en",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
  },
  {
    id: "kings-court",
    image: "/images/kings-court.png",
    url: "https://kings-court-zeta.vercel.app/",
    tags: ["Next.js", "TypeScript", "Clerk", "Glassmorphism"],
  },
  {
    id: "aventura-si-calatorii",
    image: "/images/aventura-si-calatorii.png",
    url: "https://aventura-si-calatorii.vercel.app/",
    tags: ["Next.js", "React", "CSS Modules", "SSR"],
  },
];

export interface ExperienceEntry {
  id: string;
  period: string;
  company: string;
}

export const experience: ExperienceEntry[] = [
  { id: "cellebrite", period: "Feb 2024 – Present", company: "Cellebrite" },
  { id: "fortech", period: "Aug 2022 – Feb 2024", company: "Fortech" },
  { id: "bitsoftware", period: "Oct 2017 – Aug 2022", company: "BitSoftware" },
];

export interface EducationEntry {
  id: string;
  period: string;
  institution: string;
}

export const education: EducationEntry[] = [
  {
    id: "master",
    period: "2020 – 2022",
    institution: "Transilvania University of Brașov",
  },
  {
    id: "bachelor",
    period: "2017 – 2020",
    institution: "Transilvania University of Brașov",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Framer Motion"] },
  { category: "Data & Maps", items: ["D3.js", "Leaflet"] },
  { category: "Backend & APIs", items: ["Node.js", "REST APIs", "GraphQL"] },
  { category: "Testing & DX", items: ["Playwright", "Jest", "Storybook", "Git"] },
  { category: "Analytics & DB", items: ["Adobe Analytics", "MongoDB"] },
];

export const certifications: string[] = ["ReactJS", "Python 3", "English Language", "MongoDB"];
