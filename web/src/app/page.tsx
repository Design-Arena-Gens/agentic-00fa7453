import { ExperienceForm } from "@/components/experience-form";

type Feature = {
  title: string;
  description: string;
  outcomes: string[];
};

type Milestone = {
  title: string;
  description: string;
  metric: string;
};

const features: Feature[] = [
  {
    title: "Inventory guardians on autopilot",
    description:
      "Computer vision, scale feeds, and barcode scans sync to a single agent brain. It flags stockouts or overstocks the moment the numbers drift.",
    outcomes: [
      "Reconciles counts with OMS and WMS every 5 minutes",
      "Generates variance summaries ready to paste into Google Sheets",
      "Escalates to the right shift lead in WhatsApp with context and next actions",
    ],
  },
  {
    title: "Proactive movement tracking",
    description:
      "Shipments stay visible from dock door to delivery. The agent watches carrier APIs and GPS pings to highlight weather risks and missing paperwork.",
    outcomes: [
      "Combines carrier ETAs with loading bay capacity and labor rosters",
      "Auto-builds recovery plans and sends voice notes in preferred channels",
      "Keeps leadership dashboards current without human double entry",
    ],
  },
  {
    title: "Shift intelligence that sticks",
    description:
      "Every automation leaves breadcrumbs. Ops crews start each shift with concise context to move faster and safer.",
    outcomes: [
      "Creates daily ramp-up briefs with yesterday’s hotspots and today’s priorities",
      "Captures tribal knowledge in a living knowledge base without extra effort",
      "Feeds compliance and safety logs while crews stay on the floor",
    ],
  },
];

const milestones: Milestone[] = [
  {
    title: "Connect data sources",
    description:
      "Plug in Google Sheets, your WMS, carrier portals, and sensor data. The agent uses pre-built connectors and APIs—no custom code required.",
    metric: "Week 1",
  },
  {
    title: "Train on workflows",
    description:
      "Describe SOPs in natural language or upload docs. The agent maps triggers, actions, and alerts, then dry-runs against historical data.",
    metric: "Days 7-14",
  },
  {
    title: "Deploy & iterate",
    description:
      "Go live in observation mode, watch alerts, then unlock automations. Each cycle improves accuracy with human feedback loops.",
    metric: "Days 15-30",
  },
  {
    title: "Scale across sites",
    description:
      "Clone proven playbooks to new facilities in hours. Governance rules make sure every region stays compliant and auditable.",
    metric: "Month 2+",
  },
];

const integrations = [
  { name: "Google Sheets", detail: "Inventory & demand plans stay versioned." },
  { name: "WhatsApp & SMS", detail: "Alerts and approvals land where teams live." },
  {
    name: "Warehouse Management Systems",
    detail: "Two-way sync with Manhattan, Blue Yonder, Odoo and more.",
  },
  {
    name: "IoT & sensors",
    detail: "Track temperature, location, and lift-truck activity in real time.",
  },
  {
    name: "BI dashboards",
    detail: "Push granular telemetry into Looker, Power BI, or Mode.",
  },
  {
    name: "Email & voice",
    detail: "Generate turn-key updates, escalations, and call scripts.",
  },
];

