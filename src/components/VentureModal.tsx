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
                <a
                  className="mvth mvth-link"
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.embed.replace('/embed', '/media/?size=l').replace('reel/', 'p/')}
                    alt={video.title}
                    className="mvth-img"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = 'none';
                    }}
                  />
                  <div className="mvth-play">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </div>
                  <div className="mvth-label">View on Instagram</div>
                </a>

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
