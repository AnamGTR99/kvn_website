'use client';

import { useEffect } from 'react';

export default function CubeGrid() {
  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.async = true;
    script.onload = initCubes;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initCubes = () => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;

    const gsap = (window as any).gsap;

    // Reduce grid on mobile for performance (6x6=36 cubes vs 10x10=100)
    const isMobile = window.innerWidth <= 768;
    const GRID = isMobile ? 6 : 10;
    const RADIUS = isMobile ? 2.5 : 3;
    const MAX_ANGLE = isMobile ? 14 : 20;
    const FACE_COLOR = '#0a0b0d';
    const RIPPLE_COL = 'rgba(180,200,230,0.40)';
    const RIPPLE_SPD = 2;
    const ENTER_DUR = isMobile ? 0.5 : 0.3;
    const LEAVE_DUR = isMobile ? 1.2 : 0.6;
    const EASING = isMobile ? 'power2.out' : 'power3.out';
    // On mobile, only render 3 visible faces instead of 6
    const FACES = isMobile ? ['top', 'front', 'right'] : ['top', 'bottom', 'left', 'right', 'front', 'back'];

    const scene = document.getElementById('cubesScene');
    if (!scene) return;

    scene.style.gridTemplateColumns = `repeat(${GRID}, 1fr)`;

    // Build the grid — mobile: 6x6=36 cubes × 3 faces = 108 elements
    //                   desktop: 10x10=100 cubes × 6 faces = 600 elements
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const cube = document.createElement('div');
        cube.className = 'cb';
        (cube.dataset as any).row = r;
        (cube.dataset as any).col = c;
        FACES.forEach(f => {
          const face = document.createElement('div');
          face.className = 'cb-face ' + f;
          cube.appendChild(face);
        });
        scene.appendChild(cube);
      }
    }

    // Cache cube elements once — avoid repeated DOM queries in hot paths
    const cubes: { el: HTMLElement; row: number; col: number }[] = [];
    const allCubeEls = scene.querySelectorAll('.cb');
    allCubeEls.forEach((cube: any) => {
      cubes.push({ el: cube, row: +cube.dataset.row, col: +cube.dataset.col });
    });

    // After layout: set 3D transform-origin so cube rotates around its true center
    // Also promote each cube to its own GPU layer for smooth compositing
    const half = (Math.min(scene.offsetWidth, scene.offsetHeight) / GRID) / 2;
    setTimeout(() => {
      cubes.forEach(({ el }) => {
        el.style.transformOrigin = `50% 50% ${half}px`;
        el.style.willChange = 'transform';
      });
    }, 50);

    const RADIUS_SQ = RADIUS * RADIUS;

    // tiltAt: rotate cubes within radius toward a point
    const tiltAt = (row: number, col: number) => {
      for (let i = 0; i < cubes.length; i++) {
        const { el, row: r, col: c } = cubes[i];
        const distSq = (r - row) * (r - row) + (c - col) * (c - col);
        if (distSq < RADIUS_SQ) {
          const dist = Math.sqrt(distSq);
          const pct = 1 - dist / RADIUS;
          const angle = pct * MAX_ANGLE;
          const dx = c - col;
          const dy = r - row;
          gsap.to(el, {
            duration: ENTER_DUR,
            rotateX: (dy / dist) * angle,
            rotateY: (dx / dist) * angle,
            ease: EASING,
            overwrite: 'auto',
          });
        } else {
          gsap.to(el, {
            duration: LEAVE_DUR,
            rotateX: 0,
            rotateY: 0,
            ease: EASING,
            overwrite: 'auto',
          });
        }
      }
    };

    const resetAll = () => {
      for (let i = 0; i < cubes.length; i++) {
        gsap.to(cubes[i].el, { duration: LEAVE_DUR, rotateX: 0, rotateY: 0, ease: EASING, overwrite: 'auto' });
      }
    };

    // ripple: tron sweep animation
    const ripple = (mx: number, my: number) => {
      const rect = scene.getBoundingClientRect();
      const cellW = rect.width / GRID;
      const cellH = rect.height / GRID;
      const col = (mx - rect.left) / cellW;
      const row = (my - rect.top) / cellH;

      const animDuration = 0.6;
      const holdTime = 0.2;
      const spreadDelay = 0.08;

      const rings: { [key: number]: any[] } = {};
      for (let i = 0; i < cubes.length; i++) {
        const { el, row: r, col: c } = cubes[i];
        const dist = Math.hypot(r - row, c - col);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(el);
      }

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube: any) =>
            Array.from(cube.querySelectorAll('.cb-face'))
          );
          gsap.to(faces, {
            backgroundColor: RIPPLE_COL,
            duration: animDuration,
            delay,
            ease: 'power3.out',
          });
          gsap.to(faces, {
            backgroundColor: FACE_COLOR,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power3.out',
          });
        });
    };

    // pointer events
    let rafId: number | null = null;
    let idleTimer: NodeJS.Timeout | null = null;
    let userActive = false;

    scene.addEventListener('pointermove', (e: PointerEvent) => {
      userActive = true;
      if (idleTimer) clearTimeout(idleTimer);
      const rect = scene.getBoundingClientRect();
      const cellW = rect.width / GRID;
      const cellH = rect.height / GRID;
      const col = (e.clientX - rect.left) / cellW;
      const row = (e.clientY - rect.top) / cellH;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => tiltAt(row, col));
      idleTimer = setTimeout(() => {
        userActive = false;
      }, 3000);
    });

    scene.addEventListener('pointerleave', resetAll);
    scene.addEventListener('click', (e: MouseEvent) => ripple(e.clientX, e.clientY));

    // passive: true so native scroll is never blocked on mobile
    scene.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        userActive = true;
        if (idleTimer) clearTimeout(idleTimer);
        const rect = scene.getBoundingClientRect();
        const cellW = rect.width / GRID;
        const cellH = rect.height / GRID;
        const t = e.touches[0];
        const col = (t.clientX - rect.left) / cellW;
        const row = (t.clientY - rect.top) / cellH;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => tiltAt(row, col));
        idleTimer = setTimeout(() => {
          userActive = false;
        }, 3000);
      },
      { passive: true }
    );

    scene.addEventListener('touchstart', () => {
      userActive = true;
    }, { passive: true });

    scene.addEventListener('touchend', () => resetAll(), { passive: true });

    // Auto-animate (idle simulation) — smooth continuous tween instead of setInterval
    const autoCenter = Math.floor(GRID / 2);
    const autoRow = autoCenter;
    const autoObj = { col: 2 };
    // On mobile, throttle onUpdate to ~30fps to keep things butter-smooth
    let lastAutoTime = 0;
    const autoThrottle = isMobile ? 33 : 0; // ms between tiltAt calls
    const autoTl = gsap.timeline({ repeat: -1, yoyo: true, paused: false });
    autoTl.to(autoObj, {
      col: GRID - 2,
      duration: isMobile ? 4 : 3,
      ease: 'sine.inOut',
      onUpdate: () => {
        if (userActive) return;
        const now = performance.now();
        if (now - lastAutoTime < autoThrottle) return;
        lastAutoTime = now;
        tiltAt(autoRow, autoObj.col);
      },
    });

    // ── Tron sweep — moving light beam across cube edges ──
    const SWEEP_DUR = 4;
    const SWEEP_WIDTH = isMobile ? 2 : 2.5;

    const colFaces: { [key: number]: HTMLElement[] } = {};
    for (let c = 0; c < GRID; c++) colFaces[c] = [];
    for (let i = 0; i < cubes.length; i++) {
      const { el, col: c } = cubes[i];
      el.querySelectorAll('.cb-face').forEach((f: any) => colFaces[c].push(f));
    }

    const sweepObj = { pos: -SWEEP_WIDTH };
    // On mobile, skip every other frame to cut sweep work in half
    let sweepFrame = 0;
    gsap.to(sweepObj, {
      pos: GRID + SWEEP_WIDTH,
      duration: SWEEP_DUR,
      ease: 'none',
      repeat: -1,
      onUpdate: function () {
        if (isMobile && ++sweepFrame % 2 !== 0) return;
        const center = sweepObj.pos;
        for (let c = 0; c < GRID; c++) {
          const dist = Math.abs(c - center);
          if (dist < SWEEP_WIDTH) {
            const pct = 1 - dist / SWEEP_WIDTH;
            const alpha = (0.32 + pct * 0.38).toFixed(2);
            const glowAlpha = (0.22 + pct * 0.28).toFixed(2);
            const bdr = 'rgba(200,220,255,' + alpha + ')';
            // Simplified shadow on mobile (single layer instead of triple)
            const shd = isMobile
              ? '0 0 ' + (5 + pct * 4) + 'px rgba(200,220,255,' + glowAlpha + ')'
              : '0 0 ' + (5 + pct * 4) + 'px rgba(200,220,255,' + glowAlpha + '), 0 0 ' +
                (12 + pct * 8) + 'px rgba(160,190,255,' + (0.10 + pct * 0.15).toFixed(2) +
                '), inset 0 0 5px rgba(200,220,255,' + (0.06 + pct * 0.06).toFixed(2) + ')';
            colFaces[c].forEach((f) => {
              f.style.borderColor = bdr;
              f.style.boxShadow = shd;
            });
          } else {
            colFaces[c].forEach((f) => {
              f.style.borderColor = '';
              f.style.boxShadow = '';
            });
          }
        }
      },
    });
  };

  return (
    <div id="cubes-bg">
      <div className="cubes-wrapper">
        <div className="cubes-scene" id="cubesScene"></div>
      </div>
    </div>
  );
}
