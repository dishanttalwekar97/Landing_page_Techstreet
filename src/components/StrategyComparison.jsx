import React, { useState } from 'react';
import { Eye, Sliders, CheckCircle2, AlertTriangle, ArrowLeftRight, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

/**
 * Interactive Split-Screen Strategy Comparison
 * Demonstrates: Retail Indicator Clutter vs. Trading Techstreet Institutional Clarity
 */
export function StrategyComparison() {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%

  return (
    <section id="methodology-comparison" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Visual Transformation"
            badgeIcon={ArrowLeftRight}
            title="The Shift From Confusion To"
            titleHighlight="Crystal Clarity."
            subtitle="Drag the interactive slider below to see how Trading Techstreet eliminates indicator clutter and unlocks institutional price action."
          />

          <Card className="comparison-card-container" enableGlow={false}>
            {/* Top Status Header */}
            <div className="comparison-header-row">
              <div className="comparison-side-label retail">
                <AlertTriangle size={15} color="#EF4444" />
                <span>RETAIL TRADER (5+ LAGGING INDICATORS)</span>
              </div>
              <div className="comparison-drag-hint">
                <ArrowLeftRight size={14} />
                <span>DRAG SLIDER TO COMPARE</span>
              </div>
              <div className="comparison-side-label pro">
                <Sparkles size={15} color="#F59E0B" />
                <span>TRADING TECHSTREET (CLEAN SMC & RISK)</span>
              </div>
            </div>

            {/* Interactive Split Viewport */}
            <div className="comparison-viewport">
              {/* Left Canvas Graphic: Retail Clutter */}
              <div className="comparison-pane pane-retail">
                <svg viewBox="0 0 800 450" className="comparison-svg" preserveAspectRatio="none">
                  <rect width="800" height="450" fill="#0A0D12" />
                  
                  {/* Confusing Multi-colored Indicator Lines everywhere */}
                  <g opacity="0.45">
                    {/* Bollinger Bands */}
                    <path d="M0,120 Q200,60 400,160 T800,90" fill="none" stroke="#06B6D4" strokeWidth="2" />
                    <path d="M0,280 Q200,220 400,320 T800,250" fill="none" stroke="#06B6D4" strokeWidth="2" />
                    <path d="M0,200 Q200,140 400,240 T800,170" fill="none" stroke="#EC4899" strokeWidth="2.5" strokeDasharray="5,5" />
                    {/* Moving Averages */}
                    <path d="M0,180 Q250,90 500,280 T800,120" fill="none" stroke="#EAB308" strokeWidth="2" />
                    <path d="M0,240 Q180,180 450,140 T800,210" fill="none" stroke="#A855F7" strokeWidth="2" />
                    <path d="M0,150 Q300,290 600,100 T800,260" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                    {/* Parabolic SAR Dots */}
                    {[...Array(20)].map((_, i) => (
                      <circle key={i} cx={40 * i} cy={160 + Math.sin(i) * 60} r="3" fill="#EF4444" />
                    ))}
                  </g>

                  {/* Obscured Candlesticks */}
                  <g opacity="0.35">
                    {[...Array(16)].map((_, i) => (
                      <rect key={i} x={48 * i + 20} y={150 + (i % 3) * 30} width="16" height="50" fill={i % 2 === 0 ? '#10B981' : '#EF4444'} />
                    ))}
                  </g>

                  {/* Conflicting RSI / MACD sub-windows */}
                  <line x1="0" y1="340" x2="800" y2="340" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <path d="M0,390 Q200,350 400,430 T800,370" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  <text x="30" y="365" fill="#EF4444" fontSize="13" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    ⚠️ 5 Conflicting Indicator Signals • Late Entries • Constant False Alarms
                  </text>
                </svg>
              </div>

              {/* Right Canvas Graphic: Institutional Clean Setup (Clipped by slider) */}
              <div
                className="comparison-pane pane-pro"
                style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
              >
                <svg viewBox="0 0 800 450" className="comparison-svg" preserveAspectRatio="none">
                  <rect width="800" height="450" fill="#0C0F14" />
                  
                  {/* Clean Background Grid */}
                  <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="220" x2="800" y2="220" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="340" x2="800" y2="340" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Institutional Order Block Zone */}
                  <rect x="260" y="70" width="380" height="50" rx="4" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" strokeDasharray="4 4" />
                  <text x="275" y="100" fill="#FBBF24" fontSize="12" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    🎯 INSTITUTIONAL SUPPLY ZONE (ORDER BLOCK)
                  </text>

                  {/* Clean Candlesticks */}
                  <g>
                    {/* Bullish Run */}
                    <rect x="80" y="260" width="22" height="60" rx="2" fill="#10B981" />
                    <line x1="91" y1="240" x2="91" y2="340" stroke="#10B981" strokeWidth="2" />

                    <rect x="150" y="210" width="22" height="70" rx="2" fill="#10B981" />
                    <line x1="161" y1="190" x2="161" y2="300" stroke="#10B981" strokeWidth="2" />

                    <rect x="220" y="140" width="22" height="85" rx="2" fill="#10B981" />
                    <line x1="231" y1="120" x2="231" y2="245" stroke="#10B981" strokeWidth="2" />

                    {/* Liquidity Sweep Wick into Order Block */}
                    <rect x="290" y="105" width="22" height="40" rx="2" fill="#10B981" />
                    <line x1="301" y1="75" x2="301" y2="165" stroke="#F59E0B" strokeWidth="2.5" />

                    {/* Clean Reversal Confirmation */}
                    <rect x="360" y="115" width="22" height="70" rx="2" fill="#EF4444" />
                    <line x1="371" y1="95" x2="371" y2="200" stroke="#EF4444" strokeWidth="2" />

                    <rect x="430" y="170" width="22" height="90" rx="2" fill="#EF4444" />
                    <line x1="441" y1="150" x2="441" y2="280" stroke="#EF4444" strokeWidth="2" />

                    <rect x="500" y="240" width="22" height="110" rx="2" fill="#EF4444" />
                    <line x1="511" y1="220" x2="511" y2="370" stroke="#EF4444" strokeWidth="2" />
                  </g>

                  {/* 1:3.5 Risk Reward Box */}
                  <rect x="390" y="90" width="280" height="26" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" />
                  <text x="405" y="108" fill="#EF4444" fontSize="11" fontWeight="bold">STOP LOSS: 15 PTS (0.8% RISK)</text>

                  <rect x="390" y="116" width="280" height="180" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" />
                  <text x="405" y="150" fill="#10B981" fontSize="12" fontWeight="bold">TARGET: 52 PTS (1 : 3.5 RISK-TO-REWARD)</text>
                  
                  {/* Clean Label */}
                  <text x="30" y="420" fill="#10B981" fontSize="13" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    ✓ Clean Candlesticks • High Probability Order Flow • Asymmetric 1:3.5 R:R Setup
                  </text>
                </svg>
              </div>

              {/* Slider Handle Line */}
              <div
                className="comparison-divider-line"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="comparison-handle-knob">
                  <ArrowLeftRight size={16} color="#0B0D10" />
                </div>
              </div>

              {/* Hidden Range Input for full touch/mouse support */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="comparison-range-controller"
                aria-label="Drag to compare retail vs institutional chart"
              />
            </div>

            {/* Bottom 3 Core Transformation Takeaways */}
            <div className="comparison-takeaways-grid">
              <div className="takeaway-box">
                <CheckCircle2 size={18} color="#10B981" />
                <div>
                  <div className="takeaway-title">Zero Indicator Dependency</div>
                  <div className="takeaway-desc">Understand why price moves directly at key institutional supply/demand zones.</div>
                </div>
              </div>

              <div className="takeaway-box">
                <CheckCircle2 size={18} color="#10B981" />
                <div>
                  <div className="takeaway-title">Institutional Liquidity Sweeps</div>
                  <div className="takeaway-desc">Stop getting stopped out where retail traders get trapped into false breakouts.</div>
                </div>
              </div>

              <div className="takeaway-box">
                <CheckCircle2 size={18} color="#10B981" />
                <div>
                  <div className="takeaway-title">Strict 1:2+ Asymmetric Math</div>
                  <div className="takeaway-desc">Preserve capital by only taking high-probability setups with tight risk definitions.</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
