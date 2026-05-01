'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const PATH_D =
  'M 200 0 ' +
  'C 200 200, 1000 200, 1000 500 ' +
  'C 1000 800, 200 800, 200 1100 ' +
  'C 200 1400, 1000 1400, 1000 1700 ' +
  'C 1000 2000, 200 2000, 200 2300 ' +
  'C 200 2600, 1000 2600, 1000 2900 ' +
  'C 1000 3200, 200 3200, 200 3500 ' +
  'C 200 3800, 1000 3800, 1000 4100 ' +
  'C 1000 4400, 200 4400, 200 4700 ' +
  'L 200 5200';

export default function ScrollFlowLine() {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const update = () => setHidden(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
    return () => window.removeEventListener('resize', update);
  }, []);

  const dashOffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);
  const dotPercent = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  if (hidden) return null;

  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 5200"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <defs>
        <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        ref={pathRef}
        d={PATH_D}
        fill="none"
        stroke="rgba(26, 111, 240, 0.28)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray={pathLength}
        style={{ strokeDashoffset: dashOffset, filter: 'drop-shadow(0 0 6px rgba(26,111,240,0.35))' }}
      />
      {pathLength > 0 && (
        <motion.circle
          r={4}
          fill="rgba(91, 146, 255, 0.95)"
          filter="url(#flowGlow)"
          style={{ offsetPath: `path('${PATH_D}')`, offsetDistance: dotPercent }}
        />
      )}
    </svg>
  );
}
