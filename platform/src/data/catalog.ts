// Appliance Plus Parts Supply — catalog data layer.
// STARTER CATALOG: demo data for launch. Replace with the connected supplier
// feed when a supplier agreement is signed. Fitment is only ever "verified"
// when a stored evidence record exists for the exact model — never inferred.

export interface FitmentEvidence {
  model: string;
  source: string; // where the compatibility record came from
}

export interface Part {
  sku: string;
  name: string;
  appliance: "Dryer" | "Washer" | "Refrigerator" | "Dishwasher" | "Range";
  oem: string; // OEM part number
  kind: "Genuine OEM" | "Certified Aftermarket";
  price: number;
  proPrice: number;
  stock: number;
  reorderAt: number;
  bin: string;
  symptoms: string[];
  evidence: FitmentEvidence[];
}

export const MODELS: Record<string, { appliance: string; brand: string }> = {
  "TCD-5400": { appliance: "Dryer", brand: "TopClean" },
  "WFW-8620": { appliance: "Washer", brand: "WashFlow" },
  "RF-28R": { appliance: "Refrigerator", brand: "RefriPro" },
  "DW-450": { appliance: "Dishwasher", brand: "DishWorks" },
};

export const PARTS: Part[] = [
  {
    sku: "APP-DR-ELM-540", name: "Dryer Heating Element", appliance: "Dryer",
    oem: "279838", kind: "Genuine OEM", price: 42.99, proPrice: 36.55,
    stock: 7, reorderAt: 8, bin: "A-01", symptoms: ["no heat", "takes two cycles"],
    evidence: [
      { model: "TCD-5400", source: "OEM parts list, rev. C" },
    ],
  },
  {
    sku: "APP-DR-FUS-110", name: "Thermal Fuse Kit", appliance: "Dryer",
    oem: "279816", kind: "Genuine OEM", price: 9.25, proPrice: 7.86,
    stock: 22, reorderAt: 10, bin: "A-02", symptoms: ["no heat", "won't start"],
    evidence: [
      { model: "TCD-5400", source: "OEM parts list, rev. C" },
    ],
  },
  {
    sku: "APP-DR-BLT-066", name: "Dryer Drum Belt", appliance: "Dryer",
    oem: "661570", kind: "Certified Aftermarket", price: 8.95, proPrice: 7.61,
    stock: 3, reorderAt: 10, bin: "A-03", symptoms: ["drum won't turn", "thumping"],
    evidence: [
      { model: "TCD-5400", source: "OEM parts list, rev. C" },
    ],
  },
  {
    sku: "APP-WS-PMP-210", name: "Washer Drain Pump", appliance: "Washer",
    oem: "4681EA2001T", kind: "Genuine OEM", price: 28.49, proPrice: 24.22,
    stock: 14, reorderAt: 8, bin: "B-04", symptoms: ["won't drain", "standing water"],
    evidence: [
      { model: "WFW-8620", source: "Manufacturer fitment feed" },
    ],
  },
  {
    sku: "APP-WS-VLV-320", name: "Washer Water Inlet Valve", appliance: "Washer",
    oem: "5220FR2006H", kind: "Genuine OEM", price: 24.99, proPrice: 21.24,
    stock: 11, reorderAt: 6, bin: "B-05", symptoms: ["won't fill", "slow fill"],
    evidence: [
      { model: "WFW-8620", source: "Manufacturer fitment feed" },
    ],
  },
  {
    sku: "APP-RF-THM-118", name: "Fridge Defrost Thermostat", appliance: "Refrigerator",
    oem: "WR50X10068", kind: "Genuine OEM", price: 16.7, proPrice: 14.19,
    stock: 18, reorderAt: 8, bin: "C-01", symptoms: ["frost buildup", "warm fridge"],
    evidence: [
      { model: "RF-28R", source: "OEM exploded view" },
    ],
  },
  {
    sku: "APP-RF-MTR-204", name: "Evaporator Fan Motor", appliance: "Refrigerator",
    oem: "WR60X10257", kind: "Certified Aftermarket", price: 31.4, proPrice: 26.69,
    stock: 9, reorderAt: 6, bin: "C-02", symptoms: ["noisy", "warm fridge"],
    evidence: [
      { model: "RF-28R", source: "OEM exploded view" },
    ],
  },
  {
    sku: "APP-DW-ARM-077", name: "Dishwasher Spray Arm", appliance: "Dishwasher",
    oem: "WP8268332", kind: "Genuine OEM", price: 18.25, proPrice: 15.51,
    stock: 12, reorderAt: 6, bin: "D-01", symptoms: ["dishes still dirty", "poor cleaning"],
    evidence: [
      { model: "DW-450", source: "Manufacturer fitment feed" },
    ],
  },
];

export function fitmentFor(part: Part, model: string): FitmentEvidence | null {
  return part.evidence.find((e) => e.model === model.trim().toUpperCase()) ?? null;
}

export interface SupplierOffer {
  supplier: string;
  connected: boolean;
  unitCost: number | null;
  lead: string;
  onTime: string;
}

export const SUPPLIER_OFFERS: SupplierOffer[] = [
  { supplier: "Supplier A (connected feed)", connected: true, unitCost: 31.2, lead: "Ships today", onTime: "98%" },
  { supplier: "Supplier B (connected feed)", connected: true, unitCost: 30.4, lead: "2-day lead", onTime: "91%" },
  { supplier: "Marcone", connected: false, unitCost: null, lead: "—", onTime: "—" },
  { supplier: "Encompass (Parts Town Unlimited)", connected: false, unitCost: null, lead: "—", onTime: "—" },
  { supplier: "Parts Town", connected: false, unitCost: null, lead: "—", onTime: "—" },
];

export interface SeedOrder {
  id: string;
  items: string;
  total: number;
  status: "Delivered" | "In transit" | "Processing";
  account: "Retail" | "Pro";
}

export const SEED_ORDERS: SeedOrder[] = [
  { id: "AP-1011", items: "Dryer Heating Element ×1", total: 36.55, status: "Delivered", account: "Pro" },
  { id: "AP-1009", items: "Washer Drain Pump ×2", total: 48.44, status: "In transit", account: "Pro" },
  { id: "AP-1007", items: "Fridge Defrost Thermostat ×3", total: 42.66, status: "Delivered", account: "Retail" },
  { id: "AP-1004", items: "Dryer Drum Belt ×4", total: 30.56, status: "Delivered", account: "Pro" },
];

export const money = (n: number) => `$${n.toFixed(2)}`;
