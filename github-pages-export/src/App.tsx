import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  Clapperboard,
  Clock3,
  Code2,
  Film,
  Gauge,
  Instagram,
  Layers3,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  Newspaper,
  Sparkles,
  UtensilsCrossed,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

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

const projects: Project[] = [
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
    id: "vorn-news",
    title: "VORN News — Voice of Republic Nation",
    description:
      "An independent digital news platform for current news and important developments from India and around the world, with dedicated article pages and a searchable news archive.",
    tech: ["React", "Vite", "Supabase", "News Publishing"],
    liveLink: "https://vorn.website/",
    type: "Independent News Platform",
    status: "live",
    icon: Newspaper,
    visual: "vorn",
  },
  {
    id: "coming-soon",
    title: "The Next Build",
    description:
      "This space is reserved for the next website, app, experiment, or personal project that makes it past the idea stage.",
    tech: ["Details TBA", "Coming Soon"],
    type: "Future Project",
    status: "coming-soon",
    icon: Layers3,
    visual: "soon-two",
  },
];

const navItems = [
  ["Projects", "#work"],
  ["About", "#about"],
  ["Archive", "#archive"],
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
            <span /> Vineet&apos;s personal archive
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
            <span /> Vineet&apos;s personal archive · India
          </p>
          <h1 id="hero-title">
            I build things.
            <em> I edit stories.</em>
          </h1>
          <p className="hero-copy">
            I&apos;m Vineet—a website and app developer who also works with video.
            This is not a sales page. It is one evolving place for the projects,
            experiments, achievements, creative work, and updates I want to keep.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Browse my projects <ArrowDownRight size={18} />
            </a>
            <a className="text-link" href="#about">
              Read about me <ArrowDownRight size={18} />
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Vineet's disciplines">
          <div className="hero-card-top">
            <span>VINEET / ARCHIVE</span>
            <Sparkles size={18} />
          </div>
          <div className="hero-card-core">
            <span className="giant-69">69</span>
            <div className="core-ring ring-one" />
            <div className="core-ring ring-two" />
            <div className="core-dot dot-one" />
            <div className="core-dot dot-two" />
          </div>
          <div className="hero-card-bottom">
            <span><Code2 size={16} /> Development</span>
            <span><Clapperboard size={16} /> Editing</span>
          </div>
        </aside>

        <div className="hero-strip">
          <div>
            <small>FOCUS / 01</small>
            <span>Websites & applications</span>
          </div>
          <div>
            <small>FOCUS / 02</small>
            <span>Video editing & motion</span>
          </div>
          <div>
            <small>ARCHIVE</small>
            <span>Work, achievements & updates</span>
          </div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built and put online."
          copy="A record of released websites, app experiments, and whatever I build next. Unfinished work is labelled clearly."
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
                    <a className="button button-small" href={project.liveLink} target="_blank" rel="noreferrer">
                      Open project <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="button button-small button-disabled">
                      Not released yet <LockKeyhole size={15} />
                    </span>
                  )}
                  <span className="source-note"><LockKeyhole size={14} /> Source not published</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-grid">
          <SectionHeading eyebrow="About me" title="Hi, I&apos;m Vineet." />
          <div className="about-copy">
            <span className="placeholder-label">Builder · Editor · Chronic scroller</span>
            <p>
              I work on websites, app ideas, and video edits. I have never worked
              professionally—everything shown here was made for me, my own ideas,
              or as a way to learn by actually building something.
            </p>
            <p>
              69 LABS STUDIO is the label I use to keep that work together. This
              page will grow with new projects, achievements, experiments, and
              updates instead of pretending to be an agency.
            </p>
          </div>
        </div>

        <div className="skills-grid skills-grid-four">
          <article>
            <Braces size={22} />
            <small>01 / BUILD</small>
            <h3>Websites & apps</h3>
            <div className="skill-cloud">
              {["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <Zap size={22} />
            <small>02 / SYSTEMS</small>
            <h3>Tools & technical work</h3>
            <div className="skill-cloud">
              {["Git", "GitHub", "REST APIs", "Responsive UI", "Electrical Layouts"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <Film size={22} />
            <small>03 / EDIT</small>
            <h3>Video software</h3>
            <div className="skill-cloud">
              {["CapCut", "VN", "Filmora", "Alight Motion", "Color Grading", "Sound Design"].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <article>
            <Clock3 size={22} />
            <small>04 / QUESTIONABLE</small>
            <h3>Internet endurance</h3>
            <div className="skill-cloud">
              <span>Doom scrolling</span>
              <span>Up to 20 hours straight</span>
              <span>Not recommended</span>
            </div>
          </article>
        </div>

        <div className="experience-placeholder experience-honest">
          <span>EXPERIENCE / HONEST VERSION</span>
          <div>
            <h3>No professional experience yet.</h3>
            <p>I currently build websites, app experiments, and edits for myself—and learn from shipping them.</p>
          </div>
          <ArrowDownRight size={22} />
        </div>
      </section>

      <section className="services-section section-shell" id="archive">
        <SectionHeading
          eyebrow="What this page tracks"
          title="A living resume, without the sales pitch."
          copy="The archive is organised around things made, skills practised, and milestones reached."
        />
        <div className="services-grid archive-grid">
          <article>
            <div className="service-icon"><Code2 size={24} /></div>
            <small>ARCHIVE / 01</small>
            <h3>Projects</h3>
            <p>Websites, application experiments, technical builds, and future releases collected in one place.</p>
            <ul>
              <li><Check size={15} /> Released work</li>
              <li><Check size={15} /> Project descriptions</li>
              <li><Check size={15} /> Technology used</li>
            </ul>
            <strong>Four projects live</strong>
          </article>
          <article className="featured-service">
            <div className="service-icon"><WandSparkles size={24} /></div>
            <small>ARCHIVE / 02</small>
            <h3>Creative work</h3>
            <p>Video edits, motion experiments, visual studies, and a future showreel as the work becomes ready.</p>
            <ul>
              <li><Check size={15} /> CapCut & VN</li>
              <li><Check size={15} /> Filmora</li>
              <li><Check size={15} /> Alight Motion</li>
            </ul>
            <strong>Archive in progress</strong>
          </article>
          <article>
            <div className="service-icon"><BookOpen size={24} /></div>
            <small>ARCHIVE / 03</small>
            <h3>Milestones & updates</h3>
            <p>A simple record of what I learn, launch, improve, or complete over time.</p>
            <ul>
              <li><Check size={15} /> Achievements</li>
              <li><Check size={15} /> Progress notes</li>
              <li><Check size={15} /> What comes next</li>
            </ul>
            <strong>Always evolving</strong>
          </article>
        </div>

        <div className="update-panel current-update">
          <div>
            <span className="placeholder-label">Current chapter · 2026</span>
            <blockquote>Building personal products, developing VORN News, and learning web, app, and video workflows by doing the work.</blockquote>
          </div>
          <p>More updates will be added here</p>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <BrandMark />
        <p>Projects · Creative work · Achievements · Updates</p>
        <div className="social-links">
          <a href="https://x.com/69labstudio" target="_blank" rel="noreferrer" aria-label="69 Labs Studio on X"><X size={18} /></a>
          <a href="https://instagram.com/gannekazeus" target="_blank" rel="noreferrer" aria-label="Gannekazeus on Instagram"><Instagram size={18} /></a>
          <a href="https://vorn.website/" target="_blank" rel="noreferrer" aria-label="Visit VORN News"><Newspaper size={18} /></a>
        </div>
        <small>© {new Date().getFullYear()} VINEET · 69 LABS STUDIO</small>
      </footer>
    </main>
  );
}
