import React, { useState } from 'react';
import { Play, Pause, Eye, Clock, ArrowRight, ExternalLink, Sparkles, Volume2, Maximize2, CheckCircle2 } from 'lucide-react';
import { YoutubeIcon } from './ui/Icons';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { YOUTUBE_VIDEOS, BRAND_INFO } from '../data/content';

/**
 * Thumbnail SVG generator for realistic trading chart video thumbnails
 */
function VideoThumbnailSVG({ topic, title }) {
  return (
    <svg
      viewBox="0 0 400 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="video-thumb-img"
    >
      <rect width="400" height="225" fill="#0E1217" />
      <line x1="0" y1="56" x2="400" y2="56" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="0" y1="112" x2="400" y2="112" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="0" y1="168" x2="400" y2="168" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      
      <g opacity="0.6">
        <line x1="50" y1="140" x2="50" y2="80" stroke="#10B981" strokeWidth="2" />
        <rect x="42" y="95" width="16" height="35" rx="2" fill="#10B981" />

        <line x1="100" y1="160" x2="100" y2="110" stroke="#EF4444" strokeWidth="2" />
        <rect x="92" y="120" width="16" height="30" rx="2" fill="#EF4444" />

        <line x1="150" y1="130" x2="150" y2="60" stroke="#10B981" strokeWidth="2" />
        <rect x="142" y="75" width="16" height="40" rx="2" fill="#10B981" />

        <line x1="200" y1="110" x2="200" y2="40" stroke="#10B981" strokeWidth="2" />
        <rect x="192" y="55" width="16" height="45" rx="2" fill="#10B981" />

        <line x1="250" y1="150" x2="250" y2="90" stroke="#EF4444" strokeWidth="2" />
        <rect x="242" y="100" width="16" height="35" rx="2" fill="#EF4444" />

        <line x1="300" y1="100" x2="300" y2="30" stroke="#10B981" strokeWidth="2" />
        <rect x="292" y="45" width="16" height="45" rx="2" fill="#10B981" />

        <line x1="350" y1="80" x2="350" y2="20" stroke="#F59E0B" strokeWidth="2" />
        <rect x="342" y="30" width="16" height="40" rx="2" fill="#F59E0B" />
      </g>

      <path
        d="M 30 140 Q 120 130 180 80 T 370 35"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <rect x="16" y="16" width="150" height="28" rx="6" fill="rgba(11,13,16,0.85)" stroke="rgba(245,158,11,0.3)" />
      <text x="26" y="34" fill="#FBBF24" fontSize="11" fontWeight="bold" fontFamily="Outfit, sans-serif">TRADING TECHSTREET</text>
      
      <rect x="16" y="180" width="110" height="26" rx="4" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.4)" />
      <text x="26" y="197" fill="#FFF" fontSize="10" fontWeight="bold" fontFamily="Plus Jakarta Sans, sans-serif">{topic.toUpperCase()}</text>
    </svg>
  );
}

export function YouTubeSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState('01:15');

  const chapters = [
    { time: '00:00', label: 'Introduction & Market Bias' },
    { time: '05:30', label: 'Identifying Institutional Liquidity' },
    { time: '14:20', label: 'Candlestick Entry Trigger Rules' },
    { time: '22:15', label: 'Live Execution & Risk Management' }
  ];

  return (
    <section id="youtube" className="section-wrapper" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(20, 24, 30, 0.4) 50%, transparent 100%)' }}>
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Free Market Lessons"
            badgeIcon={YoutubeIcon}
            title="Learn. Analyze."
            titleHighlight="Trade."
            subtitle={`Join over ${BRAND_INFO.youtubeSubscribers} traders learning disciplined price action breakdowns and risk management strategies on YouTube.`}
          />

          <div className="youtube-grid">
            {YOUTUBE_VIDEOS.map((video, idx) => (
              <Card
                key={video.id}
                className={`video-card delay-${(idx % 3 + 1) * 100}`}
                onClick={() => {
                  setSelectedVideo(video);
                  setIsPlaying(true);
                }}
              >
                {/* Video Thumbnail with Play Overlay */}
                <div className="video-thumb-container">
                  <VideoThumbnailSVG topic={video.topic} title={video.title} />
                  <div className="video-play-overlay" aria-label={video.altText}>
                    <div className="video-play-btn">
                      <Play size={22} fill="#0B0D10" stroke="none" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>
                  <span className="video-duration-tag">{video.duration}</span>
                </div>

                {/* Video Details */}
                <div className="video-body">
                  <span className="video-topic-tag">{video.badge}</span>
                  <h3 className="video-title">{video.title}</h3>
                  
                  <div className="video-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Eye size={14} />
                      {video.views}
                    </span>
                    <span style={{ color: 'var(--accent-gold-light)', fontWeight: 600 }}>
                      Watch Masterclass →
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* YouTube Channel Action Button */}
          <div className="youtube-cta-wrap">
            <Button
              href="https://youtube.com/@tradingtechstreet"
              target="_blank"
              variant="primary"
              size="lg"
              magnetic={true}
              ariaLabel="Watch more videos on YouTube channel"
            >
              <YoutubeIcon size={20} />
              Watch More on YouTube (950K+ Subscribers) →
            </Button>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '12px' }}>
              Over 500+ free educational lessons covering live chart breakdowns & trading psychology
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Masterclass Video Player Modal */}
      <Modal
        isOpen={Boolean(selectedVideo)}
        onClose={() => {
          setSelectedVideo(null);
          setIsPlaying(false);
        }}
        title={selectedVideo ? selectedVideo.title : ''}
      >
        {selectedVideo && (
          <div>
            {/* Simulated Live Player Frame */}
            <div className="player-modal-screen">
              <VideoThumbnailSVG topic={selectedVideo.topic} title={selectedVideo.title} />
              
              {/* Overlay Player Controls */}
              <div className="player-controls-overlay">
                <button
                  type="button"
                  className="player-play-circle"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={24} fill="#0B0D10" /> : <Play size={24} fill="#0B0D10" style={{ marginLeft: '3px' }} />}
                </button>

                <div className="player-bottom-bar">
                  <div className="player-scrub-track">
                    <div className="player-scrub-fill" style={{ width: '42%' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', fontSize: '0.78rem', color: '#FFF' }}>
                    <span>09:45 / {selectedVideo.duration}</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Volume2 size={16} />
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Topic & Metadata */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '18px 0 12px 0' }}>
              <span className="course-level-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold-light)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                {selectedVideo.topic} • {selectedVideo.views}
              </span>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Duration: {selectedVideo.duration}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6, fontSize: '0.92rem' }}>
              {selectedVideo.summary}
            </p>

            {/* Interactive Timestamp Chapter Markers */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                Key Chapter Markers:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {chapters.map((chap) => (
                  <button
                    key={chap.time}
                    type="button"
                    className={`player-chapter-btn ${activeChapter === chap.time ? 'active' : ''}`}
                    onClick={() => setActiveChapter(chap.time)}
                  >
                    <span className="chapter-time">{chap.time}</span>
                    <span className="chapter-label">{chap.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
              <Button variant="secondary" size="sm" onClick={() => setSelectedVideo(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="https://youtube.com/@tradingtechstreet"
                target="_blank"
              >
                Watch on YouTube Channel
                <ExternalLink size={15} />
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
