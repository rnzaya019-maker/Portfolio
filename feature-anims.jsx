/* Inline mini-animations that play whenever the card is hovered or in view */
const { useEffect, useRef, useState } = React;

function useInView(threshold = 0.4) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* 1. PAR (prior auth) expiring countdown */
function PARAnim() {
  const [ref, inView] = useInView();
  const [days, setDays] = useState(48);
  useEffect(() => {
    if (!inView) return;
    setDays(48);
    const id = setInterval(() => {
      setDays((d) => (d <= 7 ? 48 : d - 3));
    }, 220);
    return () => clearInterval(id);
  }, [inView]);
  const pct = Math.max(0, Math.min(1, days / 90));
  const color = days <= 14 ? "#C0533A" : days <= 30 ? "#D4A853" : "#1C3A6E";
  return (
    <div ref={ref} className="anim-fill">
      <div className="par-card">
        <div className="par-row">
          <span className="par-tag">PAR-2026-08841</span>
          <span className="par-stat" style={{ background: color }}>
            {days <= 14 ? "URGENT" : days <= 30 ? "EXPIRING" : "ACTIVE"}
          </span>
        </div>
        <div className="par-name">Mary L. — HMA · 32 hrs/wk</div>
        <div className="par-bar">
          <div
            className="par-bar-fill"
            style={{ width: `${pct * 100}%`, background: color }}
          />
        </div>
        <div className="par-foot">
          <span className="par-days" style={{ color }}>
            {days} <span className="par-days-lbl">days left</span>
          </span>
          <span className="par-end">→ ends Jul 14</span>
        </div>
      </div>
    </div>
  );
}

/* 2. Caregiver credential checks ticking */
function CredentialAnim() {
  const [ref, inView] = useInView();
  const items = [
    { label: "CBI background", key: "cbi" },
    { label: "DL on file", key: "dl" },
    { label: "OIG check", key: "oig" },
    { label: "DORA verified", key: "dora" },
    { label: "CAPS training", key: "caps" },
  ];
  const [done, setDone] = useState(0);
  useEffect(() => {
    if (!inView) return;
    setDone(0);
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % (items.length + 2);
      setDone(Math.min(i, items.length));
    }, 380);
    return () => clearInterval(id);
  }, [inView]);
  return (
    <div ref={ref} className="anim-fill cred-anim">
      {items.map((it, i) => (
        <div key={it.key} className={`cred-row ${i < done ? "ok" : ""}`}>
          <span className={`cred-check ${i < done ? "ok" : ""}`}>
            {i < done ? "✓" : ""}
          </span>
          <span className="cred-label">{it.label}</span>
          <span className="cred-status">
            {i < done ? "verified" : "checking"}
          </span>
        </div>
      ))}
    </div>
  );
}

