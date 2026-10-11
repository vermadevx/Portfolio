import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Mail, ShieldCheck, Code2, Sparkles, GraduationCap, MapPin, Users, Mic, Check, ExternalLink, Terminal, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioLamp } from "@/components/portfolio-lamp";
import sculpture from "@/assets/ai-sculpture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Daksh Verma — Cybersecurity & AI Portfolio" },
    { name: "description", content: "Meet Daksh Verma, a first-year cybersecurity student at GGSIPU exploring generative AI, web development, and collaborative projects." },
    { property: "og:title", content: "Daksh Verma — Cybersecurity & AI Portfolio" },
    { property: "og:description", content: "A curious mind at the intersection of cybersecurity, AI, and building for the web. Explore Daksh's learning journey and connect." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const github = "https://github.com/vermadevx";
const linkedin = "https://www.linkedin.com/in/daksh-verma-978a99405?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const instagram = "https://www.instagram.com/vermadevx";
const email = "contact.vermadaksh@gmail.com";
const linkedinCerts = "https://www.linkedin.com/in/daksh-verma-978a99405/details/certifications/";
const certifications = [
  { brand: "IBM", name: "Cybersecurity", issuer: "IBM", className: "ibm-mark", url: linkedinCerts },
  { brand: "cisco", name: "Data Science", issuer: "Cisco", className: "cisco-mark", url: linkedinCerts },
  { brand: "G", name: "Introduction to Generative AI", issuer: "Google Cloud", className: "google-mark", url: linkedinCerts },
  { brand: "G", name: "Introduction to Large Language Models", issuer: "Google Cloud", className: "google-mark", url: linkedinCerts },
  { brand: "G", name: "Prompt Design in Agent Platform", issuer: "Google Cloud", className: "google-mark", url: linkedinCerts },
  { brand: "G", name: "Responsible AI", issuer: "Google Cloud", className: "google-mark", url: linkedinCerts },
];

function Index() {
  const [entered, setEntered] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [lampLit, setLampLit] = useState(true);
  const [copied, setCopied] = useState(false);
  const enter = () => {
    if (lighting) return;
    setLighting(true);
    window.setTimeout(() => setEntered(true), 650);
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
    catch { window.location.href = `mailto:${email}`; }
  };
  return (
    <div className={`portfolio-shell ${entered ? "entered" : "waiting"}`}>
      {!entered && <div className={`entry-screen ${lighting ? "switching-on" : ""}`}>
        <PortfolioLamp lit={lighting} onPull={enter} intro />
        <div className="entry-copy"><span className="eyebrow">A LITTLE CURIOSITY GOES A LONG WAY</span><h1>Daksh Verma<span>.</span></h1><p>Every idea starts with a spark.</p><span className="entry-prompt">Pull the cord to step inside <ArrowUpRight size={15} /></span></div>
        <span className="entry-footer">CYBERSECURITY · AI · DEVELOPMENT</span>
      </div>}
      <div className="portfolio-content" inert={!entered} aria-hidden={!entered}>
        <header className="site-header">
          <a href="#home" className="wordmark">daksh<span>.</span></a>
          <nav aria-label="Main navigation"><a href="#about">About</a><a href="#learning">Learning</a><a href="#credentials">Credentials</a><a href="#journey">Journey</a></nav>
          <Button variant="glass" asChild><a href={`mailto:${email}`}>Let’s talk <ArrowUpRight /></a></Button>
        </header>
        <main id="home" className="page-container">
          <section className="hero-section">
            <div className="hero-copy"><span className="availability"><span /> OPEN TO INTERNSHIPS & COLLABORATIONS</span>
              <p className="hello">Hey there, I’m</p><h1>Daksh Verma<span>.</span></h1>
              <h2>A curious mind. A builder in progress.</h2>
              <p className="hero-description">First-year cybersecurity student exploring the intersection of<br className="desktop-break" /> AI, code, and a more secure digital world.</p>
              <div className="hero-actions"><Button variant="portfolio" size="lg" asChild><a href={`mailto:${email}`}>Let’s build something <ArrowUpRight /></a></Button><Button variant="glass" size="lg" asChild><a href={github} target="_blank" rel="noreferrer"><Github /> My GitHub</a></Button></div>
              <div className="hero-location"><MapPin size={14} /> GGSIPU, India <span>·</span> B.Tech CSE · Cybersecurity</div>
            </div>
            <div className="hero-lamp"><PortfolioLamp lit={lampLit} onPull={() => setLampLit(value => !value)} /><span className="lamp-caption">Stay curious. Keep the light on.</span></div>
          </section>
          <div className="section-divider"><span>A LITTLE ABOUT ME</span><ArrowDown size={15} /></div>
          <section id="about" className="about-grid">
            <article className="glass-card about-card"><div className="card-heading"><span className="eyebrow">01 / THE PERSON BEHIND THE CODE</span><Users size={19} /></div><h2>Learning by doing.<br />Growing by building.</h2><p>I’m Daksh, a first-year B.Tech CSE student specializing in Cybersecurity at GGSIPU. I’m figuring things out, asking questions, and turning curiosity into things I can build.</p><p>Right now, I’m exploring vibe coding, generative AI, and web development — one experiment at a time.</p><div className="tag-list"><span>Curiosity first</span><span>Builder mindset</span><span>Always learning</span></div></article>
            <article className="glass-card visual-card"><img src={sculpture} alt="Emerald glass knot and chrome sphere representing connected ideas" width={1200} height={800} loading="lazy" /><div className="visual-caption"><span className="tiny-label">MY NORTH STAR</span><h3>Make it useful.<br />Make it thoughtful.</h3><Sparkles size={22} /></div></article>
          </section>
          <section id="learning" className="content-section"><div className="section-title"><div><span className="eyebrow">02 / THE TOOLKIT IN PROGRESS</span><h2>What I’m diving into<span>.</span></h2></div><span className="section-note">Curiosity, put into practice.</span></div>
            <div className="learning-grid">
              <article className="glass-card skill-card"><span className="icon-tile"><ShieldCheck /></span><h3>Cybersecurity</h3><p>Understanding threats, building awareness, and learning to think security-first.</p><div className="skill-footer"><span>IBM Cybersecurity</span><span className="status-dot" /></div></article>
              <article className="glass-card skill-card"><span className="icon-tile"><Sparkles /></span><h3>Generative AI</h3><p>Exploring LLMs, prompt design, responsible AI, and what we can build with them.</p><div className="skill-footer"><span>Currently exploring</span><span className="status-dot" /></div></article>
              <article className="glass-card skill-card"><span className="icon-tile"><Code2 /></span><h3>Web & AI Development</h3><p>Bringing ideas to life with vibe coding, web technologies, and AI-assisted development.</p><div className="skill-footer"><span>Learning by building</span><span className="status-dot" /></div></article>
              <article className="glass-card skill-card"><span className="icon-tile"><Terminal /></span><h3>Java & Data Science</h3><p>Strengthening programming fundamentals and discovering the stories inside data.</p><div className="skill-footer"><span>Java · Cisco Data Science</span><span className="status-dot" /></div></article>
            </div>
          </section>
          <section id="credentials" className="content-section"><div className="section-title"><div><span className="eyebrow">03 / SMALL STEPS, SOLID FOUNDATIONS</span><h2>Learning, backed by credentials<span>.</span></h2></div><span className="count-label">06 CERTIFICATIONS</span></div><div className="cert-grid">{certifications.map(cert => <article className="glass-card cert-card" key={cert.name}><span className={`cert-brand ${cert.className}`}>{cert.brand}</span><div><span className="tiny-label">{cert.issuer}</span><h3>{cert.name}</h3></div><ShieldCheck size={17} className="cert-check" /></article>)}</div></section>
          <section id="journey" className="content-section"><div className="section-title"><div><span className="eyebrow">04 / WHERE IT ALL COMES TOGETHER</span><h2>My journey so far<span>.</span></h2></div></div><div className="journey-grid">
            <article className="glass-card education-card"><div className="card-heading"><h3><GraduationCap size={20} /> Education</h3><span className="tiny-label">THE FOUNDATION</span></div><div className="education-row"><span className="timeline-dot" /><div><span className="tiny-label text-primary">CURRENTLY PURSUING</span><h4>B.Tech · Computer Science & Engineering</h4><p>GGSIPU · Cybersecurity specialization</p><span className="education-detail">First year. A world of possibilities ahead.</span></div></div><div className="education-row"><span className="timeline-dot secondary-dot" /><div><h4>Ashok Memorial Public School</h4><p>Central Board of Secondary Education</p><div className="scores"><div><strong>94<span>%</span></strong><span>CLASS X</span></div><div><strong>81<span>%</span></strong><span>CLASS XII</span></div></div></div></div></article>
            <article className="glass-card experience-card"><span className="icon-tile"><MapPin /></span><span className="eyebrow">BEYOND THE CLASSROOM</span><h3>A glimpse into<br />the real world.</h3><p>An industrial visit to the Paytm & Neo4j event — a chance to experience the tech community beyond a screen.</p><div className="event-location"><MapPin size={15} /><span>One Skymark, Noida</span></div><div className="tag-list"><span>Industry exposure</span><span>New perspectives</span></div></article>
          </div></section>
          <section className="content-section project-section"><div className="section-title"><div><span className="eyebrow">05 / BUILDING IN PUBLIC</span><h2>The next idea starts here<span>.</span></h2></div></div><div className="collaboration-grid"><article className="glass-card projects-card"><Braces size={32} /><h3>Early days. Real ambition.</h3><p>I’m learning to turn ideas into projects with AI-assisted development. Follow along as I experiment, build, and share what I learn.</p><Button variant="glass" asChild><a href={github} target="_blank" rel="noreferrer">Follow my GitHub <ArrowUpRight /></a></Button></article><article className="glass-card roles-card"><span className="eyebrow">BETTER, TOGETHER</span><h3>Got a hackathon or<br />a project in mind?</h3><p>I’d love to be part of a team that’s building something meaningful.</p><div className="role-list"><span><Users size={15} /> Team lead</span><span><Mic size={15} /> Host</span><span><Code2 size={15} /> Vibe-coding developer</span></div></article></div></section>
          <section id="contact" className="contact-section"><span className="availability"><span /> LET’S MAKE SOMETHING HAPPEN</span><h2>Good things start<br />with a conversation<span>.</span></h2><p>Internship, hackathon, project, or just a hello — I’m all ears.</p><Button variant="portfolio" size="lg" asChild><a href={`mailto:${email}`}>Say hello <ArrowUpRight /></a></Button><Button variant="link" onClick={copyEmail} className="email-copy">{email} {copied ? <Check /> : <Mail />}</Button>{copied && <span role="status" className="copy-status">Email copied</span>}</section>
        </main>
        <footer className="site-footer"><span>© {new Date().getFullYear()} Daksh Verma</span><span className="footer-note">A work in progress. Just like me.</span><div><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a><a href="#home" aria-label="Back to top"><ExternalLink size={17} /></a></div></footer>
      </div>
    </div>
  );
}
