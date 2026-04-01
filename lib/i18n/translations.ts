export const locales = ["en", "ro"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Hello, I'm",
      scrollLabel: "Scroll to about section",
      scrollText: "Scroll",
      cta: {
        work: "View My Work",
        contact: "Contact Me",
      },
      titles: [
        "Senior Frontend Developer",
        "React & Next.js Specialist",
        "UI Performance Engineer",
      ],
      bio: "7+ years crafting performant, pixel-perfect interfaces in React & Next.js. From D3.js data visualizations to SaaS registration platforms — I build frontends that are fast, accessible, and genuinely beautiful.",
    },
    about: {
      heading: "About Me",
      whoIAm: "Who I Am",
      bio: "Senior Frontend Developer with 7+ years of experience building high-performance web applications with React, TypeScript, and Next.js. Passionate about crafting beautiful, accessible UIs that delight users and drive business results.",
      extra:
        "I specialize in building scalable frontend architectures, crafting pixel-perfect UIs, and collaborating closely with design and product teams to ship features that matter. Whether it's a D3.js visualization, a real-time Kanban board, or a multi-country SaaS platform — I bring the same level of care and craftsmanship to every project.",
      certifications: "Certifications",
      techStack: "Tech Stack",
      skillCategories: {
        Frontend: "Frontend",
        Styling: "Styling",
        "Data & Maps": "Data & Maps",
        "Backend & APIs": "Backend & APIs",
        "Testing & DX": "Testing & DX",
        "Analytics & DB": "Analytics & DB",
      },
    },
    projects: {
      heading: "Featured Projects",
      viewLive: "View Live",
    },
    experience: {
      heading: "Experience & Education",
      workExperience: "Work Experience",
      education: "Education",
    },
    contact: {
      heading: "Get In Touch",
      tagline:
        "I'm always open to discussing new opportunities, interesting projects, or just having a chat. Reach out via email or connect with me on LinkedIn.",
      email: "Send an Email",
      linkedin: "Connect on LinkedIn",
      orReach: "Or reach me directly:",
    },
    footer: {
      builtWith: "Built with Next.js & Framer Motion",
    },
  },

  ro: {
    nav: {
      about: "Despre",
      projects: "Proiecte",
      experience: "Experiență",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Bună, sunt",
      scrollLabel: "Derulează la secțiunea despre",
      scrollText: "Derulează",
      cta: {
        work: "Vezi Proiectele Mele",
        contact: "Contactează-mă",
      },
      titles: [
        "Dezvoltator Frontend Senior",
        "Specialist React & Next.js",
        "Inginer Performanță UI",
      ],
      bio: "7+ ani de experiență în crearea de interfețe performante și pixel-perfect în React & Next.js. De la vizualizări de date cu D3.js până la platforme SaaS — construiesc frontend-uri rapide, accesibile și cu adevărat frumoase.",
    },
    about: {
      heading: "Despre Mine",
      whoIAm: "Cine Sunt",
      bio: "Dezvoltator Frontend Senior cu peste 7 ani de experiență în construirea de aplicații web de înaltă performanță cu React, TypeScript și Next.js. Pasionat de crearea de interfețe frumoase și accesibile care încântă utilizatorii.",
      extra:
        "Sunt specializat în arhitecturi frontend scalabile, interfețe pixel-perfect și colaborare strânsă cu echipele de design și produs. Indiferent că e vorba de o vizualizare D3.js, un Kanban board în timp real sau o platformă SaaS multi-țară — aduc același nivel de atenție și măiestrie în fiecare proiect.",
      certifications: "Certificări",
      techStack: "Stivă Tehnologică",
      skillCategories: {
        Frontend: "Frontend",
        Styling: "Stilizare",
        "Data & Maps": "Date & Hărți",
        "Backend & APIs": "Backend & API-uri",
        "Testing & DX": "Testare & DX",
        "Analytics & DB": "Analiză & BD",
      },
    },
    projects: {
      heading: "Proiecte Recente",
      viewLive: "Vezi Live",
    },
    experience: {
      heading: "Experiență & Educație",
      workExperience: "Experiență Profesională",
      education: "Educație",
    },
    contact: {
      heading: "Ia Legătura",
      tagline:
        "Sunt mereu deschis să discut oportunități noi, proiecte interesante sau pur și simplu să avem o conversație. Scrie-mi pe email sau conectează-te cu mine pe LinkedIn.",
      email: "Trimite un Email",
      linkedin: "Conectează-te pe LinkedIn",
      orReach: "Sau contactează-mă direct:",
    },
    footer: {
      builtWith: "Construit cu Next.js & Framer Motion",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
