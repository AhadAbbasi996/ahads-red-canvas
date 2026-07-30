import { createFileRoute } from "@tanstack/react-router";
import {
  Terminal,
  ShieldAlert,
  Bug,
  Network,
  Code2,
  Flag,
  Award,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { HexRain } from "@/components/portfolio/HexRain";
import { Section } from "@/components/portfolio/Section";
import { TerminalCard } from "@/components/portfolio/TerminalCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Ahad — Red Teamer & Software Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Abdul Ahad: software engineering student and red teamer working on offensive security, CTFs, and secure software.",
      },
      { property: "og:title", content: "Abdul Ahad — Red Teamer" },
      {
        property: "og:description",
        content:
          "Offensive security, CTFs and secure software engineering. Projects, skills and certifications.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["whoami", "#whoami"],
  ["arsenal", "#arsenal"],
  ["ops", "#ops"],
  ["certs", "#certs"],
  ["contact", "#contact"],
] as const;

const ARSENAL = [
  {
    icon: ShieldAlert,
    title: "Offensive Security",
    items: ["Recon & OSINT", "Privilege escalation", "Post-exploitation", "Report writing"],
  },
  {
    icon: Bug,
    title: "Web Exploitation",
    items: ["OWASP Top 10", "Burp Suite", "SQLi / XSS / SSRF", "Auth & access bypass"],
  },
  {
    icon: Network,
    title: "Network & Infra",
    items: ["Nmap · Wireshark", "Active Directory", "Linux hardening", "Metasploit"],
  },
  {
    icon: Code2,
    title: "Engineering",
    items: ["Python · Bash", "C / C++ · JavaScript", "Automation tooling", "Git & CI"],
  },
];

const OPS = [
  {
    tag: "ctf",
    title: "CTF Competitor",
    blurb:
      "Regular player in red-team / blue-team Capture The Flag events — web, forensics and privilege-escalation categories.",
    stack: ["Web", "Forensics", "PrivEsc"],
  },
  {
    tag: "tooling",
    title: "Recon Automation Scripts",
    blurb:
      "Personal Bash and Python tooling that chains subdomain discovery, port scanning and screenshotting into one repeatable pass.",
    stack: ["Python", "Bash", "Nmap"],
  },
  {
    tag: "lab",
    title: "Home Attack Lab",
    blurb:
      "Self-built virtual lab with vulnerable targets and an Active Directory domain used to practise full kill-chain attacks.",
    stack: ["VirtualBox", "AD", "Kali"],
  },
  {
    tag: "study",
    title: "Software Engineering Coursework",
    blurb:
      "Degree projects spanning data structures, databases and full-stack web apps — built with security review baked in.",
    stack: ["C++", "SQL", "Web"],
  },
];

// Add your certificates here — title, issuer, year and an optional link.
const CERTS: { title: string; issuer: string; year: string; url?: string }[] = [];

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HexRain side="left" />
      <HexRain side="right" />

      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <Terminal className="h-4 w-4 text-primary" />
            abdul<span className="text-primary">.ahad</span>
          </a>
          <nav className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-5xl px-5" id="top">
        {/* HERO */}
        <section className="pt-20 pb-16 text-center">
          <p className="inline-block border border-primary/40 px-4 py-2 text-xs tracking-[0.2em] text-primary">
            SOFTWARE ENGINEERING STUDENT · RED TEAMER
          </p>
          <h1
            className="text-glow mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl"
            style={{ animation: "flicker 7s linear infinite" }}
          >
            Abdul <span className="text-primary">Ahad</span>
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-accent">
            Break. Understand. Rebuild.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I study software engineering by day and take systems apart by night. My work sits where
            offensive security meets clean engineering — finding the path in, then documenting how to
            close it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#ops"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View work
            </a>
          </div>
        </section>

        {/* WHOAMI */}
        <Section id="whoami" label="whoami" title="The short version">
          <div className="grid gap-6 md:grid-cols-2">
            <TerminalCard />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I'm Abdul Ahad, a software engineering student focused on offensive security. Most of
                what I know came from breaking my own labs, losing to better CTF teams, and reading
                write-ups until things clicked.
              </p>
              <p>
                On the red side I work through recon, web exploitation, privilege escalation and
                reporting. On the build side I write the tooling that makes those steps repeatable —
                mostly Python and Bash, occasionally something heavier.
              </p>
              <p className="border-l-2 border-primary pl-4 text-foreground/85">
                Currently looking for internships, research collaborations and CTF teammates who
                enjoy the boring part: writing the finding up properly.
              </p>
            </div>
          </div>
        </Section>

        {/* ARSENAL */}
        <Section id="arsenal" label="arsenal" title="Tools of the trade">
          <div className="grid gap-4 sm:grid-cols-2">
            {ARSENAL.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="panel group rounded-md p-6 transition-colors hover:border-primary/60"
              >
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide">{title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary/70">▸</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* OPS */}
        <Section id="ops" label="operations" title="Selected work">
          <div className="grid gap-4 sm:grid-cols-2">
            {OPS.map((op) => (
              <article
                key={op.title}
                className="panel flex flex-col rounded-md p-6 transition-transform hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                  <Flag className="h-3.5 w-3.5" />
                  {op.tag}
                </div>
                <h3 className="mt-3 text-lg font-bold">{op.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {op.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {op.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-border px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* CERTS */}
        <Section id="certs" label="certifications" title="Credentials">
          {CERTS.length === 0 ? (
            <div className="panel rounded-md border-dashed p-10 text-center">
              <Award className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="text-primary">$</span> ls ./certifications
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Nothing listed yet — drop your certificates in and they'll appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {CERTS.map((c) => (
                <div key={c.title} className="panel rounded-md p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                    </div>
                    <span className="text-xs text-primary">{c.year}</span>
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary hover:underline"
                    >
                      Verify <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* CONTACT */}
        <Section id="contact" label="contact" title="Open a channel">
          <div className="panel rounded-md p-8">
            <p className="text-sm text-muted-foreground">
              Internships, security research, CTF teams or just a good exploit write-up — happy to
              talk.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/abdul-ahad-abbasi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t border-border/70 py-8 text-xs text-muted-foreground">
          <span className="text-primary">$</span> exit — Abdul Ahad, {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
