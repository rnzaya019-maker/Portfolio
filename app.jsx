const { useEffect, useRef, useState } = React;

/* ── Custom SVG decorative icons ────────────────────────── */
function Sparkle({ size = 14, color = "#F5D547", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2 L13.8 9.5 L21 11 L13.8 12.5 L12 22 L10.2 12.5 L3 11 L10.2 9.5 Z"
      fill={color} stroke="#1C3A6E" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>);

}

function Heart({ size = 14, color = "#7FC5E8", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z"
      fill={color} stroke="#1C3A6E" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>);

}

function Diamond({ size = 12, color = "#F5D547", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2 L22 12 L12 22 L2 12 Z"
      fill={color} stroke="#1C3A6E" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>);

}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <polyline points="2,7 5.5,11 12,3" stroke="#fff" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function AlertIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <line x1="7" y1="2.5" x2="7" y2="8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7" cy="11.5" r="1.3" fill="#fff" />
    </svg>);

}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17.1l-6.2 4.2 2.4-7.4L2 9.4h7.6z" />
    </svg>);

}

function DownloadIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v13M7 11l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>);

}

/* ── Scattered particles across the full hero ───────────── */
function FloatingParticles() {
  const items = [
  { type: "sparkle", size: 24, color: "#F5D547", top: "7%", left: "4%", delay: "0s", dur: "7s" },
  { type: "heart", size: 20, color: "#7FC5E8", top: "11%", left: "43%", delay: "1.4s", dur: "9s" },
  { type: "diamond", size: 13, color: "#F5D547", top: "17%", left: "73%", delay: "0.5s", dur: "6s" },
  { type: "sparkle", size: 15, color: "#FFD4D4", top: "29%", left: "60%", delay: "2.2s", dur: "8s" },
  { type: "heart", size: 26, color: "#FFD4D4", top: "54%", left: "6%", delay: "0.9s", dur: "10s" },
  { type: "diamond", size: 11, color: "#7FC5E8", top: "61%", left: "92%", delay: "1.7s", dur: "7.5s" },
  { type: "sparkle", size: 18, color: "#7FC5E8", top: "75%", left: "35%", delay: "3s", dur: "8.5s" },
  { type: "heart", size: 16, color: "#F5D547", top: "82%", left: "75%", delay: "0.3s", dur: "9s" },
  { type: "diamond", size: 15, color: "#FFD4D4", top: "91%", left: "19%", delay: "2.6s", dur: "7s" },
  { type: "sparkle", size: 12, color: "#F5D547", top: "45%", left: "97%", delay: "1.1s", dur: "6.5s" },
  { type: "heart", size: 14, color: "#7FC5E8", top: "3%", left: "89%", delay: "2.9s", dur: "8s" },
  { type: "sparkle", size: 20, color: "#FFD4D4", top: "21%", left: "14%", delay: "0.7s", dur: "9.5s" },
  { type: "diamond", size: 10, color: "#F5D547", top: "38%", left: "2%", delay: "3.4s", dur: "7.5s" },
  { type: "heart", size: 18, color: "#FFD4D4", top: "67%", left: "50%", delay: "1.6s", dur: "8s" }];

  return (
    <div className="floating-particles" aria-hidden>
      {items.map((p, i) =>
      <div
        key={i}
        className="float-particle"
        style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}>

          {p.type === "sparkle" && <Sparkle size={p.size} color={p.color} />}
          {p.type === "heart" && <Heart size={p.size} color={p.color} />}
          {p.type === "diamond" && <Diamond size={p.size} color={p.color} />}
        </div>
      )}
    </div>);

}

/* ── Hero video stage — 4-sided smudge blur walls ── */
function HeroVideo() {
  return (
    <div className="hero-video-wrap" aria-hidden>
      <video
        className="hero-video"
        src="public/assets/parcovo_hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hvid-edge hvid-top" />
      <div className="hvid-edge hvid-bottom" />
      <div className="hvid-edge hvid-left" />
      <div className="hvid-edge hvid-right" />
    </div>
  );
}

