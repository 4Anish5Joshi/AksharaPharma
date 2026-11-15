export type ConsumableCategoryId =
  | 'filtration'
  | 'hplc-syringe'
  | 'hplc-fittings'
  | 'hplc-accessories'
  | 'hplc-gc';

export interface ConsumableItem {
  id: string;
  name: string;
  category: ConsumableCategoryId;
  description: string;
  specs?: string[];
  image?: string;
}

export interface ConsumableCategory {
  id: ConsumableCategoryId;
  title: string;
  summary: string;
}

export const CONSUMABLE_CATEGORIES: ConsumableCategory[] = [
  {
    id: 'filtration',
    title: 'Filtration Accessories & Consumables',
    summary: 'Vacuum traps, membrane filters, capsule and cartridge filters for lab filtration workflows.',
  },
  {
    id: 'hplc-syringe',
    title: 'HPLC — Syringe Filters & Storage',
    summary: 'Disposable syringe filters, sample filtration kits, and HPLC column storage cabinets.',
  },
  {
    id: 'hplc-fittings',
    title: 'HPLC — PEEK Fittings',
    summary: 'High-pressure PEEK fittings, unions, tees, crosses, couplers, adaptors, and manifolds.',
  },
  {
    id: 'hplc-accessories',
    title: 'HPLC — Tubing & Accessories',
    summary: 'SS unions, column end plugs, safety bottle caps, compression fittings, PEEK tubing and cutters.',
  },
  {
    id: 'hplc-gc',
    title: 'HPLC / GC Consumables',
    summary: 'Purge valves, GL45 caps, ferrules, capillary nuts, and deuterium lamps for HPLC/GC systems.',
  },
];

