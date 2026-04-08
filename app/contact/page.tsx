"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const reasons = [
  {
    title: "Founder access",
    body: "Reach out if you want early access, private onboarding, or product updates.",
  },
  {
    title: "Venture studio interest",
    body: "Get in touch if you want FoundersKingdom for a studio, internal incubator, or startup portfolio system.",
  },
  {
    title: "Strategic conversations",
    body: "Use this page for product partnerships, platform conversations, or category-level interest.",
  },
];

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setError(data?.message ?? "Something went wrong.");
        setLoading(false);
        return;
      }

      setSuccess(data?.message ?? "Contact submission received.");
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
      setTimeout(() => {
        router.push("/contact/success");
      }, 600);
    } catch {
      setError("Unable to submit your message right now.");
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,132,255,0.12),transparent_24%),linear-gradient(180deg,#04060b_0%,#060913_42%,#04060b_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition hover:bg-white/[0.07]"
        >
          ← Back to FoundersKingdom
        </a>
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-8 text-center md:px-8 md:pb-24">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          Contact
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          Contact the team behind FoundersKingdom.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          For early access, partnerships, studio interest, or founder conversations,
          use the contact form below.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8">
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
            Why reach out
          </div>
          <div className="mt-8 space-y-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[24px] border border-white/8 bg-black/20 p-5"
              >
                <h2 className="text-2xl font-semibold tracking-tight">{reason.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/58">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-100/72">
            Contact form
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
            Start the conversation.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/60 md:text-lg md:leading-8">
            Share your name, email, and what you are building. This page is designed for
            founder contact, waitlist interest, and strategic conversations.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              className="min-h-[56px] w-full rounded-full border border-white/12 bg-white/[0.04] px-6 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="What are you building?"
              className="min-h-[180px] w-full rounded-[28px] border border-white/12 bg-white/[0.04] px-6 py-5 text-base text-white outline-none placeholder:text-white/34 focus:border-emerald-300/30"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:opacity-90"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {error ? (
            <div className="mt-6 rounded-[22px] border border-red-400/20 bg-red-500/10 px-5 py-4 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="mt-6 rounded-[22px] border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100">
              {success}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
