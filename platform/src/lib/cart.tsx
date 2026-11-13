import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Part } from "../data/catalog";
import { PARTS } from "../data/catalog";

export interface CartLine { sku: string; qty: number; }

interface CartCtx {
  lines: CartLine[];
  add: (sku: string) => void;
  remove: (sku: string) => void;
  clear: () => void;
  count: number;
  subtotal: (pro: boolean) => number;
  part: (sku: string) => Part;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = "appliance-plus-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) ?? "[]"); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(lines)); }, [lines]);

  const value = useMemo<CartCtx>(() => ({
    lines,
    add: (sku) => setLines((ls) => {
      const hit = ls.find((l) => l.sku === sku);
      return hit ? ls.map((l) => (l.sku === sku ? { ...l, qty: l.qty + 1 } : l)) : [...ls, { sku, qty: 1 }];
    }),
    remove: (sku) => setLines((ls) => ls.filter((l) => l.sku !== sku)),
    clear: () => setLines([]),
    count: lines.reduce((n, l) => n + l.qty, 0),
    subtotal: (pro) => lines.reduce((sum, l) => {
      const p = PARTS.find((x) => x.sku === l.sku)!;
      return sum + (pro ? p.proPrice : p.price) * l.qty;
    }, 0),
    part: (sku) => PARTS.find((x) => x.sku === sku)!,
  }), [lines]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside provider");
  return ctx;
}
