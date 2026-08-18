import React from 'react';
import { Smartphone, Users, ArrowUpRight } from 'lucide-react';
import { YoutubeIcon, TelegramIcon, InstagramIcon } from './ui/Icons';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { COMMUNITY_CHANNELS } from '../data/content';

const iconMap = {
  Youtube: YoutubeIcon,
  Send: TelegramIcon,
  Instagram: InstagramIcon,
  Smartphone: Smartphone
};

export function Community() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="community" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Connect & Grow"
            badgeIcon={Users}
            title="Join the Trading"
            titleHighlight="Community."
            subtitle="Connect across all our verified platforms for daily market commentary, chart setups, live discussions, and course access."
          />

          <div className="community-grid">
            {COMMUNITY_CHANNELS.map((channel, idx) => {
              const IconComp = iconMap[channel.icon] || TelegramIcon;
              return (
                <Card
                  key={channel.name}
                  className={`community-card delay-${(idx + 1) * 100}`}
                >
                  <div
                    className="community-icon-box"
                    style={{
                      background: `rgba(${channel.name === 'YouTube' ? '255,0,0' : channel.name === 'Telegram' ? '34,158,217' : channel.name === 'Instagram' ? '225,48,108' : '245,158,11'}, 0.12)`,
                      border: `1px solid rgba(${channel.name === 'YouTube' ? '255,0,0' : channel.name === 'Telegram' ? '34,158,217' : channel.name === 'Instagram' ? '225,48,108' : '245,158,11'}, 0.3)`,
                      color: channel.accentColor
                    }}
                  >
                    <IconComp size={28} />
                  </div>

                  <h3 className="community-title">{channel.name}</h3>
                  <div className="community-stat">{channel.stat}</div>
                  <p className="community-desc">{channel.desc}</p>

                  {/* PLACEHOLDER LINK: Connected for client to swap with exact URLs */}
                  <Button
                    href={channel.url}
                    target="_blank"
                    variant={idx === 0 ? 'primary' : 'secondary'}
                    size="sm"
                    className="community-link-btn"
                  >
                    {channel.buttonText}
                    <ArrowUpRight size={15} />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
