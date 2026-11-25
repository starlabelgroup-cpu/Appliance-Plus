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
  appliance: "Dryer" | "Washer" | "Refrigerator" | "Dishwasher" | "Range" | "Microwave" | "Ice Maker" | "Garbage Disposal" | "Installation";
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
  {
    sku: "WD15X10014", name: "GE Dishwasher Water Inlet Valve", appliance: "Dishwasher",
    oem: "WD15X10014", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WD21X10060", name: "GE Dishwasher Drain Solenoid Kit", appliance: "Dishwasher",
    oem: "WD21X10060", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WD26X10013", name: "GE Dishwasher Motor & Pump Assembly", appliance: "Dishwasher",
    oem: "WD26X10013", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB25X10019", name: "GE Microwave Halogen Bulb 20W", appliance: "Microwave",
    oem: "WB25X10019", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB36X10003", name: "GE Microwave Light Bulb 40W", appliance: "Microwave",
    oem: "WB36X10003", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "8206232", name: "Whirlpool Microwave Light Bulb 40W", appliance: "Microwave",
    oem: "8206232", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10208631A", name: "Whirlpool Microwave Grease Filter", appliance: "Microwave",
    oem: "W10208631A", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "10023852", name: "Bosch Dishwasher Water Inlet Valve", appliance: "Dishwasher",
    oem: "10023852", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "12008381", name: "Bosch Dishwasher Circulation Pump & Heater Assembly", appliance: "Dishwasher",
    oem: "12008381", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "00631200", name: "Bosch Dishwasher Drain Pump", appliance: "Dishwasher",
    oem: "00631200", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "154827601", name: "Frigidaire Dishwasher Drain Pump", appliance: "Dishwasher",
    oem: "154827601", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5304517203", name: "Frigidaire Dishwasher Spray Arm", appliance: "Dishwasher",
    oem: "5304517203", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10518394", name: "Whirlpool Dishwasher Heating Element", appliance: "Dishwasher",
    oem: "W10518394", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10876537", name: "Whirlpool Dishwasher Drain Pump", appliance: "Dishwasher",
    oem: "W10876537", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11175771", name: "Whirlpool Dishwasher Water Inlet Valve", appliance: "Dishwasher",
    oem: "W11175771", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10195416V", name: "Whirlpool Dishwasher Rack Wheel", appliance: "Dishwasher",
    oem: "W10195416V", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB2X9998", name: "GE Oven Igniter", appliance: "Range",
    oem: "WB2X9998", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB2X9154", name: "GE Range Oven Igniter", appliance: "Range",
    oem: "WB2X9154", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB44K5012", name: "GE Oven Bake Element", appliance: "Range",
    oem: "WB44K5012", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB44X200", name: "GE Oven Bake Element", appliance: "Range",
    oem: "WB44X200", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB44T10011", name: "GE Range Oven Bake Element", appliance: "Range",
    oem: "WB44T10011", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WB24T10029", name: "GE Surface Unit Switch", appliance: "Range",
    oem: "WB24T10029", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "12001676", name: "Whirlpool Range Surface Element Receptacle Kit", appliance: "Range",
    oem: "12001676", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "330031", name: "Whirlpool Range Terminal Block", appliance: "Range",
    oem: "330031", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "12400035", name: "Whirlpool Oven Igniter Kit", appliance: "Range",
    oem: "12400035", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "4342528", name: "Whirlpool Oven Igniter", appliance: "Range",
    oem: "4342528", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP3149400", name: "Whirlpool Range Infinite Switch", appliance: "Range",
    oem: "WP3149400", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WP3149404", name: "Whirlpool Range Infinite Switch", appliance: "Range",
    oem: "WP3149404", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5303935058", name: "Frigidaire Range Terminal Block Kit", appliance: "Range",
    oem: "5303935058", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5303051519", name: "Frigidaire Bake Element", appliance: "Range",
    oem: "5303051519", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "316442300", name: "Frigidaire Coil Surface Element", appliance: "Range",
    oem: "316442300", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR55X10025", name: "GE Refrigerator Temperature Sensor", appliance: "Refrigerator",
    oem: "WR55X10025", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR60X31522", name: "GE Refrigerator Evaporator Fan Motor", appliance: "Refrigerator",
    oem: "WR60X31522", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR60X26866", name: "GE Refrigerator Evaporator Fan Motor (DC)", appliance: "Refrigerator",
    oem: "WR60X26866", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR60X10185", name: "GE Refrigerator Evaporator Fan Motor (DC)", appliance: "Refrigerator",
    oem: "WR60X10185", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR51X10055", name: "GE Refrigerator Defrost Heater Assembly", appliance: "Refrigerator",
    oem: "WR51X10055", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR50X60", name: "GE Refrigerator Defrost Thermostat Kit", appliance: "Refrigerator",
    oem: "WR50X60", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WR62X10055", name: "GE Refrigerator Dispenser Solenoid Assembly", appliance: "Refrigerator",
    oem: "WR62X10055", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "242252702", name: "Frigidaire Refrigerator Water Inlet Valve", appliance: "Refrigerator",
    oem: "242252702", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "215846602", name: "Frigidaire Refrigerator Defrost Timer", appliance: "Refrigerator",
    oem: "215846602", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WPW10384183", name: "Whirlpool Refrigerator Thermistor", appliance: "Refrigerator",
    oem: "WPW10384183", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W11658802", name: "Whirlpool Ice Maker Assembly", appliance: "Ice Maker",
    oem: "W11658802", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10873791", name: "Whirlpool Ice Maker Assembly", appliance: "Ice Maker",
    oem: "W10873791", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "D7824706Q", name: "Whirlpool Ice Maker", appliance: "Ice Maker",
    oem: "D7824706Q", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "1129313", name: "Whirlpool Ice Maker Field Install Kit", appliance: "Ice Maker",
    oem: "1129313", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5303918277", name: "Frigidaire Ice Maker Kit", appliance: "Ice Maker",
    oem: "5303918277", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "AEQ73449909", name: "LG Ice Maker", appliance: "Ice Maker",
    oem: "AEQ73449909", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "279769", name: "Whirlpool Dryer Thermal Cutoff", appliance: "Dryer",
    oem: "279769", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "279834", name: "Whirlpool Dryer Gas Valve Coils", appliance: "Dryer",
    oem: "279834", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5303931775", name: "Frigidaire Dryer Gas Valve Coil Kit", appliance: "Dryer",
    oem: "5303931775", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5304523155", name: "Frigidaire Dryer Drum Roller", appliance: "Dryer",
    oem: "5304523155", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "4581EL2002C", name: "LG Dryer Roller Assembly", appliance: "Dryer",
    oem: "4581EL2002C", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "AGM75510755", name: "LG Dryer Drum Roller Kit (4 pk)", appliance: "Dryer",
    oem: "AGM75510755", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE3M26", name: "GE Dryer Front Drum Bearing", appliance: "Dryer",
    oem: "WE3M26", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE49X20697", name: "GE Dryer Bearing Repair Kit", appliance: "Dryer",
    oem: "WE49X20697", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE03X23881", name: "GE Dryer Lint Filter", appliance: "Dryer",
    oem: "WE03X23881", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE03X37317", name: "GE Dryer Top Drum Bearing Green (2 pk)", appliance: "Dryer",
    oem: "WE03X37317", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE03X37318", name: "GE Dryer Top Drum Bearing White (2 pk)", appliance: "Dryer",
    oem: "WE03X37318", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE04X28977", name: "GE Dryer Door Switch", appliance: "Dryer",
    oem: "WE04X28977", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WE4M533", name: "GE Dryer Timer", appliance: "Dryer",
    oem: "WE4M533", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5220FR2075L", name: "LG Washer Cold Water Inlet Valve", appliance: "Washer",
    oem: "5220FR2075L", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "5304528029", name: "Frigidaire Washer Water Inlet Valve", appliance: "Washer",
    oem: "5304528029", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "80040", name: "Whirlpool Washer Agitator Dogs", appliance: "Washer",
    oem: "80040", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "W10780045", name: "Whirlpool Washer Suspension Rod", appliance: "Washer",
    oem: "W10780045", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH03X30517", name: "GE Washer Mode Shifter", appliance: "Washer",
    oem: "WH03X30517", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH08X37937", name: "GE Washer Lid Lock with Striker", appliance: "Washer",
    oem: "WH08X37937", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH01X27538", name: "GE Washer Drive Belt", appliance: "Washer",
    oem: "WH01X27538", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH41X10096", name: "GE Washer Drain Hose 4.5 ft", appliance: "Washer",
    oem: "WH41X10096", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH16X26910", name: "GE Washer Suspension Rod & Spring (Right, Green)", appliance: "Washer",
    oem: "WH16X26910", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WH16X26911", name: "GE Washer Suspension Rod & Spring (Left, White)", appliance: "Washer",
    oem: "WH16X26911", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "134503600", name: "Frigidaire Dryer Drive Belt", appliance: "Dryer",
    oem: "134503600", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "84211601", name: "Whirlpool Garbage Disposal 1/2 HP Continuous Feed", appliance: "Garbage Disposal",
    oem: "84211601", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "84211602", name: "Whirlpool Garbage Disposal 1/2 HP Continuous Feed with Cord", appliance: "Garbage Disposal",
    oem: "84211602", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 1, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WX09X10002", name: "GE Dryer Cord 4 ft 30A 3-Wire", appliance: "Installation",
    oem: "WX09X10002", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WX09X10018", name: "GE Dryer Cord 4 ft 30A 4-Wire", appliance: "Installation",
    oem: "WX09X10018", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WX09X10035", name: "GE Range Cord 4 ft 40A 4-Wire", appliance: "Installation",
    oem: "WX09X10035", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WX09X70910", name: "GE Dishwasher Power Cord 5 ft 4 in", appliance: "Installation",
    oem: "WX09X70910", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
    evidence: [],
  },
  {
    sku: "WX08X10006", name: "GE Refrigerator Water Line 8 ft PEX (Universal)", appliance: "Installation",
    oem: "WX08X10006", kind: "Genuine OEM", price: 0, proPrice: 0,
    stock: 0, reorderAt: 2, bin: "—", symptoms: [],
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