export const CONSUMABLES: ConsumableItem[] = [
  // Slide 3 — Filtration
  {
    id: 'pp-vacuum-trap',
    name: 'PP Vacuum Filtration Trap',
    category: 'filtration',
    description: 'Polypropylene vacuum filtration trap for safe solvent and filtrate collection.',
    image: '/images/consumables/products/s3-p8.png',
  },
  {
    id: 'glass-vacuum-trap',
    name: 'Glass Vacuum Filtration Trap',
    category: 'filtration',
    description: 'Glass vacuum filtration setup with trap flask for laboratory filtration systems.',
    image: '/images/consumables/products/s3-p1.png',
  },
  {
    id: 'ss-support-screen',
    name: 'SS Support Screen',
    category: 'filtration',
    description: 'Stainless steel support screen for membrane filtration assemblies.',
  },
  {
    id: 'silicone-stopper',
    name: 'Silicone Stopper',
    category: 'filtration',
    description: 'Laboratory-grade silicone stopper for vacuum filtration glassware.',
  },
  {
    id: 'silicone-tube',
    name: 'Silicone Tube',
    category: 'filtration',
    description: 'Flexible silicone tubing for vacuum and fluid transfer connections.',
  },
  {
    id: 'media-dispensing-cap',
    name: 'Media Dispensing Cap',
    category: 'filtration',
    description: 'Dispensing cap with stainless tubes for controlled media transfer.',
    image: '/images/consumables/products/s3-p2.png',
  },
  {
    id: 'filtration-cap-gl45',
    name: 'Filtration Cap GL45',
    category: 'filtration',
    description: 'GL45 filtration cap assembly for bottle-top filtration applications.',
    image: '/images/consumables/products/s3-p9.png',
  },
  {
    id: 'petri-slide-47',
    name: 'Petri Slide 47mm',
    category: 'filtration',
    description: '47 mm petri slides for membrane filter analysis and microbial testing.',
    image: '/images/consumables/products/s3-p5.png',
  },
  {
    id: 'filter-forceps',
    name: 'Filter Forceps',
    category: 'filtration',
    description: 'Forceps for clean handling of membrane filters and filter papers.',
    image: '/images/consumables/products/s3-p6.png',
  },
  {
    id: 'sterile-membrane-filter',
    name: 'Sterile Membrane Filter',
    category: 'filtration',
    description: 'Individually packed sterile membrane filters for critical filtration use.',
    image: '/images/consumables/products/s3-p7.png',
  },
  {
    id: 'nylon-membrane-filter',
    name: 'Nylon Membrane Filter',
    category: 'filtration',
    description: 'Nylon membrane filters for aqueous and solvent filtration workflows.',
  },
  {
    id: 'capsule-filter',
    name: 'Capsule Filter (PES, PVDF)',
    category: 'filtration',
    description: 'Ready-to-use capsule filters available in PES and PVDF media.',
    image: '/images/consumables/products/s3-p3.png',
  },
  {
    id: 'cartridge-filter',
    name: 'Cartridge Filter (Ny66, PES, PVDF, PP)',
    category: 'filtration',
    description: 'Pleated cartridge filters in Nylon 66, PES, PVDF, and PP options.',
    image: '/images/consumables/products/s3-p4.png',
  },

  // Slide 4 — HPLC syringe filters & cabinets
  {
    id: 'nylon-syringe-filter',
    name: 'Nylon Syringe Filter',
    category: 'hplc-syringe',
    description: 'Disposable nylon syringe filters for HPLC sample preparation.',
    specs: ['13mm / 0.22 µm', '13mm / 0.45 µm', '25mm / 0.22 µm', '25mm / 0.45 µm'],
  },
  {
    id: 'ptfe-syringe-filter',
    name: 'PTFE Syringe Filter',
    category: 'hplc-syringe',
    description: 'PTFE syringe filters for aggressive solvents and HPLC applications.',
    specs: ['13mm / 0.22 µm', '13mm / 0.45 µm', '25mm / 0.22 µm', '25mm / 0.45 µm'],
  },
  {
    id: 'pvdf-syringe-filter',
    name: 'PVDF Syringe Filter',
    category: 'hplc-syringe',
    description: 'PVDF syringe filters for low protein-binding sample filtration.',
    specs: ['13mm / 0.22 µm', '13mm / 0.45 µm', '25mm / 0.22 µm', '25mm / 0.45 µm'],
  },
  {
    id: 'sample-filtration-kit',
    name: 'Sample Filtration Kit',
    category: 'hplc-syringe',
    description: 'Complete kit for HPLC sample filtration and preparation.',
    specs: [
      'Gas tight glass syringe 10 ml, Luer Male',
      'SS 316L syringe filter holder — 13 mm / 25 mm',
      'Membrane filter paper 0.45 µm',
      'Nylon 66 media — 100/pkt',
      'Needles set included',
    ],
  },
  {
    id: 'column-cabinet-120',
    name: 'ABS Plastic Column Storage Cabinet',
    category: 'hplc-syringe',
    description: 'Lockable ABS HPLC column storage cabinet for organized column management.',
    specs: [
      'Capacity: 120 HPLC columns (5+5+5+5 drawers)',
      'Dimension (W×H×D): 280 × 1210 × 410 mm',
      'CSC-6P: 60 columns (6 drawers)',
      'CSC-12P: 120 columns (6+6 drawers)',
      'Lock & key available',
    ],
    image: '/images/consumables/products/s4-p1.png',
  },

  // Slide 5 — PEEK fittings
  {
    id: 'high-pressure-fittings',
    name: 'High Pressure Fittings',
    category: 'hplc-fittings',
    description:
      'Extra durability versus standard PEEK fittings — robust to higher temperatures, solvent exposure, and over-tightening.',
    specs: ['Built-in ferrules', 'Size: 1/16"', 'Multiple dimensions available'],
  },
  {
    id: 'peek-union',
    name: 'HPLC PEEK Union (0.25 mm I.D.)',
    category: 'hplc-fittings',
    description: 'PEEK union for easy, low dead-volume connection of transfer and solvent lines.',
    specs: ['Easy connection of transfer/solvent lines', 'Low dead volume', 'Inert and biocompatible'],
  },
  {
    id: 'peek-tees-crosses',
    name: 'PEEK Tees & Crosses',
    category: 'hplc-fittings',
    description:
      '100% PEEK flow path usable with common organic and inorganic HPLC solvents without corrosion risk.',
    specs: ['Smooth taper into threaded section', 'Compatible with 10-32 fittings'],
  },
  {
    id: 'peek-column-coupler',
    name: 'PEEK Column Coupler',
    category: 'hplc-fittings',
    description:
      'Low swept-volume connection that helps maintain column efficiency when coupling devices.',
    specs: ['Swept volume 3.6 µL', 'Thru-hole 0.010"', 'Male-to-male 10-32 coned'],
  },
  {
    id: 'peek-adaptor',
    name: 'PEEK Adaptor',
    category: 'hplc-fittings',
    description:
      'Color-coded adaptors for semi-rigid tubing with two-piece nut and ferrule for liquid-tight connection.',
    specs: ['Withstands pressures up to 500 psi', 'Color-coded by tubing size'],
  },
  {
    id: 'peek-manifold-7port',
    name: 'Manifold Assembly, PEEK, 7 Port',
    category: 'hplc-fittings',
    description: 'Securely joins fluid pathway components and holds tight through vibration.',
    specs: ['1/16" OD tubing', '0.040" thru-hole', '1/EA'],
  },

  // Slide 6 — accessories
  {
    id: 'ss-union',
    name: 'Stainless Steel Union',
    category: 'hplc-accessories',
    description: 'SS union for transfer and solvent line connections with low dead volume.',
    specs: ['Easy connection of transfer/solvent lines', 'Low dead volume', 'Inert and biocompatible'],
    image: '/images/consumables/products/s6-p1.png',
  },
  {
    id: 'column-end-plugs',
    name: 'Column End Plugs',
    category: 'hplc-accessories',
    description: 'Hard nylon plugs to prevent HPLC columns from drying out when not in use.',
    specs: [
      'White / Green / Red / Black / Blue',
      'Nylon 10-32 thread',
      '100/pack options available',
    ],
  },
  {
    id: 'safety-bottle-caps',
    name: 'HPLC Safety Bottle Caps with Filter',
    category: 'hplc-accessories',
    description: 'Safety bottle caps with vent filter for HPLC solvent bottles.',
    specs: ['White Tefzel insert (ETFE)', 'Port size 1/8" with vent'],
    image: '/images/consumables/products/s6-p2.png',
  },
  {
    id: 'compression-fittings',
    name: 'Compression Fittings / Connectors',
    category: 'hplc-accessories',
    description: 'Chemically stable compression connectors for lab fluid systems.',
    specs: [
      'Compression × UNF(M)',
      'Thread 1/4"-28 UNF(M)',
      'Resistant to most organic solvents',
      'Sterilizable at 100°C',
    ],
  },
  {
    id: 'peek-tubing',
    name: 'PEEK Tubing',
    category: 'hplc-accessories',
    description: 'High-quality PEEK tubing for demanding LC applications.',
    specs: ['I.D. as small as 0.001"', 'Wall thickness 0.002"'],
  },
  {
    id: 'peek-tube-cutter',
    name: 'PEEK Tube Cutter',
    category: 'hplc-accessories',
    description: 'Cuts PEEK, PTFE, ETFE and other polymeric tubing without distorting OD/ID.',
    specs: [
      'Burr-free perpendicular ends',
      'Ideal for demanding LC applications',
      'Safety lock for blade',
    ],
    image: '/images/consumables/products/s6-p3.png',
  },

  // Slide 7 — HPLC/GC
  {
    id: 'agilent-purge-valve',
    name: 'Agilent Purge Valve with PTFE Frits',
    category: 'hplc-gc',
    description: 'Short purge valve with PTFE frit for Agilent HPLC pumps.',
    specs: ['Fits 1120, 1220, G7110, G7111 pumps', '600 bar max'],
    image: '/images/consumables/products/s7-p1.png',
  },
  {
    id: 'gl45-cap-3port',
    name: 'GL45 Cap with Tube Head — 3 Port',
    category: 'hplc-gc',
    description: 'Multi-port GL45 cap assembly for HPLC solvent lines.',
    specs: [
      '1/8" HPLC tubing',
      'PEEK fittings 1/8"',
      'Last drop filter 1/8 × 10 µm SS 316',
      'Tube pack options available',
    ],
    image: '/images/consumables/products/s7-p2.png',
  },
  {
    id: 'aluminium-ferrule',
    name: 'Aluminium Ferrule G3188-27501',
    category: 'hplc-gc',
    description: 'Flexi inert aluminium ferrule for capillary connections.',
    specs: ['0.25 mm', 'Inert flexi ferrule'],
    image: '/images/consumables/products/s7-p3.png',
  },
  {
    id: 'capillary-column-nut',
    name: 'Capillary Column Nut',
    category: 'hplc-gc',
    description: 'Hexagonal wrench-tight capillary column nut for Agilent injectors (non-MS detectors).',
    specs: ['0.25 mm', 'Pkt / 2/pk'],
    image: '/images/consumables/products/s7-p4.png',
  },
  {
    id: 'd2-lamp',
    name: 'D2 Deuterium Lamp',
    category: 'hplc-gc',
    description: 'Deuterium lamp for UV detectors and HPLC optical systems.',
    image: '/images/consumables/products/s7-p5.png',
  },
  {
    id: 'capillary-ferrule-nut',
    name: 'Capillary Ferrule Nut',
    category: 'hplc-gc',
    description: 'Capillary ferrule nut compatible with Agilent injectors.',
    specs: ['0.8 mm', 'Pkt / 10/pk'],
    image: '/images/consumables/products/s7-p6.png',
  },
];
