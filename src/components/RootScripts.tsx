'use client';

import { useEffect } from 'react';

export default function RootScripts() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis');
        }),
      { threshold: 0.06 }
    );

    document.querySelectorAll('.rv').forEach((r) => obs.observe(r));

    return () => {
      document.querySelectorAll('.rv').forEach((r) => obs.unobserve(r));
    };
  }, []);

  return null;
}
