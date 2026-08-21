import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiActivity,
  FiAward,
  FiPlayCircle,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import "../gameBuilder/GameBuilder.css";
import "./Analytics.css";

const kpis = [
  { label: "Total Players", value: "34,256", delta: "+12.5%", color: "#3b82f6" },
  { label: "Total Game Plays", value: "502,144", delta: "+28.3%", color: "#a855f7" },
  { label: "Total Revenue", value: "23,430 BET", delta: "+18.7%", color: "#f59e0b" },
  { label: "Active Players (24h)", value: "5,421", delta: "+9.2%", color: "#14b8a6" },
];

const live = [
  { user: "NovaX", text: "played Roulette", ago: "2 min ago", icon: <FiPlayCircle />, bg: "rgba(59,130,246,0.18)", color: "#60a5fa" },
  { user: "OrbitQueen", text: "won 125 BET", ago: "4 min ago", icon: <FiAward />, bg: "rgba(34,197,94,0.18)", color: "#4ade80" },
  { user: "MetaWolf", text: "staked 1,000 BET", ago: "7 min ago", icon: <FiTrendingUp />, bg: "rgba(168,85,247,0.18)", color: "#c084fc" },
  { user: "ChainBoo", text: "referred a new player", ago: "12 min ago", icon: <FiUsers />, bg: "rgba(245,158,11,0.18)", color: "#fbbf24" },
  { user: "PixelFox", text: "deployed a new game", ago: "18 min ago", icon: <FiActivity />, bg: "rgba(14,165,233,0.18)", color: "#38bdf8" },
];

const playersByGame = [
  { label: "Roulette", value: "28.4%", color: "#3b82f6" },
  { label: "Slots", value: "24.1%", color: "#a855f7" },
  { label: "Blackjack", value: "18.6%", color: "#14b8a6" },
  { label: "Prediction", value: "16.2%", color: "#f59e0b" },
  { label: "Other", value: "12.7%", color: "#64748b" },
];

const devices = [
  { label: "Desktop", value: "52.3%", color: "#3b82f6" },
  { label: "Mobile", value: "38.7%", color: "#60a5fa" },
  { label: "Tablet", value: "6.1%", color: "#93c5fd" },
  { label: "Others", value: "2.9%", color: "#1e3a8a" },
];

const topGames = [
  { rank: 1, name: "My Adventure", players: "12,430", plays: "84,210", revenue: "8,420 BET", delta: "+14.2%" },
  { rank: 2, name: "BetRoulette", players: "9,870", plays: "71,540", revenue: "6,180 BET", delta: "+9.8%" },
  { rank: 3, name: "Crypto Runner", players: "7,640", plays: "52,110", revenue: "4,905 BET", delta: "+11.4%" },
  { rank: 4, name: "Blackjack Pro", players: "5,210", plays: "39,880", revenue: "3,925 BET", delta: "+6.1%" },
];

const bars = [
  { label: "Roulette", h: "78%", color: "#3b82f6" },
  { label: "Slots", h: "64%", color: "#a855f7" },
  { label: "Blackjack", h: "52%", color: "#14b8a6" },
  { label: "Prediction", h: "46%", color: "#f59e0b" },
  { label: "Other", h: "34%", color: "#64748b" },
];

