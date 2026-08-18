import React from 'react';
import { ShieldCheck, TrendingUp, Award, Layers } from 'lucide-react';
import { YoutubeIcon, TelegramIcon } from './ui/Icons';

const PARTNERS = [
  { name: 'TradingView', sub: 'Verified Charting Setups', tag: 'Pine Script Compatible' },
  { name: 'YouTube Creators', sub: '950K+ Community', tag: 'Top Tier Educator' },
  { name: 'MetaTrader 5', sub: 'Multi-Asset Framework', tag: 'SMC Compatible' },
  { name: 'NSE & BSE Equities', sub: 'Index Derivatives', tag: 'BankNifty & Nifty' },
  { name: 'MCX Commodities', sub: 'Spot Gold & Crude', tag: 'XAU/USD Models' }
];

export function MediaPartners() {
  return (
    <section className="partners-strip">
      <div className="content-container">
        <div className="partners-card">
          <div className="partners-label-col">
            <ShieldCheck size={18} color="#F59E0B" />
            <span>INSTITUTIONAL ECOSYSTEM & VERIFIED FRAMEWORKS</span>
          </div>

          <div className="partners-grid">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="partner-item">
                <div className="partner-name">{partner.name}</div>
                <div className="partner-sub">{partner.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
