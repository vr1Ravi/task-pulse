"use client";
// TaskPulse landing page.
// Palette and fonts come from the design tokens emitted in the document head,
// so this file only holds layout and page level styles.
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  FileDown,
  FileText,
  Flame,
  Gauge,
  Link2,
  MessageSquareText,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/lib/theme";
import { USAGE_LIMITS } from "@/lib/constants";

const CSS = `
.lp{--r:18px;min-height:100vh;background:var(--bg);color:var(--tx);font-family:var(--font-body);overflow-x:clip;position:relative}
.lp *{box-sizing:border-box}
.lp a{color:inherit;text-decoration:none}
.lp h1,.lp h2,.lp h3{font-family:var(--font-display);margin:0;letter-spacing:-0.035em;line-height:1.08}
.lp p{margin:0}
.wrap{width:100%;max-width:1160px;margin:0 auto;padding:0 20px}
.sec{padding:96px 0;position:relative}
.kicker{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ac-text);padding:6px 12px;border-radius:100px;background:var(--as);border:1px solid var(--ag)}
.h2{font-size:clamp(30px,4.4vw,48px);font-weight:700;margin-top:18px}
.lede{font-size:17px;line-height:1.65;color:var(--tx2);max-width:560px;margin-top:16px}
.center{text-align:center}.center .lede{margin-left:auto;margin-right:auto}

/* backdrop */
.aurora{position:absolute;inset:0 0 auto 0;height:900px;pointer-events:none;overflow:hidden;z-index:0}
.aurora i{position:absolute;border-radius:50%;filter:blur(90px);opacity:.55}
.aurora i:nth-child(1){width:520px;height:520px;left:-120px;top:-160px;background:radial-gradient(circle,#14b8a6,transparent 68%)}
.aurora i:nth-child(2){width:480px;height:480px;right:-100px;top:-80px;background:radial-gradient(circle,#38bdf8,transparent 68%);opacity:.4}
.aurora i:nth-child(3){width:380px;height:380px;left:42%;top:260px;background:radial-gradient(circle,#a3e635,transparent 68%);opacity:.22}
[data-theme='dark'] .aurora i{opacity:.28}
.grid-bg{position:absolute;inset:0 0 auto 0;height:780px;z-index:0;pointer-events:none;
  background-image:linear-gradient(var(--br) 1px,transparent 1px),linear-gradient(90deg,var(--br) 1px,transparent 1px);
  background-size:56px 56px;mask-image:radial-gradient(ellipse 70% 60% at 50% 0%,#000,transparent 75%);-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 0%,#000,transparent 75%)}

/* nav */
.nav{position:fixed;top:12px;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:0 12px}
.nav-in{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;max-width:1040px;padding:8px 8px 8px 18px;border-radius:100px;background:var(--nb);border:1px solid var(--br);backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);box-shadow:0 8px 30px -12px var(--sh)}
.brand{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-display);font-weight:800;font-size:18px;letter-spacing:-0.04em}
.logo{width:28px;height:28px;border-radius:9px;display:grid;place-items:center;background:linear-gradient(135deg,#14b8a6,#0f766e);color:#fff;box-shadow:0 4px 14px -4px rgba(13,148,136,.7)}
.nav-links{display:flex;gap:4px}
.nav-links a{font-size:14px;font-weight:500;color:var(--tx2);padding:8px 14px;border-radius:100px;transition:background .15s,color .15s}
.nav-links a:hover{background:var(--bg2);color:var(--tx)}
.nav-act{display:flex;align-items:center;gap:6px}
.ico-btn{width:36px;height:36px;border-radius:100px;display:grid;place-items:center;background:transparent;border:1px solid transparent;color:var(--tx2);cursor:pointer;transition:background .15s}
.ico-btn:hover{background:var(--bg2)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:14px;padding:10px 18px;border-radius:100px;border:1px solid transparent;cursor:pointer;transition:transform .15s,box-shadow .15s,background .15s;font-family:inherit;line-height:1.2}
.btn:hover{transform:translateY(-1px)}
.btn:focus-visible,.ico-btn:focus-visible,.lp a:focus-visible,.faq summary:focus-visible{outline:2px solid var(--ac);outline-offset:3px}
.btn-p{background:var(--ac-solid);color:#fff;box-shadow:0 8px 22px -8px rgba(13,148,136,.75),inset 0 1px 0 rgba(255,255,255,.18)}
.btn-p:hover{background:var(--ac-solid-h)}
.btn-g{background:var(--bg1);color:var(--tx);border-color:var(--br)}
.btn-g:hover{border-color:var(--brh)}
.btn-lg{padding:14px 26px;font-size:15px}

/* hero */
.hero{padding:150px 0 40px;position:relative;z-index:1}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.pill{display:inline-flex;align-items:center;gap:8px;padding:6px 14px 6px 8px;border-radius:100px;background:var(--bg1);border:1px solid var(--br);font-size:13px;color:var(--tx2);box-shadow:0 2px 10px -4px var(--sh)}
.pill b{background:var(--ac-solid);color:#fff;border-radius:100px;padding:2px 9px;font-size:11px;letter-spacing:.04em}
.hero h1{font-size:clamp(40px,6.4vw,72px);font-weight:800;margin-top:22px;letter-spacing:-0.05em;line-height:1.02}
.grad{background:linear-gradient(100deg,#0d9488,#0ea5e9 55%,#65a30d);-webkit-background-clip:text;background-clip:text;color:transparent}
[data-theme='dark'] .grad{background:linear-gradient(100deg,#5eead4,#7dd3fc 55%,#bef264);-webkit-background-clip:text;background-clip:text}
.hero .lede{font-size:18px;max-width:520px}
.cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.fine{margin-top:16px;font-size:13px;color:var(--tx3);display:flex;gap:16px;flex-wrap:wrap}
.fine span{display:inline-flex;align-items:center;gap:6px}

/* product mock */
.mock{position:relative;border-radius:24px;background:var(--bg1);border:1px solid var(--br);box-shadow:0 40px 80px -30px rgba(15,118,110,.35),0 10px 30px -12px var(--sh);padding:14px;transform:perspective(1400px) rotateY(-5deg) rotateX(2deg);transition:transform .5s}
.mock:hover{transform:perspective(1400px) rotateY(0) rotateX(0)}
.mock-bar{display:flex;align-items:center;gap:6px;padding:4px 6px 12px}
.mock-bar i{width:10px;height:10px;border-radius:50%;background:var(--bg3)}
.mock-bar span{margin-left:10px;font-size:11px;color:var(--tx3)}
.cols{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.col{background:var(--bg);border:1px solid var(--br);border-radius:14px;padding:10px;min-height:250px}
.col h4{margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--tx3);display:flex;justify-content:space-between}
.card{background:var(--bg1);border:1px solid var(--br);border-radius:11px;padding:10px;margin-bottom:8px;font-size:12px;line-height:1.35;color:var(--tx);box-shadow:0 1px 2px var(--sh)}
.tag{display:inline-block;margin-top:7px;font-size:10px;font-weight:700;padding:2px 8px;border-radius:100px}
.t-hi{background:rgba(239,68,68,.12);color:var(--rd-text)}.t-md{background:rgba(245,158,11,.14);color:var(--am-text)}.t-lo{background:var(--as);color:var(--ac-text)}
.float{position:absolute;display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:16px;background:var(--bg1);border:1px solid var(--br);box-shadow:0 18px 40px -16px var(--sh);font-size:12px;animation:bob 6s ease-in-out infinite}
.float b{display:block;font-family:var(--font-display);font-size:15px;letter-spacing:-0.02em}
.float small{color:var(--tx3);font-size:11px}
.float.a{left:-34px;bottom:44px}.float.b{right:-18px;top:-22px;animation-delay:-3s}
.ring{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:12px;background:conic-gradient(var(--ac) 0 72%,var(--bg3) 0);position:relative}
.ring::after{content:"";position:absolute;inset:5px;border-radius:50%;background:var(--bg1)}
.ring span{position:relative;z-index:1}
@keyframes bob{50%{transform:translateY(-8px)}}

/* stats */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--br);border:1px solid var(--br);border-radius:var(--r);overflow:hidden;margin-top:56px}
.stat{background:var(--bg1);padding:26px 22px}
.stat b{display:block;font-family:var(--font-display);font-size:34px;letter-spacing:-0.04em}
.stat span{font-size:13px;color:var(--tx3)}

/* bento */
.bento{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;margin-top:48px}
.bx{grid-column:span 2;position:relative;background:var(--bg1);border:1px solid var(--br);border-radius:var(--r);padding:26px;overflow:hidden;transition:transform .2s,border-color .2s,box-shadow .2s}
.bx:hover{transform:translateY(-3px);border-color:var(--ag);box-shadow:0 20px 40px -24px rgba(13,148,136,.45)}
.bx.w3{grid-column:span 3}.bx.w4{grid-column:span 4}
.bx::before{content:"";position:absolute;inset:-40% -20% auto auto;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,var(--as),transparent 70%);pointer-events:none}
.bi{width:44px;height:44px;border-radius:13px;display:grid;place-items:center;color:var(--ac-text);background:var(--as);border:1px solid var(--ag);position:relative}
.bx h3{font-size:20px;margin:18px 0 8px;position:relative}
.bx p{font-size:14.5px;line-height:1.6;color:var(--tx2);position:relative}
.meter{margin-top:20px;display:grid;gap:9px;position:relative}
.meter div{height:8px;border-radius:100px;background:var(--bg3);overflow:hidden}
.meter div i{display:block;height:100%;border-radius:100px;background:linear-gradient(90deg,#14b8a6,#38bdf8)}

/* steps */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:48px;counter-reset:s}
.step{background:var(--bg1);border:1px solid var(--br);border-radius:var(--r);padding:28px;position:relative}
.step::before{counter-increment:s;content:"0" counter(s);font-family:var(--font-display);font-weight:800;font-size:44px;letter-spacing:-0.05em;color:var(--ag);display:block;margin-bottom:14px}
.step h3{font-size:19px;margin-bottom:8px}.step p{font-size:14.5px;line-height:1.6;color:var(--tx2)}

/* faq */
.faq{max-width:760px;margin:44px auto 0;display:grid;gap:10px}
.faq details{background:var(--bg1);border:1px solid var(--br);border-radius:14px;padding:0 20px;transition:border-color .15s}
.faq details[open]{border-color:var(--ag)}
.faq summary{cursor:pointer;list-style:none;padding:18px 0;font-weight:600;font-size:15.5px;display:flex;justify-content:space-between;gap:16px;align-items:center}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-size:22px;color:var(--ac-text);transition:transform .2s;line-height:1}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq details p{padding:0 0 18px;font-size:14.5px;line-height:1.65;color:var(--tx2)}

/* cta */
.cta{position:relative;overflow:hidden;border-radius:28px;padding:72px 24px;text-align:center;color:#fff;background:linear-gradient(135deg,#0f766e,#0d9488 45%,#0284c7)}
.cta::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 0%,rgba(255,255,255,.28),transparent 45%),radial-gradient(circle at 90% 100%,rgba(163,230,53,.3),transparent 40%)}
.cta>*{position:relative}
.cta h2{font-size:clamp(30px,4.6vw,50px);font-weight:800;color:#fff}
.cta p{margin:14px auto 28px;max-width:480px;font-size:17px;opacity:.92;line-height:1.6}
.cta .btn-w{background:#fff;color:#0f766e}

/* footer */
.foot{border-top:1px solid var(--br);margin-top:96px;padding:36px 0 44px}
.foot-in{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:center}
.foot nav{display:flex;gap:22px;flex-wrap:wrap;font-size:14px;color:var(--tx2)}
.foot nav a:hover{color:var(--ac-text)}
.foot small{display:block;color:var(--tx3);font-size:13px;margin-top:10px}

/* reveal */
@media (prefers-reduced-motion:no-preference){
  .rise{animation:rise .7s cubic-bezier(.2,.7,.2,1) both}
  .rise.d1{animation-delay:.08s}.rise.d2{animation-delay:.16s}.rise.d3{animation-delay:.24s}
  @keyframes rise{from{opacity:0;transform:translateY(18px)}}
}
@media (prefers-reduced-motion:reduce){.float{animation:none}.mock{transform:none}}

@media(max-width:980px){
  .hero-grid{grid-template-columns:1fr;gap:56px}
  .mock{transform:none}.float.a{left:8px}.float.b{right:8px}
  .bento{grid-template-columns:repeat(2,1fr)}.bx,.bx.w3,.bx.w4{grid-column:span 1}
  .steps{grid-template-columns:1fr}.stats{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:640px){
  .nav-links{display:none}.sec{padding:72px 0}.hero{padding-top:118px}
  .bento{grid-template-columns:1fr}.cols{grid-template-columns:1fr 1fr}.cols .col:nth-child(3){display:none}
  .btn-lg{width:100%}.cta-row{flex-direction:column}.float.a{display:none}
}
`;

