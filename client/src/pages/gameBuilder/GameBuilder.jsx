import { Helmet } from "react-helmet-async";
import { FiEdit2, FiMoreHorizontal, FiPlus, FiShare2 } from "react-icons/fi";
import { GiCardAceSpades, GiCherry, GiPokerHand } from "react-icons/gi";
import { MdOutlineQueryStats } from "react-icons/md";
import "./GameBuilder.css";

const templates = [
  {
    name: "Roulette",
    badge: "Popular",
    badgeClass: "popular",
    desc: "Classic wheel markets with live odds and BET payouts.",
    icon: <GiPokerHand />,
  },
  {
    name: "Slots",
    badge: "Hot",
    badgeClass: "hot",
    desc: "High-energy reel games with cascading win multipliers.",
    icon: <GiCherry />,
  },
  {
    name: "Prediction Game",
    badge: "Battle",
    badgeClass: "battle",
    desc: "Forecast markets with dynamic liquidity and APR pools.",
    icon: <MdOutlineQueryStats />,
  },
  {
    name: "Blackjack",
    badge: "Card",
    badgeClass: "card",
    desc: "Table action with transparent house edge and NFT skins.",
    icon: <GiCardAceSpades />,
  },
];

const myGames = [
  { name: "My Adventure", type: "Platform Game", status: "Draft", edited: "2 hours ago" },
  { name: "BetRoulette", type: "Casino", status: "Published", edited: "Yesterday" },
  { name: "Crypto Runner", type: "Arcade", status: "Draft", edited: "3 days ago" },
];

const assets = [
  { name: "Characters", count: "1,200+" },
  { name: "Environments", count: "800+" },
  { name: "Items", count: "2,300+" },
  { name: "UI Elements", count: "1,000+" },
  { name: "Effects", count: "500+" },
  { name: "Sounds", count: "300+" },
];

const GameBuilder = () => {
  return (
    <div className="cf-page">
      <Helmet>
        <title>Cafrino | Game Builder</title>
      </Helmet>

      <section className="cf-hero">
        <div>
          <h1>
            Create and Launch Your Own <span>Web3 Game</span>
          </h1>
          <p>
            No code. No limits. Turn your ideas into playable Web3 games with
            ready-made templates, asset packs, and one-click chain deployment.
          </p>
          <div className="cf-hero-actions">
            <button type="button" className="cf-btn-primary">
              <FiPlus /> Create Game
            </button>
            <button type="button" className="cf-btn-ghost">
              Watch Tutorial
            </button>
          </div>
        </div>
        <div className="cf-hero-visual" role="img" aria-label="Game builder preview" />
      </section>

      <section>
        <div className="cf-section-head">
          <div>
            <h2>Game Templates</h2>
            <p>Start from proven Web3 game blueprints and customize in minutes.</p>
          </div>
          <button type="button" className="cf-btn-soft">
            Browse all
          </button>
        </div>
        <div className="cf-template-grid">
          {templates.map((t) => (
            <article key={t.name} className="cf-template-card">
              <div className="cf-template-thumb">{t.icon}</div>
              <div className="cf-template-body">
                <span className={`cf-badge ${t.badgeClass}`}>{t.badge}</span>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <div className="cf-template-actions">
                  <button type="button" className="cf-btn-primary">
                    Use Template
                  </button>
                  <button type="button" className="cf-btn-ghost">
                    Preview
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cf-split">
        <div className="cf-panel">
          <h3>My Games</h3>
          <table className="cf-table">
            <thead>
              <tr>
                <th>Game</th>
                <th>Status</th>
                <th>Last Edited</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myGames.map((g) => (
                <tr key={g.name}>
                  <td>
                    <strong>{g.name}</strong>
                    <div style={{ color: "var(--sg-text-muted)", fontSize: "0.75rem" }}>
                      {g.type}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`cf-status ${
                        g.status === "Published" ? "published" : "draft"
                      }`}
                    >
                      {g.status}
                    </span>
                  </td>
                  <td>{g.edited}</td>
                  <td>
                    <div style={{ display: "flex", gap: "0.45rem" }}>
                      <button type="button" className="cf-btn-ghost" style={{ padding: "0.4rem" }}>
                        <FiEdit2 />
                      </button>
                      <button type="button" className="cf-btn-ghost" style={{ padding: "0.4rem" }}>
                        <FiShare2 />
                      </button>
                      <button type="button" className="cf-btn-ghost" style={{ padding: "0.4rem" }}>
                        <FiMoreHorizontal />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cf-panel">
          <h3>Game Assets</h3>
          <div className="cf-asset-grid">
            {assets.map((a) => (
              <div key={a.name} className="cf-asset-card">
                <strong>{a.name}</strong>
                <span>{a.count} assets</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameBuilder;
