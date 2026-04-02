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
      bio: "8+ years crafting performant, pixel-perfect interfaces in React & Next.js. From D3.js data visualizations to SaaS registration platforms — I build frontends that are fast, accessible, and genuinely beautiful.",
    },
    about: {
      heading: "About Me",
      whoIAm: "Who I Am",
      bio: "Senior Frontend Developer with 8+ years of experience building high-performance web applications with React, TypeScript, and Next.js. Passionate about crafting beautiful, accessible UIs that delight users and drive business results.",
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
      items: {
        "little-club-friends": {
          title: "Little Club Friends",
          description:
            "Children's outdoor adventure school at Poiana Brașov offering skiing, snowboarding, biking, and hiking lessons for kids aged 4–14. Multi-language (i18n), booking CTAs, polaroid gallery.",
        },
        "kings-court": {
          title: "King's Court Pub",
          description:
            "Website for a medieval-themed pub in Brașov featuring event listings, weekly specials, operational info, and a Clerk-authenticated reservations area.",
        },
        "aventura-si-calatorii": {
          title: "Aventură și Călătorii",
          description:
            "Tourism company website offering bus excursions, school trips, and coach rentals from Brașov. Features service showcase, testimonials, credentials, and a contact/booking form.",
        },
      },
    },
    experience: {
      heading: "Experience & Education",
      workExperience: "Work Experience",
      education: "Education",
      items: {
        cellebrite: {
          role: "Frontend Developer",
          achievements: [
            "Built complex SVG data visualizations with D3.js for investigative analytics dashboards",
            "Implemented GPS tracking maps with Leaflet for geolocation data analysis",
            "Developed Excel-like grid systems and interactive Kanban boards",
            "Collaborated closely with UX/design teams to deliver pixel-perfect interfaces",
          ],
        },
        fortech: {
          role: "Software Developer (Frontend Focus)",
          achievements: [
            "Built multi-country registration platform with EU VAT validation across 10+ countries",
            "Integrated Adobe Analytics for comprehensive user behaviour instrumentation",
            "Authored internal React Best Practices Guide adopted across the engineering team",
            "Led frontend architecture decisions on a large-scale SaaS product",
          ],
        },
        bitsoftware: {
          role: "Software Developer (Frontend Focus)",
          achievements: [
            "Led Storybook component library initiative, improving design-development consistency",
            "Drove significant performance optimizations reducing load times by 40%+",
            "Collaborated directly with UI/UX designers to implement complex interactive features",
            "Mentored junior developers on React best practices and component architecture",
          ],
        },
      },
      educationItems: {
        master: {
          degree: "Master's Degree — Internet Technologies",
        },
        bachelor: {
          degree: "Bachelor's Degree — Mathematics & Computer Science",
        },
      },
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
      bio: "8+ ani de experiență în crearea de interfețe performante și pixel-perfect în React & Next.js. De la vizualizări de date cu D3.js până la platforme SaaS — construiesc frontend-uri rapide, accesibile și cu adevărat frumoase.",
    },
    about: {
      heading: "Despre Mine",
      whoIAm: "Cine Sunt",
      bio: "Dezvoltator Frontend Senior cu peste 8 ani de experiență în construirea de aplicații web de înaltă performanță cu React, TypeScript și Next.js. Pasionat de crearea de interfețe frumoase și accesibile care încântă utilizatorii.",
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
      items: {
        "little-club-friends": {
          title: "Little Club Friends",
          description:
            "Școală de aventuri în aer liber pentru copii la Poiana Brașov, oferind lecții de schi, snowboard, ciclism și drumeții pentru copii cu vârste între 4 și 14 ani. Multilingv (i18n), butoane de rezervare, galerie polaroid.",
        },
        "kings-court": {
          title: "King's Court Pub",
          description:
            "Website pentru un pub cu temă medievală din Brașov, cu evenimente, oferte săptămânale, informații operaționale și o zonă de rezervări autentificată cu Clerk.",
        },
        "aventura-si-calatorii": {
          title: "Aventură și Călătorii",
          description:
            "Website pentru o agenție de turism din Brașov ce oferă excursii cu autocarul, tabere școlare și închirieri de microbuze. Include prezentare servicii, testimoniale, credențiale și formular de contact.",
        },
      },
    },
    experience: {
      heading: "Experiență & Educație",
      workExperience: "Experiență Profesională",
      education: "Educație",
      items: {
        cellebrite: {
          role: "Dezvoltator Frontend",
          achievements: [
            "Creat vizualizări complexe de date SVG cu D3.js pentru dashboard-uri de analiză criminalistică",
            "Implementat hărți de urmărire GPS cu Leaflet pentru analiza datelor de geolocalizare",
            "Dezvoltat sisteme de grid similare Excel și table Kanban interactive",
            "Colaborat strâns cu echipele UX/design pentru livrarea de interfețe pixel-perfect",
          ],
        },
        fortech: {
          role: "Dezvoltator Software (Focus Frontend)",
          achievements: [
            "Construit platformă de înregistrare multi-țară cu validare TVA europeană pentru 10+ țări",
            "Integrat Adobe Analytics pentru instrumentarea comportamentului utilizatorilor",
            "Elaborat un Ghid Intern de Bune Practici React, adoptat de întreaga echipă de inginerie",
            "Condus deciziile de arhitectură frontend pe un produs SaaS la scară largă",
          ],
        },
        bitsoftware: {
          role: "Dezvoltator Software (Focus Frontend)",
          achievements: [
            "Condus inițiativa de bibliotecă de componente Storybook, îmbunătățind consistența design-dezvoltare",
            "Realizat optimizări semnificative de performanță, reducând timpii de încărcare cu 40%+",
            "Colaborat direct cu designerii UI/UX pentru implementarea funcționalităților interactive complexe",
            "Mentorat dezvoltatori juniori în bune practici React și arhitectură de componente",
          ],
        },
      },
      educationItems: {
        master: {
          degree: "Masterat — Tehnologii Internet",
        },
        bachelor: {
          degree: "Licență — Matematică & Informatică",
        },
      },
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
