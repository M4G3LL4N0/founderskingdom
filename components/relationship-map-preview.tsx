export default function RelationshipMapPreview() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-black/20 p-6">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-center">
          <div className="text-lg font-semibold tracking-tight">FoundersKingdom</div>
          <div className="mt-2 text-sm text-white/48">core system</div>
        </div>
        <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-center">
          <div className="text-lg font-semibold tracking-tight">Redwoud</div>
          <div className="mt-2 text-sm text-white/48">intelligence layer</div>
        </div>
        <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-center">
          <div className="text-lg font-semibold tracking-tight">Next Venture</div>
          <div className="mt-2 text-sm text-white/48">incubation track</div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-center text-sm text-white/58">
          shared audience
        </div>
        <div className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-center text-sm text-white/58">
          infrastructure
        </div>
        <div className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-center text-sm text-white/58">
          sequencing
        </div>
      </div>
    </div>
  );
}