/* ── Interactive 3D brand stage — hero right panel ──────── */
function HeroStage3D() {
  const stageRef = useRef(null);
  const [rot, setRot] = useState({ x: -18, y: 28 });
  const auto = useRef(true);

  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (t) => {
      const dt = (t - last) / 1000;last = t;
      if (auto.current) {
        setRot((r) => ({ x: r.x, y: r.y + dt * 14 }));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e) => {
    auto.current = false;
    const r = stageRef.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    setRot({ x: -dy * 40 - 12, y: dx * 60 + 18 });
  };
  const onLeave = () => {auto.current = true;};

  const faces = [
  { tf: "translateZ(140px)", bg: "var(--navy)", txt: "PARCOVO", sub: "compliance ledger" },
  { tf: "rotateY(180deg) translateZ(140px)", bg: "var(--gold)", txt: "22", sub: "core modules" },
  { tf: "rotateY(90deg) translateZ(140px)", bg: "var(--sky)", txt: "HIPAA", sub: "technical safeguards" },
  { tf: "rotateY(-90deg) translateZ(140px)", bg: "var(--pink)", txt: "PAR", sub: "expiring · 90 / 60 / 30" },
  { tf: "rotateX(90deg) translateZ(140px)", bg: "var(--cream)", txt: "EVV", sub: "data pipelines" },
  { tf: "rotateX(-90deg) translateZ(140px)", bg: "var(--ice)", txt: "MDCD", sub: "documentation" }];


  return (
    <div
      ref={stageRef}
      className="hero-stage cube-stage"
      onMouseMove={onMove}
      onMouseLeave={onLeave}>

      <div className="cube-floor" aria-hidden />
      <div
        className="cube"
        style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}>

        {faces.map((f, i) =>
        <div key={i} className={`cube-face f-${i}`} style={{ transform: f.tf, background: f.bg }}>
            <div className="face-inner">
              <div className="face-txt">{f.txt}</div>
              <div className="face-sub">{f.sub}</div>
            </div>
          </div>
        )}
      </div>

      {/* orbiting brand particles */}
      <div className="orbit orbit-1" aria-hidden>
        <span className="orbit-dot"><Sparkle size={22} /></span>
      </div>
      <div className="orbit orbit-2" aria-hidden>
        <span className="orbit-dot"><Heart size={18} color="#7FC5E8" /></span>
      </div>
      <div className="orbit orbit-3" aria-hidden>
        <span className="orbit-dot"><Diamond size={14} color="#F5D547" /></span>
      </div>

      <div className="cube-hint mono">drag / hover to spin</div>
    </div>);

}

