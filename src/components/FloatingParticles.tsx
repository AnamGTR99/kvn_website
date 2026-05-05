'use client';

export default function FloatingParticles() {
  return (
    <div className="particles-bg" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} className="particle" style={{
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--d': `${18 + Math.random() * 22}s`,
          '--delay': `${-Math.random() * 20}s`,
          '--size': `${1.5 + Math.random() * 2}px`,
          '--drift': `${-30 + Math.random() * 60}px`,
        } as React.CSSProperties} />
      ))}
    </div>
  );
}
