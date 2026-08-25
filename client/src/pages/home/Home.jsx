import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiPlus, FiUsers, FiPlay, FiDollarSign, FiBox } from "react-icons/fi";
import "../gameBuilder/GameBuilder.css";
import "../deployment/Deployment.css";
import "../analytics/Analytics.css";
import "./Home.css";

const stats = [
  { label: "Total Games", value: "12", delta: "+20%", icon: <FiBox /> },
  { label: "Total Players", value: "34,256", delta: "+12.5%", icon: <FiUsers /> },
  { label: "Total Plays", value: "502,144", delta: "+28.3%", icon: <FiPlay /> },
  { label: "Total Revenue", value: "23,430 BET", delta: "+18.7%", icon: <FiDollarSign /> },
];

const games = [
  { name: "My Adventure", type: "Platform", status: "Live", players: "12.4k", plays: "84k" },
  { name: "BetRoulette", type: "Casino", status: "Live", players: "9.8k", plays: "71k" },
  { name: "Crypto Runner", type: "Arcade", status: "Draft", players: "7.6k", plays: "52k" },
  { name: "Blackjack Pro", type: "Cards", status: "Live", players: "5.2k", plays: "39k" },
];

const activity = [
  { text: "Game deployed to Polygon", ago: "2m ago" },
  { text: "New player joined My Adventure", ago: "8m ago" },
  { text: "Contract verified on Ethereum", ago: "21m ago" },
  { text: "Template published: Slots", ago: "1h ago" },
];

const chains = [
  { name: "Polygon", state: "Connected" },
  { name: "Ethereum", state: "Connect" },
  { name: "BNB Chain", state: "Connect" },
  { name: "Arbitrum", state: "Connect" },
];

const Home = () => {
  return (
    <div className="soft-home cf-overview">
      <Helmet>
        <title>Cafrino | Overview</title>
        <meta
          name="description"
          content="Cafrino — build, deploy, and grow Web3 games from one dashboard."
        />
      </Helmet>

      <section className="cf-overview-hero">
        <div>
          <h1>
            Build Your <span>Web3 Game</span> in Minutes
          </h1>
          <p>
            Choose templates, customize assets, deploy to major chains, and track
            growth — all inside Cafrino.
          </p>
          <div className="cf-hero-actions">
            <Link to="/builder" className="cf-btn-primary">
              <FiPlus /> Create Game
            </Link>
            <Link to="/builder" className="cf-btn-ghost">
              View Templates
            </Link>
          </div>
        </div>
        <div
          className="cf-overview-visual"
          style={{ backgroundImage: 'url("/images/galaxy/main.png")' }}
          role="img"
          aria-label="Cafrino platform overview"
        />
      </section>

      <section className="cf-kpi-grid">
        {stats.map((s) => (
          <article key={s.label} className="cf-kpi-card">
            <span>{s.label}</span>
            <strong>{s.value}</strong>
            <small>{s.delta}</small>
          </article>
        ))}
      </section>

      <section className="cf-overview-grid">
        <div className="cf-panel">
          <div className="cf-section-head" style={{ marginBottom: "1rem" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Your Games</h2>
              <p>Manage drafts, live titles, and player traction.</p>
            </div>
            <Link to="/builder" className="cf-btn-soft">
              Open Builder
            </Link>
          </div>
          <div className="cf-games-cards">
            {games.map((g) => (
              <article key={g.name} className="cf-game-mini">
                <div className="cf-game-mini-thumb" />
                <div>
                  <h3>{g.name}</h3>
                  <p>
                    {g.type} · {g.players} players · {g.plays} plays
                  </p>
                </div>
                <span className={`cf-status ${g.status === "Live" ? "published" : "draft"}`}>
                  {g.status}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="cf-overview-side">
          <div className="cf-panel">
            <h3>Quick Deploy</h3>
            <div className="cf-network-status">
              {chains.map((c) => (
                <div key={c.name} className="cf-network-row">
                  <span>{c.name}</span>
                  {c.state === "Connected" ? (
                    <span className="cf-online">Connected</span>
                  ) : (
                    <Link to="/deploy" className="cf-btn-soft" style={{ padding: "0.35rem 0.65rem" }}>
                      Connect
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cf-panel">
            <h3>Recent Activity</h3>
            <ul className="cf-live-list">
              {activity.map((a) => (
                <li key={a.text}>
                  <div
                    className="cf-live-icon"
                    style={{ background: "rgba(0,102,255,0.18)", color: "#60a5fa" }}
                  >
                    <FiPlay />
                  </div>
                  <div>
                    <strong>{a.text}</strong>
                    <p>{a.ago}</p>
                  </div>
                  <span />
                </li>
              ))}
            </ul>
          </div>

          <div className="cf-panel">
            <h3>Track Growth</h3>
            <div className="cf-growth-chip">+128% this month</div>
            <div className="cf-area-chart" style={{ height: 140 }}>
              <svg viewBox="0 0 600 260" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M0,190 C80,160 120,200 180,140 C240,80 300,120 360,90 C420,60 500,90 600,40 L600,260 L0,260 Z"
                  fill="rgba(0,102,255,0.25)"
                />
                <path
                  d="M0,190 C80,160 120,200 180,140 C240,80 300,120 360,90 C420,60 500,90 600,40"
                  fill="none"
                  stroke="#4ea1ff"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
