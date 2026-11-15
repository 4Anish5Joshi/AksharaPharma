export const COMPANY = {
  name: 'Akshara Pharmaa',
  tagline: 'Impurity standards built for regulatory confidence',
  description:
    'Akshara Pharmaa specializes in nitrosamine impurities and impurity / working standards as per IP/EP/BP/USP for the pharmaceutical industry. Our solutions support regulatory compliance, analytical method development, validation, and routine quality control testing.',
  contacts: {
    impurities: {
      label: 'Impurities',
      phone: '+91-8858636969',
      phoneHref: 'tel:+918858636969',
      email: 'marketing@aksharapharmaa.in',
      emailHref: 'mailto:marketing@aksharapharmaa.in',
    },
    consumables: {
      label: 'Consumables',
      phone: '+91-86919-99837',
      phoneHref: 'tel:+918691999837',
      email: 'Aksharapharmaa@gmail.com',
      emailHref: 'mailto:Aksharapharmaa@gmail.com',
    },
  },
  /** Primary contact (impurities) — used for default CTAs */
  phone: '+91-8858636969',
  phoneHref: 'tel:+918858636969',
  email: 'marketing@aksharapharmaa.in',
  emailHref: 'mailto:marketing@aksharapharmaa.in',
  gstin: '27ARBPM6153C1Z1',
  iec: 'ARBPM6153C',
  msme: 'UDYAM-MH-17-0138210',
  iso: 'ISO 9001:2015',
  address: {
    line1: 'G/5 Sita Complex, Achole Road',
    line2: 'Nallasopra (East), Palghar',
    line3: 'Maharashtra 401209, India',
    full: 'G/5 Sita Complex | Achole Road | Nallasopra (East) | Palghar Maharashtra 401209 | India',
  },
  coreExpertise: [
    {
      title: 'Nitrosamine impurities',
      items: [
        'Comprehensive portfolio of Nitrosamine Impurity Standards',
        'Custom synthesis of complex Nitrosamine impurities',
        'Trace-level quantification solutions',
        'High-purity materials with complete characterization and documentation',
        'Regulatory-compliant impurity materials for analytical applications',
      ],
    },
    {
      title: 'Impurity and Working Standards',
      items: [
        'Aligned to IP, EP, BP, and USP requirements',
        'Suitable for routine QC testing and method validation',
        'High-purity materials with complete characterization and documentation',
        'Support for pharmacopoeial monograph applications',
        'Regulatory-ready materials for analytical laboratories',
      ],
    },
  ],
  analyticalServices: [
    'Impurity identification and profiling',
    'Method development and validation support',
    'Stability and degradation studies',
  ],
  customResearchSupport: [
    'Custom synthesis as per client requirement',
    'Analytical method troubleshooting',
    'Regulatory-oriented analytical documentation',
  ],
  documentation: [
    { title: 'Certificate of Analysis', short: 'COA', detail: 'Batch-level purity and identity confirmation' },
    { title: 'Mass Spectrometry Data', short: 'MS', detail: 'Structural verification via mass spectra' },
    { title: 'NMR Characterization', short: 'NMR', detail: 'Complete structural elucidation support' },
    { title: 'Infrared Spectrophotometer', short: 'IR', detail: 'Functional group confirmation via infrared spectra' },
    { title: 'TGA Reports', short: 'TGA', detail: 'Thermal stability and residual content' },
    { title: 'Chromatographic Purity', short: 'HPLC', detail: 'Assay and related-substance profiles' },
  ],
} as const;
