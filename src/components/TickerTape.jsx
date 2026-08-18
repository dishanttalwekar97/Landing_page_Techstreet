import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TICKER_ITEMS } from '../data/content';

/**
 * Top Ticker Tape Bar
 * Clean edge-to-edge infinite market ticker scroll.
 */
export function TickerTape() {
  const displayItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-tape-wrapper" aria-label="Live Market Feeds">
      {/* Marquee Track running edge-to-edge */}
      <div className="ticker-track-container">
        <div className="ticker-tape-track">
          {displayItems.map((item, idx) => (
            <div key={`${item.symbol}-${idx}`} className="ticker-item">
              <span className="ticker-category">{item.category}</span>
              <span className="ticker-symbol">{item.symbol}</span>
              <span className="ticker-price">{item.price}</span>
              <span className={`ticker-change ${item.isPositive ? 'positive' : 'negative'}`}>
                {item.isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
