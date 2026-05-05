'use client';

import { useEffect } from 'react';

export default function CubeGrid() {
  useEffect(() => {
    // Skip GSAP + cube init entirely on mobile — FloatingParticles handles that
    if (window.innerWidth <= 768) return;

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

    const isMobile = window.innerWidth <= 768;
    const GRID = isMobile ? 6 : 10;
    // Mobile: static grid (no tilt), only tron sweep — so fewer faces needed
    const FACES = isMobile ? ['top', 'front', 'right'] : ['top', 'bottom', 'left', 'right', 'front', 'back'];
    // Desktop interaction config
    const RADIUS = 3;
    const MAX_ANGLE = 20;
    const FACE_COLOR = '#0a0b0d';
    const RIPPLE_COL = 'rgba(180,200,230,0.40)';
    const ENTER_DUR = 0.3;
    const LEAVE_DUR = 0.6;
    const EASING = 'power3.out';

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

    // ── Tron sweep — moving light beam across cube edges (runs on both) ──
    const setupSweep = () => {
      const SWEEP_DUR = 4;
      const SWEEP_WIDTH = isMobile ? 2 : 2.5;

      const colFaces: { [key: number]: HTMLElement[] } = {};
      for (let c = 0; c < GRID; c++) colFaces[c] = [];
      scene.querySelectorAll('.cb').forEach((cube: any) => {
        const col = +cube.dataset.col;
        cube.querySelectorAll('.cb-face').forEach((f: any) => colFaces[col].push(f));
      });

      const sweepObj = { pos: -SWEEP_WIDTH };
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
              const shd = isMobile
                ? '0 0 ' + (5 + pct * 4) + 'px rgba(200,220,255,' + glowAlpha + ')'
                : '0 0 ' + (5 + pct * 4) + 'px rgba(200,220,255,' + glowAlpha + '), 0 0 ' +
                  (12 + pct * 8) + 'px rgba(160,190,255,' + (0.10 + pct * 0.15).toFixed(2) +
                  '), inset 0 0 5px rgba(200,220,255,' + (0.06 + pct * 0.06).toFixed(2) + ')';
              colFaces[c].forEach((f) => { f.style.borderColor = bdr; f.style.boxShadow = shd; });
            } else {
              colFaces[c].forEach((f) => { f.style.borderColor = ''; f.style.boxShadow = ''; });
            }
          }
        },
      });
    };

    setupSweep();

    // ── Mobile: static grid, no interaction — just the sweep ──
    if (isMobile) return;

    // ── Desktop only: full interactivity below ──

    // Cache cube elements for hot paths
    const cubes: { el: HTMLElement; row: number; col: number }[] = [];
    scene.querySelectorAll('.cb').forEach((cube: any) => {
      cubes.push({ el: cube, row: +cube.dataset.row, col: +cube.dataset.col });
    });

    // Set 3D transform-origin + GPU layer promotion
    const half = (Math.min(scene.offsetWidth, scene.offsetHeight) / GRID) / 2;
    setTimeout(() => {
      cubes.forEach(({ el }) => {
        el.style.transformOrigin = `50% 50% ${half}px`;
        el.style.willChange = 'transform';
      });
    }, 50);

    const RADIUS_SQ = RADIUS * RADIUS;

    const tiltAt = (row: number, col: number) => {
      for (let i = 0; i < cubes.length; i++) {
        const { el, row: r, col: c } = cubes[i];
        const distSq = (r - row) * (r - row) + (c - col) * (c - col);
        if (distSq < RADIUS_SQ) {
          const dist = Math.sqrt(distSq);
          const pct = 1 - dist / RADIUS;
          const angle = pct * MAX_ANGLE;
          gsap.to(el, {
            duration: ENTER_DUR, rotateX: ((r - row) / dist) * angle, rotateY: ((c - col) / dist) * angle,
            ease: EASING, overwrite: 'auto',
          });
        } else {
          gsap.to(el, { duration: LEAVE_DUR, rotateX: 0, rotateY: 0, ease: EASING, overwrite: 'auto' });
        }
      }
    };

    const resetAll = () => {
      for (let i = 0; i < cubes.length; i++) {
        gsap.to(cubes[i].el, { duration: LEAVE_DUR, rotateX: 0, rotateY: 0, ease: EASING, overwrite: 'auto' });
      }
    };

    const ripple = (mx: number, my: number) => {
      const rect = scene.getBoundingClientRect();
      const cellW = rect.width / GRID;
      const cellH = rect.height / GRID;
      const col = (mx - rect.left) / cellW;
      const row = (my - rect.top) / cellH;
      const rings: { [key: number]: any[] } = {};
      for (let i = 0; i < cubes.length; i++) {
        const { el, row: r, col: c } = cubes[i];
        const ring = Math.round(Math.hypot(r - row, c - col));
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(el);
      }
      Object.keys(rings).map(Number).sort((a, b) => a - b).forEach(ring => {
        const delay = ring * 0.08;
        const faces = rings[ring].flatMap((cube: any) => Array.from(cube.querySelectorAll('.cb-face')));
        gsap.to(faces, { backgroundColor: RIPPLE_COL, duration: 0.6, delay, ease: 'power3.out' });
        gsap.to(faces, { backgroundColor: FACE_COLOR, duration: 0.6, delay: delay + 0.8, ease: 'power3.out' });
      });
    };

    // Pointer events (desktop only)
    let rafId: number | null = null;
    let idleTimer: NodeJS.Timeout | null = null;
    let userActive = false;

    scene.addEventListener('pointermove', (e: PointerEvent) => {
      userActive = true;
      if (idleTimer) clearTimeout(idleTimer);
      const rect = scene.getBoundingClientRect();
      const col = (e.clientX - rect.left) / (rect.width / GRID);
      const row = (e.clientY - rect.top) / (rect.height / GRID);
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => tiltAt(row, col));
      idleTimer = setTimeout(() => { userActive = false; }, 3000);
    });

    scene.addEventListener('pointerleave', resetAll);
    scene.addEventListener('click', (e: MouseEvent) => ripple(e.clientX, e.clientY));

    // Auto-animate (desktop idle)
    const autoRow = Math.floor(GRID / 2);
    const autoObj = { col: 2 };
    const autoTl = gsap.timeline({ repeat: -1, yoyo: true });
    autoTl.to(autoObj, {
      col: GRID - 2, duration: 3, ease: 'sine.inOut',
      onUpdate: () => { if (!userActive) tiltAt(autoRow, autoObj.col); },
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
