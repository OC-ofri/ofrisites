'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const bgFrom = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['#050510', '#0a1628', '#120a28', '#1a0a2e', '#10082a']
  );
  const bgTo = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['#0a1628', '#120a28', '#1a0a2e', '#10082a', '#12100a']
  );
  const background = useTransform(
    [bgFrom, bgTo] as const,
    ([from, to]) => `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  );

  const blob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const blob1X = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const blob3X = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{ y: blob1Y, x: blob1X }}
        className="absolute"
      >
        <div
          style={{
            width: '50vw',
            height: '50vw',
            top: '5vh',
            left: '-15vw',
            position: 'absolute',
            background: 'radial-gradient(ellipse, var(--blue-glow) 0%, transparent 65%)',
            filter: 'blur(80px)',
            opacity: 0.55,
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: blob2Y }}
        className="absolute inset-0"
      >
        <div
          style={{
            width: '45vw',
            height: '45vw',
            top: '40vh',
            right: '-10vw',
            position: 'absolute',
            background: 'radial-gradient(ellipse, var(--violet-glow) 0%, transparent 60%)',
            filter: 'blur(90px)',
            opacity: 0.5,
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: blob3Y, x: blob3X }}
        className="absolute inset-0"
      >
        <div
          style={{
            width: '38vw',
            height: '38vw',
            bottom: '8vh',
            left: '20vw',
            position: 'absolute',
            background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.18) 0%, transparent 65%)',
            filter: 'blur(85px)',
            opacity: 0.55,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
