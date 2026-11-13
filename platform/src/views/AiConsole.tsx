import { useState } from "react";
import { PARTS, fitmentFor } from "../data/catalog";

// PLUS AI rules enforced in this console (from the blueprint):
// - Vision: a photo label is a suggestion; the customer must confirm before anything is treated as identified.
// - Match: candidates rank ONLY on stored compatibility evidence — no evidence, no recommendation.
// - Diagnose: answers carry uncertainty and safe next checks; gas, sealed-system and mains-voltage
//   work routes to a licensed technician instead of DIY steps.

const DIAGNOSES: Record<string, { cause: string; confidence: string; check: string; safety?: string }[]> = {
  "dryer-no-heat": [
    { cause: "Heating element open circuit", confidence: "High", check: "Continuity test on the element (power disconnected) — no continuity means replace." },
    { cause: "Thermal fuse blown", confidence: "Medium", check: "Continuity test on the fuse; if blown, also clear the vent line — fuses blow from overheating." },
    { cause: "Cycling thermostat failure", confidence: "Low", check: "Compare drum temperature against spec with a thermometer at the exhaust." },
  ],
  "washer-no-drain": [
    { cause: "Drain pump blocked or failed", confidence: "High", check: "Check the pump filter/coin trap first, then listen for pump hum during drain." },
    { cause: "Kinked or clogged drain hose", confidence: "Medium", check: "Inspect the hose run and standpipe height against spec." },
  ],
  "fridge-warm": [
    { cause: "Frost buildup blocking airflow (defrost fault)", confidence: "Medium", check: "Look for frost on the freezer back panel; test the defrost thermostat for continuity when cold." },
    { cause: "Sealed-system / refrigerant fault", confidence: "Low", check: "Do not open the sealed system.", safety: "Routes to a licensed technician — sealed-system work is not DIY." },
  ],
};

export default function AiConsole() {
  const [visionPart, setVisionPart] = useState(PARTS[0].sku);
  const [visionConfirmed, setVisionConfirmed] = useState(false);
  const [matchModel, setMatchModel] = useState("TCD-5400");
  const [diagKey, setDiagKey] = useState("dryer-no-heat");
  const [supportQ, setSupportQ] = useState("");
  const [supportA, setSupportA] = useState<string | null>(null);

  const vp = PARTS.find((p) => p.sku === visionPart)!;
  const matches = PARTS.map((p) => ({ p, ev: fitmentFor(p, matchModel) })).filter((x) => x.ev);

  const askSupport = () => {
    const q = supportQ.toLowerCase();
    if (q.includes("return")) setSupportA("Returns need an RMA. Fitment-verified parts that don't fit the confirmed model are returnable per policy; electrical parts are inspected at the returns desk before restock. Start an RMA from your order page.");
    else if (q.includes("ship") || q.includes("deliver") || q.includes("arrive")) setSupportA("Supplier-direct orders ship from the supplier with tracking on your order page. Broward County local fulfillment is a later pilot phase — it is not live yet.");
    else if (q.includes("fit") || q.includes("model")) setSupportA("Fitment is only marked verified when a stored compatibility record covers your exact model. If your model isn't listed, I can flag it for a human to check — I won't guess.");
    else setSupportA("I can help with fitment, shipping, returns and order status. For anything else, I'll escalate to a human on the support team — chat, email or SMS.");
  };

  return (
    <div className="grid two">
      <div className="card">
        <h3>PLUS Vision — identify a part</h3>
        <p className="muted">In production this reads the part photo. Here, pick the part a photo shows:</p>
        <select value={visionPart} onChange={(e) => { setVisionPart(e.target.value); setVisionConfirmed(false); }}>
          {PARTS.map((p) => <option key={p.sku} value={p.sku}>{p.name}</option>)}
        </select>
        <p style={{ marginTop: 14 }}>Detected label: <strong>{vp.name}</strong> <span className="muted">({vp.sku}, OEM {vp.oem})</span></p>
        {!visionConfirmed ? (
          <button className="btn" onClick={() => setVisionConfirmed(true)}>Confirm this identification</button>
        ) : (
          <p><span className="pill verified">Confirmed by you</span> <span className="muted">Only now is it treated as identified — a photo label alone never is.</span></p>
        )}
      </div>

      <div className="card">
        <h3>PLUS Match — verified fitment only</h3>
        <label>Model number</label>
        <input value={matchModel} onChange={(e) => setMatchModel(e.target.value.toUpperCase())} placeholder="e.g. TCD-5400" />
        {matches.length > 0 ? matches.map(({ p, ev }) => (
          <div className="part-row" key={p.sku}>
            <div><strong>{p.name}</strong> <span className="muted">{p.sku}</span></div>
            <span className="pill verified">Evidence: {ev!.source}</span>
          </div>
        )) : (
          <p className="muted" style={{ marginTop: 12 }}>No stored compatibility evidence for that model — PLUS Match returns nothing rather than guessing. Add the model through support and a human will verify it.</p>
        )}
      </div>

      <div className="card">
        <h3>PLUS Diagnose — likely causes, honestly uncertain</h3>
        <select value={diagKey} onChange={(e) => setDiagKey(e.target.value)}>
          <option value="dryer-no-heat">Dryer — no heat</option>
          <option value="washer-no-drain">Washer — won't drain</option>
          <option value="fridge-warm">Fridge — warm / frost buildup</option>
        </select>
        {DIAGNOSES[diagKey].map((d) => (
          <div key={d.cause} style={{ marginTop: 12 }}>
            <strong>{d.cause}</strong> <span className="pill info">Confidence: {d.confidence}</span>
            <p className="muted" style={{ margin: "4px 0" }}>{d.check}</p>
            {d.safety && <span className="pill unverified">{d.safety}</span>}
          </div>
        ))}
        <p className="muted">Always disconnect power before testing. Gas, sealed-system and mains-voltage work goes to a licensed technician.</p>
      </div>

      <div className="card">
        <h3>PLUS Support — ask anything</h3>
        <div className="searchbar">
          <input placeholder="Try: returns, shipping, will it fit my model…" value={supportQ} onChange={(e) => setSupportQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && askSupport()} />
          <button className="btn" onClick={askSupport}>Ask</button>
        </div>
        {supportA && <p style={{ marginTop: 14 }}>{supportA}</p>}
        <p className="muted">PLUS AI answers first; humans take over on escalation — chat, email, SMS.</p>
      </div>
    </div>
  );
}
