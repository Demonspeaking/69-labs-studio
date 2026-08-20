import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  ChevronLeft,
  ChevronRight,
  Code2,
  Dumbbell,
  Film,
  Fingerprint,
  Gauge,
  Github,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  Newspaper,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Wrench,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  type: string;
  status: "live" | "coming-soon";
  icon: typeof Code2;
  visual: string;
};

type ProfileLink = {
  label: string;
  handle: string;
  href: string;
  icon: typeof Github;
};

const projects: Project[] = [
  {
    id: "idverse",
    title: "IDverse",
    description:
      "A customizable identity-card template platform with fictional and creative ID designs, browser-based personalization, and print-ready downloads.",
    tech: ["React", "Supabase", "Razorpay", "Netlify"],
    liveLink: "https://idverse-69labs.netlify.app/",
    type: "Creative Identity Platform",
    status: "live",
    icon: Fingerprint,
    visual: "idverse",
  },
  {
    id: "vorn-news",
    title: "VORN News — Voice of Republic Nation",
    description:
      "An independent digital news platform covering current affairs and important developments from India and around the world.",
    tech: ["React", "Vite", "Supabase", "Automated Publishing"],
    liveLink: "https://vorn.website/",
    type: "Independent News Platform",
    status: "live",
    icon: Newspaper,
    visual: "vorn",
  },
  {
    id: "ecom-store",
    title: "69 LABS E-Commerce Storefront",
    description:
      "A custom apparel storefront with a real-time print customizer, dynamic shopping drawer, and sandbox payment flow.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://69labs-store.replit.app/",
    type: "Web Application",
    status: "live",
    icon: MonitorSmartphone,
    visual: "commerce",
  },
  {
    id: "fitness-tracker",
    title: "AI Fitness & Nutrition Companion",
    description:
      "A health-platform experiment with a hardware step counter, persistent data, and an AI vision plate analyzer.",
    tech: ["React Native", "Expo", "Gemini API", "Clerk"],
    liveLink: "https://69labs-fitness-companion.replit.app/",
    type: "Mobile Framework Showcase",
    status: "live",
    icon: Gauge,
    visual: "fitness",
  },
  {
    id: "menuflow",
    title: "MenuFlow OS",
    description:
      "A digital restaurant menu and real-time in-browser ordering experience built around modern culinary workflows.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveLink: "https://website-rebuild-mu.vercel.app/",
    type: "Restaurant Web Application",
    status: "live",
    icon: UtensilsCrossed,
    visual: "menu",
  },
  {
    id: "coming-soon",
    title: "The Next Build",
    description:
      "Reserved for the next website, app, experiment, or personal project that moves from an idea into a released build.",
    tech: ["Details TBA", "Coming Soon"],
    type: "Future Project",
    status: "coming-soon",
    icon: Layers3,
    visual: "soon-two",
  },
];

const portraits = [
  {
    src: "./images/vineet-bike.webp",
    alt: "Vineet Yadav sitting on a motorcycle",
    label: "Vineet / Main portrait",
    className: "portrait-bike",
  },
  {
    src: "./images/vineet-fountain.webp",
    alt: "Vineet Yadav standing in front of a fountain",
    label: "Vineet / Outdoors",
    className: "portrait-fountain",
  },
  {
    src: "./images/vineet-formal.webp",
    alt: "Vineet Yadav wearing a black suit",
    label: "Vineet / Formal",
    className: "portrait-formal",
  },
  {
    src: "./images/vineet-casual.webp",
    alt: "Vineet Yadav wearing a red and black jacket",
    label: "Vineet / Casual",
    className: "portrait-casual",
  },
];

const profileLinks: ProfileLink[] = [
  { label: "GitHub", handle: "@Demonspeaking", href: "https://github.com/Demonspeaking", icon: Github },
  { label: "Instagram", handle: "@gannekazeus", href: "https://www.instagram.com/gannekazeus/", icon: Instagram },
  { label: "YouTube", handle: "@VineetReviews", href: "https://www.youtube.com/@VineetReviews", icon: Youtube },
  { label: "LinkedIn", handle: "Vineet Yadav", href: "https://www.linkedin.com/in/vineet-yadav-8b1a3a22a", icon: Linkedin },
  { label: "X", handle: "@69labstudio", href: "https://x.com/69labstudio", icon: X },
  { label: "VORN", handle: "Voice of Republic Nation", href: "https://vorn.website/", icon: Newspaper },
];

const identityTags = [
  "Vineet Yadav",
  "69 Labs Studio",
  "69labstudio · Vineet Yadav",
  "@gannekazeus",
  "VORN",
  "Voice of Republic Nation",
  "IDverse",
];

