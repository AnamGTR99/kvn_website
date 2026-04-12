'use client';

import VentureCard from './VentureCard';
import VentureModal from './VentureModal';
import { useState } from 'react';

interface Video {
  type: string;
  title: string;
  embed: string;
  url: string;
  views: string;
  saves: string;
  likes: string;
  shares: string;
  rate: string;
  fill: number;
  reach: string;
}

interface Stat {
  val: string;
  lbl: string;
  hi?: boolean;
}

interface BrandData {
  name: string;
  logoClass: string;
  logo: string;
  stats: Stat[];
  videos: Video[];
}

const BRANDS: { [key: string]: BrandData } = {
  suapp: {
    name: 'SUAPP.ai',
    logoClass: 'suapp',
    logo: '/images/suapp.ai.jpeg',
    stats: [
      { val: '125K', lbl: 'Avg. views' },
      { val: '7.3K', lbl: 'Avg. saves', hi: true },
      { val: '87K', lbl: 'Avg. reach' },
      { val: '13.6%', lbl: 'Avg. interaction rate' },
    ],
    videos: [
      {
        type: 'Sponsored Reel',
        title: 'AI-powered interior rendering showcase',
        embed: 'https://www.instagram.com/reel/CpX8z3pPz2Z/embed',
        url: 'https://www.instagram.com/reel/CpX8z3pPz2Z/',
        views: '125K',
        saves: '7.3K',
        likes: '4.2K',
        shares: '892',
        rate: '13.6%',
        fill: 68,
        reach: '87K unique accounts',
      },
      {
        type: 'Sponsored Reel',
        title: 'SUAPP rendering capabilities',
        embed: 'https://www.instagram.com/reel/Cq1A2q7P-aZ/embed',
        url: 'https://www.instagram.com/reel/Cq1A2q7P-aZ/',
        views: '98K',
        saves: '6.1K',
        likes: '3.8K',
        shares: '724',
        rate: '12.4%',
        fill: 62,
        reach: '71K unique accounts',
      },
      {
        type: 'Sponsored Reel',
        title: 'Design workflow transformation',
        embed: 'https://www.instagram.com/reel/CrDvL9ov3xL/embed',
        url: 'https://www.instagram.com/reel/CrDvL9ov3xL/',
        views: '112K',
        saves: '6.8K',
        likes: '4.1K',
        shares: '821',
        rate: '14.2%',
        fill: 71,
        reach: '79K unique accounts',
      },
    ],
  },
  foyr: {
    name: 'Foyr Neo',
    logoClass: 'foyr',
    logo: '/images/foyr-neo.png',
    stats: [
      { val: '142K', lbl: 'Avg. views' },
      { val: '8.1K', lbl: 'Avg. saves', hi: true },
      { val: '95K', lbl: 'Avg. reach' },
      { val: '15.2%', lbl: 'Avg. interaction rate' },
    ],
    videos: [
      {
        type: 'Sponsored Reel',
        title: '3D interior design made simple',
        embed: 'https://www.instagram.com/reel/CsK4_5dp7vL/embed',
        url: 'https://www.instagram.com/reel/CsK4_5dp7vL/',
        views: '142K',
        saves: '8.1K',
        likes: '5.2K',
        shares: '967',
        rate: '15.2%',
        fill: 76,
        reach: '95K unique accounts',
      },
    ],
  },
  facade: {
    name: 'facadetool.com',
    logoClass: 'facade',
    logo: '/images/logo.png',
    stats: [
      { val: '98K', lbl: 'Avg. views' },
      { val: '5.4K', lbl: 'Avg. saves', hi: true },
      { val: '68K', lbl: 'Avg. reach' },
      { val: '11.8%', lbl: 'Avg. interaction rate' },
    ],
    videos: [
      {
        type: 'Sponsored Reel',
        title: 'AI-generated building facades',
        embed: 'https://www.instagram.com/reel/CtX9L0fpV2Z/embed',
        url: 'https://www.instagram.com/reel/CtX9L0fpV2Z/',
        views: '98K',
        saves: '5.4K',
        likes: '3.6K',
        shares: '615',
        rate: '11.8%',
        fill: 59,
        reach: '68K unique accounts',
      },
    ],
  },
};

export default function PreviousWorks() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleOpenModal = (brandId: string) => {
    setSelectedBrand(brandId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedBrand(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="prev-works" className="site-boundary">
        <div className="slbl rv">Previous works</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }} className="rv">
          <h2 className="stitle">
            Brands I&apos;ve <em>worked with</em>
          </h2>
          <p style={{ fontSize: '10px', color: 'var(--ff)', letterSpacing: '.12em' }}>
            Click to explore
          </p>
        </div>

        <div className="venture-grid rv">
          <VentureCard
            id="suapp"
            role="AI Rendering & Modelling"
            name="SUAPP.ai"
            reels="3 sponsored reels"
            logoSrc="/images/suapp.ai.jpeg"
            logoClass="suapp"
            onOpenModal={handleOpenModal}
          />
          <VentureCard
            id="foyr"
            role="3D Interior Design"
            name="Foyr Neo"
            reels="1 sponsored reel"
            logoSrc="/images/foyr-neo.png"
            logoClass="foyr"
            onOpenModal={handleOpenModal}
          />
          <VentureCard
            id="facade"
            role="AI Facade Generation"
            name="facadetool.com"
            reels="1 sponsored reel"
            logoSrc="/images/logo.png"
            logoClass="facade"
            onOpenModal={handleOpenModal}
          />
        </div>
      </section>

      <VentureModal
        isOpen={!!selectedBrand}
        brand={selectedBrand ? BRANDS[selectedBrand] : null}
        onClose={handleCloseModal}
      />
    </>
  );
}
