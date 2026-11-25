import { useMemo, useState } from "react";
import { MODELS, PARTS, fitmentFor, money, type Part } from "../data/catalog";
import { useCart } from "../lib/cart";

export default function Store({ goCheckout }: { goCheckout: () => void }) {
  const cart = useCart();
  const [query, setQuery] = useState("");
  const [model, setModel] = useState("TCD-5400");
  const [selected, setSelected] = useState<Part | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PARTS;
    return PARTS.filter((p) =>
      p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) ||
      p.oem.includes(q) || p.appliance.toLowerCase().includes(q) ||
      p.symptoms.some((s) => s.includes(q)) ||
      p.evidence.some((e) => e.model.toLowerCase() === q)
    );
  }, [query]);

  return (
    <div>
      <div className="card">
        <h3>Find your part</h3>
        <div className="searchbar">
          <input placeholder="Search by model (TCD-5400), part #, or symptom (no heat)…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <label>Your appliance model — fitment is checked against this model</label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          {Object.entries(MODELS).map(([m, info]) => (
            <option key={m} value={m}>{m} — {info.brand} {info.appliance}</option>
          ))}
        </select>
      </div>

      <div className="grid two" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Parts ({results.length})</h3>
          {results.map((p) => {
            const ev = fitmentFor(p, model);
            return (
              <div className="part-row" key={p.sku}>
                <div>
                  <strong>{p.name}</strong> <span className="muted">{p.sku} · OEM {p.oem}</span><br />
                  <span className="muted">{p.kind} · {p.stock} in stock</span>{" "}
                  {ev ? <span className="pill verified">Verified fit — {model}</span> : <span className="pill unverified">Not verified for {model}</span>}
                </div>
                <div style={{ textAlign: "right" }}>
                  {p.price > 0 ? (
                    <>
                      <div className="price">{money(p.price)}</div>
                      <div className="pro-price">Pro {money(p.proPrice)}</div>
                      <button className="btn" style={{ marginTop: 6, padding: "7px 16px" }} onClick={() => { cart.add(p.sku); setSelected(p); }}>Add</button>
                    </>
                  ) : (
                    <>
                      <div className="pro-price">Price at order</div>
                      <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>Priced by the distributor<br />when the order is placed</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
          {results.length === 0 && <p className="muted">No parts match that search in the catalog.</p>}
        </div>

        <div>
          {selected && (
            <div className="card" style={{ marginBottom: 20 }}>
              <h3>{selected.name}</h3>
              <p className="muted">{selected.sku} · OEM {selected.oem} · {selected.kind}</p>
              {(() => {
                const ev = fitmentFor(selected, model);
                return ev ? (
                  <p><span className="pill verified">Fitment verified</span><br />
                  <span className="muted">Evidence: {ev.source} for model {ev.model}. PLUS AI never claims fit from inference alone — this match rests on a stored record.</span></p>
                ) : (
                  <p><span className="pill unverified">Fit not verified for {model}</span><br />
                  <span className="muted">No stored compatibility record covers this model. Confirm with support before ordering.</span></p>
                );
              })()}
            </div>
          )}
          <div className="card">
            <h3>Your cart ({cart.count})</h3>
            {cart.lines.map((l) => {
              const p = cart.part(l.sku);
              return (
                <div className="part-row" key={l.sku}>
                  <div><strong>{p.name}</strong> <span className="muted">×{l.qty}</span></div>
                  <div><span className="price">{money(p.price * l.qty)}</span>{" "}
                    <button className="btn ghost" style={{ padding: "4px 12px" }} onClick={() => cart.remove(l.sku)}>Remove</button></div>
                </div>
              );
            })}
            {cart.count === 0 && <p className="muted">Cart is empty — add a part to get started.</p>}
            {cart.count > 0 && (
              <>
                <p>Subtotal: <strong>{money(cart.subtotal(false))}</strong> <span className="muted">(Pro accounts save at checkout tier pricing)</span></p>
                <button className="btn" onClick={goCheckout}>Go to checkout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
