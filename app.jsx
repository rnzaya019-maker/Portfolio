const { useEffect, useRef, useState } = React;

/* ════════════════════════════════════════════════════════════
   ARIUNZAYA — PORTFOLIO V3 · "ops telemetry"
   Implemented from Claude Design prototype Portfolio.dc.html
   Live telemetry hero · Case Study Lab · Finnsul dossier page
   ════════════════════════════════════════════════════════════ */

/* ── Mascot system (carried across every project) ─────────── */
const MASCOT_PATHS = {
  sparkle: "M12 2 L13.8 9.5 L21 11 L13.8 12.5 L12 22 L10.2 12.5 L3 11 L10.2 9.5 Z",
  heart: "M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z",
  diamond: "M12 2 L22 12 L12 22 L2 12 Z",
};

function Mascot({ type = "sparkle", size = 14, color = "#D6FF3D", stroke = "#0A1422", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d={MASCOT_PATHS[type]} fill={color} stroke={stroke}
        strokeWidth={type === "heart" ? 1.6 : 1.4} strokeLinejoin="round" />
    </svg>
  );
}

/* ── Floating ambient particles ───────────────────────────── */
function Particles({ items }) {
  return (
    <div className="particles" aria-hidden>
      {items.map((p, i) => (
        <div key={i} className="particle"
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}>
          <Mascot type={p.type} size={p.size} color={p.color} stroke={p.stroke} />
        </div>
      ))}
    </div>
  );
}

const HERO_PARTICLES = [
  { type: "sparkle", size: 22, color: "#FFC83D", top: "10%", left: "5%", delay: "0s", dur: "7s" },
  { type: "heart", size: 18, color: "#3DD6C4", top: "14%", left: "46%", delay: "1.4s", dur: "9s" },
  { type: "diamond", size: 13, color: "#D6FF3D", top: "20%", left: "72%", delay: "0.5s", dur: "6s" },
  { type: "sparkle", size: 15, color: "#FF9EB3", top: "32%", left: "60%", delay: "2.2s", dur: "8s" },
  { type: "heart", size: 24, color: "#FF9EB3", top: "58%", left: "6%", delay: "0.9s", dur: "10s" },
  { type: "diamond", size: 11, color: "#3DD6C4", top: "64%", left: "93%", delay: "1.7s", dur: "7.5s" },
  { type: "sparkle", size: 17, color: "#D6FF3D", top: "78%", left: "36%", delay: "3s", dur: "8.5s" },
  { type: "heart", size: 15, color: "#FFC83D", top: "86%", left: "74%", delay: "0.3s", dur: "9s" },
  { type: "sparkle", size: 12, color: "#D6FF3D", top: "46%", left: "96%", delay: "1.1s", dur: "6.5s" },
];
const LAB_PARTICLES = [
  { type: "sparkle", size: 18, color: "#D6FF3D", top: "12%", left: "88%", delay: "0.4s", dur: "8s" },
  { type: "heart", size: 15, color: "#3DD6C4", top: "70%", left: "4%", delay: "1.6s", dur: "9s" },
  { type: "diamond", size: 12, color: "#FFC83D", top: "30%", left: "55%", delay: "2.4s", dur: "7s" },
];
const CONTACT_PARTICLES = [
  { type: "sparkle", size: 20, color: "#FFC83D", top: "16%", left: "8%", delay: "0s", dur: "7.5s" },
  { type: "heart", size: 17, color: "#3DD6C4", top: "24%", left: "88%", delay: "1.2s", dur: "9s" },
  { type: "diamond", size: 12, color: "#D6FF3D", top: "70%", left: "12%", delay: "2s", dur: "6.5s" },
  { type: "sparkle", size: 14, color: "#FF9EB3", top: "76%", left: "85%", delay: "0.8s", dur: "8s" },
];

