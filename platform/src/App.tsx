import { useEffect, useState } from "react";
import Dashboard from "./views/Dashboard";
import Store from "./views/Store";
import Checkout from "./views/Checkout";
import Pro from "./views/Pro";
import AiConsole from "./views/AiConsole";
import { Warehouse, Connect } from "./views/Ops";
import { useCart } from "./lib/cart";

const TABS = ["Dashboard", "Store", "Checkout", "Pro", "PLUS AI", "Warehouse", "Service OS Connect"] as const;
type Tab = (typeof TABS)[number];

const TAB_TO_QUERY: Record<Tab, string> = {
  Dashboard: "dashboard",
  Store: "store",
  Checkout: "checkout",
  Pro: "pro",
  "PLUS AI": "plus-ai",
  Warehouse: "warehouse",
  "Service OS Connect": "connect",
};

const QUERY_TO_TAB: Record<string, Tab> = {
  dashboard: "Dashboard",
  store: "Store",
  checkout: "Checkout",
  pro: "Pro",
  "plus-ai": "PLUS AI",
  warehouse: "Warehouse",
  connect: "Service OS Connect",
};

function initialTab(): Tab {
  if (typeof window === "undefined") return "Dashboard";
  const q = new URLSearchParams(window.location.search).get("tab");
  return (q && QUERY_TO_TAB[q.toLowerCase()]) || "Dashboard";
}

export default function App() {
  const [tab, setTab] = useState<Tab>(initialTab);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", TAB_TO_QUERY[tab]);
    const url = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", url);
  }, [tab]);
  const cart = useCart();
  return (
    <div>
      <header className="topbar">
        <div className="logo-badge">+</div>
        <div className="brand">
          <h1>APPLIANCE PLUS PARTS SUPPLY</h1>
          <p>Powered by PLUS AI — The Right Part. The Smarter Way.</p>
        </div>
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
              {t}{t === "Store" && cart.count > 0 ? ` (${cart.count})` : ""}
            </button>
          ))}
        </nav>
      </header>
      <div className="demo-banner">
        Launch build: starter catalog with demo supplier feeds. Checkout records demo orders — live payments and
        supplier connections activate when the Stripe account and supplier agreements are in place.
      </div>
      <main>
        {tab === "Dashboard" && <Dashboard />}
        {tab === "Store" && <Store goCheckout={() => setTab("Checkout")} />}
        {tab === "Checkout" && <Checkout />}
        {tab === "Pro" && <Pro />}
        {tab === "PLUS AI" && <AiConsole />}
        {tab === "Warehouse" && <Warehouse />}
        {tab === "Service OS Connect" && <Connect />}
      </main>
      <footer>
        <a href="https://topspeedserviceos.com/parts" target="_blank" rel="noreferrer">
          Appliance Plus Parts Supply — a vendor partner in the Top Speed Appliance Service Network
        </a>
        <br />
        Appliance Plus Parts Supply · A Top Speed Appliance company · Broward County, FL
      </footer>
    </div>
  );
}
