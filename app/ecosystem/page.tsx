import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ECOSYSTEM_DATA } from '../graphql/queries';
import { EcosystemCard, RelationshipCard } from '../components';

export default function EcosystemPage() {
  const router = useRouter();
  const { data } = useQuery(GET_ECOSYSTEM_DATA);

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

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-8 text-center md:px-8 md:pb-28">
        <div className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-emerald-100/80">
          Ecosystem
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl md:leading-[0.95]">
          The portfolio becomes more valuable when the ventures connect.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-xl md:leading-8">
          FoundersKingdom is built around a simple idea: the strongest founders are not
          just building companies. They are building systems of companies. The ecosystem
          layer is where startup leverage compounds.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data?.ecosystemLayers.map((layer) => (
            <EcosystemCard key={layer.title} layer={layer} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/34">
              Relationship examples
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.04]">
              Four ways a founder ecosystem creates leverage.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {data?.examples.map((example) => (
              <RelationshipCard key={example.category} example={example} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Components
const EcosystemCard = ({ layer }) => (
  <div
    className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)]"
  >
    <h2 className="text-2xl font-semibold tracking-tight">{layer.title}</h2>
    <p className="mt-4 text-sm leading-6 text-white/58">{layer.body}</p>
  </div>
);

const RelationshipCard = ({ example }) => (
  <div
    className="rounded-[28px] border border-white/8 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
  >
    <div className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/72">
      {example.category}
    </div>
    <p className="mt-4 text-base leading-7 text-white/58">{example.insight}</p>
  </div>
);