/* ── Keep every video muted, looping, playing ─────────────── */
function useVideoEnforcer() {
  useEffect(() => {
    const fixVideos = () => {
      document.querySelectorAll("video").forEach((v) => {
        v.muted = true;
        v.loop = true;
        if (v.paused) v.play().catch(() => {});
      });
    };
    fixVideos();
    const t = setInterval(fixVideos, 1500);
    return () => clearInterval(t);
  }, []);
}

/* ── NAV ──────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-logo">
          <img src="assets/ariune-logo-new.png" alt="Ariune endless-knot logo" />
        </div>
        <span className="word">Ariune</span>
      </div>
      <a href="#story">Story</a>
      <a href="#work">Work</a>
      <a href="#lab">Case Study Lab</a>
      <a className="fs-link" href="finnsul.html">Finnsul Study ↗</a>
      <a className="cta" href="#contact">Say hi</a>
    </nav>
  );
}

/* ── HERO: interactive 4-agent playground (ported from v4) ───
   The visitor feeds the system a task and watches that exact agent
   run execute, with play / pause / step / restart and a clickable
   timeline scrubber. ALL DATA SYNTHETIC — no real caregiver PII. */
const C_SYSTEM = "#8da0b8";
const C_RECRUITER = "#a9bcd1";
const C_OUTREACH = "#d6ff3d";
const C_ONBOARDING = "#c3cedd";
const C_TELEGRAM = "#7f8ea7";

const AGENT_RUN = [
  { agent: "system", agentColor: C_SYSTEM, kind: "sys", text: "chcs-ops · 4-agent pipeline · run #4821 starting", dwell: 700 },
  { agent: "recruiter", agentColor: C_RECRUITER, kind: "agent", text: "scanning Indeed · Boulder / Lafayette / Longmont … 12 candidates", dwell: 1100 },
  { agent: "recruiter", agentColor: C_RECRUITER, kind: "sub", text: "scoring · CNA ✓ · transport ✓ · availability ✓ → 8 qualified", dwell: 950 },
  { agent: "recruiter", agentColor: C_RECRUITER, kind: "ok", text: 'sheets: appended 8 leads to "Caregiver Leads"', dwell: 800 },
  { agent: "outreach", agentColor: C_OUTREACH, kind: "agent", text: "TCPA window OK (9a–8p MT) · drafting intro SMS", dwell: 1000 },
  { agent: "outreach", agentColor: C_OUTREACH, kind: "ok", text: "Twilio: 8 messages sent · 0 errors", dwell: 800 },
  { agent: "outreach", agentColor: C_OUTREACH, kind: "sub", text: "reply: 5 interested · 2 no · 1 needs evening shifts", dwell: 1050 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "agent", text: "DocuSeal packet sent to 5 · I-9 + W-4 + policy ack", dwell: 1000 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "ok", text: "form complete (3/5) → appended to master list", dwell: 850 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "sub", text: "background-check queued · CAPS submitted (3)", dwell: 900 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "agent", text: "callout tonight 6pm · client #JD-… needs coverage", dwell: 1000 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "sub", text: "Claude ranked 3 backups by proximity + reliability", dwell: 950 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "await", text: "awaiting human approval before notifying caregivers …", dwell: 1400 },
  { agent: "system", agentColor: C_SYSTEM, kind: "sys", text: "run #4821 idle · ~90% less manual data entry vs. before", dwell: 1600 },
];

