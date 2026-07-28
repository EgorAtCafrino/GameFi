import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FiBarChart2,
  FiBell,
  FiBox,
  FiLayers,
  FiMenu,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiZap,
} from "react-icons/fi";
import { HiOutlineTemplate } from "react-icons/hi";
import { TbCoins, TbRocket, TbUsers } from "react-icons/tb";
import { MdOutlineSportsEsports } from "react-icons/md";
import "./CafrinoShell.css";

const NAV = [
  {
    label: "Main Menu",
    items: [
      { to: "/home", label: "Overview", icon: FiLayers },
      { to: "/builder", label: "Game Builder", icon: MdOutlineSportsEsports },
      { to: "/deploy", label: "Web3 Deployment", icon: TbRocket },
      { to: "/analytics", label: "Analytics", icon: FiBarChart2 },
      { to: "/nfts", label: "My Games", icon: FiBox },
      { to: "/rankings", label: "Templates", icon: HiOutlineTemplate },
    ],
  },
  {
    label: "Earn & Grow",
    items: [
      { to: "/staking", label: "Staking", icon: TbCoins },
      { to: "/transactions", label: "Affiliate", icon: TbUsers },
      { to: "/nfts", label: "Marketplace", icon: FiShoppingBag },
    ],
  },
  {
    label: "Settings",
    items: [
      { to: "/account", label: "Profile", icon: FiSettings },
      { to: "/support", label: "Support", icon: FiZap },
    ],
  },
];

const CafrinoShell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`cafrino-shell${open ? " sidebar-open" : ""}`}>
      <aside className="cafrino-sidebar">
        <Link to="/home" className="cafrino-brand" onClick={() => setOpen(false)}>
          <div className="cafrino-brand-mark">C</div>
          <span>Cafrino</span>
        </Link>

        <div className="cafrino-project-card">
          <strong>My Adventure</strong>
          <small>Platform Game</small>
          <span className="cafrino-live-badge">Live</span>
        </div>

        {NAV.map((group) => (
          <div key={group.label} className="cafrino-nav-group">
            <div className="cafrino-nav-label">{group.label}</div>
            {group.items.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={`${group.label}-${label}`}
                to={to}
                className={({ isActive }) =>
                  `cafrino-nav-link${isActive ? " active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                <Icon />
                {label}
              </NavLink>
            ))}
          </div>
        ))}

        <div className="cafrino-upgrade">
          <h4>Upgrade to Pro</h4>
          <p>Unlock advanced analytics, unlimited deploys, and team seats.</p>
          <button type="button">
            <FiZap /> Go Pro
          </button>
        </div>
      </aside>

      <div className="cafrino-main">
        <header className="cafrino-topbar">
          <button
            type="button"
            className="cafrino-mobile-toggle"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <FiMenu />
          </button>

          <label className="cafrino-search">
            <FiSearch />
            <input
              type="search"
              placeholder="Search games, analytics, or wallets..."
              aria-label="Search"
            />
          </label>

          <div className="cafrino-top-actions">
            <span className="cafrino-chip balance gold-accent">3,500,100 BET</span>
            <span className="cafrino-chip wallet">0x52....331</span>
            <button type="button" className="cafrino-icon-btn" aria-label="Notifications">
              <FiBell />
              <span className="dot" />
            </button>
            <div className="cafrino-avatar" aria-hidden="true">
              U
            </div>
          </div>
        </header>

        <div className="cafrino-content" onClick={() => open && setOpen(false)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CafrinoShell;
