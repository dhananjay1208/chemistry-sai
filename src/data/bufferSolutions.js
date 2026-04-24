// Buffer Solutions — content bank for Sai

export const mcqs = [
  {
    q: 'A buffer solution:',
    options: [
      'Is a pure acid',
      'Is a pure base',
      'Resists change in pH on addition of small amounts of acid or base',
      'Has pH exactly 7'
    ],
    answer: 2,
    explain: 'Buffers = weak acid + its salt (or weak base + its salt). They resist pH change on small additions of H<sup>+</sup> or OH<sup>–</sup>.'
  },
  {
    q: 'An acidic buffer is formed by:',
    options: [
      'Weak acid + strong base',
      'Weak acid + salt of its conjugate base',
      'Strong acid + its salt',
      'Strong acid + strong base'
    ],
    answer: 1,
    explain: 'Acidic buffer example: CH<sub>3</sub>COOH + CH<sub>3</sub>COONa.'
  },
  {
    q: 'A basic buffer is made by:',
    options: [
      'NaOH + NaCl',
      'NH<sub>4</sub>OH + NH<sub>4</sub>Cl',
      'HCl + NaCl',
      'KOH + KCl'
    ],
    answer: 1,
    explain: 'Basic buffer = weak base + salt of strong acid. Classic: NH<sub>4</sub>OH + NH<sub>4</sub>Cl.'
  },
  {
    q: 'The Henderson–Hasselbalch equation for an acidic buffer is:',
    options: [
      'pH = pK<sub>a</sub> + log([salt]/[acid])',
      'pH = pK<sub>a</sub> + log([acid]/[salt])',
      'pH = pK<sub>b</sub> + log([salt]/[base])',
      'pH = pK<sub>w</sub> – pK<sub>a</sub>'
    ],
    answer: 0,
    explain: 'pH = pK<sub>a</sub> + log([A<sup>–</sup>]/[HA]) = pK<sub>a</sub> + log([salt]/[acid]).'
  },
  {
    q: 'For a basic buffer:',
    options: [
      'pOH = pK<sub>b</sub> + log([salt]/[base])',
      'pH = pK<sub>b</sub> + log([salt]/[base])',
      'pOH = pK<sub>b</sub> – log([salt]/[base])',
      'pH = pK<sub>a</sub> – log([salt]/[base])'
    ],
    answer: 0,
    explain: 'pOH = pK<sub>b</sub> + log([salt]/[base]), then pH = 14 – pOH.'
  },
  {
    q: 'At maximum buffer capacity, the ratio [salt]/[acid] equals:',
    options: ['0', '1', '10', '100'],
    answer: 1,
    explain: 'Maximum buffering capacity when [salt] = [acid], i.e., pH = pK<sub>a</sub>.'
  },
  {
    q: 'A buffer of pH 4.74 can be made by mixing equal moles of:',
    options: [
      'HCl + NaCl',
      'CH<sub>3</sub>COOH + CH<sub>3</sub>COONa',
      'NH<sub>4</sub>OH + NH<sub>4</sub>Cl',
      'H<sub>2</sub>SO<sub>4</sub> + Na<sub>2</sub>SO<sub>4</sub>'
    ],
    answer: 1,
    explain: 'pK<sub>a</sub>(CH<sub>3</sub>COOH) = 4.74. Equal moles → pH = pK<sub>a</sub> + log(1) = 4.74.'
  },
  {
    q: 'The pH of blood is maintained at ~7.4 largely by which buffer system?',
    options: [
      'NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub>',
      'HCO<sub>3</sub><sup>–</sup>/H<sub>2</sub>CO<sub>3</sub>',
      'H<sub>3</sub>PO<sub>4</sub>/H<sub>2</sub>PO<sub>4</sub><sup>–</sup>',
      'HCl/Cl<sup>–</sup>'
    ],
    answer: 1,
    explain: 'Blood buffer: carbonic acid / bicarbonate (H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>–</sup>). pK<sub>a1</sub>(H<sub>2</sub>CO<sub>3</sub>) ≈ 6.1.'
  },
  {
    q: 'A buffer resists change in pH best when:',
    options: [
      '[salt] >> [acid]',
      '[acid] >> [salt]',
      '[salt] ≈ [acid]',
      'Buffer is very dilute'
    ],
    answer: 2,
    explain: 'Buffer capacity peaks when equal concentrations of conjugate pair → changes in either direction absorbed equally.'
  },
  {
    q: 'If an acidic buffer contains 0.1 mol acid and 0.1 mol salt in 1 L (pK<sub>a</sub> = 5), its pH is:',
    options: ['4', '5', '6', '7'],
    answer: 1,
    explain: 'pH = pK<sub>a</sub> + log(0.1/0.1) = 5 + 0 = 5.'
  },
  {
    q: 'Addition of a few drops of HCl to a buffer causes pH to:',
    options: [
      'Drop sharply',
      'Rise sharply',
      'Change only very slightly',
      'Remain exactly the same'
    ],
    answer: 2,
    explain: 'H<sup>+</sup> is absorbed by the conjugate base (salt). pH changes slightly, not sharply — essence of buffering.'
  },
  {
    q: 'For an acidic buffer of 0.2 M CH<sub>3</sub>COOH and 0.1 M CH<sub>3</sub>COONa (pK<sub>a</sub> = 4.74), pH is:',
    options: ['4.74', '5.04', '4.44', '3.04'],
    answer: 2,
    explain: 'pH = 4.74 + log(0.1/0.2) = 4.74 + log(0.5) = 4.74 – 0.30 = 4.44.'
  },
  {
    q: 'Which of the following pairs does NOT form a buffer?',
    options: [
      'CH<sub>3</sub>COOH + CH<sub>3</sub>COONa',
      'NH<sub>4</sub>OH + NH<sub>4</sub>Cl',
      'HCl + NaCl',
      'H<sub>2</sub>CO<sub>3</sub> + NaHCO<sub>3</sub>'
    ],
    answer: 2,
    explain: 'HCl is a STRONG acid. Strong acid + its salt is NOT a buffer.'
  },
  {
    q: 'Buffer capacity is defined as moles of acid/base needed to change pH of 1 L buffer by:',
    options: ['0.1 unit', '1 unit', '7 units', '14 units'],
    answer: 1,
    explain: 'Buffer capacity β = dn/d(pH). Usually quoted per 1 pH unit change in 1 L.'
  },
  {
    q: 'On diluting a buffer solution:',
    options: [
      'pH changes drastically',
      'pH remains nearly unchanged',
      'pH increases by 2 units',
      'pH decreases to 7'
    ],
    answer: 1,
    explain: 'Henderson: pH depends on ratio [salt]/[acid], which is unchanged on dilution (both dilute equally).'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2023]</b> A buffer solution of pH 9.26 is made by mixing 0.1 M NH<sub>4</sub>Cl with 0.1 M NH<sub>4</sub>OH (K<sub>b</sub> = 1.8 × 10<sup>–5</sup>). Which of the following statements is TRUE?',
    options: [
      'Ratio [salt]:[base] is 1:1',
      'Buffer has pH = pK<sub>a</sub>',
      'Buffer has pH = 14 – pK<sub>b</sub>',
      'All of the above'
    ],
    answer: 3,
    explain: 'pOH = pK<sub>b</sub> + log(1) = 4.74 → pH = 14 – 4.74 = 9.26. Also equals 14 – pK<sub>b</sub>. All true.'
  },
  {
    q: '<b>[NEET 2022]</b> The Henderson equation for pH of a buffer solution of weak acid HA and its salt NaA is:',
    options: [
      'pH = pK<sub>a</sub> + log([HA]/[A<sup>–</sup>])',
      'pH = pK<sub>a</sub> + log([A<sup>–</sup>]/[HA])',
      'pH = pK<sub>w</sub> – pK<sub>a</sub>',
      'pH = log([A<sup>–</sup>]/[HA])'
    ],
    answer: 1,
    explain: 'Henderson–Hasselbalch: pH = pK<sub>a</sub> + log([conjugate base]/[acid]).'
  },
  {
    q: '<b>[NEET 2020]</b> Which of the following mixtures forms a buffer solution of pH ≈ 9?',
    options: [
      '100 mL 0.1 M HCl + 100 mL 0.1 M NaOH',
      '100 mL 0.1 M NH<sub>4</sub>Cl + 100 mL 0.1 M NH<sub>4</sub>OH',
      '100 mL 0.1 M HCl + 100 mL 0.1 M NaCl',
      '100 mL 0.1 M NaOH + 100 mL 0.1 M NaCl'
    ],
    answer: 1,
    explain: 'NH<sub>4</sub>OH + NH<sub>4</sub>Cl in 1:1 → basic buffer at pH = pK<sub>a</sub>(NH<sub>4</sub><sup>+</sup>) = 14 – pK<sub>b</sub>(NH<sub>3</sub>) ≈ 9.26.'
  },
  {
    q: '<b>[NEET 2018]</b> The pH of a buffer is 4.44. If equal volumes of this buffer and water are mixed, the pH of resulting solution is:',
    options: ['4.44', 'Close to 7', 'Close to 4.44', '3.44'],
    answer: 2,
    explain: 'Buffer pH depends on [salt]/[acid] ratio — dilution does NOT change ratio → pH ≈ 4.44 (essentially unchanged).'
  },
  {
    q: '<b>[NEET 2017]</b> A buffer solution contains 0.2 M NH<sub>4</sub>OH and 0.2 M NH<sub>4</sub>Cl. If K<sub>b</sub>(NH<sub>4</sub>OH) = 1.8 × 10<sup>–5</sup>, its pH is:',
    options: ['4.74', '9.26', '5.26', '7'],
    answer: 1,
    explain: 'Basic buffer: pOH = pK<sub>b</sub> + log([salt]/[base]) = 4.74 + 0 = 4.74 → pH = 9.26.'
  },
  {
    q: '<b>[AIPMT 2015]</b> For the reaction: CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O, 40 mL of 0.1 M NaOH is added to 50 mL of 0.1 M CH<sub>3</sub>COOH (pK<sub>a</sub> = 4.74). pH of resulting buffer is:',
    options: ['4.14', '4.74', '5.34', '6.00'],
    answer: 2,
    explain: 'mol CH<sub>3</sub>COOH initial = 5 mmol. NaOH added = 4 mmol → 4 mmol CH<sub>3</sub>COONa, 1 mmol CH<sub>3</sub>COOH left. pH = 4.74 + log(4/1) = 4.74 + 0.60 = 5.34.'
  },
  {
    q: '<b>[NEET 2014]</b> The addition of which of the following will make pH of a buffer of pH 4.74 move closer to 5?',
    options: [
      'A little HCl',
      'A little NaOH',
      'Water',
      'No effect possible'
    ],
    answer: 1,
    explain: 'Adding OH<sup>–</sup> increases [salt], reduces [acid] → pH goes up slightly (toward 5). Adding HCl would push pH down.'
  },
  {
    q: '<b>[AIPMT 2012]</b> A human body normally has blood pH buffered near 7.4. The most important buffer responsible is:',
    options: [
      'H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>–</sup>',
      'H<sub>3</sub>PO<sub>4</sub>/H<sub>2</sub>PO<sub>4</sub><sup>–</sup>',
      'Protein buffer',
      'Hemoglobin buffer'
    ],
    answer: 0,
    explain: 'Bicarbonate buffer (HCO<sub>3</sub><sup>–</sup>/H<sub>2</sub>CO<sub>3</sub>) is the dominant plasma buffer for extracellular pH.'
  },
]