/* ── Contact 3D — floating brand-tile arrangement ───────── */
function Cube3D() {
  const ref = useRef(null);
  const [rot, setRot] = useState({ x: -10, y: 22 });
  const auto = useRef(true);

  useEffect(() => {
    let raf,last = performance.now();
    const tick = (t) => {
      const dt = (t - last) / 1000;last = t;
      if (auto.current) setRot((r) => ({ x: r.x + Math.sin(t / 1800) * 0.05, y: r.y + dt * 18 }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e) => {
    auto.current = false;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    setRot({ x: -dy * 40, y: dx * 70 });
  };
  const onLeave = () => {auto.current = true;};

  return (
    <div className="contact-3d" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="contact-3d-stage" style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}>
        <div className="ctile ctile-1"><span>discover</span></div>
        <div className="ctile ctile-2"><span>prioritize</span></div>
        <div className="ctile ctile-3"><span>ship</span></div>
        <div className="ctile ctile-4"><span>validate</span></div>
        <div className="ctile ctile-core">
          <Sparkle size={28} style={{ position: "absolute", top: 10, left: 10 }} />
          <span className="core-label">A</span>
        </div>
      </div>
    </div>);

}

/* ── Tilt-on-hover wrapper for feature cards ─────────────── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `perspective(900px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>);

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
        <a
          href="public/Ariunzaya_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          <DownloadIcon size={13} /> Résumé
        </a>
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
            <span className="accent">Founder &amp; Implementation Lead</span><br />
            who built the <span className="underline">whole&nbsp;cow</span>,<br />
            not just the&nbsp;moo.
          </h1>
          <p className="hero-sub">
            Hi — I'm <strong className="fancy-name">Ariunzaya Baasanjargal.</strong> I learn
            the work before I build the tool. Six years across international
            logistics, operations scaling, and regulated home care led to
            shipping <strong>PARCOVO</strong>, a HIPAA-grade SaaS validated daily by
            live agency staff — built from the inside out.
          </p>

          <div className="hero-meta">
            <div className="stat">
              <span className="num">22</span>
              <span className="lbl">core modules</span>
            </div>
            <div className="div" />
            <div className="stat">
              <span className="num">7</span>
              <span className="lbl">daily live users</span>
            </div>
            <div className="div" />
            <div className="stat">
              <span className="num">~60%</span>
              <span className="lbl">overhead cut</span>
            </div>
            <div className="div" />
            <div className="stat">
              <span className="num">3</span>
              <span className="lbl">languages</span>
            </div>
          </div>

          <div className="hero-ctas">
            <a
              className="btn btn-resume btn-resume-xl"
              href="public/Ariunzaya_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon size={17} />
              <span className="btn-stack">
                <span className="btn-main">View résumé</span>
                <span className="btn-sub">PDF · view &amp; print</span>
              </span>
              <span className="btn-arrow" aria-hidden>↗</span>
            </a>
            <a className="btn btn-primary" href="#parcovo">
              See PARCOVO <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <HeroVideo />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) =>
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
          )}
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
              <span className="hl">The best solutions come from watching what your
              users actually struggle with</span> — then eliminating that friction
              before building systems. A decade in operations and a year of
              deep niche validation taught me that.
            </p>
            <p>
              In home care specifically: I identified that manual PAR tracking was
              the authorization-compliance bottleneck, shipped a centralized platform
              solving it, and validated with a live customer seeing <strong>~60%
              overhead reduction</strong> in authorization management. I own the
              full lifecycle — discovery to deployment — collaborating across
              engineering, operations, and compliance to balance technical constraints
              with high-impact outcomes.
            </p>
          </div>

          <div className="about-card">
            <h3>Quick facts</h3>
            <p><strong>Based in</strong> Denver, CO</p>
            <p><strong>Studying</strong> M.S. Information Technology Management, CSU Global (Expected 2027)</p>
            <p><strong>Education</strong> B.S. Management Information Systems + B.A. Linguistics, Columbia College — Denver, CO · 2022–2025</p>
            <p><strong>Working with</strong> Claude Code · Cursor · Google AI Studio for rapid spec drafting and edge-case discovery</p>

            <div className="lang-row">
              <span className="lang-chip"><span className="flag">🇺🇸</span> English (Fluent)</span>
              <span className="lang-chip"><span className="flag">🇲🇳</span> Mongolian (Native)</span>
              <span className="lang-chip"><span className="flag">🇯🇵</span> Japanese (Intermediate)</span>
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
              <span className="badge">Senior PM · Co-Founder</span>
              <span className="badge">Aug 2025 → Present</span>
            </div>
            <h3>Authorization<br />as a compliance<br />ledger.</h3>
            <p className="lede">
              22 core modules prioritized by highest-cost-of-failure first — compliance
              and authorization tracking over most-requested features. Designed as a
              compliance ledger, not a document manager: enabling downstream Medicaid
              submission and EVV data pipelines without custom work per agency.
            </p>
            <div className="stat-grid">
              <div>
                <div className="num">22<span className="unit">mod</span></div>
                <div className="lbl">Core modules</div>
              </div>
              <div>
                <div className="num">7<span className="unit">live</span></div>
                <div className="lbl">Daily users</div>
              </div>
              <div>
                <div className="num">~60<span className="unit">%</span></div>
                <div className="lbl">Overhead cut</div>
              </div>
              <div>
                <div className="num">80<span className="unit">%</span></div>
                <div className="lbl">Rework root-caused</div>
              </div>
            </div>
          </div>

          <div className="brand-card">
            <HeroStage3D />
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

      {/* EXPERIENCE & EDUCATION */}
      <section className="block" id="experience">
        <div className="section-head">
          <h2>
            Operator first,<br />
            <em>builder</em> always.
          </h2>
          <div className="right">
            <div className="tiny-label" style={{ marginBottom: 8 }}>Experience &amp; Education</div>
            Eight years across logistics, sales leadership, and home care
            operations — three industries, one through-line: ship the thing,
            cleanly, in a regulated context.
          </div>
        </div>

        <div className="timeline">
          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Founder &amp; Implementation Lead</h4>
                <div className="org">PARCOVO · Denver, CO</div>
              </div>
              <span className="when">Jun 2025 — Present</span>
            </div>
            <ul>
              <li>Led the end-to-end implementation for an active Medicaid agency, overseeing 117 clients and 126 caregivers. Managed the complete transition from initial stakeholder discovery and workflow analysis to final system configuration and staff onboarding, replacing manual processes with a centralized digital platform.</li>
              <li>Developed and launched 22 compliance modules, including a comprehensive prior authorization lifecycle system, caregiver credentialing, and real-time supervisory tools, achieving 100% user adoption across 7 daily staff with zero support escalations.</li>
              <li>Established robust security and scalability by deploying all 5 HIPAA compliance phases (AES-256 PHI encryption, audit logging, MFA, 4-tier RBAC, data retention) and engineering a reusable onboarding architecture for seamless deployment at future agencies.</li>
              <li>Acted as the primary liaison for all ongoing product strategy and client escalations; embedded within agency operations to map complex authorization workflows and define the comprehensive product roadmap before initiating technical development.</li>
            </ul>
          </div>

          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Product Researcher &amp; Operations Strategist</h4>
                <div className="org">CHCS Ltd. · Denver, CO</div>
              </div>
              <span className="when">Mar 2025 — Present</span>
            </div>
            <ul>
              <li>Collaborated within active agency environments to identify and document critical gaps in authorization, credentialing, and operational workflows; utilized these insights to architect PARCOVO and establish a compliance-centric onboarding framework prioritizing risk mitigation and feature scalability.</li>
            </ul>
          </div>

          <div className="tl-item tl-edu">
            <div className="tl-row">
              <div>
                <h4>M.S. Information Technology Management</h4>
                <div className="org">Colorado State University</div>
              </div>
              <span className="when">2025 — 2027 (In Progress)</span>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Growth PM &amp; Sales Operations Manager</h4>
                <div className="org">Autocom Japan Inc. · Mongolia</div>
              </div>
              <span className="when">Sep 2020 — Mar 2022</span>
            </div>
            <ul>
              <li>Standardized training protocols for 20 accounts across Caribbean and African territories, resulting in a ~30% faster client ramp-up and long-term retention.</li>
              <li>Managed international cross-functional handoffs between operations, sales, and regional leadership. Monitored onboarding KPIs and delivered weekly milestone reports to the executive team.</li>
            </ul>
          </div>

          <div className="tl-item tl-edu">
            <div className="tl-row">
              <div>
                <h4>Prerequisite MIS Coursework toward MSITM</h4>
                <div className="org">Columbia College · Denver, CO</div>
              </div>
              <span className="when">2022 — 2025</span>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-row">
              <div>
                <h4>Logistics &amp; Compliance Coordinator</h4>
                <div className="org">Kaneyama LLC · Mongolia</div>
              </div>
              <span className="when">Jun 2018 — Sep 2020</span>
            </div>
            <ul>
              <li>Served as a trilingual liaison (English, Mongolian, and Japanese) for international authorities and suppliers; oversaw revenue cycle reporting and held responsibility for compliance documentation within strict regulatory timeframes.</li>
            </ul>
          </div>

          <div className="tl-item tl-edu">
            <div className="tl-row">
              <div>
                <h4>Bachelor of Arts in Education</h4>
                <div className="org">University of the Humanities · Mongolia</div>
              </div>
              <span className="when">2014 — 2018</span>
            </div>
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
              <li>PRD writing</li>
              <li>Go-to-market</li>
              <li>Opportunity sizing</li>
              <li>Adoption metrics</li>
              <li>Stakeholder alignment</li>
            </ul>
          </div>
          <div className="skill-block">
            <div className="label">02 · Domain</div>
            <h4>Regulated SaaS</h4>
            <ul>
              <li>Home care operations</li>
              <li>PAR / Prior Auth</li>
              <li>HIPAA safeguards</li>
              <li>Medicaid documentation</li>
              <li>Caregiver credentialing</li>
              <li>EVV context</li>
              <li>Multi-tenant SaaS</li>
            </ul>
          </div>
          <div className="skill-block">
            <div className="label">03 · Tooling</div>
            <h4>AI &amp; technical</h4>
            <ul>
              <li>Claude Code</li>
              <li>Cursor</li>
              <li>Google AI Studio</li>
              <li>SQL</li>
              <li>REST APIs</li>
              <li>Python · FastAPI</li>
              <li>React · TypeScript</li>
              <li>PostgreSQL · Docker</li>
              <li>Notion · Git</li>
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
              Looking to bring a decade of operations expertise and a year of deep
              niche validation to an established market leader — where customer
              trust and market presence compound the value of every solution shipped.
              Comfortable bringing operational depth to the first discovery call.
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
              <a className="contact-row" href="https://ariune.com" target="_blank" rel="noreferrer" style={{ borderBottom: "none" }}>
                <span className="k">Site</span>
                <span className="v">ariune.com</span>
                <span className="arr">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-mascot">
            <div className="footer-3d">
              <div className="footer-3d-stage">
                <div className="footer-tile ft-1"><span>discover</span></div>
                <div className="footer-tile ft-2"><span>prioritize</span></div>
                <div className="footer-tile ft-3"><span>ship</span></div>
                <div className="footer-tile ft-4"><span>validate</span></div>
                <div className="footer-core">
                  <img src="assets/ariune-logo-new.png" alt="Ariune logomark" className="footer-core-logo" />
                  <span className="footer-core-letter">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <span>© 2026 Ariune LLC · Denver, CO</span>
          <span className="mono">Built by hand. Hosted with care.</span>
        </footer>
      </section>
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
