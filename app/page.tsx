export default function Home() {
  const capabilityGroups = [
    {
      eyebrow: "Organize and prioritize",
      title: "Turn startup chaos into portfolio clarity.",
      description:
        "FoundersKingdom gives you a single operating layer for the ventures, products, and experiments you are actively building. Structure the portfolio, understand the landscape, and decide what deserves attention now.",
      items: [
        {
          title: "Startup Portfolio Dashboard",
          body: "See every startup, initiative, and active build in one unified command view.",
        },
        {
          title: "Multi-Startup Management",
          body: "Track ventures by stage, momentum, category, and strategic role without fragmentation.",
        },
        {
          title: "Startup Scoring System",
          body: "Prioritize what to build next using clearer logic, not instinct alone.",
        },
      ],
    },
    {
      eyebrow: "Connect and compound",
      title: "Build ventures like a system, not a scramble.",
      description:
        "The strongest founders do not just launch companies. They build ecosystems. FoundersKingdom helps you connect ideas, align infrastructure, and see where compounding value emerges across your portfolio.",
      items: [
        {
          title: "Relationship Mapping",
          body: "Visualize how startups connect through audience, data, infrastructure, and strategic overlap.",
        },
        {
          title: "Founder Workspace",
          body: "Keep strategic thinking, venture context, and operating decisions in one high-signal environment.",
        },
        {
          title: "AI Startup Assistant",
          body: "Translate raw founder thinking into more structured ventures, clearer direction, and faster execution.",
        },
      ],
    },
  ];

  const steps = [
    "Create or import startups",
    "Organize and score them",
    "Connect ventures together",
    "Track growth and momentum",
    "Scale your startup ecosystem",
  ];

  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-lg font-semibold">FoundersKingdom</div>
        <div className="flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </header>

      <section className="text-center px-6 pt-20 pb-28">
        <h1 className="text-5xl md:text-7xl font-semibold">
          Build your startup empire with clarity.
        </h1>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          The operating system for founders building multiple ventures.
        </p>
      </section>

      {capabilityGroups.map((group) => (
        <section key={group.title} className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">{group.title}</h2>
          <p className="mt-4 text-white/60">{group.description}</p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {group.items.map((item) => (
              <div key={item.title} className="border border-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">Build your startup ecosystem</h2>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full">
          Get Started
        </button>
      </section>
    </main>
  );
}
