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

    const GRID = 10;
    const RADIUS = 3;
    const MAX_ANGLE = 20;
    const FACE_COLOR = '#0a0b0d';
    const RIPPLE_COL = 'rgba(180,200,230,0.40)';
    const RIPPLE_SPD = 2;
    const ENTER_DUR = 0.3;
    const LEAVE_DUR = 0.6;
    const EASING = 'power3.out';

    const scene = document.getElementById('cubesScene');
    if (!scene) return;

    scene.style.gridTemplateColumns = `repeat(${GRID}, 1fr)`;

    // Build the grid — 10x10 = 100 cubes, each with 6 faces
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const cube = document.createElement('div');
        cube.className = 'cb';
        (cube.dataset as any).row = r;
        (cube.dataset as any).col = c;
        ['top', 'bottom', 'left', 'right', 'front', 'back'].forEach(f => {
          const face = document.createElement('div');
          face.className = 'cb-face ' + f;
          cube.appendChild(face);
        });
        scene.appendChild(cube);
      }
    }

    // After layout: set 3D transform-origin so cube rotates around its true center
    const half = (Math.min(scene.offsetWidth, scene.offsetHeight) / GRID) / 2;
    setTimeout(() => {
      scene.querySelectorAll('.cb').forEach(function(cube: any) {
        cube.style.transformOrigin = `50% 50% ${half}px`;
      });
    }, 50);

    // tiltAt: rotate cubes within radius toward a point
    const tiltAt = (row: number, col: number) => {
      scene.querySelectorAll('.cb').forEach((cube: any) => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const distSq = Math.pow(r - row, 2) + Math.pow(c - col, 2);
        if (distSq < RADIUS * RADIUS) {
          const dist = Math.sqrt(distSq);
          const pct = 1 - dist / RADIUS;
          const angle = pct * MAX_ANGLE;
          const dx = c - col;
          const dy = r - row;
          gsap.to(cube, {
            duration: ENTER_DUR,
            rotateX: (dy / dist) * angle,
            rotateY: (dx / dist) * angle,
            ease: EASING,
          });
        } else {
          gsap.to(cube, {
            duration: LEAVE_DUR,
            rotateX: 0,
            rotateY: 0,
            ease: 'power3.out',
          });
        }
      });
    };

    const resetAll = () => {
      scene.querySelectorAll('.cb').forEach((cube: any) =>
        gsap.to(cube, { duration: LEAVE_DUR, rotateX: 0, rotateY: 0, ease: 'power3.out' })
      );
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
      scene.querySelectorAll('.cb').forEach((cube: any) => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - row, c - col);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

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

    scene.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        e.preventDefault();
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
      { passive: false }
    );

    scene.addEventListener('touchstart', () => {
      userActive = true;
    }, { passive: true });

    scene.addEventListener('touchend', () => resetAll(), { passive: true });

    // Auto-animate (idle simulation)
    let autoCol = 5,
      autoRow = 5,
      autoDir = 1;
    setInterval(() => {
      if (!userActive) {
        autoCol += 0.3 * autoDir;
        if (autoCol > 8 || autoCol < 2) autoDir *= -1;
        tiltAt(autoRow, autoCol);
      }
    }, 80);
  };

  return (
    <div id="cubes-bg">
      <div className="cubes-wrapper">
        <div className="cubes-scene" id="cubesScene"></div>
      </div>
    </div>
  );
}