export const numericals = [
  {
    q: 'Calculate pH of a buffer prepared by mixing 0.2 M CH<sub>3</sub>COOH and 0.3 M CH<sub>3</sub>COONa (pK<sub>a</sub> = 4.74).',
    tag: 'Acidic buffer',
    steps: [
      'pH = pK<sub>a</sub> + log([salt]/[acid])',
      'pH = 4.74 + log(0.3/0.2)',
      'pH = 4.74 + log(1.5) = 4.74 + 0.176',
      'pH = 4.92',
    ],
    answer: 'pH ≈ 4.92'
  },
  {
    q: '50 mL of 0.1 M CH<sub>3</sub>COOH is mixed with 25 mL of 0.1 M NaOH. Find pH (pK<sub>a</sub> = 4.74).',
    tag: 'Buffer by partial neutralization',
    steps: [
      'mol CH<sub>3</sub>COOH = 5 mmol. mol NaOH = 2.5 mmol.',
      'After reaction: salt (CH<sub>3</sub>COONa) = 2.5 mmol; acid left = 2.5 mmol.',
      'Total V = 75 mL → [salt] = [acid] = 2.5/75 M (same).',
      'pH = pK<sub>a</sub> + log(1) = 4.74.',
    ],
    answer: 'pH = 4.74 (half-equivalence)'
  },
  {
    q: 'A basic buffer has 0.1 M NH<sub>3</sub> and 0.2 M NH<sub>4</sub>Cl. pK<sub>b</sub>(NH<sub>3</sub>) = 4.74. Find pH.',
    tag: 'Basic buffer',
    steps: [
      'pOH = pK<sub>b</sub> + log([salt]/[base])',
      'pOH = 4.74 + log(0.2/0.1) = 4.74 + 0.30 = 5.04',
      'pH = 14 – 5.04 = 8.96',
    ],
    answer: 'pH ≈ 8.96'
  },
  {
    q: 'How many moles of CH<sub>3</sub>COONa must be added to 1 L of 0.1 M CH<sub>3</sub>COOH (pK<sub>a</sub> = 4.74) to make a buffer of pH 5.04?',
    tag: 'Reverse Henderson',
    steps: [
      '5.04 = 4.74 + log([salt]/0.1)',
      'log([salt]/0.1) = 0.30',
      '[salt]/0.1 = 10<sup>0.30</sup> = 2',
      '[salt] = 0.2 M → 0.2 mol in 1 L',
    ],
    answer: '0.2 mol of CH<sub>3</sub>COONa'
  },
  {
    q: 'On adding 0.01 mol HCl to 1 L of buffer containing 0.1 M CH<sub>3</sub>COOH + 0.1 M CH<sub>3</sub>COONa, find new pH (pK<sub>a</sub> = 4.74).',
    tag: 'Buffer stress test',
    steps: [
      'HCl reacts with CH<sub>3</sub>COONa → CH<sub>3</sub>COOH + NaCl.',
      'New [salt] = 0.1 – 0.01 = 0.09 M. New [acid] = 0.1 + 0.01 = 0.11 M.',
      'pH = 4.74 + log(0.09/0.11) = 4.74 + log(0.818)',
      'pH = 4.74 – 0.087 = 4.65',
    ],
    answer: 'pH ≈ 4.65 (only ~0.09 unit drop)'
  },
  {
    q: 'Calculate the ratio [HCO<sub>3</sub><sup>–</sup>]/[H<sub>2</sub>CO<sub>3</sub>] needed to buffer blood at pH 7.4 (pK<sub>a1</sub>(H<sub>2</sub>CO<sub>3</sub>) = 6.1).',
    tag: 'Blood buffer',
    steps: [
      '7.4 = 6.1 + log([HCO<sub>3</sub><sup>–</sup>]/[H<sub>2</sub>CO<sub>3</sub>])',
      'log(ratio) = 1.3',
      'ratio = 10<sup>1.3</sup> ≈ 20',
    ],
    answer: '[HCO<sub>3</sub><sup>–</sup>] : [H<sub>2</sub>CO<sub>3</sub>] ≈ 20 : 1'
  },
]

