'use client';

import Image from 'next/image';

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

interface VentureModalProps {
  isOpen: boolean;
  brand: BrandData | null;
  onClose: () => void;
}

export default function VentureModal({ isOpen, brand, onClose }: VentureModalProps) {
  if (!brand) return null;

  return (
    <div
      id="mbg"
      className={isOpen ? 'open' : ''}
      onClick={onClose}
      role="presentation"
    >
      <div id="modal" onClick={(e) => e.stopPropagation()}>
        <div className="mh">
          <div className="mh-left">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={32}
              className={`mlogo-sm ${brand.logoClass}`}
            />
            <h2 className="mh-name">{brand.name}</h2>
          </div>
          <button
            className="mcls"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="mb">
          {/* Stats */}
          <div className="mstats">
            {brand.stats.map((stat, idx) => (
              <div key={idx} className="ms">
                <span className={`msn ${stat.hi ? 'hi' : ''}`}>{stat.val}</span>
                <span className="msl">{stat.lbl}</span>
              </div>
            ))}
          </div>

          {/* Videos */}
          <div className="mvids">
            {brand.videos.map((video, idx) => (
              <div key={idx} className="mvc">
                <div className="mvth">
                  <iframe
                    src={video.embed}
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  ></iframe>
                  <div
                    className="mvo"
                    role="button"
                    tabIndex={0}
                    onClick={() => window.open(video.url, '_blank')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.open(video.url, '_blank');
                      }
                    }}
                  >
                    <div className="mvp">
                      <div className="mva"></div>
                    </div>
                  </div>
                </div>

                <div className="mvi">
                  <div className="mvtype">{video.type}</div>
                  <div className="mvtitle">{video.title}</div>

                  <div className="mvrow">
                    <div className="mvs">
                      <div className="mvsv">{video.views}</div>
                      <div className="mvsk">Views</div>
                    </div>
                    <div className="mvs">
                      <div className="mvsv hi">{video.saves}</div>
                      <div className="mvsk">Saves</div>
                    </div>
                    <div className="mvs">
                      <div className="mvsv">{video.likes}</div>
                      <div className="mvsk">Likes</div>
                    </div>
                    <div className="mvs">
                      <div className="mvsv">{video.shares}</div>
                      <div className="mvsk">Shares</div>
                    </div>
                  </div>

                  <div className="mveng">
                    <div className="mverow">
                      <span>Interaction rate</span>
                      <span>{video.rate}%</span>
                    </div>
                    <div className="mvetrack">
                      <div className="mvefill" style={{ width: `${video.fill}%` }}></div>
                    </div>
                  </div>

                  <div className="mvfoot">
                    <span className="mvreach">{video.reach}</span>
                    <a
                      className="mvlink"
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
