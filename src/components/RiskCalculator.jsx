import React, { useState } from 'react';
import { Calculator, ShieldCheck, AlertCircle, ArrowRight, RotateCcw, Copy, Check, TrendingUp, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { useInView } from '../hooks/useInView';

export function RiskCalculator() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  // State
  const [accountSize, setAccountSize] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(1.0);
  const [entryPrice, setEntryPrice] = useState(2485.40);
  const [stopLoss, setStopLoss] = useState(2475.00);
  const [targetPrice, setTargetPrice] = useState(2515.00);
  const [copied, setCopied] = useState(false);

  // Calculations
  const riskAmount = (accountSize * (riskPercent / 100));
  const stopLossDistance = Math.abs(entryPrice - stopLoss) || 0.01;
  const targetDistance = Math.abs(targetPrice - entryPrice) || 0.01;
  const positionSizeUnits = Math.floor(riskAmount / stopLossDistance);
  const capitalDeployed = (positionSizeUnits * entryPrice);
  const potentialProfit = (positionSizeUnits * targetDistance);
  const rrRatio = Number((targetDistance / stopLossDistance).toFixed(2));

  const isSafeRisk = riskPercent <= 2.0;
  const isGoodRR = rrRatio >= 2.0;

  const handleCopyPlan = () => {
    const text = `🎯 TRADING TECHSTREET ORDER PLAN\nAsset: XAU/USD (Gold)\nEntry: $${entryPrice.toFixed(2)}\nStop Loss: $${stopLoss.toFixed(2)} (-$${riskAmount.toLocaleString('en-IN')})\nTarget: $${targetPrice.toFixed(2)} (+$${potentialProfit.toLocaleString('en-IN')})\nQty: ${positionSizeUnits} Units | R:R: 1:${rrRatio}\nRisk Mode: ${riskPercent}% Capital`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Interactive Pro Tool"
            badgeIcon={Calculator}
            title="Institutional Risk &"
            titleHighlight="Position Size Engine."
            subtitle="Never risk arbitrary numbers. Calculate mathematically precise position sizing, capital allocation, and asymmetric Risk-to-Reward before placing any trade."
          />

          <Card className="calculator-container" enableGlow={true}>
            <div className="calculator-grid">
              {/* Left Column: Input Parameters */}
              <div className="calc-inputs-col">
                <div className="calc-header-badge">
                  <span>TRADE PARAMETERS & CAPITAL ALLOCATION</span>
                </div>

                {/* 1. Account Size */}
                <div className="calc-field">
                  <div className="calc-label-row">
                    <span>Account Size (Capital)</span>
                    <span className="calc-val-pill">₹{accountSize.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="5000"
                    value={accountSize}
                    onChange={(e) => setAccountSize(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="calc-presets">
                    {[25000, 50000, 100000, 500000, 1000000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`preset-btn ${accountSize === preset ? 'active' : ''}`}
                        onClick={() => setAccountSize(preset)}
                      >
                        ₹{(preset / 1000).toFixed(0)}k
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Risk Percentage */}
                <div className="calc-field">
                  <div className="calc-label-row">
                    <span>Risk Per Trade (%)</span>
                    <span className={`calc-val-pill ${isSafeRisk ? 'safe' : 'warning'}`}>
                      {riskPercent.toFixed(1)}% ({isSafeRisk ? 'Optimal Discipline' : 'Aggressive'})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="calc-presets">
                    {[0.5, 1.0, 1.5, 2.0, 3.0].map((r) => (
                      <button
                        key={r}
                        type="button"
                        className={`preset-btn ${riskPercent === r ? 'active' : ''}`}
                        onClick={() => setRiskPercent(r)}
                      >
                        {r}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Trade Prices (Entry, SL, TP) */}
                <div className="calc-price-inputs-grid">
                  <div className="calc-price-box">
                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 600 }}>Entry Price ($)</label>
                    <div className="calc-input-wrapper">
                      <span className="currency-symbol">$</span>
                      <input
                        type="number"
                        value={entryPrice}
                        onChange={(e) => setEntryPrice(Number(e.target.value))}
                        className="calc-number-input"
                      />
                    </div>
                  </div>

                  <div className="calc-price-box">
                    <label style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 600 }}>Stop Loss ($)</label>
                    <div className="calc-input-wrapper" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                      <span className="currency-symbol">$</span>
                      <input
                        type="number"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(Number(e.target.value))}
                        className="calc-number-input"
                      />
                    </div>
                  </div>

                  <div className="calc-price-box">
                    <label style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 600 }}>Target ($)</label>
                    <div className="calc-input-wrapper" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                      <span className="currency-symbol">$</span>
                      <input
                        type="number"
                        value={targetPrice}
                        onChange={(e) => setTargetPrice(Number(e.target.value))}
                        className="calc-number-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Output Card */}
              <div className="calc-outputs-col">
                {/* Highlighted Recommended Quantity */}
                <div className="calc-highlight-box">
                  <div className="calc-highlight-label">RECOMMENDED POSITION QUANTITY</div>
                  <div className="calc-highlight-val">
                    {positionSizeUnits.toLocaleString('en-IN')}{' '}
                    <span style={{ fontSize: '1rem', color: 'var(--accent-gold-light)' }}>Units / Shares</span>
                  </div>
                  <div className="calc-highlight-sub">
                    Risking exactly ₹{riskAmount.toLocaleString('en-IN')} (1% Capital Rule)
                  </div>
                </div>

                {/* Mathematical Metrics Grid */}
                <div className="calc-metrics-grid">
                  <div className="calc-metric-card">
                    <span className="calc-metric-title">Max Loss Risked</span>
                    <span className="calc-metric-num negative">
                      -₹{riskAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="calc-metric-desc">Defined by SL distance</span>
                  </div>

                  <div className="calc-metric-card">
                    <span className="calc-metric-title">Potential Take Profit</span>
                    <span className="calc-metric-num positive">
                      +₹{potentialProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </span>
                    <span className="calc-metric-desc">Target reward potential</span>
                  </div>

                  <div className="calc-metric-card">
                    <span className="calc-metric-title">Risk-to-Reward Ratio</span>
                    <span className={`calc-metric-num ${isGoodRR ? 'positive' : 'negative'}`}>
                      1 : {rrRatio}
                    </span>
                    <span className="calc-metric-desc">{isGoodRR ? '✓ Favorable Asymmetry' : '⚠️ Sub-optimal R:R (< 1:2)'}</span>
                  </div>

                  <div className="calc-metric-card">
                    <span className="calc-metric-title">Capital Deployed</span>
                    <span className="calc-metric-num gold">
                      ${capitalDeployed.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                    <span className="calc-metric-desc">Total contract exposure</span>
                  </div>
                </div>

                {/* Copy Trade Plan & Rule Status */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={handleCopyPlan}
                    className="btn btn-secondary btn-sm"
                    style={{ flexGrow: 1 }}
                  >
                    {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                    <span>{copied ? 'Order Plan Copied!' : 'Copy Trade Order Plan'}</span>
                  </button>

                  <div className="calc-rule-status" style={{ padding: '8px 14px' }}>
                    <ShieldCheck size={16} color={isSafeRisk && isGoodRR ? '#10B981' : '#F59E0B'} />
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#FFF' }}>
                      {isSafeRisk && isGoodRR ? 'Institutional Rule Passed' : 'Adjust SL/TP For 1:2+ R:R'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
