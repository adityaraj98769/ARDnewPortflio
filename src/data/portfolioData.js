export const portfolioData = {
  personal: {
    name: "Adityaraj Dwivedi",
    shortName: "Adityaraj",
    monogram: "AD",
    role: "Software Engineer",
    currentCompany: "Mhanth",
    currentCompanyUrl: "https://www.mhanth.club/",
    eyebrow: "SOFTWARE ENGINEER · FREELANCE FULL-STACK DEVELOPER",
    headline: "Building useful software with thoughtful engineering.",
    subheadline:
      "I'm Adityaraj Dwivedi, a Software Engineer at Mhanth and freelance full-stack developer focused on reliable backend systems, modern web applications, and practical AI integrations.",
    email: "adityarajdwivedi468@gmail.com",
    whatsapp: "+91 7318124388",
    whatsappClean: "917318124388",
    whatsappUrl: "https://wa.me/917318124388?text=Hello%20Adityaraj%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    location: "Lucknow, India",
    githubUrl: "https://github.com/adityaraj98769",
    githubHandle: "github.com/adityaraj98769",
    linkedinUrl: "https://www.linkedin.com/in/adityaraj-dwivedi-159906324",
    linkedinHandle: "linkedin.com/in/adityaraj-dwivedi",
    resumeUrl: "/assets/Adityaraj_Dwivedi_Canva_Style_Resume-tags_removed (1).pdf",
    resumeFilename: "Adityaraj_Dwivedi_CV.pdf",
    profileImage: "/assets/my-profile.jpeg",
    availability: "Software Engineer @ Mhanth · Open for freelance projects",
    statusPill: "Software Engineer @ Mhanth",
    coreStack: ["React", "Next.js", "FastAPI", "Node.js", "Python", "PostgreSQL"],
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Client Work", href: "#client-work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Recognition", href: "#appreciation" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    sectionNum: "01",
    sectionLabel: "About",
    title: "Thoughtful engineering, practical execution.",
    paragraphs: [
      "I'm a Software Engineer at Mhanth and freelance full-stack developer focused on building practical, dependable software that solves real-world problems. I work across modern frontend interfaces, backend APIs, database architecture, and applied AI integrations.",
      "My approach combines sound engineering fundamentals with a practical product mindset — writing clean, tested code, architecting reliable backend services, and delivering custom client solutions that feel effortless to use.",
      "Alongside building software systems at Mhanth, I actively partner with clients as a freelance engineer, delivering end-to-end web applications from architectural concept through production deployment.",
    ],
    facts: [
      {
        label: "Current Position",
        value: "Software Engineer at Mhanth",
        detail: "Engineering scalable web platforms, backend services, and digital products.",
        link: "https://www.mhanth.club/",
        linkLabel: "mhanth.club ↗",
      },
      {
        label: "Freelance Practice",
        value: "Independent Full-Stack Developer",
        detail: "End-to-end design, development, and deployment for commercial client projects.",
      },
      {
        label: "Primary Focus Areas",
        value: "Full-Stack Web Systems & Applied AI",
        detail: "Modern React/Next.js frontends, FastAPI/Node backend services, PostgreSQL & Supabase.",
      },
      {
        label: "Hackathon Honors",
        value: "1st Place Winner — InnovativeX",
        detail: "Ranked 16th among 55 competing teams in DevSummit 24-Hour Hackathon.",
      },
    ],
  },

  featuredProjects: [
    {
      id: "waste2worth",
      name: "Waste2Worth (W2W)",
      badge: "InnovativeX 1st Place Champion",
      tagline: "Gamified AI waste recognition & carbon savings ecosystem",
      purpose:
        "Transforms daily waste management into an incentivized, educational experience using multimodal AI vision to classify waste, estimate CO₂ savings, and facilitate upcycling.",
      description:
        "Engineered with Google Gemini 2.5 Flash Vision API for real-time item classification into 5 distinct waste streams (Recyclable, Compostable, Hazardous, Landfill, Upcyclable). Integrated an LCA-based carbon credit algorithm, Supabase Auth/Storage, and a peer-to-peer upcycling marketplace.",
      technologies: ["Google Gemini 2.5 Flash", "Supabase", "React", "Python", "Vercel"],
      highlights: [
        "Multimodal AI waste classification with CO₂ and water conservation metrics",
        "Carbon credit wallet engine with daily streak multipliers (up to 3x) and rate limiting",
        "P2P upcycling marketplace with storage bucket uploads and direct contact channels",
        "Campus dashboard with role-based invite codes (e.g. GREEN2026) & live team leaderboards",
      ],
      liveUrl: "https://waste2-iota.vercel.app/",
      githubUrl: "https://github.com/adityaraj98769",
    },
    {
      id: "skillsync",
      name: "SkillSync-AI",
      badge: "AI Resume & Career Platform",
      tagline: "Intelligent résumé analysis and interview preparation platform",
      purpose:
        "Analyzes resumes against target job descriptions using TF-IDF vectorization to identify skill gaps, compute match scores, and generate customized interview questions.",
      description:
        "Built with FastAPI and React to parse candidate resumes, compare lexical similarities against job descriptions, and deliver actionable recommendations to improve applicant fit and ATS compatibility.",
      technologies: ["Python", "FastAPI", "TF-IDF Vectorizer", "React.js", "Vercel"],
      highlights: [
        "TF-IDF similarity scoring engine evaluating semantic resume-to-job match",
        "Automated missing-skill gap detection and customized interview preparation guidance",
        "High-performance REST API backend built on asynchronous FastAPI endpoints",
      ],
      liveUrl: "https://s-kill-sync.vercel.app/",
      githubUrl: "https://github.com/adityaraj98769",
    },
    {
      id: "sentinel-assistant",
      name: "Sentinel Job Automation Assistant",
      badge: "Backend Automation & ML",
      tagline: "Intelligent job workflow automation and system services",
      purpose:
        "Streamlines and automates repetitive applicant processes by integrating third-party APIs, ML decision logic, and reliable backend services.",
      description:
        "Engineered with Node.js and modular REST APIs to eliminate manual applicant friction, providing structured process pipelines, rate-limiting, and error-resilient automation workflows.",
      technologies: ["Node.js", "REST APIs", "ML Logic", "Automation", "Git"],
      highlights: [
        "Automated workflow pipeline reducing manual effort for repetitive tasks",
        "Modular API integrations with robust error handling and structured request logging",
      ],
      githubUrl: "https://github.com/adityaraj98769",
    },
  ],

  clientProjects: [
    {
      name: "Takshay Design",
      category: "Full-Stack Production Application",
      description:
        "Built and deployed a production-level full-stack web application with responsive frontend, dynamic admin CMS, secure authentication, database workflows, and cloud hosting.",
      technologies: ["Full-Stack", "Admin CMS", "Authentication", "REST APIs", "PostgreSQL"],
      liveUrl: "https://www.takshaydesign.in/",
    },
    {
      name: "Kashi Vedic",
      category: "Client Portfolio & Consultation",
      description:
        "Engineered a custom, responsive client portfolio website for spiritual consultancy services with clean typography, service catalog displays, and direct consultation scheduling.",
      technologies: ["React", "Responsive UI", "Custom Design", "Production Live"],
      liveUrl: "https://www.kashivedic.online/",
    },
    {
      name: "Titan Fitness Gym",
      category: "Commercial Fitness Platform",
      description:
        "Developed a high-energy client website for a fitness gym featuring class schedule showcases, membership tiers, athletic visual branding, and mobile-first inquiry capture.",
      technologies: ["Client Project", "Modern UI", "Vercel Deploy", "Lead Gen"],
      liveUrl: "https://titan-fitnessgym-dun.vercel.app/",
    },
    {
      name: "Custom Portfolio Showcase",
      category: "Bespoke Portfolio Build",
      description:
        "Crafted a personal showcase with clean layouts, responsive typography, and optimized asset loading to present digital identity and technical projects effectively.",
      technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
      liveUrl: "https://udayra-custom.vercel.app/",
    },
  ],

  skills: {
    sectionNum: "03",
    sectionLabel: "Skills",
    title: "Technical Toolkit",
    subtitle: "Technologies, frameworks, and tools I use to design, build, and deploy software.",
    categories: [
      {
        name: "Frontend",
        skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
      },
      {
        name: "Backend",
        skills: ["FastAPI", "Node.js", "RESTful APIs", "OpenAPI Specification", "JWT Authentication", "Express"],
      },
      {
        name: "Databases & Storage",
        skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL"],
      },
      {
        name: "AI & Data Workflows",
        skills: ["Google Gemini API", "Multimodal Vision", "TF-IDF Vectorization", "EDA", "Feature Engineering"],
      },
      {
        name: "Tools & Deployment",
        skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
      },
      {
        name: "Currently Exploring",
        skills: ["Docker", "CI/CD Pipelines", "Automated Testing", "Redis", "System Architecture"],
      },
    ],
  },

  experienceAndEducation: {
    sectionNum: "04",
    sectionLabel: "Experience & Roles",
    title: "Engineering Experience & Milestones",
    subtitle: "A timeline of software engineering roles, client engagements, and competition achievements.",
    timeline: [
      {
        period: "2026 — Present",
        type: "Full-Time Role",
        role: "Software Engineer",
        institution: "Mhanth",
        orgUrl: "https://www.mhanth.club/",
        details: [
          "Engineering scalable web software, user interfaces, backend services, and application workflows.",
          "Collaborating on feature architecture, API integrations, performance optimization, and production platform maintenance.",
        ],
        technologies: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "REST APIs"],
      },
      {
        period: "2024 — Present",
        type: "Freelance",
        role: "Freelance Full-Stack Developer",
        institution: "Independent Practice",
        details: [
          "Architecting and delivering bespoke production web applications, admin CMS systems, and digital client platforms.",
          "Delivered commercial projects including Takshay Design (e-commerce & CMS), Kashi Vedic (consultation portal), and Titan Fitness Gym.",
        ],
        technologies: ["React", "Tailwind CSS", "Node.js", "Supabase", "REST APIs", "Vercel"],
      },
      {
        period: "2026",
        type: "Project Engagement",
        role: "Full-Stack Developer",
        institution: "Code Assure",
        details: [
          "Engineered and deployed Takshay Design, a production-level commercial web application.",
          "Implemented responsive UI components, integrated backend REST APIs, built authentication workflows, and managed production database deployment.",
        ],
        technologies: ["React", "Node.js", "REST APIs", "PostgreSQL", "CMS"],
      },
      {
        period: "2026",
        type: "Hackathon Award",
        role: "1st Position Winner — InnovativeX Hackathon",
        institution: "NPGC College, Lucknow",
        details: [
          "Developed and presented Waste-to-Worth (W2W), an AI-assisted waste sorting and carbon credit application powered by Google Gemini vision.",
          "Secured 1st rank among competing engineering teams for technical innovation and real-world sustainability impact.",
        ],
        technologies: ["Google Gemini 2.5 Flash", "Supabase", "React", "AI Inference"],
      },
      {
        period: "2023 — 2027",
        type: "Academic Foundation",
        role: "Computer Science & Engineering",
        institution: "Engineering Education",
        details: [
          "Rigorous foundational coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Applied Artificial Intelligence.",
        ],
        technologies: ["C++", "Java", "Python", "Data Structures", "Algorithms"],
      },
    ],
  },

  appreciation: {
    sectionNum: "05",
    sectionLabel: "Recognition",
    title: "Leadership Appreciation",
    subtitle:
      "Honored and felicitated by Chancellor, Vice Chancellor & Academic Leadership following our 1st place championship in the InnovativeX Hackathon.",
    cards: [
      {
        id: "vc-office",
        badge: "VC Office Felicitation",
        title: "Recognition by Vice Chancellor, Dean of Academics & HOD",
        image: "/assets/appreciation-vc.jpg",
        description:
          "Felicitated in the Vice Chancellor's office by the Hon'ble Vice Chancellor, Dean of Academics, and Head of Department (HOD), celebrating our 1st Position Championship in the InnovativeX Hackathon with Waste-to-Worth.",
        metadata: [
          { label: "Honored By", value: "Hon'ble Vice Chancellor, Dean of Academics & HOD" },
          { label: "Occasion", value: "InnovativeX Hackathon 1st Position Trophy" },
          { label: "Domain", value: "Applied AI & Sustainability Engineering" },
        ],
        caption:
          "Felicitation in the Vice Chancellor's Office by Hon'ble Vice Chancellor, Dean of Academics, and HOD celebrating 1st Position in InnovativeX Hackathon",
      },
      {
        id: "stage-ceremony",
        badge: "Stage Ceremony",
        title: "Felicitation by Hon'ble Chancellor & Leadership",
        image: "/assets/appreciation-stage.jpg",
        description:
          "Presented with certificates of merit and official accolades on stage by the Hon'ble Chancellor and senior academic dignitaries during the felicitation assembly.",
        metadata: [
          { label: "Honored By", value: "Hon'ble Chancellor & Senior Leadership" },
          { label: "Occasion", value: "Leadership Assembly & Felicitation Ceremony" },
          { label: "Award", value: "Certificate of Merit & Innovation Accolade" },
        ],
        caption:
          "Felicitation on Stage by Hon'ble Chancellor and Academic Leadership celebrating Hackathon Victory",
      },
    ],
  },

  contact: {
    sectionNum: "06",
    sectionLabel: "Contact",
    heading: "Have something meaningful to build?",
    lead: "I'm interested in thoughtful engineering, useful products, and opportunities to keep learning and building. Whether you have an open role, a project collaboration, or freelance requirements, feel free to reach out.",
    email: "adityarajdwivedi468@gmail.com",
    whatsapp: "+91 7318124388",
    whatsappUrl: "https://wa.me/917318124388?text=Hello%20Adityaraj%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    githubUrl: "https://github.com/adityaraj98769",
    githubHandle: "github.com/adityaraj98769",
    linkedinUrl: "https://www.linkedin.com/in/adityaraj-dwivedi-159906324",
    linkedinHandle: "linkedin.com/in/adityaraj-dwivedi",
    emailjs: {
      serviceId: "service_im4c2ls",
      templateId: "template_862ep26",
      publicKey: "0KpnCeTqIKol1X-rD",
    },
  },
};
