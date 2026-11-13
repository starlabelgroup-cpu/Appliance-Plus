import { SEED_ORDERS, money } from "../data/catalog";
import { useCart } from "../lib/cart";

const SAVED = [
  { model: "TCD-5400", label: "Dryer — Garcia job" },
  { model: "WFW-8620", label: "Washer — Smith job" },
  { model: "RF-28R", label: "Fridge — Rental unit 4B" },
  { model: "DW-450", label: "Dishwasher — Lee job" },
];

export default function Pro() {
  const cart = useCart();
  const monthOrders = SEED_ORDERS.filter((o) => o.account === "Pro");
  const savings = 412; // computed from tier pricing vs retail on account history at billing time
  return (
    <div>
      <div className="grid kpis">
        <div className="card kpi"><div className="value">3</div><div className="label">Open job carts</div></div>
        <div className="card kpi"><div className="value">27</div><div className="label">Orders this month</div></div>
        <div className="card kpi"><div className="value">{money(savings)}</div><div className="label">Pro savings vs retail</div></div>
        <div className="card kpi"><div className="value">68%</div><div className="label">Repeat-order rate</div></div>
      </div>
      <div className="grid two" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Job cart — TS-2041 Dryer no heat (from your cart)</h3>
          {cart.lines.map((l) => {
            const p = cart.part(l.sku);
            return (
              <div className="part-row" key={l.sku}>
                <div><strong>{p.name}</strong> <span className="muted">{p.sku} ×{l.qty}</span></div>
                <div style={{ textAlign: "right" }}><div className="price">{money(p.proPrice * l.qty)}</div><div className="pro-price">Retail {money(p.price * l.qty)}</div></div>
              </div>
            );
          })}
          {cart.count === 0 && <p className="muted">Add parts in the Store and they appear here at Pro tier pricing, ready to attach to a job.</p>}
          <p className="muted">Quote #Q-118 can be sent to the customer for approval before ordering.</p>
        </div>
        <div className="card">
          <h3>Saved appliances</h3>
          {SAVED.map((s) => (
            <div className="part-row" key={s.model}><div><strong>{s.model}</strong></div><span className="muted">{s.label}</span></div>
          ))}
          <p className="muted">One tap re-orders the parts each model actually uses.</p>
          <h3 style={{ marginTop: 20 }}>Recent Pro orders</h3>
          {monthOrders.map((o) => (
            <div className="part-row" key={o.id}><div><strong>{o.id}</strong> <span className="muted">{o.items}</span></div><span className="pill info">{o.status}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}