const STATS = [
  { n: String(USAGE_LIMITS.DAILY_AI), l: "AI extractions a day" },
  {
    n: USAGE_LIMITS.MONTHLY_BOARDS.toLocaleString("en-US"),
    l: "Board saves a month",
  },
  { n: "3", l: "Ways to import" },
  { n: "$0", l: "Cost, no card needed" },
];

const FEATURES = [
  {
    Icon: BrainCircuit,
    t: "Notes to a board",
    d: "Paste messy notes, emails or meeting minutes. TaskPulse pulls out the action items, sets priorities and due dates, and lays them on a Kanban board.",
    cls: "w4",
    meter: true,
  },
  {
    Icon: Gauge,
    t: "Workload health",
    d: "A score for how loaded your week is, computed from your real tasks, not guessed.",
    cls: "",
  },
  {
    Icon: Flame,
    t: "Burnout warnings",
    d: "Get a heads up when too much is stacked on the same days, before it becomes a problem.",
    cls: "",
  },
  {
    Icon: CalendarClock,
    t: "Autopilot planning",
    d: "A morning briefing and suggested time blocks. Adjust them, then push the plan back onto your board.",
    cls: "",
  },
  {
    Icon: MessageSquareText,
    t: "Board aware assistant",
    d: "Ask what to do first, what to defer, or how to break a task down. It answers from your board.",
    cls: "",
  },
  {
    Icon: FileDown,
    t: "Export anywhere",
    d: "Send a client a clean DOCX or PDF of any board in one click.",
    cls: "w3",
  },
  {
    Icon: Link2,
    t: "Text, PDF and URL import",
    d: "Drop in text, upload a PDF or give it a web page. All three end up as tasks.",
    cls: "w3",
  },
];