const impactStats = [
  { label: "Cycle counts automated", value: "84%" },
  { label: "Dock-to-stock time saved", value: "4.6 hrs" },
  { label: "Incident alerts caught early", value: "92%" },
  { label: "Manual updates eliminated", value: "18K / month" },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-500/30 blur-[150px]" />
      <div className="pointer-events-none absolute right-[10%] top-1/3 -z-10 h-[20rem] w-[20rem] rounded-full bg-indigo-500/25 blur-[160px]" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
        <header className="space-y-10 pt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100/80">
            AI For The Warehouse Floor
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-start">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Automate inventory, shipments, and incident response with a{" "}
                <span className="text-gradient">no-code AI co-pilot</span>.
              </h1>
              <p className="text-lg text-slate-200/80 sm:text-xl">
                Replace spreadsheets and late-night catch-up with a 24/7 agent
                that keeps stock levels aligned, spots delays before they snowball,
                and nudges frontline teams in the channels they already trust.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#playbook"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/40 transition hover:brightness-110"
                >
                  Download the rapid deployment playbook
                  <span aria-hidden>&rarr;</span>
                </a>
                <a
                  href="#stories"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400/60 hover:text-white"
                >
                  See how teams are using it
                </a>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-500/10 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">
                What the agent monitors every shift
              </h2>
              <dl className="grid gap-4">
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4 text-sm text-slate-200/80"
                  >
                    <dt>{stat.label}</dt>
                    <dd className="text-xl font-semibold text-sky-200">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-slate-300/70">
                Numbers from teams running replenishment, cross-dock, and cold
                chain warehouses with the agent in production.
              </p>
            </div>
          </div>
        </header>

        <section id="playbook" className="space-y-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">
                A co-pilot tuned for the floor, not the boardroom.
              </h2>
              <p className="text-base text-slate-200/80">
                Each module combines AI reasoning with human-friendly guardrails.
                Operators decide where automations take action or stay in assist
                mode. Everything is transparent and auditable.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-200/70 shadow-lg shadow-sky-900/30">
              <p>
                “It doesn&apos;t replace our coordinators—it lets them orchestrate
                twice as much work without the burnout. The agent keeps the
                systems synced, we keep the judgment calls.”
              </p>
              <p className="mt-4 text-sky-200">Operations Director, 3PL network</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-slate-200/80 shadow-xl shadow-blue-900/20 transition hover:border-sky-400/50 hover:shadow-sky-900/30"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Module
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-100/80">
                  {feature.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 text-sky-300" aria-hidden>
                        ●
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Integrates with the tools you already trust.
              </h2>
              <p className="text-base text-slate-200/80">
                The agent sits on top of your operational stack. It reads data,
                writes updates, and mirrors decisions so every system stays in sync
                without fighting IT change freezes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200/80 transition hover:border-sky-400/60 hover:text-white"
                >
                  <div className="text-base font-semibold text-white">
                    {item.name}
                  </div>
                  <p className="mt-2 text-xs text-slate-300/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              From pilot to network rollout in weeks.
            </h2>
            <p className="text-base text-slate-200/80">
              A guided activation sequence keeps stakeholders aligned and gives
              frontline teams confidence before letting the agent take the wheel.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-blue-950/30"
              >
                <span className="absolute right-6 top-6 text-4xl font-bold text-white/10">
                  {index + 1}
                </span>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-sky-200">
                  {milestone.metric}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200/80">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="stories" className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100/80">
              Community Signal
            </div>
            <h2 className="text-3xl font-semibold text-white">
              Teams are already shipping smarter.
            </h2>
            <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-200/80 shadow-lg shadow-blue-900/30">
              <p>
                “We cut 6 hours of manual reconciliation every day. The agent
                reads inbound ASNs, cross-checks pallet scans, and nudges our
                supervisors in WhatsApp before a truck is ever late.”
              </p>
              <div className="text-sky-200">
                Head of Logistics, food distribution network
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-200/80 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl font-semibold text-sky-200">47%</div>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-300/60">
                  Less overtime for inventory control teams
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl font-semibold text-sky-200">99.2%</div>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-300/60">
                  SLA adherence during peak season
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-200/70">
              Everyone keeps their job—now with more time to focus on flow,
              safety, and coaching. The agent handles the repetitive sync work so
              people can handle the exceptions.
            </p>
          </div>
          <ExperienceForm />
        </section>

        <footer className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-10 text-sm text-slate-200/80 shadow-xl shadow-blue-900/30 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-sky-200">
              Let&apos;s build smarter operations
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Ready to co-design your warehouse AI playbook?
            </h2>
            <p>
              We&apos;ll bring templates, integration kits, and governance best
              practices. You bring the tribal knowledge. Together we ship a safer,
              faster floor.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:ops@agenticware.ai"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/40 transition hover:brightness-110"
            >
              Start a pilot conversation
            </a>
            <a
              href="https://www.linkedin.com/feed/hashtag/?keywords=AIinLogistics"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400/60 hover:text-white"
            >
              #AIinLogistics
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
