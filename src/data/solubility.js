// Solubility & Ksp — content bank for Sai

export const mcqs = [
  {
    q: 'Solubility product K<sub>sp</sub> of AB type salt (1:1) of solubility s mol/L is:',
    options: ['s', 's²', '2s', '4s³'],
    answer: 1,
    explain: 'AB ⇌ A<sup>+</sup> + B<sup>–</sup>. [A][B] = s·s = s².'
  },
  {
    q: 'For AB<sub>2</sub> type salt (e.g., CaF<sub>2</sub>) of solubility s, K<sub>sp</sub> equals:',
    options: ['s²', '2s³', '4s³', 's³'],
    answer: 2,
    explain: 'CaF<sub>2</sub> ⇌ Ca<sup>2+</sup> + 2F<sup>–</sup>. [Ca<sup>2+</sup>] = s, [F<sup>–</sup>] = 2s. K<sub>sp</sub> = s(2s)² = 4s³.'
  },
  {
    q: 'For A<sub>2</sub>B<sub>3</sub> type salt of solubility s, K<sub>sp</sub> is:',
    options: ['s<sup>5</sup>', '108 s<sup>5</sup>', '6s<sup>5</sup>', '4s<sup>5</sup>'],
    answer: 1,
    explain: 'A<sub>2</sub>B<sub>3</sub> ⇌ 2A<sup>3+</sup> + 3B<sup>2–</sup>. K<sub>sp</sub> = (2s)² (3s)³ = 4·27·s<sup>5</sup> = 108 s<sup>5</sup>.'
  },
  {
    q: 'Ksp of AgCl is 1.6 × 10<sup>–10</sup>. Its molar solubility in water is:',
    options: ['1.26 × 10<sup>–5</sup> M', '1.26 × 10<sup>–10</sup> M', '1.6 × 10<sup>–5</sup> M', '4 × 10<sup>–10</sup> M'],
    answer: 0,
    explain: 's = √K<sub>sp</sub> = √(1.6 × 10<sup>–10</sup>) = 1.26 × 10<sup>–5</sup> M.'
  },
  {
    q: 'If ionic product Q < K<sub>sp</sub>, the solution is:',
    options: ['Unsaturated (no precipitate)', 'Saturated', 'Supersaturated', 'At equilibrium'],
    answer: 0,
    explain: 'Q < K<sub>sp</sub>: more salt can dissolve → unsaturated.'
  },
  {
    q: 'If Q > K<sub>sp</sub>:',
    options: ['Solution is unsaturated', 'Precipitation occurs', 'Nothing happens', 'Temperature must rise'],
    answer: 1,
    explain: 'Q > K<sub>sp</sub> → supersaturated → precipitation occurs until Q returns to K<sub>sp</sub>.'
  },
  {
    q: 'Solubility product K<sub>sp</sub> varies with:',
    options: ['Concentration only', 'Temperature only', 'Volume only', 'Stirring rate'],
    answer: 1,
    explain: 'K<sub>sp</sub> is a thermodynamic constant — depends only on temperature (through ΔG° and K).'
  },
  {
    q: 'Which of the following salts is LEAST soluble in water?',
    options: [
      'AgCl (K<sub>sp</sub> = 1.6 × 10<sup>–10</sup>)',
      'AgBr (K<sub>sp</sub> = 5 × 10<sup>–13</sup>)',
      'AgI (K<sub>sp</sub> = 8.3 × 10<sup>–17</sup>)',
      'Ag<sub>2</sub>CO<sub>3</sub> (K<sub>sp</sub> = 8 × 10<sup>–12</sup>)'
    ],
    answer: 2,
    explain: 'Smallest K<sub>sp</sub> (AgI) among 1:1 halides → least soluble.'
  },
  {
    q: 'Solubility of PbI<sub>2</sub> (K<sub>sp</sub> = 7.1 × 10<sup>–9</sup>) in water is approximately:',
    options: ['1.2 × 10<sup>–3</sup> M', '7.1 × 10<sup>–5</sup> M', '1 × 10<sup>–3</sup> M', '8.4 × 10<sup>–5</sup> M'],
    answer: 0,
    explain: 'K<sub>sp</sub> = 4s³ → s³ = K<sub>sp</sub>/4 = 1.78 × 10<sup>–9</sup> → s ≈ 1.21 × 10<sup>–3</sup> M.'
  },
  {
    q: 'Solubility decreases with the addition of a common ion because:',
    options: [
      'Temperature falls',
      'K<sub>sp</sub> decreases',
      'Equilibrium shifts backward (Le Chatelier)',
      'Salt reacts with the common ion'
    ],
    answer: 2,
    explain: 'K<sub>sp</sub> stays the same (T fixed). [common ion] rises → other ion concentration must fall → solubility ↓.'
  },
  {
    q: 'pH and solubility: solubility of Mg(OH)<sub>2</sub> is:',
    options: ['Higher in basic solution', 'Higher in acidic solution', 'Unaffected by pH', 'Only in neutral solution'],
    answer: 1,
    explain: 'H<sup>+</sup> consumes OH<sup>–</sup> → equilibrium shifts right → solubility increases in acid.'
  },
  {
    q: 'If [Ca<sup>2+</sup>] = 10<sup>–3</sup> M and [F<sup>–</sup>] = 10<sup>–3</sup> M, does CaF<sub>2</sub> precipitate? (K<sub>sp</sub> = 3.4 × 10<sup>–11</sup>)',
    options: ['Yes', 'No', 'Only at high T', 'Not enough info'],
    answer: 0,
    explain: 'Q = [Ca<sup>2+</sup>][F<sup>–</sup>]² = 10<sup>–3</sup> × (10<sup>–3</sup>)² = 10<sup>–9</sup>. Q (10<sup>–9</sup>) > K<sub>sp</sub> (3.4 × 10<sup>–11</sup>) → precipitation.'
  },
  {
    q: 'When NaCl is added to a saturated AgCl solution, [Ag<sup>+</sup>]:',
    options: ['Increases', 'Decreases', 'Unchanged', 'Becomes zero'],
    answer: 1,
    explain: 'Common Cl<sup>–</sup> shifts AgCl ⇌ Ag<sup>+</sup> + Cl<sup>–</sup> backward → [Ag<sup>+</sup>] drops.'
  },
  {
    q: 'On heating, K<sub>sp</sub> of most salts:',
    options: ['Increases (dissolution endothermic)', 'Always decreases', 'Stays constant', 'Becomes zero'],
    answer: 0,
    explain: 'Most salt dissolution is endothermic → K<sub>sp</sub> ↑ with T. (A few exceptions: Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> is exothermic.)'
  },
  {
    q: 'For Ag<sub>2</sub>CrO<sub>4</sub> (K<sub>sp</sub> = 1.1 × 10<sup>–12</sup>), molar solubility is:',
    options: ['6.5 × 10<sup>–5</sup> M', '1.05 × 10<sup>–6</sup> M', '1.05 × 10<sup>–4</sup> M', '3.3 × 10<sup>–6</sup> M'],
    answer: 0,
    explain: 'K<sub>sp</sub> = (2s)²(s) = 4s³ → s³ = 2.75 × 10<sup>–13</sup> → s ≈ 6.5 × 10<sup>–5</sup> M.'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2023]</b> The solubility product of BaSO<sub>4</sub> at 298 K is 1.08 × 10<sup>–10</sup>. The solubility of BaSO<sub>4</sub> in pure water is:',
    options: ['1.04 × 10<sup>–5</sup> M', '1.04 × 10<sup>–10</sup> M', '1.08 × 10<sup>–5</sup> M', '1.08 × 10<sup>–10</sup> M'],
    answer: 0,
    explain: 's = √K<sub>sp</sub> = √(1.08 × 10<sup>–10</sup>) ≈ 1.04 × 10<sup>–5</sup> M.'
  },
  {
    q: '<b>[NEET 2021]</b> The solubility of CaF<sub>2</sub> in a solution of 0.1 M Ca(NO<sub>3</sub>)<sub>2</sub> is (K<sub>sp</sub> of CaF<sub>2</sub> = 3.2 × 10<sup>–11</sup>):',
    options: ['8.94 × 10<sup>–6</sup> M', '3.2 × 10<sup>–10</sup> M', '4 × 10<sup>–5</sup> M', '2 × 10<sup>–5</sup> M'],
    answer: 0,
    explain: '[Ca<sup>2+</sup>] ≈ 0.1 M. K<sub>sp</sub> = 0.1 × (2s)² = 0.4 s² → s² = 8 × 10<sup>–11</sup> → s ≈ 8.94 × 10<sup>–6</sup> M.'
  },
  {
    q: '<b>[NEET 2020]</b> The solubility of Ag<sub>2</sub>CrO<sub>4</sub> is 2 × 10<sup>–4</sup> mol/L. Its solubility product is:',
    options: ['4 × 10<sup>–8</sup>', '3.2 × 10<sup>–11</sup>', '8 × 10<sup>–12</sup>', '1.6 × 10<sup>–11</sup>'],
    answer: 1,
    explain: 'K<sub>sp</sub> = 4s³ = 4 × (2 × 10<sup>–4</sup>)³ = 4 × 8 × 10<sup>–12</sup> = 3.2 × 10<sup>–11</sup>.'
  },
  {
    q: '<b>[NEET 2019]</b> pH of a saturated solution of Ca(OH)<sub>2</sub> is 9. The solubility product (K<sub>sp</sub>) of Ca(OH)<sub>2</sub> is:',
    options: ['0.5 × 10<sup>–15</sup>', '0.25 × 10<sup>–10</sup>', '0.125 × 10<sup>–15</sup>', '0.5 × 10<sup>–10</sup>'],
    answer: 0,
    explain: 'pH 9 → pOH 5 → [OH<sup>–</sup>] = 10<sup>–5</sup>. [Ca<sup>2+</sup>] = 10<sup>–5</sup>/2 = 0.5 × 10<sup>–5</sup>. K<sub>sp</sub> = 0.5 × 10<sup>–5</sup> × (10<sup>–5</sup>)² = 0.5 × 10<sup>–15</sup>.'
  },
  {
    q: '<b>[NEET 2017]</b> The solubility product of a salt having general formula MX<sub>2</sub> in water is 4 × 10<sup>–12</sup>. The solubility of the salt in mol/L is:',
    options: ['1 × 10<sup>–4</sup>', '2 × 10<sup>–6</sup>', '4 × 10<sup>–10</sup>', '1.6 × 10<sup>–4</sup>'],
    answer: 0,
    explain: 'K<sub>sp</sub> = 4s³ = 4 × 10<sup>–12</sup> → s³ = 10<sup>–12</sup> → s = 10<sup>–4</sup> M.'
  },
  {
    q: '<b>[AIPMT 2015]</b> MY and NY<sub>3</sub> are insoluble salts with K<sub>sp</sub>(MY) = 6.2 × 10<sup>–13</sup> and K<sub>sp</sub>(NY<sub>3</sub>) = 2.7 × 10<sup>–11</sup> at 25°C. Which of the following statements is correct about molar solubilities?',
    options: [
      'Molar solubility of MY in water is less than NY<sub>3</sub>',
      'Molar solubility of MY in water is more than NY<sub>3</sub>',
      'They are equally soluble',
      'The solubilities depend on pH'
    ],
    answer: 0,
    explain: 's(MY) = √(6.2 × 10<sup>–13</sup>) ≈ 7.87 × 10<sup>–7</sup>. s(NY<sub>3</sub>) = (K<sub>sp</sub>/27)<sup>1/4</sup> = (10<sup>–12</sup>)<sup>1/4</sup> ≈ 10<sup>–3</sup>. NY<sub>3</sub> is much more soluble → MY is less soluble.'
  },
  {
    q: '<b>[NEET 2016]</b> Equal volumes of two solutions — one 3 × 10<sup>–4</sup> M AgNO<sub>3</sub> and the other 1 × 10<sup>–4</sup> M NaCl — are mixed. Will AgCl (K<sub>sp</sub> = 1.8 × 10<sup>–10</sup>) precipitate?',
    options: ['Yes', 'No', 'Only on cooling', 'Cannot be determined'],
    answer: 0,
    explain: 'After mixing (halved): [Ag<sup>+</sup>] = 1.5 × 10<sup>–4</sup>, [Cl<sup>–</sup>] = 0.5 × 10<sup>–4</sup>. Q = 7.5 × 10<sup>–9</sup> > K<sub>sp</sub> → precipitates.'
  },
  {
    q: '<b>[AIPMT 2014]</b> The solubility of BaSO<sub>4</sub> in water is 2.33 × 10<sup>–4</sup> g/100 mL. Its solubility product is (M(BaSO<sub>4</sub>) = 233):',
    options: ['1 × 10<sup>–9</sup>', '1 × 10<sup>–10</sup>', '1 × 10<sup>–8</sup>', '1 × 10<sup>–5</sup>'],
    answer: 1,
    explain: 'Molar s = (2.33 × 10<sup>–4</sup> × 10)/233 = 10<sup>–5</sup> M. K<sub>sp</sub> = s² = 10<sup>–10</sup>.'
  },
]