const STEPS = [
  {
    t: "Bring your notes",
    d: "Paste text, upload a PDF or point at a public URL. No setup, no template to fill in.",
  },
  {
    t: "Review the board",
    d: "Tasks arrive sorted into columns with priorities. Edit anything the AI got wrong.",
  },
  {
    t: "Plan and ship",
    d: "Check your workload, let Autopilot suggest your day, then export when a client needs a doc.",
  },
];

const FAQ = [
  {
    q: "Is TaskPulse free?",
    a: `Yes. Every feature is free with no credit card. Usage is capped at ${USAGE_LIMITS.DAILY_AI} AI requests a day and ${USAGE_LIMITS.MONTHLY_AI.toLocaleString("en-US")} a month to keep the service fair for everyone.`,
  },
  {
    q: "What can I import?",
    a: "Pasted text, PDF files and public web page URLs. The extractor turns the action items it finds into tasks on a board.",
  },
  {
    q: "Does the AI decide my workload score?",
    a: "No. The workload health score and burnout warnings are calculated from your tasks with fixed rules. A language model is only used to read notes and extract tasks.",
  },
  {
    q: "Who owns my data?",
    a: "You do. Boards and tasks are yours, you can export them as DOCX or PDF at any time, and deleting your account deletes them.",
  },
  {
    q: "What happens if the AI is unavailable?",
    a: "The product keeps working. Extraction falls back to a simpler method and the assistant answers from your board data.",
  },
];