const Analytics = () => {
  const [tab, setTab] = useState("Players");

  return (
    <div className="cf-analytics">
      <Helmet>
        <title>Cafrino | Analytics Dashboard</title>
      </Helmet>

      <div className="cf-analytics-head">
        <h1>
          Analytics <span>Dashboard</span>
        </h1>
        <div className="cf-date-pill">May 1, 2024 - May 31, 2024</div>
      </div>

      <section className="cf-kpi-grid">
        {kpis.map((k) => (
          <article key={k.label} className="cf-kpi-card">
            <span>{k.label}</span>
            <strong>{k.value}</strong>
            <small>{k.delta}</small>
            <div className="cf-kpi-spark" style={{ borderBottomColor: k.color }} />
          </article>
        ))}
      </section>

      <section className="cf-analytics-main">
        <div className="cf-chart-card">
          <h3>Performance Overview</h3>
          <div className="cf-chart-tabs">
            {["Players", "Game Plays", "Revenue"].map((t) => (
              <button
                key={t}
                type="button"
                className={tab === t ? "active" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="cf-area-chart">
            <svg viewBox="0 0 600 260" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(0,102,255,0.45)" />
                  <stop offset="100%" stopColor="rgba(0,102,255,0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,190 C60,170 90,210 140,150 C190,90 230,120 280,100 C330,80 370,130 420,90 C470,50 520,70 600,40 L600,260 L0,260 Z"
                fill="url(#areaFill)"
              />
              <path
                d="M0,190 C60,170 90,210 140,150 C190,90 230,120 280,100 C330,80 370,130 420,90 C470,50 520,70 600,40"
                fill="none"
                stroke="#4ea1ff"
                strokeWidth="3"
              />
            </svg>
            <div className="cf-chart-tooltip">May 15, 2024: 12,452 {tab.toLowerCase()}</div>
          </div>
        </div>

        <div className="cf-live-card">
          <h3>Live Activity</h3>
          <ul className="cf-live-list">
            {live.map((item) => (
              <li key={`${item.user}-${item.text}`}>
                <div
                  className="cf-live-icon"
                  style={{ background: item.bg, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <strong>{item.user}</strong>
                  <p>{item.text}</p>
                </div>
                <time>{item.ago}</time>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cf-bottom-grid">
        <div className="cf-donut-card">
          <h3>Players by Game</h3>
          <div className="cf-donut-row">
            <div
              className="cf-donut-ring"
              style={{
                background:
                  "conic-gradient(#3b82f6 0 28.4%, #a855f7 28.4% 52.5%, #14b8a6 52.5% 71.1%, #f59e0b 71.1% 87.3%, #64748b 87.3% 100%)",
              }}
            />
            <ul className="cf-legend">
              {playersByGame.map((p) => (
                <li key={p.label}>
                  <span>
                    <i style={{ background: p.color }} />
                    {p.label}
                  </span>
                  <strong>{p.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cf-donut-card">
          <h3>Device Distribution</h3>
          <div className="cf-donut-row">
            <div
              className="cf-donut-ring"
              style={{
                background:
                  "conic-gradient(#3b82f6 0 52.3%, #60a5fa 52.3% 91%, #93c5fd 91% 97.1%, #1e3a8a 97.1% 100%)",
              }}
            />
            <ul className="cf-legend">
              {devices.map((p) => (
                <li key={p.label}>
                  <span>
                    <i style={{ background: p.color }} />
                    {p.label}
                  </span>
                  <strong>{p.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cf-map-card">
          <h3>Geographic Distribution</h3>
          <div className="cf-map-visual" />
          <div className="cf-map-legend">
            <span>Asia</span>
            <span>Europe</span>
            <span>North America</span>
            <span>LatAm</span>
            <span>Other</span>
          </div>
        </div>
      </section>

      <section className="cf-lower-grid">
        <div className="cf-table-card">
          <h3>Top Performing Games</h3>
          <table className="cf-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Game</th>
                <th>Players</th>
                <th>Game Plays</th>
                <th>Revenue</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {topGames.map((g) => (
                <tr key={g.name}>
                  <td>#{g.rank}</td>
                  <td>{g.name}</td>
                  <td>{g.players}</td>
                  <td>{g.plays}</td>
                  <td>{g.revenue}</td>
                  <td className="cf-delta">{g.delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cf-bars-card">
          <h3>Revenue Breakdown</h3>
          <div className="cf-bars">
            {bars.map((b) => (
              <div
                key={b.label}
                className="cf-bar"
                style={{ height: b.h, background: b.color }}
              >
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
