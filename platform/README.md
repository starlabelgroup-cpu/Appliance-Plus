# Appliance Plus Parts Supply — Powered by PLUS AI

**The Right Part. The Smarter Way.**

Production codebase for Appliance Plus Parts Supply: an AI-assisted appliance parts
platform for homeowners and professional technicians, built to integrate with
Top Speed Appliance Service OS.

Design source: Figma — "Appliance Plus Parts Supply — Platform Design"
(Top Speed Appliance's team). Flow: FigJam — "Appliance Plus — Diagnosis to Delivery Loop".

## Modules

- **Dashboard** — order value, reorder alerts, supplier connection status
- **Store** — search by model / part # / symptom, fitment-evidence product view, cart
- **Checkout** — model confirmation gate before payment, order + tracking record
- **Pro** — tiered Pro pricing, job carts, saved appliances, quotes
- **PLUS AI console** — Vision (human-confirmed identification), Match (ranks only on
  stored compatibility evidence), Diagnose (uncertainty + safety routing to licensed
  techs for gas / sealed-system / mains work), Support (AI first, human escalation)
- **Warehouse** — stock + reorder alerts, supplier offer comparison, PO approvals
- **Service OS Connect** — diagnosis-to-delivery pipeline with a named-human approval gate

## Non-negotiable rules (from the blueprint)

1. Fitment is "verified" only when a stored compatibility record covers the exact
   model. AI inference alone never marks a part as fitting.
2. A photo identification is a suggestion until the customer confirms it.
3. No purchase order or Connect ticket advances past approval without a named human approver.
4. Supplier prospects (Marcone, Encompass, Parts Town) are shown as prospects until an
   agreement is signed — never presented as connected.

## Run it

```bash
npm install
npm run dev     # local development
npm run build   # production build into dist/
npm run preview # serve the production build
```

Deploy the `dist/` output to any static host (Vercel, Netlify, GitHub Pages).

## Launch status

- Starter catalog (8 SKUs, 4 models) with demo supplier feeds — replace
  `src/data/catalog.ts` with the connected supplier feed when agreements are signed.
- Checkout records demo orders. Live payments activate with a Stripe account;
  card data never touches this codebase.
- Trademark clearance and a primary domain are still open launch tasks
  (see `../launch-plan.md`).
