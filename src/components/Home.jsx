import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Star, Sparkles, Rocket, Quote } from 'lucide-react';
import SectionOrbs from './SectionOrbs.jsx';

const brands = [
  'OpenAI', 'NVIDIA', 'Adobe', 'Notion', 'Figma', 'HuggingFace', 'AWS', 'Google Cloud'
];

function LogoLoop() {
  return (
    <div className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex gap-14 will-change-transform"
        >
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="shrink-0 text-white/60 hover:text-white transition-colors text-sm tracking-wide">
              {b}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{eyebrow}</p>
      <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -6, rotateX: 2 }} className="relative rounded-2xl bg-white/5 border border-white/10 p-6">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-orange-400/0 opacity-0 group-hover:opacity-20 transition-opacity" />
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/40 to-blue-500/40 flex items-center justify-center">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProjectCard({ title, tags, image }) {
  return (
    <motion.div whileHover={{ y: -6, rotateX: 2 }} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
      <div className="aspect-video bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-orange-400/20" style={{backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="p-6">
        <h3 className="font-medium">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Testimonial({ quote, author, role }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <Quote className="text-white/30" size={20} />
      <p className="mt-4 text-white/80 leading-relaxed">“{quote}”</p>
      <p className="mt-4 text-sm text-white/60">{author} — {role}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero with new Spline */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black pointer-events-none" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
              <Sparkles size={14} /> Trusted AI Solutions for Modern Brands
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              I’m a Freelance AI Solutions Architect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300">for video, automation, and intelligent web.</span>
            </h1>
            <p className="mt-5 text-white/80 leading-relaxed max-w-xl">
              I design end-to-end AI systems that scale creativity, productivity, and digital presence. From commercial AI videos and virtual production to intelligent automation and AI-integrated websites, I help businesses turn ideas into smart, automated systems that work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2">Start a Project</a>
              <a href="#projects" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-2">View Work</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400" size={16} />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center gap-1">
                <Rocket className="text-purple-400" size={16} />
                <span>Automation-first</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg"
          >
            {[
              { title: 'AI Video', desc: 'Commercial AI films, virtual production, avatars.' },
              { title: 'Automation', desc: 'Workflows, agents, orchestration that scale.' },
              { title: 'Web + AI', desc: 'Intelligent websites and product integrations.' },
              { title: 'Strategy', desc: 'Roadmaps, pilots, and adoption playbooks.' },
              { title: 'Data & Models', desc: 'Prompting, fine-tuning, retrieval, evals.' },
              { title: 'Ops', desc: 'Monitoring, compliance, cost & quality controls.' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-white/70 mt-1">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logos with soft parallax orbs */}
      <section className="relative mx-auto max-w-7xl px-4">
        <SectionOrbs intensity={0.6} />
        <LogoLoop />
      </section>

      {/* Services with interactive scroll orbs */}
      <section id="services" className="relative mx-auto max-w-7xl px-4 py-16">
        <SectionOrbs intensity={1} />
        <SectionTitle
          eyebrow="Services"
          title="End-to-end AI that ships outcomes"
          subtitle="Pragmatic, production-grade systems that move metrics — not just prototypes."
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard icon={Rocket} title="AI-Powered Video" desc="Commercial AI videos, virtual sets, avatars, and synthetic scenes crafted for performance and brand fidelity." />
          <ServiceCard icon={Sparkles} title="Automation Systems" desc="Agents, workflow automation, and orchestration that eliminate manual drags and scale execution." />
          <ServiceCard icon={Star} title="Intelligent Web Platforms" desc="Websites and apps with AI-native UX — retrieval, personalization, content generation, and analytics." />
        </div>
      </section>

      {/* Projects with interactive scroll orbs */}
      <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16">
        <SectionOrbs intensity={1.2} />
        <SectionTitle
          eyebrow="Projects"
          title="Selected work and prototypes"
          subtitle="A mix of shipped client engagements and concept builds demonstrating capability."
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard title="AI Launch Film" tags={["Text-to-Video", "Avatar", "Brand"]} />
          <ProjectCard title="Autonomous Ops Agent" tags={["RAG", "Agents", "Automation"]} />
          <ProjectCard title="AI-integrated Commerce" tags={["Recommendations", "Chat", "Analytics"]} />
        </div>
      </section>

      {/* Testimonials with interactive scroll orbs */}
      <section className="relative mx-auto max-w-7xl px-4 py-16">
        <SectionOrbs intensity={0.8} />
        <SectionTitle
          eyebrow="Testimonials"
          title="What partners say"
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Testimonial quote="Turned our content pipeline into an automated engine. Output up 5x with higher quality." author="CMO, D2C Brand" role="Ecommerce" />
          <Testimonial quote="The AI video work looked premium and delivered measurable lift in engagement." author="Head of Content" role="Media" />
          <Testimonial quote="Brought clarity to AI adoption — from roadmap to shipped automation that saved costs." author="COO" role="SaaS" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20">
        <SectionOrbs intensity={1} />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-orange-500/10">
          <div className="absolute -inset-1 opacity-30 blur-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(249,115,22,0.2),transparent_40%)] pointer-events-none" />
          <div className="relative p-8 md:p-14">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Let’s build the intelligent system your business needs</h3>
            <p className="mt-3 text-white/80 max-w-2xl">Tell me about your goals. I’ll propose a pragmatic AI approach with timelines, architecture, and measurable outcomes.</p>
            <form className="mt-8 grid md:grid-cols-3 gap-3">
              <input required placeholder="Your name" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
              <input placeholder="Company / Website" className="w-full rounded-lg bg-black/40 border border-white/15 p-3 outline-none focus:ring-2 ring-purple-500/40" />
              <textarea required placeholder="What are you trying to achieve?" className="md:col-span-3 rounded-lg bg-black/40 border border-white/15 p-3 h-28 outline-none focus:ring-2 ring-purple-500/40" />
              <button className="md:col-span-3 inline-flex justify-center items-center rounded-lg bg-white text-black px-5 py-3">Request Proposal</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
