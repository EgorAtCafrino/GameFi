import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiCopy } from "react-icons/fi";
import "../gameBuilder/GameBuilder.css";
import "./Deployment.css";

const steps = ["Configure", "Smart Contract", "Deploy", "Verify", "Launch"];
const networks = ["Polygon", "Ethereum", "BNB Chain", "Other Chains"];
const history = [
  {
    game: "My Adventure",
    network: "Polygon",
    address: "0x8f2a...91c4",
    status: "Live",
    statusClass: "live",
    at: "May 28, 2024",
  },
  {
    game: "BetRoulette",
    network: "Ethereum",
    address: "0x31b9...aa02",
    status: "Pending",
    statusClass: "pending",
    at: "May 27, 2024",
  },
  {
    game: "Crypto Runner",
    network: "BNB Chain",
    address: "0x77ce...12df",
    status: "Failed",
    statusClass: "failed",
    at: "May 25, 2024",
    retry: true,
  },
  {
    game: "Prediction Game",
    network: "Polygon",
    address: "0xa91f...44e1",
    status: "Live",
    statusClass: "live",
    at: "May 22, 2024",
  },
];

const networkStatus = [
  { name: "Polygon", latency: "32ms" },
  { name: "Ethereum", latency: "28ms" },
  { name: "BNB Chain", latency: "41ms" },
  { name: "Arbitrum", latency: "19ms" },
  { name: "Optimism", latency: "24ms" },
];

const Deployment = () => {
  const [selected, setSelected] = useState("Polygon");

  return (
    <div className="cf-deploy-page">
      <Helmet>
        <title>Cafrino | Web3 Deployment</title>
      </Helmet>

      <section className="cf-deploy-hero">
        <div>
          <h1>Deploy Your Game to Web3 in Minutes</h1>
          <p>
            Configure your game, select a chain, and publish with guided smart
            contract deployment — no DevOps required.
          </p>
          <div className="cf-chain-orbit">
            {["Polygon", "Ethereum", "BNB Chain", "Other Chains"].map((c) => (
              <span key={c} className="cf-chain-pill">
                {c}
              </span>
            ))}
          </div>
          <div className="cf-stepper">
            {steps.map((step, i) => (
              <div key={step} className={`cf-step${i === 0 ? " active" : ""}`}>
                <span>Step {i + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="cf-deploy-preview">
          <div className="cf-deploy-preview-meta">
            <div>
              <span>Version</span>
              <br />
              <strong>v1.0.0</strong>
            </div>
            <div>
              <span>Player Type</span>
              <br />
              <strong>Platform Game</strong>
            </div>
            <div>
              <span>File Size</span>
              <br />
              <strong>24.5 MB</strong>
            </div>
            <div>
              <span>Updated</span>
              <br />
              <strong>2 hours ago</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="cf-deploy-grid">
        <div className="cf-form-card">
          <h3>Deployment Configuration</h3>
          <div className="cf-field">
            <label htmlFor="gameName">Game Name</label>
            <input id="gameName" defaultValue="My Adventure" />
          </div>
          <div className="cf-field">
            <label htmlFor="gameDesc">Game Description</label>
            <textarea
              id="gameDesc"
              defaultValue="A cosmic platformer adventure with on-chain rewards and NFT collectibles."
            />
          </div>
          <div className="cf-field">
            <label>Blockchain Network</label>
            <div className="cf-network-grid">
              {networks.map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`cf-network-card${selected === n ? " selected" : ""}`}
                  onClick={() => setSelected(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <button type="button" className="cf-btn-primary">
            Continue to Smart Contract
          </button>
        </div>

        <div className="cf-side-card">
          <h3>Deployment Guide</h3>
          <ol className="cf-guide-list">
            {[
              "Configure game metadata and target network",
              "Generate or attach your game smart contracts",
              "Deploy and fund gas for publication",
              "Verify contracts and launch publicly",
            ].map((item, i) => (
              <li key={item}>
                <span className="cf-guide-num">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <h3>Need Help?</h3>
          <div className="cf-help-links">
            <a href="#docs">View Documentation</a>
            <a href="#tutorial">Watch Tutorial</a>
            <a href="#community">Join Community</a>
          </div>

          <h3>Network Status</h3>
          <div className="cf-network-status">
            {networkStatus.map((n) => (
              <div key={n.name} className="cf-network-row">
                <span>{n.name}</span>
                <span className="cf-online">
                  Online · {n.latency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cf-history">
        <h3>Deployment History</h3>
        <table className="cf-table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Network</th>
              <th>Contract Address</th>
              <th>Status</th>
              <th>Deployed At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.map((row) => (
              <tr key={row.game}>
                <td>{row.game}</td>
                <td>{row.network}</td>
                <td>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    {row.address}
                    <FiCopy size={14} />
                  </span>
                </td>
                <td>
                  <span className={`cf-status ${row.statusClass}`}>{row.status}</span>
                </td>
                <td>{row.at}</td>
                <td>
                  {row.retry ? (
                    <button type="button" className="cf-btn-soft">
                      Retry
                    </button>
                  ) : (
                    <button type="button" className="cf-btn-ghost">
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Deployment;