const CALLOUT_RUN = [
  { agent: "system", agentColor: C_SYSTEM, kind: "sys", text: "coordinator · shift-callout · run #5107 starting", dwell: 700 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "agent", text: "callout 6pm tonight · client #JD-… · 4hr visit uncovered", dwell: 1000 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "sub", text: "querying roster · 11 caregivers within 12 mi · 4 available", dwell: 1000 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "sub", text: "Claude ranked by proximity + reliability + last-shift gap", dwell: 950 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "ok", text: "shortlist: M.R. (8 mi · 4.9) · A.T. (11 mi · 4.7) · D.K. (12 mi)", dwell: 1000 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "await", text: "awaiting human approval before pinging caregivers …", dwell: 1300 },
  { agent: "telegram", agentColor: C_TELEGRAM, kind: "ok", text: "approved → 3 Telegram pings sent · M.R. accepted in 90s", dwell: 1050 },
  { agent: "system", agentColor: C_SYSTEM, kind: "sys", text: "shift covered · logged to schedule · coordinator idle", dwell: 1500 },
];

const ONBOARD_RUN = [
  { agent: "system", agentColor: C_SYSTEM, kind: "sys", text: "onboarding · new-hire packet · run #5233 starting", dwell: 700 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "agent", text: "new hire accepted offer · generating compliance packet", dwell: 1000 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "sub", text: "DocuSeal: I-9 + W-4 + policy ack + direct deposit", dwell: 950 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "ok", text: "packet sent · SMS + email · reminder scheduled +24h", dwell: 900 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "sub", text: "background check queued · CAPS submitted · TB on file", dwell: 950 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "await", text: "one field flagged (SSN mismatch) → routing to human …", dwell: 1300 },
  { agent: "onboarding", agentColor: C_ONBOARDING, kind: "ok", text: "resolved · all docs complete → appended to master list", dwell: 950 },
  { agent: "system", agentColor: C_SYSTEM, kind: "sys", text: "hire active in system · ~40 min of manual setup avoided", dwell: 1500 },
];

const SCENARIOS = [
  { id: "recruit", label: "Run a recruiting drive", prompt: "find & onboard caregivers in Boulder County", run: AGENT_RUN },
  { id: "callout", label: "Cover tonight's shift", prompt: "client #JD needs 6pm coverage — find a backup", run: CALLOUT_RUN },
  { id: "onboard", label: "Onboard a new hire", prompt: "send the compliance packet to the new CNA", run: ONBOARD_RUN },
];

const AGENT_NODES = [
  { id: "recruiter", label: "Recruiter", color: C_RECRUITER, tool: "Indeed · Playwright" },
  { id: "outreach", label: "Outreach", color: C_OUTREACH, tool: "Twilio SMS" },
  { id: "onboarding", label: "Onboarding", color: C_ONBOARDING, tool: "DocuSeal · Adobe Sign" },
  { id: "telegram", label: "Coordinator", color: C_TELEGRAM, tool: "Telegram · Claude API" },
];

const AGENT_TOOLS = ["Claude API", "Google Sheets", "Twilio", "DocuSeal", "Playwright"];

const KIND_PREFIX = { agent: "›", sub: "·", ok: "✓", await: "…", sys: "#" };

