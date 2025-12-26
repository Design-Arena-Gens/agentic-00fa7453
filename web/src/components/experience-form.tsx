"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success";

const capabilities = [
  "Live inventory reconciliation",
  "Automated exception alerts",
  "Shift handover digests",
  "Supplier ETA tracking",
  "Outbound load verification",
  "Ops KPI dashboards",
];

export function ExperienceForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    form.set("capabilities", selected.join(", "));
    setStatus("submitting");

    // Simulate a network request so the UX mirrors a live form handler.
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const toggleCapability = (item: string) => {
    setSelected((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-500/10 backdrop-blur">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100">
          Share A Win
        </div>
        <h3 className="text-2xl font-semibold text-white">
          Tried no-code automation already?
        </h3>
        <p className="text-sm text-slate-200/80">
          Tell us what moved the needle. We&apos;ll curate and publish the most
          actionable playbooks for the community.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-100/90">
            Name
            <input
              name="name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none ring-2 ring-transparent transition focus:ring-sky-400/60"
              placeholder="Jordan Chen"
              required
              autoComplete="name"
            />
          </label>
          <label className="text-sm font-medium text-slate-100/90">
            Work Email
            <input
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none ring-2 ring-transparent transition focus:ring-sky-400/60"
              placeholder="ops@yourcompany.com"
              required
              autoComplete="email"
            />
          </label>
        </div>

        <label className="text-sm font-medium text-slate-100/90">
          Workflow Highlight
          <input
            name="workflow"
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none ring-2 ring-transparent transition focus:ring-sky-400/60"
            placeholder="Example: replenishment & supplier check-ins"
            required
          />
        </label>

        <div className="space-y-3">
          <span className="text-sm font-medium text-slate-100/90">
            What capabilities made the difference?
          </span>
          <div className="grid gap-2 sm:grid-cols-2">
            {capabilities.map((item) => {
              const isActive = selected.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleCapability(item)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "border-sky-400/70 bg-sky-500/20 text-white shadow-lg shadow-sky-500/25"
                      : "border-white/10 bg-slate-950/40 text-slate-200/80 hover:border-sky-400/40 hover:text-white"
                  }`}
                >
                  <span className="block font-semibold">{item}</span>
                  <span className="mt-1 block text-xs text-white/70">
                    {isActive ? "Added" : "Tap to add"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <label className="text-sm font-medium text-slate-100/90">
          Lessons Learned
          <textarea
            name="message"
            rows={4}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none ring-2 ring-transparent transition focus:ring-sky-400/60"
            placeholder="How did your team adjust? What surprised you? What metrics moved?"
            required
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-80"
        >
          {status === "submitting" && "Sending your playbook..."}
          {status === "success" && "Captured! Thanks for sharing."}
          {status === "idle" && "Submit story"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm font-medium text-emerald-300">
            We got it. Expect a follow-up from our team within 1 business day.
          </p>
        )}
      </form>
    </div>
  );
}
