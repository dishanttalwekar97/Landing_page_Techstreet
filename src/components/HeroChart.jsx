import React, { useState, useEffect, useRef } from 'react';
import { Layers, Activity, TrendingUp, TrendingDown, Eye, Sliders, Shield, Zap, Sparkles } from 'lucide-react';

const TIMEFRAMES = [
  { id: '1m', label: '1m', title: 'XAU/USD (Gold) • 1M SCALP' },
  { id: '5m', label: '5m', title: 'XAU/USD (Gold) • 5M INTRADAY' },
  { id: '15m', label: '15m', title: 'XAU/USD (Gold) • 15M LONDON/NY' },
  { id: '1H', label: '1H', title: 'XAU/USD (Gold) • 1H SWING BIAS' },
  { id: '1D', label: '1D', title: 'XAU/USD (Gold) • 1D MACRO' }
];

export function HeroChart() {
  const [activeTf, setActiveTf] = useState('15m');
  const [showEma, setShowEma] = useState(true);
  const [showSmc, setShowSmc] = useState(true);
  const [showVolume, setShowVolume] = useState(true);
  const [livePrice, setLivePrice] = useState(2485.40);
  const [priceChange, setPriceChange] = useState('+0.42%');
  const [hoveredCandle, setHoveredCandle] = useState(null);
  const canvasRef = useRef(null);

  // Spot Gold Simulated Dynamic Candlestick Sequence
  const candles = [
    { open: 2470.2, high: 2474.5, low: 2468.8, close: 2473.1, vol: 65, isGreen: true, time: '09:00' },
    { open: 2473.1, high: 2476.0, low: 2471.0, close: 2475.4, vol: 80, isGreen: true, time: '09:15' },
    { open: 2475.4, high: 2478.2, low: 2472.5, close: 2473.0, vol: 95, isGreen: false, time: '09:30' },
    { open: 2473.0, high: 2474.0, low: 2468.2, close: 2469.5, vol: 110, isGreen: false, isDemand: true, time: '09:45' },
    { open: 2469.5, high: 2476.8, low: 2468.0, close: 2476.0, vol: 140, isGreen: true, isSweep: true, time: '10:00' },
    { open: 2476.0, high: 2482.5, low: 2475.2, close: 2481.8, vol: 160, isGreen: true, time: '10:15' },
    { open: 2481.8, high: 2486.0, low: 2480.0, close: 2484.5, vol: 130, isGreen: true, time: '10:30' },
    { open: 2484.5, high: 2488.4, low: 2483.0, close: 2487.2, vol: 120, isGreen: true, time: '10:45' },
    { open: 2487.2, high: 2496.8, low: 2486.5, close: 2495.0, vol: 175, isGreen: true, isSupply: true, time: '11:00' },
    { open: 2495.0, high: 2495.5, low: 2489.0, close: 2490.2, vol: 140, isGreen: false, time: '11:15' },
    { open: 2490.2, high: 2491.5, low: 2484.0, close: 2485.4, vol: 155, isGreen: false, isLive: true, time: '11:30' }
  ];

  // Micro tick pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrice((prev) => {
        const delta = (Math.random() - 0.48) * 0.45;
        const newPrice = Number((prev + delta).toFixed(2));
        return newPrice;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Canvas Candlestick Rendering Engine with Retina Crispness
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight - 130;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;
    for (let y = 30; y < height; y += 45) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const minPrice = 2465;
    const maxPrice = 2500;
    const priceRange = maxPrice - minPrice;
    const getY = (price) => height - ((price - minPrice) / priceRange) * (height - 60) - 30;

    // Draw Institutional SMC Order Block Zones
    if (showSmc) {
      // Supply Zone (Amber / Gold fill)
      const supplyY = getY(2496.8);
      ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
      ctx.fillRect(0, supplyY - 6, width, 24);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(0, supplyY - 6, width, 24);

      ctx.fillStyle = '#FBBF24';
      ctx.font = 'bold 10px Plus Jakarta Sans, sans-serif';
      ctx.setLineDash([]);
      ctx.fillText('INSTITUTIONAL SUPPLY (ORDER BLOCK) • $2,496.80', width - 290, supplyY + 10);

      // Demand Zone (Green fill)
      const demandY = getY(2468.2);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.fillRect(0, demandY - 6, width, 22);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(0, demandY - 6, width, 22);

      ctx.fillStyle = '#10B981';
      ctx.fillText('LIQUIDITY DEMAND SWEEP • $2,468.20', 20, demandY + 10);
      ctx.setLineDash([]);
    }

    // Draw EMA Ribbon Curve
    if (showEma) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.5)';
      ctx.shadowBlur = 10;

      candles.forEach((c, idx) => {
        const x = (width / (candles.length + 1)) * (idx + 1);
        const y = getY((c.high + c.low + c.close) / 3);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Draw Volume Histogram & Candlesticks
    const candleWidth = Math.max(14, Math.min(26, width / (candles.length * 2.2)));
    candles.forEach((c, idx) => {
      const x = (width / (candles.length + 1)) * (idx + 1);
      const openY = getY(c.open);
      const closeY = getY(c.close);
      const highY = getY(c.high);
      const lowY = getY(c.low);
      const isGreen = c.close >= c.open;

      // Volume Bar at Bottom
      if (showVolume) {
        const volHeight = (c.vol / 200) * 45;
        ctx.fillStyle = isGreen ? 'rgba(16, 185, 129, 0.22)' : 'rgba(239, 68, 68, 0.22)';
        ctx.fillRect(x - candleWidth / 2, height - volHeight, candleWidth, volHeight);
      }

      // Candlestick Wick
      ctx.strokeStyle = isGreen ? '#10B981' : '#EF4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.stroke();

      // Candlestick Body
      ctx.fillStyle = isGreen ? '#10B981' : '#EF4444';
      const bodyY = Math.min(openY, closeY);
      const bodyH = Math.max(4, Math.abs(closeY - openY));
      ctx.fillRect(x - candleWidth / 2, bodyY, candleWidth, bodyH);

      // Highlight Live Candle with Glowing Pulse
      if (c.isLive) {
        ctx.strokeStyle = '#FBBF24';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x - candleWidth / 2 - 3, bodyY - 3, candleWidth + 6, bodyH + 6);
      }
    });
  }, [showEma, showSmc, showVolume, activeTf, livePrice]);

  return (
    <div className="hero-chart-terminal">
      {/* Terminal Top Bar */}
      <div className="terminal-header">
        <div className="terminal-brand-meta">
          <div className="terminal-status-dot" />
          <span className="terminal-asset-name">XAU/USD (Gold)</span>
          <span className="terminal-badge-live">SPOT LIVE</span>
          <span style={{ fontFamily: 'Space Grotesk, monospace', fontSize: '0.94rem', fontWeight: 800, color: '#FFFFFF', marginLeft: '6px' }}>
            ${livePrice.toFixed(2)}
          </span>
          <span style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 700 }}>
            {priceChange}
          </span>
        </div>

        {/* Timeframe Switcher */}
        <div className="terminal-tf-group">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf.id}
              type="button"
              className={`terminal-tf-btn ${activeTf === tf.id ? 'active' : ''}`}
              onClick={() => setActiveTf(tf.id)}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Indicator Controls Ribbon */}
      <div className="terminal-indicators-bar">
        <button
          type="button"
          className={`indicator-toggle-btn ${showEma ? 'active' : ''}`}
          onClick={() => setShowEma(!showEma)}
        >
          <Sparkles size={12} color={showEma ? '#F59E0B' : '#6B7280'} />
          EMA Ribbon
        </button>

        <button
          type="button"
          className={`indicator-toggle-btn ${showSmc ? 'active' : ''}`}
          onClick={() => setShowSmc(!showSmc)}
        >
          <Layers size={12} color={showSmc ? '#10B981' : '#6B7280'} />
          SMC Supply / Demand
        </button>

        <button
          type="button"
          className={`indicator-toggle-btn ${showVolume ? 'active' : ''}`}
          onClick={() => setShowVolume(!showVolume)}
        >
          <Activity size={12} color={showVolume ? '#06B6D4' : '#6B7280'} />
          Volume Depth
        </button>
      </div>

      {/* Canvas Viewport */}
      <div style={{ flexGrow: 1, position: 'relative', width: '100%' }}>
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>

      {/* Real-time Order Flow Depth Gauge */}
      <div className="terminal-depth-meter">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="depth-label">BUY PRESSURE</span>
          <span style={{ color: '#10B981', fontFamily: 'Space Grotesk, monospace' }}>74%</span>
        </div>

        <div className="depth-bar-wrap">
          <div className="depth-bar-fill-green" style={{ width: '74%' }} />
          <div className="depth-bar-fill-red" style={{ width: '26%' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#EF4444', fontFamily: 'Space Grotesk, monospace' }}>26%</span>
          <span className="depth-label">SELL PRESSURE</span>
        </div>
      </div>
    </div>
  );
}