// Which-Buffer? Game — pick the right buffer for the target pH.
export const gameCards = [
  {
    targetPH: 4.74,
    description: 'Need a buffer at pH 4.74',
    choices: [
      'CH₃COOH + CH₃COONa (equal moles)',
      'HCl + NaCl',
      'NH₄OH + NH₄Cl (equal moles)',
      'NaOH + Na₂SO₄',
    ],
    answer: 0,
    explain: 'pKa(acetic acid) = 4.74 → equal moles gives pH = pKa.',
  },
  {
    targetPH: 9.26,
    description: 'Need a buffer at pH 9.26',
    choices: [
      'CH₃COOH + CH₃COONa (equal moles)',
      'NH₄OH + NH₄Cl (equal moles)',
      'HCl + NH₄Cl',
      'NaCl + H₂SO₄',
    ],
    answer: 1,
    explain: 'NH₃/NH₄⁺ buffer: pH = 14 – pKb = 14 – 4.74 = 9.26.',
  },
  {
    targetPH: 7.21,
    description: 'Need a buffer at pH 7.21',
    choices: [
      'H₃PO₄ + NaH₂PO₄ (pKa1 ≈ 2.1)',
      'NaH₂PO₄ + Na₂HPO₄ (pKa2 ≈ 7.2)',
      'Na₂HPO₄ + Na₃PO₄ (pKa3 ≈ 12.4)',
      'HCl + NaCl',
    ],
    answer: 1,
    explain: 'Use the pKa closest to the target pH. pKa2 of phosphoric acid ≈ 7.21.',
  },
  {
    targetPH: 5.74,
    description: 'Need pH 5.74 using acetic acid (pKa 4.74)',
    choices: [
      '0.1 M CH₃COOH + 0.1 M CH₃COONa',
      '0.1 M CH₃COOH + 1.0 M CH₃COONa',
      '1.0 M CH₃COOH + 0.1 M CH₃COONa',
      'HCl + NaCl',
    ],
    answer: 1,
    explain: 'pH = 4.74 + log(1.0/0.1) = 4.74 + 1 = 5.74.',
  },
  {
    targetPH: 3.74,
    description: 'Need pH 3.74 using acetic acid (pKa 4.74)',
    choices: [
      '0.1 M CH₃COOH + 0.1 M CH₃COONa',
      '0.1 M CH₃COOH + 1.0 M CH₃COONa',
      '1.0 M CH₃COOH + 0.1 M CH₃COONa',
      '0.01 M CH₃COOH + 0.1 M CH₃COONa',
    ],
    answer: 2,
    explain: 'pH = 4.74 + log(0.1/1.0) = 4.74 – 1 = 3.74.',
  },
  {
    targetPH: 10.26,
    description: 'Need a basic buffer at pH 10.26',
    choices: [
      '0.1 M NH₄OH + 0.1 M NH₄Cl',
      '0.1 M NH₄OH + 0.01 M NH₄Cl',
      '0.01 M NH₄OH + 0.1 M NH₄Cl',
      'HCl + NaCl',
    ],
    answer: 1,
    explain: 'pOH = 4.74 + log(0.01/0.1) = 4.74 – 1 = 3.74 → pH = 10.26.',
  },
  {
    targetPH: 7.4,
    description: 'Which buffer maintains blood pH 7.4?',
    choices: [
      'NH₄OH + NH₄Cl',
      'H₂CO₃ + HCO₃⁻ (ratio 1:20)',
      'CH₃COOH + CH₃COONa',
      'HCl + NaCl',
    ],
    answer: 1,
    explain: 'Carbonic acid / bicarbonate is the plasma buffer at roughly 1:20 ratio for pH 7.4.',
  },
  {
    targetPH: 2.1,
    description: 'Need buffer at pH ~2.1',
    choices: [
      'H₃PO₄ + NaH₂PO₄ (pKa1 ≈ 2.1)',
      'CH₃COOH + CH₃COONa',
      'NH₄OH + NH₄Cl',
      'NaHCO₃ + Na₂CO₃',
    ],
    answer: 0,
    explain: 'Match pKa ≈ target pH. H₃PO₄/H₂PO₄⁻ has pKa1 ≈ 2.1.',
  },
  {
    targetPH: 4.74,
    description: 'Which combination does NOT give a buffer?',
    choices: [
      'CH₃COOH + CH₃COONa',
      'HCl + NaCl',
      'NH₄OH + NH₄Cl',
      'H₂CO₃ + NaHCO₃',
    ],
    answer: 1,
    explain: 'HCl is a strong acid → strong acid + its salt is NOT a buffer.',
  },
  {
    targetPH: 4.44,
    description: 'Buffer of 0.2 M CH₃COOH + 0.1 M CH₃COONa gives pH (pKa 4.74)?',
    choices: ['4.44', '4.74', '5.04', '5.34'],
    answer: 0,
    explain: 'pH = 4.74 + log(0.1/0.2) = 4.74 – 0.30 = 4.44.',
  },
]
