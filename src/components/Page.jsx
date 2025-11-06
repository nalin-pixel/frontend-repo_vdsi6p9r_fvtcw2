import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionOrbs from './SectionOrbs.jsx';
import SplineSection from './SplineSection.jsx';

function HeadingReveal({ title, subtitle }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <motion.h1 style={{ y, opacity }} className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</motion.h1>
      {subtitle && (
        <motion.p style={{ y, opacity }} className="mt-3 text-white/70 leading-relaxed">{subtitle}</motion.p>
      )}
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
      <main className="relative mx-auto max-w-7xl px-4 py-16">
        <SplineSection scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" />
        <SectionOrbs intensity={1} />
        <div className="relative">
          <HeadingReveal title="Services" subtitle="Practical AI that ships. Architecture, implementation, and iterative optimization." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {items.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, rotateX: 2 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - r.left; const y = e.clientY - r.top;
                  e.currentTarget.style.setProperty('--x', x + 'px');
                  e.currentTarget.style.setProperty('--y', y + 'px');
                }}
                className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(300px_200px_at_var(--x)_var(--y),rgba(255,255,255,0.06),transparent_40%)]" />
                <h3 className="text-lg font-medium relative">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70 relative">
                  {s.points.map((p, j) => (
                    <li key={j} className="leading-relaxed">• {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
      <main className="relative mx-auto max-w-7xl px-4 py-16">
        <SplineSection scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" />
        <SectionOrbs intensity={1.2} />
        <div className="relative">
          <HeadingReveal title="Projects" subtitle="A sample of outcomes delivered across industries." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6, rotateX: 2 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - r.left; const y = e.clientY - r.top;
                  e.currentTarget.style.setProperty('--x', x + 'px');
                  e.currentTarget.style.setProperty('--y', y + 'px');
                }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="aspect-[16/9] bg-[radial-gradient(500px_300px_at_var(--x)_var(--y),rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.18),transparent_55%)]" />
                <div className="p-6">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (type === 'blog') {
    const posts = [
      { slug: 'agent-systems-that-ship', title: 'Designing Agent Systems that Actually Ship Work', date: 'Oct 2025', tags: ['Agents', 'Automation', 'MLOps'], summary: 'Blueprints for building reliable, auditable agents that deliver end-to-end outcomes.' },
      { slug: 'ai-video-workflow', title: 'From Concept to Commercial: AI Video Workflow', date: 'Sep 2025', tags: ['AI Video', 'Production', 'Quality'], summary: 'A practical pipeline to go from storyboard to shipped film with quality controls.' },
      { slug: 'operational-knowledge-graphs', title: 'RAG Beyond Docs: Operational Knowledge Graphs', date: 'Aug 2025', tags: ['RAG', 'Graphs', 'Retrieval'], summary: 'Use entities, relations, and signals to supercharge retrieval and decisions.' },
      { slug: 'instrumenting-ai-outcomes', title: 'Instrumenting AI for Business Outcomes', date: 'Jul 2025', tags: ['Analytics', 'Evals', 'Product'], summary: 'Design metrics, evals, and loops that tie AI to business value.' },
    ];

    const [active, setActive] = useState(null);

    // Support deep-links like #blog/agent-systems-that-ship
    useEffect(() => {
      const openFromHash = () => {
        const hash = window.location.hash.replace('#', '');
        const [, slug] = hash.split('/');
        if (slug) {
          const found = posts.find(p => p.slug === slug);
          if (found) setActive(found);
        }
      };
      openFromHash();
      window.addEventListener('hashchange', openFromHash);
      return () => window.removeEventListener('hashchange', openFromHash);
    }, []);

    const openPost = (p) => {
      window.location.hash = `blog/${p.slug}`;
      setActive(p);
    };

    return (
      <main className="relative mx-auto max-w-7xl px-4 py-16">
        <SectionOrbs intensity={0.9} />
        <div className="relative">
          <HeadingReveal title="Blog" subtitle="Insights on building pragmatic AI systems that drive business outcomes." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p, i) => (
              <motion.button
                type="button"
                key={i}
                onClick={() => openPost(p)}
                whileHover={{ y: -8, rotateX: 3 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - r.left; const y = e.clientY - r.top;
                  e.currentTarget.style.setProperty('--x', x + 'px');
                  e.currentTarget.style.setProperty('--y', y + 'px');
                }}
                className="group relative text-left overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-0"
              >
                <div className="aspect-[16/10] bg-[radial-gradient(600px_300px_at_var(--x)_var(--y),rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.22),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.22),transparent_55%)]" />
                <div className="p-5">
                  <div className="text-xs text-white/50">{p.date}</div>
                  <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span key={j} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">{t}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-white/70">Read the full article →</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur"
            onClick={() => { setActive(null); window.location.hash = 'blog'; }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-2xl max-h-[80vh] overflow-auto rounded-2xl bg-black border border-white/15"
            >
              <div className="p-6">
                <div className="text-xs text-white/50">{active.date}</div>
                <h3 className="mt-1 text-2xl font-semibold">{active.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.tags.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">{t}</span>
                  ))}
                </div>
                <div className="mt-5 space-y-4 text-white/80 leading-relaxed">
                  <p>{active.summary}</p>
                  <p>In this case summary, we break down the architecture, tooling, data flows, and evaluation strategy that ensured the system delivered measurable outcomes. You’ll see decisions, trade-offs, and lessons that generalize to similar problems.</p>
                  <p>Want the full write-up? Reach out via the contact section for detailed PDFs and private demos.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => { setActive(null); window.location.hash = 'blog'; }} className="inline-flex items-center rounded-md bg-white text-black px-4 py-2">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
    );
  }

  if (type === 'contact') {
    return (
      <main className="relative mx-auto max-w-3xl px-4 py-16">
        <SectionOrbs intensity={0.8} />
        <div className="relative">
          <HeadingReveal title="Contact" subtitle="Tell me about your goals. I’ll reply with a brief and next steps." />
          <form className="mt-10 space-y-4">
            <input required placeholder="Your name" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
            <input placeholder="Company / Website" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
            <textarea required placeholder="What are you trying to achieve?" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 h-40 outline-none focus:ring-2 ring-purple-500/40" />
            <button className="inline-flex justify-center items-center rounded-lg bg-white text-black px-5 py-3">Request Proposal</button>
          </form>
        </div>
      </main>
    );
  }

  return null;
}
