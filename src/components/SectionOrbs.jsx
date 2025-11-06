import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Decorative 3D-like gradient orbs that react to scroll for a given section
export default function SectionOrbs({ intensity = 1, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100 * intensity]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60 * intensity]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 120 * intensity]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80 * intensity]);
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 25 * intensity]);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, -20 * intensity]);
  const s1 = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const s2 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-visible ${className}`} aria-hidden>
      <motion.div
        style={{ x: x1, y: y1, rotate: r1, scale: s1 }}
        className="absolute -top-10 -left-10 w-56 h-56 rounded-full blur-2xl opacity-50"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.5),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.45),transparent_55%)]" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2, rotate: r2, scale: s2 }}
        className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-2xl opacity-50"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.45),transparent_60%),radial-gradient(circle_at_40%_70%,rgba(249,115,22,0.35),transparent_55%)]" />
      </motion.div>
    </div>
  );
}
