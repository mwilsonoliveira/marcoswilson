import Image from "next/image";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { content, type Locale } from "@/lib/content";
import type { GithubRepo } from "@/lib/github";
import { Header } from "./header";
import { Reveal } from "./reveal";

const profile = {
  email: "mwilson.oliveira@gmail.com",
  github: "https://github.com/mwilsonoliveira",
  linkedin: "https://www.linkedin.com/in/mwilson-oliveira/",
};

function SectionHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <Reveal className="section-heading">
      <div><h2>{title}</h2><p>{intro}</p></div>
    </Reveal>
  );
}

export function Portfolio({ locale, repos }: { locale: Locale; repos: GithubRepo[] }) {
  const copy = content[locale];
  const currentYear = new Date().getFullYear();
  const dateLocale = locale === "pt" ? "pt-BR" : "en-US";

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" />
      <Header locale={locale} nav={copy.nav} />
      <main>
        <section id="top" className="hero section-wrap">
          <Reveal className="hero-copy">
            <h1>{copy.hero.title}</h1>
            <p className="hero-intro">{copy.hero.intro}</p>
            <div className="availability"><BriefcaseBusiness size={16} />{copy.hero.availability}</div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{copy.hero.primaryCta}<ArrowDown size={18} /></a>
              <a className="button button-secondary" href="/marcos-wilson-cv.pdf" download>{copy.hero.secondaryCta}<Download size={18} /></a>
            </div>
          </Reveal>
          <div className="hero-side" aria-hidden="true">
            <div className="code-card">
              <div className="code-dots"><i /><i /><i /></div>
              <pre><span>const</span> developer = {`{`}<br />&nbsp;&nbsp;name: <em>&quot;Marcos&quot;</em>,<br />&nbsp;&nbsp;mindset: <em>&quot;builder&quot;</em>,<br />&nbsp;&nbsp;coffee: <strong>true</strong><br />{`}`};</pre>
            </div>
            <div className="floating-label"><Sparkles size={16} />{copy.hero.floatingLabel}</div>
          </div>
        </section>

        <section id="about" className="section-wrap section">
          <SectionHeading title={copy.about.kicker} intro={copy.about.title} />
          <div className="about-grid">
            <Reveal className="portrait-card">
              <div className="portrait-frame"><Image src="/marcos-wilson.jpg" alt="Marcos Wilson" fill sizes="(max-width: 768px) 80vw, 360px" priority /></div>
              <div className="portrait-meta"><MapPin size={17} /><span>São Leopoldo, RS — Brasil</span></div>
            </Reveal>
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph, index) => <Reveal key={paragraph} delay={index * 80}><p>{paragraph}</p></Reveal>)}
              <div className="stats-grid">{copy.about.stats.map((stat, index) => <Reveal key={stat.label} delay={index * 70} className="stat"><strong>{currentYear - stat.startYear}+</strong><span>{stat.label}</span></Reveal>)}</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap section">
          <SectionHeading title={copy.skills.title} intro={copy.skills.intro} />
          <div className="skills-grid">{copy.skills.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70} className="skill-card glass-card">
              <div className="skill-icon"><Code2 /></div><h3>{group.title}</h3>
              <div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </Reveal>
          ))}</div>
        </section>

        <section id="experience" className="section-wrap section">
          <SectionHeading title={copy.experience.title} intro={copy.experience.intro} />
          <div className="timeline">{copy.experience.roles.map((role, index) => (
            <Reveal key={`${role.company}-${role.period}`} delay={index * 60} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true"><span /></div>
              <article><div className="timeline-date">{role.period}</div><p className="timeline-location">{role.location}</p><h3>{role.role}</h3><h4>{role.company}</h4><p>{role.description}</p></article>
            </Reveal>
          ))}</div>
          <Reveal className="transition-note"><span>{"//"}</span>{copy.experience.transition}</Reveal>
        </section>

        <section id="projects" className="section-wrap section">
          <SectionHeading title={copy.projects.title} intro={copy.projects.intro} />
          <div className="projects-grid">{copy.projects.items.map((project, index) => (
            <Reveal key={project.name} delay={index * 90} className={`project-card project-${index + 1}`}>
              <div className="project-visual"><div className="project-window"><div><i /><i /><i /></div><span>{project.name.slice(0, 1)}</span><small>{project.name}</small></div></div>
              <div className="project-content"><p className="project-label">{project.label}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links"><a href={project.href} target="_blank" rel="noreferrer">{copy.projects.liveLabel}<ArrowUpRight size={17} /></a>{project.source && <a href={project.source} target="_blank" rel="noreferrer">{copy.projects.sourceLabel}<Github size={17} /></a>}</div>
              </div>
            </Reveal>
          ))}</div>
        </section>

        <section id="github" className="section-wrap section">
          <SectionHeading title={copy.github.title} intro={copy.github.intro} />
          <div className="repo-grid">{repos.map((repo, index) => (
            <Reveal key={repo.id} delay={index * 45} className="repo-card glass-card">
              <div className="repo-top"><Github /><a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`${repo.name} GitHub`}><ArrowUpRight /></a></div>
              <h3>{repo.name}</h3><p>{repo.description ?? "Open-source project by Marcos Wilson."}</p>
              <div className="repo-meta"><span><i className="language-dot" />{repo.language ?? "Code"}</span><span>★ {repo.stargazers_count} {copy.github.stars}</span><span>{copy.github.updated} {new Intl.DateTimeFormat(dateLocale, { month: "short", year: "numeric" }).format(new Date(repo.pushed_at))}</span></div>
            </Reveal>
          ))}</div>
          <Reveal className="center"><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">{copy.github.profile}<ArrowUpRight size={18} /></a></Reveal>
        </section>

        <section id="contact" className="section-wrap section contact-section">
          <Reveal className="contact-card">
            <p className="eyebrow">{copy.contact.eyebrow}</p><h2>{copy.contact.title}</h2><p>{copy.contact.body}</p>
            <div className="contact-links"><a href={`mailto:${profile.email}`}><Mail />{copy.contact.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin />{copy.contact.linkedin}</a><a href={profile.github} target="_blank" rel="noreferrer"><Github />{copy.contact.github}</a></div>
          </Reveal>
        </section>
      </main>
      <footer><span>© {currentYear} Marcos Wilson</span><span>{copy.footer}</span><a href="#top">↑ top</a></footer>
    </div>
  );
}