const navItems = [
  ["Projects", "#work"],
  ["About", "#about"],
  ["Education", "#education"],
  ["Profiles", "#profiles"],
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="69 Labs Studio home">
      <span className="brand-mark">69</span>
      <span className="brand-copy">
        <strong>LABS</strong>
        <small>STUDIO</small>
      </span>
    </a>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className={`project-visual ${project.visual}`} aria-hidden="true">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
        <small>{project.status === "live" ? "PUBLISHED BUILD" : "IN PROGRESS"}</small>
      </div>
      <div className="visual-canvas">
        <div className="visual-glow" />
        <div className="visual-icon">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className="visual-lines">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-float-card">
          <b>{project.status === "live" ? "BUILT" : "NEXT"}</b>
          <span>{project.type}</span>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span /> {eyebrow}
      </p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function PortraitCarousel() {
  const [activePortrait, setActivePortrait] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePortrait((current) => (current + 1) % portraits.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActivePortrait((current) => (current - 1 + portraits.length) % portraits.length);
  };

  const showNext = () => {
    setActivePortrait((current) => (current + 1) % portraits.length);
  };

  return (
    <aside className="portrait-carousel" aria-label="Photographs of Vineet Yadav">
      <div className="portrait-ring ring-outer" aria-hidden="true" />
      <div className="portrait-ring ring-inner" aria-hidden="true" />
      <div className="portrait-frame" aria-live="polite">
        {portraits.map((portrait, index) => (
          <img
            className={`${portrait.className} ${index === activePortrait ? "portrait-active" : ""}`}
            src={portrait.src}
            alt={index === activePortrait ? portrait.alt : ""}
            width={1600}
            height={1200}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            key={portrait.src}
          />
        ))}
        <span className="portrait-index">0{activePortrait + 1} / 04</span>
        <span className="portrait-caption">{portraits[activePortrait].label}</span>
      </div>

      <button className="portrait-arrow portrait-previous" type="button" onClick={showPrevious} aria-label="Show previous photograph">
        <ChevronLeft size={20} />
      </button>
      <button className="portrait-arrow portrait-next" type="button" onClick={showNext} aria-label="Show next photograph">
        <ChevronRight size={20} />
      </button>

      <div className="portrait-dots" aria-label="Choose a photograph">
        {portraits.map((portrait, index) => (
          <button
            className={index === activePortrait ? "active" : ""}
            type="button"
            onClick={() => setActivePortrait(index)}
            aria-label={`Show photograph ${index + 1}: ${portrait.label}`}
            aria-pressed={index === activePortrait}
            key={portrait.src}
          >
            <img src={portrait.src} alt="" width={72} height={72} loading="lazy" />
          </button>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top">
      <div className="page-noise" aria-hidden="true" />

      <header className="site-header">
        <div className="nav-shell">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>
          <span className="availability archive-status">
            <span /> Personal archive · 2026
          </span>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label} <ChevronRight size={16} />
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span /> Vineet Yadav · Raebareli, India
          </p>
          <h1 id="hero-title">
            I turn ideas
            <em> into things.</em>
          </h1>
          <p className="hero-copy">
            I&apos;m Vineet—the person behind 69 Labs Studio, VORN, and IDverse.
            I use AI-assisted development to build websites and apps, and creative
            tools to edit, design, experiment, and publish what I learn.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a className="text-link" href="#about">
              About me <ArrowDownRight size={18} />
            </a>
          </div>
        </div>

        <PortraitCarousel />

        <div className="hero-strip">
          <div>
            <small>BUILD / AI-ASSISTED</small>
            <span>Websites, applications & product ideas</span>
          </div>
          <div>
            <small>CREATE / HANDS-ON</small>
            <span>Video editing, design & visual content</span>
          </div>
          <div>
            <small>LEARN / APPLY</small>
            <span>Fitness, nutrition & mechanical knowledge</span>
          </div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have taken from idea to release."
          copy="A transparent record of live websites, app experiments, and works in progress. These are AI-assisted builds directed, tested, and shipped by me."
        />
        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <ProjectVisual project={project} />
              <div className="project-content">
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{project.type}</p>
                  <b className={project.status === "live" ? "status-live" : "status-soon"}>
                    {project.status === "live" ? "Live" : "Coming soon"}
                  </b>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list" aria-label={`${project.title} technology stack`}>
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  {project.liveLink ? (
                    <a className="button button-small" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Open project <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="button button-small button-disabled">
                      Not released yet <LockKeyhole size={15} />
                    </span>
                  )}
                  <span className="source-note"><Sparkles size={14} /> AI-assisted workflow</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-grid">
          <SectionHeading eyebrow="About me" title="Curious, practical, and honest about the process." />
          <div className="about-copy">
            <span className="placeholder-label">Builder · Editor · Lifelong learner</span>
            <p>
              I&apos;m Vineet Yadav. I build personal websites and application ideas
              through AI-assisted development—often called vibe coding. I do not
              claim to be a traditional programmer; my strength is turning an idea
              into a clear product, directing the tools, solving problems, testing
              the result, and learning how to ship it safely.
            </p>
            <p>
              69 Labs Studio is the umbrella for my projects and experiments. VORN
              is my independent news platform, while IDverse explores customizable
              fictional and creative identity-card designs. This site is my living
              resume: work, education, knowledge, milestones, and future updates.
            </p>
          </div>
        </div>

        <div className="skills-grid skills-grid-four">
          <article>
            <Braces size={22} />
            <small>01 / AI-ASSISTED BUILD</small>
            <h3>Websites & apps</h3>
            <div className="skill-cloud">
              {["Vibe coding", "React", "Supabase", "GitHub", "UI design", "Testing & deployment"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <Film size={22} />
            <small>02 / CREATIVE TOOLS</small>
            <h3>Editing & design</h3>
            <div className="skill-cloud">
              {["CapCut", "VN", "Filmora", "Alight Motion", "Canva"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <Dumbbell size={22} />
            <small>03 / APPLIED KNOWLEDGE</small>
            <h3>Fitness & nutrition</h3>
            <div className="skill-cloud">
              {["Diet fundamentals", "Workout planning", "Fat loss", "Muscle building", "Body recomposition"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <Wrench size={22} />
            <small>04 / TECHNICAL TRADE</small>
            <h3>Mechanical foundation</h3>
            <div className="skill-cloud">
              {["ITI mechanical trade", "Practical systems", "Tools & maintenance", "Hands-on learning"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        </div>

        <div className="experience-placeholder experience-honest">
          <span>EXPERIENCE / HONEST VERSION</span>
          <div>
            <h3>Independent work, not professional employment.</h3>
            <p>I build, edit, learn, and publish my own projects. Every live result is part of that practice.</p>
          </div>
          <ShieldCheck size={22} />
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <SectionHeading
          eyebrow="Education"
          title="Formal study across society, health, and mechanics."
          copy="Completed credentials and current study are labelled separately so the record stays accurate."
        />
        <div className="education-timeline">
          <article>
            <div className="education-icon"><GraduationCap size={24} /></div>
            <div className="education-date">2023—2026</div>
            <div>
              <span className="credential-status status-complete">Completed</span>
              <h3>Bachelor of Arts</h3>
              <p>Sociology and Education Science</p>
            </div>
          </article>
          <article>
            <div className="education-icon"><BookOpen size={24} /></div>
            <div className="education-date">CURRENT</div>
            <div>
              <span className="credential-status status-current">Pursuing</span>
              <h3>Diploma in Nutrition & Health Education</h3>
              <p>Indira Gandhi National Open University (IGNOU)</p>
            </div>
          </article>
          <article>
            <div className="education-icon"><Wrench size={24} /></div>
            <div className="education-date">2021—2023</div>
            <div>
              <span className="credential-status status-complete">Completed</span>
              <h3>Industrial Training Institute (ITI)</h3>
              <p>Mechanical trade education and practical technical training</p>
            </div>
          </article>
        </div>
      </section>

      <section className="profiles-section section-shell" id="profiles">
        <SectionHeading
          eyebrow="Identity & profiles"
          title="One person, several projects and public names."
          copy="These are the official profiles, project names, and identities connected to Vineet Yadav and 69 Labs Studio."
        />

        <div className="identity-tags" aria-label="Names associated with Vineet Yadav">
          {identityTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="profile-grid">
          {profileLinks.map((profile) => {
            const Icon = profile.icon;
            return (
              <a href={profile.href} target="_blank" rel="noopener noreferrer" key={profile.href}>
                <Icon size={22} />
                <span>
                  <small>{profile.label}</small>
                  <strong>{profile.handle}</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            );
          })}
        </div>

        <div className="update-panel current-update">
          <div>
            <span className="placeholder-label">Current chapter · 2026</span>
            <blockquote>Building IDverse, growing VORN, publishing app experiments, and learning how ideas become reliable products.</blockquote>
          </div>
          <p>69LABSTUDIO.ONLINE</p>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <BrandMark />
        <p>Projects · Education · Knowledge · Updates</p>
        <div className="footer-links">
          <a href="./privacy.html">Privacy</a>
          <a href="./security.html">Security</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Demonspeaking" target="_blank" rel="noopener noreferrer" aria-label="Vineet Yadav on GitHub"><Github size={18} /></a>
          <a href="https://www.instagram.com/gannekazeus/" target="_blank" rel="noopener noreferrer" aria-label="Gannekazeus on Instagram"><Instagram size={18} /></a>
          <a href="https://www.youtube.com/@VineetReviews" target="_blank" rel="noopener noreferrer" aria-label="Vineet Reviews on YouTube"><Youtube size={18} /></a>
          <a href="https://www.linkedin.com/in/vineet-yadav-8b1a3a22a" target="_blank" rel="noopener noreferrer" aria-label="Vineet Yadav on LinkedIn"><Linkedin size={18} /></a>
        </div>
        <small>© {new Date().getFullYear()} VINEET YADAV · 69 LABS STUDIO</small>
      </footer>
    </main>
  );
}
