import { PARTS, SEED_ORDERS, SUPPLIER_OFFERS } from "../data/catalog";

export default function Dashboard() {
  const low = PARTS.filter((p) => p.stock <= p.reorderAt);
  const aov = SEED_ORDERS.reduce((s, o) => s + o.total, 0) / SEED_ORDERS.length;
  const connected = SUPPLIER_OFFERS.filter((s) => s.connected).length;
  return (
    <div>
      <div className="hero">
        <h2>The Right Part. The Smarter Way.</h2>
        <p>Appliance Plus Parts Supply — Powered by PLUS AI</p>
      </div>
      <div className="grid kpis" style={{ marginTop: 20 }}>
        <div className="card kpi"><div className="value">${aov.toFixed(2)}</div><div className="label">Average order value (recent orders)</div></div>
        <div className="card kpi"><div className="value">{SEED_ORDERS.length}</div><div className="label">Recent orders</div></div>
        <div className="card kpi"><div className="value">{low.length}</div><div className="label">SKUs at or below reorder point</div></div>
        <div className="card kpi"><div className="value">{connected} / {SUPPLIER_OFFERS.length}</div><div className="label">Supplier feeds connected</div></div>
      </div>
      <h2 className="section">Needs attention</h2>
      <div className="card">
        {low.map((p) => (
          <div className="part-row" key={p.sku}>
            <div><strong>{p.name}</strong> <span className="muted">{p.sku} · bin {p.bin}</span></div>
            <span className="pill warn">{p.stock} left — reorder at {p.reorderAt}</span>
          </div>
        ))}
        <p className="muted" style={{ marginBottom: 0 }}>
          Supplier status: Marcone, Encompass and Parts Town are outreach prospects — not connected.
          No supplier feed is live until an agreement is signed.
        </p>
      </div>
    </div>
  );
}
