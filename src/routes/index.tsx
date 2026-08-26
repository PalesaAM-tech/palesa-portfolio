import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroIllustration from "@/assets/hero-illustration.png";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Palesa Amy Mokoena — IT & Digital Professional",
      },
      {
        name: "description",
        content:
          "Portfolio of Palesa Amy Mokoena, an aspiring IT professional bridging technical knowledge with strategic marketing insights. Seeking entry-level IT roles and internships.",
      },
      { property: "og:title", content: "Palesa Amy Mokoena — IT & Digital Professional" },
      {
        property: "og:description",
        content:
          "Aspiring IT professional bridging technical knowledge with strategic marketing insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "palesa.amy.mokoena@gmail.com";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const TECH_SKILLS = [
  { title: "Computer Literacy", detail: "Microsoft Office Suite, Google Workspace" },
  { title: "Web Fundamentals", detail: "HTML5, CSS3, Basic JavaScript" },
  { title: "Digital Tools", detail: "AI-assisted tools, Social Media Platforms" },
  { title: "Analytical", detail: "Basic Data Analysis, Report Writing" },
];

const SOFT_SKILLS = [
  "Problem-Solving & Critical Thinking",
  "Time Management & Task Prioritisation",
  "Strong Communication & Digital Collaboration",
  "Adaptability & Eagerness to Learn",
];

const PROJECTS = [
  {
    category: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A fully responsive web portfolio created using HTML, Tailwind CSS, and AI-assisted tools to showcase my skills, education, and projects.",
    tags: ["HTML", "Tailwind CSS", "GitHub Pages"],
  },
  {
    category: "Digital Media / IT",
    title: "Tech Brand Digital Strategy",
    description:
      "A digital content strategy and brand engagement prototype designed for tech-driven services, leveraging digital communication tools.",
    tags: ["Digital Marketing", "Analytics", "Content Creation"],
  },
  {
    category: "Data & Analysis",
    title: "IT Productivity Dashboard Setup",
    description:
      "Organised structured data reports and productivity management dashboards using advanced spreadsheet tools and automation scripts.",
    tags: ["MS Excel", "Google Suite", "Data Visualization"],
  },
];

const EDUCATION = [
  {
    title: "Marketing Management (N4 – N6 Certificates)",
    school: "Central Johannesburg TVET College",
    period: "2023 – 2026 (Completed)",
  },
  {
    title: "National Senior Certificate (Grade 12)",
    school: "Pecanwood College",
    period: "2021",
    note: "Subjects: English, Afrikaans, Mathematics, Physics, Accounting, Business Studies, Life Orientation",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-base font-semibold tracking-tight text-foreground">
          Palesa<span className="text-primary">.</span>AM
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hi, I'm Palesa Amy Mokoena
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            An aspiring IT professional bridging technical knowledge with strategic marketing
            insights. Passionate about software development, digital solutions, and tech-driven
            innovation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={heroIllustration}
            alt="Abstract tech illustration"
            width={832}
            height={1024}
            className="w-full max-w-md rounded-2xl border border-border bg-card shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Introduction" title="About Me" />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold text-primary">Professional Summary:</span> Motivated and
              detail-oriented graduate with a strong foundation in Marketing Management (N6
              completed in 2026) and a primary focus on transitioning into Information Technology.
              Combining computer literacy, problem-solving, and communication skills with an
              eagerness to master modern technology stacks, software solutions, and IT systems.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm leading-relaxed text-foreground">
              While my academic background covers essential marketing strategies, my passion lies
              in technology. I am actively building my skills in web development, IT infrastructure,
              and digital tools, seeking an entry-level IT role or internship where I can apply my
              analytical capabilities and continue learning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 bg-accent/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I bring" title="Skills & Expertise" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Technical & IT Skills</h3>
            <ul className="space-y-5">
              {TECH_SKILLS.map((skill) => (
                <li key={skill.title} className="flex gap-4">
                  <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{skill.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{skill.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Soft Skills</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {SOFT_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Demonstrating modern web development and IT tools."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {project.category}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-border/60 bg-accent/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Background" title="Education & Certifications" />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {EDUCATION.map((item) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-primary" />
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary">{item.school}</p>
                </div>
                <span className="flex-shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {item.period}
                </span>
              </div>
              {item.note && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          eyebrow="Let's connect"
          title="Get In Touch"
          subtitle="I am actively looking for internship opportunities and entry-level IT roles."
        />
        <ContactForm />
        <div className="mx-auto mt-10 flex max-w-md flex-col gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="text-xl text-primary">✉</span>
            <span className="font-medium text-foreground">{EMAIL}</span>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="text-primary">in</span> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="text-primary">⌥</span> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const result = await submitContact({ data: { name, email, message, company } });
      if (result.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setError(result.error);
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-primary/30 bg-primary/5 p-8">
        <p className="text-lg font-semibold text-foreground">Thank you for your message!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          I've received it and will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 text-left">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          maxLength={2000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can I help you?"
          className={inputClass}
        />
      </div>
      {/* Honeypot field — hidden from real users */}
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {error && status === "error" && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Palesa Amy Mokoena. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
