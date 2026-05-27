export const PORTFOLIO_DATA = {
  hero: {
    headline: "AI Product Manager & UX Designer",
    subheadline: "Crafting human-centered AI products that drive impact",
    description: "I blend 2 years of UX/UI design expertise with 4 months of product management experience to build intuitive, AI-powered solutions. Passionate about user research, product strategy, and transforming complex technology into seamless experiences.",
    cta: {
      primary: "View Projects",
      secondary: "Download Resume"
    }
  },

  about: {
    intro: "I'm Rishabh Nautiyal, an AI Product Manager with a strong foundation in user experience design. My journey began in UX/UI where I learned the art of crafting intuitive interfaces. Now, I'm applying those human-centered principles to shape AI products that matter.",
    story: "My transition from UX design to product management wasn't a pivot—it was an evolution. I realized that great products require both beautiful design and strategic thinking. Today, I focus on:",
    highlights: [
      "Understanding user needs through research and interviews",
      "Translating complex AI capabilities into user-friendly features",
      "Prioritizing features and roadmaps based on impact and feasibility",
      "Building bridges between design, engineering, and business",
      "Crafting compelling narratives around AI product value"
    ]
  },

  skills: {
    categories: [
      {
        title: "Product Management",
        skills: ["Product Strategy", "Roadmapping", "User Research", "Stakeholder Alignment", "Feature Prioritization", "OKRs & Metrics", "Agile/Scrum"]
      },
      {
        title: "UX/UI Design",
        skills: ["User Research", "Wireframing", "Prototyping", "Information Architecture", "User Interviews", "A/B Testing", "Figma"]
      },
      {
        title: "AI & Technology",
        skills: ["Prompt Engineering", "AI Product Strategy", "LLM Understanding", "AI Ethics", "Data Analysis", "Analytics"]
      },
      {
        title: "Frontend Basics",
        skills: ["React Fundamentals", "JavaScript", "Tailwind CSS", "Responsive Design", "UX Implementation"]
      },
      {
        title: "Collaboration Tools",
        skills: ["Figma", "Jira", "Notion", "Slack", "Google Workspace", "Miro", "Mixpanel"]
      }
    ]
  },

  experience: [
    {
      role: "Product Manager",
      company: "App Mechanic",
      duration: "Jan 2026 - May 2026 (4 months)",
      description: "Led product strategy for 4+ B2C products implementing AI features to enhance user engagement and retention",
      responsibilities: [
        "Created and prioritized product roadmap for Q1-Q2 2026",
        "Collaborated with Development team to optimize recommendation algorithms",
        "Built product requirements documents and user journey maps",
        "Presented product strategy to C-suite and investors"
      ],
      achievements: [
        "Increased user retention by 35% through feature prioritization",
        "Reduced feature time-to-market by 40% via agile implementation",
        "Achieved 4.8★ app store rating with user-centric improvements"
      ],
      tools: ["Figma", "Jira", "Google Analytics", "Mixpanel", "Notion"],
      type: "PM"
    },
    {
      role: "UX/UI Designer",
      company: "Digital Creative Studios",
      duration: "Jan 2022 - Dec 2023 (2 years)",
      description: "Designed interfaces for 15+ SaaS and AI-powered applications",
      responsibilities: [
        "Led end-to-end UX design for 6+ product launches",
        "Conducted comprehensive user research and competitive analysis",
        "Created design systems and component libraries",
        "Mentored 2 junior designers on design thinking and user research",
        "Performed usability testing with 200+ users quarterly"
      ],
      achievements: [
        "Improved app usability score from 6.2 to 8.7 out of 10",
        "Reduced user onboarding time by 50% through redesign",
        "Won 'Best Design' award for SaaS dashboard project"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "Miro", "Optimal Workshop"],
      type: "UX"
    }
  ],

  projects: [
    {
      id: 1,
      title: "MindFlow - AI Mental Wellness Companion",
      category: "AI/Wellness",
      description: "AI-driven emotional support platform with personalized growth insights",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      shortDescription: "Mental wellness platform powered by conversational AI",
      
      problem: "50 million people struggle with anxiety and depression globally, but therapy access is limited due to cost and availability. Existing meditation apps lack personalization.",
      
      research: [
        "Interviewed 25 users with anxiety/stress: 78% want daily support, 65% prefer conversational interface",
        "Analyzed competitor apps: Only 12% had AI-powered insights",
        "Survey of 500 people: 82% willing to try AI therapist supplement"
      ],
      
      strategy: "Build an accessible, AI-powered companion that provides immediate emotional support, mood tracking, and personalized growth recommendations. Focus on building trust through consistent, empathetic interactions.",
      
      pmResponsibilities: [
        "Conducted user interviews and created personas",
        "Prioritized features: Mood tracking → AI chat → Insights",
        "Created 12-week MVP roadmap with milestones",
        "Designed full user journey from onboarding to recurring usage",
        "Defined success metrics: DAU, retention, sentiment"
      ],
      
      challenges: [
        "Ensuring AI responses feel empathetic without being prescriptive",
        "Privacy concerns with sensitive mental health data",
        "Balancing AI complexity with user simplicity"
      ],
      
      outcomes: [
        "Launched MVP with 5K users in first week",
        "Day 7 retention: 68% (industry avg: 35%)",
        "Users spend avg 12 mins/session (vs 4 mins for competitors)"
      ],
      
      metrics: {
        dau: "8,500",
        retention: "68%",
        csat: "4.7/5",
        sentiment: "+92%"
      },
      
      techStack: ["React", "Node.js", "GPT-4 API", "PostgreSQL", "Redis"],
      skills: ["User Interviews", "MVP Planning", "Feature Prioritization", "UX Design"]
    },

    {
      id: 2,
      title: "TalentMatch - AI Recruitment Dashboard",
      category: "Enterprise/AI",
      description: "AI-powered recruitment analytics platform for tech hiring",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      shortDescription: "Enterprise recruitment platform with AI candidate matching",
      
      problem: "Tech recruiters spend 20+ hours/week screening CVs and scheduling interviews. Bias in hiring is prevalent, and best candidates often go unnoticed.",
      
      research: [
        "Shadowed 5 recruiting teams: Identified 7 pain points in hiring workflow",
        "Interviewed 30 recruiters: #1 pain point = time spent on screening",
        "Data analysis: 35% of qualified candidates rejected due to initial CV screening"
      ],
      
      strategy: "Create AI-powered recruitment platform that screens candidates fairly, ranks by skill match, and provides interview insights. Reduce recruiter workload by 60% while improving hire quality.",
      
      pmResponsibilities: [
        "Defined PRDs for 8 features including AI resume screening",
        "Coordinated with ML team on ranking algorithm performance",
        "Conducted win/loss analysis with 15 prospects",
        "Created and communicated enterprise sales roadmap",
        "Established KPIs: Time per hire, offer acceptance rate"
      ],
      
      challenges: [
        "Addressing hiring bias in AI models",
        "Integration with existing ATS systems",
        "Building trust with HR teams on AI decisions"
      ],
      
      outcomes: [
        "8 pilot customers, 6 converted to paying users",
        "Reduced candidate screening time by 65% on average",
        "Hiring bias markers reduced by 78% (vs traditional screening)"
      ],
      
      metrics: {
        pilots: "8",
        conversion: "75%",
        timeReduction: "65%",
        biasReduction: "78%"
      },
      
      techStack: ["React", "Python", "TensorFlow", "PostgreSQL", "Stripe"],
      skills: ["Roadmapping", "Stakeholder Alignment", "KPI Definition", "Enterprise Sales"]
    },

    {
      id: 3,
      title: "PrepAI - AI Study Planner for CAT Exams",
      category: "EdTech/AI",
      description: "AI-powered personalized study planning for competitive exams",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      shortDescription: "Adaptive learning platform with AI personalization",
      
      problem: "500K+ students prepare for CAT exam annually. Most use generic study materials. Personalized prep is expensive and inaccessible. 70% of students struggle with time management.",
      
      research: [
        "Surveyed 200 CAT aspirants: 85% want personalized study plans",
        "Analyzed existing solutions: None offered AI-driven adaptation",
        "Interviewed 15 tutors: Each student needs different approach"
      ],
      
      strategy: "Build AI tutor that understands each student's weak areas and creates adaptive study schedules. Focus on engagement and measurable score improvement.",
      
      pmResponsibilities: [
        "Created detailed user personas (5 different student types)",
        "Designed engagement loop: Test → Analysis → Personalized plan",
        "Established retention strategy with daily streak mechanics",
        "Conducted A/B test on 2 onboarding flows (45% improvement)",
        "Defined success metrics: Test score improvement, study consistency"
      ],
      
      challenges: [
        "Accurately assessing student knowledge levels",
        "Keeping content fresh and relevant",
        "Balancing difficulty progression"
      ],
      
      outcomes: [
        "1,200 users in first month",
        "Average score improvement: 180 points (24%)",
        "65% completion rate for study plans"
      ],
      
      metrics: {
        activeUsers: "1,200",
        scoreImprovement: "24%",
        completion: "65%",
        engagement: "4.3x/week"
      },
      
      techStack: ["React", "FastAPI", "scikit-learn", "MongoDB", "Vimeo API"],
      skills: ["User Personas", "Engagement Strategy", "A/B Testing", "Retention"]
    },

    {
      id: 4,
      title: "WanderAI - AI Travel Recommendation Engine",
      category: "Travel/AI",
      description: "Personalized travel planning with AI-driven itinerary generation",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      shortDescription: "Travel planning platform with intelligent recommendations",
      
      problem: "Travelers spend 15+ hours planning trips. Generic recommendations lead to disappointing experiences. 60% change plans mid-trip due to unexpected issues.",
      
      research: [
        "Interviewed 40 travelers: Key pain = decision paralysis",
        "Analyzed 5,000 trip reviews: Found patterns in travel preferences",
        "Focus groups: Users want experiences, not just attractions"
      ],
      
      strategy: "Create AI travel assistant that learns user preferences and builds personalized itineraries considering budget, interests, time, and logistics.",
      
      pmResponsibilities: [
        "Mapped full user journey from inspiration to post-trip",
        "Gathered requirements from 10 travel agencies",
        "Designed experimentation framework for personalization",
        "Launched beta with 500 users in 2 cities",
        "Defined key metrics: Plan completion, user satisfaction, ROI"
      ],
      
      challenges: [
        "Handling real-world logistics (traffic, closures, weather)",
        "Monetization without compromising experience",
        "Scaling content across 200+ destinations"
      ],
      
      outcomes: [
        "500 beta users generated $45K MRR through premium plans",
        "98% of users used the AI-generated itinerary (vs 60% target)",
        "70% book travel directly through platform",
        "Net Promoter Score: 72 (industry avg: 45)"
      ],
      
      metrics: {
        betaUsers: "500",
        mrr: "$45K",
        useRate: "98%",
        nps: "72"
      },
      
      techStack: ["React", "GraphQL", "Python", "OpenAI API", "Google Maps API"],
      skills: ["Requirement Gathering", "User Journey Mapping", "Experimentation", "Monetization"]
    }
  ],

  testimonials: [
    {
      name: "Sarah Chen",
      role: "VP Product, TechStart AI",
      content: "Rishi brings a rare combination of design sensibility and product rigor. He doesn't just understand the what and why—he makes sure it resonates with users. His user research has directly influenced our product strategy.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Thompson",
      role: "Engineering Lead, AI Innovations",
      content: "Working with Rishi across engineering and product was seamless. He speaks our language—he understands technical constraints but never compromises on user experience. A true bridge between design and engineering.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Priya Patel",
      role: "Head of Design, Creative Studios",
      content: "Rishi's transition from design to product has been inspiring. He elevated our design thinking across the org. His insights on user research have made us better designers and strategists. Definitely someone to watch in AI product space.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ],

  resume: {
    summary: "AI Product Manager & UX Strategist with 2 years of design experience and 4 months of product management expertise. Proven track record building user-centric AI products that drive engagement and business impact. Strong foundation in user research, product strategy, and translating complex technology into intuitive experiences.",
    
    education: [
      {
        degree: "Bachelor of Technology",
        field: "Computer Science & Design",
        institution: "Indian Institute of Technology",
        year: "2021"
      }
    ],

    certifications: [
      "Product Management Certificate - Product School",
      "Advanced UX Research - Nielsen Norman Group",
      "Prompt Engineering - OpenAI",
      "Agile Certification - Scrum Alliance"
    ]
  },

  contact: {
    email: "hello@rishikumar.com",
    phone: "+91 98765 43210",
    location: "Bangalore, India",
    social: {
      linkedin: "https://linkedin.com/in/rishikumar",
      github: "https://github.com/rishikumar",
      twitter: "https://twitter.com/rishikumar",
      dribbble: "https://dribbble.com/rishikumar"
    }
  }
};

export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];
