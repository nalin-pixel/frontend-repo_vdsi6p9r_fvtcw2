import { motion } from 'framer-motion';

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-3 text-white/70 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function Page({ type = 'services' }) {
  if (type === 'services') {
    const items = [
      {
        title: 'AI-Powered Video Creation',
        points: [
          'Commercial AI films: product, launch, and brand narratives',
          'Virtual production: avatars, volumetric, synthetic scenes',
          'Quality controls: style consistency, voice, timing, delivery',
        ],
      },
      {
        title: 'Automation & Agent Systems',
        points: [
          'Agentic workflows that execute tasks end-to-end',
          'Integrations with SaaS, data sources, and APIs',
          'Observability, evals, and cost/performance optimization',
        ],
      },
      {
        title: 'Intelligent Web Platforms',
        points: [
          'RAG, personalization, and AI-native UX',
          'CMS pipelines that generate and govern content',
          'Analytics and experimentation to move metrics',
        ],
      },
    ];
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle title="Services" subtitle="Practical AI that ships. Architecture, implementation, and iterative optimization." />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.points.map((p, j) => (
                  <li key={j} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    );
  }

  if (type === 'projects') {
    const projects = [
      { title: 'Retail: Autonomous Content Ops', summary: 'Agents generate, QA, and deploy content across channels.' },
      { title: 'Media: AI Launch Film', summary: 'Avatar-led film with product integration and voice synthesis.' },
      { title: 'SaaS: Support Copilot', summary: 'RAG + tools for faster resolution and higher CSAT.' },
      { title: 'Commerce: Smart Catalog', summary: 'AI-curated product metadata, imagery, and recommendations.' },
    ];
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle title="Projects" subtitle="A sample of outcomes delivered across industries." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article key={i} whileHover={{ y: -4 }} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[16/9] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-orange-400/20" />
              <div className="p-6">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    );
  }

  if (type === 'blog') {
    const posts = [
      { title: 'Designing Agent Systems that Actually Ship Work', date: 'Oct 2025' },
      { title: 'From Concept to Commercial: AI Video Workflow', date: 'Sep 2025' },
      { title: 'RAG Beyond Docs: Operational Knowledge Graphs', date: 'Aug 2025' },
    ];
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <SectionTitle title="Blog" subtitle="Insights on building pragmatic AI systems that drive business outcomes." />
        <div className="mt-10 space-y-5">
          {posts.map((p, i) => (
            <a key={i} href="#" className="block rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="text-xs text-white/50">{p.date}</div>
              <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">Read the full article →</p>
            </a>
          ))}
        </div>
      </main>
    );
  }

  if (type === 'contact') {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <SectionTitle title="Contact" subtitle="Tell me about your goals. I’ll reply with a brief and next steps." />
        <form className="mt-10 space-y-4">
          <input required placeholder="Your name" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
          <input placeholder="Company / Website" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
          <textarea required placeholder="What are you trying to achieve?" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 h-40 outline-none focus:ring-2 ring-purple-500/40" />
          <button className="inline-flex justify-center items-center rounded-lg bg-white text-black px-5 py-3">Request Proposal</button>
        </form>
      </main>
    );
  }

  return null;
}
