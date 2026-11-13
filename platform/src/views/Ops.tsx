import { useState } from "react";
import { PARTS, SUPPLIER_OFFERS, money } from "../data/catalog";

export function Warehouse() {
  const [pos, setPos] = useState([
    { id: "PO-204", label: "Heating Elements ×20", status: "In transit", approver: "Top" },
    { id: "PO-203", label: "Drum Belts ×30", status: "Received, bin A-03", approver: "Top" },
    { id: "PO-202", label: "Drain Pumps ×12", status: "Draft — waiting for approval", approver: "" },
  ]);
  const [name, setName] = useState("");
  const approve = (id: string) => {
    if (!name.trim()) return;
    setPos((ps) => ps.map((p) => (p.id === id ? { ...p, status: "Approved — order placed", approver: name.trim() } : p)));
  };
  return (
    <div>
      <div className="grid two">
        <div className="card">
          <h3>Stock & reorder alerts — Broward microhub (pilot)</h3>
          <table>
            <thead><tr><th>Part</th><th>Bin</th><th>Stock</th><th>Status</th></tr></thead>
            <tbody>
              {PARTS.map((p) => (
                <tr key={p.sku}>
                  <td>{p.name}<br /><span className="muted">{p.sku}</span></td>
                  <td>{p.bin}</td><td>{p.stock}</td>
                  <td>{p.stock <= p.reorderAt ? <span className="pill warn">Reorder</span> : <span className="pill verified">Healthy</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted">Forecasts come from real order + repair history. PLUS Inventory suggests — a human approves every PO.</p>
        </div>
        <div className="card">
          <h3>Supplier offers — Dryer Heating Element</h3>
          <table>
            <thead><tr><th>Supplier</th><th>Unit cost</th><th>Lead</th><th>On-time</th></tr></thead>
            <tbody>
              {SUPPLIER_OFFERS.map((s) => (
                <tr key={s.supplier}>
                  <td>{s.supplier}{!s.connected && <><br /><span className="pill warn">Prospect — not connected</span></>}</td>
                  <td>{s.unitCost ? money(s.unitCost) : "—"}</td><td>{s.lead}</td><td>{s.onTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted">Landed cost + lead time + reliability decide — not price alone.</p>
          <h3 style={{ marginTop: 20 }}>Fulfillment today</h3>
          <p className="muted">Supplier-direct shipments: 6 · Microhub pickups: 3 · Tech supply runs: 2 · Local delivery: 1. Barcode verified at pack-out; RMA required for returns.</p>
        </div>
      </div>
      <h2 className="section">Purchase orders</h2>
      <div className="card">
        <label>Your name (required to approve a PO)</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Top" style={{ maxWidth: 280 }} />
        {pos.map((po) => (
          <div className="part-row" key={po.id}>
            <div><strong>{po.id}</strong> — {po.label}<br /><span className="muted">{po.status}{po.approver ? ` · Approved by ${po.approver}` : ""}</span></div>
            {po.status.startsWith("Draft") && (
              <button className="btn" disabled={!name.trim()} onClick={() => approve(po.id)}>Approve PO</button>
            )}
          </div>
        ))}
        <p className="muted">No name, no approval — the gate is the point.</p>
      </div>
    </div>
  );
}

const STAGES = ["Request", "Verified match", "Offers ready", "Approved", "Ordered", "Synced to job"] as const;

export function Connect() {
  const [approver, setApprover] = useState("");
  const [tickets, setTickets] = useState([
    { id: "TS-2041", text: "Garcia dryer — heating element + fuse kit", stage: 3 },
    { id: "TS-2044", text: "Smith washer — drain pump", stage: 1 },
    { id: "TS-2039", text: "Rental 4B fridge — defrost thermostat", stage: 5 },
  ]);
  const advance = (id: string) => {
    setTickets((ts) => ts.map((t) => {
      if (t.id !== id) return t;
      if (t.stage === 2 && !approver.trim()) return t; // approval gate
      return { ...t, stage: Math.min(t.stage + 1, STAGES.length - 1) };
    }));
  };
  return (
    <div>
      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Service OS Connect — approval gate</h3>
        <p className="muted">A ticket in "Offers ready" can only advance when a named human approves the purchase.
        Type your name, then advance TS-2041 — without a name it stays put.</p>
        <input value={approver} onChange={(e) => setApprover(e.target.value)} placeholder="Approver name (e.g. Top)" style={{ maxWidth: 280 }} />
      </div>
      <div className="pipeline">
        {STAGES.map((stage, i) => (
          <div className="stage" key={stage}>
            <h4>{stage}</h4>
            {tickets.filter((t) => t.stage === i).map((t) => (
              <div className="ticket" key={t.id}>
                <strong>{t.id}</strong><br />{t.text}<br />
                {i < STAGES.length - 1 && (
                  <button className="btn ghost" style={{ marginTop: 8, padding: "4px 12px" }} onClick={() => advance(t.id)}>
                    {i === 2 ? "Approve & advance" : "Advance"}
                  </button>
                )}
                {i === 2 && !approver.trim() && <div className="muted" style={{ marginTop: 6 }}>Needs a named approver</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 14 }}>Loop: booking → diagnosis → verified match → offers → human approval → order → tracked fulfillment → cost + status synced back to the service job.</p>
    </div>
  );
}
