// Ionic Equilibrium — content bank for Sai
// MCQs, NEET PYQs and numericals. Answers as option index (0–3).

export const mcqs = [
  {
    q: 'A <strong>strong electrolyte</strong> in aqueous solution:',
    options: [
      'Dissociates almost completely into ions',
      'Does not dissociate at all',
      'Dissociates only in the presence of a catalyst',
      'Dissociates only on heating'
    ],
    answer: 0,
    explain: 'Strong electrolytes (NaCl, HCl, NaOH, KNO<sub>3</sub>…) ionize ~100% in water. α ≈ 1.'
  },
  {
    q: 'Which of the following is a <strong>weak electrolyte</strong>?',
    options: ['HCl', 'NaOH', 'CH<sub>3</sub>COOH', 'KNO<sub>3</sub>'],
    answer: 2,
    explain: 'Acetic acid is a classic weak acid — it only partially ionizes (α ≈ 1.3% at 0.1 M).'
  },
  {
    q: 'Ostwald\'s dilution law applies to:',
    options: ['Strong acids', 'Strong bases', 'Weak electrolytes', 'All electrolytes'],
    answer: 2,
    explain: 'Ostwald\'s law: K<sub>a</sub> = Cα²/(1–α). Valid only for weak electrolytes where α is small.'
  },
  {
    q: 'For a weak acid of dissociation constant K<sub>a</sub> at concentration C, the degree of dissociation α is:',
    options: ['√(K<sub>a</sub>·C)', '√(K<sub>a</sub>/C)', 'K<sub>a</sub>/C', 'C/K<sub>a</sub>'],
    answer: 1,
    explain: 'From Ostwald\'s law with α << 1: α = √(K<sub>a</sub>/C). Dilution increases α.'
  },
  {
    q: 'Ionic product of water K<sub>w</sub> at 25 °C is:',
    options: ['10<sup>–7</sup>', '10<sup>–14</sup>', '10<sup>–12</sup>', '1'],
    answer: 1,
    explain: 'K<sub>w</sub> = [H<sup>+</sup>][OH<sup>–</sup>] = 10<sup>–14</sup> at 25 °C. It increases with temperature.'
  },
  {
    q: 'K<sub>w</sub> of water at 25 °C and 90 °C respectively are:',
    options: ['both 10<sup>–14</sup>', '10<sup>–14</sup> and 10<sup>–12</sup>', '10<sup>–12</sup> and 10<sup>–14</sup>', '10<sup>–7</sup> and 10<sup>–6</sup>'],
    answer: 1,
    explain: 'Self-ionization is endothermic, so K<sub>w</sub> increases with T. At 90 °C it is about 10<sup>–12</sup>.'
  },
  {
    q: 'According to Brønsted–Lowry concept, a base is a species that:',
    options: ['Donates a proton', 'Accepts a proton', 'Donates an electron pair', 'Accepts an electron pair'],
    answer: 1,
    explain: 'Brønsted base = proton acceptor. A Brønsted acid is a proton donor.'
  },
  {
    q: 'Which is a <strong>Lewis acid</strong> but NOT a Brønsted acid?',
    options: ['HCl', 'H<sub>2</sub>SO<sub>4</sub>', 'BF<sub>3</sub>', 'HNO<sub>3</sub>'],
    answer: 2,
    explain: 'BF<sub>3</sub> has an empty orbital on B — it accepts an electron pair (Lewis acid) but has no H to donate.'
  },
  {
    q: 'The conjugate base of H<sub>2</sub>PO<sub>4</sub><sup>–</sup> is:',
    options: ['H<sub>3</sub>PO<sub>4</sub>', 'HPO<sub>4</sub><sup>2–</sup>', 'PO<sub>4</sub><sup>3–</sup>', 'OH<sup>–</sup>'],
    answer: 1,
    explain: 'Remove one H<sup>+</sup> from H<sub>2</sub>PO<sub>4</sub><sup>–</sup> → HPO<sub>4</sub><sup>2–</sup>.'
  },
  {
    q: 'If the degree of ionization of a weak acid doubles on dilution, the concentration has been diluted by a factor of:',
    options: ['2', '4', '√2', '8'],
    answer: 1,
    explain: 'α ∝ 1/√C. If α doubles, √C must halve, so C becomes 1/4 — a 4× dilution.'
  },
  {
    q: 'Which of the following is NOT amphoteric (can act as both acid and base)?',
    options: ['H<sub>2</sub>O', 'NH<sub>3</sub>', 'HCO<sub>3</sub><sup>–</sup>', 'Cl<sup>–</sup>'],
    answer: 3,
    explain: 'Cl<sup>–</sup> is the conjugate base of a strong acid HCl — it has negligible tendency to accept H<sup>+</sup>.'
  },
  {
    q: 'The <strong>levelling effect</strong> of water means:',
    options: [
      'All acids ionize equally in water',
      'Strong acids appear equally strong (limited by H<sub>3</sub>O<sup>+</sup>)',
      'Weak acids become strong in water',
      'Water neutralizes any acid'
    ],
    answer: 1,
    explain: 'In water, the strongest acid that can exist is H<sub>3</sub>O<sup>+</sup>. So HCl, HClO<sub>4</sub>, HBr all appear equally strong — their difference is "levelled".'
  },
  {
    q: 'At infinite dilution, degree of dissociation of a weak electrolyte approaches:',
    options: ['0', '0.5', '1', '∞'],
    answer: 2,
    explain: 'α → 1 at infinite dilution (complete ionization). This is used in molar conductivity Λ<sup>0</sup> analysis.'
  },
  {
    q: 'Which is the strongest conjugate base?',
    options: ['Cl<sup>–</sup>', 'CH<sub>3</sub>COO<sup>–</sup>', 'F<sup>–</sup>', 'NO<sub>3</sub><sup>–</sup>'],
    answer: 1,
    explain: 'The weaker the parent acid, the stronger the conjugate base. Acetic acid is the weakest here → CH<sub>3</sub>COO<sup>–</sup> is the strongest conjugate base.'
  },
  {
    q: 'For pure water, degree of dissociation α at 25 °C is approximately:',
    options: ['1.8 × 10<sup>–9</sup>', '1.8 × 10<sup>–7</sup>', '10<sup>–14</sup>', '10<sup>–3</sup>'],
    answer: 0,
    explain: '[H<sup>+</sup>] = 10<sup>–7</sup> M, [H<sub>2</sub>O] ≈ 55.5 M. α = 10<sup>–7</sup>/55.5 ≈ 1.8 × 10<sup>–9</sup>.'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2023]</b> The conjugate acid of HPO<sub>4</sub><sup>2–</sup> is:',
    options: ['H<sub>3</sub>PO<sub>4</sub>', 'H<sub>2</sub>PO<sub>4</sub><sup>–</sup>', 'PO<sub>4</sub><sup>3–</sup>', 'H<sub>3</sub>O<sup>+</sup>'],
    answer: 1,
    explain: 'Conjugate acid = add one H<sup>+</sup>. HPO<sub>4</sub><sup>2–</sup> + H<sup>+</sup> → H<sub>2</sub>PO<sub>4</sub><sup>–</sup>.'
  },
  {
    q: '<b>[NEET 2021]</b> For the reaction NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup>, the conjugate acid–base pairs are:',
    options: [
      'NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> and H<sub>2</sub>O/OH<sup>–</sup>',
      'NH<sub>3</sub>/OH<sup>–</sup> and H<sub>2</sub>O/NH<sub>4</sub><sup>+</sup>',
      'NH<sub>4</sub><sup>+</sup>/OH<sup>–</sup> only',
      'NH<sub>3</sub>/H<sub>2</sub>O only'
    ],
    answer: 0,
    explain: 'NH<sub>3</sub> gains H<sup>+</sup> → NH<sub>4</sub><sup>+</sup> (conjugate acid). H<sub>2</sub>O loses H<sup>+</sup> → OH<sup>–</sup> (conjugate base).'
  },
  {
    q: '<b>[NEET 2020]</b> The degree of dissociation of a 0.01 M acetic acid (K<sub>a</sub> = 1.8 × 10<sup>–5</sup>) is approximately:',
    options: ['0.042', '0.01', '0.13', '0.001'],
    answer: 0,
    explain: 'α = √(K<sub>a</sub>/C) = √(1.8 × 10<sup>–5</sup>/0.01) = √(1.8 × 10<sup>–3</sup>) ≈ 0.042 (4.2%).'
  },
  {
    q: '<b>[NEET 2019]</b> Which one is a Lewis acid?',
    options: ['NH<sub>3</sub>', 'H<sub>2</sub>O', 'AlCl<sub>3</sub>', 'CH<sub>4</sub>'],
    answer: 2,
    explain: 'AlCl<sub>3</sub>: Al has only 6 electrons (incomplete octet) and accepts an electron pair — classic Lewis acid.'
  },
  {
    q: '<b>[AIPMT 2015]</b> The ionisation constant of a weak monobasic acid is 4 × 10<sup>–10</sup>. The degree of ionisation in 0.1 M solution is:',
    options: ['2 × 10<sup>–5</sup>', '6.3 × 10<sup>–5</sup>', '4 × 10<sup>–5</sup>', '1 × 10<sup>–4</sup>'],
    answer: 1,
    explain: 'α = √(K<sub>a</sub>/C) = √(4 × 10<sup>–10</sup>/0.1) = √(4 × 10<sup>–9</sup>) = 2 × 10<sup>–4.5</sup> ≈ 6.3 × 10<sup>–5</sup>.'
  },
  {
    q: '<b>[NEET 2016]</b> The concentration of H<sup>+</sup> in pure water at 50 °C (K<sub>w</sub> = 5.5 × 10<sup>–14</sup>) is:',
    options: ['2.3 × 10<sup>–7</sup> M', '1 × 10<sup>–7</sup> M', '5.5 × 10<sup>–14</sup> M', '7 M'],
    answer: 0,
    explain: '[H<sup>+</sup>] = √K<sub>w</sub> = √(5.5 × 10<sup>–14</sup>) ≈ 2.35 × 10<sup>–7</sup> M. (Water is still neutral but pH < 7.)'
  },
  {
    q: '<b>[AIPMT 2012]</b> Which of the following is the strongest Lewis base?',
    options: ['F<sup>–</sup>', 'Cl<sup>–</sup>', 'Br<sup>–</sup>', 'I<sup>–</sup>'],
    answer: 0,
    explain: 'F<sup>–</sup> is the smallest and most electron-rich → strongest Lewis base (best electron-pair donor) among the halides toward hard acids.'
  },
  {
    q: '<b>[NEET 2018]</b> The dissociation constant of HF, HCOOH and HCN at 25°C are 6.8 × 10<sup>–4</sup>, 1.8 × 10<sup>–4</sup> and 4.8 × 10<sup>–9</sup> respectively. The order of the acid strength is:',
    options: ['HF > HCOOH > HCN', 'HCN > HCOOH > HF', 'HCOOH > HF > HCN', 'HF > HCN > HCOOH'],
    answer: 0,
    explain: 'Higher K<sub>a</sub> → stronger acid. 6.8 × 10<sup>–4</sup> > 1.8 × 10<sup>–4</sup> > 4.8 × 10<sup>–9</sup>, so HF > HCOOH > HCN.'
  },
]