function AgentDemo() {
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((s) => s.id === scenarioId) || SCENARIOS[0];
  const run = scenario.run;
  const total = run.length;

  const [visible, setVisible] = useState(0); // lines revealed so far (0..total)
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const scrollRef = useRef(null);
  const timerRef = useRef(null);

  const done = visible >= total;

  // Reset when the visitor picks a new task
  useEffect(() => {
    setVisible(0);
    setPaused(false);
  }, [scenarioId]);

  // Auto-advance until the run completes, then stop (driveable, not looping)
  useEffect(() => {
    if (paused || done) return;
    const line = run[visible];
    const dwell = ((line && line.dwell) || 900) / speed;
    timerRef.current = setTimeout(() => setVisible((v) => Math.min(v + 1, total)), dwell);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [visible, paused, speed, run, total, done]);

  // Keep newest line in view
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, scenarioId]);

  const shown = run.slice(0, visible);
  const activeAgent = (run[Math.min(visible, total - 1)] || {}).agent;
  const pct = Math.round((visible / total) * 100);

  return (
    <div className="agent-demo">
      {/* terminal chrome */}
      <div className="ad-chrome">
        <div className="ad-lights">
          <span className="ad-dot" style={{ background: "#ff5f57" }} />
          <span className="ad-dot" style={{ background: "#febc2e" }} />
          <span className="ad-dot" style={{ background: "#28c840" }} />
          <span className="ad-chrome-title">chcs-ops — agent playground</span>
        </div>
        <span className="ad-status">
          <span className="pulse-dot" /> {done ? "idle" : "running"}
        </span>
      </div>

      {/* task picker — drive the system */}
      <div className="ad-picker">
        <div className="ad-picker-label">feed it a task →</div>
        <div className="ad-chips">
          {SCENARIOS.map((s) => (
            <button key={s.id} type="button" onClick={() => setScenarioId(s.id)}
              className={"ad-chip" + (s.id === scenarioId ? " active" : "")}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* log */}
      <div ref={scrollRef} className="ad-log">
        <div className="ad-prompt">
          <span className="ad-cash">$</span>
          <span><span className="ad-you">you:</span> {scenario.prompt}</span>
        </div>
        {shown.map((line, i) => (
          <div key={scenarioId + "-" + i} className="ad-line">
            <span className="ad-prefix"
              style={{ color: line.agentColor, opacity: line.kind === "sub" ? 0.6 : 1 }}>
              {KIND_PREFIX[line.kind]}
            </span>
            <span className="ad-agent" style={{ color: line.agentColor }}>{line.agent}:</span>
            <span className={"ad-text" + (line.kind === "await" ? " await" : line.kind === "sys" ? " sys" : "")}>
              {line.text}
            </span>
          </div>
        ))}
        {done ? (
          <div className="ad-done">✓ run complete — pick another task above</div>
        ) : (
          <span className="caret" />
        )}
      </div>

      {/* scrubber */}
      <div className="ad-scrub">
        <span className="ad-pct">{pct}%</span>
        <div className="ad-track">
          <div className="ad-track-bg" />
          <div className="ad-track-fill" style={{ width: pct + "%" }} />
          <input type="range" min={0} max={total} value={visible}
            onChange={(e) => { setVisible(Number(e.target.value)); setPaused(true); }}
            aria-label="Scrub the agent run" className="ad-range" />
        </div>
      </div>

      {/* transport controls */}
      <div className="ad-controls">
        <div className="ad-ctl-left">
          <button type="button" className="ad-btn ad-btn-primary"
            onClick={() => { if (done) setVisible(0); setPaused((p) => !p); }}>
            {done ? "↺ replay" : paused ? "► play" : "❚❚ pause"}
          </button>
          <button type="button" className="ad-btn" title="Step one line"
            onClick={() => { setPaused(true); setVisible((v) => Math.min(v + 1, total)); }}>
            ›| step
          </button>
          <button type="button" className="ad-btn" title="Restart this task"
            onClick={() => { setVisible(0); setPaused(false); }}>
            ↺
          </button>
        </div>
        <div className="ad-speeds">
          {[1, 2, 4].map((s) => (
            <button key={s} type="button" onClick={() => setSpeed(s)}
              className={"ad-speed" + (speed === s ? " active" : "")}>
              {s}×
            </button>
          ))}
        </div>
      </div>

      {/* compact architecture diagram */}
      <div className="ad-pipeline">
        <div className="ad-pipe-label">pipeline</div>
        <div className="ad-nodes">
          {AGENT_NODES.map((n, i) => (
            <div className="ad-node-wrap" key={n.id}>
              <div className={"ad-node" + (activeAgent === n.id && !done ? " active" : "")}
                style={{
                  borderColor: activeAgent === n.id && !done ? n.color : "rgba(255,255,255,0.12)",
                  background: activeAgent === n.id && !done ? n.color + "1a" : "transparent",
                }}>
                <div className="ad-node-label" style={{ color: n.color }}>{n.label}</div>
                <div className="ad-node-tool">{n.tool}</div>
              </div>
              {i < AGENT_NODES.length - 1 && <span className="ad-arrow">→</span>}
            </div>
          ))}
        </div>
        <div className="ad-tools">
          {AGENT_TOOLS.map((t) => <span className="ad-toolpill" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <Particles items={HERO_PARTICLES} />
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="pulse-dot" />
          <span>Denver, CO · open to remote operations roles</span>
        </div>
        <h1>
          I build the <span className="accent">systems</span> behind the story.
        </h1>
        <p className="hero-sub">
          I'm <strong>Zaya</strong> — an operations builder who has crossed three industries,
          three languages, and one ocean to learn the same lesson everywhere:
          <strong> great brands are carried by great operations</strong>. I map messy workflows,
          turn them into processes people actually follow, and automate the rest with AI.
        </p>
        <div className="identity-chips">
          <div className="identity-chip">
            <Mascot type="diamond" size={12} color="#D6FF3D" /> Ulaanbaatar → Yokohama trade → Denver
          </div>
          <div className="identity-chip">
            <Mascot type="heart" size={13} color="#3DD6C4" /> Trilingual <span className="mono">EN · MN · JP</span>
          </div>
          <div className="identity-chip">
            <Mascot type="sparkle" size={13} color="#FFC83D" /> Builds tools, not just decks
          </div>
        </div>
        <div className="hero-ctas">
          <a className="btn btn-lime" href="finnsul.html">
            Open the Finnsul case study <Mascot type="sparkle" size={13} color="#0A1422" stroke="none" />
          </a>
          <a className="btn btn-ghost" href="#story">My story</a>
        </div>
      </div>

      <div className="hero-stage hero-stage-demo">
        <AgentDemo />
      </div>
    </header>
  );
}

/* ── MARQUEE ──────────────────────────────────────────────── */
function Marquee() {
  const items = ["process design", "vendor management", "international logistics", "compliance workflows",
    "implementation", "SQL + dashboards", "AI automation", "SOPs people actually read", "0 → 1 operations"];
  const row = items.map((t, i) => (
    <span key={i}>{t} <Mascot type="diamond" size={9} color="#0A1422" stroke="none" /></span>
  ));
  return (
    <div className="marquee">
      <div className="marquee-track">{row}{row}</div>
    </div>
  );
}

/* ── STORY ────────────────────────────────────────────────── */
function Story() {
  const chapters = [
    {
      num: "01", title: "Move things across borders", where: "Kaneyama LLC · Mongolia",
      mascot: <Mascot type="diamond" size={16} color="#D6FF3D" />,
      body: "Trilingual liaison for international vehicle exports — vendors, customs paperwork, revenue reporting, deadlines that don't forgive. Logistics was my first language of operations.",
      takeaway: "Learned: precision under pressure",
    },
    {
      num: "02", title: "Make growth repeatable", where: "Autocom Japan · 20 intl. accounts",
      mascot: <Mascot type="sparkle" size={16} color="#FFC83D" />,
      body: "Ran sales operations across Caribbean and African markets. Standardized onboarding so every new account ramped the same way — ~30% faster — and reported milestones weekly to executives.",
      takeaway: "Learned: process beats heroics",
    },
    {
      num: "03", title: "Build ops from zero", where: "PARCOVO + CHCS · Denver",
      mascot: <Mascot type="heart" size={16} color="#3DD6C4" />,
      body: "Joined a healthcare services agency as one of the first team members and built its operational backbone: 22 modules, training, documentation, and reporting for 117 clients and 126 field staff.",
      takeaway: "Learned: systems outlive founders' memory",
    },
    {
      num: "04", title: "Add the AI multiplier", where: "M.S. ITM · CSU (in progress)",
      mascot: <Mascot type="sparkle" size={16} color="#FF9EB3" />,
      body: "Now pairing the ops foundation with Python, SQL, and AI workflow automation — building the internal tools small teams usually can't afford to buy.",
      takeaway: "Learning: automate the repetitive 80%",
    },
  ];
  return (
    <section id="story" className="sec-light">
      <div className="sec-head">
        <div className="kicker">The story so far</div>
        <h2>Three industries. <span className="accent">One throughline.</span></h2>
        <p>
          Every chapter taught the same lesson from a different angle: when the process is right,
          people do their best work without thinking about the process at all.
        </p>
      </div>
      <div className="story-grid">
        {chapters.map((c, i) => (
          <div className="story-card" key={i}>
            <div className="mascot-corner">{c.mascot}</div>
            <div className="num">{c.num}</div>
            <h3>{c.title}</h3>
            <div className="where">{c.where}</div>
            <p>{c.body}</p>
            <div className="takeaway">{c.takeaway}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PRINCIPLES ───────────────────────────────────────────── */
function Principles() {
  const items = [
    {
      t: "Document like you're leaving tomorrow",
      d: "Every system I build ships with the playbook to run it without me. At PARCOVO that became a reusable onboarding architecture — future teams stand it up without reinventing it.",
      g: <Mascot type="sparkle" size={18} color="#D6FF3D" />,
    },
    {
      t: "Data before opinions",
      d: "I don't pitch changes I can't measure. Ramp-up time, adoption rate, error rate — pick the number, move the number, show the number.",
      g: <Mascot type="diamond" size={16} color="#FFC83D" />,
    },
    {
      t: "Wear the hat that's needed",
      d: "Monday: process mapping with leadership. Tuesday: training frontline staff. Wednesday: building the dashboard myself. Early-stage ops is range, not lane.",
      g: <Mascot type="heart" size={17} color="#3DD6C4" />,
    },
    {
      t: "Automate the repetitive 80%",
      d: "If a human does it twice a week and hates it, I script it. Python, SQL, and AI workflows replace busywork — and sometimes a whole software subscription.",
      g: <Mascot type="sparkle" size={18} color="#FF9EB3" />,
    },
  ];
  return (
    <section id="principles" className="principles-sec">
      <div className="principles-band">
        <div className="sec-head">
          <div className="kicker">How I work</div>
          <h2>Operating <span className="accent">principles</span></h2>
          <p>The habits that follow me into every team — formed in customs offices, sales floors, and care agencies.</p>
        </div>
        <div className="pr-grid">
          {items.map((p, i) => (
            <div className="pr-item" key={i}>
              <div className="pr-glyph">{p.g}</div>
              <div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WORK ─────────────────────────────────────────────────── */
function Work() {
  return (
    <section id="work" className="work-sec">
      <div className="sec-head">
        <div className="kicker">Selected work</div>
        <h2>Proof, <span className="accent">not promises.</span></h2>
        <p>
          Each project carries one of my mascots — a small signature that follows my work
          everywhere. Care goes to healthcare, focus goes to brands, precision goes to systems.
        </p>
      </div>

      <div className="work-grid">
        {/* PARCOVO flagship — discovery to working product, one card */}
        <div className="parcovo-card">
          <div className="work-tag">
            <Mascot type="heart" size={13} color="#3DD6C4" /> PARCOVO · healthcare operations · concept → product
          </div>
          <h3>From paper chaos to a platform people actually use</h3>
          <div className="parcovo-body">
            <figure className="parcovo-transform">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="assets/Spreadsheets_become_CRM_system_202606122357.mp4"
              />
              <figcaption>messy spreadsheets → one CRM people actually use</figcaption>
            </figure>
            <div className="parcovo-aside">
              <img
                className="parcovo-mascot-float"
                src="assets/Parcovo_mascot_logo.png"
                alt="PARCOVO mascot logo"
              />
              <p>
                Owned the operational overhaul of a Denver healthcare services agency and carried it
                from discovery all the way to working product — workflow mapping, SOPs, training,
                go-live, and the platform itself: 22 modules covering client records, authorization
                lifecycles, credentialing, versioned documents, supervisory visit tracking, compliance
                alerts, and audit logs, with HIPAA-grade safeguards. Built to be adopted, not just admired.
              </p>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat"><div className="n">22</div><div className="l">modules shipped</div></div>
            <div className="stat"><div className="n">100%</div><div className="l">staff adoption</div></div>
            <div className="stat"><div className="n">117 + 126</div><div className="l">clients + field staff</div></div>
            <div className="stat"><div className="n lime">0</div><div className="l">support escalations</div></div>
          </div>
        </div>

        {/* Autocom */}
        <div className="autocom-card">
          <div className="work-tag">
            <Mascot type="diamond" size={12} color="#FFC83D" /> Autocom Japan · sales operations
          </div>
          <h3>Onboarding that scales across oceans</h3>
          <p>
            Standardized onboarding and training for 20 international accounts across Caribbean
            and African markets — cutting client ramp-up time by roughly 30% and giving leadership
            a weekly KPI heartbeat they never had before.
          </p>
          <div className="stat-row">
            <div className="stat"><div className="n">20</div><div className="l">intl. accounts</div></div>
            <div className="stat"><div className="n">~30%</div><div className="l">faster ramp-up</div></div>
            <div className="stat"><div className="n">3</div><div className="l">languages worked in</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CASE STUDY LAB ───────────────────────────────────────── */
function CaseStudyLab() {
  return (
    <section id="lab" className="lab-sec">
      <Particles items={LAB_PARTICLES} />
      <div className="lab-intro">
        <div>
          <div className="kicker lime">The case study lab</div>
          <h2>I don't just apply. <span className="accent">I study.</span></h2>
          <p>
            Before I ask a company for a seat, I do part of the job. Each dossier in this lab is a
            real operations study of a brand I want to build for — researched from public sources,
            structured like an internal document, and shipped with a working prototype.
          </p>
        </div>
        <div className="lab-video-wrap">
          <video autoPlay muted loop playsInline src="assets/campaign/video5_athlete.mp4" />
          <div className="lab-video-tag">dossier 001 spec campaign · AI motion</div>
        </div>
      </div>

      {/* Finnsul dossier */}
      <a className="dossier-link" href="finnsul.html">
        <div className="dossier-card">
          <div className="dossier-inner">
            <div>
              <div className="dossier-badges">
                <span className="badge-dossier">Dossier 001 · Finnsul</span>
                <span className="badge-prepared">Prepared for: Operations Associate</span>
              </div>
              <h3>Chapter Two: scaling a founder-led brand</h3>
              <p className="lede">
                Finnsul — the family-built nootropic hydration brand — launched into a $1.5B
                powder drink-mix category growing ~20% a year, with a 4.97★ product and a collab
                that sold out in week one. This independent market study maps what the launch
                proved, sizes five opportunities in front of the brand, and lays out a four-pillar
                ops + AI blueprint to capture them.
              </p>
              <div className="dossier-points">
                <div className="dossier-point">
                  <Mascot type="sparkle" size={14} color="#FFC83D" stroke="#11261C" />
                  <span><strong>A $1.5B category growing 20% a year</strong> — and Finnsul sits at its sharpest edge: nootropics, projected to more than double to $14.8B by 2034.</span>
                </div>
                <div className="dossier-point">
                  <Mascot type="heart" size={14} color="#3DD6C4" stroke="#11261C" />
                  <span><strong>Retail is moving toward the brand.</strong> Ulta just opened dedicated wellness boutiques; Bloom rode the same social-to-shelf path to 15,000+ doors. Ops readiness turns that call into a yes.</span>
                </div>
                <div className="dossier-point">
                  <Mascot type="diamond" size={13} color="#D6FF3D" stroke="#11261C" />
                  <span><strong>Four pillars, each with an AI lever</strong> — sized for a bootstrapped family team, plus a 90-day plan and a working ops-dashboard prototype.</span>
                </div>
              </div>
              <div className="dossier-cta">
                Open the full study <span style={{ fontSize: 17 }}>→</span>
              </div>
            </div>
            <div className="dossier-visual">
              <div className="dossier-still">
                <video autoPlay muted loop playsInline src="assets/campaign/video7_strawberry.mp4" />
                <div className="cap">spec campaign motion · "strawberry pour"</div>
              </div>
              <div className="dossier-sticker">motion + prototype inside →</div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

/* ── CAPABILITIES ─────────────────────────────────────────── */
function Capabilities() {
  const groups = [
    {
      h: "Operations & process", m: <Mascot type="heart" size={15} color="#3DD6C4" />,
      pills: ["Process design", "SOPs & documentation", "Vendor management", "Logistics coordination", "Compliance workflows", "Implementation & training"],
    },
    {
      h: "Project & data", m: <Mascot type="diamond" size={13} color="#FFC83D" />,
      pills: ["Project planning", "KPI / OKR reporting", "Excel & Google Sheets", "SQL (PostgreSQL)", "Dashboards", "Stakeholder management"],
    },
    {
      h: "Technical edge", m: <Mascot type="sparkle" size={15} color="#D6FF3D" />,
      pills: ["Python", "REST APIs", "AI workflow automation", "AWS · Docker · Git", "Internal tool building", "EN · MN · JP"],
    },
  ];
  return (
    <section id="capabilities" className="sec-light">
      <div className="sec-head">
        <div className="kicker">Toolbox</div>
        <h2>Range is the <span className="accent">feature.</span></h2>
        <p>Early-stage operations rewards people who can plan the work, do the work, and automate the work. I do all three.</p>
      </div>
      <div className="cap-grid">
        {groups.map((g, i) => (
          <div className="cap-card" key={i}>
            <h4>{g.m} {g.h}</h4>
            <div className="pill-row">
              {g.pills.map((p, j) => <span className="cap-pill" key={j}>{p}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CONTACT ──────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="contact-sec">
      <div className="contact-band">
        <Particles items={CONTACT_PARTICLES} />
        <div className="contact-inner">
          <div className="contact-video">
            <video autoPlay muted loop playsInline src="assets/campaign/video4_fruity.mp4" />
            <div className="cap">from the case study lab · AI motion spec</div>
          </div>
          <div className="kicker lime">Next chapter</div>
          <h2>Let's build <span className="accent">chapter two</span> together.</h2>
          <p>
            I'm looking for an early-stage team that needs its first real operations builder —
            someone who documents, measures, automates, and genuinely enjoys the chaos.
          </p>
          <div className="contact-ctas">
            <a className="btn btn-lime" href="mailto:rn.zaya019@gmail.com">rn.zaya019@gmail.com</a>
            <a className="btn btn-outline-light" href="assets/Ariunzaya_Resume.pdf" target="_blank" rel="noreferrer">Resume ↓</a>
            <a className="btn btn-outline-light" href="https://ariune.com" target="_blank" rel="noreferrer">ariune.com</a>
            <a className="btn btn-outline-light" href="tel:+17203849848">720-384-9848</a>
          </div>
        </div>
      </div>
      <footer>
        <Mascot type="sparkle" size={12} color="#FFC83D" /> built by Zaya · Denver, CO · {new Date().getFullYear()}
        <Mascot type="heart" size={12} color="#3DD6C4" /> mascots travel with the work
        <Mascot type="diamond" size={10} color="#D6FF3D" />
      </footer>
    </section>
  );
}

/* ── APP ──────────────────────────────────────────────────── */
function App() {
  useVideoEnforcer();
  return (
    <div>
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Principles />
      <Work />
      <CaseStudyLab />
      <Capabilities />
      <Contact />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