function Mock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <i />
        <i />
        <i />
        <span>Client launch week</span>
      </div>
      <div className="cols">
        <div className="col">
          <h4>
            To do <span>3</span>
          </h4>
          <div className="card">
            Send revised proposal
            <br />
            <span className="tag t-hi">High</span>
          </div>
          <div className="card">
            Book user interviews
            <br />
            <span className="tag t-md">Medium</span>
          </div>
          <div className="card">
            Update invoice template
            <br />
            <span className="tag t-lo">Low</span>
          </div>
        </div>
        <div className="col">
          <h4>
            In progress <span>2</span>
          </h4>
          <div className="card">
            Landing page copy pass
            <br />
            <span className="tag t-md">Medium</span>
          </div>
          <div className="card">
            Fix onboarding bug
            <br />
            <span className="tag t-hi">High</span>
          </div>
        </div>
        <div className="col">
          <h4>
            Done <span>4</span>
          </h4>
          <div className="card">
            Kickoff call notes
            <br />
            <span className="tag t-lo">Low</span>
          </div>
          <div className="card">
            Sign contract
            <br />
            <span className="tag t-lo">Low</span>
          </div>
        </div>
      </div>
      <div className="float a">
        <div className="ring">
          <span>72</span>
        </div>
        <div>
          <b>Workload health</b>
          <small>Comfortable this week</small>
        </div>
      </div>
      <div className="float b">
        <span className="bi" style={{ width: 36, height: 36 }}>
          <Sparkles size={17} />
        </span>
        <div>
          <b>9 tasks found</b>
          <small>From one pasted note</small>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { theme, toggle } = useTheme();
  const links: [string, string][] = [
    ["Features", "#features"],
    ["How it works", "#how"],
    ["FAQ", "#faq"],
  ];

  return (
    <div className="lp">
      <style>{CSS}</style>
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="grid-bg" aria-hidden="true" />

      <header className="nav">
        <div className="nav-in">
          <Link href="/" className="brand" aria-label="TaskPulse home">
            <span className="logo">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>
            </span>
            TaskPulse
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map(([l, h]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
          <div className="nav-act">
            <button
              className="ico-btn"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link href="/sign-in" className="btn btn-g">
              Sign in
            </Link>
            <Link href="/sign-up" className="btn btn-p">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="pill rise">
                  <b>NEW</b> Autopilot daily planning
                </span>
                <h1 className="rise d1">
                  Turn messy notes into a plan that{" "}
                  <span className="grad">keeps its pulse</span>
                </h1>
                <p className="lede rise d2">
                  Paste text, upload a PDF or share a link. TaskPulse extracts
                  the action items onto a Kanban board, scores how loaded your
                  week is, and helps you plan the day.
                </p>
                <div className="cta-row rise d3">
                  <Link href="/sign-up" className="btn btn-p btn-lg">
                    Start free <ArrowRight size={17} />
                  </Link>
                  <a href="#features" className="btn btn-g btn-lg">
                    See what it does
                  </a>
                </div>
              </div>
              <Mock />
            </div>
            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.l}>
                  <b>{s.n}</b>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="features">
          <div className="wrap">
            <div className="center">
              <span className="kicker">
                <Sparkles size={13} /> Features
              </span>
              <h2 className="h2">Everything you need to plan a week</h2>
              <p className="lede">
                One tool from the first messy note to the finished client
                document.
              </p>
            </div>
            <div className="bento">
              {FEATURES.map(({ Icon, t, d, cls, meter }) => (
                <article className={`bx ${cls}`} key={t}>
                  <span className="bi">
                    <Icon size={21} />
                  </span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  {meter && (
                    <div className="meter" aria-hidden="true">
                      <div>
                        <i style={{ width: "88%" }} />
                      </div>
                      <div>
                        <i style={{ width: "64%" }} />
                      </div>
                      <div>
                        <i style={{ width: "42%" }} />
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="how" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="center">
              <span className="kicker">
                <FileText size={13} /> How it works
              </span>
              <h2 className="h2">From notes to done in three steps</h2>
            </div>
            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="faq" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="center">
              <span className="kicker">FAQ</span>
              <h2 className="h2">Questions, answered</h2>
            </div>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section style={{ position: "relative", zIndex: 1 }}>
          <div className="wrap">
            <div className="cta">
              <h2>Give your week a pulse</h2>
              <p>
                Create a free account and turn your next pile of notes into a
                board in seconds.
              </p>
              <Link href="/sign-up" className="btn btn-w btn-lg">
                Create free account <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <div>
            <span className="brand">
              <span className="logo">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>
              </span>
              TaskPulse
            </span>
            <small>AI task boards for freelancers and small teams.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
