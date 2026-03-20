"use client";

"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CommandAction = {
  label: string;
  href: string;
};

const ACTIONS: CommandAction[] = [
  { label: "Create startup", href: "/create" },
  { label: "Go to Dashboard", href: "/dashboard" },
  { label: "Go to Platform", href: "/platform" },
  { label: "Go to Ecosystem", href: "/ecosystem" },
  { label: "Go to Waitlist", href: "/waitlist" },
  { label: "Go to Vision", href: "/vision" },
  { label: "Go to Pricing", href: "/pricing" },
];

export default function CommandBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredActions = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return ACTIONS;
    return ACTIONS.filter((action) =>
      action.label.toLowerCase().includes(trimmed)
    );
  }, [query]);

  function handleAction(action: CommandAction) {
    setOpen(false);
    setQuery("");
    router.push(action.href);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (event.key === "/" && !isTypingTarget) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm text-white/78 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/[0.1]"
      >
        Open Command
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 px-4 pt-[12vh] backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(7,10,18,0.96))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  const first = filteredActions[0];
                  if (first) {
                    handleAction(first);
                  }
                }
              }}
              placeholder='Type a command, e.g. "Create startup"'
              className="min-h-[58px] w-full rounded-[22px] border border-white/10 bg-white/[0.05] px-5 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />

            <div className="mt-4 space-y-2">
              {filteredActions.length > 0 ? (
                filteredActions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => handleAction(action)}
                    className="flex w-full items-center justify-between rounded-[20px] border border-white/8 bg-white/[0.03] px-5 py-4 text-left transition hover:bg-white/[0.06]"
                  >
                    <span className="text-sm text-white/88">{action.label}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/34">
                      Enter
                    </span>
                  </button>
                ))
              ) : (
                <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm text-white/52">
                  No commands found.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
