'use client';

import { useEffect } from 'react';

export default function RootScripts() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis');
        }),
      { threshold: 0.06 }
    );

    // Observe all current .rv elements
    const observeAll = () => {
      document.querySelectorAll('.rv').forEach((el) => {
        if (!el.classList.contains('vis')) {
          io.observe(el);
        }
      });
    };

    observeAll();

    // Watch for new .rv elements added by Next.js page navigation
    const mo = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          hasNewNodes = true;
          break;
        }
      }
      if (hasNewNodes) observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