export const numericals = [
  {
    q: 'Calculate the solubility of Mg(OH)<sub>2</sub> in water. K<sub>sp</sub> = 1 × 10<sup>–11</sup>.',
    tag: 'AB₂ type',
    steps: [
      'Mg(OH)<sub>2</sub> ⇌ Mg<sup>2+</sup> + 2OH<sup>–</sup>. [Mg<sup>2+</sup>] = s, [OH<sup>–</sup>] = 2s.',
      'K<sub>sp</sub> = s·(2s)² = 4s³',
      '4s³ = 1 × 10<sup>–11</sup>',
      's³ = 2.5 × 10<sup>–12</sup>',
      's ≈ 1.36 × 10<sup>–4</sup> M',
    ],
    answer: 's ≈ 1.36 × 10<sup>–4</sup> mol/L'
  },
  {
    q: 'Solubility of Ag<sub>2</sub>CrO<sub>4</sub> in 0.01 M AgNO<sub>3</sub>? (K<sub>sp</sub> = 1.1 × 10<sup>–12</sup>)',
    tag: 'Common ion',
    steps: [
      'Ag<sub>2</sub>CrO<sub>4</sub> ⇌ 2Ag<sup>+</sup> + CrO<sub>4</sub><sup>2–</sup>.',
      '[Ag<sup>+</sup>] ≈ 0.01 M (dominated by AgNO<sub>3</sub>).',
      'K<sub>sp</sub> = [Ag<sup>+</sup>]²·[CrO<sub>4</sub><sup>2–</sup>] = (0.01)² · s',
      's = K<sub>sp</sub>/10<sup>–4</sup> = 1.1 × 10<sup>–12</sup>/10<sup>–4</sup>',
      's = 1.1 × 10<sup>–8</sup> M',
    ],
    answer: 's = 1.1 × 10<sup>–8</sup> mol/L (suppressed)'
  },
  {
    q: 'Will precipitation of AgCl occur when equal volumes of 10<sup>–5</sup> M AgNO<sub>3</sub> and 10<sup>–5</sup> M NaCl are mixed? K<sub>sp</sub>(AgCl) = 1.6 × 10<sup>–10</sup>.',
    tag: 'Q vs Ksp',
    steps: [
      'After mixing (halved): [Ag<sup>+</sup>] = 5 × 10<sup>–6</sup> M, [Cl<sup>–</sup>] = 5 × 10<sup>–6</sup> M.',
      'Q = 5 × 10<sup>–6</sup> × 5 × 10<sup>–6</sup> = 2.5 × 10<sup>–11</sup>',
      'Compare: Q (2.5 × 10<sup>–11</sup>) < K<sub>sp</sub> (1.6 × 10<sup>–10</sup>).',
    ],
    answer: 'No precipitation (Q < K<sub>sp</sub>)'
  },
  {
    q: 'Calculate the minimum [F<sup>–</sup>] needed to just start precipitation of CaF<sub>2</sub> in 0.01 M Ca(NO<sub>3</sub>)<sub>2</sub>. K<sub>sp</sub>(CaF<sub>2</sub>) = 3.2 × 10<sup>–11</sup>.',
    tag: 'Precipitation threshold',
    steps: [
      '[Ca<sup>2+</sup>] = 0.01 M. At threshold, Q = K<sub>sp</sub>.',
      '[Ca<sup>2+</sup>]·[F<sup>–</sup>]² = 3.2 × 10<sup>–11</sup>',
      '[F<sup>–</sup>]² = 3.2 × 10<sup>–11</sup>/0.01 = 3.2 × 10<sup>–9</sup>',
      '[F<sup>–</sup>] = √(3.2 × 10<sup>–9</sup>) ≈ 5.66 × 10<sup>–5</sup> M',
    ],
    answer: '[F<sup>–</sup>] ≥ 5.66 × 10<sup>–5</sup> M'
  },
  {
    q: 'K<sub>sp</sub> of CaSO<sub>4</sub> = 9 × 10<sup>–6</sup>. What mass of CaSO<sub>4</sub> dissolves in 1 L water? (M = 136).',
    tag: 'Mass from Ksp',
    steps: [
      's = √K<sub>sp</sub> = √(9 × 10<sup>–6</sup>) = 3 × 10<sup>–3</sup> M',
      'mass = s × M = 3 × 10<sup>–3</sup> × 136',
      'mass = 0.408 g',
    ],
    answer: '0.408 g in 1 L'
  },
  {
    q: 'pH of saturated Mg(OH)<sub>2</sub> solution if K<sub>sp</sub> = 1 × 10<sup>–11</sup>.',
    tag: 'pH from Ksp',
    steps: [
      'K<sub>sp</sub> = 4s³ = 10<sup>–11</sup> → s ≈ 1.36 × 10<sup>–4</sup> M.',
      '[OH<sup>–</sup>] = 2s = 2.72 × 10<sup>–4</sup> M',
      'pOH = –log(2.72 × 10<sup>–4</sup>) ≈ 3.57',
      'pH = 14 – 3.57 = 10.43',
    ],
    answer: 'pH ≈ 10.43'
  },
  {
    q: 'In a solution of 0.1 M Mg<sup>2+</sup> and 0.1 M Ni<sup>2+</sup>, what range of [OH<sup>–</sup>] precipitates Ni(OH)<sub>2</sub> but not Mg(OH)<sub>2</sub>? K<sub>sp</sub>(Mg(OH)<sub>2</sub>) = 10<sup>–11</sup>, K<sub>sp</sub>(Ni(OH)<sub>2</sub>) = 2 × 10<sup>–16</sup>.',
    tag: 'Selective precipitation',
    steps: [
      'Ni(OH)<sub>2</sub> starts: [OH<sup>–</sup>]² = K<sub>sp</sub>/[Ni<sup>2+</sup>] = 2 × 10<sup>–16</sup>/0.1 = 2 × 10<sup>–15</sup> → [OH<sup>–</sup>] ≈ 4.47 × 10<sup>–8</sup>.',
      'Mg(OH)<sub>2</sub> starts: [OH<sup>–</sup>]² = 10<sup>–11</sup>/0.1 = 10<sup>–10</sup> → [OH<sup>–</sup>] = 10<sup>–5</sup>.',
      'Window: 4.47 × 10<sup>–8</sup> ≤ [OH<sup>–</sup>] < 10<sup>–5</sup> M.',
    ],
    answer: '[OH<sup>–</sup>]: 4.47 × 10<sup>–8</sup> → 10<sup>–5</sup> M (selective for Ni)'
  },
]