/* 3. Care plan schedule grid filling */
function ScheduleAnim() {
  const [ref, inView] = useInView();
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const slots = 6;
  const [pattern, setPattern] = useState(() =>
    Array(days.length * slots).fill(0)
  );
  useEffect(() => {
    if (!inView) return;
    const order = [
      [0, 1], [0, 2], [0, 3],
      [1, 1], [1, 2], [1, 3],
      [2, 2], [2, 3], [2, 4],
      [3, 1], [3, 2], [3, 3],
      [4, 1], [4, 2], [4, 3], [4, 4],
    ];
    let i = 0;
    setPattern(Array(days.length * slots).fill(0));
    const id = setInterval(() => {
      if (i >= order.length) {
        i = 0;
        setPattern(Array(days.length * slots).fill(0));
      } else {
        const [d, s] = order[i];
        setPattern((p) => {
          const np = [...p];
          np[d * slots + s] = 1;
          return np;
        });
        i++;
      }
    }, 180);
    return () => clearInterval(id);
  }, [inView]);
  return (
    <div ref={ref} className="anim-fill sched-anim">
      <div className="sched-head">
        {days.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="sched-grid">
        {days.map((_, d) => (
          <div key={d} className="sched-col">
            {Array.from({ length: slots }).map((_, s) => (
              <div
                key={s}
                className={`sched-cell ${pattern[d * slots + s] ? "on" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* 4. Audit log streaming */
function AuditAnim() {
  const [ref, inView] = useInView();
  const events = [
    { t: "VIEW", who: "k.nguyen", what: "Client #2841" },
    { t: "EDIT", who: "j.ramirez", what: "PAR service line" },
    { t: "AUTH", who: "system", what: "MFA verified" },
    { t: "VIEW", who: "a.baas", what: "Caregiver record" },
    { t: "DELETE", who: "k.nguyen", what: "Draft note" },
  ];
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (!inView) return;
    setVisible(0);
    const id = setInterval(() => {
      setVisible((v) => (v >= events.length ? 0 : v + 1));
    }, 380);
    return () => clearInterval(id);
  }, [inView]);
  const tone = (t) =>
    t === "EDIT" ? "#D4A853"
    : t === "DELETE" ? "#C0533A"
    : t === "AUTH" ? "#2BA76A"
    : "#1C3A6E";
  return (
    <div ref={ref} className="anim-fill audit-anim">
      {events.slice(0, visible).map((e, i) => (
        <div key={i} className="audit-row" style={{ animationDelay: `${i * 0.05}s` }}>
          <span className="audit-tag" style={{ color: tone(e.t), borderColor: tone(e.t) }}>
            {e.t}
          </span>
          <span className="audit-who">{e.who}</span>
          <span className="audit-what">{e.what}</span>
          <span className="audit-time">just now</span>
        </div>
      ))}
      {visible === 0 && <div className="audit-empty">listening…</div>}
    </div>
  );
}

/* 5. Document version stack */
function DocAnim() {
  const [ref, inView] = useInView();
  const [v, setV] = useState(1);
  useEffect(() => {
    if (!inView) return;
    setV(1);
    const id = setInterval(() => {
      setV((x) => (x >= 4 ? 1 : x + 1));
    }, 600);
    return () => clearInterval(id);
  }, [inView]);
  return (
    <div ref={ref} className="anim-fill doc-anim">
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          className={`doc-card ${n <= v ? "show" : ""} ${n === v ? "front" : ""}`}
          style={{
            transform: `translate(${(n - 1) * 14}px, ${(n - 1) * -10}px) rotate(${(n - 2) * 2}deg)`,
            zIndex: n,
            opacity: n <= v ? 1 : 0,
          }}
        >
          <div className="doc-tag">v{n}</div>
          <div className="doc-lines">
            <i style={{ width: "82%" }} />
            <i style={{ width: "60%" }} />
            <i style={{ width: "74%" }} />
            <i style={{ width: "48%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* 6. Multi-tenant data isolation visual */
function TenantAnim() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 800);
    return () => clearInterval(id);
  }, [inView]);
  const tenants = [
    { name: "CHCS", color: "#1C3A6E" },
    { name: "Sunrise", color: "#7FC5E8" },
    { name: "Helia", color: "#D4A853" },
  ];
  return (
    <div ref={ref} className="anim-fill tenant-anim">
      <div className="tenant-orbit">
        <div className="tenant-core">PHI</div>
        {tenants.map((t, i) => (
          <div
            key={i}
            className={`tenant-pod ${active === i ? "on" : ""}`}
            style={{
              "--c": t.color,
              transform: `rotate(${i * 120}deg) translate(74px) rotate(-${i * 120}deg)`,
            }}
          >
            <div className="tenant-name">{t.name}</div>
          </div>
        ))}
        <svg className="tenant-lines" viewBox="-100 -100 200 200">
          {tenants.map((t, i) => {
            const angle = (i * 120 - 90) * Math.PI / 180;
            const x = Math.cos(angle) * 64;
            const y = Math.sin(angle) * 64;
            return (
              <line
                key={i}
                x1="0" y1="0" x2={x} y2={y}
                stroke={active === i ? t.color : "rgba(28,58,110,0.18)"}
                strokeWidth={active === i ? "2" : "1"}
                strokeDasharray="3 4"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

window.PARAnim = PARAnim;
window.CredentialAnim = CredentialAnim;
window.ScheduleAnim = ScheduleAnim;
window.AuditAnim = AuditAnim;
window.DocAnim = DocAnim;
window.TenantAnim = TenantAnim;