export const numericals = [
  {
    q: 'Calculate the degree of dissociation of 0.01 M acetic acid. K<sub>a</sub> = 1.8 × 10<sup>–5</sup>.',
    tag: 'Ostwald\'s law',
    steps: [
      'Use α = √(K<sub>a</sub>/C) for a weak acid where α << 1.',
      'α = √(1.8 × 10<sup>–5</sup>/0.01)',
      'α = √(1.8 × 10<sup>–3</sup>)',
      'α ≈ 4.24 × 10<sup>–2</sup>',
    ],
    answer: 'α ≈ 0.0424 (i.e., ~4.24%)'
  },
  {
    q: 'A 0.1 M solution of a weak acid HA is 1.0% ionized. Calculate its K<sub>a</sub>.',
    tag: 'Ka from α',
    steps: [
      'α = 0.01. C = 0.1 M.',
      'K<sub>a</sub> = Cα²/(1–α) ≈ Cα² (since α is small).',
      'K<sub>a</sub> = 0.1 × (0.01)²',
      'K<sub>a</sub> = 0.1 × 10<sup>–4</sup>',
    ],
    answer: 'K<sub>a</sub> = 1.0 × 10<sup>–5</sup>'
  },
  {
    q: 'Calculate [H<sup>+</sup>] and [OH<sup>–</sup>] in pure water at 25 °C.',
    tag: 'Kw basics',
    steps: [
      'In pure water, [H<sup>+</sup>] = [OH<sup>–</sup>] = x.',
      'K<sub>w</sub> = [H<sup>+</sup>][OH<sup>–</sup>] = x² = 10<sup>–14</sup>',
      'x = 10<sup>–7</sup> M',
    ],
    answer: '[H<sup>+</sup>] = [OH<sup>–</sup>] = 10<sup>–7</sup> M'
  },
  {
    q: 'The ionization constant of NH<sub>4</sub>OH is 1.8 × 10<sup>–5</sup>. Calculate the concentration of OH<sup>–</sup> ions in 0.01 M solution.',
    tag: 'Weak base',
    steps: [
      'For a weak base: α = √(K<sub>b</sub>/C) = √(1.8 × 10<sup>–5</sup>/0.01) = √(1.8 × 10<sup>–3</sup>) ≈ 0.0424.',
      '[OH<sup>–</sup>] = Cα = 0.01 × 0.0424',
      '[OH<sup>–</sup>] ≈ 4.24 × 10<sup>–4</sup> M',
    ],
    answer: '[OH<sup>–</sup>] ≈ 4.24 × 10<sup>–4</sup> M'
  },
  {
    q: 'If 0.1 M HCOOH has K<sub>a</sub> = 1.8 × 10<sup>–4</sup>, what is [H<sup>+</sup>]?',
    tag: 'Weak acid [H+]',
    steps: [
      '[H<sup>+</sup>] = √(K<sub>a</sub> × C) for a weak acid (α small).',
      '[H<sup>+</sup>] = √(1.8 × 10<sup>–4</sup> × 0.1)',
      '[H<sup>+</sup>] = √(1.8 × 10<sup>–5</sup>)',
      '[H<sup>+</sup>] ≈ 4.24 × 10<sup>–3</sup> M',
    ],
    answer: '[H<sup>+</sup>] ≈ 4.24 × 10<sup>–3</sup> M'
  },
  {
    q: 'For water at 60 °C, K<sub>w</sub> = 9.6 × 10<sup>–14</sup>. What is [H<sup>+</sup>] in pure water at this temperature?',
    tag: 'Kw at high T',
    steps: [
      '[H<sup>+</sup>] = [OH<sup>–</sup>] = √K<sub>w</sub>',
      '[H<sup>+</sup>] = √(9.6 × 10<sup>–14</sup>)',
      '[H<sup>+</sup>] ≈ 3.1 × 10<sup>–7</sup> M',
      'Note: Water is still neutral, but pH ≈ 6.51 < 7 because K<sub>w</sub> grew.',
    ],
    answer: '[H<sup>+</sup>] ≈ 3.1 × 10<sup>–7</sup> M (pH ≈ 6.51 but still neutral)'
  },
]