// Ksp vs Q predictor game — given ion concentrations and Ksp, predict precipitation.
export const gameCards = [
  {
    salt: 'AgCl',
    ksp: 1.6e-10,
    cations: 1e-5,
    anions: 1e-5,
    label: '[Ag⁺] = 10⁻⁵, [Cl⁻] = 10⁻⁵',
    q: 1e-10,
    answer: 'saturated',
    explain: 'Q = 10⁻¹⁰ ≈ Ksp → saturated (at the edge).',
  },
  {
    salt: 'AgCl',
    ksp: 1.6e-10,
    cations: 1e-4,
    anions: 1e-4,
    label: '[Ag⁺] = 10⁻⁴, [Cl⁻] = 10⁻⁴',
    q: 1e-8,
    answer: 'precipitate',
    explain: 'Q = 10⁻⁸ > Ksp (1.6 × 10⁻¹⁰) → precipitate.',
  },
  {
    salt: 'AgCl',
    ksp: 1.6e-10,
    cations: 1e-6,
    anions: 1e-6,
    label: '[Ag⁺] = 10⁻⁶, [Cl⁻] = 10⁻⁶',
    q: 1e-12,
    answer: 'unsaturated',
    explain: 'Q = 10⁻¹² < Ksp → unsaturated, no precipitate.',
  },
  {
    salt: 'BaSO₄',
    ksp: 1.1e-10,
    cations: 1e-5,
    anions: 1e-5,
    label: '[Ba²⁺] = 10⁻⁵, [SO₄²⁻] = 10⁻⁵',
    q: 1e-10,
    answer: 'saturated',
    explain: 'Q = 10⁻¹⁰ ≈ Ksp (1.1 × 10⁻¹⁰) → saturated.',
  },
  {
    salt: 'CaF₂ (AB₂)',
    ksp: 3.2e-11,
    cations: 0.01,
    anions: 0.001,
    label: '[Ca²⁺] = 0.01, [F⁻] = 10⁻³',
    q: 1e-8,
    answer: 'precipitate',
    explain: 'Q = [Ca²⁺][F⁻]² = 0.01 × (10⁻³)² = 10⁻⁸ > Ksp → precipitate.',
  },
  {
    salt: 'CaF₂ (AB₂)',
    ksp: 3.2e-11,
    cations: 0.01,
    anions: 1e-5,
    label: '[Ca²⁺] = 0.01, [F⁻] = 10⁻⁵',
    q: 1e-12,
    answer: 'unsaturated',
    explain: 'Q = 0.01 × (10⁻⁵)² = 10⁻¹² < Ksp → unsaturated.',
  },
  {
    salt: 'Mg(OH)₂',
    ksp: 1e-11,
    cations: 0.01,
    anions: 1e-4,
    label: '[Mg²⁺] = 0.01, [OH⁻] = 10⁻⁴',
    q: 1e-10,
    answer: 'precipitate',
    explain: 'Q = 0.01 × (10⁻⁴)² = 10⁻¹⁰ > Ksp (10⁻¹¹) → precipitate.',
  },
  {
    salt: 'Mg(OH)₂',
    ksp: 1e-11,
    cations: 0.01,
    anions: 1e-5,
    label: '[Mg²⁺] = 0.01, [OH⁻] = 10⁻⁵',
    q: 1e-12,
    answer: 'unsaturated',
    explain: 'Q = 0.01 × (10⁻⁵)² = 10⁻¹² < Ksp → unsaturated.',
  },
  {
    salt: 'PbI₂',
    ksp: 7.1e-9,
    cations: 1e-3,
    anions: 1e-3,
    label: '[Pb²⁺] = 10⁻³, [I⁻] = 10⁻³',
    q: 1e-9,
    answer: 'unsaturated',
    explain: 'Q = 10⁻³ × (10⁻³)² = 10⁻⁹ < Ksp (7.1 × 10⁻⁹) → just unsaturated.',
  },
  {
    salt: 'PbI₂',
    ksp: 7.1e-9,
    cations: 1e-2,
    anions: 1e-2,
    label: '[Pb²⁺] = 10⁻², [I⁻] = 10⁻²',
    q: 1e-6,
    answer: 'precipitate',
    explain: 'Q = 10⁻² × (10⁻²)² = 10⁻⁶ ≫ Ksp → precipitate.',
  },
  {
    salt: 'Ag₂CrO₄ (A₂B)',
    ksp: 1.1e-12,
    cations: 1e-4,
    anions: 1e-4,
    label: '[Ag⁺] = 10⁻⁴, [CrO₄²⁻] = 10⁻⁴',
    q: 1e-12,
    answer: 'saturated',
    explain: 'Q = (10⁻⁴)² × 10⁻⁴ = 10⁻¹² ≈ Ksp → saturated.',
  },
  {
    salt: 'Ag₂CrO₄ (A₂B)',
    ksp: 1.1e-12,
    cations: 1e-3,
    anions: 1e-3,
    label: '[Ag⁺] = 10⁻³, [CrO₄²⁻] = 10⁻³',
    q: 1e-9,
    answer: 'precipitate',
    explain: 'Q = (10⁻³)² × 10⁻³ = 10⁻⁹ ≫ Ksp → precipitate.',
  },
]
