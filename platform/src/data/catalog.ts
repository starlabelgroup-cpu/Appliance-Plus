// Appliance Plus Parts Supply — catalog data layer.
// STARTER CATALOG: demo data for launch. Replace with the connected supplier
// feed when a supplier agreement is signed. Fitment is only ever "verified"
// when a stored evidence record exists for the exact model — never inferred.
// OEM SUPPLY LIST (added 2026-11-25): 103 genuine OEM parts pulled from
// live OEM parts sources (AppliancePartsPros, Home Depot Repair Parts,
// LG Parts, Whirlpool parts lists, Encompass ratecard) — the same list
// seeded into Top Speed Parts Supply OS. Their price/proPrice are 0 on
// purpose: real prices are set by the distributor at order time, never
// invented here, and the Store shows them as "Price at order" with no
// cart add. Stock starts at 0 until a real count or PO receive.

export interface FitmentEvidence {
  model: string;
  source: string; // where the compatibility record came from
}

export interface Part {
  sku: string;
  name: string;
  appliance: "Dryer" | "Washer" | "Refrigerator" | "Dishwasher" | "Range" | "Microwave" | "Ice Maker";
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
  {
    sku: "EDR1RXD1", name: "Whirlpool Refrigerator Water Filter 1", appliance: "Refrigerator",
    oem: "EDR1RXD1", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "EDR3RXD1", name: "Whirlpool Refrigerator Water Filter 3", appliance: "Refrigerator",
    oem: "EDR3RXD1", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "EDR4RXD1", name: "Whirlpool Refrigerator Water Filter 4", appliance: "Refrigerator",
    oem: "EDR4RXD1", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10311524", name: "Whirlpool Refrigerator Air Filter", appliance: "Refrigerator",
    oem: "W10311524", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP2186443", name: "Whirlpool Refrigerator Water Filter Housing", appliance: "Refrigerator",
    oem: "WP2186443", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "MWFP", name: "GE Refrigerator Water Filter (MWF)", appliance: "Refrigerator",
    oem: "MWFP", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "XWFE", name: "GE Refrigerator Water Filter", appliance: "Refrigerator",
    oem: "XWFE", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "RPWFE", name: "GE Refrigerator Water Filter", appliance: "Refrigerator",
    oem: "RPWFE", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WF2CB", name: "Frigidaire Refrigerator Water Filter PureSource2", appliance: "Refrigerator",
    oem: "WF2CB", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WF3CB", name: "Frigidaire Refrigerator Water Filter PureSource3", appliance: "Refrigerator",
    oem: "WF3CB", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "ULTRAWF", name: "Frigidaire Refrigerator Water Filter PureSource Ultra", appliance: "Refrigerator",
    oem: "ULTRAWF", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "EPTWFU01", name: "Frigidaire Refrigerator Water & Ice Filter PureSource Ultra II", appliance: "Refrigerator",
    oem: "EPTWFU01", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "EAFCBF", name: "Frigidaire Refrigerator Air Filter PureAdvantage", appliance: "Refrigerator",
    oem: "EAFCBF", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DA29-00020B", name: "Samsung Refrigerator Water Filter HAF-QIN", appliance: "Refrigerator",
    oem: "DA29-00020B", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "ADQ75493301", name: "LG Refrigerator Water Filter (LT1000P)", appliance: "Refrigerator",
    oem: "ADQ75493301", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "AGF80300702", name: "LG Refrigerator Water Filter", appliance: "Refrigerator",
    oem: "AGF80300702", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "MJX41869208", name: "LG Refrigerator Water Inlet Valve", appliance: "Refrigerator",
    oem: "MJX41869208", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "4681JB1027N", name: "LG Refrigerator Evaporator Fan Motor", appliance: "Refrigerator",
    oem: "4681JB1027N", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "EAU65058502", name: "LG Refrigerator Condenser Fan Motor", appliance: "Refrigerator",
    oem: "EAU65058502", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10300024", name: "Whirlpool Ice Maker Assembly", appliance: "Ice Maker",
    oem: "WPW10300024", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10882923", name: "Whirlpool Ice Maker Assembly", appliance: "Ice Maker",
    oem: "W10882923", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10190965", name: "Whirlpool Ice Maker", appliance: "Ice Maker",
    oem: "WPW10190965", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "4317943", name: "Whirlpool Ice Maker Kit", appliance: "Ice Maker",
    oem: "4317943", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DA97-07365G", name: "Samsung Ice Maker Assembly", appliance: "Ice Maker",
    oem: "DA97-07365G", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DA97-15217D", name: "Samsung Ice Maker Assembly", appliance: "Ice Maker",
    oem: "DA97-15217D", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "AEQ73110219", name: "LG Ice Maker Assembly", appliance: "Ice Maker",
    oem: "AEQ73110219", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR30X10093", name: "GE Ice Maker Kit", appliance: "Ice Maker",
    oem: "WR30X10093", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "241798231", name: "Frigidaire Ice Maker Assembly", appliance: "Ice Maker",
    oem: "241798231", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP3387747", name: "Whirlpool Dryer Heating Element", appliance: "Dryer",
    oem: "WP3387747", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP3392519", name: "Whirlpool Dryer Thermal Fuse", appliance: "Dryer",
    oem: "WP3392519", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP3387134", name: "Whirlpool Dryer Cycling Thermostat", appliance: "Dryer",
    oem: "WP3387134", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP3977767", name: "Whirlpool Dryer Hi-Limit Thermostat", appliance: "Dryer",
    oem: "WP3977767", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP8577274", name: "Whirlpool Dryer Thermistor", appliance: "Dryer",
    oem: "WP8577274", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "341241", name: "Whirlpool Dryer Drum Belt 92-1/4 in", appliance: "Dryer",
    oem: "341241", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "279640", name: "Whirlpool Dryer Idler Pulley", appliance: "Dryer",
    oem: "279640", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10314173", name: "Whirlpool Dryer Drum Support Roller", appliance: "Dryer",
    oem: "WPW10314173", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "349241T", name: "Whirlpool Dryer Drum Support Roller Kit", appliance: "Dryer",
    oem: "349241T", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "4392065", name: "Whirlpool Dryer Maintenance Kit (29 in models)", appliance: "Dryer",
    oem: "4392065", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "4392067", name: "Whirlpool Dryer Repair Kit (27 in models)", appliance: "Dryer",
    oem: "4392067", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC47-00019A", name: "Samsung Dryer Heating Element Assembly 240V 5300W", appliance: "Dryer",
    oem: "DC47-00019A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC96-00887A", name: "Samsung Dryer Thermal Cut-Off Fuse & High-Limit Thermostat Kit", appliance: "Dryer",
    oem: "DC96-00887A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC93-00634A", name: "Samsung Dryer Idler Pulley Assembly", appliance: "Dryer",
    oem: "DC93-00634A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "6602-001655", name: "Samsung Dryer Drum Belt", appliance: "Dryer",
    oem: "6602-001655", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC97-16782A", name: "Samsung Dryer Roller & Idler Pulley Overhaul Kit", appliance: "Dryer",
    oem: "DC97-16782A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC32-00007A", name: "Samsung Dryer Thermistor Temperature Sensor", appliance: "Dryer",
    oem: "DC32-00007A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE03X29897", name: "GE Dryer Drive Belt", appliance: "Dryer",
    oem: "WE03X29897", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "ADQ56656401", name: "LG Dryer Lint Filter", appliance: "Dryer",
    oem: "ADQ56656401", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10536347", name: "Whirlpool Washer Drain Pump Assembly", appliance: "Washer",
    oem: "W10536347", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10581874", name: "Whirlpool Washer Drain Pump", appliance: "Washer",
    oem: "WPW10581874", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "285805", name: "Whirlpool Washer Water Inlet Valve", appliance: "Washer",
    oem: "285805", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP8540751", name: "Whirlpool Washer Water Inlet Valve", appliance: "Washer",
    oem: "WP8540751", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10683603", name: "Whirlpool Washer Water Inlet Valve", appliance: "Washer",
    oem: "WPW10683603", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP8318084", name: "Whirlpool Washer Lid Switch", appliance: "Washer",
    oem: "WP8318084", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "285671", name: "Whirlpool Washer Lid Switch Assembly", appliance: "Washer",
    oem: "285671", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11307244", name: "Whirlpool Washer Lid Lock Assembly", appliance: "Washer",
    oem: "W11307244", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10404050", name: "Whirlpool Washer Lid Lock Latch Assembly", appliance: "Washer",
    oem: "W10404050", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH23X28418", name: "GE Washer Drain Pump (Top-Load)", appliance: "Washer",
    oem: "WH23X28418", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH23X10043", name: "GE Washer Drain Pump", appliance: "Washer",
    oem: "WH23X10043", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH13X26637", name: "GE Washer Water Inlet Valve", appliance: "Washer",
    oem: "WH13X26637", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5220FR2008F", name: "LG Washer Water Inlet Valve", appliance: "Washer",
    oem: "5220FR2008F", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "6601ER1006E", name: "LG Washer Water Level Pressure Switch", appliance: "Washer",
    oem: "6601ER1006E", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "EBF61315802", name: "LG Washer Door Switch", appliance: "Washer",
    oem: "EBF61315802", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC97-15459H", name: "Samsung Washer Water Inlet Valve", appliance: "Washer",
    oem: "DC97-15459H", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DC31-00187A", name: "Samsung Washer Drain Pump", appliance: "Washer",
    oem: "DC31-00187A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5303935066", name: "Frigidaire Oven Igniter", appliance: "Range",
    oem: "5303935066", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "316489403", name: "Frigidaire Gas Oven Ignitor", appliance: "Range",
    oem: "316489403", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5304509706", name: "Frigidaire Gas Range Oven Igniter", appliance: "Range",
    oem: "5304509706", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "316075103", name: "Frigidaire Range Bake Element", appliance: "Range",
    oem: "316075103", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "316217002", name: "Frigidaire Oven Temperature Sensor", appliance: "Range",
    oem: "316217002", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "316436001", name: "Frigidaire Range Large Surface Element Switch", appliance: "Range",
    oem: "316436001", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB13K21", name: "GE Oven Bake Igniter", appliance: "Range",
    oem: "WB13K21", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB44X5082", name: "GE Oven Bake Element", appliance: "Range",
    oem: "WB44X5082", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB44T10010", name: "GE Range Oven Bake Element", appliance: "Range",
    oem: "WB44T10010", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB24T10025", name: "GE Range Infinite Switch 8 in", appliance: "Range",
    oem: "WB24T10025", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10779716", name: "Whirlpool Bake Element", appliance: "Range",
    oem: "W10779716", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP308180", name: "Whirlpool Oven Bake Element", appliance: "Range",
    oem: "WP308180", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10207397", name: "Whirlpool Oven Heating Element", appliance: "Range",
    oem: "WPW10207397", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10918546", name: "Whirlpool Gas Range Oven Igniter", appliance: "Range",
    oem: "W10918546", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "74007498", name: "Whirlpool Gas Oven Igniter", appliance: "Range",
    oem: "74007498", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DG94-00520A", name: "Samsung Gas Range Oven Igniter", appliance: "Range",
    oem: "DG94-00520A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "8009", name: "Whirlpool Appliance Light Bulb 40W", appliance: "Range",
    oem: "8009", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11434044", name: "Whirlpool Dishwasher Water Inlet Valve", appliance: "Dishwasher",
    oem: "W11434044", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10327249", name: "Whirlpool Dishwasher Fill Valve Assembly", appliance: "Dishwasher",
    oem: "W10327249", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11462456", name: "Whirlpool Dishwasher Drain Pump", appliance: "Dishwasher",
    oem: "W11462456", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10531320", name: "Whirlpool Dishwasher Drain Pump & Motor Assembly", appliance: "Dishwasher",
    oem: "WPW10531320", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11460946", name: "Whirlpool Dishwasher Pump & Motor Assembly (Circulation)", appliance: "Dishwasher",
    oem: "W11460946", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11032770", name: "Whirlpool Dishwasher Pump & Motor Assembly", appliance: "Dishwasher",
    oem: "W11032770", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10712395", name: "Whirlpool Dishwasher Upper Rack Adjuster Kit", appliance: "Dishwasher",
    oem: "W10712395", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "8269144A", name: "Whirlpool Dishwasher Drain Hose", appliance: "Dishwasher",
    oem: "8269144A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WD15X26078", name: "GE Dishwasher Water Inlet Valve Assembly", appliance: "Dishwasher",
    oem: "WD15X26078", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "00645208", name: "Bosch Dishwasher Detergent & Rinse Aid Dispenser", appliance: "Dishwasher",
    oem: "00645208", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB24X829", name: "GE Microwave Door Switch", appliance: "Microwave",
    oem: "WB24X829", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB24X830", name: "GE Microwave Door Interlock Switch", appliance: "Microwave",
    oem: "WB24X830", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB26X10038", name: "GE Microwave Turntable Motor", appliance: "Microwave",
    oem: "WB26X10038", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB27X10597", name: "GE Microwave High Voltage Diode", appliance: "Microwave",
    oem: "WB27X10597", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB27X10939", name: "GE Microwave Magnetron", appliance: "Microwave",
    oem: "WB27X10939", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "3405-001033", name: "Samsung Microwave Door Switch", appliance: "Microwave",
    oem: "3405-001033", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "3405-001034", name: "Samsung Microwave Door Switch", appliance: "Microwave",
    oem: "3405-001034", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DE91-70063D", name: "Samsung Microwave High Voltage Diode", appliance: "Microwave",
    oem: "DE91-70063D", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "DE31-10172C", name: "Samsung Microwave Turntable Drive Motor", appliance: "Microwave",
    oem: "DE31-10172C", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10269458", name: "Whirlpool Microwave Diode", appliance: "Microwave",
    oem: "W10269458", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "6600W1K001D", name: "LG Microwave Door Interlock Switch", appliance: "Microwave",
    oem: "6600W1K001D", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "6549W1S011B", name: "LG Microwave Turntable Motor", appliance: "Microwave",
    oem: "6549W1S011B", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
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
