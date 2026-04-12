'use client';

import Image from 'next/image';

interface VentureCardProps {
  id: string;
  role: string;
  name: string;
  reels: string;
  logoSrc: string;
  logoClass?: string;
  onOpenModal: (id: string) => void;
}

export default function VentureCard({
  id,
  role,
  name,
  reels,
  logoSrc,
  logoClass,
  onOpenModal,
}: VentureCardProps) {
  return (
    <div
      className="venture-card"
      onClick={() => onOpenModal(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onOpenModal(id);
        }
      }}
    >
      <div className="vc-gradient"></div>
      <span className="vc-badge">
        <span className="vc-badge-dot"></span>
        ONGOING
      </span>
      <div className="vc-logo-area">
        <Image
          src={logoSrc}
          alt={name}
          width={200}
          height={60}
          className={`vc-logo ${logoClass ? logoClass : ''}`}
          priority
        />
      </div>
      <div className="vc-info">
        <div className="vc-role">{role}</div>
        <div className="vc-name">{name}</div>
        <div className="vc-est">{reels}</div>
      </div>
    </div>
  );
}
