const { useEffect, useRef, useState } = React;

/* ── Custom SVG decorative icons ────────────────────────── */
function Sparkle({ size = 14, color = "#F5D547", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2 L13.8 9.5 L21 11 L13.8 12.5 L12 22 L10.2 12.5 L3 11 L10.2 9.5 Z"
            fill={color} stroke="#1C3A6E" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function Heart({ size = 14, color = "#7FC5E8", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z"
            fill={color} stroke="#1C3A6E" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

function Diamond({ size = 12, color = "#F5D547", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2 L22 12 L12 22 L2 12 Z"
            fill={color} stroke="#1C3A6E" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <polyline points="2,7 5.5,11 12,3" stroke="#fff" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <line x1="7" y1="2.5" x2="7" y2="8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7" cy="11.5" r="1.3" fill="#fff"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17.1l-6.2 4.2 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  );
}

function DownloadIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v13M7 11l5 5 5-5"/>
      <path d="M4 19h16"/>
    </svg>
  );
}

/* ── Scattered particles across the full hero ───────────── */
function FloatingParticles() {
  const items = [
    { type: "sparkle", size: 24, color: "#F5D547", top: "7%",  left: "4%",  delay: "0s",    dur: "7s"   },
    { type: "heart",   size: 20, color: "#7FC5E8", top: "11%", left: "43%", delay: "1.4s",  dur: "9s"   },
    { type: "diamond", size: 13, color: "#F5D547", top: "17%", left: "73%", delay: "0.5s",  dur: "6s"   },
    { type: "sparkle", size: 15, color: "#FFD4D4", top: "29%", left: "60%", delay: "2.2s",  dur: "8s"   },
    { type: "heart",   size: 26, color: "#FFD4D4", top: "54%", left: "6%",  delay: "0.9s",  dur: "10s"  },
    { type: "diamond", size: 11, color: "#7FC5E8", top: "61%", left: "92%", delay: "1.7s",  dur: "7.5s" },
    { type: "sparkle", size: 18, color: "#7FC5E8", top: "75%", left: "35%", delay: "3s",    dur: "8.5s" },
    { type: "heart",   size: 16, color: "#F5D547", top: "82%", left: "75%", delay: "0.3s",  dur: "9s"   },
    { type: "diamond", size: 15, color: "#FFD4D4", top: "91%", left: "19%", delay: "2.6s",  dur: "7s"   },
    { type: "sparkle", size: 12, color: "#F5D547", top: "45%", left: "97%", delay: "1.1s",  dur: "6.5s" },
    { type: "heart",   size: 14, color: "#7FC5E8", top: "3%",  left: "89%", delay: "2.9s",  dur: "8s"   },
    { type: "sparkle", size: 20, color: "#FFD4D4", top: "21%", left: "14%", delay: "0.7s",  dur: "9.5s" },
    { type: "diamond", size: 10, color: "#F5D547", top: "38%", left: "2%",  delay: "3.4s",  dur: "7.5s" },
    { type: "heart",   size: 18, color: "#FFD4D4", top: "67%", left: "50%", delay: "1.6s",  dur: "8s"   },
  ];
  return (
    <div className="floating-particles" aria-hidden>
      {items.map((p, i) => (
        <div
          key={i}
          className="float-particle"
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        >
          {p.type === "sparkle" && <Sparkle size={p.size} color={p.color} />}
          {p.type === "heart"   && <Heart   size={p.size} color={p.color} />}
          {p.type === "diamond" && <Diamond size={p.size} color={p.color} />}
        </div>
      ))}
    </div>
  );
}

/* ── Video stage — hero right panel ─────────────────────── */
function VideoStage() {
  return (
    <div className="hero-stage video-stage">
      <video
        className="video-stage-video"
        src="public/assets/parcovo_hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Sparkles, hearts, diamonds overlaid on video */}
      <div className="sparkle" style={{ top: "12%", left: "18%" }}>
        <Sparkle size={28} />
      </div>
      <div className="sparkle" style={{ top: "22%", right: "12%", animationDelay: "0.6s" }}>
        <Sparkle size={20} />
      </div>
      <div className="sparkle" style={{ bottom: "18%", left: "22%", animationDelay: "1.2s" }}>
        <Sparkle size={16} color="#7FC5E8" />
      </div>
      <div className="sparkle" style={{ top: "60%", right: "7%", animationDelay: "1.9s" }}>
        <Diamond size={14} color="#F5D547" />
      </div>
      <div className="sparkle" style={{ bottom: "8%", left: "42%", animationDelay: "2.5s" }}>
        <Diamond size={11} color="#7FC5E8" />
      </div>
      <div className="heart-bit" style={{ top: "8%", left: "44%" }}>
        <Heart size={22} />
      </div>
      <div className="heart-bit" style={{ bottom: "32%", right: "10%", animationDelay: "1s" }}>
        <Heart size={18} color="#FFD4D4" />
      </div>
      <div className="heart-bit" style={{ top: "65%", left: "8%", animationDelay: "2.1s" }}>
        <Heart size={16} color="#F5D547" />
      </div>
    </div>
  );
}

/* ── Tilt-on-hover wrapper for feature cards ─────────────── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / r.width;
    const dy = (e.clientY - (r.top  + r.height / 2)) / r.height;
    el.style.transform = `perspective(900px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-brand">
          <div className="nav-logo-wrap">
            <img src="assets/ariune-logo.png" alt="Ariune" className="nav-logo-img" />
          </div>
          <span className="label">Ariunzaya</span>
        </div>
        <a href="#about">About</a>
        <a href="#parcovo">PARCOVO</a>
        <a href="#experience">Experience</a>
        <a href="public/resume_ariunzaya.pdf" download="Ariunzaya_Baasanjargal_Resume.pdf" style={{ color: "var(--navy)", fontWeight: 600 }}>Resume ↓</a>
        <a href="#contact" className="cta">Get in touch ↗</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        {/* Aurora background blobs */}
        <div className="hero-aurora" aria-hidden>
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>

        {/* Scattered sparkles / hearts / diamonds across full hero */}
        <FloatingParticles />

        {/* Hero copy — z-index above aurora */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="pulse" />
            Currently shipping at a live home care agency
          </div>
          <h1>
            <span className="accent">Product manager</span><br />
            who built the <span className="underline">whole&nbsp;cow</span>,<br />
            not just the&nbsp;moo.
          </h1>
          <p className="hero-sub">
            Hi — I'm <strong className="fancy-name">Ariunzaya Baasanjargal.</strong> I spent
            ten months embedded inside a home care agency before writing a single line of
            code. Then I built <strong>PARCOVO</strong>: a HIPAA-compliant SaaS
            now used daily by the operations staff who taught me the work.
          </p>

          <div className="hero-meta">
            <div className="stat">
              <span className="num">22</span>
              <span className="lbl">modules shipped</span>
            </div>
            <div className="div" />
            <div className="stat">
              <span className="num">38</span>
              <span className="lbl">schema migrations</span>
            </div>
            <div className="div" />
            <div className="stat">
              <span className="num">~60%</span>
              <span className="lbl">paperwork cut</span>
            </div>
            <div className="div" />
            <div className="stat">
              <span className="num">3</span>
              <span className="lbl">languages</span>
            </div>
          </div>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#parcovo">
              See PARCOVO <span aria-hidden>→</span>
            </a>
            <a
              className="btn btn-resume"
              href="public/resume_ariunzaya.pdf"
              download="Ariunzaya_Baasanjargal_Resume.pdf"
            >
              <DownloadIcon size={15} /> Resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              rn.zaya019@gmail.com
            </a>
          </div>
        </div>

        <VideoStage />
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <React.Fragment key={k}>
              <span className="marquee-item">Domain-fluent PM</span>
              <span className="marquee-item star"><Sparkle size={16} color="#F5D547" /></span>
              <span className="marquee-item"><em>Built from the inside</em></span>
              <span className="marquee-item star"><Heart size={16} color="#7FC5E8" /></span>
              <span className="marquee-item">HIPAA-compliant SaaS</span>
              <span className="marquee-item star"><Sparkle size={14} color="#F5D547" /></span>
              <span className="marquee-item">Trilingual</span>
              <span className="marquee-item star"><Diamond size={12} color="#F5D547" /></span>
              <span className="marquee-item">Home care operations</span>
              <span className="marquee-item star"><Heart size={14} color="#FFD4D4" /></span>
              <span className="marquee-item"><em>Ships in production</em></span>
              <span className="marquee-item star"><Sparkle size={16} color="#F5D547" /></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="block" id="about">
        <div className="section-head">
          <h2>
            I learned the work <em>before</em><br />
            I built the&nbsp;tool.
          </h2>
          <div className="right">
            <div className="tiny-label" style={{ marginBottom: 8 }}>About</div>
            Operations specialist turned founder, embedded in the messy parts
            of a regulated industry that serves vulnerable people.
          </div>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            <p>
              <span className="hl">Home care is high-stakes infrastructure</span> for
              people who can't advocate for themselves. A missed prior
              authorization disrupts care. A lapsed credential is a compliance event.
              That's why I started inside the work — running operations for
              ten months — instead of starting with a deck.
            </p>
            <p>
              The friction I felt every day became <strong>PARCOVO</strong>:
              authorization tracking, caregiver credentialing, supervisory visit
              scheduling, and a multi-type notes timeline — built with judgment
              about when AI accelerates the work and when human review is the
              feature.
            </p>
          </div>

          <div className="about-card">
            <h3>Quick facts</h3>
            <p><strong>Based in</strong> Colorado, USA · U.S. Permanent Resident</p>
            <p><strong>Studying</strong> M.S. Information Technology Management, CSU Global (Expected 2027)</p>
            <p><strong>Holds</strong> B.S. Management Information Systems · B.A. Linguistics</p>
            <p><strong>Certifying</strong> Google PM (2026) · HIPAA Privacy &amp; Security (2026)</p>

            <div className="lang-row">
              <span className="lang-chip"><span className="flag">🇺🇸</span> English</span>
              <span className="lang-chip"><span className="flag">🇲🇳</span> Mongolian</span>
              <span className="lang-chip"><span className="flag">🇯🇵</span> Japanese</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARCOVO */}
      <section className="block project-section" id="parcovo">
        <div className="section-head">
          <h2>
            Meet&nbsp;<em>PARCOVO</em> —<br />
            the platform I built<br />
            from the inside out.
          </h2>
          <div className="right">
            <div className="tiny-label" style={{ marginBottom: 8 }}>Case study · 2026</div>
            HIPAA-compliant home care SaaS. 22 feature modules in 3 months.
            Used daily at Complex Home Care Solutions.
          </div>
        </div>

        <div className="project-hero">
          <div className="project-card">
            <div className="meta-row">
              <span className="badge">Founder · Product · Engineering</span>
              <span className="badge">Jan 2026 → Present</span>
            </div>
            <h3>From paperwork<br/>to production.</h3>
            <p className="lede">
              22 feature modules. 38 schema migrations. AES-256 PHI encryption,
              audit logging on every CRUD &amp; view event, RBAC, MFA, and
              multi-tenant isolation. Reduced PAR processing time by ~60% for
              the agency operating it daily.
            </p>
            <div className="stat-grid">
              <div>
                <div className="num">22<span className="unit">mod</span></div>
                <div className="lbl">Feature modules</div>
              </div>
              <div>
                <div className="num">38<span className="unit">mig</span></div>
                <div className="lbl">Schema migrations</div>
              </div>
              <div>
                <div className="num">3<span className="unit">mo</span></div>
                <div className="lbl">Zero → production</div>
              </div>
              <div>
                <div className="num">1<span className="unit">×</span></div>
                <div className="lbl">Live agency tenant</div>
              </div>
            </div>
          </div>

          <div className="brand-card">
            <div className="logo-stage">
              <div className="sparkle-bg">
                <Sparkle size={20} style={{ position: "absolute", top: "8%",  left: "12%" }} />
                <Sparkle size={14} style={{ position: "absolute", top: "16%", right: "16%" }} />
                <Sparkle size={16} style={{ position: "absolute", bottom: "20%", left: "18%" }} />
                <Heart   size={20} style={{ position: "absolute", top: "30%", right: "10%" }} />
                <Heart   size={14} style={{ position: "absolute", bottom: "12%", right: "20%" }} />
                <Diamond size={12} style={{ position: "absolute", top: "55%", left: "8%" }} />
              </div>
              <img src="assets/parcovo-logo.png" alt="PARCOVO" />
            </div>
            <div className="meta">
              <div className="meta-item">
                <div className="k">Stack</div>
                <div className="v">Python · FastAPI · React · TS · Postgres</div>
              </div>
              <div className="meta-item">
                <div className="k">Status</div>
                <div className="v"><span className="live"></span>Live in production</div>
              </div>
              <div className="meta-item">
                <div className="k">Compliance</div>
                <div className="v">HIPAA technical &amp; privacy</div>
              </div>
              <div className="meta-item">
                <div className="k">Tenant</div>
                <div className="v">Complex Home Care Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES with inline animations */}
        <div className="feature-grid">
          <TiltCard className="feature-card">
            <div className="feature-anim"><PARAnim /></div>
            <div className="feat-tag">01 · Authorization</div>
            <h4>PAR tracking that warns before it hurts.</h4>
            <p>Service line breakdowns, expiration windows surfaced 90/60/30 days out, document version history per PAR.</p>
          </TiltCard>

          <TiltCard className="feature-card">
            <div className="feature-anim"><CredentialAnim /></div>
            <div className="feat-tag">02 · Credentialing</div>
            <h4>Caregiver compliance, ticked off automatically.</h4>
            <p>CBI, OIG, DORA, CAPS, DL expiry — every required check tracked, surfaced as alerts before they go overdue.</p>
          </TiltCard>

          <TiltCard className="feature-card">
            <div className="feature-anim"><ScheduleAnim /></div>
            <div className="feat-tag">03 · Care plan</div>
            <h4>Schedule grid that catches its own conflicts.</h4>
            <p>HM / PCP / HMA care plans with weekly minute math and overlap detection across HCBS and skilled-agency hours.</p>
          </TiltCard>

          <TiltCard className="feature-card">
            <div className="feature-anim"><AuditAnim /></div>
            <div className="feat-tag">04 · Audit log</div>
            <h4>Every view, edit, and auth — recorded.</h4>
            <p>Append-only audit trail across CRUD and read events. Required for HIPAA, useful for everything else.</p>
          </TiltCard>

          <TiltCard className="feature-card">
            <div className="feature-anim"><DocAnim /></div>
            <div className="feat-tag">05 · Documents</div>
            <h4>Versioned PDF storage, SHA-256 sealed.</h4>
            <p>Every uploaded document fingerprinted and versioned. Old revisions stay viewable, never overwritten.</p>
          </TiltCard>

          <TiltCard className="feature-card">
            <div className="feature-anim"><TenantAnim /></div>
            <div className="feat-tag">06 · Multi-tenant</div>
            <h4>Tenant-isolated PHI from row zero.</h4>
            <p>Subdomain-based agency portals. Branding, users, and PHI never cross tenant boundaries — enforced at the query layer.</p>
          </TiltCard>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="block" id="experience">
        <div className="section-head">
          <h2>
            Operator first,<br />
            <em>then</em> product manager.
          </h2>
          <div className="right">
            <div className="tiny-label" style={{ marginBottom: 8 }}>Experience</div>
            Eight years across logistics, sales leadership, and home care
            operations — three industries, one through-line: ship the thing,
            cleanly, in a regulated context.
          </div>
        </div>

        <div className="timeline">
          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Founder &amp; Product Manager</h4>
                <div className="org">Ariune LLC — Colorado</div>
              </div>
              <span className="when">Jan 2026 — Present</span>
            </div>
            <p>
              Owned full PARCOVO lifecycle — discovery, prioritization, PRDs,
              delivery, iteration. 22 modules in 3 months. Defined HIPAA
              technical safeguards and shipped them. Used Claude Code, Cursor,
              and ChatGPT to compress feedback cycles, with human judgment on
              the regulated calls.
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Operations &amp; Domain Expert</h4>
                <div className="org">Complex Home Care Solutions — Colorado</div>
              </div>
              <span className="when">Mar 2025 — Present</span>
            </div>
            <p>
              Embedded in PAR workflows, Medicaid documentation, caregiver
              scheduling, and compliance tracking. Operational context that
              drives every PARCOVO product decision. Wrote org-wide SOPs and
              led staff onboarding.
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Team Manager</h4>
                <div className="org">Autocom Japan Inc — Ulaanbaatar, Mongolia</div>
              </div>
              <span className="when">Sep 2020 — Mar 2022</span>
            </div>
            <p>
              Led a 4-person sales team. Defined KPIs, built performance
              dashboards, and reduced new-hire ramp-up time with a structured
              training program.
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Logistics Coordinator</h4>
                <div className="org">Kaneyama LLC — Ulaanbaatar, Mongolia</div>
              </div>
              <span className="when">Jun 2018 — Aug 2021</span>
            </div>
            <p>
              End-to-end import logistics with a 100% compliance record across
              three years of regulatory filings. Trilingual liaison between
              Japanese suppliers, Mongolian customs, and English-speaking
              partners.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="block" style={{ paddingTop: 20 }}>
        <div className="section-head">
          <h2>What I bring on <em>day one</em>.</h2>
          <div className="right">
            <div className="tiny-label" style={{ marginBottom: 8 }}>Capabilities</div>
            Domain depth, technical fluency, and the operational context most
            PMs spend years acquiring.
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-block">
            <div className="label">01 · Product</div>
            <h4>Product management</h4>
            <ul>
              <li>Roadmaps</li>
              <li>Prioritization</li>
              <li>PRDs</li>
              <li>Discovery</li>
              <li>GTM planning</li>
              <li>Stakeholder alignment</li>
              <li>Adoption metrics</li>
            </ul>
          </div>
          <div className="skill-block">
            <div className="label">02 · Domain</div>
            <h4>Compliance &amp; ops</h4>
            <ul>
              <li>Home care operations</li>
              <li>PAR workflows</li>
              <li>HIPAA safeguards</li>
              <li>Medicaid documentation</li>
              <li>Caregiver credentialing</li>
              <li>Multi-tenant SaaS</li>
              <li>EVV context</li>
            </ul>
          </div>
          <div className="skill-block">
            <div className="label">03 · Technical</div>
            <h4>Tools &amp; stack</h4>
            <ul>
              <li>Notion</li>
              <li>Git</li>
              <li>SQL</li>
              <li>REST APIs</li>
              <li>Python · FastAPI</li>
              <li>React · TypeScript</li>
              <li>Postgres · Docker</li>
              <li>Claude Code · Cursor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div>
            <h2 className="contact-h">
              Let's build<br />
              <em>something that</em><br />
              actually ships.
            </h2>
            <p>
              Currently exploring product roles where domain context matters as
              much as craft — home care, healthcare ops, regulated SaaS.
              Comfortable bringing operational depth to the first discovery
              call and writing requirements engineering can own.
            </p>

            <div className="contact-links">
              <a className="contact-row" href="mailto:rn.zaya019@gmail.com">
                <span className="k">Email</span>
                <span className="v">rn.zaya019@gmail.com</span>
                <span className="arr">→</span>
              </a>
              <a className="contact-row" href="tel:+17203849848">
                <span className="k">Phone</span>
                <span className="v">720 · 384 · 9848</span>
                <span className="arr">→</span>
              </a>
              <a className="contact-row" href="https://linkedin.com/in/ariunzaya-baasanjargal" target="_blank" rel="noreferrer">
                <span className="k">LinkedIn</span>
                <span className="v">ariunzaya-baasanjargal</span>
                <span className="arr">↗</span>
              </a>
              <a className="contact-row" href="https://ariune.com" target="_blank" rel="noreferrer">
                <span className="k">Site</span>
                <span className="v">ariune.com</span>
                <span className="arr">↗</span>
              </a>
              <a
                className="contact-row"
                href="public/resume_ariunzaya.pdf"
                download="Ariunzaya_Baasanjargal_Resume.pdf"
                style={{ borderBottom: "none", marginTop: 8 }}
              >
                <span className="k">Resume</span>
                <span className="v" style={{ color: "var(--gold)" }}>Download PDF</span>
                <span className="arr" style={{ color: "var(--gold)" }}>↓</span>
              </a>
            </div>
          </div>

          <div className="contact-mascot">
            <Sparkle size={28} style={{ position: "absolute", top: "8%",  left: "10%" }} />
            <Sparkle size={20} style={{ position: "absolute", top: "20%", right: "8%" }} />
            <Diamond size={14} style={{ position: "absolute", top: "50%", left: "6%" }} />
            <Heart   size={22} style={{ position: "absolute", bottom: "20%", left: "16%" }} />
            <Heart   size={26} style={{ position: "absolute", top: "30%", right: "20%" }} />
            <Diamond size={11} style={{ position: "absolute", bottom: "30%", right: "8%" }} />
            <img src="assets/mascot.png" alt="Parco mascot waving" />
          </div>
        </div>

        <footer>
          <span>© 2026 Ariune LLC · Colorado, USA</span>
          <span className="mono">Built by hand. Hosted with care.</span>
        </footer>
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
