import { useState } from "react";
import { MODELS, money } from "../data/catalog";
import { useCart } from "../lib/cart";

const DELIVERY = 6.95;

export default function Checkout() {
  const cart = useCart();
  const [model, setModel] = useState("TCD-5400");
  const [confirmed, setConfirmed] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const total = cart.subtotal(false) + (cart.count ? DELIVERY : 0);

  if (orderId) {
    return (
      <div className="card">
        <h3>Order {orderId} confirmed</h3>
        <p>Tracking: <span className="pill info">Processing — supplier shipment pending</span></p>
        <p className="muted">Your parts and receipt are saved to model {model}. Fitment guarantee: if a verified part
        does not fit the model you confirmed, returns follow the published policy (RMA required; electrical parts checked at the returns desk).</p>
      </div>
    );
  }

  return (
    <div className="grid two">
      <div className="card">
        <h3>1 — Confirm your model</h3>
        <p className="muted">Checkout is locked to one model so fitment evidence stays honest.</p>
        <select value={model} onChange={(e) => { setModel(e.target.value); setConfirmed(false); }}>
          {Object.entries(MODELS).map(([m, info]) => (
            <option key={m} value={m}>{m} — {info.brand} {info.appliance}</option>
          ))}
        </select>
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontWeight: 500, color: "inherit" }}>
          <input type="checkbox" style={{ width: "auto" }} checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
          I confirm my appliance model is {model}
        </label>
        <h3 style={{ marginTop: 24 }}>2 — Order summary</h3>
        {cart.lines.map((l) => {
          const p = cart.part(l.sku);
          return <div className="part-row" key={l.sku}><div>{p.name} <span className="muted">×{l.qty}</span></div><span className="price">{money(p.price * l.qty)}</span></div>;
        })}
        <div className="part-row"><div>Delivery — supplier-direct</div><span className="price">{cart.count ? money(DELIVERY) : money(0)}</span></div>
        <div className="part-row"><div><strong>Total</strong></div><span className="price">{money(total)}</span></div>
      </div>
      <div className="card">
        <h3>3 — Payment</h3>
        <p className="muted">Card payments run through Stripe in production. <strong>Launch status:</strong> no live
        payment is processed until the Stripe account and supplier feeds are connected — placing an order below records a demo order only.</p>
        <label>Card number</label>
        <input placeholder="•••• •••• •••• 4242" disabled />
        <label>Name on card</label>
        <input placeholder="Full name" disabled />
        <button className="btn" style={{ marginTop: 18 }} disabled={!confirmed || cart.count === 0}
          onClick={() => { setOrderId(`AP-${1012 + Math.floor(Math.random() * 800)}`); cart.clear(); }}>
          Place order — {money(total)}
        </button>
        {!confirmed && cart.count > 0 && <p className="muted">Confirm your model to enable ordering.</p>}
        {cart.count === 0 && <p className="muted">Your cart is empty.</p>}
      </div>
    </div>
  );
}
